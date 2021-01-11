import { SeedTagHeader } from './head/SeedTagHeader';

export const SeedNode = () => {
  return (
    <div>
      <SeedTagHeader />
      <br />
      <textarea cols={100} rows={25} style={{ display: 'block', margin: '0 auto' }}></textarea>
    </div>
  );
};

export default SeedNode;
