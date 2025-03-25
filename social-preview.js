// social-preview.js - Creates a social media preview image with fruits

/**
 * Generates a social media preview image with game fruits
 * This script should be run once to generate the image, then the image can be used for social sharing
 */

// Canvas setup
const canvas = document.createElement('canvas');
canvas.width = 1200;
canvas.height = 630; // Standard open graph image dimensions
const ctx = canvas.getContext('2d');

// Fill background with gradient
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, '#1a1a1a');
gradient.addColorStop(1, '#333333');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Add game title
ctx.font = 'bold 80px Arial, sans-serif';
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';
ctx.fillText('Ai-No-Suika Game', canvas.width / 2, 120);

// Add challenge text
ctx.font = 'bold 40px Arial, sans-serif';
ctx.fillStyle = '#ff9900';
ctx.fillText('Can you beat my score?', canvas.width / 2, 200);

// Draw fruit emojis in a fun arrangement
const emojis = ['🍒', '🍓', '🍇', '🍊', '🍋', '🍎', '🍐', '🍑', '🍉', '🥝'];
const positions = [];

// Generate random positions for fruits that don't overlap
for (let i = 0; i < 20; i++) {
    const size = 30 + Math.random() * 100;
    const x = 100 + Math.random() * (canvas.width - 200);
    const y = 250 + Math.random() * (canvas.height - 350);
    
    // Check if this position overlaps with any existing positions
    let overlaps = false;
    for (const pos of positions) {
        const dx = pos.x - x;
        const dy = pos.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < (pos.size / 2 + size / 2)) {
            overlaps = true;
            break;
        }
    }
    
    if (!overlaps) {
        positions.push({ x, y, size, emoji: emojis[Math.floor(Math.random() * emojis.length)] });
    }
}

// Draw each fruit emoji
for (const pos of positions) {
    ctx.font = `${pos.size}px Arial`;
    ctx.fillText(pos.emoji, pos.x, pos.y);
}

// Add game URL at the bottom
ctx.font = '30px Arial, sans-serif';
ctx.fillStyle = '#ffffff';
ctx.fillText('https://www.ainosuika.com', canvas.width / 2, canvas.height - 50);

// Draw a decorative border
ctx.strokeStyle = '#ff9900';
ctx.lineWidth = 10;
ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

// Export the image
function exportImage() {
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'social-preview.png';
    link.href = dataUrl;
    link.click();
    
    // Also log the data URL for debugging
    console.log('Social preview image created. Use this data URL for testing:');
    console.log(dataUrl.substring(0, 100) + '...');
}

// Call this function to generate and download the image
// exportImage();

// Expose canvas in case we want to add it to the DOM for debugging
window.previewCanvas = canvas;
