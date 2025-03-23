// preview.js - Generate a static preview image for social media
// Run this script to generate a preview.png file that can be uploaded to GitHub

const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a canvas for the preview image
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fill background with gradient-like solid color (since node-canvas doesn't support gradients well)
ctx.fillStyle = '#1a1a1a';
ctx.fillRect(0, 0, width, height);

// Add game title
ctx.font = 'bold 80px Arial, sans-serif';
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';
ctx.fillText('Ai-No-Suika Game', width / 2, 120);

// Add score
ctx.font = 'bold 60px Arial, sans-serif';
ctx.fillStyle = '#ff9900';
ctx.fillText('Stack Fruits & Score Big!', width / 2, 200);

// Add challenge text
ctx.font = 'bold 40px Arial, sans-serif';
ctx.fillStyle = '#ffffff';
ctx.fillText('Can you beat the high score?', width / 2, 280);

// Draw decorative fruits using emoji
const fruitEmojis = ['🍒', '🍓', '🍊', '🍋', '🍎', '🍐', '🍑', '🍉', '🍇'];
for (let i = 0; i < 15; i++) {
    const size = 60 + Math.floor(Math.random() * 40);
    const x = 100 + Math.random() * (width - 200);
    const y = 320 + Math.random() * (height - 450);
    
    ctx.font = `${size}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const emoji = fruitEmojis[Math.floor(Math.random() * fruitEmojis.length)];
    ctx.fillText(emoji, x, y);
}

// Add game URL at the bottom
ctx.font = '24px Arial, sans-serif';
ctx.fillStyle = '#ffffff';
ctx.fillText('https://emrickgarrett.github.io/ai-no-suika/', width / 2, height - 50);

// Add decorative border
ctx.strokeStyle = '#ff9900';
ctx.lineWidth = 10;
ctx.strokeRect(20, 20, width - 40, height - 40);

// Save the image to a file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./preview.png', buffer);

console.log('Preview image created: preview.png');
console.log('Upload this file to your GitHub repository to enable social media previews.');
