# 🚌 Open Bus API Client

A TypeScript client library for interacting with the Open-Bus API.

## 📢 Get Involved

- 💬 For general help and system updates, join the Hasadna Slack: [#open-bus channel](https://join.slack.com/t/hasadna/shared_invite/zt-167h764cg-J18ZcY1odoitq978IyMMig)
- 🐞 Found a bug or have a feature request? [Open an issue](https://github.com/hasadna/open-bus-map-search/issues/new)
- 🤝 Want to contribute? See our [contributing guidelines](https://github.com/hasadna/open-bus-pipelines/blob/main/CONTRIBUTING.md)

## 🔗 Related Projects

- [🗺️ Open Bus Map Search (Client App)](https://github.com/hasadna/open-bus-map-search) - [Live Website](https://open-bus-map-search.hasadna.org.il/dashboard)
- [🌐 Open Bus Stride API (REST)](https://github.com/hasadna/open-bus-stride-api) – [API Docs](https://open-bus-stride-api.hasadna.org.il/docs)
- [🌐 Open Bus Backend (REST)](https://github.com/hasadna/open-bus-backend) – [API Docs](https://open-bus-backend.k8s.hasadna.org.il/docs)
- [📦 NPM Package](https://www.npmjs.com/package/@hasadna/open-bus-api-client)

## 📦 Installation

```bash
# Instal Genetae Depencdy
npm install

# Instal NPM Package
npm install @hasadna/open-bus-api-client
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
import {
  AggregationsApi,
  ComplaintsApi,
  Configuration,
  GovernmentTransportationApi,
  GtfsApi,
  HealthApi,
  IssuesApi,
  SiriApi,
  UserCasesApi,
} from '@hasadna/open-bus-api-client'

// URL: https://open-bus-stride-api.hasadna.org.il
export const STRIDE_API_BASE_PATH = process.env.VITE_STRIDE_API
const STRIDE_API_CONFIG = new Configuration({ basePath: STRIDE_API_BASE_PATH })

export const AGGREGATIONS_API = new AggregationsApi(STRIDE_API_CONFIG)
export const GTFS_API = new GtfsApi(STRIDE_API_CONFIG)
export const SIRI_API = new SiriApi(STRIDE_API_CONFIG)
export const USER_CASE_API = new UserCasesApi(STRIDE_API_CONFIG)

// URL: https://open-bus-backend.k8s.hasadna.org.il
const BACKEND_API_BASE_PATH = process.env.VITE_BACKEND_API
const BACKEND_API_CONFIG = new Configuration({ basePath: BACKEND_API_BASE_PATH })

export const HEALTH_API = new HealthApi(BACKEND_API_CONFIG)
export const ISSUES_API = new IssuesApi(BACKEND_API_CONFIG)
export const COMPLAINTS_API = new ComplaintsApi(BACKEND_API_CONFIG)
export const GOVERNMENT_TRANSPORTATION_API = new GovernmentTransportationApi(BACKEND_API_CONFIG)

const stops = await GTFS_API.gtfsRideStopsListGet(...)

console.log(stops);
```

## 📂 Project Structure

```bash
.
├── openapi-templates/     # README templets
├── scripts/               # Custom JS scripts
├── config.json            # Open-API generator config
├── openapi-merge.json     # Open-API merge cli config
├── openapitools.json      # Open-API generator cli config
└── package.json           # NPM config
```
