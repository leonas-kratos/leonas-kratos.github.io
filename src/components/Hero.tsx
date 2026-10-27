import Image from "next/image";
import { Award, ArrowRight, BookOpen, Flame, Cpu, Terminal, ShieldAlert } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Red-Black Dotted Pixel Matrix Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#38080f_2px,transparent_2px)] [background-size:24px_24px] opacity-70" />
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#e11d48]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#991b1b]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Intro */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Terminal Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a0508] border-2 border-[#ff2a4b] shadow-[3px_3px_0_0_#000000] text-[#ff4d6d] text-xs mb-6">
              <span className="w-2.5 h-2.5 bg-[#ff2a4b] animate-ping" />
              <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[10px]">
                PLAYER_1: ACTIVE // UET LAB
              </span>
            </div>

            {/* Name */}
            <h1 style={{ fontFamily: "var(--font-press-start)" }} className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 drop-shadow-[4px_4px_0_#881337]">
              {PERSONAL_INFO.name}
              <span className="block text-sm sm:text-lg text-[#ff2a4b] mt-3 font-normal">
                [{PERSONAL_INFO.englishName}]
              </span>
            </h1>

            {/* Title / Role */}
            <div style={{ fontFamily: "var(--font-vt323)" }} className="text-2xl sm:text-3xl text-gray-200 tracking-wider mb-2">
              ⚡ <span className="text-[#ff4d6d] font-bold">ROBOTICS &amp; AMR ENGINEER</span> • STATE ESTIMATION
            </div>

            <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-[#fda4af] mb-4">
              🏛️ {PERSONAL_INFO.affiliation}
            </p>

            {/* Pixel Dialogue Box for Bio */}
            <div className="pixel-box-subtle p-4 mb-8 text-left">
              <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-[#ff2a4b] mb-2 uppercase flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> MISSION_LOG.TXT
              </div>
              <p style={{ fontFamily: "var(--font-vt323)" }} className="text-lg sm:text-xl text-gray-300 leading-snug">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Retro Stats Bar */}
            <div className="grid grid-cols-3 gap-3 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="bg-[#170508] border-2 border-[#ff2a4b] p-3 text-center shadow-[3px_3px_0_0_#000000]">
                <div style={{ fontFamily: "var(--font-press-start)" }} className="text-base sm:text-lg text-[#ff4d6d] font-bold">04+</div>
                <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[8px] text-gray-400 mt-1 uppercase">PAPERS</div>
              </div>
              <div className="bg-[#170508] border-2 border-[#ff2a4b] p-3 text-center shadow-[3px_3px_0_0_#000000]">
                <div style={{ fontFamily: "var(--font-press-start)" }} className="text-base sm:text-lg text-[#ff4d6d] font-bold">VEDC</div>
                <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[8px] text-gray-400 mt-1 uppercase">AWARD</div>
              </div>
              <div className="bg-[#170508] border-2 border-[#ff2a4b] p-3 text-center shadow-[3px_3px_0_0_#000000]">
                <div style={{ fontFamily: "var(--font-press-start)" }} className="text-base sm:text-lg text-[#ff4d6d] font-bold">AMR_V2</div>
                <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[8px] text-gray-400 mt-1 uppercase">ROBOT</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#publications" className="pixel-btn">
                <BookOpen className="w-3.5 h-3.5 mr-2" />
                READ PAPERS
              </a>
              <a href="#activities" className="pixel-btn pixel-btn-dark">
                <Cpu className="w-3.5 h-3.5 mr-2" />
                VIEW ROBOTS
              </a>
            </div>
          </div>

          {/* Right: DangMinhDuc.png + prize.png showcase in pixel frame */}
          <div className="flex flex-col items-center">
            <div className="relative">
              
              {/* Main Avatar Frame */}
              <div className="pixel-box p-2 relative bg-[#1c080c]">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden bg-black border-2 border-[#881337]">
                  <Image
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Level indicator */}
                <div style={{ fontFamily: "var(--font-press-start)" }} className="bg-[#ff2a4b] text-black text-[9px] font-bold py-1 px-2 text-center mt-2 border border-black shadow-[2px_2px_0_0_#000000]">
                  HP: 9999/9999 • MP: MAX
                </div>
              </div>

              {/* Prize Badge in Pixel Frame (Floating bottom-right) */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#170508] border-3 border-amber-500 shadow-[4px_4px_0_0_#000000] p-2 flex items-center gap-3 z-20">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 border-2 border-amber-400 bg-black shrink-0 overflow-hidden">
                  <Image
                    src={PERSONAL_INFO.prizeBadge}
                    alt="Prize / Award"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="pr-2">
                  <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-amber-400 font-bold flex items-center gap-1 uppercase">
                    🏆 TOP PRIZE
                  </div>
                  <div style={{ fontFamily: "var(--font-vt323)" }} className="text-base text-gray-200">
                    VEDC &amp; NCKH EXCELLENCE
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
