"use client";

import { motion } from "framer-motion";

export function SplitText({
    text,
    delay = 0
}: {
    text: string;
    delay?: number;
}) {
    const words = text.split(" ");

    return (
        <span className="inline-block">
            {words.map((word, wIdx) => (
                <span key={wIdx} className="inline-block overflow-hidden mr-[0.25em] pb-1">
                    <motion.span
                        initial={{ y: "110%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: delay + (wIdx * 0.05),
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
