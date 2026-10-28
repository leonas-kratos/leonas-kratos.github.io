"use client";

import { useState } from "react";
import { Maximize2, X, Cpu, Layers, School, Sparkles, CheckCircle2 } from "lucide-react";
import { RESEARCH_GALLERY_ITEMS, GalleryItem } from "@/data/portfolioData";

export default function ProjectsGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const vehicleItems = RESEARCH_GALLERY_ITEMS.filter(
    (i) => i.id === "amr-car-v2" || i.id === "vedc-competition-car"
  );

  const fieldResearchItems = RESEARCH_GALLERY_ITEMS.filter(
    (i) =>
      i.id === "vedc-team" ||
      i.id === "nckh-presentation-defense" ||
      i.id === "nckh-research-team" ||
      i.id === "rev-2025-conference" ||
      i.id === "telecom-lab"
  );

  return (
    <section id="projects" className="bg-[#06090f] border-b border-cyan-500/10">
      <div className="page-container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <div className="reveal section-title !mb-1">
              Hardware Platforms, Field Research &amp; Lab
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Physical robotic testbeds, autonomous electric competition vehicles, conference oral defenses, and laboratory environments.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full uppercase flex items-center gap-1.5 self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            7 CURATED SECTORS · PROPORTIONAL SCALE
          </span>
        </div>

        {/* ==========================================================
            SUB-SECTION 1: PHYSICAL VEHICLES & HARDWARE TESTBEDS
            (Portrait/Vertical Car Images: 100% Contained, Zero Crop)
            ========================================================== */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              SECTION 01 // AUTONOMOUS ROBOTIC VEHICLES &amp; HARDWARE PLATFORMS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vehicleItems.map((item, idx) => (
              <div
                key={item.id}
                className={`reveal reveal-delay-${idx + 1} glass-card p-5 sm:p-6 flex flex-col justify-between group cursor-pointer`}
                onClick={() => setSelectedItem(item)}
              >
                <div>
                  {/* Top Bar with Badge & Expand Hint */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 uppercase tracking-wider flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-cyan-400" />
                      {item.badge}
                    </span>

                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                      <Maximize2 className="w-3 h-3" /> CLICK TO EXPAND
                    </span>
                  </div>

                  {/* Vehicle Product Frame (CONTAINED - NEVER CROPPED!) */}
                  <div className="vehicle-frame mb-4 group-hover:border-cyan-400/50 transition-colors">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-3">
                    <div className="text-[11px] font-mono font-semibold text-cyan-400">
                      {item.subtitle}
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                  </div>

                  {/* Description Box */}
                  <div className="info-subbox mb-4 text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </div>
                </div>

                {/* Structured Specs Grid Box with Icons */}
                <div className="p-3 rounded-xl bg-[#070d18] border border-cyan-500/20">
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-cyan-400" /> Key Technical Parameters:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {item.techSpecs.map((spec) => (
                      <span key={spec} className="spec-pill !text-[10px]">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================================
            SUB-SECTION 2: FIELD DEFENSES, TEAMS & RESEARCH LAB
            (Landscape Photos: 16:10 / 3:2 Proportional Frames)
            ========================================================== */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              SECTION 02 // FIELD DEFENSES, COMPETITIONS &amp; LABORATORY CREW
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fieldResearchItems.map((item, idx) => (
              <div
                key={item.id}
                className={`reveal reveal-delay-${(idx % 3) + 1} glass-card p-4 sm:p-5 flex flex-col justify-between group cursor-pointer`}
                onClick={() => setSelectedItem(item)}
              >
                <div>
                  {/* Top Bar with Badge & Expand Hint */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/40 text-blue-300 uppercase tracking-wider flex items-center gap-1">
                      <School className="w-3 h-3 text-blue-400" />
                      {item.badge}
                    </span>

                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Landscape Image Frame (16:10.5 Ratio - Clean Display) */}
                  <div className="landscape-frame mb-3.5 group-hover:border-cyan-400/40 transition-colors">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-0.5 mb-2.5">
                    <div className="text-[10px] font-mono font-semibold text-cyan-400">
                      {item.subtitle}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="pt-3 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {item.techSpecs.map((spec) => (
                      <span key={spec} className="spec-pill !text-[10px] !py-0.5">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal (Proportional Fullscreen View) */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#090f1d] border border-cyan-500/50 rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(0,240,255,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-800 bg-[#060a14]">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 uppercase tracking-wider">
                  {selectedItem.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {`// ${selectedItem.category}`}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[85vh] overflow-y-auto">
              
              {/* Full Image Box (CONTAINED - 100% UNTOUCHED ASPECT RATIO) */}
              <div className="relative w-full max-h-[460px] rounded-xl overflow-hidden bg-[#04070e] border border-slate-800 flex items-center justify-center p-2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[440px] w-auto max-w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {selectedItem.title}
                </h3>
                <div className="text-sm font-semibold text-cyan-400 mb-2.5">
                  {selectedItem.subtitle}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Hardware & Engineering Details */}
              <div className="p-4 rounded-xl bg-[#060a12] border border-cyan-500/20">
                <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Engineering &amp; System Specifications:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {selectedItem.techSpecs.map((spec) => (
                    <div
                      key={spec}
                      className="text-xs font-mono p-2 rounded-lg bg-[#0a1222] border border-slate-800 text-slate-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
