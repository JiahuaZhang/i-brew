import { selector } from 'recoil';
import { Action, actionState, ActionType } from './action';
import { seedTagsState } from './seed';

export interface History {
  forward?: Action;
  backward?: Action;
  previous?: History;
  next?: History;
  type?: 'action' | 'undo' | 'redo';
}

let currentHistory: History = {};

export const withHistory = (action: Action) => ({ forward: action, type: 'action' } as History);

export const historyTrack = selector<History>({
  key: 'historyTrack',
  get: () => currentHistory,
  set: ({ get, set }, newValue: History) => {

    const undoAction = (action: Action) => {
      const undoAction = { ...action }

      if (ActionType.SeedTag in action) {
        const seedTags = get(seedTagsState);
        const { index, type } = action[ActionType.SeedTag];
        switch (type) {
          case 'add':
            undoAction[ActionType.SeedTag] = { type: 'delete', index: seedTags.length, value: '' };
            return undoAction;
          case 'delete':
            undoAction[ActionType.SeedTag] = { type: 'add', index, value: seedTags[index] };
            return undoAction;
          case 'edit':
            undoAction[ActionType.SeedTag] = { type: 'edit', index, value: seedTags[index] };
            return undoAction;
        }
      } else if (ActionType.SeedIdea in action) {
        throw Error(`Failed to undo action ${JSON.stringify(action)}`);
      }

      throw Error(`Failed to undo action ${JSON.stringify(action)}`);
    }

    switch (newValue.type) {
      case 'action':
        if (!newValue.forward) throw Error('Forward action cannot be null for action type History');

        currentHistory.forward = newValue.forward;
        currentHistory.next = newValue;
        newValue.forward = null;
        newValue.backward = undoAction(currentHistory.forward);
        newValue.previous = currentHistory;
        set(actionState, currentHistory.forward);
        currentHistory = newValue;
        break;
      case 'undo':
        if (!currentHistory.previous) return;

        set(actionState, currentHistory.backward);
        currentHistory = currentHistory.previous;
        break;
      case 'redo':
        if (!currentHistory.next) return;

        set(actionState, currentHistory.forward);
        currentHistory = currentHistory.next;
        break;
      default:
        break;
    }
  }
});