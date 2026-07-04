import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/providers/CustomCursor";
import { GrainOverlay } from "@/components/providers/GrainOverlay";
import { Preloader } from "@/components/providers/Preloader";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TAG Studio | Interior & Space Planning",
  description: "Expert space planning for 2BHK, 3BHK, and commercial shops across Pune & Nashik. Premium aesthetics, budget-friendly execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans">
        <Preloader />
        <CustomCursor />
        <GrainOverlay />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
