export function playHoverSound() {
    // Web Audio Context must only be initialized in the browser, ideally after a user interaction
    // If the browser blocks auto-play, it will silently fail which is perfectly fine for UI sounds
    if (typeof window === "undefined") return;

    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;

        const audioCtx = new AudioContext();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        // Create a very subtle, high-end crisp "tick" sound
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // High pitch tick
        oscillator.frequency.exponentialRampToValueAtTime(1400, audioCtx.currentTime + 0.05); // Rapid sweep up gives it a 'click' feel

        // Envelope to shape it shorter
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.01); // Quick attack (low volume: 0.05)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08); // Quick release

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    } catch {
        // Ignore audio context lock policies or errors silently
    }
}
