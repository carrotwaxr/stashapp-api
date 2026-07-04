# stashapp-api

TypeScript npm package providing a typed GraphQL client for Stash media organizer servers.

## Current State (v0.4.0 -> v1.0.0 migration in progress)

**v0.4.0 (legacy):** graphql-codegen + 38 hand-written `.graphql` operations, `StashApp` singleton class, fixed field selections.

**v1.0.0 (target):** GenQL-generated typed client with Prisma-style `{ field: true }` field selection, full API coverage (74 queries + 129 mutations), `StashClient` wrapper class.

## Development

```bash
# GenQL generate + compile — fully offline, from committed schema.graphql
npm run build          # runs generate (--schema schema.graphql) + tsc

# Refresh the schema against a live Stash server (needs .env)
npm run update-schema  # fetch introspection → schema.json + schema.graphql
npm run refresh        # update-schema + build

# Regenerate SDL from the committed introspection snapshot (offline)
npm run schema:sdl     # schema.json → schema.graphql
```

The build does **not** need a Stash server: `schema.graphql` (SDL, the codegen
source), `schema.json` (introspection snapshot for diffing), and `src/generated/`
are all committed. Only `update-schema`/`refresh` reach out, using `.env`
(`STASH_ENDPOINT` + `STASH_API_KEY`, pointing at 10.0.0.4:6969).

## Architecture

- `src/client.ts` - `StashClient` class (auth, query/mutation proxies, raw escape hatch)
- `src/index.ts` - Public API re-exports (StashClient + all GenQL types)
- `src/generated/` - GenQL output (committed; regenerated from `schema.graphql`)
- `json-to-sdl.js` - converts `schema.json` (introspection) → `schema.graphql` (SDL)
- `update-schema.js` - fetches live introspection → `schema.json` + `schema.graphql`

## Key Dependencies

- `@genql/runtime` - GenQL client runtime
- `@genql/cli` (dev) - Code generation from GraphQL introspection
- `typescript` - Compilation

## Publishing

```bash
npm run publish:patch  # or :minor or :major
```

Runs `prepublishOnly` hook (full build) before publishing.

## Consumers

- `stash-curator` (`/home/carrot/code/stash-curator`) - conversational curation CLI (primary consumer, via `npm link` in dev)
- `stashapp-cli` (`/home/carrot/code/stashapp-cli`) - legacy CLI, being retired into stash-curator
