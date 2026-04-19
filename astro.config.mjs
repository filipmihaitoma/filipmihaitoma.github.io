// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// User site — served at the root of filipmihaitoma.github.io.
// NO `base` — it's a user site, served at root.
export default defineConfig({
  site: 'https://filipmihaitoma.github.io',
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
