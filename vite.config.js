const { defineConfig } = require('vite');

module.exports = defineConfig({
  root: '.',
  publicDir: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html'
    }
  }
});
