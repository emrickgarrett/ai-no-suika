// leaderboard.js - Local leaderboard functionality
import { socialShare } from './socialShare.js';

class Leaderboard {
    constructor() {
        this.storageKey = 'aiNoSuikaLeaderboard';
        this.maxEntries = 10;
        this.scores = this.loadScores();
    }

    /**
     * Load scores from local storage
     */
    loadScores() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
    }

    /**
     * Save scores to local storage
     */
    saveScores() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.scores));
    }

    /**
     * Add a new score to the leaderboard
     * @param {number} score - The score to add
     * @returns {object} Position info: {isHighScore, rank, isTopTen}
     */
    addScore(score) {
        const newEntry = {
            score: score,
            date: new Date().toISOString()
        };

        // Insert score in correct position
        const position = this.scores.findIndex(entry => entry.score < score);
        if (position === -1) {
            this.scores.push(newEntry);
        } else {
            this.scores.splice(position, 0, newEntry);
        }

        // Keep only top scores
        if (this.scores.length > this.maxEntries) {
            this.scores = this.scores.slice(0, this.maxEntries);
        }

        this.saveScores();

        return {
            isHighScore: position === 0,
            rank: position === -1 ? this.scores.length : position + 1,
            isTopTen: position < this.maxEntries
        };
    }

    /**
     * Create the leaderboard UI
     * @param {number} currentScore - Current game score
     * @returns {HTMLElement} Leaderboard container
     */
    createLeaderboardUI(currentScore) {
        const container = document.createElement('div');
        container.style.marginTop = '20px';
        container.style.marginBottom = '30px'; 
        container.style.textAlign = 'center';
        container.style.color = 'white';
        container.style.fontFamily = 'Arial, sans-serif';

        // Add title
        const title = document.createElement('h2');
        title.textContent = 'High Scores';
        title.style.marginBottom = '15px';
        container.appendChild(title);

        // Create score list
        const scoreList = document.createElement('div');
        scoreList.style.display = 'flex';
        scoreList.style.flexDirection = 'column';
        scoreList.style.gap = '5px';
        scoreList.style.maxWidth = '300px';
        scoreList.style.margin = '0 auto';
        scoreList.style.marginBottom = '30px'; 
        scoreList.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        scoreList.style.padding = '15px';
        scoreList.style.borderRadius = '8px';

        this.scores.forEach((entry, index) => {
            const scoreEntry = document.createElement('div');
            scoreEntry.style.display = 'flex';
            scoreEntry.style.justifyContent = 'space-between';
            scoreEntry.style.padding = '5px';
            
            // Highlight if this is the current score
            if (entry.score === currentScore) {
                scoreEntry.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                scoreEntry.style.borderRadius = '4px';
            }

            const rank = document.createElement('span');
            rank.textContent = `#${index + 1}`;
            rank.style.fontWeight = 'bold';

            const score = document.createElement('span');
            score.textContent = entry.score.toLocaleString();

            scoreEntry.appendChild(rank);
            scoreEntry.appendChild(score);
            scoreList.appendChild(scoreEntry);
        });

        container.appendChild(scoreList);

        // Add share button if it's a high score
        if (this.scores.some(entry => entry.score === currentScore)) {
            const shareContainer = socialShare.createSocialButtons(currentScore);
            shareContainer.style.marginTop = '15px';
            container.appendChild(shareContainer);
        }

        return container;
    }
}

// Export a singleton instance
export const leaderboard = new Leaderboard();
