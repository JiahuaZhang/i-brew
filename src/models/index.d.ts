import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Config {
  readonly id: string;
  readonly locale?: string;
  readonly tagPopUpControl?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Config>);
  static copyOf(source: Config, mutator: (draft: MutableModel<Config>) => MutableModel<Config> | void): Config;
}

export declare class Seed {
  readonly id: string;
  readonly tags: (string | null)[];
  readonly originalTags: (string | null)[];
  readonly idea: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Seed>);
  static copyOf(source: Seed, mutator: (draft: MutableModel<Seed>) => MutableModel<Seed> | void): Seed;
}