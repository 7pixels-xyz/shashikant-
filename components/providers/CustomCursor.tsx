"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Disable on touch devices
        if (window.matchMedia("(hover: none)").matches) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = window.innerWidth / 2;
        let cursorY = window.innerHeight / 2;
        let isActive = false;
        let frameId: number;

        const onMouseMove = (e: MouseEvent) => {
            if (!isActive) {
                isActive = true;
                // Snap to position on first move to prevent it flying in from the center
                cursorX = e.clientX;
                cursorY = e.clientY;
            }
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const loop = () => {
            if (isActive && cursorRef.current) {
                // LERP (Linear Interpolation) math for buttery smooth dragging
                cursorX += (mouseX - cursorX) * 0.15;
                cursorY += (mouseY - cursorY) * 0.15;

                // Use native translate3d for direct GPU hardware acceleration
                cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
            }
            frameId = requestAnimationFrame(loop);
        };

        window.addEventListener("mousemove", onMouseMove);
        frameId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999999] will-change-transform -ml-1.5 -mt-1.5 invisible md:visible"
        />
    );
}
