"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, animate, useTransform } from "framer-motion";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const barWidth = useTransform(count, (v) => `${v}%`);

    useEffect(() => {
        // 0 React re-renders! Pure GPU driven animation via framer-motion values
        const controls = animate(count, 100, {
            duration: 3, // 3 seconds to load
            ease: [0.76, 0.2, 0.24, 1], // Custom cinematic easing
            onComplete: () => {
                setTimeout(() => setIsLoading(false), 500); // Hang at 100% for prestige
            }
        });

        return () => controls.stop();
    }, [count]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    // Ultra-premium clip-path curtain reveal
                    initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                    exit={{
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                        transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[99999] bg-[#0c0c0c] flex flex-col items-center justify-center text-[#E5E5E5]"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.05, opacity: 0, transition: { duration: 0.8 } }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center font-heading border border-white/5 p-16 md:p-32 rounded-[2rem] relative overflow-hidden backdrop-blur-md"
                    >
                        <div className="absolute inset-0 bg-white/[0.02] blur-3xl rounded-full" />

                        <div className="relative z-10 flex items-baseline">
                            <motion.div className="text-8xl md:text-[14rem] font-medium tracking-tighter leading-none">
                                {rounded}
                            </motion.div>
                            <span className="text-3xl md:text-6xl text-white/30 ml-2 md:ml-4 font-light">%</span>
                        </div>

                        <div className="w-full h-[1px] bg-white/10 mt-12 md:mt-16 relative overflow-hidden rounded-full">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                style={{ width: barWidth }}
                                layout
                            />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="absolute bottom-12 font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/40"
                    >
                        Experience by TAG Studio
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
