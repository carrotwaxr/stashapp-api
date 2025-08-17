# stashapp-api

A TypeScript npm package for interacting with the Stash GraphQL server.

## Features

- Singleton connection class (URL + API key)
- Type-safe methods for all available queries (auto-generated via GraphQL introspection/codegen)
- Strict TypeScript types for all queries and arguments
- Ready for npm publishing

## Usage

```ts
import { StashApp } from "stashapp-api";

const stash = StashApp.init({
  url: "http://your-stash-url/graphql",
  apiKey: "your-api-key",
});

// Find performers with performer_filter
const performers = await stash.findPerformers({
  filter: { per_page: 10 },
  performer_filter: {
    gender: { modifier: "EQUALS", value: "FEMALE" },
    favorite: true,
  },
});

// Find scenes with scene_filter
const scenes = await stash.findScenes({
  filter: { per_page: 5 },
  scene_filter: {
    rating100: { modifier: "GREATER_THAN", value: 80 },
    performer_favorite: true,
  },
});

// Find tags with tag_filter
const tags = await stash.findTags({
  filter: { per_page: 10 },
  tag_filter: {
    favorite: true,
    name: { modifier: "MATCHES_REGEX", value: "^A" },
  },
});

// Update a scene
const updatedScene = await stash.sceneUpdate({
  input: {
    id: "scene-id",
    title: "New Title",
  },
});
```

## Development

- Run `npm run refresh` to update codegen output and build the package
- Run `npm run codegen` to update types and queries only
- Run `npm run build` to compile only

## License

MIT
