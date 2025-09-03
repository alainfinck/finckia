import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://finckia.com',
  title: 'Finckia - Développement SaaS sur mesure avec IA',
  description: 'Spécialiste du développement de logiciels SaaS sur mesure avec intelligence artificielle'
});
