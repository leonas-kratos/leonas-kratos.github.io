import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import HomeHero from "@/components/HomeHero";
import StatsBar from "@/components/StatsBar";
import GameMenu from "@/components/GameMenu";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#CCCCCC]">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgressBar />

      {/* Glassmorphic Navbar */}
      <Navbar />

      <main>
        {/* Cinematic Hero */}
        <HomeHero />

        {/* Stats Bar count-up */}
        <div id="stats">
          <StatsBar />
        </div>

        {/* Sector Navigation Grid */}
        <GameMenu />

        {/* Contact & Footer */}
        <ContactSection />
      </main>
    </div>
  );
}
