// Import necessary libraries
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { 
    CONTAINER_WIDTH, 
    CONTAINER_HEIGHT, 
    CONTAINER_DEPTH,
    COOLDOWN_DELAY,
    GAME_OVER_HEIGHT,
    PAPER_BAG_COLOR,
    PAPER_BAG_EMISSIVE,
    PAPER_BAG_EMISSIVE_INTENSITY,
    MAIN_LIGHT_INTENSITY,
    AMBIENT_LIGHT_INTENSITY,
    BAG_LIGHT_INTENSITY,
    SPOTLIGHT_INTENSITY
} from './constants.js';

// Build configuration - uses Vite's environment variables
const IS_DEVELOPMENT = import.meta.env.VITE_IS_DEVELOPMENT === 'true';
console.log('Development mode:', IS_DEVELOPMENT);

// Import audio manager
import { audioManager } from './audioManager.js';

// Import texture manager
import { TextureManager } from './textureManager.js';

// Import score manager
import { ScoreManager } from './scoreManager.js';

// Import fruit factory
import { FruitFactory } from './fruitFactory.js';

const FRUITS = [
    { 
        name: 'Cherry', 
        radius: 0.4, 
        color: 0xE41B17, 
        points: 1, 
        emoji: '🍒',
        stemColor: 0x4A7023,
        shape: 'cherry'
    },
    { 
        name: 'Strawberry', 
        radius: 0.5, 
        color: 0xFF2052, 
        points: 2, 
        emoji: '🍓',
        leafColor: 0x2D5A27,
        shape: 'strawberry'
    },
    { 
        name: 'Grape', 
        radius: 0.6, 
        color: 0x9933FF, 
        points: 3, 
        emoji: '🍇',
        shape: 'grape'
    },
    { 
        name: 'Orange', 
        radius: 0.65, 
        color: 0xFF8C00, 
        points: 4, 
        emoji: '🍊',
        bumpScale: 0.05,
        shape: 'orange'
    },
    { 
        name: 'Apple', 
        radius: 0.85, 
        color: 0xFF0000, 
        points: 5, 
        emoji: '🍎',
        stemColor: 0x4A7023,
        shape: 'apple'
    },
    { 
        name: 'Pear', 
        radius: 0.95, 
        color: 0xFFD700, 
        points: 6, 
        emoji: '🍐',
        shape: 'pear'
    },
    { 
        name: 'Peach', 
        radius: 1.2, 
        color: 0xFFCBA4, 
        points: 7, 
        emoji: '🍑',
        shape: 'peach'
    },
    { 
        name: 'Pumpkin', 
        radius: 1.4, 
        color: 0xFF7518, 
        points: 8, 
        emoji: '🎃',
        stemColor: 0x228B22,
        shape: 'pumpkin'
    },
    { 
        name: 'Melon', 
        radius: 1.6, 
        color: 0x98FF98, 
        points: 9, 
        emoji: '🍈',
        stripeColor: 0x228B22,
        shape: 'melon'
    },
    { 
        name: 'Watermelon', 
        radius: 1.8, 
        color: 0x00BB2D, 
        points: 10, 
        emoji: '🍉',
        stripeColor: 0x006400,
        shape: 'watermelon'
    }
];

class SuikaGame {
    constructor() {
        // Initialize properties but don't start yet
        this.fruits = [];
        this.currentFruit = null;
        this.mousePosition = new THREE.Vector2();
        this.mouseDown = false;
        this.gameOver = false;
        this.musicPlaying = false;
        this.dropCooldown = false; // Track if we're in cooldown after dropping a fruit
        this.textureManager = new TextureManager();
        this.scoreManager = new ScoreManager();
        this.lastDropTime = 0;
        this.gameStarted = false;
        this.animationFrameId = null;
        this.fruitFactory = null;
        this.lastTimestamp = 0; // For delta time calculation
    }
    
    init() {
        // Three.js setup
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, CONTAINER_HEIGHT / 2, 7);
        this.camera.lookAt(0, CONTAINER_HEIGHT / 2, 0);
        
        // Setup lighting
        this.setupLighting();
        
        // Setup renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x1a1a1a);
        document.body.appendChild(this.renderer.domElement);

        // Initialize audio manager
        audioManager.init();
        
        // Physics world setup
        this.initPhysics();
        
        // Initialize FruitFactory
        this.fruitFactory = new FruitFactory(this.world, this.fruitMaterial, this.textureManager, this.scene);
        
        // Camera position
        this.camera.position.set(0, CONTAINER_HEIGHT / 2, 12);
        this.camera.lookAt(0, CONTAINER_HEIGHT / 2, 0);

        // Create container walls
        this.createContainer();

        // Game state
        this.nextFruitType = this.getRandomSmallFruit();
        this.scoreManager.updateScore(0);

        // Add raycaster for mouse position
        this.raycaster = new THREE.Raycaster();
        this.mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        this.intersectionPoint = new THREE.Vector3();

        // Event listeners
        window.addEventListener('resize', () => this.onWindowResize());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('click', () => this.dropFruit());

        // Start game loop
        this.animate(0);
        
        // Set up debug panel in development mode
        if (IS_DEVELOPMENT) {
            this.initDebugPanel();
        }
    }

    initPhysics() {
        // Initialize physics world
        this.world = new CANNON.World({
            gravity: new CANNON.Vec3(0, -25.0, 0) // Significantly increased from -15.0 to -25.0
        });
        
        // Create materials
        this.fruitMaterial = new CANNON.Material('fruit');
        this.wallMaterial = new CANNON.Material('wall');
        
        // Create contact material
        const fruitWallContact = new CANNON.ContactMaterial(this.fruitMaterial, this.wallMaterial, {
            friction: 0.35,
            restitution: 0.25 // Reduced from 0.4 to make fruits bounce less
        });
        this.world.addContactMaterial(fruitWallContact);
        
        // Create contact material for fruit-to-fruit interactions
        const fruitFruitContact = new CANNON.ContactMaterial(this.fruitMaterial, this.fruitMaterial, {
            friction: 0.5,      // Higher friction between fruits to reduce sliding
            restitution: 0.15,   // Reduced from 0.2 to make fruits bounce less
            contactEquationStiffness: 1e6,    // Softer contacts to prevent explosive forces
            contactEquationRelaxation: 3,     // Slower relaxation for more stability
            frictionEquationStiffness: 1e6,   // Stable friction
            frictionEquationRelaxation: 3     // Slower friction relaxation
        });
        this.world.addContactMaterial(fruitFruitContact);
        
        // Solver iteration settings for better stability
        this.world.solver.iterations = 20;     // More iterations for better stability (default is 10)
        this.world.solver.tolerance = 0.001;   // Lower tolerance for more precise solutions
        
        // Create the container walls - marking them with isWall property
        this.createContainerWalls();
        
        // Initialize fruit factory now that we have a physics world
    }
    
    createContainerWalls() {
        console.log("Creating container walls");
        
        // Bottom wall
        const bottomWall = this.createWall(
            new CANNON.Vec3(0, 0, 0),
            new CANNON.Vec3(CONTAINER_WIDTH / 2 + 0.5, 0.5, 0.5),
            this.wallMaterial
        );
        bottomWall.isWall = true;
        
        // Left wall
        const leftWall = this.createWall(
            new CANNON.Vec3(-CONTAINER_WIDTH / 2 - 0.5, CONTAINER_HEIGHT / 2, 0),
            new CANNON.Vec3(0.5, CONTAINER_HEIGHT / 2, 0.5),
            this.wallMaterial
        );
        leftWall.isWall = true;
        
        // Right wall
        const rightWall = this.createWall(
            new CANNON.Vec3(CONTAINER_WIDTH / 2 + 0.5, CONTAINER_HEIGHT / 2, 0),
            new CANNON.Vec3(0.5, CONTAINER_HEIGHT / 2, 0.5),
            this.wallMaterial
        );
        rightWall.isWall = true;
        
        // Back wall
        const backWall = this.createWall(
            new CANNON.Vec3(0, CONTAINER_HEIGHT / 2, -CONTAINER_DEPTH / 2),
            new CANNON.Vec3(CONTAINER_WIDTH / 2 + 0.5, CONTAINER_HEIGHT / 2, 0.5),
            this.wallMaterial
        );
        backWall.isWall = true;
        
        // Add a floor sensor below the container to detect escaped fruits
        const floorSensor = new CANNON.Body({
            type: CANNON.Body.STATIC,
            shape: new CANNON.Box(new CANNON.Vec3(CONTAINER_WIDTH * 2, 0.1, CONTAINER_DEPTH * 2)),
            position: new CANNON.Vec3(0, -5, 0), // Position it 5 units below the container
            material: this.wallMaterial,
            isTrigger: true, // Make it a trigger/sensor
            collisionResponse: false // Don't physically collide, just detect
        });
        
        // Mark it as a sensor
        floorSensor.isSensor = true;
        
        // Add to world
        this.world.addBody(floorSensor);
        
        // Store reference
        this.floorSensor = floorSensor;
    }
    
    createWall(position, halfExtents, material = this.world.defaultMaterial) {
        const shape = new CANNON.Box(halfExtents);
        const body = new CANNON.Body({
            mass: 0,
            shape: shape,
            material: material,
            position: position
        });
        body.isWall = true; // Mark this body as a wall
        this.world.addBody(body);
        return body;
    }

    setupLighting() {
        // Main directional light (like sunlight)
        const mainLight = new THREE.DirectionalLight(0xffffff, MAIN_LIGHT_INTENSITY);
        mainLight.position.set(5, 10, 5);
        mainLight.castShadow = true;
        this.scene.add(mainLight);
        
        // Ambient light to brighten up the entire scene
        const ambientLight = new THREE.AmbientLight(0xffffff, AMBIENT_LIGHT_INTENSITY);
        this.scene.add(ambientLight);
        
        // Add a point light near the bag to highlight it
        const bagLight = new THREE.PointLight(0xffffff, BAG_LIGHT_INTENSITY, 15);
        bagLight.position.set(0, CONTAINER_HEIGHT, 2);
        this.scene.add(bagLight);
        
        // Add an additional spotlight focused on the bag
        const spotLight = new THREE.SpotLight(0xffffff, SPOTLIGHT_INTENSITY);
        spotLight.position.set(0, CONTAINER_HEIGHT + 3, 5);
        spotLight.angle = Math.PI / 4;
        spotLight.penumbra = 0.1;
        spotLight.decay = 2;
        spotLight.distance = 20;
        spotLight.target.position.set(0, CONTAINER_HEIGHT / 2, 0);
        this.scene.add(spotLight);
        this.scene.add(spotLight.target);
    }

    createContainer() {
        // Create invisible walls using physics
        const wallThickness = 0.2;
        const wallOffset = 0.2; // Extra space between visual container and physics walls
        
        // Bottom wall - only within the container boundaries
        const bottomWall = new CANNON.Body({
            type: CANNON.Body.STATIC,
            material: this.wallMaterial
        });
        
        // Create a box shape for the bottom that only covers the valid container area
        const bottomShape = new CANNON.Box(
            new CANNON.Vec3(CONTAINER_WIDTH / 2, wallThickness, CONTAINER_DEPTH / 2)
        );
        bottomWall.addShape(bottomShape, new CANNON.Vec3(0, 0, 0));
        bottomWall.position.set(0, 0, 0);
        bottomWall.isWall = true;
        this.world.addBody(bottomWall);

        // Left wall
        this.createWall(
            new CANNON.Vec3(-(CONTAINER_WIDTH / 2 + wallOffset), CONTAINER_HEIGHT / 2, 0),
            new CANNON.Vec3(wallThickness, CONTAINER_HEIGHT / 2, CONTAINER_DEPTH / 2)
        );

        // Right wall
        this.createWall(
            new CANNON.Vec3(CONTAINER_WIDTH / 2 + wallOffset, CONTAINER_HEIGHT / 2, 0),
            new CANNON.Vec3(wallThickness, CONTAINER_HEIGHT / 2, CONTAINER_DEPTH / 2)
        );

        // Back wall
        this.createWall(
            new CANNON.Vec3(0, CONTAINER_HEIGHT / 2, -CONTAINER_DEPTH / 2),
            new CANNON.Vec3(CONTAINER_WIDTH / 2 + wallThickness, CONTAINER_HEIGHT / 2, wallThickness)
        );

        // Create a paper bag appearance
        this.createPaperBag();
    }
    
    createPaperBag() {
        // Create a paper texture
        const paperTexture = this.textureManager.paperTexture;
        
        const bagMaterial = new THREE.MeshStandardMaterial({
            color: PAPER_BAG_COLOR, 
            metalness: 0.0,  // No metalness for paper
            roughness: 0.7,  // Slightly rougher for paper texture
            map: paperTexture,
            side: THREE.DoubleSide,
            emissive: PAPER_BAG_EMISSIVE, // Darker brown emissive for depth
            emissiveIntensity: PAPER_BAG_EMISSIVE_INTENSITY // Increased from 0.2 to make it glow more
        });
        
        // Bottom of the bag
        const bottom = new THREE.Mesh(
            new THREE.BoxGeometry(CONTAINER_WIDTH, 0.1, CONTAINER_DEPTH),
            bagMaterial
        );
        bottom.position.set(0, 0.05, 0);
        this.scene.add(bottom);
        
        // Left side of the bag
        const leftSide = new THREE.Mesh(
            new THREE.PlaneGeometry(CONTAINER_DEPTH, CONTAINER_HEIGHT),
            bagMaterial
        );
        leftSide.position.set(-CONTAINER_WIDTH/2, CONTAINER_HEIGHT/2, 0);
        leftSide.rotation.y = Math.PI/2;
        this.scene.add(leftSide);
        
        // Right side of the bag
        const rightSide = new THREE.Mesh(
            new THREE.PlaneGeometry(CONTAINER_DEPTH, CONTAINER_HEIGHT),
            bagMaterial
        );
        rightSide.position.set(CONTAINER_WIDTH/2, CONTAINER_HEIGHT/2, 0);
        rightSide.rotation.y = -Math.PI/2;
        this.scene.add(rightSide);
        
        // Back of the bag
        const backSide = new THREE.Mesh(
            new THREE.PlaneGeometry(CONTAINER_WIDTH, CONTAINER_HEIGHT),
            bagMaterial
        );
        backSide.position.set(0, CONTAINER_HEIGHT/2, -CONTAINER_DEPTH/2);
        this.scene.add(backSide);
        
        // Bag top trim/fold (just the sides and back)
        const foldThickness = 0.3;
        const foldHeight = 0.6;
        
        // Left fold
        const leftFold = new THREE.Mesh(
            new THREE.PlaneGeometry(CONTAINER_DEPTH, foldHeight),
            bagMaterial
        );
        leftFold.position.set(-CONTAINER_WIDTH/2, CONTAINER_HEIGHT + foldHeight/2, 0);
        leftFold.rotation.y = Math.PI/2;
        leftFold.rotation.x = Math.PI/8; // Angle outward slightly
        this.scene.add(leftFold);
        
        // Right fold
        const rightFold = new THREE.Mesh(
            new THREE.PlaneGeometry(CONTAINER_DEPTH, foldHeight),
            bagMaterial
        );
        rightFold.position.set(CONTAINER_WIDTH/2, CONTAINER_HEIGHT + foldHeight/2, 0);
        rightFold.rotation.y = -Math.PI/2;
        rightFold.rotation.x = Math.PI/8; // Angle outward slightly
        this.scene.add(rightFold);
        
        // Back fold
        const backFold = new THREE.Mesh(
            new THREE.PlaneGeometry(CONTAINER_WIDTH, foldHeight),
            bagMaterial
        );
        backFold.position.set(0, CONTAINER_HEIGHT + foldHeight/2, -CONTAINER_DEPTH/2);
        backFold.rotation.x = Math.PI/8; // Angle outward slightly
        this.scene.add(backFold);
        
        // Add some subtle creases/fold lines to make it look more like paper
        const createFoldLine = (width, height, x, y, z, rotationY) => {
            const foldLine = new THREE.Mesh(
                new THREE.PlaneGeometry(width, height),
                new THREE.MeshBasicMaterial({ color: 0x7B5B3C, transparent: true, opacity: 0.3, side: THREE.DoubleSide })
            );
            foldLine.position.set(x, y, z);
            foldLine.rotation.y = rotationY || 0;
            this.scene.add(foldLine);
        };
        
        // Add fold lines to the back
        createFoldLine(CONTAINER_WIDTH/2, 0.05, -CONTAINER_WIDTH/4, CONTAINER_HEIGHT/2, -CONTAINER_DEPTH/2 + 0.01);
        createFoldLine(CONTAINER_WIDTH/2, 0.05, CONTAINER_WIDTH/4, CONTAINER_HEIGHT/2, -CONTAINER_DEPTH/2 + 0.01);
        
        // Add fold lines to the sides
        createFoldLine(CONTAINER_DEPTH/2, 0.05, -CONTAINER_WIDTH/2 - 0.01, CONTAINER_HEIGHT/2, -CONTAINER_DEPTH/4, Math.PI/2);
        createFoldLine(CONTAINER_DEPTH/2, 0.05, -CONTAINER_WIDTH/2 - 0.01, CONTAINER_HEIGHT/2, CONTAINER_DEPTH/4, Math.PI/2);
        createFoldLine(CONTAINER_DEPTH/2, 0.05, CONTAINER_WIDTH/2 + 0.01, CONTAINER_HEIGHT/2, -CONTAINER_DEPTH/4, Math.PI/2);
        createFoldLine(CONTAINER_DEPTH/2, 0.05, CONTAINER_WIDTH/2 + 0.01, CONTAINER_HEIGHT/2, CONTAINER_DEPTH/4, Math.PI/2);
    }

    getRandomSmallFruit() {
        // Only return one of the first three fruit types
        return FRUITS[Math.floor(Math.random() * 3)];
    }

    updateScore(points) {
        this.scoreManager.updateScore(points);
    }

    createFruitGeometry(type) {
        switch (type.shape) {
            case 'cherry': {
                // Delegate to fruitFactory for consistent implementation
                return this.fruitFactory.createFruitGeometry(type);
            }
            case 'strawberry': {
                // Delegate to fruitFactory for consistent implementation
                return this.fruitFactory.createFruitGeometry(type);
            }
            case 'orange': {
                // Delegate to fruitFactory for consistent implementation
                return this.fruitFactory.createFruitGeometry(type);
            }
            case 'watermelon': {
                // Delegate to fruitFactory for consistent implementation
                return this.fruitFactory.createFruitGeometry(type);
            }
            case 'grape': {
                // Delegate to fruitFactory for consistent implementation
                return this.fruitFactory.createFruitGeometry(type);
            }
            case 'apple': {
                // Delegate to fruitFactory for consistent implementation
                return this.fruitFactory.createFruitGeometry(type);
            }
            case 'pear': {
                // Delegate to fruitFactory for consistent implementation
                return this.fruitFactory.createFruitGeometry(type);
            }
            case 'peach': {
                // Delegate to fruitFactory for consistent implementation
                return this.fruitFactory.createFruitGeometry(type);
            }
            case 'pineapple': {
                // Delegate to fruitFactory for consistent implementation
                return this.fruitFactory.createFruitGeometry(type);
            }
            case 'melon': {
                // Delegate to fruitFactory for consistent implementation
                return this.fruitFactory.createFruitGeometry(type);
            }
            case 'pumpkin': {
                // Delegate to fruitFactory for consistent implementation
                return this.fruitFactory.createFruitGeometry(type);
            }
            default: {
                // Basic sphere for any other fruits
                const geometry = new THREE.SphereGeometry(type.radius, 32, 32);
                const material = new THREE.MeshPhongMaterial({ color: type.color });
                return new THREE.Mesh(geometry, material);
            }
        }
    }

    createFruitBody(radius, position, isCurrent = false, type) {
        // Safety check - if world is not initialized, initialize it first
        if (!this.world) {
            console.log("World not initialized, initializing physics first");
            this.initPhysics();
        }
        
        let shape;
        let body;
        
        // Different collision shapes for different fruits
        if (type && type.shape === 'watermelon' && type.radius > 1.5) {
            // For watermelon, use a cylinder shape for better stacking
            shape = new CANNON.Cylinder(radius, radius, radius * 1.5, 12);
        } else if (type && type.shape === 'pineapple') {
            // For pineapple, use a cylinder that better matches its elongated shape
            // The pineapple visual is a cylinder with height 2*radius plus a cone on top
            // So we'll use a cylinder with slightly taller height for better collision
            shape = new CANNON.Cylinder(radius * 0.7, radius * 0.7, radius * 2.4, 10);
            
            // Use quaternion to rotate the cylinder so it's upright (y-axis aligned)
            const quat = new CANNON.Quaternion();
            quat.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI / 2);
            shape.transformAllPoints(new CANNON.Vec3(), quat);
        } else {
            // For other fruits, use a sphere shape
            shape = new CANNON.Sphere(radius);
        }
        
        // Create the physical body
        if (this.world) {
            body = new CANNON.Body({
                mass: 1,
                shape: shape,
                position: new CANNON.Vec3(position.x, position.y, 0), // Force Z to 0
                material: this.fruitMaterial,
                linearDamping: 0.1,
                angularDamping: 0.05, // Reduced for more noticeable rotation
                collisionFilterGroup: isCurrent ? 0 : 1,
                collisionFilterMask: isCurrent ? 0 : 1
            });
        
            // Track last collision time for sound effects
            body.lastCollisionTime = 0;
            body.collisionCooldown = 100; // Milliseconds between sound effects
            
            // Add collision event handler
            body.addEventListener('collide', (event) => {
                if (!this.world) return; // Safety check
                
                body.velocity.z = 0;
                body.position.z = 0;
                
                // Check if collision is with floor and enough time has passed since last sound
                const now = Date.now();
                if (event.body && event.body.material === this.wallMaterial && 
                    now - body.lastCollisionTime > body.collisionCooldown) {
                    // Play hit sound if audioManager exists
                    if (typeof audioManager !== 'undefined' && audioManager) {
                        audioManager.playSound('hit');
                    }
                    // Update last collision time
                    body.lastCollisionTime = now;
                }
            });
            
            this.world.addBody(body);
            return body;
        } else {
            console.error("Failed to create physics body - world is null");
            
            // Return a dummy body object to prevent errors
            return {
                position: new CANNON.Vec3(position.x, position.y, 0),
                quaternion: new CANNON.Quaternion(),
                velocity: new CANNON.Vec3(0, 0, 0),
                angularVelocity: new CANNON.Vec3(0, 0, 0),
                type: 0, // STATIC type
                addEventListener: () => {},
                fixedRotation: false,
                updateMassProperties: () => {}
            };
        }
    }

    createFruit(type, position, isCurrent = false) {
        // Safety check - ensure initialization
        if (!this.scene) {
            console.error("Scene is not initialized - cannot create fruit");
            // Return a dummy fruit object to prevent further errors
            return {
                mesh: { position: position, quaternion: new THREE.Quaternion() },
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
        
        try {
            // Create 3D mesh
            const mesh = this.createFruitGeometry(type);
            mesh.position.copy(position);
            
            // Create physics body
            const body = this.createFruitBody(type.radius, position, isCurrent, type);
            
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
            
            // Create and return fruit object
            const fruit = {
                mesh,
                body,
                type,
                dropTime: null
            };
            
            // Add to fruits array if it's not the current fruit
            if (!isCurrent) {
                this.fruits.push(fruit);
            }
            
            return fruit;
        } catch (error) {
            console.error("Error creating fruit:", error);
            // Return a dummy object to prevent cascading errors
            return {
                mesh: { position: position, quaternion: new THREE.Quaternion() },
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

    checkFruitCombinations() {
        // Check for combinations
        for (let i = 0; i < this.fruits.length; i++) {
            for (let j = i + 1; j < this.fruits.length; j++) {
                const fruitA = this.fruits[i];
                const fruitB = this.fruits[j];
                
                // Skip if either fruit has been removed
                if (!fruitA || !fruitB) continue;
                
                // Only check fruits of the same type
                if (fruitA.type.name !== fruitB.type.name) continue;
                
                // Calculate distance between fruits
                const distance = fruitA.body.position.distanceTo(fruitB.body.position);
                
                // If the fruits are close enough, combine them
                if (distance < fruitA.type.radius + fruitB.type.radius) {
                    // Get the next fruit type
                    const nextFruitIndex = FRUITS.indexOf(fruitA.type) + 1;
                    if (nextFruitIndex < FRUITS.length) {
                        // Create a new fruit at the average position
                        const position = new THREE.Vector3(
                            (fruitA.body.position.x + fruitB.body.position.x) / 2,
                            (fruitA.body.position.y + fruitB.body.position.y) / 2,
                            0
                        );
                        
                        // Calculate average velocity for the new fruit
                        const avgVelocity = new CANNON.Vec3();
                        avgVelocity.x = (fruitA.body.velocity.x + fruitB.body.velocity.x) / 2;
                        avgVelocity.y = (fruitA.body.velocity.y + fruitB.body.velocity.y) / 2;
                        avgVelocity.z = 0;
                        
                        // Remove the old fruits from scene and physics
                        this.removeFruit(fruitA);
                        this.removeFruit(fruitB);
                        
                        // Create the new combined fruit
                        const newFruit = this.createFruit(FRUITS[nextFruitIndex], position);
                        
                        // Apply average velocity to the new fruit
                        newFruit.body.velocity.copy(avgVelocity);
                        
                        // Play merge sound
                        audioManager.playSound('merge');
                        
                        // Update the score
                        this.scoreManager.addPoints(FRUITS[nextFruitIndex].points);
                        
                        // We've made a change, so restart the check from the beginning
                        // But only if we still have fruits left
                        if (this.fruits.length > 1) {
                            return this.checkFruitCombinations();
                        }
                        return;
                    }
                }
            }
        }
    }

    checkGameOver() {
        // Check for fruit above the line
        const fruitAboveLine = this.fruits.some(fruit => {
            return fruit.body.position.y > CONTAINER_HEIGHT - 1 && 
                   fruit.body.velocity.length() < 0.2 &&
                   Date.now() - this.lastDropTime > 1000;
        });
        
        // Check for fruit that has fallen out of the container
        const fruitBelowContainer = this.fruits.some(fruit => {
            // Check if fruit is below a threshold (fallen out)
            return fruit.body.position.y < -2.0 ||
                   // Or if it's below bottom level and outside container bounds
                   (fruit.body.position.y < 0 && 
                    (Math.abs(fruit.body.position.x) > CONTAINER_WIDTH/2 + 0.5));
        });
        
        if ((fruitAboveLine || fruitBelowContainer) && !this.gameOver) {
            this.gameOver = true;
            console.log("Game over triggered");
            if (fruitBelowContainer) {
                console.log("Game over caused by fruit falling out of container");
            }
            this.showGameOverScreen();
        }
    }
    
    showGameOverScreen() {
        // Create game over UI
        const gameOverDiv = document.createElement('div');
        gameOverDiv.style.position = 'absolute';
        gameOverDiv.style.top = '50%';
        gameOverDiv.style.left = '50%';
        gameOverDiv.style.transform = 'translate(-50%, -50%)';
        gameOverDiv.style.color = 'white';
        gameOverDiv.style.fontSize = '36px';
        gameOverDiv.style.textAlign = 'center';
        gameOverDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        gameOverDiv.style.padding = '20px';
        gameOverDiv.style.borderRadius = '10px';
        gameOverDiv.style.zIndex = '1000';
        
        const restartButton = document.createElement('button');
        restartButton.id = 'restart-button';
        restartButton.innerText = 'Play Again';
        restartButton.style.padding = '10px 20px';
        restartButton.style.marginTop = '20px';
        restartButton.style.cursor = 'pointer';
        restartButton.style.fontSize = '18px';
        restartButton.style.backgroundColor = '#4CAF50';
        restartButton.style.color = 'white';
        restartButton.style.border = 'none';
        restartButton.style.borderRadius = '5px';
        
        const gameOverTitle = document.createElement('div');
        gameOverTitle.innerText = 'Game Over';
        
        const finalScoreDiv = document.createElement('div');
        finalScoreDiv.innerText = `Final Score: ${this.scoreManager.getCurrentScore()}`;
        finalScoreDiv.style.fontSize = '24px';
        
        const highScoreDiv = document.createElement('div');
        highScoreDiv.innerText = `High Score: ${this.scoreManager.getHighScore()}`;
        highScoreDiv.style.fontSize = '20px';
        
        gameOverDiv.appendChild(gameOverTitle);
        gameOverDiv.appendChild(finalScoreDiv);
        gameOverDiv.appendChild(highScoreDiv);
        gameOverDiv.appendChild(restartButton);
        
        document.body.appendChild(gameOverDiv);
        
        // Restart with a completely new game instance
        restartButton.addEventListener('click', function() {
            console.log("Restart button clicked");
            
            // Remove game over screen
            if (gameOverDiv && gameOverDiv.parentNode) {
                document.body.removeChild(gameOverDiv);
            }
            
            // Get high score before disposing everything
            const highScore = game.scoreManager.getHighScore();
            
            // Remember if music was playing before restart
            const wasMusicPlaying = audioManager.musicPlaying;
            
            // Clean up the current game instance
            game.dispose();
            
            // Create and start a completely new game with the saved high score
            game = new SuikaGame();
            game.init();
            game.scoreManager.setHighScore(highScore);
            game.animate(0);
            
            // Restore background music if it was playing
            if (wasMusicPlaying) {
                audioManager.playBackgroundMusic();
            }
            
            console.log("New game instance created with high score:", highScore);
        });
    }

    preventBottomClipping() {
        // Check all fruits
        for (const fruit of this.fruits) {
            // Only check fruits that are near the bottom and not moving upward significantly already
            if (fruit.body && fruit.body.position.y < 0.5 && fruit.body.velocity.y <= 0.1) {
                // How close to the bottom (0 = at bottom, 0.5 = at our threshold)
                const proximity = Math.max(0, 0.5 - fruit.body.position.y);
                
                // Apply stronger correction the closer we are to the bottom
                // Scale factor is stronger when closer to 0
                const correctionFactor = 0.05 + (proximity * 0.2);
                
                // Apply a small upward force - stronger the closer to bottom
                fruit.body.applyForce(
                    new CANNON.Vec3(0, correctionFactor, 0), // Force in y direction
                    fruit.body.position // Application point
                );
                
                // If very close to bottom, also directly adjust position slightly
                if (fruit.body.position.y < 0.05) {
                    fruit.body.position.y = 0.05;
                    
                    // Reset downward velocity
                    if (fruit.body.velocity.y < 0) {
                        fruit.body.velocity.y = 0;
                    }
                }
            }
        }
    }
    
    stabilizeStackedFruits() {
        // Examine all fruits
        for (const fruit of this.fruits) {
            if (!fruit.body) continue;
            
            // Skip fruits that were recently dropped (still in active play)
            if (fruit.dropTime && Date.now() - fruit.dropTime < 2000) continue;
            
            // Get the current linear and angular velocity
            const linearSpeed = fruit.body.velocity.length();
            const angularSpeed = fruit.body.angularVelocity.length();
            
            // Identify fruits that are part of a stable stack
            // These are fruits that are:
            // 1. Moving very slowly (nearly at rest)
            // 2. Have multiple contact points (indicating they're supported)
            // 3. Have been in play for some time
            
            let contactCount = 0;
            let hasBottomSupport = false;
            let hasSideSupport = false;
            
            // Count contacts and identify support type
            if (fruit.body.world && fruit.body.world.contacts) {
                for (let i = 0; i < fruit.body.world.contacts.length; i++) {
                    const contact = fruit.body.world.contacts[i];
                    
                    // Check if this contact involves our fruit
                    if (contact.bi === fruit.body || contact.bj === fruit.body) {
                        contactCount++;
                        
                        // Get the other body in the contact
                        const otherBody = contact.bi === fruit.body ? contact.bj : contact.bi;
                        
                        // Check if contact normal points roughly upward (bottom support)
                        const normalDirection = contact.ni.y; // Normal's y component
                        
                        if (normalDirection > 0.7) {
                            hasBottomSupport = true;
                        } else if (Math.abs(normalDirection) < 0.3) {
                            hasSideSupport = true;
                        }
                    }
                }
            }
            
            // If the fruit is nearly stationary, has bottom support, and is experiencing side forces
            if (linearSpeed < 0.3 && hasBottomSupport && hasSideSupport && contactCount >= 3) {
                // This fruit is likely in a stable stack but experiencing compression
                
                // Dampen forces significantly to prevent build-up
                fruit.body.linearDamping = 0.9;
                fruit.body.angularDamping = 0.9;
                
                // Limit velocities directly to prevent spikes
                if (linearSpeed > 0.1) {
                    fruit.body.velocity.scale(0.9, fruit.body.velocity);
                }
                
                if (angularSpeed > 0.3) {
                    fruit.body.angularVelocity.scale(0.8, fruit.body.angularVelocity);
                }
                
                // For fruits in the bottom portion of the container that have been there a while
                if (fruit.body.position.y < CONTAINER_HEIGHT/4 && Date.now() - fruit.dropTime > 5000) {
                    // These are likely load-bearing fruits at the bottom of the stack
                    // Apply extra force dampening to prevent them from being ejected
                    
                    // Check if this fruit is experiencing extreme compression (many contacts)
                    if (contactCount > 4) {
                        // For heavily compressed fruits - almost fully stabilize
                        fruit.body.velocity.scale(0.5, fruit.body.velocity);
                        fruit.body.angularVelocity.scale(0.5, fruit.body.angularVelocity);
                    }
                }
            }
        }
    }

    dispose() {
        console.log("Disposing game resources");
        
        // Stop animation loop if it's running
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        
        // Remove event listeners
        window.removeEventListener('mousemove', this.onMouseMoveBound);
        document.removeEventListener('keydown', this.keyDownHandler);
        document.removeEventListener('click', this.clickHandler);
        window.removeEventListener('resize', this.onWindowResizeBound);
        
        // Dispose of Three.js resources
        if (this.scene) {
            // Dispose of all meshes, materials, and textures
            this.scene.traverse((object) => {
                if (object.geometry) {
                    object.geometry.dispose();
                }
                
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => {
                            if (material.map) material.map.dispose();
                            material.dispose();
                        });
                    } else {
                        if (object.material.map) object.material.map.dispose();
                        object.material.dispose();
                    }
                }
            });
        }
        
        // Clean up debug panel elements if they exist
        if (IS_DEVELOPMENT) {
            const debugPanel = document.getElementById('debug-panel');
            const debugButton = document.getElementById('debug-toggle-button');
            
            if (debugPanel && debugPanel.parentNode) {
                document.body.removeChild(debugPanel);
            }
            
            if (debugButton && debugButton.parentNode) {
                document.body.removeChild(debugButton);
            }
        }
        
        // Dispose of the renderer
        if (this.renderer) {
            this.renderer.dispose();
            document.body.removeChild(this.renderer.domElement);
        }
        
        // Clear arrays
        this.fruits = [];
        this.currentFruit = null;
    }

    removeFruit(fruit) {
        this.scene.remove(fruit.mesh);
        this.world.removeBody(fruit.body);
        this.fruits = this.fruits.filter(f => f !== fruit);
    }

    spawnSpecificFruit(fruitIndex, x = 0, y = null) {
        // Don't spawn if the game is over
        if (this.gameOver) return;
        
        // If y position isn't provided, place it at the top of the container
        if (y === null) {
            y = CONTAINER_HEIGHT + 1;
        }
        
        // Validate fruit index
        if (fruitIndex < 0 || fruitIndex >= FRUITS.length) {
            console.error(`Invalid fruit index: ${fruitIndex}. Must be between 0 and ${FRUITS.length - 1}`);
            return;
        }
        
        // Get the fruit type by index
        const fruitType = FRUITS[fruitIndex];
        
        // Create a new fruit at the specified position
        const position = new THREE.Vector3(x, y, 0);
        const fruit = this.fruitFactory.createFruit(fruitType, position, false);
        
        // Make it dynamic and add to the game's fruits array
        fruit.body.type = CANNON.Body.DYNAMIC;
        fruit.body.collisionFilterGroup = 1;
        fruit.body.collisionFilterMask = 1;
        fruit.body.angularDamping = 0.1;
        fruit.dropTime = Date.now();
        
        // Make fruit fully opaque
        if (fruit.mesh && typeof fruit.mesh.traverse === 'function') {
            fruit.mesh.traverse((child) => {
                if (child.isMesh && child.material) {
                    child.material = child.material.clone();
                    child.material.opacity = 1;
                }
            });
        }
        
        // Add initial velocity and spin
        fruit.body.velocity.set(0, -1, 0);
        fruit.body.angularVelocity.set(0, 0, (Math.random() - 0.5) * 5);
        fruit.body.fixedRotation = false;
        
        // Update mass properties
        if (typeof fruit.body.updateMassProperties === 'function') {
            fruit.body.updateMassProperties();
        }
        
        // Add to fruit array
        this.fruits.push(fruit);
        
        return fruit;
    }

    initDebugPanel() {
        // Create debug panel container
        const debugPanel = document.createElement('div');
        debugPanel.id = 'debug-panel';
        debugPanel.style.position = 'fixed';
        debugPanel.style.top = '10px';
        debugPanel.style.right = '10px';
        debugPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        debugPanel.style.color = 'white';
        debugPanel.style.padding = '10px';
        debugPanel.style.borderRadius = '5px';
        debugPanel.style.zIndex = '1000';
        debugPanel.style.maxHeight = '80vh';
        debugPanel.style.overflowY = 'auto';
        debugPanel.style.display = 'none'; // Hidden by default
        
        // Add toggle button
        const toggleButton = document.createElement('button');
        toggleButton.id = 'debug-toggle-button';
        toggleButton.textContent = '🛠️ Debug';
        toggleButton.style.position = 'fixed';
        toggleButton.style.top = '10px';
        toggleButton.style.right = '10px';
        toggleButton.style.zIndex = '1001';
        toggleButton.style.padding = '5px 10px';
        toggleButton.style.borderRadius = '5px';
        toggleButton.style.backgroundColor = '#333';
        toggleButton.style.color = 'white';
        toggleButton.style.border = '1px solid #555';
        
        // Add heading
        const heading = document.createElement('h3');
        heading.textContent = 'Fruit Spawner';
        heading.style.margin = '0 0 10px 0';
        debugPanel.appendChild(heading);
        
        // Create fruit buttons container
        const fruitContainer = document.createElement('div');
        fruitContainer.style.display = 'grid';
        fruitContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        fruitContainer.style.gap = '5px';
        debugPanel.appendChild(fruitContainer);
        
        // Add buttons for each fruit type
        FRUITS.forEach((fruit, index) => {
            const button = document.createElement('button');
            button.textContent = `${fruit.emoji} ${fruit.name}`;
            button.style.padding = '5px';
            button.style.margin = '2px';
            button.style.backgroundColor = '#444';
            button.style.color = 'white';
            button.style.border = '1px solid #666';
            button.style.borderRadius = '3px';
            button.style.cursor = 'pointer';
            
            // Add hover effect
            button.onmouseover = () => {
                button.style.backgroundColor = '#555';
            };
            button.onmouseout = () => {
                button.style.backgroundColor = '#444';
            };
            
            // Add click handler to spawn the fruit
            button.onclick = () => {
                // Use current mouse X position if available, otherwise center
                let posX = 0;
                if (game.intersectionPoint) {
                    const radius = fruit.radius;
                    const maxX = (CONTAINER_WIDTH / 2) - radius;
                    posX = Math.max(-maxX, Math.min(maxX, game.intersectionPoint.x));
                }
                
                // Spawn the fruit at the selected position
                game.spawnSpecificFruit(index, posX);
            };
            
            fruitContainer.appendChild(button);
        });
        
        // Add position controls
        const positionControls = document.createElement('div');
        positionControls.style.marginTop = '10px';
        positionControls.style.padding = '5px';
        positionControls.style.backgroundColor = '#333';
        positionControls.style.borderRadius = '3px';
        
        // Add position label
        const posLabel = document.createElement('div');
        posLabel.textContent = 'Spawn Multiple:';
        posLabel.style.marginBottom = '5px';
        positionControls.appendChild(posLabel);
        
        // Add quantity selector
        const quantityContainer = document.createElement('div');
        quantityContainer.style.display = 'flex';
        quantityContainer.style.alignItems = 'center';
        quantityContainer.style.marginBottom = '5px';
        
        const quantityLabel = document.createElement('label');
        quantityLabel.textContent = 'Quantity: ';
        quantityLabel.style.marginRight = '5px';
        
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = '1';
        quantityInput.max = '10';
        quantityInput.value = '1';
        quantityInput.style.width = '50px';
        
        quantityContainer.appendChild(quantityLabel);
        quantityContainer.appendChild(quantityInput);
        positionControls.appendChild(quantityContainer);
        
        // Add random spawn button
        const randomButton = document.createElement('button');
        randomButton.textContent = '🎲 Spawn Random Assortment';
        randomButton.style.width = '100%';
        randomButton.style.padding = '5px';
        randomButton.style.marginTop = '5px';
        randomButton.style.backgroundColor = '#444';
        randomButton.style.color = 'white';
        randomButton.style.border = '1px solid #666';
        randomButton.style.borderRadius = '3px';
        randomButton.style.cursor = 'pointer';
        
        randomButton.onclick = () => {
            const quantity = parseInt(quantityInput.value) || 1;
            const maxQuantity = 10; // Safety limit
            
            // Spawn multiple random fruits across the container width
            for (let i = 0; i < Math.min(quantity, maxQuantity); i++) {
                // Get random fruit index (weighted toward smaller fruits)
                const fruitIndex = Math.min(Math.floor(Math.random() * 5), FRUITS.length - 1);
                
                // Calculate a random position within the container
                const radius = FRUITS[fruitIndex].radius;
                const maxX = (CONTAINER_WIDTH / 2) - radius;
                const randomX = (Math.random() * maxX * 2) - maxX;
                
                // Random height too for more fun
                const randomY = CONTAINER_HEIGHT * 0.5 + (Math.random() * CONTAINER_HEIGHT * 0.5);
                
                // Spawn with a small delay between each
                setTimeout(() => {
                    game.spawnSpecificFruit(fruitIndex, randomX, randomY);
                }, i * 100);
            }
        };
        
        positionControls.appendChild(randomButton);
        debugPanel.appendChild(positionControls);
        
        // Add clear all button
        const clearButton = document.createElement('button');
        clearButton.textContent = '🧹 Clear All Fruits';
        clearButton.style.width = '100%';
        clearButton.style.padding = '5px';
        clearButton.style.marginTop = '10px';
        clearButton.style.backgroundColor = '#a33';
        clearButton.style.color = 'white';
        clearButton.style.border = '1px solid #c44';
        clearButton.style.borderRadius = '3px';
        clearButton.style.cursor = 'pointer';
        
        clearButton.onclick = () => {
            // Remove all fruits from the game
            while (game.fruits.length > 0) {
                const fruit = game.fruits.pop();
                game.removeFruit(fruit);
            }
            
            // Also clear current fruit if it exists
            if (game.currentFruit) {
                game.removeFruit(game.currentFruit);
                game.currentFruit = null;
                // Generate new current fruit
                game.spawnFruit();
            }
        };
        
        debugPanel.appendChild(clearButton);
        
        // Toggle debug panel visibility
        toggleButton.addEventListener('click', () => {
            const isVisible = debugPanel.style.display !== 'none';
            debugPanel.style.display = isVisible ? 'none' : 'block';
            toggleButton.textContent = isVisible ? '🛠️ Debug' : '❌ Close';
            toggleButton.style.backgroundColor = isVisible ? '#333' : '#a33';
        });
        
        // Add to document
        document.body.appendChild(toggleButton);
        document.body.appendChild(debugPanel);
    }

    onMouseMove(event) {
        // Don't do anything if the game is over
        if (this.gameOver) return;
        
        // Update mouse position
        this.mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mousePosition.y = -((event.clientY / window.innerHeight) * 2 - 1);

        // Update raycaster
        this.raycaster.setFromCamera(this.mousePosition, this.camera);
        this.raycaster.ray.intersectPlane(this.mousePlane, this.intersectionPoint);

        // Clamp position within container bounds
        const radius = this.nextFruitType ? this.nextFruitType.radius : 0.5;
        const maxX = (CONTAINER_WIDTH / 2) - radius;
        const clampedX = Math.max(-maxX, Math.min(maxX, this.intersectionPoint.x));

        if (!this.currentFruit) {
            const position = new THREE.Vector3(
                clampedX,
                CONTAINER_HEIGHT + 1,
                0
            );
            this.currentFruit = this.fruitFactory.createFruit(this.nextFruitType, position, true);
            
            // Make the current fruit kinematic until dropped
            this.currentFruit.body.type = CANNON.Body.KINEMATIC;
            this.currentFruit.body.velocity.set(0, 0, 0);
            this.currentFruit.body.angularVelocity.set(0, 0, 0);
        } else {
            // Update both visual and physics positions
            this.currentFruit.mesh.position.x = clampedX;
            this.currentFruit.body.position.x = clampedX;
            
            // Keep Y and Z positions fixed
            this.currentFruit.mesh.position.y = CONTAINER_HEIGHT + 1;
            this.currentFruit.mesh.position.z = 0;
            this.currentFruit.body.position.y = CONTAINER_HEIGHT + 1;
            this.currentFruit.body.position.z = 0;
        }
    }

    dropFruit() {
        // Don't do anything if the game is over
        if (this.gameOver) return;
        
        // Don't drop if cooldown is active
        if (this.dropCooldown) return;
        
        if (this.currentFruit) {
            // Set cooldown flag to prevent rapid drops
            this.dropCooldown = true;
            
            // Reset cooldown after 200ms
            setTimeout(() => {
                this.dropCooldown = false;
            }, 200);
            
            // Safety check - ensure we have valid body object
            if (!this.currentFruit.body) {
                console.error("Current fruit body is null or undefined");
                this.currentFruit = null;
                setTimeout(() => this.spawnFruit(), 300);
                return;
            }
            
            try {
                // Make the fruit dynamic so it can be affected by physics
                this.currentFruit.body.type = CANNON.Body.DYNAMIC;
                
                // Make it collide with other objects
                this.currentFruit.body.collisionFilterGroup = 1;
                this.currentFruit.body.collisionFilterMask = 1;
                
                // Set initial angular damping (will gradually increase over time)
                this.currentFruit.body.angularDamping = 0.1;
                
                // Record the time when the fruit was dropped for rotation damping
                this.currentFruit.dropTime = Date.now();
                
                // Make fruit fully opaque
                if (this.currentFruit.mesh && typeof this.currentFruit.mesh.traverse === 'function') {
                    this.currentFruit.mesh.traverse((child) => {
                        if (child.isMesh) {
                            // Make mesh semi-transparent
                            if (child.material) {
                                child.material = child.material.clone();
                                child.material.opacity = 1;
                            }
                        }
                    });
                } else if (this.currentFruit.mesh && this.currentFruit.mesh.material) {
                    // Direct handling of material if traverse isn't available
                    this.currentFruit.mesh.material.opacity = 1;
                }
                
                // Center and stabilize the fruit for a clean drop
                this.currentFruit.body.position.z = 0;
                if (this.currentFruit.mesh && this.currentFruit.mesh.position) {
                    this.currentFruit.mesh.position.z = 0;
                }
                
                // Add initial velocity and spin
                this.currentFruit.body.velocity.set(0, -1, 0);
                this.currentFruit.body.angularVelocity.set(0, 0, (Math.random() - 0.5) * 10); // Random spin between -5 and 5 rad/s
                
                // Allow rotation
                this.currentFruit.body.fixedRotation = false;
                
                // Update mass properties if the method exists
                if (typeof this.currentFruit.body.updateMassProperties === 'function') {
                    this.currentFruit.body.updateMassProperties();
                }
                
                // Play drop sound with optional pitch shift
                if (audioManager) {
                    const pitchShift = 1 + (Math.random() * 0.2 - 0.1); // Random pitch between 0.9 and 1.1
                    audioManager.playSound('drop', pitchShift);
                }
                
                // Add to fruit array
                this.fruits.push(this.currentFruit);
                this.currentFruit = null;
                
                // Spawn a new fruit after a delay
                setTimeout(() => {
                    this.spawnFruit();
                }, 300);
            } catch (error) {
                console.error("Error dropping fruit:", error);
                // Clean up and spawn new fruit
                this.currentFruit = null;
                setTimeout(() => this.spawnFruit(), 300);
            }
        }
    }

    onWindowResize() {
        // Don't do anything if the game is over
        if (this.gameOver) return;
        
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate(timestamp) {
        if (this.gameOver) return;
        
        // Request next frame
        this.animationFrameId = requestAnimationFrame((newTimestamp) => this.animate(newTimestamp));
        
        // Calculate delta time with a maximum value to prevent large jumps
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp || 0;
        }
        const deltaTime = timestamp ? Math.min((timestamp - this.lastTimestamp) / 1000, 0.1) : 1/60;
        this.lastTimestamp = timestamp || 0;
        
        // Update physics world with proper time stepping
        if (this.world) {
            // Use fixed time steps for stability with interpolation for smooth rendering
            const fixedTimeStep = 1/60;
            const maxSubSteps = 3; // Allow up to 3 substeps to catch up if needed
            this.world.step(fixedTimeStep, deltaTime, maxSubSteps);
            
            // Enforce 2D constraint on all fruits
            for (const fruit of this.fruits) {
                // Reset any z-position drift to exactly 0
                if (fruit.body.position.z !== 0) {
                    fruit.body.position.z = 0;
                    fruit.mesh.position.z = 0;
                }
                
                // Reset any z-velocity to 0
                if (fruit.body.velocity.z !== 0) {
                    fruit.body.velocity.z = 0;
                }
            }
            
            // Update mesh positions based on physics bodies
            for (const fruit of this.fruits) {
                if (fruit.body && fruit.mesh) {
                    fruit.mesh.position.copy(fruit.body.position);
                    fruit.mesh.quaternion.copy(fruit.body.quaternion);
                }
            }
        }

        // Check for collisions/merges
        this.checkFruitCombinations();
        this.checkGameOver();
        this.preventBottomClipping();
        this.stabilizeStackedFruits();

        // Render scene
        this.renderer.render(this.scene, this.camera);
    }

    generateNextFruit() {
        // Get a random small fruit for the next drop
        this.nextFruitType = this.getRandomSmallFruit();
        
        // Update the next fruit display (if it exists)
        const nextFruitDisplay = document.getElementById('next-fruit');
        if (nextFruitDisplay) {
            // Clear any existing content
            while (nextFruitDisplay.firstChild) {
                nextFruitDisplay.removeChild(nextFruitDisplay.firstChild);
            }
            
            // Simple text update instead of 3D preview
            nextFruitDisplay.textContent = `Next: ${this.nextFruitType.name}`;
        }
    }
    
    spawnFruit() {
        // Don't spawn if the game is over
        if (this.gameOver) return;
        
        // Don't spawn if we already have a current fruit
        if (this.currentFruit) return;
        
        // Create fruit if there isn't one already
        if (!this.nextFruitType) {
            this.generateNextFruit();
        }
        
        // Calculate position based on current mouse position
        let positionX = 0; // Default to center

        // If we have a valid intersection point from mouse position, use it
        if (this.intersectionPoint) {
            // Clamp within container bounds
            const radius = this.nextFruitType ? this.nextFruitType.radius : 0.5;
            const maxX = (CONTAINER_WIDTH / 2) - radius;
            positionX = Math.max(-maxX, Math.min(maxX, this.intersectionPoint.x));
        }
        
        // Create a new fruit at the mouse X position, top of container
        const position = new THREE.Vector3(positionX, CONTAINER_HEIGHT + 1, 0);
        this.currentFruit = this.fruitFactory.createFruit(this.nextFruitType, position, true);
        
        // Make the current fruit kinematic until dropped
        this.currentFruit.body.type = CANNON.Body.KINEMATIC;
        this.currentFruit.body.velocity.set(0, 0, 0);
        this.currentFruit.body.angularVelocity.set(0, 0, 0);
        
        // Generate the next fruit preview
        this.generateNextFruit();
    }
}

// Global game instance
let game;

// Load DOM first then init the game
document.addEventListener('DOMContentLoaded', () => {
    // Add music start button that's more prominent
    const musicStartButton = document.createElement('button');
    musicStartButton.textContent = '🎵 Play!';
    musicStartButton.style.position = 'absolute';
    musicStartButton.style.top = '50%';
    musicStartButton.style.left = '50%';
    musicStartButton.style.transform = 'translate(-50%, -50%)';
    musicStartButton.style.zIndex = '10000';
    musicStartButton.style.padding = '20px 30px';
    musicStartButton.style.fontSize = '24px';
    musicStartButton.style.backgroundColor = '#4CAF50';
    musicStartButton.style.color = 'white';
    musicStartButton.style.border = 'none';
    musicStartButton.style.borderRadius = '8px';
    musicStartButton.style.cursor = 'pointer';
    musicStartButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    
    musicStartButton.addEventListener('click', () => {
        // Initialize audio and start music
        audioManager.init();
        audioManager.playBackgroundMusic();
        
        // Remove the button
        document.body.removeChild(musicStartButton);
        
        // Start the game
        if (!game) {
            game = new SuikaGame();
            game.init();
            game.animate(0);
        }
    });
    
    document.body.appendChild(musicStartButton);
});
