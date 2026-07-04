import 'dotenv/config'
import fs from "fs";
import { writeSdlFromJson } from "./json-to-sdl.js";

const endpoint = process.env.STASH_ENDPOINT;
const apiKey = process.env.STASH_API_KEY;

const introspectionQuery = `query IntrospectionQuery { __schema { queryType { name } mutationType { name } subscriptionType { name } types { ...FullType } directives { name description locations args { ...InputValue } } } } fragment FullType on __Type { kind name description fields(includeDeprecated: true) { name description args { ...InputValue } type { ...TypeRef } isDeprecated deprecationReason } inputFields { ...InputValue } interfaces { ...TypeRef } enumValues(includeDeprecated: true) { name description isDeprecated deprecationReason } possibleTypes { ...TypeRef } } fragment InputValue on __InputValue { name description type { ...TypeRef } defaultValue } fragment TypeRef on __Type { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name } } } } } } } }`;

if (!endpoint || !apiKey) {
  console.error("Missing STASH_ENDPOINT or STASH_API_KEY in environment");
  process.exit(1);
}

fetch(`${endpoint}/graphql`, {
  method: "POST",
  headers: {
    ApiKey: apiKey,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: introspectionQuery }),
})
  .then(async (res) => {
    const body = await res.text();
    // Validate the response BEFORE writing, so a failed introspection (auth
    // error, non-JSON, GraphQL errors) can't overwrite the committed snapshot
    // with junk.
    if (!res.ok) {
      throw new Error(`introspection HTTP ${res.status} ${res.statusText}: ${body.slice(0, 300)}`);
    }
    let parsed;
    try {
      parsed = JSON.parse(body);
    } catch {
      throw new Error(`introspection returned non-JSON: ${body.slice(0, 300)}`);
    }
    if (parsed.errors?.length) {
      throw new Error(`introspection returned errors: ${JSON.stringify(parsed.errors)}`);
    }
    if (!parsed.data?.__schema) {
      throw new Error("introspection response missing data.__schema");
    }
    fs.writeFileSync("schema.json", body);
    console.log("Wrote schema.json (introspection snapshot)");
    // Derive the SDL that codegen builds from, so the committed schema and the
    // offline `npm run generate` stay in lockstep.
    writeSdlFromJson("schema.json", "schema.graphql");
  })
  .catch((err) => {
    console.error("Error updating schema:", err.message ?? err);
    process.exit(1);
  });
