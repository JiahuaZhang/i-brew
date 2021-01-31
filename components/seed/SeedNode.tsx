import { SeedIdea } from './body/SeedIdea';
import { SeedTagHeader } from './head/SeedTagHeader';

export const SeedNode = () => {
  return (
    <div>
      <SeedTagHeader />
      <SeedIdea />
    </div>
  );
};

export default SeedNode;
