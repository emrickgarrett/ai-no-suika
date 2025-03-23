// socialShare.js - Social media sharing functionality

class SocialShare {
    constructor() {
        this.gameUrl = 'https://emrickgarrett.github.io/ai-no-suika/';
        this.defaultMessage = "I scored {score} in Ai-No-Suika Game! Can you beat my score?";
        
        // Static preview image URL
        this.previewImageUrl = 'https://emrickgarrett.github.io/ai-no-suika/main/preview.png';
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

        // Create Copy Text button for other platforms
        const copyTextButton = this.createShareButton(
            '📋 Copy',
            '#7289DA', // Discord-inspired color
            () => this.copyShareText(shareText, score)
        );
        
        // Add buttons to container
        shareContainer.appendChild(twitterButton);
        shareContainer.appendChild(facebookButton);
        shareContainer.appendChild(whatsAppButton);
        shareContainer.appendChild(copyTextButton);
        
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
        // Update meta tags first for better preview
        this.updateMetaTags(score);
        
        // Add a cache-busting parameter to the preview image URL for Twitter
        const cachedImageUrl = `${this.previewImageUrl}?v=${Date.now()}`;
        this.updateMetaTag('twitter:image', cachedImageUrl);
        
        // Create Twitter intent URL with score and hashtags
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(this.gameUrl)}&hashtags=AiNoSuikaGame,VibeJam`;
        
        // Open in a new window
        window.open(twitterUrl, '_blank');
    }

    /**
     * Share score on Facebook
     * @param {number} score - Player's score
     */
    shareOnFacebook(score) {
        // Update meta tags first for better preview
        this.updateMetaTags(score);
        
        // Create a more engaging challenge message for Facebook
        const challengeMessage = `I just scored ${score} points in Ai-No-Suika Game! Think you can beat my score? Challenge accepted? #AiNoSuikaGame #VibeJam`;
        
        // For Facebook we use the standard sharing dialog with the challenge message
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.gameUrl)}&quote=${encodeURIComponent(challengeMessage)}`;
        
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
     * Copy share text to clipboard for other platforms
     * @param {string} text - Text to share
     * @param {number} score - Player's score
     */
    copyShareText(text, score) {
        // Create a more engaging challenge message
        const copyMessage = `I just scored ${score} points in Ai-No-Suika Game! Think you can beat my score? Challenge accepted! Play at ${this.gameUrl} #AiNoSuikaGame #VibeJam`;
        
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = copyMessage;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        
        // Select and copy the text
        textarea.select();
        document.execCommand('copy');
        
        // Remove the textarea
        document.body.removeChild(textarea);
        
        // Show feedback to the user
        alert('Share text copied to clipboard! Now you can paste it anywhere.');
    }
    
    /**
     * Update the meta tags with the player's score
     * @param {number} score - Player's score
     */
    updateMetaTags(score) {
        // Update meta tags to include the score
        const shareText = this.defaultMessage.replace('{score}', score);
        
        // Update Open Graph title and description
        this.updateMetaTag('og:title', 'Ai-No-Suika Game - Score: ' + score);
        this.updateMetaTag('og:description', shareText);
        
        // Update Twitter Card title and description
        this.updateMetaTag('twitter:title', 'Ai-No-Suika Game - Score: ' + score);
        this.updateMetaTag('twitter:description', shareText);
        
        // Update Open Graph image
        this.updateMetaTag('og:image', this.previewImageUrl);
        this.updateMetaTag('twitter:image', this.previewImageUrl);
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
