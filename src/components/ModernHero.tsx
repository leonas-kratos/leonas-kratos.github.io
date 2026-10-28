"use client";

import { FileText, ArrowRight, Radio, Compass, Cpu, School, Sparkles, CheckCircle2 } from "lucide-react";
import CyberGridCanvas from "@/components/CyberGridCanvas";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ModernHero() {
  return (
    <section
      id="overview"
      className="relative min-h-[84vh] flex items-center justify-center py-12 sm:py-16 lg:py-20 bg-transparent overflow-hidden border-b border-cyan-500/10"
    >
      {/* Background Interactive Mesh Canvas */}
      <CyberGridCanvas />

      <div className="page-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Academic & Engineering Profile */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 space-y-6">
            
            {/* Top Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#081224]/90 border border-cyan-500/40 text-cyan-300 text-xs shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="font-mono text-[11px] tracking-wider uppercase font-semibold text-slate-200">
                RESEARCH ACTIVE // DEPT. OF TELECOMMUNICATION SYSTEMS · VNU-UET
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-3">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-base sm:text-xl font-medium text-cyan-400 font-mono tracking-wide">
                Dang Minh Duc <span className="text-slate-500">·</span> Leonas Kratos
              </div>
            </div>

            {/* Clean Thesis Statement (Airy, Generous Line-Height, NOT Crowded!) */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Final-year researcher at <strong className="text-white font-semibold">VNU-UET</strong> specializing in <span className="text-cyan-300 font-medium">GPS-denied indoor robot localization</span> using Ultra-Wideband (UWB) technology, non-linear state estimation filters (<span className="text-slate-100 font-medium">EKF, UKF, Particle Filter, MCC-UKF</span>), and edge TinyML intelligence.
            </p>

            {/* University Affiliation Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#091122]/80 border border-cyan-500/20 text-xs sm:text-sm text-slate-300">
              <School className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{PERSONAL_INFO.affiliation}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            </div>

            {/* 3 Core Research Pillar Cards (Spacious, Clear, Highly Readable) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-2xl pt-1">
              
              <div className="p-3.5 rounded-xl bg-[#081220]/80 border border-cyan-500/25 text-left">
                <div className="flex items-center gap-2 mb-1 text-cyan-400 font-mono text-xs font-bold uppercase">
                  <Radio className="w-3.5 h-3.5" /> UWB Positioning
                </div>
                <p className="text-[11px] text-slate-300 leading-normal">
                  Decawave DWM1001C ToF ranging, CIR profiling &amp; NLOS mitigation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#081220]/80 border border-blue-500/25 text-left">
                <div className="flex items-center gap-2 mb-1 text-blue-400 font-mono text-xs font-bold uppercase">
                  <Compass className="w-3.5 h-3.5" /> State Estimation
                </div>
                <p className="text-[11px] text-slate-300 leading-normal">
                  EKF, UKF, Particle Filter, MCC-UKF &amp; Neural-aided Kalman filters.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#081220]/80 border border-purple-500/25 text-left">
                <div className="flex items-center gap-2 mb-1 text-purple-400 font-mono text-xs font-bold uppercase">
                  <Cpu className="w-3.5 h-3.5" /> AMR &amp; Edge AI
                </div>
                <p className="text-[11px] text-slate-300 leading-normal">
                  ROS 2 Nav2, STM32 FreeRTOS motor control, TinyML INT8 on MCU.
                </p>
              </div>

            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyan-primary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD MONOGRAPH / CV (PDF)</span>
              </a>

              <a
                href="#publications"
                className="btn-glass-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>5 SCIENTIFIC PUBLICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#pipeline"
                className="text-xs font-mono text-cyan-400 hover:text-white px-3 py-2 flex items-center gap-1.5 transition-colors"
              >
                <span>SYSTEM PIPELINE ↓</span>
              </a>
            </div>

          </div>

          {/* Right Column: Refined Editorial Profile Card (Clean Size, Never Oversized) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="hero-avatar-card group">
              
              {/* Image Box */}
              <div className="img-box">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt="Đặng Minh Đức - VNU-UET Researcher"
                  loading="eager"
                />
                
                {/* Floating Badge on Photo */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-cyan-300 border border-cyan-500/40 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    RESEARCHER
                  </span>
                </div>
              </div>

              {/* Bottom Card Info Sub-box */}
              <div className="p-4 bg-[#080d19] border-t border-slate-800 text-left space-y-1">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-white leading-tight">
                    Đặng Minh Đức
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                </div>
                <div className="text-[11px] font-mono text-cyan-300">
                  Dept. of Telecommunication Systems · VNU-UET
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  UWB Indoor Positioning &amp; AMR Systems
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
