import dotenv from "dotenv";
import fs from "fs";
import fetch from "node-fetch";

dotenv.config();

const endpoint = process.env.STASH_ENDPOINT;
const apiKey = process.env.STASH_API_KEY;

const introspectionQuery = `query IntrospectionQuery { __schema { queryType { name } mutationType { name } subscriptionType { name } types { ...FullType } directives { name description locations args { ...InputValue } } } } fragment FullType on __Type { kind name description fields(includeDeprecated: true) { name description args { ...InputValue } type { ...TypeRef } isDeprecated deprecationReason } inputFields { ...InputValue } interfaces { ...TypeRef } enumValues(includeDeprecated: true) { name description isDeprecated deprecationReason } possibleTypes { ...TypeRef } } fragment InputValue on __InputValue { name description type { ...TypeRef } defaultValue } fragment TypeRef on __Type { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name } } } } } } } }`;

fetch(`${endpoint}/graphql`, {
  method: "POST",
  headers: {
    ApiKey: apiKey,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: introspectionQuery }),
})
  .then((res) => res.text())
  .then((body) => {
    fs.writeFileSync("schema.json", body);
    console.log("Schema updated successfully!");
  })
  .catch((err) => {
    console.error("Error updating schema:", err);
    process.exit(1);
  });
