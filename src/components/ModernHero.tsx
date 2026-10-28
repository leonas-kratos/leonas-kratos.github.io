"use client";

import { FileText, ArrowRight, Activity, Cpu, Layers } from "lucide-react";
import CyberGridCanvas from "@/components/CyberGridCanvas";
import { PERSONAL_INFO } from "@/data/portfolioData";

const CORE_RESEARCH_PILLS = [
  "UWB Indoor Positioning",
  "EKF · UKF · Particle Filter",
  "Neural-Aided Kalman Filter",
  "TinyML on Edge MCU",
  "ROS 2 & Nav2 Stack",
  "STM32 & FreeRTOS",
];

export default function ModernHero() {
  return (
    <section
      id="overview"
      className="relative pt-8 pb-14 sm:py-16 lg:py-20 bg-transparent overflow-hidden border-b border-cyan-500/10"
    >
      <CyberGridCanvas />

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Academic & Engineering Profile */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0b1626]/90 border border-cyan-500/40 text-cyan-400 text-xs mb-5 shadow-[0_0_20px_rgba(0,240,255,0.18)]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="font-mono text-[11px] tracking-wider uppercase font-semibold text-slate-200">
                RESEARCHER // VNU-UET · FET
              </span>
            </div>

            {/* Full Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2 leading-tight">
              {PERSONAL_INFO.name}
            </h1>

            {/* English & Research Title */}
            <div className="text-base sm:text-lg font-semibold text-cyan-400 mb-3 flex items-center justify-center lg:justify-start gap-2">
              <Activity className="w-4 h-4 text-[#00f0ff] animate-pulse shrink-0" />
              <span>{PERSONAL_INFO.title}</span>
            </div>

            {/* University & Department Affiliation */}
            <div className="text-xs sm:text-sm text-slate-300 font-medium mb-4 flex items-center justify-center lg:justify-start gap-2 bg-[#0e1726]/80 border border-cyan-500/20 px-3.5 py-2 rounded-lg max-w-xl">
              <span className="text-cyan-400 font-bold">🏛️</span>
              <span>{PERSONAL_INFO.affiliation}</span>
            </div>

            {/* Monograph / Research Summary */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl font-normal">
              Final-year researcher at <strong className="text-white">VNU-UET</strong> specializing in GPS-denied indoor localization using <strong className="text-cyan-300">Ultra-Wideband (UWB)</strong> and non-linear state estimation algorithms (<strong className="text-slate-100">EKF, UKF, Particle Filter, MCC-UKF</strong>) applied to Autonomous Mobile Robots (AMR) and edge TinyML intelligence.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-7">
              {CORE_RESEARCH_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#0a1424] border border-cyan-500/30 text-cyan-200 font-medium hover:border-cyan-400 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyan-primary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD CV / MONOGRAPH (PDF)</span>
              </a>

              <a
                href="#publications"
                className="btn-glass-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>EXPLORE 5 PUBLICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#pipeline"
                className="text-xs font-mono text-cyan-400 hover:text-white px-3 py-2 flex items-center gap-1.5 transition-colors"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>SYSTEM PIPELINE</span>
              </a>
            </div>

          </div>

          {/* Right Column: Single High-End Academic Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="hero-avatar-frame group relative">
              
              {/* Subtle Ambient Backing Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-xl opacity-60" />
              
              {/* Profile Photo: DangMinhDuc.png */}
              <img
                src={PERSONAL_INFO.avatar}
                alt="Đặng Minh Đức - VNU-UET Robotics & UWB Researcher"
                loading="eager"
                className="relative z-10 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Status Pill Overlay */}
              <div className="absolute bottom-3 inset-x-3 z-20 bg-[#070d18]/90 backdrop-blur-md border border-cyan-500/30 p-2.5 rounded-xl shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white leading-tight">
                    Đặng Minh Đức
                  </div>
                  <div className="text-[10px] font-mono text-cyan-300">
                    Dept. of Telecommunication Systems
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                  <Cpu className="w-4 h-4" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
