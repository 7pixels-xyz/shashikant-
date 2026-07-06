"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
    return (
        <section className="relative w-full h-screen flex items-end justify-center overflow-hidden bg-primary">
            {/* Background Image with Parallax / Zoom intro */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    src="/images/luxury_kitchen.png"
                    alt="High-end Interior Living Space"
                    fill
                    priority
                    sizes="100vw"
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    className="object-cover"
                />
                {/* Ultra-dark cinematic gradient for absolute text legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/20 to-[#0A0A0A]" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 pb-24 flex flex-col items-start md:items-center text-left md:text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-accent text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold mb-6 flex items-center gap-4"
                >
                    <span className="w-8 h-[1px] bg-accent" />
                    Est. 2026 / Architecture & Spatial Design
                    <span className="w-8 h-[1px] bg-accent hidden md:block" />
                </motion.div>

                <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-white font-medium max-w-7xl leading-[0.9] tracking-tighter">
                    <SplitText text="Curating spaces" delay={0.2} />
                    <br className="hidden md:block" />
                    <SplitText text="that define you." delay={0.4} />
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 md:mt-12 text-[#E5E5E5]/60 text-sm md:text-base max-w-2xl font-sans tracking-wide leading-relaxed"
                >
                    Expert space planning for luxury residences and commercial boutiques across Pune & Nashik. Directed by Shashikant Aher.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center"
                >
                    <MagneticButton>
                        <Link href="/work" className="bg-white text-[#0A0A0A] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors duration-300 flex items-center justify-center gap-4 w-full sm:w-auto">
                            Explore Portfolio
                        </Link>
                    </MagneticButton>

                    <MagneticButton>
                        <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-colors duration-300 flex items-center justify-center gap-3 w-full sm:w-auto">
                            <MessageCircle className="w-4 h-4" />
                            Consultation
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
}
