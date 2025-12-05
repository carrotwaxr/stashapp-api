# stashapp-api

TypeScript npm package providing a type-safe GraphQL client for Stash servers.

## Overview

- Singleton `StashApp` class with URL + API key
- Auto-generated TypeScript types from GraphQL schema via codegen
- Published to npm, consumed by `peek-stash-browser`

## Development

```bash
# Full refresh (fetch schema, generate types, build)
npm run refresh

# Individual steps
npm run update-schema  # Fetch schema from Stash server
npm run codegen        # Generate TypeScript from schema + operations
npm run build          # Compile TypeScript
```

Requires `.env` with `STASH_ENDPOINT` and `STASH_API_KEY` pointing to a running Stash server.

## Adding/Modifying GraphQL Operations

1. Edit `.graphql` files in `src/operations/`
2. Run `npm run codegen` to regenerate types
3. Run `npm run build` to compile
4. Commit only source files (`.graphql`), not generated files in `src/generated/`

## Publishing

```bash
npm run publish:patch  # or :minor or :major
```

This runs `prepublishOnly` hook which does full refresh before publishing.

**After publishing**, update consumers:
```bash
cd ~/code/peek-stash-browser/server
npm install stashapp-api@<new-version>
```

## Key Files

- `src/index.ts` - Main export (StashApp class)
- `src/operations/*.graphql` - GraphQL query/mutation definitions
- `src/generated/` - Auto-generated types and SDK (gitignored)
- `codegen.yml` - GraphQL Code Generator config
