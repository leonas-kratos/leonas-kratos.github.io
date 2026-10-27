import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VEDCSection from "@/components/VEDCSection";
import ConferenceSection from "@/components/ConferenceSection";
import ResearchSection from "@/components/ResearchSection";
import LabSection from "@/components/LabSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#f3f4f6]">
      <Navbar />
      <main>
        <Hero />
        <div className="pixel-divider" />
        <VEDCSection />
        <div className="pixel-divider" />
        <ConferenceSection />
        <div className="pixel-divider" />
        <ResearchSection />
        <div className="pixel-divider" />
        <LabSection />
        <div className="pixel-divider" />
        <PublicationsSection />
        <div className="pixel-divider" />
        <ContactSection />
      </main>
    </div>
  );
}
