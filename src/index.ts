import { GraphQLClient } from "graphql-request";
import { attachStashMethods } from "./stash-methods.js";

export interface StashAppConfig {
  url: string;
  apiKey: string;
}

export class StashApp {
  private static instance: StashApp;
  private client: GraphQLClient;

  private constructor(config: StashAppConfig) {
    this.client = new GraphQLClient(config.url, {
      headers: { ApiKey: config.apiKey },
    });
    attachStashMethods(this, this.client);
  }

  public static init(config: StashAppConfig): StashApp {
    if (!StashApp.instance) {
      StashApp.instance = new StashApp(config);
    }
    return StashApp.instance;
  }

  // Example query method (to be codegen'd)
  // async getPerformers(args: GetPerformersArgs): Promise<GetPerformersResult> {
  //   return this.client.request(...);
  // }
}
