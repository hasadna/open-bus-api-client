import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { rimraf } from "rimraf";

const rootDir = fileURLToPath(new URL("../", import.meta.url));
const clientDir = resolve(rootDir, "client");
const generatedFilesToRemove = [
  ".openapi-generator",
  "docs",
  ".gitignore",
  ".openapi-generator-ignore",
  ".npmignore",
  "git_push.sh",
];

try {
  const rootPackage = JSON.parse(
    readFileSync(resolve(rootDir, "package.json"), "utf8"),
  );
  if (!rootPackage.version) {
    throw new Error("Version not found in root package.json.");
  }

  if (existsSync(clientDir)) {
    console.log("🧹 Removing the previous generated client...");
    await rimraf(clientDir);
  }

  console.log("🚀 Generating client code...");

  execSync(
    "openapi-generator-cli generate -g typescript-fetch -i openapi.json -o ./client -c config.json --template-dir openapi-templates/typescript-fetch --remove-operation-id-prefix",
    { cwd: rootDir, stdio: "inherit" },
  );

  console.log("🧼 Removing unnecessary generated files...");
  await rimraf(generatedFilesToRemove.map((file) => resolve(clientDir, file)));

  console.log("📦 Updating client package.json...");
  const clientPackagePath = resolve(clientDir, "package.json");
  const clientPackage = JSON.parse(readFileSync(clientPackagePath, "utf8"));
  Object.assign(clientPackage, {
    version: rootPackage.version,
    author: rootPackage.author,
    repository: rootPackage.repository,
    description: rootPackage.description,
    homepage: rootPackage.homepage,
    keywords: rootPackage.keywords,
    publishConfig: rootPackage.publishConfig,
  });
  writeFileSync(
    clientPackagePath,
    JSON.stringify(clientPackage, null, 2) + "\n",
  );

  console.log("✅ Client code generated successfully!");
} catch (error) {
  console.error("❌ Failed to generate client code:", error.message);
  process.exitCode = 1;
}
