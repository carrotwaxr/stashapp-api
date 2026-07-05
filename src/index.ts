// Client
export { StashClient } from './client.js'
export type { StashClientConfig } from './client.js'

// Structured errors
export { StashApiError } from './errors.js'
export type { GraphQLErrorLike } from './errors.js'

// Bulk helpers
export { bulkSceneUpdateChunked } from './bulk.js'

// Re-export all generated types for consumers
export * from './generated/index.js'

// Field selection presets
export {
  SceneFields,
  PerformerFields,
  StudioFields,
  TagFields,
  GalleryFields,
  GroupFields,
  ImageFields,
} from './presets.js'

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
