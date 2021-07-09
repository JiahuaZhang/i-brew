import { atom, selector } from 'recoil'

export interface Seed {
  tags: string[];
  idea: string;
  // created: number;
  // updated: number;
}

export const defaultSeed: Seed = {
  tags: ['经济', '帅哥', '电影🎬', 'this is a super super super long long logn tag!'],
  idea: '<div>随便写一下感想，❤️大家</div>'
}

export const seedState = atom<Seed>({
  key: 'seedState',
  default: defaultSeed
});

export const seedTagsState = selector<string[]>({
  key: 'seedTagsState',
  get: ({ get }) => get(seedState).tags,
  set: ({ get, set }, newValue) => {
    const currentSeedState = get(seedState);
    set(seedState, { ...currentSeedState, tags: newValue })
  }
});

export const seedIdeastate = selector<string>({
  key: 'seedIdeastate',
  get: ({ get }) => get(seedState).idea,
  set: ({ get, set }, newValue: string) => {
    const currentSeedIdea = get(seedState);
    set(seedState, { ...currentSeedIdea, idea: newValue });
  }
})