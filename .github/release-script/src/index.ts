import { spawn } from "node:child_process";
import { readdir, readFile, stat } from "node:fs/promises";
import { basename, dirname, join } from "node:path";

// Configuration and types
interface Config {
	token?: string;
	registry: string;
	timeoutSec: number;
	dryRun: boolean;
	continueOnError: boolean;
}

interface Package {
	name: string;
	version: string;
	rootFolder: string;
}

interface PackageStatus {
	exists: boolean;
	versions: string[];
	latestVersion?: string;
}

type ProcessResult = "already-published" | "created" | "updated" | "dry-run-create" | "dry-run-update" | "error";

interface BatchResult {
	result: ProcessResult;
	pkg: Package;
	error?: string;
}

// Constants
const DEFAULT_REGISTRY = "https://registry.npmjs.org/";
const DEFAULT_TIMEOUT_SEC = 300;
const BATCH_SIZE = 5;
const BATCH_DELAY_MS = 3000;
const API_TIMEOUT_MS = 10000;

// Utility functions
function showUsage(): void {
	console.log("Usage: node index.js [options]");
	console.log("");
	console.log("Options:");
	console.log("  --dry-run, -d           Show what would be published without actually publishing");
	console.log("  --continue-on-error, -c Continue processing even if some packages fail");
	console.log("  --help, -h              Show this help message");
	console.log("");
	console.log("Environment variables:");
	console.log("  NODE_AUTH_TOKEN        NPM authentication token (required)");
	console.log("  NPM_REGISTRY           NPM registry URL (default: https://registry.npmjs.org/)");
	console.log("  NPM_TIMEOUT_SEC        Timeout in seconds (default: 300)");
	console.log("");
}

function normalizeRegistryUrl(url: string): string {
	let result = url;
	if (!result.startsWith("http")) {
		result = `https://${result}`;
	}
	return result.endsWith("/") ? result : `${result}/`;
}

function parseArgs(): Pick<Config, "dryRun" | "continueOnError"> {
	const args = process.argv;
	return {
		dryRun: args.includes("--dry-run") || args.includes("-d"),
		continueOnError: args.includes("--continue-on-error") || args.includes("-c"),
	};
}

function getEnvConfig(): Pick<Config, "token" | "registry" | "timeoutSec"> {
	const token = process.env.NODE_AUTH_TOKEN;
	const registry = normalizeRegistryUrl(process.env.NPM_REGISTRY || DEFAULT_REGISTRY);
	const timeoutSec = process.env.NPM_TIMEOUT_SEC
		? Number.parseInt(process.env.NPM_TIMEOUT_SEC, 10)
		: DEFAULT_TIMEOUT_SEC;

	if (Number.isNaN(timeoutSec)) {
		throw new Error(`Invalid timeout value: ${process.env.NPM_TIMEOUT_SEC}`);
	}

	return { token, registry, timeoutSec };
}

function createConfig(): Config {
	if (process.argv.includes("--help") || process.argv.includes("-h")) {
		showUsage();
		process.exit(0);
	}

	const args = parseArgs();
	const env = getEnvConfig();

	if (!args.dryRun && !env.token) {
		throw new Error("NODE_AUTH_TOKEN environment variable is required");
	}

	return { ...args, ...env };
}

// File system utilities
async function findAllPackageFiles(rootDir: string): Promise<string[]> {
	const result: string[] = [];

	async function traverse(dir: string): Promise<void> {
		const entries = await readdir(dir);

		for (const entry of entries) {
			const fullPath = join(dir, entry);
			const stats = await stat(fullPath);

			if (stats.isDirectory()) {
				// Skip release-script directory
				if (!fullPath.includes(".github/release-script")) {
					await traverse(fullPath);
				}
			} else if (basename(fullPath) === "package.json") {
				result.push(fullPath);
			}
		}
	}

	await traverse(rootDir);
	return result;
}

async function parsePackageJson(packageFile: string): Promise<Package> {
	const content = await readFile(packageFile, "utf-8");
	const data = JSON.parse(content) as Record<string, unknown>;

	if (typeof data.name !== "string" || typeof data.version !== "string") {
		throw new Error(`Invalid package.json at ${packageFile}: missing name or version`);
	}

	return {
		name: data.name,
		version: data.version,
		rootFolder: dirname(packageFile),
	};
}

// NPM API utilities
async function checkPackageStatus(pkg: Package, registry: string): Promise<PackageStatus> {
	console.log(`🔍 Checking ${pkg.name}...`);

	try {
		const url = `${registry}${encodeURIComponent(pkg.name)}`;
		const response = await fetch(url, {
			headers: {
				Accept: "application/json",
				"User-Agent": "ts-for-gir-release-script/1.0.0",
			},
			signal: AbortSignal.timeout(API_TIMEOUT_MS),
		});

		if (response.status === 404) {
			console.log(`📦 ${pkg.name} - new package`);
			return { exists: false, versions: [] };
		}

		if (!response.ok) {
			console.log(`⚠️  ${pkg.name} - API error ${response.status}, treating as new`);
			return { exists: false, versions: [] };
		}

		const data = await response.json();
		const versions = Object.keys(data.versions || {});
		const latestVersion = data["dist-tags"]?.latest;

		console.log(`✅ ${pkg.name} - exists (${versions.length} versions)`);
		return { exists: true, versions, latestVersion };
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		console.log(`⚠️  ${pkg.name} - check failed: ${message}`);
		return { exists: false, versions: [] };
	}
}

// Publishing utilities
async function publishPackage(pkg: Package, config: Config): Promise<void> {
	if (config.dryRun) {
		console.log(`📦 [DRY RUN] Would publish ${pkg.name}@${pkg.version}`);
		return;
	}

	console.log(`🚀 Publishing ${pkg.name}@${pkg.version}...`);

	return new Promise((resolve, reject) => {
		const timeoutId = setTimeout(() => {
			reject(new Error(`Timeout after ${config.timeoutSec}s for ${pkg.name}`));
		}, config.timeoutSec * 1000);

		const env = { ...process.env, NODE_AUTH_TOKEN: config.token };
		const args = ["publish", "--tag", "latest", "--access", "public", "--provenance", "--registry", config.registry];

		const proc = spawn("npm", args, {
			cwd: pkg.rootFolder,
			env,
			shell: true,
			stdio: "pipe",
		});

		let stderr = "";

		proc.stderr.on("data", (data) => {
			stderr += data.toString();
		});

		proc.on("error", (err) => {
			clearTimeout(timeoutId);
			reject(new Error(`Spawn error for ${pkg.name}: ${err.message}`));
		});

		proc.on("exit", (code) => {
			clearTimeout(timeoutId);

			if (code === 0) {
				console.log(`✅ Published ${pkg.name}@${pkg.version}`);
				resolve();
				return;
			}

			// Handle common npm publish errors
			if (
				stderr.includes("You cannot publish over the previously published versions") ||
				stderr.includes("Cannot publish over existing version")
			) {
				console.log(`⚠️  ${pkg.name}@${pkg.version} already published`);
				resolve();
				return;
			}

			if (stderr.includes("404 Not Found") && stderr.includes("organization")) {
				const orgName = pkg.name.split("/")[0];
				reject(new Error(`Organization '${orgName}' not found. Create it at https://www.npmjs.com/org/create`));
				return;
			}

			reject(new Error(`Failed to publish ${pkg.name}: ${stderr.trim() || `exit code ${code}`}`));
		});
	});
}

async function collectPackages(): Promise<Package[]> {
	// Get project root (3 levels up from .github/release-script/src/)
	const scriptDir = new URL(".", import.meta.url).pathname;
	const projectRoot = join(scriptDir, "..", "..", "..");

	console.log(`📁 Scanning ${projectRoot} for packages...`);

	const packageFiles = await findAllPackageFiles(projectRoot);
	console.log(`📦 Found ${packageFiles.length} package.json files`);

	const packages = await Promise.all(packageFiles.map((file) => parsePackageJson(file)));

	return packages;
}

async function testNpmAuth(config: Config): Promise<void> {
	if (config.dryRun) return;

	console.log("🔐 Testing npm authentication...");

	return new Promise((resolve) => {
		const env = { ...process.env, NODE_AUTH_TOKEN: config.token };
		const proc = spawn("npm", ["whoami", "--registry", config.registry], {
			env,
			shell: true,
			stdio: "pipe",
		});

		let stdout = "";
		let stderr = "";

		proc.stdout.on("data", (data) => {
			stdout += data.toString();
		});
		proc.stderr.on("data", (data) => {
			stderr += data.toString();
		});

		proc.on("exit", (code) => {
			if (code === 0) {
				console.log(`✅ Authenticated as: ${stdout.trim()}`);
				resolve();
			} else {
				console.warn(`⚠️  Auth test failed: ${stderr.trim()}`);
				resolve(); // Continue anyway
			}
		});

		proc.on("error", (err) => {
			console.warn(`⚠️  Auth test error: ${err.message}`);
			resolve(); // Continue anyway
		});
	});
}

// Main processing logic
async function processPackagesBatch(
	packages: Package[],
	config: Config,
): Promise<{ published: number; processed: number; errors: number }> {
	let published = 0;
	let processed = 0;
	let errors = 0;

	for (let i = 0; i < packages.length; i += BATCH_SIZE) {
		const batch = packages.slice(i, i + BATCH_SIZE);
		const batchNum = Math.floor(i / BATCH_SIZE) + 1;
		const totalBatches = Math.ceil(packages.length / BATCH_SIZE);

		console.log(`📦 Batch ${batchNum}/${totalBatches} (${i + 1}-${Math.min(i + BATCH_SIZE, packages.length)})`);

		const batchResults = await Promise.allSettled(
			batch.map(async (pkg): Promise<BatchResult> => {
				try {
					const status = await checkPackageStatus(pkg, config.registry);

					if (status.exists && status.versions.includes(pkg.version)) {
						console.log(`✅ ${pkg.name}@${pkg.version} already published`);
						return { result: "already-published", pkg };
					}

					const isUpdate = status.exists;
					const action = isUpdate ? "update" : "create";

					if (config.dryRun) {
						console.log(`📦 [DRY RUN] Would ${action} ${pkg.name}@${pkg.version}`);
						return { result: `dry-run-${action}` as ProcessResult, pkg };
					}

					await publishPackage(pkg, config);
					return { result: isUpdate ? "updated" : "created", pkg };
				} catch (error) {
					const message = error instanceof Error ? error.message : "Unknown error";
					console.error(`❌ ${pkg.name}: ${message}`);

					if (config.continueOnError) {
						return { result: "error", pkg, error: message };
					}
					throw error;
				}
			}),
		);

		// Process results
		for (const result of batchResults) {
			if (result.status === "fulfilled") {
				switch (result.value.result) {
					case "already-published":
						published++;
						break;
					case "created":
					case "updated":
					case "dry-run-create":
					case "dry-run-update":
						processed++;
						break;
					case "error":
						errors++;
						break;
				}
			} else if (config.continueOnError) {
				console.error(`❌ Batch error: ${result.reason}`);
				errors++;
			} else {
				throw result.reason;
			}
		}

		const progress = (((i + BATCH_SIZE) / packages.length) * 100).toFixed(1);
		console.log(
			`✅ Batch ${batchNum}/${totalBatches} done (${progress}%) - Published: ${published}, Processed: ${processed}, Errors: ${errors}`,
		);

		// Delay between batches
		if (i + BATCH_SIZE < packages.length) {
			await new Promise((resolve) => setTimeout(resolve, BATCH_DELAY_MS));
		}
	}

	return { published, processed, errors };
}

async function main(): Promise<void> {
	try {
		const config = createConfig();

		if (config.dryRun) {
			console.log("🔍 DRY RUN MODE - No packages will be published");
		}

		if (config.continueOnError) {
			console.log("🔄 CONTINUE ON ERROR MODE - Processing will continue despite failures");
		}

		await testNpmAuth(config);
		const packages = await collectPackages();

		console.log(`🚀 Processing ${packages.length} packages...`);

		const { published, processed, errors } = await processPackagesBatch(packages, config);

		// Final summary
		console.log("📊 Final Summary:");
		console.log(`   ✅ Already published: ${published}`);
		console.log(`   🚀 ${config.dryRun ? "Would process" : "Processed"}: ${processed}`);
		console.log(`   ❌ Errors: ${errors}`);
		console.log(`   📋 Total: ${published + processed + errors}`);

		if (errors > 0 && !config.continueOnError) {
			throw new Error(`Processing failed with ${errors} errors`);
		}

		console.log(`✅ ${config.dryRun ? "DRY RUN" : "Processing"} completed successfully`);
	} catch (error) {
		console.error(`❌ Fatal error: ${error instanceof Error ? error.message : error}`);
		process.exit(1);
	}
}

void main();
