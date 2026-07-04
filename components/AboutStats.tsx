"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export function AboutStats() {
    const statsRef = useRef<HTMLDivElement>(null);
    const countersRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const counters = countersRef.current;

        counters.forEach((counter) => {
            if (!counter) return;
            const targetVal = parseInt(counter.getAttribute("data-target") || "0", 10);
            const prefix = counter.getAttribute("data-prefix") || "";
            const suffix = counter.getAttribute("data-suffix") || "";

            // Obj to animate
            const obj = { val: 0 };

            gsap.to(obj, {
                val: targetVal,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 80%",
                },
                onUpdate: () => {
                    if (counter) {
                        counter.innerText = prefix + Math.floor(obj.val) + suffix;
                    }
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section className="bg-primary text-txt-primary py-24 md:py-32 px-6 md:px-12 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Upper 2-Column */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                            About Us
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                            Timeless Interiors, Budget-Friendly Execution.
                        </h2>
                        <p className="text-txt-secondary text-base md:text-lg max-w-md pb-4 leading-relaxed">
                            At TAG Studio, we believe that premium aesthetics shouldn&apos;t be restricted by budget. We specialize in transforming spaces—from cozy 2BHKs to bustling commercial shops—into refined environments that speak volumes about who you are.
                        </p>
                        <div>
                            <button className="flex items-center gap-2 border-b border-txt-primary pb-1 font-medium hover:text-accent hover:border-accent transition-colors duration-300">
                                More About Us <span className="text-xl leading-none">&rarr;</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden group"
                    >
                        <Image
                            src="/images/hero_interior.png"
                            alt="Modern Aesthetic Kitchen"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                    </motion.div>
                </div>

                {/* Lower Stats Strip */}
                <div
                    ref={statsRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 border-t border-txt-primary/10"
                >
                    {[
                        { label: "Years of Interior Experience", target: 10, suffix: "+" },
                        { label: "Satisfied Valued Clients", target: 98, suffix: "%" },
                        { label: "Active Interior Projects", target: 50, suffix: "+" },
                        { label: "Happy Clients", target: 50, suffix: "K+" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col gap-2">
                            <div
                                ref={(el) => {
                                    countersRef.current[i] = el;
                                }}
                                data-target={stat.target}
                                data-suffix={stat.suffix}
                                className="font-heading text-5xl md:text-6xl text-txt-primary font-medium"
                            >
                                0{stat.suffix}
                            </div>
                            <span className="text-sm md:text-base text-txt-secondary uppercase tracking-wider font-semibold">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
