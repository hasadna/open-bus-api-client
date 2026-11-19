import { execSync } from "child_process";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

try {
  console.log("⬇️ Download & Mergeing OpenAPI Json Files..");
  execSync("openapi-merge-cli --config openapi-merge.json", {
    cwd: rootDir,
    stdio: "inherit",
  });
} catch (error) {
  console.error("❌  Failed to merge OpenAPI files:", error);
  process.exit(1);
}
