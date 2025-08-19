import * as fsAsync from "node:fs/promises"
import * as fs from "node:fs"
import * as path from "node:path"
import * as child_process from "node:child_process"

type MatchFn = (file: string) => boolean

async function getAllFilesMatching(
	folder: string,
	fn: MatchFn
): Promise<string[]> {
	if (!path.isAbsolute(folder)) {
		throw new Error(
			`Implementation error: not an absolute path: '${folder}'`
		)
	}

	const result: string[] = []

	const subFiles = await fsAsync.readdir(folder)

	for (const file_ of subFiles) {
		const file = path.join(folder, file_)

		const stat = await fsAsync.stat(file)
		if (stat.isDirectory()) {
			const subResult = await getAllFilesMatching(file, fn)
			result.push(...subResult)
		} else {
			if (fn(file)) {
				result.push(file)
			}
		}
	}

	return result
}

interface Package {
	name: string
	version: string
	rootFolder: string
}

interface PackageInfo {
	name: string
	version: string
}

interface PackageInfoRaw extends Record<string, unknown> {
	name?: string | undefined
	version?: string | undefined
}

async function getPackageInfo(packageFile: string): Promise<PackageInfo> {
	const packageInfoRaw = await (
		await fsAsync.readFile(packageFile)
	).toString()

	const packageInfo = JSON.parse(packageInfoRaw) as PackageInfoRaw

	if (typeof packageInfo.name !== "string") {
		throw new Error(`Invalid package.json: ${packageFile}`)
	}

	if (typeof packageInfo.version !== "string") {
		throw new Error(`Invalid package.json: ${packageFile}`)
	}

	return { name: packageInfo.name, version: packageInfo.version }
}

async function getPackage(packageFile: string): Promise<Package> {
	const packageInfo = await getPackageInfo(packageFile)

	const rootFolder = path.dirname(packageFile)

	return { name: packageInfo.name, version: packageInfo.version, rootFolder }
}

interface NPMVersionInfo {
	name: string
	version: string
}

interface NPMData {
	versions: Record<string, NPMVersionInfo | undefined>
}

type NpmStatus = "unpublished" | "published"

function getNormalizedRegistryUrl(url: string): string {
	let result = url
	if (!result.startsWith("http")) {
		result = `https://${result}`
	}

	if (!result.endsWith("/")) {
		result += "/"
	}

	return result
}

async function getNpmStatus(
	pkg: Package,
	registry: string
): Promise<NpmStatus> {
	const url = `${registry}${pkg.name}`

	try {
		const res = await fetch(url)
		if (!res.ok)
			throw new Error(
				`Failed to fetch package info for package ${pkg.name}: Status Code ${res.status}`
			)

		const data = (await res.json()) as NPMData

		const versionInfo = data.versions[pkg.version]

		if (versionInfo === undefined) {
			return "unpublished"
		} else {
			return "published"
		}
	} catch (error) {
		throw new Error(
			`Failed to fetch package info for package ${pkg.name}: ${(error as Error).message}`
		)
	}
}

interface Status {
	status: NpmStatus
	pkg: Package
}

type Tag = "latest"

function getTagFromPackage(_pkg: Package): Tag {
	//TODO: once we use more than one tag, get the tag from the name properly
	const tag = "latest"

	return tag
}

async function processPackage(
	pkg: Package,
	token: string,
	registry: string,
	timeoutSec: number
): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			reject(
				new Error(
					`Failed to publish for package ${pkg.name}: timeout (${timeoutSec} secs)`
				)
			)
		}, timeoutSec * 1000)

		const tag = getTagFromPackage(pkg)

		const proc = child_process.spawn(
			"npm",
			[
				"publish",
				"--tag",
				tag,
				"--access",
				"public",
				"--provenance",
				"--registry",
				registry,
			],
			{
				cwd: pkg.rootFolder,
				env: { NPM_TOKEN: token },
				shell: true,
				stdio: "pipe",
			}
		)

		let stderr = ""

		proc.stderr.on("data", (data) => {
			stderr += data.toString()
		})

		proc.on("error", (err) => {
			reject(
				new Error(
					`Failed to publish for package ${pkg.name}: ${err.message}`
				)
			)
			return
		})

		proc.on("exit", (code, signal) => {
			if (signal !== null) {
				console.error(stderr)
				reject(
					new Error(
						`Failed to publish for package ${pkg.name}: caught signal ${signal}`
					)
				)
				return
			}

			if (code !== 0) {
				console.error(stderr)
				reject(
					new Error(
						`Failed to publish for package ${pkg.name}: process exited with status code ${code}`
					)
				)
				return
			}

			resolve()
			return
		})
	})
}

async function collectPackages(): Promise<Package[]> {
	const cwd = process.cwd()

	const currentDir = __dirname

	const expectedPackagePath = path.join(cwd, ".github", "release-script")

	let packagePath = path.resolve(currentDir)

	while (!fs.existsSync(path.join(packagePath, "package.json"))) {
		packagePath = path.join(packagePath, "..")
		if (packagePath === "" || packagePath === "/") {
			throw new Error(
				`Couldn't find package path by searching for package.json`
			)
		}
	}

	if (packagePath !== expectedPackagePath) {
		throw new Error(
			`Script executed from wrong cwd: expected package path to be '${expectedPackagePath}' but it was '${packagePath}'`
		)
	}

	const allPackageFiles: string[] = await getAllFilesMatching(
		process.cwd(),
		(file: string) => {
			if (path.dirname(file).includes(".github/release-script")) {
				return false
			}

			return path.basename(file) === "package.json"
		}
	)

	const packages: Package[] = await Promise.all(
		allPackageFiles.map((packageFile) => getPackage(packageFile))
	)
	return packages
}

function isValidRegistry(_registry: string): boolean {
	//TODO: implement, if necessary
	return true
}

interface Options {
	token: string
	registry: string
	timeoutSec: number
}

function getOptions(): Options {
	const token = process.env["NPM_TOKEN"]

	if (token === undefined || token === "") {
		throw new Error(`env variable NPM_TOKEN not specified`)
	}

	let registry = "https://registry.npmjs.org/"

	if (process.env["NPM_REGISTRY"] !== undefined) {
		registry = process.env["NPM_REGISTRY"]
	}

	if (!isValidRegistry(registry)) {
		throw new Error(`Invalid registry: ${registry}`)
	}

	let timeoutSec: number = 60

	if (process.env["NPM_TIMEOUT_SEC"] !== undefined) {
		const timeoutRaw = process.env["NPM_TIMEOUT_SEC"]
		const timeoutNum = Number.parseInt(timeoutRaw)

		if (Number.isNaN(timeoutNum)) {
			throw new Error(
				`Specified invalid timeout secs, not a number: ${timeoutRaw}`
			)
		}

		timeoutSec = timeoutNum
	}

	return { registry: getNormalizedRegistryUrl(registry), timeoutSec, token }
}

async function main(): Promise<void> {
	const { registry, timeoutSec, token } = getOptions()

	const packages: Package[] = await collectPackages()

	const npmStatus: Status[] = await Promise.all(
		packages.map(async (pkg) => {
			const status = await getNpmStatus(pkg, registry)

			return { status, pkg }
		})
	)

	await Promise.all(
		npmStatus.map(async (status): Promise<void> => {
			if (status.status === "unpublished") {
				await processPackage(status.pkg, token, registry, timeoutSec)
			}
		})
	)
}

void main()
