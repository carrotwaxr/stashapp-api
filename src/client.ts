import { createClient, type Client } from './generated/index.js'

export interface StashClientConfig {
  /** Full URL to Stash server, e.g. "http://localhost:9999" */
  url: string
  /** Stash API key for authentication */
  apiKey: string
}

export class StashClient {
  private client: Client
  private _url: string
  private _apiKey: string

  constructor(config: StashClientConfig) {
    this._url = config.url
    this._apiKey = config.apiKey
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
    const response = await fetch(`${this._url}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ApiKey: this._apiKey,
      },
      body: JSON.stringify({ query, variables }),
    })
    const json = (await response.json()) as { data?: T; errors?: { message: string }[] }
    if (json.errors?.length) {
      throw new Error(json.errors.map((e) => e.message).join(', '))
    }
    return json.data as T
  }
}
