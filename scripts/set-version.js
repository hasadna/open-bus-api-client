const fs = require("fs");
const path = require("path");

const rootPath = path.resolve("package.json");
const rootPkg = JSON.parse(fs.readFileSync(rootPath, "utf-8"));
const clientPath = path.resolve("client/package.json");
const clientPkg = JSON.parse(fs.readFileSync(clientPath, "utf-8"));
const openapiPath = path.resolve("openapi.json");
const openapiPkg = JSON.parse(fs.readFileSync(openapiPath, "utf-8"));

const baseVersion = rootPkg.version;
const sha = process.env.DISPATCH_SHA || openapiPkg.info.version;

const now = new Date();
const yyyy = now.getFullYear();
const MM = String(now.getMonth() + 1).padStart(2, "0");
const dd = String(now.getDate()).padStart(2, "0");
const newVersion = `${baseVersion}-${sha.slice(0, 7)}-${yyyy}${MM}${dd}`;

clientPkg.version = newVersion;
clientPkg.author = rootPkg.author;
clientPkg.repository = rootPkg.repository;
clientPkg.description = rootPkg.description;
clientPkg.homepage = rootPkg.homepage;
clientPkg.keywords = rootPkg.keywords;

fs.writeFileSync(clientPath, JSON.stringify(clientPkg, null, 2) + "\n");
console.log(`✔ Version updated to ${clientPkg.version}`);
