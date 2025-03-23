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
        this.appleTexture = null;
        this.pearTexture = null;
        this.peachTexture = null;
        this.pineappleTexture = null;
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
        
        // Create dimpled pattern - more realistic
        for (let i = 0; i < 1500; i++) {
            const x = Math.random() * orangeTextureSize;
            const y = Math.random() * orangeTextureSize;
            const radius = 1 + Math.random() * 3;
            
            // Main dimple
            orangeCtx.beginPath();
            orangeCtx.arc(x, y, radius, 0, Math.PI * 2);
            
            // Create realistic dimple effect with light and shadow
            const dimpleGradient = orangeCtx.createRadialGradient(
                x, y, 0,
                x, y, radius
            );
            
            dimpleGradient.addColorStop(0, 'rgba(255, 180, 50, 0.4)'); // Lighter center
            dimpleGradient.addColorStop(0.5, 'rgba(230, 115, 0, 0.4)'); // Medium orange
            dimpleGradient.addColorStop(1, 'rgba(180, 90, 0, 0.4)'); // Darker edge
            
            orangeCtx.fillStyle = dimpleGradient;
            orangeCtx.fill();
        }
        
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
        
        // Add surface texture to simulate strawberry skin between seeds
        for (let i = 0; i < 2000; i++) {
            const x = Math.random() * strawberryTextureSize;
            const y = Math.random() * strawberryTextureSize;
            const size = 0.5 + Math.random() * 1.5;
            
            strawberryCtx.beginPath();
            strawberryCtx.arc(x, y, size, 0, Math.PI * 2);
            // Vary the alpha for subtlety
            const alpha = 0.05 + Math.random() * 0.1;
            strawberryCtx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
            strawberryCtx.fill();
        }
        
        // Add more detailed and realistic seeds
        for (let i = 0; i < 1000; i++) {
            const x = Math.random() * strawberryTextureSize;
            const y = Math.random() * strawberryTextureSize;
            const seedSize = 1.2 + Math.random() * 1.8;
            const angle = Math.random() * Math.PI * 2;
            
            // Create seed
            strawberryCtx.beginPath();
            strawberryCtx.ellipse(x, y, seedSize * 1.2, seedSize * 0.8, angle, 0, Math.PI * 2);
            
            // Seed color varies from pale yellow to light yellow-white
            const yellowness = 210 + Math.random() * 40;
            strawberryCtx.fillStyle = `rgba(${yellowness}, ${yellowness-30}, 200, ${0.8 + Math.random() * 0.2})`;
            strawberryCtx.fill();
            
            // Add slight highlight to each seed
            strawberryCtx.beginPath();
            strawberryCtx.ellipse(
                x - seedSize*0.3, 
                y - seedSize*0.2, 
                seedSize * 0.5, 
                seedSize * 0.3, 
                angle, 0, Math.PI * 2
            );
            strawberryCtx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            strawberryCtx.fill();
            
            // Add slight shadow to seeds for depth
            strawberryCtx.beginPath();
            strawberryCtx.ellipse(x + 0.7, y + 0.7, seedSize * 1.2, seedSize * 0.8, angle, 0, Math.PI * 2);
            strawberryCtx.fillStyle = 'rgba(120, 0, 0, 0.2)';
            strawberryCtx.fill();
        }
        
        this.strawberryTexture = new THREE.CanvasTexture(strawberryCanvas);
        this.strawberryTexture.wrapS = THREE.RepeatWrapping;
        this.strawberryTexture.wrapT = THREE.RepeatWrapping;

        // Watermelon texture with noise pattern
        const watermelonTextureSize = 512;
        const watermelonCanvas = document.createElement('canvas');
        watermelonCanvas.width = watermelonTextureSize;
        watermelonCanvas.height = watermelonTextureSize;
        const watermelonCtx = watermelonCanvas.getContext('2d');
        
        // Create base color
        watermelonCtx.fillStyle = '#00BB2D';
        watermelonCtx.fillRect(0, 0, watermelonTextureSize, watermelonTextureSize);
        
        // Add noise pattern
        const imageDataWatermelon = watermelonCtx.getImageData(0, 0, watermelonTextureSize, watermelonTextureSize);
        const dataWatermelon = imageDataWatermelon.data;
        
        for (let i = 0; i < dataWatermelon.length; i += 4) {
            const noise = Math.random() * 30 - 15;
            dataWatermelon[i] = Math.max(0, Math.min(255, dataWatermelon[i] + noise));     // R
            dataWatermelon[i + 1] = Math.max(0, Math.min(255, dataWatermelon[i + 1] + noise)); // G
            dataWatermelon[i + 2] = Math.max(0, Math.min(255, dataWatermelon[i + 2] + noise)); // B
        }
        
        watermelonCtx.putImageData(imageDataWatermelon, 0, 0);
        
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
        baseGrape.addColorStop(0, '#9F45FF'); // Brighter purple in center
        baseGrape.addColorStop(0.5, '#8030E0'); // Standard grape purple
        baseGrape.addColorStop(1, '#6020B0'); // Darker purple at edges
        
        grapeCtx.fillStyle = baseGrape;
        grapeCtx.fillRect(0, 0, grapeTextureSize, grapeTextureSize);
        
        // Add subtle noise texture for organic look
        const grapeImageData = grapeCtx.getImageData(0, 0, grapeTextureSize, grapeTextureSize);
        const grapeData = grapeImageData.data;
        
        for (let i = 0; i < grapeData.length; i += 4) {
            const noise = Math.random() * 10 - 5;
            grapeData[i] = Math.max(0, Math.min(255, grapeData[i] + noise));     // R
            grapeData[i + 1] = Math.max(0, Math.min(255, grapeData[i + 1] + noise)); // G
            grapeData[i + 2] = Math.max(0, Math.min(255, grapeData[i + 2] + noise)); // B
        }
        
        grapeCtx.putImageData(grapeImageData, 0, 0);
        
        // Add bloom/reflections on the grape surface
        for (let i = 0; i < 80; i++) {
            const x = Math.random() * grapeTextureSize;
            const y = Math.random() * grapeTextureSize;
            const radius = 15 + Math.random() * 25;
            
            const bloomGradient = grapeCtx.createRadialGradient(x, y, 0, x, y, radius);
            bloomGradient.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
            bloomGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.15)');
            bloomGradient.addColorStop(1, 'rgba(140, 80, 200, 0)');
            
            grapeCtx.fillStyle = bloomGradient;
            grapeCtx.beginPath();
            grapeCtx.arc(x, y, radius, 0, Math.PI * 2);
            grapeCtx.fill();
        }
        
        this.grapeTexture = new THREE.CanvasTexture(grapeCanvas);
        this.grapeTexture.wrapS = THREE.RepeatWrapping;
        this.grapeTexture.wrapT = THREE.RepeatWrapping;

        // SUPER VIBRANT peach texture with extremely strong coloring
        const peachTextureSize = 512;
        const peachCanvas = document.createElement('canvas');
        peachCanvas.width = peachTextureSize;
        peachCanvas.height = peachTextureSize;
        const peachCtx = peachCanvas.getContext('2d');
        
        // Start with a solid, extremely vibrant base
        peachCtx.fillStyle = '#FF7722'; // Very strong orange base
        peachCtx.fillRect(0, 0, peachTextureSize, peachTextureSize);
        
        // Add a bright center
        const peachGradient = peachCtx.createRadialGradient(
            peachTextureSize/2, peachTextureSize/2, 0,
            peachTextureSize/2, peachTextureSize/2, peachTextureSize/1.5
        );
        peachGradient.addColorStop(0, '#FFAA33');  // Very bright center
        peachGradient.addColorStop(0.5, '#FF8822'); // Strong mid orange
        peachGradient.addColorStop(1, 'rgba(255, 80, 10, 0)'); // Fade to base color
        
        // Fill with gradient overlay
        peachCtx.fillStyle = peachGradient;
        peachCtx.fillRect(0, 0, peachTextureSize, peachTextureSize);
        
        // Add darker edges for depth
        const edgeGradient = peachCtx.createRadialGradient(
            peachTextureSize/2, peachTextureSize/2, peachTextureSize/2 * 0.8,
            peachTextureSize/2, peachTextureSize/2, peachTextureSize/2
        );
        edgeGradient.addColorStop(0, 'rgba(200, 50, 0, 0)');  // Transparent at inner part
        edgeGradient.addColorStop(1, 'rgba(200, 50, 0, 0.3)');  // Darker at edges
        
        peachCtx.fillStyle = edgeGradient;
        peachCtx.fillRect(0, 0, peachTextureSize, peachTextureSize);
        
        // Add minimal noise for texture
        const peachImageData = peachCtx.getImageData(0, 0, peachTextureSize, peachTextureSize);
        const peachData = peachImageData.data;
        
        for (let i = 0; i < peachData.length; i += 4) {
            const noise = Math.random() * 8 - 4; // Minimal noise to keep colors strong
            peachData[i] = Math.max(0, Math.min(255, peachData[i] + noise));     // R
            peachData[i + 1] = Math.max(0, Math.min(255, peachData[i + 1] + noise * 0.7)); // G
            peachData[i + 2] = Math.max(0, Math.min(255, peachData[i + 2] + noise * 0.5)); // B
        }
        
        peachCtx.putImageData(peachImageData, 0, 0);
        
        // Add strong red blush to one side
        const blushGradient = peachCtx.createRadialGradient(
            peachTextureSize * 0.7, peachTextureSize * 0.5, 0,
            peachTextureSize * 0.7, peachTextureSize * 0.5, peachTextureSize * 0.6
        );
        blushGradient.addColorStop(0, 'rgba(255, 30, 20, 0.85)'); // Very strong red
        blushGradient.addColorStop(0.7, 'rgba(255, 30, 20, 0.3)');
        blushGradient.addColorStop(1, 'rgba(255, 30, 20, 0)');
        
        peachCtx.fillStyle = blushGradient;
        peachCtx.fillRect(0, 0, peachTextureSize, peachTextureSize);
        
        // Add a more visible cleft line
        const cleftGradient = peachCtx.createLinearGradient(
            peachTextureSize * 0.5, 0, 
            peachTextureSize * 0.5, peachTextureSize
        );
        cleftGradient.addColorStop(0, 'rgba(180, 20, 0, 0.0)');
        cleftGradient.addColorStop(0.3, 'rgba(180, 20, 0, 0.4)');
        cleftGradient.addColorStop(0.5, 'rgba(180, 20, 0, 0.6)');
        cleftGradient.addColorStop(0.7, 'rgba(180, 20, 0, 0.4)');
        cleftGradient.addColorStop(1, 'rgba(180, 20, 0, 0.0)');
        
        peachCtx.fillStyle = cleftGradient;
        peachCtx.fillRect(peachTextureSize * 0.48, 0, peachTextureSize * 0.04, peachTextureSize);
        
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

        // Pineapple texture with scale pattern
        const pineappleTextureSize = 512;
        const pineappleCanvas = document.createElement('canvas');
        pineappleCanvas.width = pineappleTextureSize;
        pineappleCanvas.height = pineappleTextureSize;
        const pineappleCtx = pineappleCanvas.getContext('2d');
        
        // Base color
        pineappleCtx.fillStyle = '#FFE135';
        pineappleCtx.fillRect(0, 0, pineappleTextureSize, pineappleTextureSize);
        
        // Add diamond pattern
        const scaleSize = 20;
        for (let y = 0; y < pineappleTextureSize; y += scaleSize) {
            for (let x = 0; x < pineappleTextureSize; x += scaleSize) {
                pineappleCtx.beginPath();
                pineappleCtx.moveTo(x, y);
                pineappleCtx.lineTo(x + scaleSize/2, y + scaleSize);
                pineappleCtx.lineTo(x + scaleSize, y);
                pineappleCtx.strokeStyle = '#B8860B';
                pineappleCtx.stroke();
            }
        }
        
        this.pineappleTexture = new THREE.CanvasTexture(pineappleCanvas);
        this.pineappleTexture.wrapS = THREE.RepeatWrapping;
        this.pineappleTexture.wrapT = THREE.RepeatWrapping;

        // Melon texture with net pattern
        const melonTextureSize = 512;
        const melonCanvas = document.createElement('canvas');
        melonCanvas.width = melonTextureSize;
        melonCanvas.height = melonTextureSize;
        const melonCtx = melonCanvas.getContext('2d');
        
        // Base color
        melonCtx.fillStyle = '#98FF98';
        melonCtx.fillRect(0, 0, melonTextureSize, melonTextureSize);
        
        // Add net pattern
        const netSize = 30;
        melonCtx.strokeStyle = '#228B22';
        melonCtx.lineWidth = 2;
        
        for (let y = 0; y < melonTextureSize; y += netSize) {
            melonCtx.beginPath();
            melonCtx.moveTo(0, y);
            melonCtx.lineTo(melonTextureSize, y);
            melonCtx.stroke();
        }
        
        for (let x = 0; x < melonTextureSize; x += netSize) {
            melonCtx.beginPath();
            melonCtx.moveTo(x, 0);
            melonCtx.lineTo(x, melonTextureSize);
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
