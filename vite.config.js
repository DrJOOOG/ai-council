const { defineConfig } = require('vite');

module.exports = defineConfig({
  root: '.',
  // The repository root is the static app source, while dist/ is a nested
  // Git working tree for deployment. Do not treat the whole root as Vite's
  // publicDir, otherwise build tries to copy .git into dist and can wipe it.
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html'
    }
  }
});
