import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/static';
import tailwindcss from '@tailwindcss/vite';
import robots from 'astro-robots-txt';
import sitemap from 'astro-sitemap';
import min from 'astro-min';

export default defineConfig({
  site: 'https://astrokeystat.netlify.app/',
  output: 'static',
  adapter: netlify(),
  integrations: [
    react(),
    keystatic(),
    sitemap(),
    robots({
      policy: [
        { userAgent: '*', allow: '/' }
      ],
      sitemap: 'https://astrokeystat.netlify.app/sitemap-index.xml'
    }),
    // min()
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
