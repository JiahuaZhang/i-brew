// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Config, Seed } = initSchema(schema);

export {
  Config,
  Seed
};