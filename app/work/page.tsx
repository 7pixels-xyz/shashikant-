"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SplitText } from "@/components/ui/SplitText";
import { X } from "lucide-react";
import { useLenis } from '@studio-freight/react-lenis';

type Project = {
    id: number;
    title: string;
    category: string;
    location: string;
    year: string;
    area: string;
    desc: string;
    img: string;
    aspect: string;
    gallery: string[];
};

const WORK_ITEMS: Project[] = [
    {
        id: 1,
        title: "Lumina Penthouse",
        category: "Residential",
        location: "Kalyani Nagar, Pune",
        year: "2024",
        area: "3,500 sqft",
        desc: "A sprawling ultra-luxury penthouse featuring curved walnut millwork, expansive glass panoramas, and bespoke Italian furnishings to create a warm, cinematic escape high above the city.",
        img: "/images/hero_interior.png",
        aspect: "aspect-[4/5]",
        gallery: [
            "/images/commercial_boutique.png",
            "/images/zen_bedroom.png"
        ]
    },
    {
        id: 2,
        title: "The Onyx Concept",
        category: "Commercial",
        location: "FC Road, Pune",
        year: "2023",
        area: "1,200 sqft",
        desc: "A striking, monochromatic commercial boutique. Built around sharp geometric lines, brutalist concrete textures, and dramatic spotlights targeting high-end apparel displays.",
        img: "/images/luxury_kitchen.png",
        aspect: "aspect-[16/9]",
        gallery: [
            "/images/spa_bathroom.png",
            "/images/minimalist_hallway.png"
        ]
    },
    {
        id: 3,
        title: "Baner Heights 3BHK",
        category: "Interior",
        location: "Baner, Pune",
        year: "2023",
        area: "1,850 sqft",
        desc: "Transforming a standard builder-grade 3BHK into a vast, airy residence utilizing hidden flush doors, sheer curtains, and a completely neutral beige palette.",
        img: "/images/hero_interior.png",
        aspect: "aspect-square",
        gallery: [
            "/images/commercial_boutique.png",
            "/images/zen_bedroom.png"
        ]
    },
    {
        id: 4,
        title: "Zen Garden Suburb",
        category: "Landscape",
        location: "Nashik",
        year: "2024",
        area: "4,000 sqft",
        desc: "Seamlessly blending exterior landscape with interior architecture. Features a massive central courtyard with a rain harvesting pond and Japanese maples.",
        img: "/images/luxury_kitchen.png",
        aspect: "aspect-[4/5]",
        gallery: [
            "/images/spa_bathroom.png",
            "/images/minimalist_hallway.png"
        ]
    },
    {
        id: 5,
        title: "Grand Shop Layout",
        category: "Commercial",
        location: "Camp, Pune",
        year: "2022",
        area: "800 sqft",
        desc: "Maximizing retail floor space while maintaining a premium uncrowded feel. Floating shelves and backlit onyx counters dominate the visual hierarchy.",
        img: "/images/hero_interior.png",
        aspect: "aspect-[16/9]",
        gallery: [
            "/images/commercial_boutique.png",
            "/images/zen_bedroom.png"
        ]
    },
    {
        id: 6,
        title: "Kothrud Minimalist",
        category: "Residential",
        location: "Kothrud, Pune",
        year: "2023",
        area: "1,100 sqft",
        desc: "Minimalism at its peak. Strict absence of clutter, relying purely on the interplay of natural light across textured plaster walls and raw oak flooring.",
        img: "/images/luxury_kitchen.png",
        aspect: "aspect-square",
        gallery: [
            "/images/spa_bathroom.png",
            "/images/minimalist_hallway.png"
        ]
    }
];

export default function WorkPage() {
    const [selected, setSelected] = useState<Project | null>(null);
    const lenis = useLenis();

    // Lock body scroll and Lenis virtual scroll when modal is open
    useEffect(() => {
        if (selected) {
            document.body.style.overflow = "hidden";
            if (lenis) lenis.stop();
        } else {
            document.body.style.overflow = "";
            if (lenis) lenis.start();
        }
        return () => {
            document.body.style.overflow = "";
            if (lenis) lenis.start();
        };
    }, [selected, lenis]);

    return (
        // Explicit background `#0A0A0A` ensuring the darkest cinematic contrast
        <main className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-12 select-none relative w-full overflow-hidden">
            <div className="max-w-[1600px] mx-auto w-full relative z-10">

                {/* Navigation Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mb-8 hidden md:block"
                >
                    <Link href="/" className="text-[#E5E5E5]/40 hover:text-[#E5E5E5] text-xs uppercase tracking-widest font-semibold transition-colors">
                        &larr; Back to Studio
                    </Link>
                </motion.div>

                {/* Global Header */}
                <header className="mb-24 flex flex-col items-start md:items-center text-left md:text-center">
                    <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl text-[#F5F5F5] font-medium tracking-tighter mb-6 uppercase leading-[0.9]">
                        <SplitText text="Selected" delay={0.2} />
                        <br className="hidden md:block" />
                        <SplitText text="Works" delay={0.4} />
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-[#E5E5E5]/70 font-sans text-sm md:text-base max-w-2xl lowercase tracking-widest leading-relaxed"
                    >
                        Curated architectural transformations across residential and commercial sectors.
                    </motion.p>
                </header>

                {/* Masonry Layout */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 md:gap-8 space-y-6 md:space-y-8">
                    {WORK_ITEMS.map((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: (Math.min(i, 3) * 0.1) }}
                            key={item.id}
                            className="break-inside-avoid"
                        >
                            <div
                                onClick={() => setSelected(item)}
                                className={`relative w-full ${item.aspect} rounded-2xl overflow-hidden bg-white/5 group cursor-pointer border border-white/5`}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    quality={90}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out will-change-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6 md:p-8">
                                    <h3 className="font-heading text-2xl md:text-3xl text-white font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">{item.title}</h3>
                                    <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">{item.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Interactive Project Overlay Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "15%" }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[999999] bg-[#0A0A0A] text-[#F5F5F5] overflow-y-auto w-full h-full"
                        data-lenis-prevent="true"
                    >
                        {/* Sticky Close Button */}
                        <button
                            onClick={() => setSelected(null)}
                            className="fixed top-6 right-6 md:top-10 md:right-10 z-[100] bg-white/10 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer mix-blend-difference hover:scale-95"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Modal Hero Header */}
                        <div className="relative w-full h-[60vh] md:h-[80vh] flex items-end p-6 md:p-16">
                            <Image
                                src={selected.img}
                                fill
                                className="object-cover absolute inset-0 z-0"
                                alt={selected.title}
                                sizes="100vw"
                                quality={100}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0A0A0A] z-10" />
                            <div className="relative z-20 w-full max-w-7xl mx-auto">
                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="font-heading text-5xl md:text-8xl text-white font-medium tracking-tighter leading-none mb-4"
                                >
                                    {selected.title}
                                </motion.h2>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="flex items-center gap-4 text-xs font-sans tracking-[0.2em] uppercase text-accent font-semibold"
                                >
                                    <span>{selected.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/30" />
                                    <span>{selected.year}</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Details Matrix */}
                        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10">

                            {/* Left Column Stats */}
                            <div className="md:col-span-4 flex flex-col gap-8">
                                <div>
                                    <h4 className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold mb-2">Location</h4>
                                    <p className="text-white text-lg font-medium">{selected.location}</p>
                                </div>
                                <div>
                                    <h4 className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold mb-2">Area</h4>
                                    <p className="text-white text-lg font-medium">{selected.area}</p>
                                </div>
                                <div>
                                    <h4 className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold mb-2">Scope</h4>
                                    <p className="text-white text-lg font-medium">Concept & Architecture</p>
                                </div>
                            </div>

                            {/* Right Column Brief */}
                            <div className="md:col-span-8 flex flex-col justify-start">
                                <h3 className="font-heading text-3xl md:text-5xl font-medium text-white leading-tight mb-8">
                                    A rigorous exploration of spatial purity and light.
                                </h3>
                                <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-3xl">
                                    {selected.desc}
                                </p>
                            </div>
                        </div>

                        {/* Deep Dive Gallery Images */}
                        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col gap-6 md:gap-12">
                            {selected.gallery.map((imgUrl, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden bg-white/5"
                                >
                                    <Image
                                        src={imgUrl}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 100vw"
                                        quality={90}
                                        className="object-cover"
                                        alt="Gallery detailed view"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Modal Footer Reachout */}
                        <div className="w-full bg-white/5 py-24 text-center px-6">
                            <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-6">Want to create something similar?</p>
                            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-block text-3xl md:text-6xl font-heading text-white hover:text-accent transition-colors duration-500">
                                Discuss Your Project &rarr;
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
