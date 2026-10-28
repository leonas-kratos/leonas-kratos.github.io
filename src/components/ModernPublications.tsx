"use client";

import { useState } from "react";
import { FileText, Copy, Check, ExternalLink, Quote, Sparkles, X, BookOpen, Star, Calendar } from "lucide-react";
import { PUBLICATIONS, Publication } from "@/data/portfolioData";

export default function ModernPublications() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeBibtexModal, setActiveBibtexModal] = useState<Publication | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const filterOptions = [
    { label: "All Works", count: PUBLICATIONS.length, value: "All" },
    {
      label: "Intl Conferences",
      count: PUBLICATIONS.filter((p) => p.type === "International Conference").length,
      value: "International Conference",
    },
    {
      label: "Journals",
      count: PUBLICATIONS.filter((p) => p.type === "National Journal").length,
      value: "National Journal",
    },
    {
      label: "National Conf",
      count: PUBLICATIONS.filter((p) => p.type === "National Conference").length,
      value: "National Conference",
    },
    {
      label: "Research Monograph",
      count: PUBLICATIONS.filter((p) => p.type === "Research Report").length,
      value: "Research Report",
    },
  ];

  const filteredPubs =
    activeFilter === "All"
      ? PUBLICATIONS
      : PUBLICATIONS.filter((p) => p.type === activeFilter);

  const handleCopyBibtex = () => {
    if (!activeBibtexModal) return;
    navigator.clipboard.writeText(activeBibtexModal.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const badgeTheme: Record<string, { bg: string; text: string; border: string }> = {
    "International Conference": {
      bg: "bg-blue-500/10",
      text: "text-blue-300",
      border: "border-blue-500/30",
    },
    "National Journal": {
      bg: "bg-cyan-500/10",
      text: "text-cyan-300",
      border: "border-cyan-500/30",
    },
    "National Conference": {
      bg: "bg-indigo-500/10",
      text: "text-indigo-300",
      border: "border-indigo-500/30",
    },
    "Research Report": {
      bg: "bg-emerald-500/10",
      text: "text-emerald-300",
      border: "border-emerald-500/30",
    },
  };

  return (
    <section id="publications" className="bg-[#070b14] border-b border-cyan-500/10">
      <div className="page-container">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="reveal section-title !mb-1">
              Peer-Reviewed Publications &amp; Scientific Works
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Research monographs and papers on UWB indoor positioning, nonlinear state estimation (EKF, UKF, PF, MCC-UKF), and autonomous mobile robotics.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full self-start sm:self-auto flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            5 SCIENTIFIC MONOGRAPHS
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filterOptions.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.label}
                type="button"
                onClick={() => setActiveFilter(f.value)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-cyan-500 text-[#06090f] font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "bg-[#0c1424] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-[#06090f]/30 text-[#06090f]" : "bg-white/10 text-slate-400"
                  }`}
                >
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Publications Cards Grid */}
        <div className="space-y-4">
          {filteredPubs.map((pub, idx) => {
            const theme = badgeTheme[pub.type] || {
              bg: "bg-cyan-500/10",
              text: "text-cyan-400",
              border: "border-cyan-500/30",
            };

            return (
              <div
                key={pub.id}
                className={`reveal reveal-delay-${(idx % 3) + 1} glass-card p-5 sm:p-6 transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
                  
                  {/* Left: Metadata & Titles */}
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${theme.bg} ${theme.text} ${theme.border} flex items-center gap-1`}>
                        <BookOpen className="w-3 h-3" />
                        {pub.type}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        {pub.year}
                      </span>
                      <span className="text-xs font-semibold text-cyan-300">
                        · {pub.venue}
                      </span>
                      {pub.authorRank && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3 text-emerald-400" />
                          {pub.authorRank}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {pub.title}
                    </h3>

                    <div className="text-xs text-slate-400">
                      <span className="text-slate-300 font-medium">Authors:</span>{" "}
                      {pub.authors.split(", ").map((author, aIdx) => {
                        const isDuc = author.toLowerCase().includes("dang minh duc") || author.toLowerCase().includes("đặng minh đức");
                        return (
                          <span key={aIdx}>
                            {aIdx > 0 && ", "}
                            <span className={isDuc ? "text-cyan-400 font-bold underline underline-offset-2" : ""}>
                              {author}
                            </span>
                          </span>
                        );
                      })}
                    </div>

                    {pub.abstract && (
                      <div className="info-subbox text-xs text-slate-300 leading-relaxed max-w-3xl">
                        {pub.abstract}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pub.tags.map((t) => (
                        <span key={t} className="spec-pill !text-[10px] !py-0.5">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-2.5 shrink-0 self-start lg:self-center mt-2 lg:mt-0">
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyan-primary !py-2 !px-3.5 !text-xs flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>READ PDF</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveBibtexModal(pub)}
                      className="btn-glass-secondary !py-2 !px-3 !text-xs flex items-center gap-1.5"
                      title="Cite with BibTeX"
                    >
                      <Quote className="w-3.5 h-3.5 text-cyan-400" />
                      <span>BIBTEX</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* BibTeX Modal Popup */}
      {activeBibtexModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#090f1d] border border-cyan-500/40 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,240,255,0.2)]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Quote className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">
                  BibTeX Citation // {activeBibtexModal.venue}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveBibtexModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Paper Title preview */}
            <div className="py-3">
              <div className="text-xs text-slate-300 font-medium mb-2 line-clamp-2">
                {activeBibtexModal.title}
              </div>

              {/* Code Box */}
              <div className="relative rounded-lg bg-[#05070d] border border-slate-800 p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
                <pre>{activeBibtexModal.bibtex}</pre>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <span className="text-[11px] font-mono text-slate-400">
                UTF-8 Standard BibTeX Reference
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyBibtex}
                  className="btn-cyan-primary !py-2 !px-4 !text-xs flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-950 font-bold" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY BIBTEX</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
