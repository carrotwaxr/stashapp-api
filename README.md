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
