// fruitFactory.js
// Contains methods for creating fruit geometries and physics bodies

import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class FruitFactory {
    constructor(world, fruitMaterial, textureManager, scene) {
        this.world = world;
        this.fruitMaterial = fruitMaterial;
        this.textureManager = textureManager;
        this.scene = scene;
    }

    createFruitGeometry(type) {
        switch (type.shape) {
            case 'cherry': {
                const group = new THREE.Group();
                
                // Cherry sphere
                const cherry = new THREE.Mesh(
                    new THREE.SphereGeometry(type.radius),
                    new THREE.MeshPhongMaterial({ 
                        color: type.color,
                        shininess: 100,
                        specular: 0x444444
                    })
                );
                group.add(cherry);
                
                // Stem
                const stem = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.05, 0.05, type.radius * 1.5, 8),
                    new THREE.MeshPhongMaterial({ color: type.stemColor })
                );
                stem.position.y = type.radius * 0.8;
                stem.rotation.x = Math.PI / 6;
                group.add(stem);
                
                return group;
            }
            
            case 'strawberry': {
                const group = new THREE.Group();
                
                // Main body - slightly conical sphere
                const bodyGeometry = new THREE.SphereGeometry(type.radius, 32, 32);
                // Make it slightly conical
                const positions = bodyGeometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    const y = positions[i + 1];
                    if (y < 0) {
                        positions[i] *= 0.8;     // x
                        positions[i + 2] *= 0.8; // z
                    }
                }
                bodyGeometry.attributes.position.needsUpdate = true;
                
                const body = new THREE.Mesh(
                    bodyGeometry,
                    new THREE.MeshPhongMaterial({ 
                        color: type.color,
                        shininess: 50,
                        map: this.textureManager.strawberryTexture,
                        bumpMap: this.textureManager.strawberryTexture,
                        bumpScale: 0.02
                    })
                );
                group.add(body);
                
                // Leaves
                const leaves = new THREE.Mesh(
                    new THREE.CircleGeometry(type.radius * 0.4, 5),
                    new THREE.MeshPhongMaterial({ 
                        color: type.leafColor,
                        side: THREE.DoubleSide
                    })
                );
                leaves.position.y = type.radius * 0.8;
                leaves.rotation.x = -Math.PI / 2;
                group.add(leaves);
                
                return group;
            }
            
            case 'apple': {
                const group = new THREE.Group();
                
                // Main apple body
                const body = new THREE.Mesh(
                    new THREE.SphereGeometry(type.radius, 32, 32),
                    new THREE.MeshPhongMaterial({ 
                        color: type.color,
                        shininess: 70,
                        map: this.textureManager.appleTexture,
                        bumpMap: this.textureManager.appleTexture,
                        bumpScale: 0.01
                    })
                );
                group.add(body);
                
                // Small indentation at top
                const topGeometry = new THREE.CylinderGeometry(
                    type.radius * 0.1,
                    type.radius * 0.1,
                    type.radius * 0.1,
                    8
                );
                const top = new THREE.Mesh(
                    topGeometry,
                    new THREE.MeshPhongMaterial({ 
                        color: 0x7A3D00
                    })
                );
                top.position.y = type.radius * 0.9;
                group.add(top);
                
                return group;
            }
            
            case 'pear': {
                const group = new THREE.Group();
                
                // Custom pear shape
                const pearGeometry = new THREE.SphereGeometry(type.radius, 32, 32);
                // Modify to make pear-shaped
                const positions = pearGeometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    const y = positions[i + 1];
                    // Make bottom wider, top narrower
                    if (y < 0) {
                        // Bottom half - make wider
                        const factor = 1.0 + Math.abs(y / type.radius) * 0.3;
                        positions[i] *= factor;       // x
                        positions[i + 2] *= factor;   // z
                    } else if (y > 0) {
                        // Top half - make narrower
                        const factor = 1.0 - (y / type.radius) * 0.3;
                        positions[i] *= factor;       // x
                        positions[i + 2] *= factor;   // z
                    }
                }
                pearGeometry.attributes.position.needsUpdate = true;
                
                const body = new THREE.Mesh(
                    pearGeometry,
                    new THREE.MeshPhongMaterial({ 
                        color: type.color,
                        shininess: 30,
                        map: this.textureManager.pearTexture,
                        bumpMap: this.textureManager.pearTexture,
                        bumpScale: 0.01
                    })
                );
                group.add(body);
                
                // Add stem
                const stemGeometry = new THREE.CylinderGeometry(
                    type.radius * 0.05,
                    type.radius * 0.05,
                    type.radius * 0.3,
                    8
                );
                const stem = new THREE.Mesh(
                    stemGeometry,
                    new THREE.MeshPhongMaterial({ 
                        color: 0x7A3D00
                    })
                );
                stem.position.y = type.radius * 1.1;
                group.add(stem);
                
                return group;
            }
            
            case 'peach': {
                const geometry = new THREE.SphereGeometry(type.radius, 32, 32);
                const material = new THREE.MeshPhongMaterial({ 
                    color: type.color,
                    shininess: 40,
                    map: this.textureManager.peachTexture,
                    bumpMap: this.textureManager.peachTexture,
                    bumpScale: 0.005
                });
                return new THREE.Mesh(geometry, material);
            }
            
            case 'pumpkin': {
                const group = new THREE.Group();
                
                // Main pumpkin body with ridges
                const segments = 16; // More segments for smoother appearance
                const radius = type.radius;
                
                // Create pumpkin geometry with ridges
                const pumpkinGeometry = new THREE.SphereGeometry(radius, segments, segments);
                const pumpkinMaterial = new THREE.MeshPhongMaterial({
                    color: type.color,
                    shininess: 5,
                    map: this.textureManager.pumpkinTexture,
                    bumpMap: this.textureManager.pumpkinTexture,
                    bumpScale: 0.05
                });
                
                // Create the main pumpkin body
                const body = new THREE.Mesh(pumpkinGeometry, pumpkinMaterial);
                
                // Apply subtle deformation to create the pumpkin shape
                const pumpkinVertices = pumpkinGeometry.attributes.position;
                for (let i = 0; i < pumpkinVertices.count; i++) {
                    const x = pumpkinVertices.getX(i);
                    const y = pumpkinVertices.getY(i);
                    const z = pumpkinVertices.getZ(i);
                    
                    // Calculate ridges based on position
                    const angle = Math.atan2(z, x);
                    const ridgeOffset = Math.sin(angle * 8) * 0.08 * radius;
                    
                    // Apply ridge deformation
                    const newX = x * (1 + ridgeOffset);
                    const newZ = z * (1 + ridgeOffset);
                    
                    // Update vertex
                    pumpkinVertices.setX(i, newX);
                    pumpkinVertices.setZ(i, newZ);
                }
                
                // Update geometry
                pumpkinVertices.needsUpdate = true;
                pumpkinGeometry.computeVertexNormals();
                
                group.add(body);
                
                // Add stem on top
                const stemGeometry = new THREE.CylinderGeometry(0.1, 0.15, radius * 0.4, 8);
                const stemMaterial = new THREE.MeshPhongMaterial({ 
                    color: type.stemColor,
                    shininess: 5
                });
                
                const stem = new THREE.Mesh(stemGeometry, stemMaterial);
                stem.position.y = radius * 0.9;
                stem.rotation.x = Math.PI * 0.05;
                stem.rotation.z = Math.PI * 0.1;
                group.add(stem);
                
                return group;
            }
            
            case 'melon': {
                const geometry = new THREE.SphereGeometry(type.radius, 32, 32);
                const material = new THREE.MeshPhongMaterial({ 
                    color: type.color,
                    shininess: 40,
                    map: this.textureManager.melonTexture,
                    bumpMap: this.textureManager.melonTexture,
                    bumpScale: 0.02
                });
                return new THREE.Mesh(geometry, material);
            }
            
            default: {
                // Basic sphere for any other fruits
                const geometry = new THREE.SphereGeometry(type.radius, 32, 32);
                const material = new THREE.MeshPhongMaterial({ color: type.color });
                return new THREE.Mesh(geometry, material);
            }
        }
    }

    createFruitBody(type, position = { x: 0, y: 0 }, isCurrent = false) {
        const radius = type.radius;
        let shape;
        let body;
        
        // Different collision shapes for different fruits
        if (type && type.shape === 'watermelon' && type.radius > 1.5) {
            // For watermelon, use a cylinder shape for better stacking
            shape = new CANNON.Cylinder(radius, radius, radius * 1.5, 12);
        } else if (type && type.shape === 'pumpkin') {
            // For pumpkin, use a stable sphere with slightly reduced size
            const sphereShape = new CANNON.Sphere(radius * 0.95);
            
            // Create the main body
            body = new CANNON.Body({
                mass: 1,
                material: this.fruitMaterial,
                position: new CANNON.Vec3(position.x, position.y, 0),
                linearDamping: 0.2,
                angularDamping: 0.4,
                collisionFilterGroup: isCurrent ? 0 : 1,
                collisionFilterMask: isCurrent ? 0 : 1,
                fixedRotation: false,
                angularFactor: new CANNON.Vec3(0.2, 0.2, 0.8)
            });
            
            // Add the sphere shape
            body.addShape(sphereShape);
            
            // Constrain movement to the x-y plane only
            body.linearFactor = new CANNON.Vec3(1, 1, 0); // Only allow movement in x and y
            body.angularFactor = new CANNON.Vec3(0, 0, 1); // Only allow rotation around z axis
            
            // Add body to the physics world
            this.world.addBody(body);
            
            // Add event listener for collision
            body.addEventListener('collide', (event) => {
                // Play collision sound for non-current fruits only
                if (!isCurrent && window.audioManager) {
                    // Calculate relative velocity for volume
                    const relativeVelocity = event.contact.getImpactVelocityAlongNormal();
                    const volume = Math.min(Math.abs(relativeVelocity) / 10, 1);
                    
                    // Only play sounds for significant collisions
                    if (volume > 0.1) {
                        // Play with pitch variation
                        const pitch = 0.8 + (Math.random() * 0.4); // Between 0.8 and 1.2
                        window.audioManager.playSound('hit', pitch, volume);
                    }
                }
            });
            
            return body;
        } else {
            // For other fruits, use a sphere shape
            shape = new CANNON.Sphere(radius);
        }
        
        // Create body
        body = new CANNON.Body({
            mass: 1,
            shape: shape,
            position: new CANNON.Vec3(position.x, position.y, 0),
            material: this.fruitMaterial,
            linearDamping: 0.1,
            angularDamping: 0.3,
            collisionFilterGroup: isCurrent ? 0 : 1,
            collisionFilterMask: isCurrent ? 0 : 1
        });
        
        // Constrain movement to the x-y plane only
        body.linearFactor = new CANNON.Vec3(1, 1, 0); // Only allow movement in x and y
        body.angularFactor = new CANNON.Vec3(0, 0, 1); // Only allow rotation around z axis
        
        // Add body to the physics world
        this.world.addBody(body);
        
        // Add event listener for collision
        body.addEventListener('collide', (event) => {
            // Play collision sound for non-current fruits only
            if (!isCurrent && window.audioManager) {
                // Calculate relative velocity for volume
                const relativeVelocity = event.contact.getImpactVelocityAlongNormal();
                const volume = Math.min(Math.abs(relativeVelocity) / 10, 1);
                
                // Only play sounds for significant collisions
                if (volume > 0.1) {
                    // Play with pitch variation
                    const pitch = 0.8 + (Math.random() * 0.4); // Between 0.8 and 1.2
                    window.audioManager.playSound('hit', pitch, volume);
                }
            }
        });
        
        return body;
    }

    // Main method to create a complete fruit with both visual and physics components
    createFruit(type, position, isCurrent = false) {
        try {
            // Create the mesh (visual representation)
            const mesh = this.createFruitGeometry(type);
            
            // Position the mesh
            mesh.position.copy(position);
            
            // Create physics body
            const body = this.createFruitBody(type, position, isCurrent);
            
            // Make fruit semi-transparent if it's the current fruit
            if (isCurrent) {
                mesh.traverse((child) => {
                    if (child.isMesh) {
                        // Make mesh semi-transparent
                        if (child.material) {
                            child.material = child.material.clone();
                            child.material.transparent = true;
                            child.material.opacity = 0.7;
                        }
                    }
                });
            }
            
            // Add to scene
            if (this.scene) {
                this.scene.add(mesh);
            }
            
            // Create and return the fruit object
            const fruit = {
                mesh,
                body,
                type,
                dropTime: null
            };
            
            return fruit;
        } catch (error) {
            console.error("Error in FruitFactory.createFruit:", error);
            // Return a dummy object to prevent cascading errors
            return {
                mesh: { position: new THREE.Vector3(position.x, position.y, 0), quaternion: new THREE.Quaternion() },
                body: {
                    position: new CANNON.Vec3(position.x, position.y, 0),
                    quaternion: new CANNON.Quaternion(),
                    velocity: new CANNON.Vec3(0, 0, 0),
                    angularVelocity: new CANNON.Vec3(0, 0, 0),
                    type: 0,
                    addEventListener: () => {}
                },
                type: type
            };
        }
    }
}
