import { defineConfig } from 'astro/config';
import path from 'node:path';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';
import robots from 'astro-robots-txt';
import sitemap from 'astro-sitemap';
import min from 'astro-min';

export default defineConfig({
  site: 'https://przemekmiros.pl/',
  output: 'static',
  adapter: netlify(),
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    sitemap(),
    robots({
      policy: [
        { userAgent: '*', allow: '/' }
      ],
      sitemap: 'https://przemekmiros.pl/sitemap-index.xml'
    }),
    // min()
  ],

  vite: {
    cacheDir: path.join(process.env.TEMP || process.cwd(), 'vite-astro-starter-cache'),
    optimizeDeps: {
      include: ['@keystatic/core', '@keystatic/astro'],
      force: true,
    },
    plugins: [tailwindcss()],
  },
});
