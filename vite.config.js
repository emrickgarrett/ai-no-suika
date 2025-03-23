// vite.config.js
export default {
  // Set the base path to work with GitHub Pages
  base: './',
  build: {
    // Generate source maps for easier debugging
    sourcemap: true,
    // Configure output options
    rollupOptions: {
      output: {
        // Use ES modules for modern browsers
        format: 'es',
        // Ensure proper chunking 
        manualChunks: undefined,
        // Add hash to file names for cache busting
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Inline smaller assets
    assetsInlineLimit: 4096
  }
}
