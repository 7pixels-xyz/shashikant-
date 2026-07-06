"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const phrase = "We don't just decorate rooms. We sculpt the silent spaces between walls. Light, form, and texture converge to create environments that speak. A true sanctuary is born not from addition, but from relentless subtraction—until only the essential remains.";

export function Manifesto() {
    return (
        <section className="bg-[#0A0A0A] text-[#E5E5E5] py-32 md:py-48 px-6 md:px-12 flex items-center justify-center relative z-20 w-full overflow-hidden">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-24 w-full">
                <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold text-center">
                    Our Philosophy
                </span>

                <div className="flex justify-center w-full">
                    <TextReveal body={phrase} />
                </div>
            </div>
        </section>
    );
}

function TextReveal({ body }: { body: string }) {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.85", "start 0.25"]
    });

    const words = body.split(" ");
    return (
        <div ref={container} className="flex flex-wrap justify-center gap-x-2 gap-y-1 md:gap-x-4 md:gap-y-2 lg:gap-x-5 lg:gap-y-4 max-w-5xl">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
            })}
        </div>
    );
}

function Word({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) {
    const opacity = useTransform(progress, range, [0.15, 1]);
    const y = useTransform(progress, range, [10, 0]);

    return (
        <span className="relative">
            <motion.span
                style={{ opacity, y }}
                className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white/90 inline-block will-change-transform"
            >
                {children}
            </motion.span>
        </span>
    );
}
