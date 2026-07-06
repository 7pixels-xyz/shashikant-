import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { AboutStats } from "@/components/AboutStats";
import { Director } from "@/components/Director";
import { Process } from "@/components/Process";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Services } from "@/components/Services";
import { Listings } from "@/components/Listings";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-primary">
      <Header />
      <Hero />
      <Manifesto />
      <AboutStats />
      <Director />
      <Process />
      <ProjectShowcase />
      <Services />
      <Listings />
      <Footer />
    </main>
  );
}
