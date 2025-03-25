// fruitFactory.js
// Contains methods for creating fruit geometries and physics bodies

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { ParticleTrailSystem } from './particleSystem.js';

export class FruitFactory {
    constructor(world, fruitMaterial, textureManager, scene) {
        this.world = world;
        this.fruitMaterial = fruitMaterial;
        this.textureManager = textureManager;
        this.scene = scene;
        this.particleSystem = new ParticleTrailSystem(scene);
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
                
                // Main body - conical sphere with more realistic shape
                const bodyGeometry = new THREE.SphereGeometry(type.radius, 32, 32);
                
                // Make it more conical and strawberry-shaped
                const positions = bodyGeometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    const y = positions[i + 1];
                    
                    // Bottom half - make more tapered
                    if (y < 0) {
                        // Get more tapered toward the bottom
                        const factor = 0.8 + (y / type.radius) * 0.2; // Gradually taper from 0.8 to 1.0
                        positions[i] *= factor;     // x
                        positions[i + 2] *= factor; // z
                    }
                    
                    // Top - make slightly flatter
                    if (y > type.radius * 0.5) {
                        positions[i + 1] *= 0.9; // Slightly flatten the top
                    }
                    
                    // Add small bumps for seeds all over surface
                    const x = positions[i];
                    const z = positions[i + 2];
                    const distFromCenter = Math.sqrt(x*x + z*z) / type.radius;
                    
                    // Only add bumps within certain radius
                    if (distFromCenter > 0.5 && distFromCenter < 0.95) {
                        // Create small bumps all over surface to simulate seed texture
                        const angle = Math.atan2(z, x);
                        const bumpAmount = 0.03 * Math.sin(angle * 38) * Math.sin(y * 40);
                        
                        positions[i] += positions[i] * bumpAmount;     // x
                        positions[i + 2] += positions[i + 2] * bumpAmount; // z
                    }
                }
                bodyGeometry.attributes.position.needsUpdate = true;
                bodyGeometry.computeVertexNormals(); // Recalculate normals for proper lighting
                
                // Create material with enhanced properties
                const bodyMaterial = new THREE.MeshStandardMaterial({ 
                    color: type.color,
                    roughness: 0.7,
                    metalness: 0.1,
                    map: this.textureManager.strawberryTexture,
                    bumpMap: this.textureManager.strawberryTexture,
                    bumpScale: 0.04,
                    normalMap: this.textureManager.strawberryTexture,
                    normalScale: new THREE.Vector2(0.05, 0.05),
                    envMapIntensity: 0.8,
                });
                
                const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
                group.add(body);
                
                // More detailed leaves
                const leafGroup = new THREE.Group();
                
                // Create multiple leaf petals
                for (let i = 0; i < 5; i++) {
                    const leafShape = new THREE.Shape();
                    const leafWidth = type.radius * (0.25 + Math.random() * 0.1);
                    const leafLength = type.radius * (0.3 + Math.random() * 0.1);
                    
                    // Create leaf shape
                    leafShape.moveTo(0, 0);
                    leafShape.quadraticCurveTo(leafWidth/2, leafLength/2, leafWidth, 0);
                    leafShape.quadraticCurveTo(leafWidth/2, -leafLength/6, 0, 0);
                    
                    // Create geometry and mesh
                    const leafGeometry = new THREE.ShapeGeometry(leafShape);
                    const leaf = new THREE.Mesh(
                        leafGeometry,
                        new THREE.MeshPhongMaterial({ 
                            color: type.leafColor,
                            shininess: 10,
                            side: THREE.DoubleSide
                        })
                    );
                    
                    // Position and rotate leaf
                    leaf.rotation.x = Math.PI / 2 - Math.random() * 0.3;
                    leaf.rotation.z = (i / 5) * Math.PI * 2;
                    
                    leafGroup.add(leaf);
                }
                
                leafGroup.position.y = type.radius * 0.9;
                group.add(leafGroup);
                
                // Add small stem
                const stem = new THREE.Mesh(
                    new THREE.CylinderGeometry(type.radius * 0.05, type.radius * 0.08, type.radius * 0.2, 8),
                    new THREE.MeshPhongMaterial({ 
                        color: 0x7A5230,
                        shininess: 5
                    })
                );
                stem.position.y = type.radius * 0.8;
                group.add(stem);
                
                return group;
            }
            
            case 'apple': {
                const group = new THREE.Group();
                
                // Main apple body
                const body = new THREE.Mesh(
                    new THREE.SphereGeometry(type.radius, 32, 32),
                    new THREE.MeshStandardMaterial({ 
                        color: type.color,
                        roughness: 0.7,
                        metalness: 0.1,
                        map: this.textureManager.appleTexture,
                        bumpMap: this.textureManager.appleTexture,
                        bumpScale: 0.02,
                        normalMap: this.textureManager.appleTexture,
                        normalScale: new THREE.Vector2(0.04, 0.04)
                    })
                );
                group.add(body);
                
                // Small indentation at top
                const indentationGeometry = new THREE.CylinderGeometry(
                    type.radius * 0.12,
                    type.radius * 0.12,
                    type.radius * 0.1,
                    8
                );
                const indentation = new THREE.Mesh(
                    indentationGeometry,
                    new THREE.MeshStandardMaterial({ 
                        color: 0x5A2D00,
                        roughness: 0.9,
                        metalness: 0
                    })
                );
                indentation.position.y = type.radius * 0.92;
                group.add(indentation);
                
                // Add stem
                const stemGeometry = new THREE.CylinderGeometry(
                    type.radius * 0.03,  // top radius (thinner at top)
                    type.radius * 0.05,  // bottom radius
                    type.radius * 0.3,   // height
                    8
                );
                
                // Curve the stem slightly
                const positions = stemGeometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    const y = positions[i + 1];
                    if (y > 0) {
                        // Apply a slight curve to one side
                        positions[i] += type.radius * 0.05 * (y / (type.radius * 0.3));
                    }
                }
                stemGeometry.attributes.position.needsUpdate = true;
                stemGeometry.computeVertexNormals(); 
                
                const stem = new THREE.Mesh(
                    stemGeometry,
                    new THREE.MeshStandardMaterial({ 
                        color: type.stemColor || 0x4A7023,
                        roughness: 0.9,
                        metalness: 0.05
                    })
                );
                
                // Position and rotate stem
                stem.position.y = type.radius * 1.05;
                stem.rotation.x = Math.PI / 12;  // Tilt the stem slightly
                stem.rotation.z = Math.PI / 8;   // Rotate for natural look
                group.add(stem);
                
                // Add a small leaf near the stem base
                const leafShape = new THREE.Shape();
                const leafWidth = type.radius * 0.25;
                const leafLength = type.radius * 0.3;
                
                // Create leaf shape
                leafShape.moveTo(0, 0);
                leafShape.quadraticCurveTo(leafWidth/3, leafLength/2, leafWidth, 0);
                leafShape.quadraticCurveTo(leafWidth/3, -leafLength/4, 0, 0);
                
                const leafGeometry = new THREE.ShapeGeometry(leafShape);
                const leaf = new THREE.Mesh(
                    leafGeometry,
                    new THREE.MeshStandardMaterial({ 
                        color: type.stemColor || 0x4A7023,
                        roughness: 0.8,
                        metalness: 0.05,
                        side: THREE.DoubleSide
                    })
                );
                
                // Position and rotate the leaf
                leaf.position.set(type.radius * 0.05, type.radius * 0.9, type.radius * 0.05);
                leaf.rotation.set(Math.PI / 3, 0, Math.PI / 8);
                group.add(leaf);
                
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
                const group = new THREE.Group();
                
                // Create a simple peach shape
                const peachGeometry = new THREE.SphereGeometry(type.radius, 32, 32);
                
                // Modify vertices to create a subtle cleft
                const peachPositions = peachGeometry.attributes.position.array;
                for (let i = 0; i < peachPositions.length; i += 3) {
                    const x = peachPositions[i];
                    const y = peachPositions[i + 1]; 
                    const z = peachPositions[i + 2];
                    
                    // Make peach slightly wider than tall
                    peachPositions[i] *= 1.05;     // x - wider
                    peachPositions[i + 2] *= 1.05; // z - wider
                    
                    // Create a very subtle cleft - move to front (positive z)
                    if (z > 0 && Math.abs(x) < type.radius * 0.2) {
                        // Only apply to the front half near center
                        const cleftDepth = 0.1;
                        const cleftFactor = Math.exp(-Math.pow(x/(type.radius*0.15), 2));
                        const yFactor = 1.0 - Math.pow(y/(type.radius*1.1), 2);
                        const depthEffect = cleftDepth * cleftFactor * Math.max(0, yFactor);
                        
                        // Push in the z direction slightly to create cleft
                        peachPositions[i + 2] *= (1.0 - depthEffect);
                    }
                }
                
                // Update geometry
                peachGeometry.attributes.position.needsUpdate = true;
                peachGeometry.computeVertexNormals();
                
                // Create peach material using the same approach as the orange
                const peachMaterial = new THREE.MeshStandardMaterial({
                    map: this.textureManager.peachTexture,
                    roughness: 0.8,
                    metalness: 0.0
                });
                
                const body = new THREE.Mesh(peachGeometry, peachMaterial);
                
                // Rotate the peach body so the cleft faces forward (positive z-axis)
                // and the stem is at the top (positive y-axis)
                body.rotation.x = Math.PI * 0.5; // Rotate 90 degrees so stem points up
                
                group.add(body);
                
                // Add a simple stem
                const stemGeometry = new THREE.CylinderGeometry(
                    type.radius * 0.02,  // top
                    type.radius * 0.04,  // bottom
                    type.radius * 0.15,  // height
                    8
                );
                
                // Add a slight curve to the stem
                const stemPositions = stemGeometry.attributes.position.array;
                for (let i = 0; i < stemPositions.length; i += 3) {
                    const y = stemPositions[i + 1];
                    if (y > 0) {
                        stemPositions[i] += type.radius * 0.03 * (y / (type.radius * 0.15));
                    }
                }
                stemGeometry.attributes.position.needsUpdate = true;
                stemGeometry.computeVertexNormals();
                
                const stem = new THREE.Mesh(
                    stemGeometry,
                    new THREE.MeshStandardMaterial({ 
                        color: 0x5A3300,  // Brown
                        roughness: 0.9,
                        metalness: 0.0
                    })
                );
                
                // Position stem at the top (positive y-axis)
                stem.position.set(0, type.radius * 0.85, 0);
                stem.rotation.x = Math.PI / 12;
                
                // Apply the same rotation to the stem as the body
                stem.rotation.x += Math.PI * 0.5;
                
                group.add(stem);
                
                // Add a simple leaf
                const leafShape = new THREE.Shape();
                const leafWidth = type.radius * 0.2;
                const leafLength = type.radius * 0.25;
                
                // Create leaf shape
                leafShape.moveTo(0, 0);
                leafShape.quadraticCurveTo(leafWidth/3, leafLength/2, leafWidth, 0);
                leafShape.quadraticCurveTo(leafWidth/3, -leafLength/4, 0, 0);
                
                const leafGeometry = new THREE.ShapeGeometry(leafShape);
                const leaf = new THREE.Mesh(
                    leafGeometry,
                    new THREE.MeshStandardMaterial({ 
                        color: 0x4D8A2A,  // Green
                        roughness: 0.8,
                        metalness: 0.0,
                        side: THREE.DoubleSide
                    })
                );
                
                // Position the leaf near the stem
                leaf.position.set(type.radius * 0.05, type.radius * 0.85, type.radius * 0.05);
                leaf.rotation.set(Math.PI / 3, 0, Math.PI / 6);
                
                // Apply the same rotation to the leaf as the body
                leaf.rotation.x += Math.PI * 0.5;
                
                group.add(leaf);
                
                return group;
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

            case 'watermelon': {
                const group = new THREE.Group();
                
                // Create round watermelon shape
                const watermelonGeometry = new THREE.SphereGeometry(type.radius, 32, 32);
                
                // Modify vertices for a smooth, round watermelon shape
                const positions = watermelonGeometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    // Instead of flattening, make it very slightly oval horizontally
                    // but keep the vertical dimension unchanged for smoothness
                    positions[i] *= 1.02;     // Make very slightly wider on x-axis
                    positions[i + 2] *= 1.02; // Make very slightly wider on z-axis
                    
                    // Add extremely subtle surface variations for realism
                    // but too small to affect the overall smooth round shape
                    const x = positions[i];
                    const z = positions[i + 2];
                    
                    // Very minimal noise that won't affect the smoothness
                    const noiseScale = 0.005;
                    const noise = (Math.random() - 0.5) * noiseScale;
                    
                    // Apply minimal noise only to the sides, not top/bottom
                    const y = positions[i + 1];
                    if (Math.abs(y / type.radius) < 0.7) { 
                        positions[i] += x * noise;
                        positions[i + 2] += z * noise;
                    }
                }
                
                watermelonGeometry.attributes.position.needsUpdate = true;
                watermelonGeometry.computeVertexNormals();
                
                // Use standard material with our texture for best appearance
                const watermelonMaterial = new THREE.MeshStandardMaterial({
                    map: this.textureManager.watermelonTexture,
                    roughness: 0.5,
                    metalness: 0.0,
                    bumpScale: 0.01,
                });
                
                const watermelon = new THREE.Mesh(watermelonGeometry, watermelonMaterial);
                group.add(watermelon);
                
                return group;
            }
            
            case 'orange': {
                const group = new THREE.Group();
                
                // Create a more detailed orange with subtle bump mapping
                const orangeGeometry = new THREE.SphereGeometry(type.radius, 32, 32);
                
                // Add subtle deformations to make the orange less perfectly round
                const orangePositions = orangeGeometry.attributes.position.array;
                for (let i = 0; i < orangePositions.length; i += 3) {
                    const x = orangePositions[i];
                    const y = orangePositions[i + 1];
                    const z = orangePositions[i + 2];
                    
                    // Calculate distance from center
                    const distance = Math.sqrt(x*x + y*y + z*z);
                    
                    // Add subtle random bumps
                    const angle = Math.atan2(z, x);
                    const bumpFactor = 0.02 * Math.sin(angle * 10) * Math.sin(y * 12);
                    
                    // Apply bumps
                    orangePositions[i] += orangePositions[i] * bumpFactor;
                    orangePositions[i + 1] += orangePositions[i + 1] * bumpFactor;
                    orangePositions[i + 2] += orangePositions[i + 2] * bumpFactor;
                    
                    // Add a slight "squashed" effect on top and bottom (pole flattening)
                    if (Math.abs(y / type.radius) > 0.8) {
                        orangePositions[i + 1] *= 0.95;
                    }
                }
                
                orangeGeometry.attributes.position.needsUpdate = true;
                orangeGeometry.computeVertexNormals();
                
                const orangeMaterial = new THREE.MeshPhongMaterial({
                    color: type.color,
                    shininess: 80,
                    specular: 0x882200,
                    map: this.textureManager.orangeTexture,
                    bumpMap: this.textureManager.orangeTexture,
                    bumpScale: type.bumpScale || 0.03,
                    emissive: 0x220000,
                    emissiveIntensity: 0.05
                });
                
                const orange = new THREE.Mesh(orangeGeometry, orangeMaterial);
                group.add(orange);
                
                // Add small stem/navel on top
                const stemGroup = new THREE.Group();
                
                // Main stem/navel
                const stem = new THREE.Mesh(
                    new THREE.CylinderGeometry(type.radius * 0.05, type.radius * 0.08, type.radius * 0.06, 8),
                    new THREE.MeshPhongMaterial({ color: 0x885522 })
                );
                stemGroup.add(stem);
                
                // Small leaf near stem
                const leafShape = new THREE.Shape();
                const leafSize = type.radius * 0.15;
                
                leafShape.moveTo(0, 0);
                leafShape.quadraticCurveTo(leafSize * 0.5, leafSize, leafSize, 0);
                leafShape.quadraticCurveTo(leafSize * 0.5, -leafSize * 0.3, 0, 0);
                
                const leaf = new THREE.Mesh(
                    new THREE.ShapeGeometry(leafShape),
                    new THREE.MeshPhongMaterial({ 
                        color: 0x2D5A27,
                        side: THREE.DoubleSide
                    })
                );
                leaf.rotation.set(Math.PI/2 - 0.2, 0, 0);
                leaf.position.set(type.radius * 0.05, type.radius * 0.06, 0);
                stemGroup.add(leaf);
                
                stemGroup.position.y = type.radius * 0.9;
                stemGroup.rotation.x = Math.PI * 0.1;
                group.add(stemGroup);
                
                return group;
            }
            
            case 'grape': {
                // Simple sphere with improved material properties
                const geometry = new THREE.SphereGeometry(type.radius, 32, 32);
                const useAltTexture = Math.random() < 0.001; // 1/1000 chance for special face
                
                // Create UV coordinates for front-facing texture
                if (useAltTexture) {
                    const uvAttribute = geometry.attributes.uv;
                    const posAttribute = geometry.attributes.position;
                    
                    // Modify UVs to center the face on the front of the sphere
                    for (let i = 0; i < uvAttribute.count; i++) {
                        const x = posAttribute.getX(i);
                        const y = posAttribute.getY(i);
                        const z = posAttribute.getZ(i);
                        
                        // Convert from Cartesian to spherical coordinates
                        const theta = Math.atan2(z, x);
                        const phi = Math.acos(y / type.radius);
                        
                        // Map spherical coordinates to UV
                        // Shift the texture so the face is centered on the front (z-axis)
                        const u = 0.5 + Math.atan2(x, z) / (2 * Math.PI);
                        const v = 1 - phi / Math.PI;
                        
                        uvAttribute.setXY(i, u, v);
                    }
                    uvAttribute.needsUpdate = true;
                }
                
                const material = new THREE.MeshPhongMaterial({
                    color: type.color,
                    shininess: 120, // High shininess for grape's waxy appearance
                    transparent: false,
                    opacity: 1,
                    map: useAltTexture ? this.textureManager.grapeAltTexture : this.textureManager.grapeTexture,
                    bumpMap: useAltTexture ? this.textureManager.grapeAltTexture : this.textureManager.grapeTexture,
                    bumpScale: 0.01
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
        let shape, body;

        // Special handling for watermelon to match its oval shape
        if (type.shape === 'watermelon') {
            // Create an ellipsoid shape that matches the visual mesh
            // Scale the radius by 1.02 on x and z to match the visual mesh
            shape = new CANNON.Sphere(radius * 1.02);
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
            
            // Create particle trail system for this fruit
            this.particleSystem.createParticleSystem(mesh, type.color);

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

    update() {
        // Update particle trails
        this.particleSystem.update();
    }
}
