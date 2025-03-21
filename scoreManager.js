/**
 * ScoreManager handles tracking, saving, and loading high scores
 * It uses localStorage to persist scores between play sessions
 */
export class ScoreManager {
    constructor() {
        this.currentScore = 0;
        this.highScore = this.loadHighScore();
        this.scoreElement = document.getElementById('score');
        this.highScoreElement = null;
        
        // Create high score display element if it doesn't exist
        this.initHighScoreDisplay();
    }
    
    /**
     * Initialize the high score display element
     */
    initHighScoreDisplay() {
        // Check if high score element already exists
        this.highScoreElement = document.getElementById('high-score');
        
        if (!this.highScoreElement) {
            // Create the high score element if it doesn't exist
            this.highScoreElement = document.createElement('div');
            this.highScoreElement.id = 'high-score';
            this.highScoreElement.style.position = 'absolute';
            this.highScoreElement.style.top = '50px';
            this.highScoreElement.style.left = '20px';
            this.highScoreElement.style.color = 'white';
            this.highScoreElement.style.fontFamily = 'Arial, sans-serif';
            this.highScoreElement.style.fontSize = '18px';
            document.body.appendChild(this.highScoreElement);
        }
        
        // Update the high score display
        this.updateHighScoreDisplay();
    }
    
    /**
     * Load the high score from localStorage
     * @returns {number} The saved high score or 0 if no high score exists
     */
    loadHighScore() {
        const savedHighScore = localStorage.getItem('suikaHighScore');
        return savedHighScore ? parseInt(savedHighScore) : 0;
    }
    
    /**
     * Save the high score to localStorage
     * @param {number} score - The high score to save
     */
    saveHighScore(score) {
        localStorage.setItem('suikaHighScore', score.toString());
    }
    
    /**
     * Update the current score and check if it's a new high score
     * @param {number} score - The new score
     * @returns {boolean} True if this is a new high score
     */
    updateScore(score) {
        this.currentScore = score;
        
        // Update the score display
        this.updateScoreDisplay();
        
        // Check if this is a new high score
        if (score > this.highScore) {
            this.highScore = score;
            this.saveHighScore(score);
            this.updateHighScoreDisplay();
            return true;
        }
        
        return false;
    }
    
    /**
     * Add points to the current score
     * @param {number} points - Points to add
     * @returns {boolean} True if this resulted in a new high score
     */
    addPoints(points) {
        return this.updateScore(this.currentScore + points);
    }
    
    /**
     * Get the current high score
     * @returns {number} The current high score
     */
    getHighScore() {
        return this.highScore;
    }
    
    /**
     * Get the current score
     * @returns {number} The current score
     */
    getCurrentScore() {
        return this.currentScore;
    }
    
    /**
     * Set the high score directly
     * @param {number} score - The high score to set
     */
    setHighScore(score) {
        this.highScore = score;
        this.saveHighScore(score);
        this.updateHighScoreDisplay();
    }
    
    /**
     * Reset the current score to 0
     */
    resetCurrentScore() {
        this.updateScore(0);
    }
    
    /**
     * Update the score display
     */
    updateScoreDisplay() {
        if (this.scoreElement) {
            this.scoreElement.textContent = `Score: ${this.currentScore}`;
        }
    }
    
    /**
     * Update the high score display
     */
    updateHighScoreDisplay() {
        if (this.highScoreElement) {
            this.highScoreElement.textContent = `High Score: ${this.highScore}`;
        }
    }
    
    /**
     * Reset high score to 0 (mainly for testing)
     */
    clearHighScore() {
        this.highScore = 0;
        this.saveHighScore(0);
        this.updateHighScoreDisplay();
    }
}
