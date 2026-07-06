"use client";

import { motion } from "framer-motion";

const STEPS = [
    {
        id: "01",
        title: "Spatial Mapping & Concept",
        desc: "Before a single material is chosen, we rigorously map the raw volume, studying natural light trajectories, existing structural constraints, and the emotional intent of the space."
    },
    {
        id: "02",
        title: "Materiality & Curation",
        desc: "We source authentic, tactile materials—from monolithic raw stone to brushed metals—ensuring absolute harmony between visual aesthetic and physical longevity."
    },
    {
        id: "03",
        title: "Architectural Execution",
        desc: "Precision layout planning. Our execution phase bridges the gap between 3D visualization and reality, locking down every millimeter of bespoke millwork and lighting geometry."
    },
    {
        id: "04",
        title: "The Handover",
        desc: "A meticulous final sweep. We deliver a meticulously crafted sanctuary that speaks, functions, and breathes perfectly in tune with your lifestyle."
    }
];

export function Process() {
    return (
        <section className="bg-[#0A0A0A] text-[#E5E5E5] py-24 md:py-48 px-6 md:px-12 w-full border-t border-white/5 relative z-20">
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 w-full">

                {/* Left Sticky Header */}
                <div className="w-full lg:w-1/3 flex flex-col">
                    <div className="sticky top-32 flex flex-col gap-6">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold">
                            Our Methodology
                        </span>
                        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-white tracking-tighter">
                            A rigorous sequence of creation.
                        </h2>
                        <p className="text-[#E5E5E5]/60 text-base md:text-lg leading-relaxed mt-4 max-w-sm">
                            We don&apos;t leave beauty to chance. Our process is a strict sequence of conceptual and physical optimizations designed to guarantee a flawless outcome.
                        </p>
                    </div>
                </div>

                {/* Right Scroll Feed */}
                <div className="w-full lg:w-2/3 flex flex-col gap-12 md:gap-24">
                    {STEPS.map((step) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col gap-4 border-l pl-8 md:pl-16 relative"
                        >
                            {/* Border gradient trick to fade out line */}
                            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-white/20 to-transparent" />

                            <span className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-white/10 font-medium leading-none absolute -left-4 -top-8 z-0">
                                {step.id}
                            </span>

                            <div className="relative z-10 pt-4">
                                <h3 className="font-heading text-3xl md:text-5xl font-medium text-white mb-6">
                                    {step.title}
                                </h3>
                                <p className="text-[#E5E5E5]/60 text-lg md:text-xl leading-relaxed max-w-2xl">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
