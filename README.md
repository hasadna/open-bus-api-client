# 🚌 Open Bus API Client

A TypeScript client library for interacting with the Open-Bus API.

## 🔗 Links

- [📦 NPM Package](https://www.npmjs.com/package/@hasadna/open-bus-api-client)
- [🌐 Website Client](https://github.com/hasadna/open-bus-map-search/)
- [💻 API Server](https://github.com/hasadna/open-bus-stride-api)
- [📂 Package Flies](https://github.com/hasadna/open-bus-api-client/tree/main/client)
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
npm run download

# 2. Generate the client code from OpenAPI spec
npm run generate

# 3. Publish the package to npm
npm run publish
```

> ⚠️ `NODE_AUTH_TOKEN` must be available in your environment (e.g., `.env`, terminal, or CI/CD pipeline).

## 🛠️ Usage Example

```ts
import { Client } from "open-bus-api-client";

const client = new Client();

const stops = await client.getBusStops(...);

console.log(stops);
```

📂 Project Structure

```bash
.
├── client/                # Generated client code
├── openapi-templates/     # README templets
├── scripts/               # Custom JS scripts
└── config.json            # Open-API generator config
├── package.json           # NPM config
```
