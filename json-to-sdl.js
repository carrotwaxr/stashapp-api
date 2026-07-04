import fs from 'fs'
import { pathToFileURL } from 'node:url'
import { buildClientSchema, printSchema } from 'graphql'

/**
 * Convert a GraphQL introspection JSON snapshot into an SDL schema file.
 *
 * GenQL's `--schema` flag only accepts SDL, not introspection JSON, so the
 * committed codegen source is `schema.graphql` (SDL) derived from the
 * `schema.json` introspection snapshot. Keeping both lets us diff the raw
 * introspection across Stash versions while building the client fully offline.
 *
 * @param {string} jsonPath  Path to the introspection JSON (raw HTTP response
 *                           `{ data: { __schema } }` or a bare `{ __schema }`).
 * @param {string} sdlPath   Path to write the SDL schema to.
 */
export function writeSdlFromJson(jsonPath = 'schema.json', sdlPath = 'schema.graphql') {
  const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
  const introspection = raw.data ?? raw
  const sdl = printSchema(buildClientSchema(introspection))
  fs.writeFileSync(sdlPath, sdl)
  console.log(`Wrote ${sdlPath} (SDL) from ${jsonPath}`)
}

// Allow standalone use: `node json-to-sdl.js [jsonPath] [sdlPath]`
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  writeSdlFromJson(process.argv[2], process.argv[3])
}
