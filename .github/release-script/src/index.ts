import { spawn } from "node:child_process";
import { readdir as readdirAsync, readFile as readFileAsync, stat as statAsync } from "node:fs/promises";
import { basename, dirname, isAbsolute, join } from "node:path";

function showUsage(): void {
	console.log("Usage: node index.js [options]");
	console.log("");
	console.log("Options:");
	console.log("  --dry-run, -d           Show what would be published without actually publishing");
	console.log("  --continue-on-error, -c Continue processing even if some packages fail");
	console.log("  --help, -h              Show this help message");
	console.log("");
	console.log("Environment variables:");
	console.log("  NPM_TOKEN        NPM authentication token (required)");
	console.log("  NPM_REGISTRY     NPM registry URL (default: https://registry.npmjs.org/)");
	console.log("  NPM_TIMEOUT_SEC  Timeout in seconds (default: 300)");
	console.log("");
}

type MatchFn = (file: string) => boolean;

async function getAllFilesMatching(folder: string, fn: MatchFn): Promise<string[]> {
	if (!isAbsolute(folder)) {
		throw new Error(`Implementation error: not an absolute path: '${folder}'`);
	}

	const result: string[] = [];

	const subFiles = await readdirAsync(folder);

	for (const file_ of subFiles) {
		const file = join(folder, file_);

		const stat = await statAsync(file);
		if (stat.isDirectory()) {
			const subResult = await getAllFilesMatching(file, fn);
			result.push(...subResult);
		} else {
			if (fn(file)) {
				result.push(file);
			}
		}
	}

	return result;
}

interface Package {
	name: string;
	version: string;
	rootFolder: string;
}

interface PackageInfo {
	name: string;
	version: string;
}

interface PackageInfoRaw extends Record<string, unknown> {
	name?: string | undefined;
	version?: string | undefined;
}

async function getPackageInfo(packageFile: string): Promise<PackageInfo> {
	const packageInfoRaw = (await readFileAsync(packageFile)).toString();

	const packageInfo = JSON.parse(packageInfoRaw) as PackageInfoRaw;

	if (typeof packageInfo.name !== "string") {
		throw new Error(`Invalid package.json: ${packageFile}`);
	}

	if (typeof packageInfo.version !== "string") {
		throw new Error(`Invalid package.json: ${packageFile}`);
	}

	return { name: packageInfo.name, version: packageInfo.version };
}

async function getPackage(packageFile: string): Promise<Package> {
	const packageInfo = await getPackageInfo(packageFile);

	const rootFolder = dirname(packageFile);

	return { name: packageInfo.name, version: packageInfo.version, rootFolder };
}

interface NPMVersionInfo {
	name: string;
	version: string;
}

interface NPMData {
	versions: Record<string, NPMVersionInfo | undefined>;
}

type NpmStatus = "unpublished" | "published";

function getNormalizedRegistryUrl(url: string): string {
	let result = url;
	if (!result.startsWith("http")) {
		result = `https://${result}`;
	}

	if (!result.endsWith("/")) {
		result += "/";
	}

	return result;
}

async function getNpmStatus(pkg: Package, registry: string): Promise<NpmStatus> {
	const url = `${registry}${pkg.name}`;

	try {
		const res = await fetch(url, {
			signal: AbortSignal.timeout(10000), // 10 second timeout
		});

		if (!res.ok) {
			if (res.status === 404) {
				return "unpublished";
			}
			throw new Error(`HTTP ${res.status}: ${res.statusText}`);
		}

		const data = (await res.json()) as NPMData;

		const versionInfo = data.versions[pkg.version];

		if (versionInfo === undefined) {
			return "unpublished";
		} else {
			return "published";
		}
	} catch (error) {
		if (error instanceof Error && error.name === "AbortError") {
			throw new Error(`Timeout checking package ${pkg.name}`);
		}

		throw new Error(`Failed to fetch package info for package ${pkg.name}: ${(error as Error).message}`);
	}
}

interface Status {
	status: NpmStatus;
	pkg: Package;
}

type Tag = "latest";

function getTagFromPackage(_pkg: Package): Tag {
	//TODO: once we use more than one tag, get the tag from the name properly
	const tag = "latest";

	return tag;
}

async function processPackage(
	pkg: Package,
	token: string | undefined,
	registry: string,
	timeoutSec: number,
	dryRun: boolean = false,
): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		if (dryRun) {
			console.log(`📦 [DRY RUN] Would publish package: ${pkg.name}@${pkg.version}`);
			resolve();
			return;
		}

		setTimeout(() => {
			console.error(`⏰ Timeout occurred after ${timeoutSec} seconds for package ${pkg.name}`);
			console.error(`📦 Package details: ${pkg.name}@${pkg.version} in ${pkg.rootFolder}`);
			reject(
				new Error(
					`Failed to publish to registry: ${registry} for package ${pkg.name}: timeout (${timeoutSec} secs) - consider increasing NPM_TIMEOUT_SEC environment variable`,
				),
			);
		}, timeoutSec * 1000);

		const tag = getTagFromPackage(pkg);

		// Ensure we have the full environment, especially PATH for node/npm
		const env = { ...process.env, NPM_TOKEN: token };

		const proc = spawn("npm", ["publish", "--tag", tag, "--access", "public", "--provenance", "--registry", registry], {
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
			reject(new Error(`Failed to publish for package ${pkg.name}: ${err.message}`));
			return;
		});

		proc.on("exit", (code, signal) => {
			if (signal !== null) {
				console.error(`❌ Process killed by signal: ${signal}`);
				console.error(`📦 Package: ${pkg.name}@${pkg.version}`);
				console.error(`📁 Working directory: ${pkg.rootFolder}`);
				console.error(stderr);
				reject(new Error(`Failed to publish for package ${pkg.name}: caught signal ${signal}`));
				return;
			}

			if (code !== 0) {
				console.error(`❌ Process exited with code: ${code}`);
				console.error(`📦 Package: ${pkg.name}@${pkg.version}`);
				console.error(`📁 Working directory: ${pkg.rootFolder}`);
				console.error(stderr);
				reject(new Error(`Failed to publish for package ${pkg.name}: process exited with status code ${code}`));
				return;
			}

			console.log(`✅ Successfully published ${pkg.name}@${pkg.version}`);
			resolve();
			return;
		});
	});
}

async function collectPackages(): Promise<Package[]> {
	const cwd = process.cwd();

	// Get the directory where this script is located
	const scriptDir = new URL(".", import.meta.url).pathname;

	// Since the script is in .github/release-script/src/, go up three levels to get to the project root
	const projectRoot = join(scriptDir, "..", "..", "..");

	console.log(`📁 Script location: ${scriptDir}`);
	console.log(`📁 Project root: ${projectRoot}`);

	// Get all package.json files in the project, excluding the release-script directory
	const allPackageFiles: string[] = await getAllFilesMatching(projectRoot, (file: string) => {
		// Skip files in the .github/release-script directory
		if (dirname(file).includes(".github/release-script")) {
			return false;
		}

		return basename(file) === "package.json";
	});

	console.log(`📦 Found ${allPackageFiles.length} package.json files`);

	const packages: Package[] = await Promise.all(allPackageFiles.map((packageFile) => getPackage(packageFile)));
	return packages;
}

function isValidRegistry(_registry: string): boolean {
	//TODO: implement, if necessary
	return true;
}

interface Options {
	token?: string;
	registry: string;
	timeoutSec: number;
	dryRun: boolean;
	continueOnError: boolean;
}

function getOptions(): Options {
	// Parse command line arguments
	if (process.argv.includes("--help") || process.argv.includes("-h")) {
		showUsage();
		process.exit(0);
	}

	const dryRun = process.argv.includes("--dry-run") || process.argv.includes("-d");
	const continueOnError = process.argv.includes("--continue-on-error") || process.argv.includes("-c");

	const token = process.env["NPM_TOKEN"];

	if (!dryRun && (token === undefined || token === "")) {
		throw new Error(`env variable NPM_TOKEN not specified`);
	}

	let registry = "https://registry.npmjs.org/";

	if (process.env["NPM_REGISTRY"] !== undefined) {
		registry = process.env["NPM_REGISTRY"];
	}

	if (!isValidRegistry(registry)) {
		throw new Error(`Invalid registry: ${registry}`);
	}

	let timeoutSec: number = 300; // Timeout of 300 seconds (5 minutes)

	if (process.env["NPM_TIMEOUT_SEC"] !== undefined) {
		const timeoutRaw = process.env["NPM_TIMEOUT_SEC"];
		const timeoutNum = Number.parseInt(timeoutRaw);

		if (Number.isNaN(timeoutNum)) {
			throw new Error(`Specified invalid timeout secs, not a number: ${timeoutRaw}`);
		}

		timeoutSec = timeoutNum;
	}

	return { registry: getNormalizedRegistryUrl(registry), timeoutSec, token, dryRun, continueOnError };
}

async function main(): Promise<void> {
	const { registry, timeoutSec, token, dryRun, continueOnError } = getOptions();

	if (dryRun) {
		console.log("🔍 DRY RUN MODE - No packages will be published");
	}

	if (continueOnError) {
		console.log("🔄 CONTINUE ON ERROR MODE - Will continue processing even if some packages fail");
	}

	const packages: Package[] = await collectPackages();

	// Process packages in batches for better performance
	const batchSize = 5; // Process 5 packages concurrently
	const npmStatus: Status[] = [];

	console.log(`🚀 Processing ${packages.length} packages in batches of ${batchSize}...`);

	for (let i = 0; i < packages.length; i += batchSize) {
		const batch = packages.slice(i, i + batchSize);
		const batchNumber = Math.floor(i / batchSize) + 1;
		const totalBatches = Math.ceil(packages.length / batchSize);

		console.log(
			`📦 Processing batch ${batchNumber}/${totalBatches} (packages ${i + 1}-${Math.min(i + batchSize, packages.length)})`,
		);

		// Process batch concurrently
		const batchPromises = batch.map(async (pkg) => {
			try {
				const status = await getNpmStatus(pkg, registry);
				return { status, pkg };
			} catch (error) {
				if (continueOnError) {
					console.log(`⚠️  Skipping package ${pkg.name} due to error: ${(error as Error).message}`);
					// Mark as unpublished to continue processing
					return { status: "unpublished" as NpmStatus, pkg };
				} else {
					throw error;
				}
			}
		});

		// Wait for batch to complete
		const batchResults = await Promise.allSettled(batchPromises);

		// Process batch results
		for (const result of batchResults) {
			if (result.status === "fulfilled") {
				npmStatus.push(result.value);
			} else if (continueOnError) {
				console.log(`⚠️  Batch item failed: ${result.reason}`);
				// Skip failed items in continue-on-error mode
			} else {
				throw result.reason;
			}
		}

		// Progress indicator
		const progress = (((i + batchSize) / packages.length) * 100).toFixed(1);
		console.log(`✅ Batch ${batchNumber}/${totalBatches} completed (${progress}% done)`);

		// Add a small delay between batches to avoid overwhelming the npm registry
		if (i + batchSize < packages.length) {
			console.log(`⏳ Waiting 2 seconds before next batch...`);
			await new Promise((resolve) => setTimeout(resolve, 2000));
		}
	}

	// Count packages by status
	const publishedCount = npmStatus.filter((s) => s.status === "published").length;
	const unpublishedCount = npmStatus.filter((s) => s.status === "unpublished").length;

	console.log(`📊 Package Status Summary:`);
	console.log(`   ✅ Published: ${publishedCount}`);
	console.log(`   📦 Unpublished: ${unpublishedCount}`);
	console.log(`   📋 Total: ${npmStatus.length}`);

	// Process unpublished packages
	const unpublishedPackages = npmStatus.filter((s) => s.status === "unpublished");

	if (unpublishedPackages.length === 0) {
		console.log("🎉 All packages are already published!");
	} else {
		console.log(`🚀 Processing ${unpublishedPackages.length} unpublished packages...`);

		await Promise.all(
			unpublishedPackages.map(async (status): Promise<void> => {
				if (dryRun) {
					console.log(`📦 [DRY RUN] Would publish package: ${status.pkg.name}@${status.pkg.version}`);
				} else {
					await processPackage(status.pkg, token, registry, timeoutSec, dryRun);
				}
			}),
		);
	}

	if (dryRun) {
		console.log("✅ DRY RUN completed - No packages were published");
	} else {
		console.log("✅ All packages processed successfully");
	}
}

void main();
