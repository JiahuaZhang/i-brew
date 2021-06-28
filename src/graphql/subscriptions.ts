/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateConfigById = /* GraphQL */ `
  subscription OnUpdateConfigById($id: ID!) {
    onUpdateConfigById(id: $id) {
      id
      locale
      tagPopUpControl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateConfig = /* GraphQL */ `
  subscription OnCreateConfig($owner: String!) {
    onCreateConfig(owner: $owner) {
      id
      locale
      tagPopUpControl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateConfig = /* GraphQL */ `
  subscription OnUpdateConfig($owner: String!) {
    onUpdateConfig(owner: $owner) {
      id
      locale
      tagPopUpControl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteConfig = /* GraphQL */ `
  subscription OnDeleteConfig($owner: String!) {
    onDeleteConfig(owner: $owner) {
      id
      locale
      tagPopUpControl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSeed = /* GraphQL */ `
  subscription OnCreateSeed($owner: String!) {
    onCreateSeed(owner: $owner) {
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
export const onUpdateSeed = /* GraphQL */ `
  subscription OnUpdateSeed($owner: String!) {
    onUpdateSeed(owner: $owner) {
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
export const onDeleteSeed = /* GraphQL */ `
  subscription OnDeleteSeed($owner: String!) {
    onDeleteSeed(owner: $owner) {
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
