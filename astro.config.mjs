import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';
import robots from 'astro-robots-txt';
import sitemap from 'astro-sitemap';

export default defineConfig({
  site: 'https://astrokeystat.netlify.app/',
  output: 'server',
  adapter: netlify(),
  integrations: [
    react(),
    keystatic(),
    sitemap(),
    robots({
      policy: [
        { userAgent: '*', allow: '/' }
      ],
      sitemap: 'https://astrokeystat.netlify.app/sitemap.xml'
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
