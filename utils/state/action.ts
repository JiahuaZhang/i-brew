import { selector } from 'recoil';
import { seedTagsState } from './seed';

export enum ActionType {
  SeedTag,
  SeedIdea
}

export interface SeedTagAction {
  type: 'edit' | 'add' | 'delete';
  index: number;
  value: string;
}

export interface Action {
  [ActionType.SeedTag]?: SeedTagAction;
}

export const actionState = selector<Action>({
  key: 'actionState',
  get: () => ({} as Action),
  set: ({ get, set }, action: Action) => {
    if (ActionType.SeedTag in action) {
      const seedTags = get(seedTagsState);
      const { index, type, value } = action[ActionType.SeedTag];
      switch (type) {
        case 'add':
          set(seedTagsState, [...seedTags, value]);
          break;
        case 'delete':
          set(seedTagsState, seedTags.filter((_, i) => i !== index))
          break;
        case 'edit':
          set(seedTagsState, seedTags.map((tag, i) => i === index ? value : tag))
          break;
      }
    }
  }
})