import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'uruaaa',
  apiKey: process.env.API_KEY,
});