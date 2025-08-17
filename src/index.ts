// Export important enums and filter types for query construction
export type {
  GenderEnum,
  CriterionModifier,
  PerformerFilterType,
  SceneFilterType,
  TagFilterType,
  StudioFilterType,
  GalleryFilterType,
  ImageFilterType,
} from "./generated/graphql.js";
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

export class StashApp {
  private static instance: StashApp;
  private client: GraphQLClient;
  private sdk: ReturnType<typeof getSdk>;
  public findPerformers: ReturnType<typeof getSdk>["FindPerformers"];
  public findStudios: ReturnType<typeof getSdk>["FindStudios"];
  public findScenes: ReturnType<typeof getSdk>["FindScenes"];
  public findTags: ReturnType<typeof getSdk>["FindTags"];

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

  public static init(config: StashAppConfig): StashApp {
    if (!StashApp.instance) {
      StashApp.instance = new StashApp(config);
    }
    return StashApp.instance;
  }
}
