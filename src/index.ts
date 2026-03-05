// Client
export { StashClient } from './client.js'
export type { StashClientConfig } from './client.js'

// Re-export all generated types for consumers
export * from './generated/index.js'

// Backwards compatibility
import { StashClient, type StashClientConfig } from './client.js'

/** @deprecated Use StashClient instead */
export class StashApp {
  private static instance: StashClient

  static init(config: StashClientConfig): StashClient {
    if (!StashApp.instance) {
      StashApp.instance = new StashClient(config)
    }
    return StashApp.instance
  }
}
