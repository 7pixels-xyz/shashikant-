export function GrainOverlay() {
    return (
        <>
            <svg className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-[0.04]">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
            <svg className="hidden">
                <filter id="liquidDisplacement">
                    <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="B" />
                </filter>
            </svg>
        </>
    );
}
