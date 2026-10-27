import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import HomeHero from "@/components/HomeHero";
import StatsBar from "@/components/StatsBar";
import GameMenu from "@/components/GameMenu";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#aaa]">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgressBar />

      {/* Intersection Observer for reveal animations */}
      <ScrollObserver />

      {/* Glassmorphic Navbar */}
      <Navbar />

      <main>
        {/* Cinematic Centered Hero */}
        <HomeHero />

        {/* Stats Bar count-up with reveal delays */}
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
