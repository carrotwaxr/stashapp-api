// Export important enums and filter types for query construction
export type {
  PerformerFilterType,
  SceneFilterType,
  TagFilterType,
  StudioFilterType,
  GalleryFilterType,
  ImageFilterType,
} from "./generated/graphql.js";
import {
  CriterionModifier as _CriterionModifier,
  GenderEnum as _GenderEnum,
} from "./generated/graphql.js";
export const CriterionModifier = _CriterionModifier;
export const GenderEnum = _GenderEnum;
import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/graphql.js";

export interface StashAppConfig {
  url: string;
  apiKey: string;
}

// Export important types for consumers
export type {
  Performer,
  Scene,
  Tag,
  Studio,
  Gallery,
  Image,
} from "./generated/graphql.js";

/**
 * Singleton class for interacting with the Stash GraphQL API.
 * Provides type-safe query and mutation methods.
 */
export class StashApp {
  private static instance: StashApp;
  private client: GraphQLClient;
  private sdk: ReturnType<typeof getSdk>;

  /** Find performers */
  public findPerformers: ReturnType<typeof getSdk>["FindPerformers"];
  /** Find studios */
  public findStudios: ReturnType<typeof getSdk>["FindStudios"];
  /** Find scenes */
  public findScenes: ReturnType<typeof getSdk>["FindScenes"];
  /** Find tags */
  public findTags: ReturnType<typeof getSdk>["FindTags"];
  /** Update a scene */
  public sceneUpdate: ReturnType<typeof getSdk>["sceneUpdate"];

  private constructor(config: StashAppConfig) {
    this.client = new GraphQLClient(config.url, {
      headers: { ApiKey: config.apiKey },
    });
    this.sdk = getSdk(this.client);
    this.findPerformers = this.sdk.FindPerformers;
    this.findStudios = this.sdk.FindStudios;
    this.findScenes = this.sdk.FindScenes;
    this.findTags = this.sdk.FindTags;
    this.sceneUpdate = this.sdk.sceneUpdate;
  }

  /** Initialize the singleton StashApp instance */
  public static init(config: StashAppConfig): StashApp {
    if (!StashApp.instance) {
      StashApp.instance = new StashApp(config);
    }
    return StashApp.instance;
  }
}
