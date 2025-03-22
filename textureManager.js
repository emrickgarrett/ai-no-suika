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
        // Create a paper texture
        this.paperTexture = new THREE.TextureLoader().load('data:image/png;base64,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');
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

        // Peach texture with fuzzy effect
        const peachTextureSize = 512;
        const peachCanvas = document.createElement('canvas');
        peachCanvas.width = peachTextureSize;
        peachCanvas.height = peachTextureSize;
        const peachCtx = peachCanvas.getContext('2d');
        
        // Base peach color
        peachCtx.fillStyle = '#FFCBA4';
        peachCtx.fillRect(0, 0, peachTextureSize, peachTextureSize);
        
        // Add fuzzy texture
        for (let i = 0; i < 10000; i++) {
            const x = Math.random() * peachTextureSize;
            const y = Math.random() * peachTextureSize;
            
            peachCtx.beginPath();
            peachCtx.arc(x, y, 0.5, 0, Math.PI * 2);
            peachCtx.fillStyle = `rgba(255, 218, 185, ${Math.random() * 0.1})`;
            peachCtx.fill();
        }
        
        this.peachTexture = new THREE.CanvasTexture(peachCanvas);
        this.peachTexture.wrapS = THREE.RepeatWrapping;
        this.peachTexture.wrapT = THREE.RepeatWrapping;

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
