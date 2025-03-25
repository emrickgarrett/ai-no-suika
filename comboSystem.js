// comboSystem.js
import * as THREE from 'three';
import { CONTAINER_HEIGHT } from './constants.js';

export class ComboSystem {
    constructor(scene) {
        this.scene = scene;
        this.comboCount = 0;
        this.lastComboTime = 0;
        this.comboTimeout = 1500; // 1.5 seconds to maintain combo
        this.comboText = null;
        this.comboParticles = new THREE.Group();
        this.scene.add(this.comboParticles);
        
        // Create combo text sprite with wider canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 512; // Doubled width for better text fitting
        canvas.height = 128;
        this.textCanvas = canvas;
        this.textContext = context;
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ 
            map: texture,
            transparent: true
        });
        this.comboText = new THREE.Sprite(spriteMaterial);
        this.comboText.scale.set(4, 1, 1); // Increased width scale to match canvas ratio
        this.comboText.visible = false;
        this.scene.add(this.comboText);
    }

    incrementCombo(position, fruitColor) {
        const now = Date.now();
        if (now - this.lastComboTime > this.comboTimeout) {
            this.comboCount = 0;
        }
        
        this.comboCount++;
        this.lastComboTime = now;
        
        // Update combo text
        this.updateComboText(position);
        
        // Create combo particles with fruit color
        this.createComboParticles(position, fruitColor);
    }

    updateComboText(position) {
        if (this.comboCount < 2) {
            this.comboText.visible = false;
            return;
        }

        // Update canvas text
        const ctx = this.textContext;
        ctx.clearRect(0, 0, this.textCanvas.width, this.textCanvas.height);
        
        // Add a subtle background for better readability
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, this.textCanvas.width, this.textCanvas.height);
        
        ctx.fillStyle = this.getComboColor();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 4;
        ctx.font = 'bold 64px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const text = `${this.comboCount}x COMBO!`;
        const x = this.textCanvas.width / 2;
        const y = this.textCanvas.height / 2;
        
        // Draw text stroke and fill
        ctx.strokeText(text, x, y);
        ctx.fillText(text, x, y);
        
        // Update sprite
        this.comboText.material.map.needsUpdate = true;
        
        // Keep x position of merge, but show at top of container
        this.comboText.position.set(
            position.x,
            CONTAINER_HEIGHT - 1, // Slightly below the top edge
            position.z
        );
        this.comboText.visible = true;
    }

    createComboParticles(position, fruitColor) {
        const particleCount = Math.min(this.comboCount * 5, 20);
        
        // Convert hex color to THREE.Color if it's a number
        const color = typeof fruitColor === 'number' ? 
            new THREE.Color(fruitColor) : fruitColor;
            
        for (let i = 0; i < particleCount; i++) {
            const particle = new THREE.Mesh(
                new THREE.CircleGeometry(0.1, 8),
                new THREE.MeshBasicMaterial({
                    color: color,
                    transparent: true,
                    opacity: 1
                })
            );
            
            // Keep particles at merge position
            particle.position.copy(position);
            
            // Random velocity
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.1 + Math.random() * 0.2;
            particle.userData.velocity = new THREE.Vector3(
                Math.cos(angle) * speed,
                Math.sin(angle) * speed,
                0
            );
            
            this.comboParticles.add(particle);
        }
    }

    getComboColor() {
        // Color gets more intense with higher combos
        if (this.comboCount >= 8) return '#FF0000';      // Red
        if (this.comboCount >= 6) return '#FF6600';      // Orange
        if (this.comboCount >= 4) return '#FFCC00';      // Yellow
        return '#FFFFFF';                                 // White
    }

    update() {
        // Fade out combo text
        if (this.comboText.visible) {
            const elapsed = Date.now() - this.lastComboTime;
            if (elapsed > this.comboTimeout) {
                this.comboText.visible = false;
                this.comboCount = 0;
            }
        }

        // Update particles
        for (let i = this.comboParticles.children.length - 1; i >= 0; i--) {
            const particle = this.comboParticles.children[i];
            
            // Update position
            particle.position.add(particle.userData.velocity);
            
            // Update opacity
            particle.material.opacity *= 0.95;
            
            // Remove if fully transparent
            if (particle.material.opacity < 0.1) {
                particle.geometry.dispose();
                particle.material.dispose();
                this.comboParticles.remove(particle);
            }
        }
    }

    dispose() {
        if (this.comboText) {
            this.comboText.material.map.dispose();
            this.comboText.material.dispose();
            this.scene.remove(this.comboText);
        }

        this.comboParticles.children.forEach(particle => {
            particle.geometry.dispose();
            particle.material.dispose();
        });
        this.scene.remove(this.comboParticles);
    }
}
