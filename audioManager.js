// Import constants
import { 
    DEFAULT_MUSIC_VOLUME,
    DEFAULT_SOUND_EFFECTS_VOLUME
} from './constants.js';

/**
 * AudioManager handles all sound effects and background music for the game
 */
export class AudioManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.musicNodes = null;
        this.musicPlaying = false;
        this.soundEffectsVolume = DEFAULT_SOUND_EFFECTS_VOLUME;
        this.musicVolume = DEFAULT_MUSIC_VOLUME;
        this.lastScheduledTime = 0;
        this.loopCheckInterval = null;
    }

    /**
     * Initialize the audio context and set up event listeners
     */
    init() {
        // Create audio context on first user interaction to satisfy autoplay policy
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Resume audio context for mobile devices
            if (this.audioContext.state === 'suspended') {
                const resumeAudio = async () => {
                    await this.audioContext.resume();
                    // Remove the event listeners once audio is running
                    ['touchstart', 'touchend', 'click'].forEach(event => {
                        document.removeEventListener(event, resumeAudio);
                    });
                };
                
                // Add event listeners for both touch and click events
                ['touchstart', 'touchend', 'click'].forEach(event => {
                    document.addEventListener(event, resumeAudio);
                });
            }
        } catch (e) {
            console.error("Web Audio API not supported:", e);
        }

        // Load all sounds
        this.loadSounds();
        
        // Create UI controls
        //this.createMusicControls();
        //this.createVolumeControls();
        
        // Setup music nodes
        this.createBackgroundMusic();
    }

    /**
     * Load all sound effects
     */
    loadSounds() {
        if (!this.audioContext) return;
        
        this.sounds = {
            drop: () => this.playDropSound(),
            hit: () => this.playCollisionSound(),
            merge: () => this.playMergeSound()
        };
    }

    /**
     * Play a gentle drop sound when fruit is released
     */
    playDropSound() {
        if (!this.audioContext) return;
        
        const now = this.audioContext.currentTime;
        
        // Use a more pleasant triangle wave for drop sound
        const oscillator = this.audioContext.createOscillator();
        oscillator.type = 'triangle';
        oscillator.frequency.value = 350;
        oscillator.frequency.exponentialRampToValueAtTime(250, now + 0.1);
        
        // Create filter for a softer sound
        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;
        
        // Create gain node for volume control
        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = 0;
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(this.soundEffectsVolume * 0.5, now + 0.01);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
        
        // Connect the audio graph
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Start and stop
        oscillator.start(now);
        oscillator.stop(now + 0.3);
    }
    
    /**
     * Play a soft collision sound when fruits hit each other or walls
     */
    playCollisionSound() {
        if (!this.audioContext) return;
        
        const now = this.audioContext.currentTime;
        
        // Create noise for a more natural collision sound
        const bufferSize = this.audioContext.sampleRate * 0.1; // 100ms buffer
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Fill the buffer with filtered noise
        for (let i = 0; i < bufferSize; i++) {
            // Softer noise (more weighted towards zero)
            data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2) * 0.5;
        }
        
        // Create noise source
        const noiseSource = this.audioContext.createBufferSource();
        noiseSource.buffer = buffer;
        
        // Create filter for wood-like tonal quality
        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 600;
        filter.Q.value = 1;
        
        // Create gain node
        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.soundEffectsVolume * 0.4;
        gainNode.gain.setValueAtTime(this.soundEffectsVolume * 0.4, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        
        // Connect nodes
        noiseSource.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Start sound
        noiseSource.start(now);
    }
    
    /**
     * Play a satisfying merge sound when fruits combine
     */
    playMergeSound() {
        if (!this.audioContext) return;
        
        const now = this.audioContext.currentTime;
        
        // Create a boom effect with low frequency oscillator
        const boomOsc = this.audioContext.createOscillator();
        boomOsc.type = 'sine';
        boomOsc.frequency.value = 80; // Much lower frequency for boom effect
        boomOsc.frequency.exponentialRampToValueAtTime(40, now + 0.3); // Falling pitch for boom effect
        
        // Add compression for punchier sound
        const compressor = this.audioContext.createDynamicsCompressor();
        compressor.threshold.value = -24;
        compressor.knee.value = 30;
        compressor.ratio.value = 12;
        compressor.attack.value = 0.003;
        compressor.release.value = 0.25;
        
        // Add low-pass filter for boom character
        const boomFilter = this.audioContext.createBiquadFilter();
        boomFilter.type = 'lowpass';
        boomFilter.frequency.value = 800;
        boomFilter.frequency.exponentialRampToValueAtTime(80, now + 0.4);
        boomFilter.Q.value = 1;
        
        // Create gain node for boom volume
        const boomGain = this.audioContext.createGain();
        boomGain.gain.value = 0;
        boomGain.gain.setValueAtTime(0, now);
        boomGain.gain.linearRampToValueAtTime(this.soundEffectsVolume * 0.8, now + 0.02);
        boomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        
        // Connect boom components
        boomOsc.connect(boomFilter);
        boomFilter.connect(compressor);
        compressor.connect(boomGain);
        boomGain.connect(this.audioContext.destination);
        
        // Add noise burst for impact texture
        const bufferSize = this.audioContext.sampleRate * 0.2; // 200ms buffer
        const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const noiseData = noiseBuffer.getChannelData(0);
        
        // Create noise with a quick decay curve
        for (let i = 0; i < bufferSize; i++) {
            // Quick decay for the noise component
            const decay = Math.pow(1 - i / bufferSize, 3);
            noiseData[i] = (Math.random() * 2 - 1) * decay * 0.7;
        }
        
        // Create noise source
        const noiseSource = this.audioContext.createBufferSource();
        noiseSource.buffer = noiseBuffer;
        
        // Filter for the noise component
        const noiseFilter = this.audioContext.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.value = 250;
        noiseFilter.Q.value = 0.7;
        
        // Gain node for noise component
        const noiseGain = this.audioContext.createGain();
        noiseGain.gain.value = this.soundEffectsVolume * 0.25;
        noiseGain.gain.setValueAtTime(this.soundEffectsVolume * 0.25, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        
        // Connect noise components
        noiseSource.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.audioContext.destination);
        
        // Add a subtle mid-tone "knock" element
        const knockOsc = this.audioContext.createOscillator();
        knockOsc.type = 'triangle';
        knockOsc.frequency.value = 180;
        knockOsc.frequency.exponentialRampToValueAtTime(120, now + 0.1);
        
        // Gain for the knock sound
        const knockGain = this.audioContext.createGain();
        knockGain.gain.value = 0;
        knockGain.gain.setValueAtTime(0, now);
        knockGain.gain.linearRampToValueAtTime(this.soundEffectsVolume * 0.3, now + 0.01);
        knockGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        
        // Connect knock components
        knockOsc.connect(knockGain);
        knockGain.connect(this.audioContext.destination);
        
        // Start all sound components
        boomOsc.start(now);
        boomOsc.stop(now + 0.5);
        noiseSource.start(now);
        knockOsc.start(now);
        knockOsc.stop(now + 0.2);
    }

    /**
     * Play a simple tone sound effect (legacy method kept for compatibility)
     */
    playTone(audioContext, frequency, duration) {
        if (!audioContext) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        
        gainNode.gain.value = this.soundEffectsVolume;
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration);
    }

    /**
     * Play a sound by name
     */
    playSound(name) {
        try {
            const sound = this.sounds[name];
            if (sound && typeof sound === 'function') {
                sound();
            }
        } catch (e) {
            console.error("Error playing sound:", e);
        }
    }

    /**
     * Create UI controls for music - disabled
     */
    createMusicControls() {
        // Music controls removed
    }
    
    /**
     * Create volume control sliders
     */
    // createVolumeControls() {
    //     // Create container for volume controls
    //     const volumeControls = document.createElement('div');
    //     volumeControls.style.position = 'absolute';
    //     volumeControls.style.bottom = '10px';
    //     volumeControls.style.left = '10px';
    //     volumeControls.style.zIndex = '1000';
    //     volumeControls.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    //     volumeControls.style.padding = '10px';
    //     volumeControls.style.borderRadius = '4px';
    //     volumeControls.style.fontFamily = 'Arial, sans-serif';
    //     volumeControls.style.color = 'white';
    //     volumeControls.style.display = 'flex';
    //     volumeControls.style.flexDirection = 'column';
    //     volumeControls.style.gap = '8px';
        
    //     // Volume control for sound effects
    //     const soundEffectsContainer = document.createElement('div');
    //     soundEffectsContainer.style.display = 'flex';
    //     soundEffectsContainer.style.alignItems = 'center';
    //     soundEffectsContainer.style.gap = '8px';
        
    //     const soundLabel = document.createElement('label');
    //     soundLabel.textContent = '🔊 Effects:';
    //     soundLabel.style.width = '80px';
        
    //     const soundSlider = document.createElement('input');
    //     soundSlider.type = 'range';
    //     soundSlider.min = '0';
    //     soundSlider.max = '100';
    //     soundSlider.value = Math.round(this.soundEffectsVolume * 100);
    //     soundSlider.style.width = '100px';
        
    //     soundSlider.addEventListener('input', (e) => {
    //         this.soundEffectsVolume = parseInt(e.target.value) / 100;
    //     });
        
    //     soundEffectsContainer.appendChild(soundLabel);
    //     soundEffectsContainer.appendChild(soundSlider);
        
    //     // Volume control for music
    //     const musicVolumeContainer = document.createElement('div');
    //     musicVolumeContainer.style.display = 'flex';
    //     musicVolumeContainer.style.alignItems = 'center';
    //     musicVolumeContainer.style.gap = '8px';
        
    //     const musicLabel = document.createElement('label');
    //     musicLabel.textContent = '🎵 Music:';
    //     musicLabel.style.width = '80px';
        
    //     const musicSlider = document.createElement('input');
    //     musicSlider.type = 'range';
    //     musicSlider.min = '0';
    //     musicSlider.max = '100';
    //     musicSlider.value = Math.round(this.musicVolume * 100);
    //     musicSlider.style.width = '100px';
        
    //     musicSlider.addEventListener('input', (e) => {
    //         this.musicVolume = parseInt(e.target.value) / 100;
    //         this.updateMusicVolume();
    //     });
        
    //     musicVolumeContainer.appendChild(musicLabel);
    //     musicVolumeContainer.appendChild(musicSlider);
        
    //     // Add controls to container
    //     volumeControls.appendChild(soundEffectsContainer);
    //     volumeControls.appendChild(musicVolumeContainer);
        
    //     // Add container to document
    //     document.body.appendChild(volumeControls);
    // }
    
    /**
     * Update music volume
     */
    updateMusicVolume() {
        if (this.musicNodes && this.musicNodes.mainGainNode) {
            this.musicNodes.mainGainNode.gain.value = this.musicVolume;
        }
    }

    /**
     * Create background music nodes
     */
    createBackgroundMusic() {
        // Store audio nodes that need to be accessed later
        this.musicNodes = {
            bassOscillators: [],
            melodySynths: [],
            drumSounds: [],
            mainGainNode: null
        };
        
        // We'll create the actual audio nodes when play is called
        // This avoids autoplay restrictions and saves resources
    }
    
    /**
     * Start playing the background music
     */
    playBackgroundMusic() {
        if (this.musicPlaying) return;
        
        // Create a new audio context if needed (in case of user interaction requirement)
        if (!this.audioContext || this.audioContext.state === 'closed') {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Resume audio context if suspended
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        // Master gain for all music elements
        const mainGain = this.audioContext.createGain();
        mainGain.gain.value = this.musicVolume; // Use the music volume property
        mainGain.connect(this.audioContext.destination);
        this.musicNodes.mainGainNode = mainGain;
        
        // Create synthwave elements
        this.createSynthwaveBass(mainGain);
        this.createSynthwaveMelody(mainGain);
        this.createSynthwaveDrums(mainGain);
        
        this.musicPlaying = true;
        
        // Set up a check to ensure music keeps playing
        this.loopCheckInterval = setInterval(() => {
            if (this.musicPlaying && this.audioContext && this.audioContext.state === 'running') {
                // If we're close to the end of our scheduled music, schedule more
                const currentTime = this.audioContext.currentTime;
                if (currentTime > this.lastScheduledTime - 60) { // If less than 60 seconds of music left
                    // Schedule more music
                    this.createSynthwaveBass(mainGain, currentTime + 1);
                    this.createSynthwaveMelody(mainGain, currentTime + 1);
                    this.createSynthwaveDrums(mainGain, currentTime + 1);
                }
            }
        }, 30000); // Check every 30 seconds
    }
    
    /**
     * Stop background music
     */
    stopBackgroundMusic() {
        if (!this.musicPlaying) return;
        
        // Clear the loop check interval
        if (this.loopCheckInterval) {
            clearInterval(this.loopCheckInterval);
            this.loopCheckInterval = null;
        }
        
        // Fade out over 1 second
        if (this.musicNodes && this.musicNodes.mainGainNode) {
            const now = this.audioContext.currentTime;
            this.musicNodes.mainGainNode.gain.setValueAtTime(
                this.musicNodes.mainGainNode.gain.value, now);
            this.musicNodes.mainGainNode.gain.linearRampToValueAtTime(0, now + 1);
            
            // Stop and clean up all oscillators after fade out
            setTimeout(() => {
                // Stop bass oscillators
                this.musicNodes.bassOscillators.forEach(osc => {
                    if (osc && osc.stop) osc.stop();
                });
                
                // Stop melody synths
                this.musicNodes.melodySynths.forEach(synth => {
                    if (synth && synth.stop) synth.stop();
                });
                
                // Clear all references
                this.musicNodes.bassOscillators = [];
                this.musicNodes.melodySynths = [];
                this.musicNodes.drumSounds = [];
                this.musicNodes.mainGainNode = null;
            }, 1000);
        }
        
        this.musicPlaying = false;
    }
    
    /**
     * Create synthesized bass line (simple, gentle)
     */
    createSynthwaveBass(outputNode, startOffset = 0) {
        const now = this.audioContext.currentTime + startOffset;
        
        // Simple C major bass notes - fewer notes for simplicity
        const bassNotes = [262, 196, 220, 196]; // C3, G2, A2, G2
        const noteDuration = 1.0; // 1 second per note, slower and more relaxed
        const patternDuration = bassNotes.length * noteDuration;
        
        // Create oscillator for bass
        const bassOscillator = this.audioContext.createOscillator();
        bassOscillator.type = 'sine'; // Soft sine wave
        
        // Simple lowpass filter
        const bassFilter = this.audioContext.createBiquadFilter();
        bassFilter.type = 'lowpass';
        bassFilter.frequency.value = 500;
        
        // Create envelope
        const bassEnvelope = this.audioContext.createGain();
        
        // Connect components
        bassOscillator.connect(bassFilter);
        bassFilter.connect(bassEnvelope);
        bassEnvelope.connect(outputNode);
        
        // Schedule the bass line notes - simple pattern
        const iterations = 1000;
        for (let i = 0; i < iterations; i++) {
            for (let j = 0; j < bassNotes.length; j++) {
                const startTime = now + (i * patternDuration) + (j * noteDuration);
                bassOscillator.frequency.setValueAtTime(bassNotes[j], startTime);
                
                // Very gentle envelope
                bassEnvelope.gain.setValueAtTime(0, startTime);
                bassEnvelope.gain.linearRampToValueAtTime(0.3, startTime + 0.1);
                bassEnvelope.gain.linearRampToValueAtTime(0.2, startTime + noteDuration * 0.9);
                
                // Track the last scheduled time to know when to loop
                this.lastScheduledTime = Math.max(this.lastScheduledTime || 0, startTime + noteDuration);
            }
        }
        
        // Start the oscillator
        bassOscillator.start();
        this.musicNodes.bassOscillators.push(bassOscillator);
    }
    
    /**
     * Create simple spring melody
     */
    createSynthwaveMelody(outputNode, startOffset = 0) {
        const now = this.audioContext.currentTime + startOffset;
        
        // Simple C major melody notes
        const melodyNotes = [523, 587, 659, 698, 784]; // C5, D5, E5, F5, G5
        
        // Simple rhythm pattern - gentle and sparse
        const rhythmPattern = [1, 1, 2, 1.5, 1.5];
        
        // Create main melody synth - slower tempo (100 instead of 140)
        this.scheduleMelodyPattern(melodyNotes, rhythmPattern, 100, outputNode, now);
    }
    
    /**
     * Schedule a melody pattern
     */
    scheduleMelodyPattern(notes, rhythm, tempo, outputNode, startTime) {
        const beatDuration = 60 / tempo;
        let currentTime = startTime;
        
        // Simple repeating melody pattern
        const iterations = 200;
        for (let repeat = 0; repeat < iterations; repeat++) {
            // For even more simplicity, add pauses between repeats
            if (repeat > 0) {
                currentTime += beatDuration * 2; // Add pause between patterns
            }
            
            // Simple melody sequence that doesn't always play the same way
            const sequence = [0, 1, 2, 1, 4, 2, 3, 2]; // Indexes into notes array
            
            // Play through the sequence
            for (let i = 0; i < sequence.length; i++) {
                // Only play 80% of notes for some variation but still clear melody
                if (Math.random() > 0.2) {
                    const note = notes[sequence[i]];
                    const duration = rhythm[i % rhythm.length] * beatDuration;
                    this.playMelodyNote(note, currentTime, duration, outputNode);
                }
                
                // Move time forward
                currentTime += rhythm[i % rhythm.length] * beatDuration;
                
                // Track the last scheduled time
                this.lastScheduledTime = Math.max(this.lastScheduledTime || 0, currentTime);
            }
        }
    }
    
    /**
     * Play a single melody note
     */
    playMelodyNote(frequency, startTime, duration, outputNode) {
        // Create oscillator for the note
        const oscillator = this.audioContext.createOscillator();
        oscillator.type = 'sine'; // Pure sine for cleaner sound
        oscillator.frequency.value = frequency;
        
        // Very minimal filtering
        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1500;
        
        // Create envelope
        const envelope = this.audioContext.createGain();
        envelope.gain.value = 0;
        
        // Connect components
        oscillator.connect(filter);
        filter.connect(envelope);
        envelope.connect(outputNode);
        
        // Simple gentle envelope
        envelope.gain.setValueAtTime(0, startTime);
        envelope.gain.linearRampToValueAtTime(0.2, startTime + 0.1);
        envelope.gain.linearRampToValueAtTime(0.15, startTime + duration * 0.6);
        envelope.gain.linearRampToValueAtTime(0, startTime + duration);
        
        // Schedule and start the oscillator
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
        
        // Store for cleanup
        this.musicNodes.melodySynths.push(oscillator);
    }
    
    /**
     * Create minimal drum sounds
     */
    createSynthwaveDrums(outputNode, startOffset = 0) {
        const tempo = 100; // Slower tempo
        const beatDuration = 60 / tempo;
        const now = this.audioContext.currentTime + startOffset;
        
        // Schedule minimal drum pattern
        for (let bar = 0; bar < 100; bar++) {
            const barStartTime = now + (bar * beatDuration * 4);
            
            // Very minimal kick - just on beat 1
            this.playKickDrum(barStartTime, outputNode);
            
            // Occasional very light hi-hat
            if (bar % 2 === 0) { // Only every other bar
                this.playHiHat(barStartTime + beatDuration * 2, outputNode, 0.1);
            }
            
            // Track scheduled time
            this.lastScheduledTime = Math.max(this.lastScheduledTime || 0, barStartTime + (beatDuration * 4));
        }
    }
    
    /**
     * Create a very gentle kick drum sound
     */
    playKickDrum(time, outputNode) {
        if (!this.audioContext) return;
        
        // Oscillator for the kick
        const osc = this.audioContext.createOscillator();
        osc.type = 'sine';
        
        // Gain node for envelope
        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = 0;
        
        // Connect
        osc.connect(gainNode);
        gainNode.connect(outputNode);
        
        // Gentle frequency sweep
        osc.frequency.setValueAtTime(80, time);
        osc.frequency.exponentialRampToValueAtTime(40, time + 0.1);
        
        // Very gentle envelope
        gainNode.gain.setValueAtTime(0, time);
        gainNode.gain.linearRampToValueAtTime(0.2, time + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.01, time + 0.3);
        
        // Schedule
        osc.start(time);
        osc.stop(time + 0.3);
        
        // Store for cleanup
        this.musicNodes.drumSounds.push(osc);
    }
    
    /**
     * Create a very light hi-hat sound
     */
    playHiHat(time, outputNode, velocity = 0.1) {
        if (!this.audioContext) return;
        
        // Simple high-frequency oscillator
        const osc = this.audioContext.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = 8000;
        
        // Simple highpass filter
        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 7000;
        
        // Gain node for envelope
        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = 0;
        
        // Connect
        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(outputNode);
        
        // Very gentle envelope
        gainNode.gain.setValueAtTime(0, time);
        gainNode.gain.linearRampToValueAtTime(velocity, time + 0.001);
        gainNode.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
        
        // Schedule
        osc.start(time);
        osc.stop(time + 0.05);
        
        // Store for cleanup
        this.musicNodes.drumSounds.push(osc);
    }
    
    /**
     * This method is eliminated since we're simplifying
     */
    playSnare(time, outputNode, velocity = 0.1) {
        // Not used in the simplified version
    }
}

// Export a singleton instance
export const audioManager = new AudioManager();
