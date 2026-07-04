"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
    {
        id: "01",
        title: "Residential Living Spaces",
        desc: "From 2BHKs to luxury villas, we curate spaces that balance aesthetic appeal with daily functionality.",
        img: "/images/minimalist_hallway.png"
    },
    {
        id: "02",
        title: "Commercial & Shop Layouts",
        desc: "Optimized footprints for modern retail and office spaces that leave a lasting impression on your clients.",
        img: "/images/hero_interior.png"
    },
    {
        id: "03",
        title: "Budget-Friendly Executions",
        desc: "Precision space planning that ensures every penny is maximized without compromising on the final look.",
        img: "/images/commercial_boutique.png"
    }
];

export function Services() {
    const [activeHover, setActiveHover] = useState<number>(0);

    return (
        <section className="relative w-full bg-primary pt-24 md:pt-32 pb-24 px-6 md:px-12 flex justify-center overflow-hidden">
            <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">

                {/* Left Sticky Section */}
                <div className="w-full md:w-5/12 flex flex-col gap-8">
                    <div className="sticky top-24 md:top-32 flex flex-col gap-6">
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl text-txt-primary font-medium leading-[1.1]">
                            Curate, Design & Elevate with TAG Studio.
                        </h2>

                        {/* High-Fidelity Image Reveal replacing background wash */}
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mt-4 bg-white/5 border border-txt-primary/5">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeHover}
                                    initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                    exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={SERVICES[activeHover].img}
                                        alt={SERVICES[activeHover].title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={90}
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <Link href="/work" className="mt-6 self-start flex items-center justify-center border border-txt-primary text-txt-primary px-8 py-3.5 rounded-full font-medium hover:bg-txt-primary hover:text-white transition-colors duration-300">
                            See All Projects <span className="ml-2">-&gt;</span>
                        </Link>
                    </div>
                </div>

                {/* Right Scroll/Hover Reveal Accordion */}
                <div className="w-full md:w-7/12 flex flex-col relative min-h-[600px] justify-center gap-12 group">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            onMouseEnter={() => setActiveHover(index)}
                            className="group/item flex flex-col relative z-20 cursor-pointer border-b border-txt-primary/10 pb-8 last:border-b-0"
                        >
                            <div className="flex items-start gap-6 md:gap-12 transition-colors duration-300">
                                <span className={`font-heading text-2xl md:text-3xl ${activeHover === index ? "text-accent" : "text-txt-secondary/50 group-hover/item:text-txt-primary"}`}>
                                    {service.id}
                                </span>
                                <div className="flex flex-col gap-4 w-full">
                                    <h3 className={`font-heading text-3xl md:text-3xl lg:text-4xl font-medium transition-colors duration-300 ${activeHover === index ? "text-txt-primary" : "text-txt-secondary/50 group-hover/item:text-txt-primary"}`}>
                                        {service.title}
                                    </h3>

                                    {/* Text reveal on hover/active */}
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeHover === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                        <p className="text-txt-secondary text-base max-w-md pt-2">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
