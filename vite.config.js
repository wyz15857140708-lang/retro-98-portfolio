import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures assets load correctly on GitHub Pages subpaths like /retro-98-portfolio/
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
