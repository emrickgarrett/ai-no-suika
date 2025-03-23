// socialShare.js - Social media sharing functionality

class SocialShare {
    constructor() {
        this.gameUrl = 'https://emrickgarrett.github.io/ai-no-suika/';
        this.defaultMessage = "I scored {score} in Ai-No-Suika Game! Can you beat my score?";
        
        // Fruit emojis for the preview image
        this.fruitEmojis = ['🍒', '🍓', '🍊', '🍋', '🍎', '🍐', '🍑', '🍉', '🍇'];
        
        // Initialize the share canvas
        this.canvas = document.getElementById('share-canvas');
        this.ctx = this.canvas && this.canvas.getContext('2d');
        
        // Preload fruits for preview
        this.fruitImages = {};
        this.preloadImages();
    }
    
    /**
     * Preload fruit images for use in share preview
     */
    preloadImages() {
        const fruitsToLoad = [
            { name: 'cherry', src: './assets/cherry.png' },
            { name: 'strawberry', src: './assets/strawberry.png' },
            { name: 'orange', src: './assets/orange.png' },
            { name: 'watermelon', src: './assets/watermelon.png' },
            { name: 'grape', src: './assets/grape.png' }
        ];
        
        fruitsToLoad.forEach(fruit => {
            const img = new Image();
            img.src = fruit.src;
            img.onerror = () => {
                console.log(`Failed to load ${fruit.name} image, will fall back to emoji`);
            };
            this.fruitImages[fruit.name] = img;
        });
    }

    /**
     * Create sharing buttons for different social media platforms
     * @param {number} score - The player's score to share
     * @returns {HTMLDivElement} Container with social buttons
     */
    createSocialButtons(score) {
        const shareContainer = document.createElement('div');
        shareContainer.className = 'social-share-container';
        shareContainer.style.display = 'flex';
        shareContainer.style.justifyContent = 'center';
        shareContainer.style.gap = '10px';
        shareContainer.style.marginTop = '15px';

        // Create share text with the score
        const shareText = this.defaultMessage.replace('{score}', score);
        
        // Generate preview image with the score
        const previewImageUrl = this.generateShareImage(score);
        
        // Create Twitter share button
        const twitterButton = this.createShareButton(
            '🐦 Twitter',
            '#1DA1F2',
            () => this.shareOnTwitter(shareText, score, previewImageUrl)
        );
        
        // Create Facebook share button
        const facebookButton = this.createShareButton(
            '👍 Facebook',
            '#4267B2',
            () => this.shareOnFacebook(score, previewImageUrl)
        );
        
        // Create WhatsApp share button
        const whatsAppButton = this.createShareButton(
            '💬 WhatsApp',
            '#25D366',
            () => this.shareOnWhatsApp(shareText)
        );

        // Add buttons to container
        shareContainer.appendChild(twitterButton);
        shareContainer.appendChild(facebookButton);
        shareContainer.appendChild(whatsAppButton);
        
        return shareContainer;
    }

    /**
     * Create a styled button for sharing
     * @param {string} text - Button text
     * @param {string} color - Button background color
     * @param {Function} clickHandler - Function to execute on click
     * @returns {HTMLButtonElement} Styled button element
     */
    createShareButton(text, color, clickHandler) {
        const button = document.createElement('button');
        button.innerText = text;
        button.style.padding = '8px 15px';
        button.style.borderRadius = '5px';
        button.style.border = 'none';
        button.style.backgroundColor = color;
        button.style.color = 'white';
        button.style.cursor = 'pointer';
        button.style.fontWeight = 'bold';
        button.style.fontSize = '14px';
        button.style.transition = 'transform 0.1s, opacity 0.2s';
        
        // Add hover effects
        button.addEventListener('mouseover', () => {
            button.style.opacity = '0.9';
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        });
        
        // Add click handler
        button.addEventListener('click', clickHandler);
        
        return button;
    }

    /**
     * Generate a share image with the score
     * @param {number} score - The player's score
     * @returns {string} Data URL for the share image
     */
    generateShareImage(score) {
        if (!this.canvas || !this.ctx) {
            return ''; // Canvas not available
        }
        
        const ctx = this.ctx;
        const canvas = this.canvas;
        const width = canvas.width;
        const height = canvas.height;
        
        // Fill background with gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#1a1a1a');
        gradient.addColorStop(1, '#333333');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Add game title
        ctx.font = 'bold 80px Arial, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText('Ai-No-Suika Game', width / 2, 120);
        
        // Add score
        ctx.font = 'bold 60px Arial, sans-serif';
        ctx.fillStyle = '#ff9900';
        ctx.fillText(`Score: ${score}`, width / 2, 200);
        
        // Add challenge text
        ctx.font = 'bold 40px Arial, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Can you beat my score?', width / 2, 280);
        
        // Draw decorative fruits
        this.drawDecorativeFruits(ctx, width, height);
        
        // Add game URL at the bottom
        ctx.font = '24px Arial, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(this.gameUrl, width / 2, height - 50);
        
        // Add decorative border
        ctx.strokeStyle = '#ff9900';
        ctx.lineWidth = 10;
        ctx.strokeRect(20, 20, width - 40, height - 40);
        
        // Return image as data URL
        return canvas.toDataURL('image/png');
    }
    
    /**
     * Draw decorative fruits on the canvas
     * @param {CanvasRenderingContext2D} ctx - Canvas context
     * @param {number} width - Canvas width
     * @param {number} height - Canvas height 
     */
    drawDecorativeFruits(ctx, width, height) {
        // Draw either image-based fruits if loaded, or fall back to emojis
        const fruitPositions = [];
        
        // Attempt to position fruits without overlapping
        for (let i = 0; i < 15; i++) {
            const size = 40 + Math.random() * 100;
            const x = 100 + Math.random() * (width - 200);
            const y = 320 + Math.random() * (height - 450);
            
            // Check for overlaps
            let overlaps = false;
            for (const pos of fruitPositions) {
                const dx = pos.x - x;
                const dy = pos.y - y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < (pos.size/2 + size/2)) {
                    overlaps = true;
                    break;
                }
            }
            
            if (!overlaps) {
                const fruitType = this.fruitEmojis[Math.floor(Math.random() * this.fruitEmojis.length)];
                fruitPositions.push({ x, y, size, type: fruitType });
            }
        }
        
        // Draw the fruits (either as emojis or images)
        fruitPositions.forEach(pos => {
            // Try to draw a fruit image if available
            let fruitDrawn = false;
            
            if (pos.type === '🍒' && this.fruitImages.cherry && this.fruitImages.cherry.complete) {
                ctx.drawImage(this.fruitImages.cherry, pos.x - pos.size/2, pos.y - pos.size/2, pos.size, pos.size);
                fruitDrawn = true;
            } else if (pos.type === '🍓' && this.fruitImages.strawberry && this.fruitImages.strawberry.complete) {
                ctx.drawImage(this.fruitImages.strawberry, pos.x - pos.size/2, pos.y - pos.size/2, pos.size, pos.size);
                fruitDrawn = true;
            } else if (pos.type === '🍊' && this.fruitImages.orange && this.fruitImages.orange.complete) {
                ctx.drawImage(this.fruitImages.orange, pos.x - pos.size/2, pos.y - pos.size/2, pos.size, pos.size);
                fruitDrawn = true;
            } else if (pos.type === '🍉' && this.fruitImages.watermelon && this.fruitImages.watermelon.complete) {
                ctx.drawImage(this.fruitImages.watermelon, pos.x - pos.size/2, pos.y - pos.size/2, pos.size, pos.size);
                fruitDrawn = true;
            } else if (pos.type === '🍇' && this.fruitImages.grape && this.fruitImages.grape.complete) {
                ctx.drawImage(this.fruitImages.grape, pos.x - pos.size/2, pos.y - pos.size/2, pos.size, pos.size);
                fruitDrawn = true;
            }
            
            // Fall back to emoji if no image
            if (!fruitDrawn) {
                ctx.font = `${pos.size}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(pos.type, pos.x, pos.y);
            }
        });
    }

    /**
     * Share score on Twitter
     * @param {string} text - Text to share
     * @param {number} score - Player's score
     * @param {string} imageUrl - Data URL of the preview image (not used for Twitter)
     */
    shareOnTwitter(text, score, imageUrl) {
        // Create Twitter intent URL with score and hashtag
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(this.gameUrl)}&hashtags=AiNoSuikaGame`;
        
        // Open in a new window
        window.open(twitterUrl, '_blank');
        
        // For Twitter, we don't use the generated image directly since Twitter fetches the image from the URL
        // Instead, we update the metadata when sharing
        this.updateMetaTags(score, imageUrl);
    }

    /**
     * Share score on Facebook
     * @param {number} score - Player's score
     * @param {string} imageUrl - Data URL of the preview image (used for direct Facebook share)
     */
    shareOnFacebook(score, imageUrl) {
        // Update meta tags first for better preview
        this.updateMetaTags(score, imageUrl);
        
        // For Facebook we use the standard sharing dialog
        const shareText = this.defaultMessage.replace('{score}', score);
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.gameUrl)}&quote=${encodeURIComponent(shareText)}`;
        
        // Open in a new window
        window.open(fbUrl, '_blank');
    }

    /**
     * Share score on WhatsApp
     * @param {string} text - Text to share
     */
    shareOnWhatsApp(text) {
        // Create WhatsApp share URL
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + this.gameUrl)}`;
        window.open(whatsappUrl, '_blank');
    }
    
    /**
     * Update the meta tags with the player's score and updated image
     * @param {number} score - Player's score
     * @param {string} imageUrl - Data URL of the preview image
     */
    updateMetaTags(score, imageUrl) {
        // Update meta tags to include the score and point to the generated image
        const shareText = this.defaultMessage.replace('{score}', score);
        
        // Update Open Graph title and description
        this.updateMetaTag('og:title', 'Ai-No-Suika Game - Score: ' + score);
        this.updateMetaTag('og:description', shareText);
        
        // Update Twitter Card title and description
        this.updateMetaTag('twitter:title', 'Ai-No-Suika Game - Score: ' + score);
        this.updateMetaTag('twitter:description', shareText);
        
        // For advanced implementation, we could set up server-side image generation
        // But that's beyond the scope of this client-side implementation
    }
    
    /**
     * Update a meta tag in the document head
     * @param {string} property - Meta tag property to update
     * @param {string} content - New content value
     */
    updateMetaTag(property, content) {
        let metaTag = document.querySelector(`meta[property="${property}"]`) || 
                     document.querySelector(`meta[name="${property}"]`);
        
        if (metaTag) {
            metaTag.setAttribute('content', content);
        } else {
            metaTag = document.createElement('meta');
            metaTag.setAttribute(property.includes(':') ? 'property' : 'name', property);
            metaTag.setAttribute('content', content);
            document.head.appendChild(metaTag);
        }
    }
}

// Export a singleton instance
export const socialShare = new SocialShare();
