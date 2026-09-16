// Web Audio API ambient sound synthesizer for snake appearance
// Safe, quiet, gentle, and works with no external asset download dependencies.

let audioCtx: AudioContext | null = null;

export function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Plays a very subtle, ambient, high-tech soft hiss/whoosh sound for the snake.
 * Quiet, short, elegant — not loud, scary, or disruptive.
 */
export function playSubtleSnakeSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 0.9;

    // Create low-pass filtered noise buffer for soft organic hiss
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // Pink/soft noise distribution
      data[i] = (Math.random() * 2 - 1) * 0.25;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Filter to keep it soft and whisper-like
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(800, now + duration);
    filter.Q.setValueAtTime(2.5, now);

    // Subtle sub-bass tone for cyber depth
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + duration);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.001, now);
    oscGain.gain.linearRampToValueAtTime(0.04, now + 0.15);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Master gain for the noise
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.linearRampToValueAtTime(0.05, now + 0.2);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Connect graph
    noise.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + duration);
    osc.start(now);
    osc.stop(now + duration);
  } catch (err) {
    console.debug('Audio playback throttled by browser policy', err);
  }
}
