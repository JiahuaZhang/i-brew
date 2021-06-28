/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateConfigInput = {
  id?: string | null,
  locale?: string | null,
  tagPopUpControl?: string | null,
};

export type ModelConfigConditionInput = {
  locale?: ModelStringInput | null,
  tagPopUpControl?: ModelStringInput | null,
  and?: Array< ModelConfigConditionInput | null > | null,
  or?: Array< ModelConfigConditionInput | null > | null,
  not?: ModelConfigConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Config = {
  __typename: "Config",
  id: string,
  locale?: string | null,
  tagPopUpControl?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateConfigInput = {
  id: string,
  locale?: string | null,
  tagPopUpControl?: string | null,
};

export type DeleteConfigInput = {
  id: string,
};

export type CreateSeedInput = {
  id?: string | null,
  tags: Array< string | null >,
  originalTags: Array< string | null >,
  idea: string,
};

export type ModelSeedConditionInput = {
  tags?: ModelStringInput | null,
  originalTags?: ModelStringInput | null,
  idea?: ModelStringInput | null,
  and?: Array< ModelSeedConditionInput | null > | null,
  or?: Array< ModelSeedConditionInput | null > | null,
  not?: ModelSeedConditionInput | null,
};

export type Seed = {
  __typename: "Seed",
  id: string,
  tags: Array< string | null >,
  originalTags: Array< string | null >,
  idea: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateSeedInput = {
  id: string,
  tags?: Array< string | null > | null,
  originalTags?: Array< string | null > | null,
  idea?: string | null,
};

export type DeleteSeedInput = {
  id: string,
};

export type ModelConfigFilterInput = {
  id?: ModelIDInput | null,
  locale?: ModelStringInput | null,
  tagPopUpControl?: ModelStringInput | null,
  and?: Array< ModelConfigFilterInput | null > | null,
  or?: Array< ModelConfigFilterInput | null > | null,
  not?: ModelConfigFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelConfigConnection = {
  __typename: "ModelConfigConnection",
  items?:  Array<Config | null > | null,
  nextToken?: string | null,
};

export type ModelSeedFilterInput = {
  id?: ModelIDInput | null,
  tags?: ModelStringInput | null,
  originalTags?: ModelStringInput | null,
  idea?: ModelStringInput | null,
  and?: Array< ModelSeedFilterInput | null > | null,
  or?: Array< ModelSeedFilterInput | null > | null,
  not?: ModelSeedFilterInput | null,
};

export type ModelSeedConnection = {
  __typename: "ModelSeedConnection",
  items?:  Array<Seed | null > | null,
  nextToken?: string | null,
};

export type CreateConfigMutationVariables = {
  input: CreateConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type CreateConfigMutation = {
  createConfig?:  {
    __typename: "Config",
    id: string,
    locale?: string | null,
    tagPopUpControl?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateConfigMutationVariables = {
  input: UpdateConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type UpdateConfigMutation = {
  updateConfig?:  {
    __typename: "Config",
    id: string,
    locale?: string | null,
    tagPopUpControl?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteConfigMutationVariables = {
  input: DeleteConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type DeleteConfigMutation = {
  deleteConfig?:  {
    __typename: "Config",
    id: string,
    locale?: string | null,
    tagPopUpControl?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSeedMutationVariables = {
  input: CreateSeedInput,
  condition?: ModelSeedConditionInput | null,
};

export type CreateSeedMutation = {
  createSeed?:  {
    __typename: "Seed",
    id: string,
    tags: Array< string | null >,
    originalTags: Array< string | null >,
    idea: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateSeedMutationVariables = {
  input: UpdateSeedInput,
  condition?: ModelSeedConditionInput | null,
};

export type UpdateSeedMutation = {
  updateSeed?:  {
    __typename: "Seed",
    id: string,
    tags: Array< string | null >,
    originalTags: Array< string | null >,
    idea: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteSeedMutationVariables = {
  input: DeleteSeedInput,
  condition?: ModelSeedConditionInput | null,
};

export type DeleteSeedMutation = {
  deleteSeed?:  {
    __typename: "Seed",
    id: string,
    tags: Array< string | null >,
    originalTags: Array< string | null >,
    idea: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetConfigQueryVariables = {
  id: string,
};

export type GetConfigQuery = {
  getConfig?:  {
    __typename: "Config",
    id: string,
    locale?: string | null,
    tagPopUpControl?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListConfigsQueryVariables = {
  filter?: ModelConfigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConfigsQuery = {
  listConfigs?:  {
    __typename: "ModelConfigConnection",
    items?:  Array< {
      __typename: "Config",
      id: string,
      locale?: string | null,
      tagPopUpControl?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSeedQueryVariables = {
  id: string,
};

export type GetSeedQuery = {
  getSeed?:  {
    __typename: "Seed",
    id: string,
    tags: Array< string | null >,
    originalTags: Array< string | null >,
    idea: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSeedsQueryVariables = {
  filter?: ModelSeedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSeedsQuery = {
  listSeeds?:  {
    __typename: "ModelSeedConnection",
    items?:  Array< {
      __typename: "Seed",
      id: string,
      tags: Array< string | null >,
      originalTags: Array< string | null >,
      idea: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnUpdateConfigByIdSubscriptionVariables = {
  id: string,
};

export type OnUpdateConfigByIdSubscription = {
  onUpdateConfigById?:  {
    __typename: "Config",
    id: string,
    locale?: string | null,
    tagPopUpControl?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateConfigSubscriptionVariables = {
  owner: string,
};

export type OnCreateConfigSubscription = {
  onCreateConfig?:  {
    __typename: "Config",
    id: string,
    locale?: string | null,
    tagPopUpControl?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateConfigSubscriptionVariables = {
  owner: string,
};

export type OnUpdateConfigSubscription = {
  onUpdateConfig?:  {
    __typename: "Config",
    id: string,
    locale?: string | null,
    tagPopUpControl?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteConfigSubscriptionVariables = {
  owner: string,
};

export type OnDeleteConfigSubscription = {
  onDeleteConfig?:  {
    __typename: "Config",
    id: string,
    locale?: string | null,
    tagPopUpControl?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSeedSubscriptionVariables = {
  owner: string,
};

export type OnCreateSeedSubscription = {
  onCreateSeed?:  {
    __typename: "Seed",
    id: string,
    tags: Array< string | null >,
    originalTags: Array< string | null >,
    idea: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSeedSubscriptionVariables = {
  owner: string,
};

export type OnUpdateSeedSubscription = {
  onUpdateSeed?:  {
    __typename: "Seed",
    id: string,
    tags: Array< string | null >,
    originalTags: Array< string | null >,
    idea: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSeedSubscriptionVariables = {
  owner: string,
};

export type OnDeleteSeedSubscription = {
  onDeleteSeed?:  {
    __typename: "Seed",
    id: string,
    tags: Array< string | null >,
    originalTags: Array< string | null >,
    idea: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
