import { FileText, ChevronDown, ArrowRight } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterTagline from "@/components/TypewriterTagline";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Animated Canvas Particle Field (80 particles, float upward, #CC0000 20% opacity) */}
      <ParticleBackground />

      <div className="relative max-w-[1100px] mx-auto w-full z-10 flex-1 flex flex-col justify-center">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#1A0505] border border-[#CC0000]/60 text-[#FF4444] text-xs mb-8 w-fit shadow-[0_0_15px_rgba(204,0,0,0.3)]">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="font-mono text-[11px] tracking-wider uppercase font-semibold">
            RESEARCH ACTIVE // FET · VNU-UET
          </span>
        </div>

        {/* 2-Column Grid: left text info, right 2 avatar cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Info) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.15] mb-4 tracking-tight">
              <span className="animated-underline">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Typewriter Tagline */}
            <div className="mb-4">
              <TypewriterTagline />
            </div>

            <p className="text-sm sm:text-base font-medium text-zinc-400 mb-5">
              🏛️ {PERSONAL_INFO.affiliation}
            </p>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-[#CCCCCC] leading-relaxed mb-8 border-l-2 border-[#CC0000] pl-4 py-1 bg-gradient-to-r from-[#1A0000]/40 to-transparent">
              {PERSONAL_INFO.bio}
            </p>

            {/* Skill highlights pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["UWB Indoor Positioning", "EKF / UKF / PF", "STM32 & FreeRTOS", "DWM1001 Modules", "ROS 2 Nav2"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#161616] border border-zinc-800 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-red"
              >
                <FileText className="w-4 h-4 mr-2" />
                DOWNLOAD CV
              </a>
              <a href="#missions" className="btn-secondary-outline">
                EXPLORE RESEARCH SECTORS
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Right Column (2 avatar cards side by side: 220x220px, glowing red) */}
          <div className="lg:col-span-5 flex flex-row items-center justify-center gap-5 sm:gap-6">
            
            {/* Card 1: DangMinhDuc.png */}
            <div className="flex flex-col items-center">
              <div className="hero-avatar-box">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  loading="eager"
                />
              </div>
              <div className="mt-3 px-3 py-1 bg-[#141414] border border-[#CC0000]/50 rounded text-white text-xs font-semibold shadow-md">
                Đặng Minh Đức
              </div>
            </div>

            {/* Card 2: prize.png */}
            <div className="flex flex-col items-center">
              <div className="hero-avatar-box">
                <img
                  src={PERSONAL_INFO.prizeImage}
                  alt="NCKH Research Award"
                  loading="eager"
                />
              </div>
              <div className="mt-3 px-3 py-1 bg-[#141414] border border-[#CC0000]/50 rounded text-white text-xs font-semibold shadow-md">
                NCKH Research Award
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bouncing Scroll Down Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-8 text-zinc-500">
        <a href="#stats" className="flex flex-col items-center hover:text-[#FF3333] transition-colors">
          <span className="text-xs font-mono tracking-widest uppercase mb-1">SCROLL DOWN</span>
          <ChevronDown className="w-5 h-5 text-[#CC0000] bounce-arrow" />
        </a>
      </div>
    </section>
  );
}
