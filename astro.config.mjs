// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    vue()],
});
