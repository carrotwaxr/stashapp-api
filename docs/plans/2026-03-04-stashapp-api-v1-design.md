# stashapp-api v1.0 — Design Document

**Date:** 2026-03-04

## Problem

stashapp-api v0.4.0 has 38 hand-written GraphQL operations covering ~19% of Stash's API surface (74 queries + 129 mutations). Each operation has fixed field selections — consumers cannot choose which fields to fetch or how deep to traverse relationships. Adding coverage means writing and maintaining more `.graphql` files by hand.

The Python ecosystem has `stashapp-tools` (by stg-annon) with ~90 methods and runtime `fragment=` overrides, but no type safety. There is no TypeScript equivalent with full coverage.

## Solution

Replace the graphql-codegen pipeline with **GenQL**, which generates a typed client from schema introspection. Consumers use Prisma-style `{ field: true }` syntax for field selection and get narrowed return types at compile time.

## Consumer API

```typescript
import { StashClient } from 'stashapp-api'

const stash = new StashClient({ url: 'http://localhost:9999', apiKey: '...' })

// Select specific fields — return type narrows automatically
const result = await stash.query({
  findPerformers: {
    __args: { filter: { q: "some name" }, performer_filter: { gender: { value: 'FEMALE' } } },
    count: true,
    performers: {
      id: true,
      name: true,
      birthdate: true,
      scenes: {
        id: true,
        title: true,
        studio: { id: true, name: true }
      }
    }
  }
})
// result.findPerformers.performers[0].name → string (typed)
// result.findPerformers.performers[0].scenes[0].studio.name → string (typed)

// All scalars shorthand
const full = await stash.query({
  findPerformer: {
    __args: { id: "123" },
    __scalar: true,
    tags: { id: true, name: true }
  }
})

// Mutations
await stash.mutation({
  performerUpdate: {
    __args: { input: { id: "123", name: "New Name", tag_ids: ["1"] } },
    id: true,
    name: true,
  }
})

// Raw escape hatch
const custom = await stash.raw<MyType>(`query { version { version } }`)
```

## Architecture Decisions

### GenQL over alternatives

| Considered | Decision | Reason |
|---|---|---|
| gql.tada | Rejected | Requires consumer-side TS plugin config; can't pre-bake into SDK |
| graphql-codegen | Rejected (for operations) | No dynamic field selection; keep for reference only |
| GraphQL Zeus | Rejected | Tuple syntax for arguments is less ergonomic; GenQL's `__args` is cleaner |
| Custom mapped types | Rejected | GenQL already implements the exact pattern; no need to reinvent |
| GQty (proxy-based) | Rejected | Proxy magic doesn't work in SDK/library context |

### GenQL specifically because:
- `{ field: true }` syntax with TypeScript type narrowing — the exact Prisma pattern
- `__scalar: true` shorthand for "all scalar fields"
- No `graphql` runtime dependency (lighter than current setup)
- Generates from introspection endpoint or schema file
- Output is self-contained: types + thin runtime, embeddable in npm package

### Wrapper class over raw GenQL export
- `StashClient` handles auth (ApiKey header) and connection URL
- Provides `raw()` escape hatch for edge cases
- Clean entry point for consumers (`new StashClient(config)`)
- Future: could add rate limiting, retry logic, connection pooling

### Backwards compatibility
- `StashApp` singleton preserved as deprecated wrapper (if needed)
- All existing type names re-exported (GenQL reads names from schema, so they match)
- stashapp-cli updated as part of the rollout

## Comparison to stashapp-tools (Python)

| Capability | stashapp-tools (Python) | stashapp-api v1.0 (TypeScript) |
|---|---|---|
| API coverage | ~90 hand-written methods | Full schema (74 queries + 129 mutations) |
| Field selection | `fragment=` raw string, no validation | `{ field: true }` with compile-time checking |
| Type safety | None (dicts in, dicts out) | Full — narrowed return types from selection |
| Relationship depth | Manual fragment strings | Composable nested `{ select }` objects |
| Default fragments | Auto-introspected at connect time | `__scalar: true` shorthand |
| Schema sync | Developer manually updates methods | `npm run generate` from introspection |
| Ecosystem | Python / PyPI | TypeScript / npm |

## Future: Stash MCP

This package becomes the foundation for a `stash-mcp` server. The MCP tools will import `StashClient` and use typed queries internally. The field selection pattern means MCP tools can fetch exactly the fields needed for each tool's response, keeping payloads efficient.
