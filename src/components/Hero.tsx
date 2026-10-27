import { FileText, BookOpen, Cpu, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 hero-scanlines bg-[#000000]">
      <div className="relative max-w-[1100px] mx-auto w-full z-10">
        
        {/* Blinking green pixel badge top-left */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#051405] border-2 border-[#16a34a] text-[#22c55e] text-xs mb-8 shadow-[3px_3px_0_0_#000000]">
          <span className="w-2.5 h-2.5 bg-[#22c55e] blink-green" />
          <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] tracking-wider">
            PLAYER_1: ACTIVE // UET ROBOTICS LAB
          </span>
        </div>

        {/* 2-Column Grid Layout: left text info, right 2 avatar images side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Info) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1
              style={{ fontFamily: "var(--font-press-start)" }}
              className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white leading-tight mb-4 drop-shadow-[4px_4px_0_#660000]"
            >
              {PERSONAL_INFO.name}
            </h1>

            {/* Glowing Red Tagline Bar Under Name */}
            <div
              style={{ fontFamily: "var(--font-press-start)" }}
              className="w-full bg-[#CC0000] text-white text-[10px] sm:text-[11px] font-bold px-3 py-2 uppercase tracking-wider mb-4 border border-[#FF3333] shadow-[0_0_12px_#FF0000]"
            >
              {PERSONAL_INFO.title}
            </div>

            <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl sm:text-2xl text-gray-300 mb-6">
              🏛️ {PERSONAL_INFO.affiliation}
            </p>

            {/* Mission Box */}
            <div className="pixel-card p-5 w-full mb-8">
              <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-[#FF0000] mb-2 uppercase flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" /> SYSTEM_MISSION.LOG
              </div>
              <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.15rem] text-[#CCCCCC] leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-red text-xs py-3 px-5"
              >
                <FileText className="w-4 h-4 mr-2" />
                DOWNLOAD CV
              </a>
              <a href="#vedc" className="pixel-btn-black text-xs py-3 px-4">
                <Cpu className="w-4 h-4 mr-2" />
                VEDC &amp; CARS
              </a>
              <a href="#publications" className="pixel-btn-black text-xs py-3 px-4">
                <BookOpen className="w-4 h-4 mr-2" />
                PUBLICATIONS
              </a>
            </div>
          </div>

          {/* Right Column (2 avatar images side by side: 220x220px each) */}
          <div className="lg:col-span-5 flex flex-row items-center justify-center sm:justify-start lg:justify-center gap-5 sm:gap-6">
            
            {/* Avatar 1: DangMinhDuc.png */}
            <div className="flex flex-col items-center">
              <div className="hero-avatar-card">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  loading="eager"
                />
              </div>
              <div
                style={{ fontFamily: "var(--font-press-start)" }}
                className="mt-3 px-2.5 py-1 bg-[#120304] border-2 border-[#CC0000] text-white text-[9px] uppercase shadow-[2px_2px_0_0_#000000]"
              >
                Dang Minh Duc
              </div>
            </div>

            {/* Avatar 2: prize.png */}
            <div className="flex flex-col items-center">
              <div className="hero-avatar-card">
                <img
                  src={PERSONAL_INFO.prizeImage}
                  alt="NCKH Award"
                  loading="eager"
                />
              </div>
              <div
                style={{ fontFamily: "var(--font-press-start)" }}
                className="mt-3 px-2.5 py-1 bg-[#120304] border-2 border-[#CC0000] text-white text-[9px] uppercase shadow-[2px_2px_0_0_#000000]"
              >
                NCKH Award
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
