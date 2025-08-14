import { execSync } from "child_process";
import { readFile, writeFile } from "fs/promises";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const openApiFile = resolve(rootDir, "openapi.json");

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

try {
  console.log("📂 Reading merged openapi.json...");
  let file = await readFile(openApiFile, "utf-8");
  const json = JSON.parse(file);
  let updated = false;

  console.log("🛠️  Updating schema names...");
  for (const key in json.components.schemas) {
    if (key.startsWith("def-")) {
      const title = json.components.schemas[key].title;
      file = file.replaceAll(`${key}"`, `${title}"`);
      updated = true;
      console.log(`✏️ Replaced "${key}" with "${title}".`);
    }
  }

  if (updated) {
    console.log("💾 Saving updated openapi.json...");
    await writeFile(openApiFile, file);
  } else {
    console.log("ℹ️ No schema names needed updating.");
  }
} catch (error) {
  console.error("❌ Failed to update openapi.json:", error);
  process.exit(1);
}
