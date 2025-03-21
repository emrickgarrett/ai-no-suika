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
    }

    /**
     * Initialize the audio context and set up event listeners
     */
    init() {
        // Create audio context on first user interaction to satisfy autoplay policy
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.error("Web Audio API not supported:", e);
        }

        // Load all sounds
        this.loadSounds();
        
        // Create UI controls
        this.createMusicControls();
        this.createVolumeControls();
        
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
     * Create UI controls for music
     */
    createMusicControls() {
        // Create container for music controls
        const musicControls = document.createElement('div');
        musicControls.style.position = 'absolute';
        musicControls.style.bottom = '10px';
        musicControls.style.right = '10px';
        musicControls.style.zIndex = '1000';
        
        // Create music toggle button
        const musicButton = document.createElement('button');
        musicButton.textContent = '🎵 Play Music';
        musicButton.style.padding = '8px 12px';
        musicButton.style.backgroundColor = '#2c3e50';
        musicButton.style.color = 'white';
        musicButton.style.border = 'none';
        musicButton.style.borderRadius = '4px';
        musicButton.style.cursor = 'pointer';
        musicButton.style.fontFamily = 'Arial, sans-serif';
        
        // Add click event
        musicButton.addEventListener('click', () => {
            if (this.musicPlaying) {
                this.stopBackgroundMusic();
                musicButton.textContent = '🎵 Play Music';
            } else {
                this.playBackgroundMusic();
                musicButton.textContent = '🔇 Stop Music';
            }
        });
        
        // Add button to the controls
        musicControls.appendChild(musicButton);
        document.body.appendChild(musicControls);
    }
    
    /**
     * Create volume control sliders
     */
    createVolumeControls() {
        // Create container for volume controls
        const volumeControls = document.createElement('div');
        volumeControls.style.position = 'absolute';
        volumeControls.style.bottom = '10px';
        volumeControls.style.left = '10px';
        volumeControls.style.zIndex = '1000';
        volumeControls.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        volumeControls.style.padding = '10px';
        volumeControls.style.borderRadius = '4px';
        volumeControls.style.fontFamily = 'Arial, sans-serif';
        volumeControls.style.color = 'white';
        volumeControls.style.display = 'flex';
        volumeControls.style.flexDirection = 'column';
        volumeControls.style.gap = '8px';
        
        // Volume control for sound effects
        const soundEffectsContainer = document.createElement('div');
        soundEffectsContainer.style.display = 'flex';
        soundEffectsContainer.style.alignItems = 'center';
        soundEffectsContainer.style.gap = '8px';
        
        const soundLabel = document.createElement('label');
        soundLabel.textContent = '🔊 Effects:';
        soundLabel.style.width = '80px';
        
        const soundSlider = document.createElement('input');
        soundSlider.type = 'range';
        soundSlider.min = '0';
        soundSlider.max = '100';
        soundSlider.value = Math.round(this.soundEffectsVolume * 100);
        soundSlider.style.width = '100px';
        
        soundSlider.addEventListener('input', (e) => {
            this.soundEffectsVolume = parseInt(e.target.value) / 100;
        });
        
        soundEffectsContainer.appendChild(soundLabel);
        soundEffectsContainer.appendChild(soundSlider);
        
        // Volume control for music
        const musicVolumeContainer = document.createElement('div');
        musicVolumeContainer.style.display = 'flex';
        musicVolumeContainer.style.alignItems = 'center';
        musicVolumeContainer.style.gap = '8px';
        
        const musicLabel = document.createElement('label');
        musicLabel.textContent = '🎵 Music:';
        musicLabel.style.width = '80px';
        
        const musicSlider = document.createElement('input');
        musicSlider.type = 'range';
        musicSlider.min = '0';
        musicSlider.max = '100';
        musicSlider.value = Math.round(this.musicVolume * 100);
        musicSlider.style.width = '100px';
        
        musicSlider.addEventListener('input', (e) => {
            this.musicVolume = parseInt(e.target.value) / 100;
            this.updateMusicVolume();
        });
        
        musicVolumeContainer.appendChild(musicLabel);
        musicVolumeContainer.appendChild(musicSlider);
        
        // Add controls to container
        volumeControls.appendChild(soundEffectsContainer);
        volumeControls.appendChild(musicVolumeContainer);
        
        // Add container to document
        document.body.appendChild(volumeControls);
    }
    
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
        
        // Update button text if it exists
        const musicButtons = document.querySelectorAll('button');
        musicButtons.forEach(button => {
            if (button.textContent.includes('Play Music')) {
                button.textContent = '🔇 Stop Music';
            }
        });
    }
    
    /**
     * Stop background music
     */
    stopBackgroundMusic() {
        if (!this.musicPlaying) return;
        
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
     * Create synthesized bass line (typical for synthwave)
     */
    createSynthwaveBass(outputNode) {
        const now = this.audioContext.currentTime;
        
        // Bass notes and timing (A minor pentatonic)
        const bassNotes = [220, 220, 175, 165, 147, 175]; // A, A, F, E, D, F
        const noteDuration = 0.5; // Half second per note
        const patternDuration = bassNotes.length * noteDuration;
        
        // Create oscillator for bass
        const bassOscillator = this.audioContext.createOscillator();
        bassOscillator.type = 'sawtooth';
        
        // Filter for that classic synth bass sound
        const bassFilter = this.audioContext.createBiquadFilter();
        bassFilter.type = 'lowpass';
        bassFilter.frequency.value = 500;
        bassFilter.Q.value = 5;
        
        // Create envelope
        const bassEnvelope = this.audioContext.createGain();
        
        // Connect components
        bassOscillator.connect(bassFilter);
        bassFilter.connect(bassEnvelope);
        bassEnvelope.connect(outputNode);
        
        // Schedule the bass line notes
        for (let i = 0; i < 100; i++) { // Schedule enough notes for several minutes
            for (let j = 0; j < bassNotes.length; j++) {
                const startTime = now + (i * patternDuration) + (j * noteDuration);
                bassOscillator.frequency.setValueAtTime(bassNotes[j], startTime);
                
                // Envelope shaping
                bassEnvelope.gain.setValueAtTime(0, startTime);
                bassEnvelope.gain.linearRampToValueAtTime(0.7, startTime + 0.05);
                bassEnvelope.gain.linearRampToValueAtTime(0.5, startTime + 0.1);
                bassEnvelope.gain.linearRampToValueAtTime(0.3, startTime + noteDuration * 0.7);
                bassEnvelope.gain.linearRampToValueAtTime(0, startTime + noteDuration * 0.9);
            }
        }
        
        // Start the oscillator
        bassOscillator.start();
        this.musicNodes.bassOscillators.push(bassOscillator);
    }
    
    /**
     * Create synthwave melody
     */
    createSynthwaveMelody(outputNode) {
        const now = this.audioContext.currentTime;
        
        // Melody notes (A minor pentatonic, higher octave)
        const melodyNotes = [440, 523, 587, 660, 880];
        const rhythmPattern = [2, 1, 0.5, 0.5, 1, 1]; // Note durations in beats
        
        // Create main melody synth
        this.scheduleMelodyPattern(melodyNotes, rhythmPattern, 120, outputNode, now);
    }
    
    /**
     * Schedule a melody pattern
     */
    scheduleMelodyPattern(notes, rhythm, tempo, outputNode, startTime) {
        const beatDuration = 60 / tempo;
        let currentTime = startTime;
        
        // Create repeating melody pattern
        for (let repeat = 0; repeat < 20; repeat++) {
            // Run through the rhythm pattern
            for (let i = 0; i < rhythm.length; i++) {
                // Only play some notes for variety
                if (Math.random() > 0.3) {
                    // Pick a random note from the scale
                    const note = notes[Math.floor(Math.random() * notes.length)];
                    this.playMelodyNote(note, currentTime, rhythm[i] * beatDuration, outputNode);
                }
                
                // Move time forward
                currentTime += rhythm[i] * beatDuration;
            }
        }
    }
    
    /**
     * Play a single melody note
     */
    playMelodyNote(frequency, startTime, duration, outputNode) {
        // Create oscillator for the note
        const oscillator = this.audioContext.createOscillator();
        oscillator.type = 'square';
        oscillator.frequency.value = frequency;
        
        // Create filter for tone shaping
        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 2000;
        filter.Q.value = 2;
        
        // Create envelope
        const envelope = this.audioContext.createGain();
        envelope.gain.setValueAtTime(0, startTime);
        envelope.gain.linearRampToValueAtTime(0.3, startTime + 0.05);
        envelope.gain.linearRampToValueAtTime(0.2, startTime + duration * 0.5);
        envelope.gain.linearRampToValueAtTime(0, startTime + duration);
        
        // Connect components
        oscillator.connect(filter);
        filter.connect(envelope);
        envelope.connect(outputNode);
        
        // Schedule playback
        oscillator.start(startTime);
        oscillator.stop(startTime + duration + 0.1);
        
        // Store for later cleanup
        this.musicNodes.melodySynths.push(oscillator);
    }
    
    /**
     * Create drum sounds for rhythm
     */
    createSynthwaveDrums(outputNode) {
        const tempo = 120; // beats per minute
        const beatDuration = 60 / tempo;
        const now = this.audioContext.currentTime;
        
        // Schedule drum pattern for several minutes
        for (let bar = 0; bar < 100; bar++) {
            const barStartTime = now + bar * beatDuration * 4;
            
            // Kick drum on beats 1 and 3
            this.playKickDrum(barStartTime, outputNode);
            this.playKickDrum(barStartTime + beatDuration * 2, outputNode);
            
            // Snare on beats 2 and 4
            this.playSnare(barStartTime + beatDuration, outputNode);
            this.playSnare(barStartTime + beatDuration * 3, outputNode);
            
            // Hi-hat on every 8th note
            for (let i = 0; i < 8; i++) {
                this.playHiHat(barStartTime + beatDuration * i / 2, outputNode);
            }
        }
    }
    
    /**
     * Create a kick drum sound
     */
    playKickDrum(time, outputNode) {
        // Create oscillator for the kick
        const kickOsc = this.audioContext.createOscillator();
        kickOsc.frequency.value = 150;
        
        // Create gain node for shaping
        const kickGain = this.audioContext.createGain();
        kickGain.gain.value = 0;
        
        // Connect
        kickOsc.connect(kickGain);
        kickGain.connect(outputNode);
        
        // Schedule frequency and amplitude envelopes
        kickOsc.frequency.setValueAtTime(150, time);
        kickOsc.frequency.exponentialRampToValueAtTime(40, time + 0.1);
        
        kickGain.gain.setValueAtTime(0, time);
        kickGain.gain.linearRampToValueAtTime(0.7, time + 0.01);
        kickGain.gain.linearRampToValueAtTime(0, time + 0.3);
        
        // Start and stop
        kickOsc.start(time);
        kickOsc.stop(time + 0.3);
        
        // Store for cleanup
        this.musicNodes.drumSounds.push(kickGain);
    }
    
    /**
     * Create a snare drum sound
     */
    playSnare(time, outputNode) {
        // Create noise for the snare body
        const bufferSize = this.audioContext.sampleRate * 0.2; // 200ms buffer
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Fill buffer with white noise
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        // Create noise source
        const snareNoise = this.audioContext.createBufferSource();
        snareNoise.buffer = buffer;
        
        // Create filter to shape the noise
        const snareFilter = this.audioContext.createBiquadFilter();
        snareFilter.type = 'highpass';
        snareFilter.frequency.value = 1000;
        
        // Create gain node for shaping
        const snareGain = this.audioContext.createGain();
        snareGain.gain.value = 0;
        
        // Connect
        snareNoise.connect(snareFilter);
        snareFilter.connect(snareGain);
        snareGain.connect(outputNode);
        
        // Schedule amplitude envelope
        snareGain.gain.setValueAtTime(0, time);
        snareGain.gain.linearRampToValueAtTime(0.4, time + 0.01);
        snareGain.gain.linearRampToValueAtTime(0, time + 0.2);
        
        // Start and stop
        snareNoise.start(time);
        snareNoise.stop(time + 0.2);
        
        // Store for cleanup
        this.musicNodes.drumSounds.push(snareGain);
    }
    
    /**
     * Create a hi-hat sound
     */
    playHiHat(time, outputNode) {
        // Create noise for the hi-hat
        const bufferSize = this.audioContext.sampleRate * 0.1; // 100ms buffer
        const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Fill buffer with white noise
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        // Create noise source
        const hatNoise = this.audioContext.createBufferSource();
        hatNoise.buffer = buffer;
        
        // Create filter to shape the noise
        const hatFilter = this.audioContext.createBiquadFilter();
        hatFilter.type = 'highpass';
        hatFilter.frequency.value = 7000;
        
        // Create gain node for shaping
        const hatGain = this.audioContext.createGain();
        hatGain.gain.value = 0;
        
        // Connect
        hatNoise.connect(hatFilter);
        hatFilter.connect(hatGain);
        hatGain.connect(outputNode);
        
        // Schedule amplitude envelope - very short for hi-hat
        hatGain.gain.setValueAtTime(0, time);
        hatGain.gain.linearRampToValueAtTime(0.2, time + 0.001);
        hatGain.gain.linearRampToValueAtTime(0, time + 0.05);
        
        // Start and stop
        hatNoise.start(time);
        hatNoise.stop(time + 0.05);
        
        // Store for cleanup
        this.musicNodes.drumSounds.push(hatGain);
    }
}

// Export a singleton instance
export const audioManager = new AudioManager();
