import { FileText, ChevronDown, ArrowRight } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterTagline from "@/components/TypewriterTagline";
import { UniversityIcon } from "@/components/CleanIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="reveal relative min-h-screen flex flex-col items-center justify-center text-center bg-[#0a0a0a] overflow-hidden"
    >
      <ParticleBackground />

      <div className="page-container relative z-10 flex flex-col items-center justify-center">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1A0505] border border-[#CC0000]/60 text-[#FF4444] text-xs mb-8 shadow-[0_0_15px_rgba(204,0,0,0.3)]">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="font-mono text-[11px] tracking-wider uppercase font-semibold">
            RESEARCH ACTIVE // FET · VNU-UET
          </span>
        </div>

        {/* Name */}
        <h1 className="text-white mb-4">
          {PERSONAL_INFO.name}
        </h1>

        {/* Typewriter Tagline (centered) */}
        <div className="mb-4 flex justify-center">
          <TypewriterTagline />
        </div>

        {/* Affiliation */}
        <p className="text-sm sm:text-base font-medium text-zinc-400 mb-6 max-w-2xl flex items-center justify-center gap-2">
          <UniversityIcon className="w-4 h-4 text-[#CC0000] shrink-0" />
          <span>{PERSONAL_INFO.affiliation}</span>
        </p>

        {/* Subtitle / Bio */}
        <p className="text-base sm:text-lg text-[#aaa] max-w-3xl leading-relaxed mb-8">
          {PERSONAL_INFO.bio}
        </p>

        {/* Two Avatar Cards Side by Side (220x220px each) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          {/* Card 1: DangMinhDuc.png */}
          <div className="flex flex-col items-center">
            <div className="hero-avatar-box">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                loading="eager"
              />
            </div>
            <div className="mt-2.5 px-3 py-1 bg-[#141414] border border-[#CC0000]/40 rounded text-white text-xs font-semibold">
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
            <div className="mt-2.5 px-3 py-1 bg-[#141414] border border-[#CC0000]/40 rounded text-white text-xs font-semibold">
              NCKH Research Award
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
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

      {/* Bouncing Scroll Down Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-zinc-500">
        <a href="#stats" className="flex flex-col items-center hover:text-[#FF3333] transition-colors">
          <span className="text-xs font-mono tracking-widest uppercase mb-1">SCROLL DOWN</span>
          <ChevronDown className="w-5 h-5 text-[#CC0000] bounce-arrow" />
        </a>
      </div>
    </section>
  );
}
