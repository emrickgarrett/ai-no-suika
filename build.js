// Build script to create GitHub Pages compatible version
const fs = require('fs');
const path = require('path');

// This script runs after the Vite build to make some modifications
// for GitHub Pages compatibility

// Read the main.js file from dist
const mainJsPath = path.resolve(__dirname, './dist/assets/index-Flsqtgtt.js');
let mainJsContent = fs.readFileSync(mainJsPath, 'utf8');

// Replace import.meta.env references
mainJsContent = mainJsContent.replace(
  /import\.meta\.env\.VITE_IS_DEVELOPMENT\s*===\s*['"](true|false)['"]/g, 
  'false'
);

// Write the modified content back
fs.writeFileSync(mainJsPath, mainJsContent);

console.log('Modified build files for GitHub Pages compatibility');
