"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
    {
        id: 1,
        title: "The Private Sanctuary 3BHK",
        location: "Pune, Maharashtra",
        desc: "A stunning residential transformation focused on warm lighting and bespoke millwork, creating a true escape from the city.",
        budget: "Budget Friendly",
        img: "/images/zen_bedroom.png"
    },
    {
        id: 2,
        title: "Modern Minimalist Shop",
        location: "Nashik, Maharashtra",
        desc: "Commercial layout utilizing natural elements and high ceilings for a vast, open client experience.",
        budget: "Premium Exec",
        img: "/images/luxury_kitchen.png"
    },
    {
        id: 3,
        title: "Luxe 2BHK Apartment",
        location: "Baner, Pune",
        desc: "Compact luxury with smart space planning, giving this 2BHK the feel of an expansive villa.",
        budget: "Budget Friendly",
        img: "/images/spa_bathroom.png"
    }
];

export function ProjectShowcase() {
    const containerRef = useRef<HTMLElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!wrapperRef.current || !containerRef.current) return;
        const sections = gsap.utils.toArray(".horizontal-panel");

        const tl = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 0.5, // Faster catch-up inertia
                anticipatePin: 1,
                end: () => "+=" + ((wrapperRef.current?.offsetWidth || 2000) * 0.4), // Drastically shortens scroll distance
            }
        });

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    }, []);

    return (
        <section ref={containerRef} className="bg-black text-white overflow-hidden flex flex-col h-screen w-full relative z-20">
            <div className="flex h-screen w-[300vw] relative" ref={wrapperRef}>
                {PROJECTS.map((project, i) => (
                    <div key={project.id} className="horizontal-panel w-screen h-screen relative flex items-center justify-center p-6 md:p-24 overflow-hidden shrink-0">
                        {/* The Image inside constraints */}
                        <div className="relative w-full h-[85vh] md:h-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl z-10 group">
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 75vw"
                                quality={90}
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                className="object-cover group-hover:scale-[1.03] transition-transform duration-[2s] ease-out will-change-transform"
                            />
                            {/* Filter */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-[2s]" />

                            {/* Glass Frosted Overlay Info Frame */}
                            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-[85%] md:max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-heading text-2xl md:text-3xl font-medium">
                                        {project.title}
                                    </h3>
                                    <span className="text-[10px] md:text-xs bg-white text-txt-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap ml-4">
                                        {project.budget}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-white/70 text-sm font-medium tracking-wide">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    {project.location}
                                </div>
                                <p className="text-sm md:text-base text-white/80 leading-relaxed mt-2 hidden sm:block">
                                    {project.desc}
                                </p>
                                <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/50 pt-4 mt-2 border-t border-white/10 flex justify-between">
                                    <span>{i + 1} / {PROJECTS.length}</span>
                                    <span>Scroll to explore</span>
                                </div>
                            </div>
                        </div>

                        {/* Background duplicate blown out blur */}
                        <div className="absolute inset-0 w-full h-full z-0 opacity-40 blur-[100px] scale-110 pointer-events-none hidden md:block">
                            <Image
                                src={project.img}
                                alt={project.title + " ambient bg"}
                                fill
                                sizes="50vw"
                                quality={40}
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
