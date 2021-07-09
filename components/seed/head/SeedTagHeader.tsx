import { useRecoilValue } from 'recoil';
import { seedTagsState } from '../../../src/utils/state/seed';
import { NewSeedTag } from './NewSeedTag';
import { SeedTag } from './SeedTag';

export const SeedTagHeader = () => {
  const tags = useRecoilValue(seedTagsState);

  return (
    <div style={{ fontSize: '1.25rem', margin: '0 1rem' }}>
      {tags.map((tag, index, array) => (
        <SeedTag tag={tag} tags={array} index={index} key={tag} />
      ))}

      <NewSeedTag />
    </div>
  );
};

// todo? draggable tag to reorder
