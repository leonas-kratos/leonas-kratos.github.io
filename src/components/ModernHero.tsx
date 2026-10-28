"use client";

import { FileText, ArrowRight, Activity, Cpu, Layers, School, CheckCircle2, Radio, Compass } from "lucide-react";
import CyberGridCanvas from "@/components/CyberGridCanvas";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ModernHero() {
  return (
    <section
      id="overview"
      className="relative pt-6 pb-12 sm:py-14 lg:py-16 bg-transparent overflow-hidden border-b border-cyan-500/10"
    >
      <CyberGridCanvas />

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Academic & Engineering Profile */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            {/* Top Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1626]/90 border border-cyan-500/40 text-cyan-300 text-xs mb-4 shadow-[0_0_16px_rgba(0,240,255,0.18)]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="font-mono text-[11px] tracking-wider uppercase font-semibold text-slate-200">
                RESEARCH ACTIVE // FET · VNU-UET
              </span>
            </div>

            {/* Full Name & Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight mb-2 leading-tight">
              {PERSONAL_INFO.name}
            </h1>

            <div className="text-sm sm:text-base font-semibold text-cyan-400 mb-4 flex items-center justify-center lg:justify-start gap-2">
              <Activity className="w-4 h-4 text-[#00f0ff] animate-pulse shrink-0" />
              <span>{PERSONAL_INFO.title}</span>
            </div>

            {/* University & Department Affiliation Box */}
            <div className="info-subbox w-full max-w-2xl mb-4 flex flex-col sm:flex-row items-center sm:items-start gap-3 text-left">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 mt-0.5">
                <School className="w-4 h-4" />
              </div>
              <div className="space-y-0.5 text-xs sm:text-sm">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span>{PERSONAL_INFO.university}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                </div>
                <div className="text-slate-300 text-xs font-medium">
                  {PERSONAL_INFO.department} · {PERSONAL_INFO.faculty}
                </div>
              </div>
            </div>

            {/* Structured Research Highlights Box */}
            <div className="info-subbox w-full max-w-2xl mb-5 text-left">
              <div className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-cyan-300" />
                Core Investigation &amp; Methodology:
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                Research focused on <strong className="text-white">GPS-denied indoor localization</strong> using <strong className="text-cyan-300">Ultra-Wideband (UWB)</strong> RF arrays, non-linear state estimation filters (<strong className="text-slate-100">EKF, UKF, Particle Filter, MCC-UKF</strong>) and TinyML edge AI deployed on Autonomous Mobile Robots (AMR).
              </p>
              
              {/* Micro-pills */}
              <div className="flex flex-wrap gap-1.5">
                <span className="spec-pill">
                  <Radio className="w-3 h-3 text-cyan-400" /> UWB DWM1001C
                </span>
                <span className="spec-pill">
                  <Compass className="w-3 h-3 text-blue-400" /> EKF · UKF · Particle Filter
                </span>
                <span className="spec-pill">
                  <Cpu className="w-3 h-3 text-purple-400" /> TinyML INT8 on STM32
                </span>
                <span className="spec-pill">
                  <Layers className="w-3 h-3 text-emerald-400" /> ROS 2 &amp; Nav2
                </span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyan-primary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD CV (PDF)</span>
              </a>

              <a
                href="#publications"
                className="btn-glass-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>5 PUBLICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#pipeline"
                className="text-xs font-mono text-cyan-400 hover:text-white px-2.5 py-1.5 flex items-center gap-1.5 transition-colors"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>VIEW PIPELINE</span>
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
                
                {/* Floating Micro-Badge on photo */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-cyan-300 border border-cyan-500/40 uppercase">
                    RESEARCHER
                  </span>
                </div>
              </div>

              {/* Bottom Card Info Sub-box */}
              <div className="p-3 bg-[#080d19] border-t border-slate-800 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">
                      Đặng Minh Đức
                    </div>
                    <div className="text-[10px] font-mono text-cyan-300 mt-0.5">
                      VNU-UET · Telecommunication Systems
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Cpu className="w-3.5 h-3.5" />
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
