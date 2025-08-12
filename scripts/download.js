import { execSync } from "child_process";
import { readFile, writeFile } from "fs/promises";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

try {
  execSync("openapi-merge-cli --config openapi-merge.json", {
    cwd: rootDir,
    stdio: "inherit",
  });
} catch (error) {
  console.error(error);
}

try {
  let file = await readFile(resolve("openapi.json"), "utf-8");
  const json = JSON.parse(file);
  for (const key in json.components.schemas) {
    if (key.startsWith("def-")) {
      const title = json.components.schemas[key].title;
      file = file.replaceAll(key, title);
    }
    await writeFile(resolve("openapi.json"), file);
  }
} catch (error) {
  console.error(error);
}
