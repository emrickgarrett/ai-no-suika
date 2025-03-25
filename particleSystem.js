// particleSystem.js
import * as THREE from 'three';

export class ParticleTrailSystem {
    constructor(scene) {
        this.scene = scene;
        this.particles = new Map(); // Map of fruit meshes to their particle systems
        this.starGeometry = this.createStarGeometry();
    }

    createStarGeometry() {
        const starPoints = [];
        const outerRadius = 0.15;
        const innerRadius = 0.05;
        const numPoints = 5;

        for (let i = 0; i < numPoints * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (i / (numPoints * 2)) * Math.PI * 2;
            starPoints.push(new THREE.Vector2(
                Math.cos(angle) * radius,
                Math.sin(angle) * radius
            ));
        }

        const starShape = new THREE.Shape(starPoints);
        return new THREE.ShapeGeometry(starShape);
    }

    createParticleSystem(fruit, color) {
        const maxParticles = 20;
        const particles = new THREE.Group();
        
        // Create pool of star particles
        for (let i = 0; i < maxParticles; i++) {
            const particle = new THREE.Mesh(
                this.starGeometry,
                new THREE.MeshBasicMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0,
                    side: THREE.DoubleSide
                })
            );
            particle.rotation.z = Math.random() * Math.PI * 2;
            particle.visible = false;
            particles.add(particle);
        }

        this.scene.add(particles);
        this.particles.set(fruit, {
            group: particles,
            lastPosition: fruit.position.clone(),
            nextParticleIndex: 0,
            updateCounter: 0
        });
    }

    removeParticleSystem(fruit) {
        const system = this.particles.get(fruit);
        if (system) {
            this.scene.remove(system.group);
            this.particles.delete(fruit);
        }
    }

    update() {
        this.particles.forEach((system, fruit) => {
            // Only emit particles when the fruit has moved
            const movement = fruit.position.distanceTo(system.lastPosition);
            
            if (movement > 0.05) {
                system.updateCounter++;
                
                // Emit new particle every few frames when moving
                if (system.updateCounter % 2 === 0) {
                    const particle = system.group.children[system.nextParticleIndex];
                    
                    // Reset particle
                    particle.position.copy(fruit.position);
                    particle.material.opacity = 0.8;
                    particle.scale.set(1, 1, 1);
                    particle.visible = true;
                    
                    // Update next particle index
                    system.nextParticleIndex = (system.nextParticleIndex + 1) % system.group.children.length;
                }
                
                system.lastPosition.copy(fruit.position);
            }

            // Update existing particles
            system.group.children.forEach(particle => {
                if (particle.visible) {
                    particle.material.opacity *= 0.95;
                    particle.scale.multiplyScalar(0.95);
                    
                    if (particle.material.opacity < 0.1) {
                        particle.visible = false;
                    }
                }
            });
        });
    }
}
