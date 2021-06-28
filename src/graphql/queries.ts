/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConfig = /* GraphQL */ `
  query GetConfig($id: ID!) {
    getConfig(id: $id) {
      id
      locale
      tagPopUpControl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listConfigs = /* GraphQL */ `
  query ListConfigs(
    $filter: ModelConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        locale
        tagPopUpControl
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSeed = /* GraphQL */ `
  query GetSeed($id: ID!) {
    getSeed(id: $id) {
      id
      tags
      originalTags
      idea
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSeeds = /* GraphQL */ `
  query ListSeeds(
    $filter: ModelSeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tags
        originalTags
        idea
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
