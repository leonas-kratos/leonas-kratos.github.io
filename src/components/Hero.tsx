import Image from "next/image";
import { FileText, BookOpen, Cpu, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 pixel-bg-grid">
      <div className="relative max-w-5xl mx-auto w-full text-center z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#120304] border-2 border-[#CC0000] text-[#FF0000] text-xs mb-6 shadow-[3px_3px_0_0_#000000]">
          <span className="w-2.5 h-2.5 bg-[#FF0000] animate-ping" />
          <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px]">
            PLAYER_1: ACTIVE // UET ROBOTICS LAB
          </span>
        </div>

        {/* Full Name & Title */}
        <h1 style={{ fontFamily: "var(--font-press-start)" }} className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-3 drop-shadow-[4px_4px_0_#660000]">
          {PERSONAL_INFO.name}
        </h1>
        
        <p style={{ fontFamily: "var(--font-press-start)" }} className="text-xs sm:text-sm text-[#CC0000] mb-2 uppercase">
          [{PERSONAL_INFO.englishName}] • {PERSONAL_INFO.title}
        </p>

        <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          🏛️ {PERSONAL_INFO.affiliation}
        </p>

        {/* Bio Box */}
        <div className="pixel-card p-5 max-w-3xl mx-auto mb-10 text-left">
          <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-[#CC0000] mb-2 uppercase flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" /> SYSTEM_MISSION.LOG
          </div>
          <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-gray-200 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* 2 Equal Portrait Cards Side by Side (300x300px, 4px solid #CC0000, object-fit: cover, NO ROUNDING) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
          
          {/* Card 1: DangMinhDuc.png */}
          <div className="flex flex-col items-center">
            <div
              className="bg-black relative overflow-hidden shadow-[6px_6px_0_0_#000000]"
              style={{
                width: "300px",
                height: "300px",
                border: "4px solid #CC0000",
                borderRadius: "0px",
                position: "relative",
              }}
            >
              <Image
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                fill
                priority
                sizes="300px"
                className="object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Label below */}
            <div
              style={{ fontFamily: "var(--font-press-start)" }}
              className="mt-3 px-3 py-1.5 bg-[#120304] border-2 border-[#CC0000] text-white text-[10px] uppercase shadow-[3px_3px_0_0_#000000]"
            >
              Đặng Minh Đức
            </div>
          </div>

          {/* Card 2: prize.png */}
          <div className="flex flex-col items-center">
            <div
              className="bg-black relative overflow-hidden shadow-[6px_6px_0_0_#000000]"
              style={{
                width: "300px",
                height: "300px",
                border: "4px solid #CC0000",
                borderRadius: "0px",
                position: "relative",
              }}
            >
              <Image
                src={PERSONAL_INFO.prizeImage}
                alt="NCKH Award"
                fill
                priority
                sizes="300px"
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Label below */}
            <div
              style={{ fontFamily: "var(--font-press-start)" }}
              className="mt-3 px-3 py-1.5 bg-[#120304] border-2 border-[#CC0000] text-white text-[10px] uppercase shadow-[3px_3px_0_0_#000000]"
            >
              NCKH Award
            </div>
          </div>

        </div>

        {/* CTA Buttons - DOWNLOAD CV below both images */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn-red text-xs py-3 px-6"
          >
            <FileText className="w-4 h-4 mr-2" />
            DOWNLOAD CV
          </a>
          <a href="#vedc" className="pixel-btn-black text-xs py-3 px-5">
            <Cpu className="w-4 h-4 mr-2" />
            VEDC &amp; CARS
          </a>
          <a href="#publications" className="pixel-btn-black text-xs py-3 px-5">
            <BookOpen className="w-4 h-4 mr-2" />
            PUBLICATIONS
          </a>
        </div>

      </div>
    </section>
  );
}
