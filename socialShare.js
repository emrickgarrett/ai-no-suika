// socialShare.js - Social media sharing functionality

class SocialShare {
    constructor() {
        this.gameUrl = 'https://emrickgarrett.github.io/ai-no-suika/';
        // Using a basic embedded image (fruit emoji) for preview since external URLs aren't working
        this.previewImage = 'data:image/png;base64,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';
        this.defaultMessage = "I scored {score} in Ai-No-Suika Game! Can you beat my score?";
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
        
        // Create Twitter share button
        const twitterButton = this.createShareButton(
            '🐦 Twitter',
            '#1DA1F2',
            () => this.shareOnTwitter(shareText, score)
        );
        
        // Create Facebook share button
        const facebookButton = this.createShareButton(
            '👍 Facebook',
            '#4267B2',
            () => this.shareOnFacebook(score)
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
     * Share score on Twitter
     * @param {string} text - Text to share
     * @param {number} score - Player's score
     */
    shareOnTwitter(text, score) {
        // Create Twitter intent URL with score and hashtag
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(this.gameUrl)}&hashtags=AiNoSuikaGame`;
        window.open(twitterUrl, '_blank');
    }

    /**
     * Share score on Facebook
     * @param {number} score - Player's score
     */
    shareOnFacebook(score) {
        // Use Facebook's sharing dialog
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.gameUrl)}&quote=${encodeURIComponent(this.defaultMessage.replace('{score}', score))}`;
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
     * Create a blob URL for the preview image (for testing)
     * @returns {string} Blob URL for the preview image
     */
    getPreviewImageBlobUrl() {
        // Convert base64 to blob
        const byteString = atob(this.previewImage.split(',')[1]);
        const mimeString = this.previewImage.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        
        const blob = new Blob([ab], {type: mimeString});
        return URL.createObjectURL(blob);
    }
    
    /**
     * Create open graph meta tags for better social media preview
     * Should be called during initialization
     */
    setupSocialMetaTags() {
        // Create Open Graph meta tags for better link previews
        const metaTags = [
            { property: 'og:title', content: 'Ai-No-Suika Game Challenge' },
            { property: 'og:description', content: 'Can you beat my score in this addictive fruit-stacking game?' },
            { property: 'og:image', content: this.previewImage },
            { property: 'og:url', content: this.gameUrl },
            { property: 'og:type', content: 'website' },
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:title', content: 'Ai-No-Suika Game Challenge' },
            { property: 'twitter:description', content: 'Can you beat my score in this addictive fruit-stacking game?' },
            { property: 'twitter:image', content: this.previewImage }
        ];

        // Add meta tags to head if they don't already exist
        metaTags.forEach(tag => {
            if (!document.querySelector(`meta[property="${tag.property}"]`)) {
                const meta = document.createElement('meta');
                meta.setAttribute('property', tag.property);
                meta.setAttribute('content', tag.content);
                document.head.appendChild(meta);
            }
        });
    }
}

// Export a singleton instance
export const socialShare = new SocialShare();
