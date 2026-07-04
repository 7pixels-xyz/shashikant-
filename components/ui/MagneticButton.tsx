"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { playHoverSound } from "@/lib/useSound";

export function MagneticButton({
    children,
    className = ""
}: {
    children: React.ReactNode,
    className?: string
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(hover: none)").matches) {
            setIsTouch(true);
        }
    }, []);

    const handleMouseEnter = () => {
        if (isTouch) return;
        playHoverSound();
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current || isTouch) return;
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.35;
        const y = (clientY - (top + height / 2)) * 0.35;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
}
