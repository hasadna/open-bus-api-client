import { execSync } from "child_process";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { rimraf } from "rimraf";

// Clean up old gneratore directory
const clientDir = resolve("client");
if (existsSync(clientDir)) {
  console.log("🧹 Clean up old gneratore directory...");
  await rimraf("client");
}

// Get root directory
const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

try {
  // Generate client code
  console.log("🚀 Generating client code...");

  execSync(
    "openapi-generator-cli generate -g typescript-axios -i openapi.json -o ./client -c config.json --template-dir openapi-templates/typescript-axios",
    { cwd: rootDir, stdio: "inherit" },
  );
} catch (error) {
  console.error("❌ Failed to generate client code:", error.message);
  process.exit(1);
}

// Clean up unnecessary files
console.log("🧼 Clean up unnecessary generated files...");

await rimraf([
  "client/.openapi-generator",
  "client/docs",
  "client/.gitignore",
  "client/.openapi-generator-ignore",
  "client/.npmignore",
  "client/git_push.sh",
]);

// Update client package.json with version and metadata
console.log("📦 Updating client package.json...");

const clientPkgPath = resolve("client/package.json");
const rootPkg = JSON.parse(readFileSync(resolve("package.json"), "utf-8"));
const clientPkg = JSON.parse(readFileSync(clientPkgPath, "utf-8"));
const openapiPkg = JSON.parse(readFileSync(resolve("openapi.json"), "utf-8"));

const sha = process.env.DISPATCH_SHA || openapiPkg.info.version || "unknown";

const now = new Date();
const yyyy = now.getFullYear();
const MM = String(now.getMonth() + 1).padStart(2, "0");
const dd = String(now.getDate()).padStart(2, "0");

const version = `${rootPkg.version}-${sha.slice(0, 7)}-${yyyy}${MM}${dd}`;

Object.assign(clientPkg, {
  version,
  author: rootPkg.author,
  repository: rootPkg.repository,
  description: rootPkg.description,
  homepage: rootPkg.homepage,
  keywords: rootPkg.keywords,
});

writeFileSync(clientPkgPath, JSON.stringify(clientPkg, null, 2) + "\n");

console.log("✅ Client code generated successfully!");
