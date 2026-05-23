// @ts-check
import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://danieljerez.es',
  compressHTML: true,
  devToolbar: { enabled: false },

  vite: {
    resolve: {
      alias: {
        '@components': resolve(__dirname, './src/components'),
        '@layouts': resolve(__dirname, './src/layouts'),
        '@styles': resolve(__dirname, './src/styles'),
        '@seo': resolve(__dirname, './src/seo'),
        '@data': resolve(__dirname, './src/data'),
        '@assets': resolve(__dirname, './src/assets'),
      },
    },
  },

  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    sitemap(),
  ],
});