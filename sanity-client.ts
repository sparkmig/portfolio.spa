import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2023-12-08', // Update to the latest API version
  useCdn: false, // Enable CDN caching
});

export default client;