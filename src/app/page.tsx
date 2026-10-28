import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import HomeHero from "@/components/HomeHero";
import StatsBar from "@/components/StatsBar";
import SkillsSection from "@/components/SkillsSection";
import GameMenu from "@/components/GameMenu";
import ExperienceProjectsSection from "@/components/ExperienceProjectsSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";

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

        {/* Skills Matrix */}
        <SkillsSection />

        {/* Sector Navigation & Visual Gallery */}
        <GameMenu />

        {/* Engineering Projects, Industry Experience & Awards */}
        <ExperienceProjectsSection />

        {/* Contact & Footer */}
        <ContactSection />
      </main>

      {/* Back to top floating button */}
      <ScrollToTop />
    </div>
  );
}
