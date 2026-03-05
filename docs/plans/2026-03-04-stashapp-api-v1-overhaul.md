# stashapp-api v1.0 Overhaul — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform stashapp-api from a partial, hand-written GraphQL SDK into a comprehensive typed client with Prisma-style field selection, full Stash API coverage (74 queries + 129 mutations), and narrowed return types — powered by GenQL codegen.

**Architecture:** Replace the current graphql-codegen + hand-written `.graphql` operations with GenQL-generated client. Wrap GenQL output in a `StashClient` class providing auth, connection management, convenience methods, and a raw GraphQL escape hatch. Ship as a single npm package with zero-config DX for consumers.

**Tech Stack:** GenQL (`@genql/cli` + `@genql/runtime`), TypeScript 5.x, graphql-request (for raw escape hatch only)

---

## Background

### Current state (v0.4.0)
- 38 hand-written `.graphql` operation files with fixed field selections
- `graphql-codegen` generates TypeScript types + SDK from those operations
- `StashApp` singleton class delegates to generated SDK methods
- Consumer gets typed methods but **cannot choose fields** — each query returns a fixed shape
- 614 generated types, 7,223 lines of generated code

### Target state (v1.0.0)
- GenQL generates typed client from schema introspection
- Consumer selects fields via `{ field: true }` objects, gets narrowed return types
- `__scalar: true` shorthand fetches all scalar fields on an entity
- Full API coverage — every query and mutation in the schema is callable
- `StashClient` wrapper handles auth, provides `raw()` escape hatch
- Backwards compatibility: re-export all existing type names

### Schema surface
- 74 queries, 129 mutations
- 8 core entities: Performer (44 fields), Scene (33), Studio (25), Gallery (23), Group (22), Tag (23), Image (20), SceneMarker (12)

---

## Task 1: Set up GenQL codegen pipeline

**Files:**
- Create: `genql.config.js`
- Modify: `package.json`
- Delete: `codegen.yml`
- Delete: `src/operations/*.graphql` (all 38 files)
- Delete: `src/generated/graphql.ts`
- Create: `src/generated/` (GenQL output, gitignored)

**Step 1: Install GenQL packages**

```bash
npm install @genql/runtime
npm install --save-dev @genql/cli
```

**Step 2: Remove old codegen dependencies**

```bash
npm uninstall @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-graphql-request graphql-tag
```

**Step 3: Create GenQL config**

Create `genql.config.js`:

```javascript
import 'dotenv/config'

/** @type {import('@genql/cli').GenqlConfig} */
export default {
  endpoint: process.env.STASH_ENDPOINT + '/graphql',
  headers: {
    ApiKey: process.env.STASH_API_KEY,
  },
  output: './src/generated',
  scalarTypes: {
    Time: 'string',
    Timestamp: 'string',
    Int64: 'string',
    Any: 'any',
    Map: 'Record<string, unknown>',
    BoolMap: 'Record<string, boolean>',
    PluginConfigMap: 'Record<string, unknown>',
    Upload: 'File',
  },
}
```

**Step 4: Update package.json scripts**

Replace the `codegen` and `refresh` scripts:

```json
{
  "scripts": {
    "generate": "genql --config genql.config.js",
    "build": "npm run generate && tsc",
    "refresh": "npm run generate && tsc",
    "prepublishOnly": "npm run build"
  }
}
```

**Step 5: Update .gitignore**

Add `src/generated/` to `.gitignore` — GenQL output should be regenerated, not committed. (The `schema.json` stays committed as a snapshot for reference.)

**Step 6: Run codegen and verify output**

```bash
npm run generate
```

Expected: `src/generated/` directory with GenQL typed client files. Verify the output contains type definitions for Performer, Scene, etc.

**Step 7: Delete old files**

```bash
rm codegen.yml
rm src/operations/*.graphql
rm src/generated/graphql.ts
```

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: replace graphql-codegen with GenQL pipeline"
```

---

## Task 2: Build StashClient wrapper

**Files:**
- Create: `src/client.ts`
- Modify: `src/index.ts`

**Step 1: Create the StashClient class**

Create `src/client.ts`:

```typescript
import { createClient, Client } from './generated/index.js'

export interface StashClientConfig {
  /** Full URL to Stash server, e.g. "http://localhost:9999" */
  url: string
  /** Stash API key for authentication */
  apiKey: string
}

/**
 * Typed client for the Stash GraphQL API.
 *
 * Provides full API coverage with Prisma-style field selection:
 *
 * ```typescript
 * const stash = new StashClient({ url: '...', apiKey: '...' })
 * const result = await stash.query({
 *   findPerformers: {
 *     __args: { filter: { q: "name" } },
 *     count: true,
 *     performers: { id: true, name: true, birthdate: true }
 *   }
 * })
 * ```
 */
export class StashClient {
  private client: Client

  constructor(config: StashClientConfig) {
    this.client = createClient({
      url: `${config.url}/graphql`,
      headers: {
        ApiKey: config.apiKey,
      },
    })
  }

  /** Execute a typed query with field selection */
  get query() {
    return this.client.query
  }

  /** Execute a typed mutation with field selection */
  get mutation() {
    return this.client.mutation
  }

  /**
   * Execute a raw GraphQL query string.
   * Use for edge cases not covered by the typed client.
   */
  async raw<T = unknown>(query: string, variables?: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${this.url}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ApiKey: this.apiKey,
      },
      body: JSON.stringify({ query, variables }),
    })
    const json = await response.json()
    if (json.errors?.length) {
      throw new Error(json.errors.map((e: { message: string }) => e.message).join(', '))
    }
    return json.data as T
  }

  private get url(): string {
    // Extract from client config — we store it for raw()
    return this._url
  }

  private get apiKey(): string {
    return this._apiKey
  }

  private _url: string
  private _apiKey: string
}
```

Note: The exact shape of `raw()` will depend on how GenQL structures the client. The constructor needs to store `url` and `apiKey` for the raw escape hatch. Refactor as needed once GenQL output is inspected.

**Step 2: Verify the GenQL client shape**

Before finalizing, read the generated `src/generated/index.ts` to understand:
- What `createClient` accepts and returns
- How `client.query` and `client.mutation` work
- What types are exported

Adapt `StashClient` to match the actual GenQL API.

**Step 3: Commit**

```bash
git add src/client.ts
git commit -m "feat: add StashClient wrapper class"
```

---

## Task 3: Update public API and exports

**Files:**
- Modify: `src/index.ts`

**Step 1: Rewrite index.ts**

Replace `src/index.ts` with clean re-exports:

```typescript
// Client
export { StashClient } from './client.js'
export type { StashClientConfig } from './client.js'

// Re-export all generated types for consumers
// GenQL generates types in src/generated/ — export everything
export * from './generated/index.js'
```

**Step 2: Verify important types are exported**

After building, check that consumers can import these (at minimum):
- `StashClient`, `StashClientConfig`
- Entity types: `Performer`, `Scene`, `Studio`, `Tag`, `Gallery`, `Group`, `Image`
- Input types: `PerformerFilterType`, `SceneFilterType`, `FindFilterType`, etc.
- Enums: `CriterionModifier`, `GenderEnum`, `SortDirectionEnum`
- Selection types: `PerformerRequest`, `SceneRequest`, etc. (GenQL naming)

**Step 3: Build and verify**

```bash
npm run build
```

Expected: Clean compilation. `dist/` contains `client.js`, `client.d.ts`, `index.js`, `index.d.ts`, plus generated types.

**Step 4: Commit**

```bash
git add src/index.ts
git commit -m "feat: rewrite public API exports"
```

---

## Task 4: Backwards compatibility shim (optional)

**Files:**
- Create: `src/compat.ts`
- Modify: `src/index.ts`

This task preserves the old `StashApp` singleton API so existing consumers (`stashapp-cli`) don't break on upgrade. Only do this if the type names changed significantly.

**Step 1: Check type name mapping**

Compare old exported names vs GenQL names:
- Old: `Performer`, `Scene`, `PerformerFilterType`, `CriterionModifier`, `GenderEnum`
- GenQL: Check `src/generated/schema.ts` for generated type names

If GenQL uses the same names (it reads them from the schema), no compat shim is needed — just verify and skip this task.

**Step 2: If names differ, create compat re-exports**

Create `src/compat.ts`:

```typescript
// Type aliases for backwards compatibility with stashapp-api@0.x consumers
// These will be removed in a future major version.

export { GenqlPerformer as Performer } from './generated/index.js'
// ... etc, as needed
```

**Step 3: Also provide StashApp as deprecated wrapper**

```typescript
import { StashClient, StashClientConfig } from './client.js'

/** @deprecated Use StashClient instead */
export class StashApp {
  private static instance: StashClient

  static init(config: StashClientConfig): StashClient {
    if (!StashApp.instance) {
      StashApp.instance = new StashClient(config)
    }
    return StashApp.instance
  }
}
```

**Step 4: Add to exports and commit**

```bash
git add src/compat.ts src/index.ts
git commit -m "feat: add backwards compatibility shim for v0.x consumers"
```

---

## Task 5: Update stashapp-cli to use new API

**Files:**
- Modify: `/home/carrot/code/stashapp-cli/src/stash.ts`
- Modify: `/home/carrot/code/stashapp-cli/src/index.ts`
- Modify: Any files importing from `stashapp-api`

**Step 1: Check if compat shim works**

If Task 4 provided `StashApp` compat, test that stashapp-cli builds without changes:

```bash
cd /home/carrot/code/stashapp-cli
npm install ../stashapp-api  # install local version
npm run build
```

If it builds clean, the compat shim is sufficient and this task is done.

**Step 2: If migration needed, update imports**

Replace `StashApp.init()` with `new StashClient()`. Update all query calls from:

```typescript
// Old: fixed method calls
const result = await stash.findPerformers({ filter: { q: "name" } })
```

To:

```typescript
// New: typed field selection
const result = await stash.query({
  findPerformers: {
    __args: { filter: { q: "name" } },
    count: true,
    performers: {
      __scalar: true,
      tags: { id: true, name: true }
    }
  }
})
```

**Step 3: Build and verify**

```bash
npm run build
```

**Step 4: Commit in stashapp-cli repo**

```bash
git add -A
git commit -m "feat: migrate to stashapp-api v1.0 typed client"
```

---

## Task 6: Update schema refresh workflow

**Files:**
- Modify: `update-schema.sh` (or replace with npm script)
- Modify: `package.json`
- Create: `.env.example`

**Step 1: Simplify schema update**

GenQL fetches the schema directly from the endpoint, so `update-schema.sh` becomes unnecessary for codegen. However, keeping a `schema.json` snapshot is useful for diffing schema changes across Stash versions.

Update `update-schema.sh` to just save the snapshot:

```bash
#!/bin/bash
source .env
curl -H "ApiKey: $STASH_API_KEY" \
     -H "Content-Type: application/json" \
     -X POST "$STASH_ENDPOINT/graphql" \
     -d '{"query":"{ __schema { types { kind name fields(includeDeprecated:true) { name type { name kind ofType { name kind } } } } } }"}' \
     > schema.json
echo "Schema snapshot updated"
```

**Step 2: Create .env.example**

```
STASH_ENDPOINT=http://localhost:9999
STASH_API_KEY=your-api-key-here
```

**Step 3: Update package.json scripts**

```json
{
  "scripts": {
    "generate": "genql --config genql.config.js",
    "schema:snapshot": "bash update-schema.sh",
    "build": "npm run generate && tsc",
    "refresh": "npm run schema:snapshot && npm run build",
    "prepublishOnly": "npm run build"
  }
}
```

**Step 4: Commit**

```bash
git add update-schema.sh .env.example package.json
git commit -m "chore: simplify schema refresh workflow"
```

---

## Task 7: Documentation and README

**Files:**
- Modify: `README.md`

**Step 1: Rewrite README**

Cover:
1. **What it is** — Typed TypeScript client for the Stash GraphQL API
2. **Installation** — `npm install stashapp-api`
3. **Quick start** — Create client, run a query, show field selection
4. **Field selection** — Show `{ field: true }`, nested relationships, `__scalar: true`
5. **Mutations** — Show an update example
6. **Raw queries** — Show the escape hatch
7. **Schema refresh** — How to regenerate types when Stash updates
8. **Type exports** — What types consumers can import

Include comparison to stashapp-tools (Python) for context — same API coverage, but type-safe.

**Step 2: Commit**

```bash
git add README.md
git commit -m "docs: rewrite README for v1.0"
```

---

## Task 8: Version bump and publish

**Files:**
- Modify: `package.json`

**Step 1: Bump to v1.0.0**

```bash
npm version major  # 0.4.0 → 1.0.0
```

**Step 2: Verify full build**

```bash
npm run build
```

**Step 3: Check package contents**

```bash
npm pack --dry-run
```

Verify `dist/` includes all generated types and the client wrapper. Verify no source files or `.env` leak into the package.

**Step 4: Publish**

```bash
npm publish
```

**Step 5: Update stashapp-cli to use published version**

```bash
cd /home/carrot/code/stashapp-cli
npm install stashapp-api@1.0.0
npm run build
```

**Step 6: Commit stashapp-cli**

```bash
git add package.json package-lock.json
git commit -m "chore: bump stashapp-api to v1.0.0"
```

---

## Task 9: Archive stash-phoenix-utils

**Step 1: Confirm repo is fully superseded**

Verify stashapp-cli has all features from phoenix-utils (confirmed in brainstorm — it does).

**Step 2: Archive on GitHub**

```bash
gh repo archive carrotwaxr/stash-phoenix-utils --yes
```

**Step 3: Update the repo cleanup plan doc**

Mark stash-phoenix-utils as archived in `/home/carrot/code/2026-03-04-repo-cleanup-plan.md`.

---

## Dependency Graph

```
Task 1 (GenQL pipeline)
  → Task 2 (StashClient wrapper)
    → Task 3 (Public API exports)
      → Task 4 (Compat shim — optional)
        → Task 5 (Update stashapp-cli)
  → Task 6 (Schema refresh workflow) — parallel with Tasks 2-4
Task 3 + Task 6
  → Task 7 (README)
    → Task 8 (Version bump + publish)
      → Task 9 (Archive phoenix-utils)
```

Tasks 2-4 and Task 6 can run in parallel. Everything else is sequential.

---

## Risks & Mitigations

| Risk | Mitigation |
|---|---|
| GenQL scalar type mapping incorrect | `scalarTypes` config in Task 1; verify with runtime test |
| GenQL output too large for npm package | Check `npm pack` size; consider `--onlyTypes` flag if available |
| Stash endpoint unavailable during codegen | `schema.json` snapshot as fallback; GenQL supports `--schema` file input |
| Breaking change for stashapp-cli | Compat shim (Task 4) preserves old API |
| GenQL unmaintained in future | Core technique (mapped types for field narrowing) is portable; can fork or replace runtime |
