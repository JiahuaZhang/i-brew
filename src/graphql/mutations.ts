/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConfig = /* GraphQL */ `
  mutation CreateConfig(
    $input: CreateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    createConfig(input: $input, condition: $condition) {
      id
      locale
      tagPopUpControl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateConfig = /* GraphQL */ `
  mutation UpdateConfig(
    $input: UpdateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    updateConfig(input: $input, condition: $condition) {
      id
      locale
      tagPopUpControl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteConfig = /* GraphQL */ `
  mutation DeleteConfig(
    $input: DeleteConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    deleteConfig(input: $input, condition: $condition) {
      id
      locale
      tagPopUpControl
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSeed = /* GraphQL */ `
  mutation CreateSeed(
    $input: CreateSeedInput!
    $condition: ModelSeedConditionInput
  ) {
    createSeed(input: $input, condition: $condition) {
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
export const updateSeed = /* GraphQL */ `
  mutation UpdateSeed(
    $input: UpdateSeedInput!
    $condition: ModelSeedConditionInput
  ) {
    updateSeed(input: $input, condition: $condition) {
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
export const deleteSeed = /* GraphQL */ `
  mutation DeleteSeed(
    $input: DeleteSeedInput!
    $condition: ModelSeedConditionInput
  ) {
    deleteSeed(input: $input, condition: $condition) {
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
