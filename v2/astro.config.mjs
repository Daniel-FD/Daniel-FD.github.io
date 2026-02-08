import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://danielfiuza.com',
  integrations: [tailwind()],
  // When ready to deploy, build and copy dist/ contents to ../docs/
  // For local dev, runs at localhost:4321
});
