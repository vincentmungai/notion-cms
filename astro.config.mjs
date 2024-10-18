import { defineConfig } from 'astro/config';

import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'jcy48b75',
    dataset: 'production',
    apiVersion: 'v2021-03-25',
    useCdn: true
  })]
});