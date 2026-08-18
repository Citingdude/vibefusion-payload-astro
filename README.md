# Astro + Payload Turborepo

## Apps

- `apps/astro` — minimal Astro starter
- `apps/payload` — blank Payload CMS starter, configured for MongoDB

## Development

Install dependencies and run both apps:

```sh
pnpm install
pnpm dev
```

Astro runs at `http://localhost:4321`; Payload runs at `http://localhost:3000`.

Before starting Payload, copy `apps/payload/.env.example` to `apps/payload/.env` and provide a MongoDB connection string and secure Payload secret.
