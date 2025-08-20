import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { readdir as readdirAsync, stat as statAsync, readFile as readFileAsync } from "node:fs/promises";
import { basename, dirname, isAbsolute, join, resolve } from "node:path";

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
	console.log("  NPM_TIMEOUT_SEC  Timeout in seconds (default: 60)");
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
		console.log(`🔍 Checking package: ${pkg.name}@${pkg.version} at ${url}`);
		
		const res = await fetch(url, {
			signal: AbortSignal.timeout(10000), // 10 second timeout
		});
		
		if (!res.ok) {
			if (res.status === 404) {
				console.log(`📦 Package ${pkg.name} not found in registry (404) - marking as unpublished`);
				return "unpublished";
			}
			throw new Error(`HTTP ${res.status}: ${res.statusText}`);
		}

		const data = (await res.json()) as NPMData;

		const versionInfo = data.versions[pkg.version];

		if (versionInfo === undefined) {
			console.log(`📦 Package ${pkg.name}@${pkg.version} not found in registry - marking as unpublished`);
			return "unpublished";
		} else {
			console.log(`✅ Package ${pkg.name}@${pkg.version} already published`);
			return "published";
		}
	} catch (error) {
		if (error instanceof Error && error.name === 'AbortError') {
			console.log(`⏰ Timeout checking package ${pkg.name} - marking as unpublished`);
			return "unpublished";
		}
		
		console.error(`❌ Error checking package ${pkg.name}: ${(error as Error).message}`);
		// In dry-run mode, continue with unpublished status instead of failing
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

async function processPackage(pkg: Package, token: string | undefined, registry: string, timeoutSec: number, dryRun: boolean = false): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		if (dryRun) {
			console.log(`📦 [DRY RUN] Would publish package: ${pkg.name}@${pkg.version}`);
			resolve();
			return;
		}

		setTimeout(() => {
			reject(new Error(`Failed to publish to registry: ${registry} for package ${pkg.name}: timeout (${timeoutSec} secs)`));
		}, timeoutSec * 1000);

		const tag = getTagFromPackage(pkg);

		// Ensure we have the full environment, especially PATH for node/npm
		const env = { ...process.env, NPM_TOKEN: token };
		
		const proc = spawn(
			"npm",
			["publish", "--tag", tag, "--access", "public", "--provenance", "--registry", registry],
			{
				cwd: pkg.rootFolder,
				env,
				shell: true,
				stdio: "pipe",
			},
		);

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
				console.error(stderr);
				reject(new Error(`Failed to publish for package ${pkg.name}: caught signal ${signal}`));
				return;
			}

			if (code !== 0) {
				console.error(stderr);
				reject(new Error(`Failed to publish for package ${pkg.name}: process exited with status code ${code}`));
				return;
			}

			resolve();
			return;
		});
	});
}

async function collectPackages(): Promise<Package[]> {
	const cwd = process.cwd();

	// Get the directory where this script is located
	const scriptDir = new URL('.', import.meta.url).pathname;
	
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

	let timeoutSec: number = 60;

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

	// Process packages with better error handling
	const npmStatus: Status[] = [];
	
	for (const pkg of packages) {
		try {
			const status = await getNpmStatus(pkg, registry);
			npmStatus.push({ status, pkg });
		} catch (error) {
			if (continueOnError) {
				console.log(`⚠️  Skipping package ${pkg.name} due to error: ${(error as Error).message}`);
				// Mark as unpublished to continue processing
				npmStatus.push({ status: "unpublished" as NpmStatus, pkg });
			} else {
				throw error;
			}
		}
	}

	await Promise.all(
		npmStatus.map(async (status): Promise<void> => {
			if (status.status === "unpublished") {
				await processPackage(status.pkg, token, registry, timeoutSec, dryRun);
			}
		}),
	);

	if (dryRun) {
		console.log("✅ DRY RUN completed - No packages were published");
	}
}

void main();
