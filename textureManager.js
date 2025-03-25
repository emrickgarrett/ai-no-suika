import * as THREE from 'three';

/**
 * TextureManager handles the creation and management of all textures used in the game
 */
export class TextureManager {
    constructor() {
        // Initialize texture properties
        this.orangeTexture = null;
        this.strawberryTexture = null;
        this.watermelonTexture = null;
        this.grapeTexture = null;
        this.grapeAltTexture = null; // New alternate grape texture with face
        this.appleTexture = null;
        this.pearTexture = null;
        this.peachTexture = null;
        this.pumpkinTexture = null;
        this.melonTexture = null;
        this.paperTexture = null;
        
        // Create all textures
        this.createProceduralTextures();
        this.createPaperTexture();
    }
    
    /**
     * Create paper texture used for the container
     */
    createPaperTexture() {
        // Create a procedural paper bag texture
        const textureSize = 512;
        const canvas = document.createElement('canvas');
        canvas.width = textureSize;
        canvas.height = textureSize;
        const ctx = canvas.getContext('2d');
        
        // Base paper color - kraft paper brown
        ctx.fillStyle = '#C49A6C';
        ctx.fillRect(0, 0, textureSize, textureSize);
        
        // Add paper grain texture
        const imageData = ctx.getImageData(0, 0, textureSize, textureSize);
        const data = imageData.data;
        
        // Add paper grain noise
        for (let i = 0; i < data.length; i += 4) {
            // More varied, natural-looking noise for paper grain
            const noise = Math.random() * 20 - 10;
            data[i] = Math.max(0, Math.min(255, data[i] + noise));       // R
            data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise * 0.9)); // G
            data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise * 0.8)); // B
        }
        
        ctx.putImageData(imageData, 0, 0);
        
        // Add some darker edges for depth
        const edgeGradient = ctx.createRadialGradient(
            textureSize/2, textureSize/2, textureSize/2 * 0.7,
            textureSize/2, textureSize/2, textureSize/2
        );
        edgeGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        edgeGradient.addColorStop(1, 'rgba(0, 0, 0, 0.2)');
        
        ctx.fillStyle = edgeGradient;
        ctx.fillRect(0, 0, textureSize, textureSize);
        
        // Add creases and fold lines
        for (let i = 0; i < 10; i++) {
            const x1 = Math.random() * textureSize;
            const y1 = Math.random() * textureSize;
            const x2 = x1 + (Math.random() * 200 - 100);
            const y2 = y1 + (Math.random() * 200 - 100);
            const lineWidth = 1 + Math.random() * 3;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(90, 60, 40, ${0.05 + Math.random() * 0.1})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
        }
        
        // Add small stains/discolorations
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * textureSize;
            const y = Math.random() * textureSize;
            const radius = 5 + Math.random() * 20;
            
            const stainGradient = ctx.createRadialGradient(
                x, y, 0,
                x, y, radius
            );
            
            const opacity = 0.03 + Math.random() * 0.08;
            const colorVariation = Math.random();
            
            // Vary stain colors between darker brown and slight yellow/orange
            if (colorVariation < 0.7) {
                stainGradient.addColorStop(0, `rgba(80, 50, 30, ${opacity})`);
                stainGradient.addColorStop(1, `rgba(80, 50, 30, 0)`);
            } else {
                stainGradient.addColorStop(0, `rgba(190, 160, 100, ${opacity})`);
                stainGradient.addColorStop(1, `rgba(190, 160, 100, 0)`);
            }
            
            ctx.fillStyle = stainGradient;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Add vertical crease lines (paper bag typically has these)
        for (let i = 1; i < 3; i++) {
            const x = textureSize * (i / 3);
            
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, textureSize);
            ctx.strokeStyle = 'rgba(90, 60, 40, 0.15)';
            ctx.lineWidth = 3;
            ctx.stroke();
            
            // Add highlight along edge of crease
            ctx.beginPath();
            ctx.moveTo(x + 3, 0);
            ctx.lineTo(x + 3, textureSize);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // Add horizontal fold marks at top and bottom
        const y1 = textureSize * 0.15;
        const y2 = textureSize * 0.85;
        
        ctx.beginPath();
        ctx.moveTo(0, y1);
        ctx.lineTo(textureSize, y1);
        ctx.strokeStyle = 'rgba(90, 60, 40, 0.2)';
        ctx.lineWidth = 4;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, y2);
        ctx.lineTo(textureSize, y2);
        ctx.strokeStyle = 'rgba(90, 60, 40, 0.2)';
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // Create the final texture
        this.paperTexture = new THREE.CanvasTexture(canvas);
        this.paperTexture.wrapS = THREE.RepeatWrapping;
        this.paperTexture.wrapT = THREE.RepeatWrapping;
    }
    
    /**
     * Create all the procedural textures used for fruits
     */
    createProceduralTextures() {
        // Orange texture
        const orangeTextureSize = 512;
        const orangeCanvas = document.createElement('canvas');
        orangeCanvas.width = orangeTextureSize;
        orangeCanvas.height = orangeTextureSize;
        const orangeCtx = orangeCanvas.getContext('2d');
        
        // Create base gradient for more realistic coloring
        const orangeGradient = orangeCtx.createRadialGradient(
            orangeTextureSize/2, orangeTextureSize/2, 0,
            orangeTextureSize/2, orangeTextureSize/2, orangeTextureSize/2
        );
        orangeGradient.addColorStop(0, '#FFAA20'); // Brighter in center
        orangeGradient.addColorStop(0.7, '#FF8C00'); // Standard orange
        orangeGradient.addColorStop(1, '#E67300'); // Darker at edges
        
        // Fill with gradient
        orangeCtx.fillStyle = orangeGradient;
        orangeCtx.fillRect(0, 0, orangeTextureSize, orangeTextureSize);
        
        // Add subtle noise texture
        const orangeImageData = orangeCtx.getImageData(0, 0, orangeTextureSize, orangeTextureSize);
        const orangeData = orangeImageData.data;
        
        for (let i = 0; i < orangeData.length; i += 4) {
            const noise = Math.random() * 15 - 5;
            orangeData[i] = Math.max(0, Math.min(255, orangeData[i] + noise));     // R
            orangeData[i + 1] = Math.max(0, Math.min(255, orangeData[i + 1] + noise)); // G
            orangeData[i + 2] = Math.max(0, Math.min(255, orangeData[i + 2] + noise)); // B
        }
        
        orangeCtx.putImageData(orangeImageData, 0, 0);
        
        this.orangeTexture = new THREE.CanvasTexture(orangeCanvas);
        this.orangeTexture.wrapS = THREE.RepeatWrapping;
        this.orangeTexture.wrapT = THREE.RepeatWrapping;

        // Strawberry seed texture
        const strawberryTextureSize = 512;
        const strawberryCanvas = document.createElement('canvas');
        strawberryCanvas.width = strawberryTextureSize;
        strawberryCanvas.height = strawberryTextureSize;
        const strawberryCtx = strawberryCanvas.getContext('2d');
        
        // Create gradient for more realistic coloring
        const gradient = strawberryCtx.createRadialGradient(
            strawberryTextureSize/2, strawberryTextureSize/2, 0,
            strawberryTextureSize/2, strawberryTextureSize/2, strawberryTextureSize/2
        );
        gradient.addColorStop(0, '#FF4070'); // Brighter, more vibrant red in center
        gradient.addColorStop(0.5, '#FF2052'); // Standard strawberry red
        gradient.addColorStop(0.85, '#E01040'); // Darker red toward edges
        gradient.addColorStop(1, '#C00030'); // Deep red at very edge for better depth
        
        // Fill with gradient
        strawberryCtx.fillStyle = gradient;
        strawberryCtx.fillRect(0, 0, strawberryTextureSize, strawberryTextureSize);
        
        // Add subtle noise texture for more organic look
        const imageData = strawberryCtx.getImageData(0, 0, strawberryTextureSize, strawberryTextureSize);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const noise = Math.random() * 20 - 7; // Increased variation for more texture
            data[i] = Math.max(0, Math.min(255, data[i] + noise));     // R
            data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise * 0.6)); // G - less effect on green
            data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise * 0.4)); // B - even less on blue
        }
        
        strawberryCtx.putImageData(imageData, 0, 0);
        
        this.strawberryTexture = new THREE.CanvasTexture(strawberryCanvas);
        this.strawberryTexture.wrapS = THREE.RepeatWrapping;
        this.strawberryTexture.wrapT = THREE.RepeatWrapping;

        // Realistic watermelon texture with proper stripes
        const watermelonTextureSize = 512;
        const watermelonCanvas = document.createElement('canvas');
        watermelonCanvas.width = watermelonTextureSize;
        watermelonCanvas.height = watermelonTextureSize;
        const watermelonCtx = watermelonCanvas.getContext('2d');
        
        // Base dark green color
        const baseGreen = '#006400'; // Dark green
        watermelonCtx.fillStyle = baseGreen;
        watermelonCtx.fillRect(0, 0, watermelonTextureSize, watermelonTextureSize);

        // Create radial coordinates for consistent stripe patterns
        for (let y = 0; y < watermelonTextureSize; y++) {
            for (let x = 0; x < watermelonTextureSize; x++) {
                // Calculate position relative to center
                const xRel = x - watermelonTextureSize/2;
                const yRel = y - watermelonTextureSize/2;
                
                // Calculate angle and distance for radial pattern
                const angle = Math.atan2(yRel, xRel);
                const dist = Math.sqrt(xRel*xRel + yRel*yRel) / (watermelonTextureSize/2);
                
                // Skip pixels outside the circle
                if (dist > 1) continue;
                
                // Create stripe pattern (8 stripes)
                const stripeFrequency = 8;
                const stripeWidth = 0.5; // Width of light green stripes (0-1)
                
                // Use angle to create vertical stripe pattern
                const stripeValue = (Math.sin(angle * stripeFrequency) + 1) / 2; // 0-1
                
                // Determine if we're in a light or dark stripe area
                if (stripeValue > (1 - stripeWidth)) {
                    // Light green stripe
                    watermelonCtx.fillStyle = '#32CD32'; // Lime green
                    watermelonCtx.fillRect(x, y, 1, 1);
                } else {
                    // Dark green stripe
                    watermelonCtx.fillStyle = '#004200'; // Very dark green
                    watermelonCtx.fillRect(x, y, 1, 1);
                }
            }
        }
        
        this.watermelonTexture = new THREE.CanvasTexture(watermelonCanvas);
        this.watermelonTexture.wrapS = THREE.RepeatWrapping;
        this.watermelonTexture.wrapT = THREE.RepeatWrapping;

        // Grape texture with more realistic coloring and surface details
        const grapeTextureSize = 512;
        const grapeCanvas = document.createElement('canvas');
        grapeCanvas.width = grapeTextureSize;
        grapeCanvas.height = grapeTextureSize;
        const grapeCtx = grapeCanvas.getContext('2d');
        
        // Base gradient for grape coloring
        const baseGrape = grapeCtx.createRadialGradient(
            grapeTextureSize/2, grapeTextureSize/2, 0,
            grapeTextureSize/2, grapeTextureSize/2, grapeTextureSize/2
        );
        baseGrape.addColorStop(0, '#9040F0');
        baseGrape.addColorStop(0.5, '#8030E0'); // Standard grape purple
        baseGrape.addColorStop(1, '#6020C0');

        grapeCtx.fillStyle = baseGrape;
        grapeCtx.fillRect(0, 0, grapeTextureSize, grapeTextureSize);

        // Add noise to the texture
        const grapeImageData = grapeCtx.getImageData(0, 0, grapeTextureSize, grapeTextureSize);
        const grapeData = grapeImageData.data;

        for (let i = 0; i < grapeData.length; i += 4) {
            const noise = (Math.random() - 0.5) * 30;
            grapeData[i] = Math.max(0, Math.min(255, grapeData[i] + noise));     // R
            grapeData[i + 1] = Math.max(0, Math.min(255, grapeData[i + 1] + noise)); // G
            grapeData[i + 2] = Math.max(0, Math.min(255, grapeData[i + 2] + noise)); // B
        }

        grapeCtx.putImageData(grapeImageData, 0, 0);

        this.grapeTexture = new THREE.CanvasTexture(grapeCanvas);
        this.grapeTexture.wrapS = THREE.RepeatWrapping;
        this.grapeTexture.wrapT = THREE.RepeatWrapping;

        // Create alternate grape texture with face
        const altGrapeCanvas = document.createElement('canvas');
        altGrapeCanvas.width = grapeTextureSize;
        altGrapeCanvas.height = grapeTextureSize;
        const altGrapeCtx = altGrapeCanvas.getContext('2d');

        // Copy base grape texture
        altGrapeCtx.drawImage(grapeCanvas, 0, 0);

        // Scale down the face features - make them much smaller relative to grape size
        const centerX = grapeTextureSize * 0.5;
        const centerY = grapeTextureSize * 0.5; // Center vertically
        
        // Eyes - moved slightly higher
        const eyeSize = grapeTextureSize * 0.035;
        const eyeSpacing = grapeTextureSize * 0.08;
        const eyeY = centerY - grapeTextureSize * 0.03; // Moved eyes up
        const leftEyeX = centerX - eyeSpacing;
        const rightEyeX = centerX + eyeSpacing;
        
        // Draw eyes with white highlights
        altGrapeCtx.fillStyle = 'black';
        altGrapeCtx.beginPath();
        altGrapeCtx.arc(leftEyeX, eyeY, eyeSize, 0, Math.PI * 2);
        altGrapeCtx.arc(rightEyeX, eyeY, eyeSize, 0, Math.PI * 2);
        altGrapeCtx.fill();

        // White highlight in eyes
        altGrapeCtx.fillStyle = 'white';
        altGrapeCtx.beginPath();
        altGrapeCtx.arc(leftEyeX - eyeSize * 0.2, eyeY - eyeSize * 0.2, eyeSize * 0.5, 0, Math.PI * 2);
        altGrapeCtx.arc(rightEyeX - eyeSize * 0.2, eyeY - eyeSize * 0.2, eyeSize * 0.5, 0, Math.PI * 2);
        altGrapeCtx.fill();

        // Nose - centered between eyes and mouth
        altGrapeCtx.fillStyle = 'rgba(0,0,0,0.8)';
        const noseWidth = eyeSize * 0.8;
        const noseHeight = eyeSize * 1.2;
        const noseY = centerY + grapeTextureSize * 0.01; // Adjusted nose position
        altGrapeCtx.beginPath();
        altGrapeCtx.ellipse(centerX, noseY, noseWidth, noseHeight, 0, 0, Math.PI * 2);
        altGrapeCtx.fill();

        // Subtle smile - moved lower
        altGrapeCtx.strokeStyle = 'rgba(0,0,0,0.6)';
        altGrapeCtx.lineWidth = eyeSize * 0.3;
        altGrapeCtx.lineCap = 'round';
        
        // Draw subtle curves on each side of the face
        const smileY = centerY + grapeTextureSize * 0.06; // Moved smile down
        const curveLength = grapeTextureSize * 0.04;
        
        // Left smile curve
        altGrapeCtx.beginPath();
        altGrapeCtx.moveTo(centerX - curveLength * 1.2, smileY);
        altGrapeCtx.quadraticCurveTo(
            centerX - curveLength * 0.6, 
            smileY + curveLength * 0.3,
            centerX - curveLength * 0.3, 
            smileY
        );
        altGrapeCtx.stroke();
        
        // Right smile curve
        altGrapeCtx.beginPath();
        altGrapeCtx.moveTo(centerX + curveLength * 1.2, smileY);
        altGrapeCtx.quadraticCurveTo(
            centerX + curveLength * 0.6,
            smileY + curveLength * 0.3,
            centerX + curveLength * 0.3,
            smileY
        );
        altGrapeCtx.stroke();

        this.grapeAltTexture = new THREE.CanvasTexture(altGrapeCanvas);
        this.grapeAltTexture.center.set(0.5, 0.5);
        this.grapeAltTexture.rotation = Math.PI; // Rotate texture 180 degrees to face front
        this.grapeAltTexture.wrapS = THREE.RepeatWrapping;
        this.grapeAltTexture.wrapT = THREE.RepeatWrapping;

        // Create peach texture with redder colors and subtle fuzz
        const peachTextureSize = 512;
        const peachCanvas = document.createElement('canvas');
        peachCanvas.width = peachTextureSize;
        peachCanvas.height = peachTextureSize;
        const peachCtx = peachCanvas.getContext('2d');

        // Fill with deep orange-red base
        peachCtx.fillStyle = '#FF3300';  // Deeper orange-red base
        peachCtx.fillRect(0, 0, peachTextureSize, peachTextureSize);

        // Add rich gradient overlay
        const peachGradient = peachCtx.createRadialGradient(
            peachTextureSize * 0.5, peachTextureSize * 0.5, 0,  // Center
            peachTextureSize * 0.5, peachTextureSize * 0.5, peachTextureSize * 0.8
        );
        peachGradient.addColorStop(0, 'rgba(255, 99, 71, 0.95)');     // Tomato red
        peachGradient.addColorStop(0.3, 'rgba(255, 69, 0, 0.9)');     // Red-orange
        peachGradient.addColorStop(0.6, 'rgba(255, 45, 0, 0.85)');    // Deeper red-orange
        peachGradient.addColorStop(1, 'rgba(215, 40, 0, 0.8)');       // Dark red-orange

        peachCtx.fillStyle = peachGradient;
        peachCtx.fillRect(0, 0, peachTextureSize, peachTextureSize);

        // Add very subtle fuzz texture
        for (let i = 0; i < 3000; i++) {
            const x = Math.random() * peachTextureSize;
            const y = Math.random() * peachTextureSize;
            const size = 0.2 + Math.random() * 0.4; // Very small dots

            peachCtx.beginPath();
            peachCtx.arc(x, y, size, 0, Math.PI * 2);
            
            // Extremely subtle fuzz with warmer red colors
            const alpha = 0.01 + Math.random() * 0.02; // Very low alpha
            if (Math.random() > 0.7) {
                peachCtx.fillStyle = `rgba(255, 160, 120, ${alpha})`; // Light warm red fuzz
            } else {
                peachCtx.fillStyle = `rgba(255, 80, 40, ${alpha})`; // Red-orange fuzz
            }
            peachCtx.fill();
        }

        this.peachTexture = new THREE.CanvasTexture(peachCanvas);
        this.peachTexture.wrapS = THREE.RepeatWrapping;
        this.peachTexture.wrapT = THREE.RepeatWrapping;

        // Apple texture with subtle pattern
        const appleTextureSize = 512;
        const appleCanvas = document.createElement('canvas');
        appleCanvas.width = appleTextureSize;
        appleCanvas.height = appleTextureSize;
        const appleCtx = appleCanvas.getContext('2d');
        
        // Base color
        appleCtx.fillStyle = '#FF0000';
        appleCtx.fillRect(0, 0, appleTextureSize, appleTextureSize);
        
        // Add subtle variations
        for (let i = 0; i < 1000; i++) {
            const x = Math.random() * appleTextureSize;
            const y = Math.random() * appleTextureSize;
            const radius = 5 + Math.random() * 10;
            
            appleCtx.beginPath();
            appleCtx.arc(x, y, radius, 0, Math.PI * 2);
            appleCtx.fillStyle = `rgba(200, 0, 0, ${Math.random() * 0.3})`;
            appleCtx.fill();
        }
        
        this.appleTexture = new THREE.CanvasTexture(appleCanvas);
        this.appleTexture.wrapS = THREE.RepeatWrapping;
        this.appleTexture.wrapT = THREE.RepeatWrapping;

        // Pear texture with speckles
        const pearTextureSize = 512;
        const pearCanvas = document.createElement('canvas');
        pearCanvas.width = pearTextureSize;
        pearCanvas.height = pearTextureSize;
        const pearCtx = pearCanvas.getContext('2d');
        
        pearCtx.fillStyle = '#FFD700';
        pearCtx.fillRect(0, 0, pearTextureSize, pearTextureSize);
        
        // Add brown speckles
        for (let i = 0; i < 2000; i++) {
            const x = Math.random() * pearTextureSize;
            const y = Math.random() * pearTextureSize;
            
            pearCtx.beginPath();
            pearCtx.arc(x, y, 1, 0, Math.PI * 2);
            pearCtx.fillStyle = `rgba(139, 69, 19, ${Math.random() * 0.3})`;
            pearCtx.fill();
        }
        
        this.pearTexture = new THREE.CanvasTexture(pearCanvas);
        this.pearTexture.wrapS = THREE.RepeatWrapping;
        this.pearTexture.wrapT = THREE.RepeatWrapping;

        // Pumpkin texture with ridges and texture
        const pumpkinTextureSize = 512;
        const pumpkinCanvas = document.createElement('canvas');
        pumpkinCanvas.width = pumpkinTextureSize;
        pumpkinCanvas.height = pumpkinTextureSize;
        const pumpkinCtx = pumpkinCanvas.getContext('2d');
        
        // Base orange color
        pumpkinCtx.fillStyle = '#FF7518';
        pumpkinCtx.fillRect(0, 0, pumpkinTextureSize, pumpkinTextureSize);
        
        // Add ridge lines
        for (let i = 0; i < 8; i++) {
            const posX = pumpkinTextureSize / 8 + (i * pumpkinTextureSize / 8);
            
            // Draw vertical ridge
            pumpkinCtx.beginPath();
            pumpkinCtx.moveTo(posX, 0);
            pumpkinCtx.lineTo(posX, pumpkinTextureSize);
            pumpkinCtx.lineWidth = 10;
            pumpkinCtx.strokeStyle = '#E86100';
            pumpkinCtx.stroke();
        }
        
        // Add subtle texture variations
        for (let i = 0; i < 3000; i++) {
            const x = Math.random() * pumpkinTextureSize;
            const y = Math.random() * pumpkinTextureSize;
            const radius = 1 + Math.random() * 2;
            
            pumpkinCtx.beginPath();
            pumpkinCtx.arc(x, y, radius, 0, Math.PI * 2);
            pumpkinCtx.fillStyle = `rgba(255, 138, 36, ${Math.random() * 0.3})`;
            pumpkinCtx.fill();
        }
        
        this.pumpkinTexture = new THREE.CanvasTexture(pumpkinCanvas);
        this.pumpkinTexture.wrapS = THREE.RepeatWrapping;
        this.pumpkinTexture.wrapT = THREE.RepeatWrapping;

        // Create melon (cantaloupe) texture with realistic netting pattern
        const melonTextureSize = 512;
        const melonCanvas = document.createElement('canvas');
        melonCanvas.width = melonTextureSize;
        melonCanvas.height = melonTextureSize;
        const melonCtx = melonCanvas.getContext('2d');

        // Base color - pale yellow-green
        const baseColor = '#F4E5C3';
        melonCtx.fillStyle = baseColor;
        melonCtx.fillRect(0, 0, melonTextureSize, melonTextureSize);

        // Add subtle color variations for more natural look
        const melonImageData = melonCtx.getImageData(0, 0, melonTextureSize, melonTextureSize);
        const melonPixels = melonImageData.data;
        for (let i = 0; i < melonPixels.length; i += 4) {
            const noise = Math.random() * 15 - 7;
            melonPixels[i] = Math.max(0, Math.min(255, melonPixels[i] + noise));     // R
            melonPixels[i + 1] = Math.max(0, Math.min(255, melonPixels[i + 1] + noise * 0.8)); // G
            melonPixels[i + 2] = Math.max(0, Math.min(255, melonPixels[i + 2] + noise * 0.6)); // B
        }
        melonCtx.putImageData(melonImageData, 0, 0);

        // Create netting pattern
        for (let i = 0; i < 2000; i++) {
            const x = Math.random() * melonTextureSize;
            const y = Math.random() * melonTextureSize;
            const length = 10 + Math.random() * 20;
            const angle = Math.random() * Math.PI * 2;
            
            // Draw raised netting lines
            melonCtx.beginPath();
            melonCtx.moveTo(x, y);
            melonCtx.lineTo(
                x + Math.cos(angle) * length,
                y + Math.sin(angle) * length
            );
            
            // Vary line width for more natural look
            melonCtx.lineWidth = 1 + Math.random() * 2;
            
            // Create raised effect with light and shadow
            // Light edge
            melonCtx.strokeStyle = 'rgba(255, 245, 220, 0.4)';
            melonCtx.stroke();
            
            // Dark edge for depth
            melonCtx.beginPath();
            melonCtx.moveTo(x + 1, y + 1);
            melonCtx.lineTo(
                x + Math.cos(angle) * length + 1,
                y + Math.sin(angle) * length + 1
            );
            melonCtx.strokeStyle = 'rgba(150, 140, 110, 0.4)';
            melonCtx.stroke();
        }

        this.melonTexture = new THREE.CanvasTexture(melonCanvas);
        this.melonTexture.wrapS = THREE.RepeatWrapping;
        this.melonTexture.wrapT = THREE.RepeatWrapping;
    }
    
    /**
     * Create and load a texture from a data URL
     * @param {string} dataUrl - Base64 encoded data URL
     * @returns {THREE.Texture} The created texture
     */
    loadTextureFromDataUrl(dataUrl) {
        return new THREE.TextureLoader().load(dataUrl);
    }
}
