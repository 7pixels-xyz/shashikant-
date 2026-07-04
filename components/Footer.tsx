"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (textRef.current && footerRef.current) {
            gsap.fromTo(
                textRef.current,
                {
                    backgroundPosition: "50% 0%",
                    scale: 0.95
                },
                {
                    backgroundPosition: "50% 100%",
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: true,
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <footer ref={footerRef} className="bg-footer text-white pt-24 pb-8 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24 relative z-10 w-full">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-white/10 pb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-medium max-w-lg leading-tight">
                        Discover Timeless Interiors Crafted for Modern Living.
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        {/* Fake Avatars */}
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-footer overflow-hidden relative bg-white/20">
                                    <Image
                                        src={`/images/commercial_boutique.png}`}
                                        alt="User"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-footer transition-colors duration-300">
                            Start Your Design &gt;
                        </button>
                    </div>
                </div>

                {/* Middle Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-16">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading text-xl text-accent font-medium mb-2">Socials</h4>
                        <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                        <a href="#" className="hover:text-accent transition-colors">Facebook</a>
                        <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading text-xl text-accent font-medium mb-2">Quick Links</h4>
                        <a href="#" className="hover:text-accent transition-colors">Projects</a>
                        <a href="#" className="hover:text-accent transition-colors">About Studio</a>
                        <a href="#" className="hover:text-accent transition-colors">Contact</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading text-xl text-accent font-medium mb-2">Property Types</h4>
                        <a href="#" className="hover:text-accent transition-colors">2BHK Interiors</a>
                        <a href="#" className="hover:text-accent transition-colors">3BHK Premium</a>
                        <a href="#" className="hover:text-accent transition-colors">Commercial Shops</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading text-xl text-accent font-medium mb-2">Contact Info</h4>
                        <p className="text-white/80">+91 98765 43210</p>
                        <p className="text-white/80">consult@tagstudio.co.in</p>
                        <p className="text-white/80">Serving Pune & Nashik</p>
                    </div>
                </div>

            </div>

            {/* Massive Typographic Mask Anchor */}
            <div className="w-full flex justify-center items-end mt-12 mb-8 relative pointer-events-none px-6">
                <h1
                    ref={textRef}
                    className="font-heading text-[12vw] md:text-[14vw] font-bold tracking-tight text-center leading-[0.8] origin-bottom"
                    style={{
                        backgroundImage: "url('/images/zen_bedroom.png')",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    TAG STUDIO
                </h1>
            </div>

            <div className="w-full flex justify-center pb-4 text-white/50 text-sm">
                <p>© 2026 TAG Studio. All rights reserved.</p>
            </div>
        </footer>
    );
}
