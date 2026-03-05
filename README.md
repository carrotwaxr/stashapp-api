# stashapp-api

Typed TypeScript client for the [Stash](https://stashapp.cc/) GraphQL API. Full coverage of all 74 queries and 129 mutations with Prisma-style field selection and compile-time type narrowing.

Powered by [GenQL](https://github.com/remorses/genql) — select exactly the fields you need, get narrowed return types automatically.

## Installation

```bash
npm install stashapp-api
```

## Quick Start

```typescript
import { StashClient } from 'stashapp-api'

const stash = new StashClient({
  url: 'http://localhost:9999',
  apiKey: 'your-api-key',
})

const result = await stash.query({
  findPerformers: {
    __args: { filter: { per_page: 10 } },
    count: true,
    performers: {
      id: true,
      name: true,
      birthdate: true,
      tags: { id: true, name: true },
    },
  },
})

// result.findPerformers.performers[0].name — typed as string
// result.findPerformers.performers[0].tags[0].name — typed as string
```

## Field Selection

Select exactly the fields you need. The return type narrows to match your selection.

```typescript
// Nested relationships — go as deep as you want
const result = await stash.query({
  findScenes: {
    __args: {
      filter: { per_page: 5 },
      scene_filter: { rating100: { modifier: 'GREATER_THAN', value: 80 } },
    },
    count: true,
    scenes: {
      id: true,
      title: true,
      studio: { id: true, name: true },
      performers: { id: true, name: true, gender: true },
      tags: { id: true, name: true },
    },
  },
})

// All scalar fields shorthand
const full = await stash.query({
  findPerformer: {
    __args: { id: '123' },
    __scalar: true,                    // all scalar fields on Performer
    tags: { id: true, name: true },    // plus nested relationships
  },
})
```

## Mutations

```typescript
// Update a performer
await stash.mutation({
  performerUpdate: {
    __args: { input: { id: '123', name: 'New Name', tag_ids: ['1', '2'] } },
    id: true,
    name: true,
  },
})

// Bulk update scenes
await stash.mutation({
  scenesUpdate: {
    __args: {
      input: [
        { id: 'scene-1', title: 'Updated Title' },
        { id: 'scene-2', rating100: 90 },
      ],
    },
    id: true,
    title: true,
  },
})

// Start a metadata scan
await stash.mutation({
  metadataScan: {
    __args: { input: { paths: ['/media/videos'], scanGeneratePhashes: true } },
  },
})
```

## Raw Queries

Escape hatch for edge cases not covered by the typed client:

```typescript
const result = await stash.raw<{ version: { version: string } }>(
  `query { version { version } }`
)
console.log(result.version.version)
```

## Type Exports

All schema types are re-exported for consumer use:

```typescript
import type {
  Performer,
  Scene,
  Studio,
  Tag,
  Gallery,
  Group,
  Image,
  PerformerFilterType,
  SceneFilterType,
  FindFilterType,
} from 'stashapp-api'

// Enums are exported as string union types
import type { CriterionModifier, GenderEnum, SortDirectionEnum } from 'stashapp-api'
```

## Field Selection Presets

Pre-built field selections for common entity types. These select all scalar fields plus commonly-used relationships (tags, studio, performers, stash_ids), so you don't need to list every field manually or deal with narrowed return types.

```typescript
import { StashClient, SceneFields, PerformerFields } from 'stashapp-api'

// Use a preset directly
const { findScenes } = await stash.query({
  findScenes: {
    __args: { filter: { per_page: 10 } },
    count: true,
    scenes: SceneFields,
  },
})

// Spread and extend with additional relationships
const { findPerformers } = await stash.query({
  findPerformers: {
    __args: { filter: { per_page: 5 } },
    performers: {
      ...PerformerFields,
      scenes: { id: true, title: true },
    },
  },
})
```

Available presets: `SceneFields`, `PerformerFields`, `StudioFields`, `TagFields`, `GalleryFields`, `GroupFields`, `ImageFields`.

Each preset includes all scalar fields plus:
| Preset | Relationships |
|--------|--------------|
| `SceneFields` | studio, performers (with gender), tags, stash_ids |
| `PerformerFields` | tags, stash_ids |
| `StudioFields` | parent_studio, tags, stash_ids |
| `TagFields` | parents, children, stash_ids |
| `GalleryFields` | studio, performers (with gender), tags |
| `GroupFields` | studio, tags |
| `ImageFields` | studio, performers (with gender), tags |

## Migrating from v0.x

### Narrowed return types

GenQL returns `Pick<Scene, selected_fields>` — not the full `Scene` interface. If existing code passes query results to functions typed with `Scene[]`, TypeScript will reject the narrowed type.

**Before (v0.x):** All queries returned full `Scene` objects with every field.

**After (v1.0):** Use field selection presets to get all common fields without manual casting:

```typescript
// Instead of: as unknown as Scene[]
const { findScenes } = await stash.query({
  findScenes: {
    __args: { filter: { per_page: 10 } },
    scenes: SceneFields,  // all scalars + common relationships
  },
})
```

Or use `__scalar: true` to select all scalar fields on any entity:

```typescript
const { findPerformer } = await stash.query({
  findPerformer: {
    __args: { id: '123' },
    __scalar: true,
    tags: { id: true, name: true },
  },
})
```

### Enum naming convention

GenQL exports enums in two forms:

- **Type-level** (bare names): `import type { CriterionModifier, GenderEnum } from 'stashapp-api'`
- **Runtime objects** (prefixed): `import { enumCriterionModifier, enumGenderEnum } from 'stashapp-api'`

In practice, string literals work directly in most places:

```typescript
// String literals — no import needed
scene_filter: { rating100: { modifier: 'GREATER_THAN', value: 80 } }
```

### Generic utility functions

GenQL generates TypeScript `interface` types, which don't have implicit index signatures. Generic functions constrained to `<T extends Record<string, unknown>>` will reject GenQL types.

**Fix:** Loosen constraints on the consumer side:

```typescript
// Before — breaks with GenQL interfaces
function process<T extends Record<string, unknown>>(items: T[]): void

// After — works with any object type
function process<T extends object>(items: T[]): void
```

## Development

### Setup

```bash
cp .env.example .env
# Edit .env with your Stash server URL and API key

npm run build        # Generate types from Stash server + compile
```

### Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Generate GenQL client + compile TypeScript |
| `npm run generate` | Generate GenQL client only |
| `npm run schema:snapshot` | Save schema.json for diffing across Stash versions |
| `npm run refresh` | Schema snapshot + full build |

### Publishing

```bash
npm run publish:patch   # or :minor or :major
```

## License

MIT
