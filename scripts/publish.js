import { execSync } from "child_process";
import { existsSync, writeFileSync } from "fs";
import { rm } from "fs/promises";
import { resolve } from "path";
import { rimraf } from "rimraf";

console.log("🚀 Starting publish...");

// Ensure the client directory exists
const clientDir = resolve("client");
if (!existsSync(clientDir)) {
  console.error(
    "❌ Error: ./client directory does not exist.\nPlease run 'npm run generate' first.",
  );
  process.exit(1);
}

// Ensure if env NODE_AUTH_TOKEN is set
if (!process.env.NODE_AUTH_TOKEN) {
  console.error("❌ NODE_AUTH_TOKEN environment variable is not set!");
  process.exit(1);
}

// install client package dependencies
try {
  console.log("🔄 Installing client dependencies...");

  execSync("npm install", { cwd: clientDir, stdio: "inherit" });
} catch (error) {
  console.error("❌ Failed to install client dependencies:", error.message);
  process.exit(1);
}

const npmrcPath = resolve(clientDir, ".npmrc");
const npmrcContent = [
  "@hasadna:registry=https://registry.npmjs.org/",
  "//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}",
  "",
].join("\n");

let createdConfig = false;
const dryRun = process.env.DRY_RUN === "true";
try {
  writeFileSync(npmrcPath, npmrcContent, { flag: "wx" });
  createdConfig = true;
  console.log(dryRun ? "Running npm publish dry run..." : "Publishing npm package...");
  execSync(
    dryRun ? "npm publish --dry-run" : "npm publish --access public --tag latest",
    { cwd: clientDir, stdio: "inherit" },
  );
} catch (error) {
  console.error("Failed to publish package:", error.message);
  process.exitCode = 1;
} finally {
  if (createdConfig) {
    await rm(npmrcPath, { force: true });
    await rimraf(clientDir);
  }
}

if (!process.exitCode) {
  console.log(dryRun ? "Publish dry run completed." : "Package published successfully.");
}
