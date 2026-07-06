"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Director() {
    return (
        <section className="bg-[#0A0A0A] text-[#E5E5E5] py-24 md:py-48 px-6 md:px-12 w-full border-t border-white/5 relative z-20">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-center">

                {/* Left Large Portrait / Feature Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden bg-white/5"
                >
                    <Image
                        src="/images/minimalist_hallway.png"
                        alt="Principal Architect / Brand Essence"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                </motion.div>

                {/* Right Biographical Copy */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold mb-8 block"
                    >
                        Meet the Principal
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-heading text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] text-white tracking-tighter mb-12"
                    >
                        A meticulous obsession with spatial poetry.
                    </motion.h2>

                    <div className="flex flex-col gap-6 text-[#E5E5E5]/60 text-base md:text-lg leading-relaxed font-sans max-w-xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Shashikant Aher leads TAG Studio with a relentless dedication to the purity of architecture. For over a decade, his work has bridged the vital gap between raw architectural volume and the intimate, tactile needs of daily living.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Every project is approached not as a simple decoration exercise, but as an opportunity to sculpt light, dictate movement, and evoke emotion through carefully curated materials like raw oak, brushed bronze, and monolithic stone.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-16 pt-8 border-t border-white/10"
                    >
                        <span className="font-heading text-3xl md:text-4xl text-white block">Shashikant Aher</span>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#E5E5E5]/40 font-bold mt-2 block">Founder & Lead Designer</span>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
