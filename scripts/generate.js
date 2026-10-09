import { execSync } from "child_process";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { rimraf } from "rimraf";
import { normalizeSpec } from "./normalize.js";

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
  const specPath = resolve(rootDir, "openapi.json");
  const spec = JSON.parse(readFileSync(specPath, "utf-8"));
  if (normalizeSpec(spec)) {
    writeFileSync(specPath, JSON.stringify(spec, null, 2) + "\n");
  }

  // Generate client code
  console.log("🚀 Generating client code...");

  execSync(
    "openapi-generator-cli generate -g typescript-fetch -i openapi.json -o ./client -c config.json --template-dir openapi-templates/typescript-fetch --remove-operation-id-prefix",
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

if (!rootPkg.version) {
  console.error("❌ Error: Version not found in root package.json.");
  process.exit(1);
}

Object.assign(clientPkg, {
  version: rootPkg.version,
  author: rootPkg.author,
  repository: rootPkg.repository,
  description: rootPkg.description,
  homepage: rootPkg.homepage,
  keywords: rootPkg.keywords,
  publishConfig: rootPkg.publishConfig,
});

writeFileSync(clientPkgPath, JSON.stringify(clientPkg, null, 2) + "\n");

console.log("✅ Client code generated successfully!");
