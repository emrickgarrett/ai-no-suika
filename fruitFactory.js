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
                const positions = peachGeometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    const x = positions[i];
                    const y = positions[i + 1]; 
                    const z = positions[i + 2];
                    
                    // Make peach slightly wider than tall
                    positions[i] *= 1.05;     // x - wider
                    positions[i + 2] *= 1.05; // z - wider
                    
                    // Create a very subtle cleft - move to front (positive z)
                    if (z > 0 && Math.abs(x) < type.radius * 0.2) {
                        // Only apply to the front half near center
                        const cleftDepth = 0.1;
                        const cleftFactor = Math.exp(-Math.pow(x/(type.radius*0.15), 2));
                        const yFactor = 1.0 - Math.pow(y/(type.radius*1.1), 2);
                        const depthEffect = cleftDepth * cleftFactor * Math.max(0, yFactor);
                        
                        // Push in the z direction slightly to create cleft
                        positions[i + 2] *= (1.0 - depthEffect);
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
                
                // Create slightly squashed spheroid for watermelon shape
                const watermelonGeometry = new THREE.SphereGeometry(type.radius, 32, 32);
                
                // Modify vertices to create a slightly squashed shape
                const positions = watermelonGeometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    // Slightly flatten the top and bottom
                    const y = positions[i + 1];
                    if (Math.abs(y / type.radius) > 0.75) {
                        positions[i + 1] *= 0.85; // Flatten top and bottom
                    }
                    
                    // Add subtle bumps for texture
                    const x = positions[i];
                    const z = positions[i + 2];
                    const angle = Math.atan2(z, x);
                    const radius = Math.sqrt(x*x + z*z);
                    
                    // Create stripes pattern
                    const stripeFrequency = 8;
                    const stripeWidth = 0.3;
                    const stripePattern = Math.abs(Math.sin(angle * stripeFrequency));
                    
                    // Add small bumps based on the stripe pattern
                    if (stripePattern > stripeWidth) {
                        const bump = 0.02 * Math.sin(radius * 10);
                        positions[i] += x * bump;
                        positions[i + 2] += z * bump;
                    }
                }
                
                watermelonGeometry.attributes.position.needsUpdate = true;
                watermelonGeometry.computeVertexNormals();
                
                // Create stripe pattern with custom shader material
                const watermelonMaterial = new THREE.ShaderMaterial({
                    uniforms: {
                        baseColor: { value: new THREE.Color(type.color) },
                        stripeColor: { value: new THREE.Color(type.stripeColor) },
                        glossiness: { value: 0.8 }
                    },
                    vertexShader: `
                        varying vec2 vUv;
                        varying vec3 vNormal;
                        varying vec3 vPosition;
                        
                        void main() {
                            vUv = uv;
                            vNormal = normalize(normalMatrix * normal);
                            vPosition = position;
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                        }
                    `,
                    fragmentShader: `
                        uniform vec3 baseColor;
                        uniform vec3 stripeColor;
                        uniform float glossiness;
                        
                        varying vec2 vUv;
                        varying vec3 vNormal;
                        varying vec3 vPosition;
                        
                        void main() {
                            // Calculate angle for stripe pattern
                            vec3 normPos = normalize(vPosition);
                            float angle = atan(normPos.z, normPos.x);
                            
                            // Create stripe pattern
                            float stripeFrequency = 8.0;
                            float stripePattern = abs(sin(angle * stripeFrequency));
                            float stripeCutoff = 0.3;
                            
                            // Choose color based on stripe pattern
                            vec3 color = (stripePattern > stripeCutoff) ? baseColor : stripeColor;
                            
                            // Add lighting effects
                            float lighting = max(dot(vNormal, vec3(0.0, 1.0, 0.5)), 0.0);
                            float specular = pow(lighting, 20.0) * glossiness;
                            
                            // Apply colors and lighting
                            gl_FragColor = vec4(color * (0.5 + 0.5 * lighting) + vec3(specular), 1.0);
                        }
                    `
                });
                
                // Alternative approach using standard materials with texture if shaders don't work well
                const standardMaterial = new THREE.MeshStandardMaterial({
                    color: type.color,
                    roughness: 0.3,
                    metalness: 0.0,
                    map: this.textureManager.watermelonTexture,
                    bumpMap: this.textureManager.watermelonTexture,
                    bumpScale: 0.03,
                    envMapIntensity: 1.0
                });
                
                // Use standard material as fallback if shader creation fails
                const watermelon = new THREE.Mesh(watermelonGeometry, 
                    this.textureManager.watermelonTexture ? standardMaterial : watermelonMaterial);
                
                group.add(watermelon);
                
                return group;
            }
            
            case 'orange': {
                const group = new THREE.Group();
                
                // Create a more detailed orange with subtle bump mapping
                const orangeGeometry = new THREE.SphereGeometry(type.radius, 32, 32);
                
                // Add subtle deformations to make the orange less perfectly round
                const positions = orangeGeometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    const x = positions[i];
                    const y = positions[i + 1];
                    const z = positions[i + 2];
                    
                    // Calculate distance from center
                    const distance = Math.sqrt(x*x + y*y + z*z);
                    
                    // Add subtle random bumps
                    const angle = Math.atan2(z, x);
                    const bumpFactor = 0.02 * Math.sin(angle * 10) * Math.sin(y * 12);
                    
                    // Apply bumps
                    positions[i] += positions[i] * bumpFactor;
                    positions[i + 1] += positions[i + 1] * bumpFactor;
                    positions[i + 2] += positions[i + 2] * bumpFactor;
                    
                    // Add a slight "squashed" effect on top and bottom (pole flattening)
                    if (Math.abs(y / type.radius) > 0.8) {
                        positions[i + 1] *= 0.95;
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
                const material = new THREE.MeshPhongMaterial({
                    color: type.color,
                    shininess: 120, // High shininess for grape's waxy appearance
                    specular: 0x8866AA,
                    map: this.textureManager.grapeTexture,
                    bumpMap: this.textureManager.grapeTexture,
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
