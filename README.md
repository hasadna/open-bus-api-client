# 🚌 Open Bus API Client

A TypeScript client library for interacting with the Open-Bus API.

## 🔗 Links

- [📦 NPM Package](#)
- [🌐 Client](https://github.com/hasadna/open-bus-map-search/)
- [💻 API Server](https://github.com/hasadna/open-bus-stride-api)
- [🧪 Package Docs](src/README.md)
- [📁 Generated Client](#)
- [💬 Slack](https://join.slack.com/t/hasadna/shared_invite/zt-167h764cg-J18ZcY1odoitq978IyMMig)

## 📦 Installation

```bash
npm install
```

## 🚀 How to Generate & Publish the Client

Before publishing, ensure the `NODE_AUTH_TOKEN` environment variable is set.
This is required to authenticate with the npm registry.

### ✅ Steps

```bash
# 1. Download the latest OpenAPI schema
npm run download:json

# 2. Generate the client code from OpenAPI spec
npm run generate:client

# 3. Build the generated TypeScript client
npm run build:client

# 4. Format client files
npm run format:client

# 5. Publish the package to npm
npm run publish

# 6. Post-publish cleanup and final structure update
npm run postpublish
```

> ⚠️ `NODE_AUTH_TOKEN` must be available in your environment (e.g., `.env`, terminal, or CI/CD pipeline).

## 🛠️ Usage Example

```ts
import { Client } from "open-bus-api-client";

const client = new Client("your-api-key");

await client.authenticate();

const stops = await client.getBusStops("12345");
console.log(stops);
```

📂 Project Structure

```bash
.
├── client/                # Generated client code
├── scripts/               # Custom JS scripts
└── config.json            # Open-API generator config
├── package.json           # NPM config
```
