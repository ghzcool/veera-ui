import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'veera-ui',
      fileName: () => 'veera-ui.js',
      formats: ['umd'],
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
