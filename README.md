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
const result = await stash.someQuery({ ...args });
```

## Development

- Run `npm run codegen` to update types and queries
- Run `npm run build` to compile

## License

MIT
