import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  site: 'https://bitcrafttech.com',
  markdown: {
    // Dark-only theme. Shiki ships these themes offline (no CDN).
    shikiConfig: {
      theme: 'github-dark',
      wrap: false,
    },
  },
});
