"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
    return (
        <section className="relative w-full h-screen flex items-end justify-center overflow-hidden bg-primary/20">
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
                {/* Dark overlay gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 pb-24 md:pb-32 flex flex-col items-center text-center">
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-medium max-w-5xl leading-[1.1]">
                    <SplitText text="Interior & Space Planning That Defines Your Lifestyle." delay={0.2} />
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 text-white/90 text-sm md:text-lg max-w-2xl font-sans tracking-wide"
                >
                    Expert space planning for 2BHK, 3BHK, and commercial shops across Pune & Nashik. Premium aesthetics, budget-friendly execution. Design by Shashikant Aher.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <MagneticButton>
                        <Link href="/work" className="bg-white text-txt-primary px-8 py-3.5 rounded-full font-medium hover:bg-accent hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto">
                            Explore Designs
                            <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
                        </Link>
                    </MagneticButton>

                    <MagneticButton>
                        <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="bg-transparent border border-white text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Consultation
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Floating Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 right-6 md:right-12"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/5"
                >
                    <ArrowDown className="w-5 h-5 text-white" />
                </motion.div>
            </motion.div>
        </section>
    );
}
