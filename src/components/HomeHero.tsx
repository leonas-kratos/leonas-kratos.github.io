"use client";

import { useState, useEffect } from "react";
import { FileText, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterTagline from "@/components/TypewriterTagline";
import { UniversityIcon } from "@/components/CleanIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

const HERO_SLIDES = [
  {
    src: PERSONAL_INFO.avatar,
    title: "Đặng Minh Đức",
    subtitle: "UWB Indoor Positioning & State Estimation Researcher",
    badge: "01 // PROFILE",
    fit: "object-cover object-top",
  },
  {
    src: PERSONAL_INFO.prizeImage,
    title: "NCKH Research Award",
    subtitle: "Student Scientific Research Excellence · VNU-UET",
    badge: "02 // AWARD",
    fit: "object-contain p-3",
  },
];

const CORE_TECH_PILLS = [
  "UWB Indoor Positioning",
  "EKF · UKF · Particle Filter",
  "Neural-Aided KF",
  "AMR Platform",
  "STM32 & FreeRTOS",
  "ROS 2 & Nav2",
];

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="hero"
      className="relative !pt-6 !pb-10 sm:!py-12 lg:!py-16 bg-transparent overflow-hidden border-b border-white/5"
    >
      <ParticleBackground />

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Academic & Engineering Identity */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1A0505]/90 border border-[#CC0000]/60 text-[#FF4444] text-xs mb-4 shadow-[0_0_15px_rgba(204,0,0,0.25)]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="font-mono text-[11px] tracking-wider uppercase font-semibold">
                RESEARCH ACTIVE // FET · VNU-UET
              </span>
            </div>

            {/* Name */}
            <h1 className="text-white mb-2.5 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>

            {/* Typewriter Tagline */}
            <div className="mb-3 flex justify-center lg:justify-start w-full">
              <TypewriterTagline />
            </div>

            {/* Affiliation */}
            <div className="text-xs sm:text-sm font-medium text-zinc-300 mb-4 flex items-center justify-center lg:justify-start gap-2 bg-white/[0.03] border border-white/10 px-3.5 py-2 rounded-lg">
              <UniversityIcon className="w-4 h-4 text-[#FF3333] shrink-0" />
              <span>{PERSONAL_INFO.affiliation}</span>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-sm sm:text-base text-[#b4b4be] leading-relaxed mb-5 max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Core Research Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              {CORE_TECH_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#160707] border border-[#CC0000]/40 text-[#FF6666]"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-red w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 mr-2" />
                DOWNLOAD CV (PDF)
              </a>
              <a href="#missions" className="btn-secondary-outline w-full sm:w-auto">
                EXPLORE SECTORS
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Right Column (Top on Mobile): Single 5-Second Auto-Switching Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="hero-slideshow-frame group">
              
              {/* Top HUD Overlay */}
              <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-[#CC0000]/60 text-[10px] font-mono font-bold text-[#FF4444] tracking-wider uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#FF3333]" />
                  {HERO_SLIDES[activeSlide].badge}
                </span>
                <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-300">
                  {activeSlide + 1} / {HERO_SLIDES.length} · 5s
                </span>
              </div>

              {/* Slides Container */}
              {HERO_SLIDES.map((slide, index) => {
                const isActive = index === activeSlide;
                return (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 z-0 pointer-events-none"
                    }`}
                  >
                    {/* Ambient Blurred Background Layer so square/portrait images never have empty bars */}
                    <img
                      src={slide.src}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110"
                    />
                    {/* Crisp Main Image */}
                    <img
                      src={slide.src}
                      alt={slide.title}
                      loading="eager"
                      className={`relative z-10 w-full h-full ${slide.fit} transition-transform duration-700`}
                    />
                  </div>
                );
              })}

              {/* Prev / Next Manual Buttons (visible on hover or touch) */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous image"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/70 hover:bg-[#CC0000] border border-white/20 text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/70 hover:bg-[#CC0000] border border-white/20 text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Bottom Caption & Controls Overlay */}
              <div className="absolute bottom-0 inset-x-0 z-30 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-8 pb-3.5 px-4">
                <div className="flex items-end justify-between gap-2">
                  <div className="text-left">
                    <div className="text-sm font-bold text-white leading-tight">
                      {HERO_SLIDES[activeSlide].title}
                    </div>
                    <div className="text-[11px] text-zinc-300 line-clamp-1 mt-0.5">
                      {HERO_SLIDES[activeSlide].subtitle}
                    </div>
                  </div>

                  {/* Dot Indicators */}
                  <div className="flex items-center gap-1.5 shrink-0 pb-0.5">
                    {HERO_SLIDES.map((s, idx) => (
                      <button
                        key={s.src}
                        type="button"
                        onClick={() => setActiveSlide(idx)}
                        aria-label={`Show ${s.title}`}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          idx === activeSlide
                            ? "w-6 bg-[#FF3333] shadow-[0_0_8px_#FF3333]"
                            : "w-2 bg-zinc-600 hover:bg-zinc-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* 5-Second Animated Progress Bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2.5">
                  <div
                    key={activeSlide}
                    className="h-full bg-gradient-to-r from-[#CC0000] to-[#FF4444] animate-slide-progress"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
