"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/ui/Marquee";

const LISTINGS = [
    {
        id: 1,
        title: "Urban Nest 2BHK",
        location: "Kharadi, Pune",
        tag: "2BHK",
        img: "/images/spa_bathroom.png",
        span: "col-span-1 row-span-1",
        speed: 0.05
    },
    {
        id: 2,
        title: "The Grand Shop Layout",
        location: "Nashik Center",
        tag: "Commercial",
        img: "/images/minimalist_hallway.png",
        span: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
        speed: 0.1
    },
    {
        id: 3,
        title: "Minimalist Retreat",
        location: "Kothrud, Pune",
        tag: "3BHK",
        img: "/images/hero_interior.png",
        span: "col-span-1 row-span-1",
        speed: 0.15
    },
    {
        id: 4,
        title: "Suburban Villa",
        location: "Wakd, Pune",
        tag: "Villa",
        img: "/images/commercial_boutique.png",
        span: "col-span-1 row-span-1",
        speed: 0.02
    }
];

export function Listings() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="bg-primary pb-24 md:pb-32 px-6 md:px-12 flex flex-col items-center w-full overflow-hidden">

            <Marquee text="SPACE PLANNING • INTERIOR DESIGN • BESPOKE EXECUTION • " />

            <div className="max-w-7xl w-full flex flex-col gap-12 md:gap-16">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-0 border-t border-txt-primary/10 border-transparent">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-txt-primary font-medium max-w-2xl leading-tight">
                        Discover Newly Curated Interiors for Modern Living.
                    </h2>
                    <Link href="/work" className="bg-txt-primary text-white border border-txt-primary px-8 py-3.5 rounded-full font-medium hover:bg-transparent hover:text-txt-primary transition-colors duration-300 whitespace-nowrap cursor-pointer">
                        Explore More
                    </Link>
                </div>

                {/* Asymmetrical Grid with Parallax */}
                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto] gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
                    {LISTINGS.map((item) => {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const y = useTransform(scrollYProgress, [0, 1], [0, -1000 * item.speed]);

                        return (
                            <motion.div
                                key={item.id}
                                style={{ y }}
                                className={`relative flex flex-col group ${item.span}`}
                            >
                                <div className="relative w-full h-[calc(100%-4rem)] overflow-hidden rounded-2xl mb-4 bg-white/5">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        quality={90}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                                <div className="flex flex-col h-16 justify-center">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-heading text-xl md:text-2xl font-medium text-txt-primary">
                                            {item.title}
                                        </h4>
                                        <span className="text-xs uppercase tracking-wider font-semibold text-accent border border-accent/30 px-2 py-1 rounded-full">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <span className="text-txt-secondary text-sm font-medium">
                                        {item.location}
                                    </span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
