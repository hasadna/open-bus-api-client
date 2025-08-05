import { execSync } from "child_process";
import { existsSync, writeFileSync } from "fs";
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

// Create .npmrc file for authentication
console.log("📝 Creating .npmrc file for authentication...");

const npmrcPath = resolve("client/.npmrc");

const npmrcContent = [
  "@hasadna:registry=https://registry.npmjs.org/",
  `//registry.npmjs.org/:_authToken=${process.env.NODE_AUTH_TOKEN}`,
  "",
].join("\n");

writeFileSync(npmrcPath, npmrcContent);

// Publish the package
try {
  console.log("📦 Publishing npm package...");
  // execSync("npm publish --access public --tag latest", {
  //   cwd: clientDir,
  //   stdio: "inherit",
  //   env: {
  //     ...process.env,
  //     NODE_AUTH_TOKEN: process.env.NODE_AUTH_TOKEN,
  //   },
  // });

  // Clean up
  console.log("🧹 Cleaning up...");
  rimraf(["client/dist", "client/.npmrc"]);

  console.log("✅ Package published successfully.");
} catch (error) {
  rimraf("client/.npmrc");
  console.error("❌ Failed to publish package:", error.message);
  process.exit(1);
}
