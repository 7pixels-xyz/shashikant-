"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1 }}
            className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 rounded-b-3xl md:rounded-none ${isScrolled ? "py-4 md:py-6 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5" : "py-6 md:py-10 bg-transparent"
                }`}
        >
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center relative">

                {/* Desktop Left Navigation */}
                <nav className="hidden md:flex items-center gap-12 w-1/3">
                    <MagneticButton>
                        <Link href="/work" className="text-white/60 hover:text-white text-[10px] font-bold tracking-[0.3em] uppercase transition-colors py-2 flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 bg-accent scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center" />
                            Projects
                        </Link>
                    </MagneticButton>
                    <MagneticButton>
                        <Link href="/" className="text-white/60 hover:text-white text-[10px] font-bold tracking-[0.3em] uppercase transition-colors py-2 flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 bg-accent scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center" />
                            Studio
                        </Link>
                    </MagneticButton>
                </nav>

                {/* Mobile Left Menu */}
                <div className="w-1/3 md:hidden flex justify-start">
                    <MagneticButton>
                        <button className="flex items-center gap-2 text-white hover:text-white/70 transition-colors">
                            <Menu className="w-5 h-5" />
                        </button>
                    </MagneticButton>
                </div>

                {/* Center Logo */}
                <div className="w-1/3 flex justify-center">
                    <MagneticButton>
                        <Link href="/" className="font-heading text-2xl md:text-3xl text-white font-medium tracking-widest text-center uppercase">
                            TAG Studio.
                        </Link>
                    </MagneticButton>
                </div>

                {/* Right CTA */}
                <div className="w-1/3 flex justify-end">
                    <MagneticButton>
                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden md:flex items-center text-[10px] font-bold px-8 py-3 bg-white text-[#0A0A0A] rounded-full hover:bg-accent hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]"
                        >
                            Discuss Project
                        </a>
                    </MagneticButton>

                    {/* Mobile simplified CTA */}
                    <MagneticButton className="md:hidden">
                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] font-semibold px-4 py-2 bg-white text-[#0A0A0A] rounded-full uppercase tracking-widest"
                        >
                            Chat
                        </a>
                    </MagneticButton>
                </div>
            </div>
        </motion.header>
    );
}
