"use client";

import { useState } from "react";
import { Maximize2, X, Cpu, Sparkles } from "lucide-react";
import { RESEARCH_GALLERY_ITEMS, GalleryItem } from "@/data/portfolioData";

export default function ProjectsGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AMR Platform", "Competition", "Scientific Defense", "Laboratory"];

  const filteredItems =
    activeCategory === "All"
      ? RESEARCH_GALLERY_ITEMS.filter((i) => i.category !== "Honors") // honors shown in Awards section
      : RESEARCH_GALLERY_ITEMS.filter((i) => i.category === activeCategory);

  return (
    <section id="projects" className="bg-[#06090f] border-b border-cyan-500/10">
      <div className="page-container">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="reveal section-title !mb-1">
              Hardware Platforms, Defense &amp; Laboratory Gallery
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Curated hardware testbeds, autonomous competition vehicles, academic lab workspaces, and national conference defenses.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full uppercase flex items-center gap-1.5 self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            7 CURATED SECTORS · ZERO REPETITION
          </span>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-cyan-500 text-[#06090f] font-bold shadow-[0_0_15px_rgba(0,240,255,0.35)]"
                  : "bg-[#0b1220] text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className={`reveal reveal-delay-${(idx % 3) + 1} glass-card p-4 sm:p-5 flex flex-col justify-between group cursor-pointer`}
              onClick={() => setSelectedItem(item)}
            >
              <div>
                {/* Image Wrapper */}
                <div className="academic-img-wrapper mb-4 group-hover:border-cyan-400/40 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className={
                      item.imageFit === "contain"
                        ? "object-contain p-3"
                        : "object-cover object-center"
                    }
                  />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#060a14]/85 backdrop-blur-md text-cyan-300 border border-cyan-500/40 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Expand Lightbox Button */}
                  <div className="absolute bottom-2.5 right-2.5 z-10 w-7 h-7 rounded-lg bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono font-semibold text-cyan-400">
                    {item.subtitle}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Tech Specs Chips */}
              <div className="flex flex-wrap gap-1.5 pt-3.5 mt-4 border-t border-slate-800">
                {item.techSpecs.map((spec) => (
                  <span
                    key={spec}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#091120] border border-cyan-500/20 text-slate-300"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
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
            <div className="p-5 sm:p-6 space-y-5 max-h-[85vh] overflow-y-auto">
              
              {/* Full Image Box */}
              <div className="relative w-full max-h-[460px] rounded-xl overflow-hidden bg-[#05070d] border border-slate-800 flex items-center justify-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[460px] w-auto object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {selectedItem.title}
                </h3>
                <div className="text-sm font-semibold text-cyan-400 mb-3">
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
                  Engineering &amp; Hardware Specifications:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {selectedItem.techSpecs.map((spec) => (
                    <div
                      key={spec}
                      className="text-xs font-mono p-2 rounded bg-[#0a1222] border border-slate-800 text-slate-200"
                    >
                      {spec}
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
