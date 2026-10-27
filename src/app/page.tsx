import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import GameMenu from "@/components/GameMenu";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#f3f4f6]">
      <Navbar />
      <main>
        {/* Hero Section: short bio & avatars */}
        <HomeHero />

        <div className="pixel-divider" />

        {/* 5 Navigation cards in grid (Level Select) */}
        <GameMenu />

        <div className="pixel-divider" />

        {/* Footer with contact info */}
        <ContactSection />
      </main>
    </div>
  );
}
