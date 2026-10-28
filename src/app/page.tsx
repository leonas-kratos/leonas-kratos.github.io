import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import ModernHero from "@/components/ModernHero";
import StatsCounter from "@/components/StatsCounter";
import UwbPipelineDemo from "@/components/UwbPipelineDemo";
import ModernPublications from "@/components/ModernPublications";
import ProjectsGallery from "@/components/ProjectsGallery";
import ModernExperience from "@/components/ModernExperience";
import ModernAwards from "@/components/ModernAwards";
import ModernSkills from "@/components/ModernSkills";
import ModernContact from "@/components/ModernContact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06090f] text-slate-300 antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* Precision Scroll Progress Bar at very top */}
      <ScrollProgressBar />

      {/* Intersection Observer for reveal animations */}
      <ScrollObserver />

      {/* Glassmorphic Cyber-Academic Navbar */}
      <Navbar />

      <main>
        {/* 1. Hero Section: Academic & Robotics Profile */}
        <ModernHero />

        {/* 2. Key Stats Counter */}
        <StatsCounter />

        {/* 3. Interactive Visual Architecture Pipeline (UWB -> EKF -> ROS2 -> AMR) */}
        <UwbPipelineDemo />

        {/* 4. Interactive Publications Section with BibTeX Modal */}
        <ModernPublications />

        {/* 5. Hardware Platforms, Defense & Lab Gallery (Zero Repetition with Lightbox) */}
        <ProjectsGallery />

        {/* 6. Professional Experience & Applied TinyML Edge AI */}
        <ModernExperience />

        {/* 7. Honors, Competitions & Award Certificate */}
        <ModernAwards />

        {/* 8. Technical Skills Matrix */}
        <ModernSkills />

        {/* 9. Contact & Curriculum Vitae Download */}
        <ModernContact />
      </main>

      {/* Back to top floating button */}
      <ScrollToTop />
    </div>
  );
}
