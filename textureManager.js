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
        this.paperTexture = new THREE.TextureLoader().load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AkEEjIZHd6QSQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAHx0lEQVR42u2dXWwcVxXH/+fu7Nper9deO3Zsp3ZsJ5BESQghStpCqUBRpaJKlfpUVUJ9qIQEEuqbxHvFV0GiQqJ8tDK0pZV4gKpIUKuqH4nTxq6dj9Wx13+7dne8O3eGh12vx/V6d8brrDPe+UkjeXLv3HPP/c8999w7M6OQ2QqKLzd/VUyrTUvLELLr82+vfz5b0YsVvVQ1XEGmHjc8QSaBBFi6oU3q2qSuTWXVmRxKJzQ1RgZRxthXDnFJaGNCIUGIRFRK5pRkTknE5K2FqiDkrxQiJ34hJk/mpqbyWr5iVrUAwQIC9FH8UlVT0zQ1LZGJpxNKV0NN1yvViq7phUIhlUpNbLVjBZiRmtbU1LQ0PS0D8OVypVKtVKnyhbnixcLlYjm/yZTIz+OvlxUVn5F/WGRVN631FdWqoVU1LZZWejrT3d39z5fPHh0YvB7ZVnVdVdXgAoQQgGGaqqqmlbRyudKx+66ent7i5YnEgwff2nFnx44FXiwUKdOAMdaUpRpFUbpvubujo+PwB4fG7xvff//4saO/fuvcua56vXYrPcAwiTEmy/JQOj3xyNsHD+z/8uTJ6YcmJ7OFw4eOf/zx1+v1ulv1DMgYE0URAAkCY0wRlXQmc/rdf//o/R9nR0fu23P/q6+8fODVA0PDw+UAwV3tAEKIKIoAWOvPmq7rUm9v7fNzr73+xrM/e+6Xv/rt8PBwJfB5sFUFIIQQQtrfWn5JKqVqkEhzwTzZPEIIoAAUgAJQAApAAShACEBLpQUhRFEUVVVlWb7Zxu4RAEEQRFGUJEmS5JtsNx4giqIoirIs03tcASRJEgTBoACuARhjhBBBEPgfvntVAMYYY8x1XUmSGGOmaQLgfwruOQEYY67ryrLc3t5+8eLFcrnc2dk5Pj4uyzIAgzc37gEBXNeVZTmVSh05cmRiYuKJJ55YWFi4cuXKo48++tBDD9m2XavVBEGIQoDWrdj5Ceh0Ov3pp5/u3Llz165dxWJxcnLy4sWLjDHHcTzPkyQpCgHCWSHzJ2BLpVLXrl0bGxvr6+u7fPmyYRi6rs/NzdVqNUVRWOQ3heEIQAiRZXlkZ4QQsra2Vi6XCSG5XK6vr0+W5VapgRDium7UAlBKOzs7C4UCIUTXdUJIf3+/aZqu67ZWDYQQy7KiE0AQBEmSCCGaphFCKKWGYdi2bdv22kKM90GiE0BV1UQiMT8/n81mAdi2XSgUurq6ZFmObnYVQi+gHwEEURQHBgb6+/tXVlYMw7Btm1La29vb3t7Oxf72EKYArutSSgcHB81yeW5xTpZlVVWHh4dbqwZKqe04ruvyLwKVSkWW5WQy+cUXX3R3dw8NDWWz2Z6ensHBwWhXgVDqtSxLEIRMJnP+/Pm+vr6xsTHDMJaXl1OpVGtlgRDCGHNdl/9J6xpZluM9PT2zs7O7d+8eHR3N5XKO49i2HfUawHXd5gtAKU0kEul0+sKFC5VK5a677ioWi5qmcbFG8rYKdxKmlLa1tY2MjCwvL3/22WeiKMbj8c7OzghvC8MTwLIsSZKGhobK5fLMzAxjrLu7u7+/v7UegHEc59acA5RK5vjx4zMzM6VS6Z133tE0TRTFVnwItGkCeJ6XSCSeeuqpZDLZ3d2dTCYtyzJNM8IMhCQApTQej+/bt29lZWV1dXV1ddW27daqgRCyacZ2HCcWi+3du1dVVcuyDMNorScBbsEqUKlUPvnkk9nZ2WQyefXq1UKh0HoPAwkhpmmapsmlgJRSWZZrtdrnn38+PT2dz+cZY1wIwP9J2zqO4ySTyQMHDhw9erRQKHR0dGia5nkek0RFkHnIAv+vB2ia5nler9d3794Nz/M8r16vR/wgAk8BFEWhlPI8r16vA3Bd1/O8tcRH/C2RcOqVJOno0aNHjhwxDIPPBn19fVu2bIlwJxGeAMlk8uuvvx4dHV1dXe3p6clms+l0WlXV1nogQAix1ndM/GORbJ0fRCAAY4wxJooipTQej8fjcdd1W/FFsLU7gOu6EXa9TXxLbI79FT6TKUDjQgEoAAWgABSAAlAACkABKAAFoAA3Bp1IQwEoAAWgABSAAlAACkABKAAFoAAUgAJQAApAAWgtlTghQgjxPC+cfgUhWWuPMeZ5XpgZ4D0D683HNRO8A4QKwHUBGGOXLl0aGxtLp9PcmuuGrXmeBwDcOJ27x7k1cBABvHrd7+9a8yFAKpU6ceLE8ePHOzs7bdu2LIsQQimlZj0AoBmrM1Y3TZe7xdtfDLgAvu97Cz6jh4TSUqlk27Zt20NDQ9PT0yMjI5ZlCSc/3JwApVJJVVXXdcfHx8+cOSOKIjdmD+gCm3OA9wH5arXqum5nZ+fx48eTyaTnea7rSgFf4AgYIGgTVVW1UCjE4/HDhw+naZphGAAkSeJ6BaMQIHA2YDGlUCi8/fbbzz//fCKR0HUdAGNMLBVD+0nq8AQIvA4QQiiluq5Xq9WBgYHJyclYLGbbNoAQqw9DgHC2Qpxs0zRFUZycnHzppZdOnTqilqiqllIddfdDr45nDEEII8X3fNE1VVR955JGTr72+R7yn5x9d3SnJaDC5+XKdMWaapm3bmqYdO/b+qa8+/MM333RolTzm2BFcf6RbIEJIvV6v1WqWZeXz+Xfffe/gwV/c81UGQJdkXW89xqXWY5oOOI5jWZZt27Zt67r+4Ycf/unfn10+fpzrKgiB3E+NQgBKqeu6lmXV6/VarWaapq7rhmGUy+VKpVIul997773pv0w1xm7VLPAXggJQAArw/9n+B9m6IVSXZDTgAAAAAElFTkSuQmCC');
    }
    
    /**
     * Create all the procedural textures used for fruits
     */
    createProceduralTextures() {
        // Orange peel texture
        const orangeTextureSize = 512;
        const orangeCanvas = document.createElement('canvas');
        orangeCanvas.width = orangeTextureSize;
        orangeCanvas.height = orangeTextureSize;
        const orangeCtx = orangeCanvas.getContext('2d');
        
        // Create dimpled pattern
        orangeCtx.fillStyle = '#FF8C00';
        orangeCtx.fillRect(0, 0, orangeTextureSize, orangeTextureSize);
        
        for (let i = 0; i < 1000; i++) {
            const x = Math.random() * orangeTextureSize;
            const y = Math.random() * orangeTextureSize;
            const radius = 2 + Math.random() * 3;
            
            orangeCtx.beginPath();
            orangeCtx.arc(x, y, radius, 0, Math.PI * 2);
            orangeCtx.fillStyle = 'rgba(255, 160, 0, 0.5)';
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
        
        // Create seed pattern
        strawberryCtx.fillStyle = '#FF2052';
        strawberryCtx.fillRect(0, 0, strawberryTextureSize, strawberryTextureSize);
        
        for (let i = 0; i < 500; i++) {
            const x = Math.random() * strawberryTextureSize;
            const y = Math.random() * strawberryTextureSize;
            
            strawberryCtx.beginPath();
            strawberryCtx.ellipse(x, y, 2, 1, 0, 0, Math.PI * 2);
            strawberryCtx.fillStyle = '#FFE5E5';
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
        const imageData = watermelonCtx.getImageData(0, 0, watermelonTextureSize, watermelonTextureSize);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const noise = Math.random() * 30 - 15;
            data[i] = Math.max(0, Math.min(255, data[i] + noise));     // R
            data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise)); // G
            data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise)); // B
        }
        
        watermelonCtx.putImageData(imageData, 0, 0);
        
        this.watermelonTexture = new THREE.CanvasTexture(watermelonCanvas);
        this.watermelonTexture.wrapS = THREE.RepeatWrapping;
        this.watermelonTexture.wrapT = THREE.RepeatWrapping;

        // Grape texture with bloom effect
        const grapeTextureSize = 512;
        const grapeCanvas = document.createElement('canvas');
        grapeCanvas.width = grapeTextureSize;
        grapeCanvas.height = grapeTextureSize;
        const grapeCtx = grapeCanvas.getContext('2d');
        
        grapeCtx.fillStyle = '#A020F0'; 
        grapeCtx.fillRect(0, 0, grapeTextureSize, grapeTextureSize);
        
        // Add more prominent bloom effect
        for (let i = 0; i < 300; i++) {
            const x = Math.random() * grapeTextureSize;
            const y = Math.random() * grapeTextureSize;
            const radius = 20 + Math.random() * 15;
            
            const gradient = grapeCtx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
            gradient.addColorStop(1, 'rgba(177, 156, 217, 0)');
            
            grapeCtx.fillStyle = gradient;
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
