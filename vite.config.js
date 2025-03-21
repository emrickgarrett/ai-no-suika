// vite.config.js
export default {
  // Set the base path to work with GitHub Pages
  base: './',
  build: {
    // Use IIFE format to avoid module issues
    rollupOptions: {
      output: {
        format: 'iife',
        // Ensure everything is in a single file
        inlineDynamicImports: true
      }
    },
    // Inline smaller assets
    assetsInlineLimit: 100000
  }
}
