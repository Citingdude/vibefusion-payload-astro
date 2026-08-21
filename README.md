# Astro + Payload Turborepo

## Apps

- `apps/astro` — minimal Astro starter
- `apps/payload` — Payload CMS, configured for PostgreSQL

## Development

Install dependencies and run both apps:

```sh
pnpm install
pnpm dev
```

Astro runs at `http://localhost:4321`; Payload runs at `http://localhost:3000`.

Before starting either app, copy `apps/payload/.env.example` to `apps/payload/.env` and provide a PostgreSQL connection string and secure Payload secret. Astro's Local API helper loads this file before initializing Payload. In deployment, set `DATABASE_URL` and `PAYLOAD_SECRET` as runtime environment variables; those values take precedence.

The Local API helper lives in `apps/astro/src/lib/payload.ts`. It is server-only and is used by the homepage and `GET /api/media.json`.
