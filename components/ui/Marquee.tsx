"use client";
import { motion } from "framer-motion";

export function Marquee({ text }: { text: string }) {
    return (
        <div className="flex w-full overflow-hidden whitespace-nowrap bg-transparent py-8 border-y border-txt-primary/10 mb-16 opacity-30 select-none pointer-events-none">
            <motion.div
                className="flex space-x-12 font-heading text-4xl md:text-6xl uppercase tracking-widest text-txt-primary whitespace-nowrap pr-12"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
            </motion.div>
        </div>
    );
}
