// Container dimensions
export const CONTAINER_WIDTH = 6;
export const CONTAINER_HEIGHT = 10;
export const CONTAINER_DEPTH = 4;

// Game parameters
export const COOLDOWN_DELAY = 350; // milliseconds for dropping fruit cooldown
export const DROP_DELAY = 500; // milliseconds minimum time between drops
export const GAME_OVER_HEIGHT = CONTAINER_HEIGHT - 1.5; // Height threshold for game over, allowing fruits to be within the container

// Material properties
export const PAPER_BAG_COLOR = 0xA0522D; // Sienna brown
export const PAPER_BAG_EMISSIVE = 0x3D1C02; // Dark brown emissive
export const PAPER_BAG_EMISSIVE_INTENSITY = 0.6;

// Audio settings
export const DEFAULT_MUSIC_VOLUME = 0.05;
export const DEFAULT_SOUND_EFFECTS_VOLUME = 0.3;

// Lighting parameters
export const MAIN_LIGHT_INTENSITY = 1.5;
export const AMBIENT_LIGHT_INTENSITY = 1.0;
export const BAG_LIGHT_INTENSITY = 1.2;
export const SPOTLIGHT_INTENSITY = 1.0;

// Fruits data (reference only - keep the actual array in main.js due to emoji and complexity)
// Exported as a comment for reference
/*
const FRUITS = [
    { name: 'Cherry', radius: 0.25, color: 0xFF0000, points: 1, emoji: '🍒' },
    { name: 'Strawberry', radius: 0.35, color: 0xFF0044, points: 2, emoji: '🍓' },
    { name: 'Grape', radius: 0.5, color: 0x9400D3, points: 3, emoji: '🍇' },
    ...
];
*/
