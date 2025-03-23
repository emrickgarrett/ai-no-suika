// Simple script to create a social media preview image using the browser's canvas API
// Run this in the browser to generate the image

function createPreviewImage() {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630; // Standard dimensions for social media preview images
    document.body.appendChild(canvas);
    
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
    
    // Generate random positions for fruits
    for (let i = 0; i < 20; i++) {
        const size = 30 + Math.random() * 100; 
        const x = 100 + Math.random() * (canvas.width - 200);
        const y = 250 + Math.random() * (canvas.height - 350);
        
        // Check for overlaps with previously placed emojis
        let overlaps = false;
        for (const pos of positions) {
            const dx = pos.x - x;
            const dy = pos.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < (pos.size/2 + size/2)) {
                overlaps = true;
                break;
            }
        }
        
        if (!overlaps) {
            positions.push({ x, y, size, emoji: emojis[Math.floor(Math.random() * emojis.length)] });
        }
    }
    
    // Draw each emoji
    positions.forEach(pos => {
        ctx.font = `${pos.size}px Arial, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(pos.emoji, pos.x, pos.y);
    });
    
    // Add game URL at the bottom
    ctx.font = '24px Arial, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('https://emrickgarrett.github.io/ai-no-suika/', canvas.width / 2, canvas.height - 50);
    
    // Add decorative border
    ctx.strokeStyle = '#ff9900';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Instructions
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(0, 0, canvas.width, 40);
    ctx.fillStyle = '#ffffff';
    ctx.font = '16px Arial, sans-serif';
    ctx.fillText('Right-click on this image and select "Save Image As..." to save the preview image as social-preview.png', canvas.width / 2, 20);
    
    // Return the canvas for direct download
    return canvas;
}

// Create the preview image
const canvas = createPreviewImage();

// Open instructions
console.log('Preview image created! Right-click and save as "social-preview.png" in the project directory.');

// Add download button
const downloadButton = document.createElement('button');
downloadButton.innerText = 'Download Preview Image';
downloadButton.style.position = 'fixed';
downloadButton.style.bottom = '20px';
downloadButton.style.left = '50%';
downloadButton.style.transform = 'translateX(-50%)';
downloadButton.style.padding = '10px 20px';
downloadButton.style.background = '#4CAF50';
downloadButton.style.color = 'white';
downloadButton.style.border = 'none';
downloadButton.style.borderRadius = '5px';
downloadButton.style.cursor = 'pointer';
downloadButton.style.fontSize = '16px';

downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'social-preview.png';
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.body.appendChild(downloadButton);
