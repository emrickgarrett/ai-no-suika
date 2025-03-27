// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Set the base path to work with GitHub Pages
  base: './',
  build: {
    // Output to root directory instead of dist
    outDir: '.',
    // Empty the output directory before building
    emptyOutDir: false,
    // Generate source maps for easier debugging
    sourcemap: true,
    // Configure output options
    rollupOptions: {
      output: {
        // Use ES modules for modern browsers
        format: 'es',
        // Ensure proper chunking and vendor splitting
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('cannon-es')) {
              return 'vendor';
            }
          }
        },
        // Place assets in root directory
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  optimizeDeps: {
    include: ['three', 'cannon-es', 'three/examples/jsm/controls/OrbitControls.js']
  }
});
