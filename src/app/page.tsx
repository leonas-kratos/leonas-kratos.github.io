import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080305] text-[#f3f4f6]">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Publications />
        <Activities />
        <Contact />
      </main>
    </div>
  );
}
