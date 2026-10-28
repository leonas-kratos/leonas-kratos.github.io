import { Trophy, Award as AwardIcon, Sparkles, School, Calendar, CheckCircle2, Medal } from "lucide-react";
import { HONORS_AWARDS, PERSONAL_INFO } from "@/data/portfolioData";

export default function ModernAwards() {
  return (
    <section id="awards" className="bg-[#06090f] border-b border-cyan-500/10">
      <div className="page-container">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="reveal section-title !mb-1">
              Honors, Competitions &amp; Academic Recognitions
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Recognitions for scientific research excellence, national electronic design competition standing, and academic scholarships at VNU-UET.
            </p>
          </div>
          <span className="text-xs font-mono text-amber-400 uppercase bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-full self-start sm:self-auto flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            ACADEMIC DISTINCTIONS
          </span>
        </div>

        {/* Featured Award Showcase with Certificate Image */}
        <div className="glass-card p-6 sm:p-8 border border-amber-500/35 mb-8 bg-gradient-to-br from-[#14120a]/60 via-[#0a0f1d] to-[#070b14]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left: Certificate Picture `prize.png` (Proportionally Scaled Square, Never Blurry/Oversized) */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-40 sm:w-48 aspect-square rounded-2xl overflow-hidden bg-[#060912] border-2 border-amber-400/40 shadow-[0_0_30px_rgba(245,158,11,0.2)] p-2.5 group">
                <img
                  src={PERSONAL_INFO.prizeImage}
                  alt="NCKH Second Prize Certificate - Dang Minh Duc"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right: Award Details */}
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                HIGHEST RESEARCH DISTINCTION // APRIL 2026
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Second Prize (Giải Nhì) — Student Scientific Research Competition
              </h3>

              <div className="text-xs sm:text-sm font-semibold text-cyan-400 flex items-center gap-2">
                <School className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Faculty of Electronics and Telecommunications (FET) · VNU-UET</span>
              </div>

              <div className="info-subbox text-xs sm:text-sm text-slate-300 leading-relaxed">
                Awarded in recognition of the research monograph: <strong className="text-white">“Hệ thống Robot Tự hành &amp; Định vị Trong nhà sử dụng UWB”</strong>, demonstrating state-of-the-art accuracy in multi-path NLOS environments through nonlinear state estimation and deterministic embedded control.
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="spec-pill">
                  <CheckCircle2 className="w-3 h-3 text-amber-400" /> Second Prize (Giải Nhì)
                </span>
                <span className="spec-pill">
                  <Calendar className="w-3 h-3 text-cyan-400" /> April 2026
                </span>
                <span className="spec-pill">
                  <Medal className="w-3 h-3 text-emerald-400" /> Monograph Evaluated
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Additional Honors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {HONORS_AWARDS.filter((a) => a.id !== "nckh-second-prize-2026").map((aw, idx) => (
            <div
              key={aw.id}
              className={`reveal reveal-delay-${idx + 1} glass-card p-5 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <AwardIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-slate-400 uppercase">
                    {aw.badge}
                  </span>
                </div>

                <div className="text-sm font-bold text-amber-400 mb-1">
                  {aw.rank}
                </div>

                <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 leading-snug">
                  {aw.title}
                </h4>

                <p className="text-xs text-slate-400 mb-3">
                  {aw.organization}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>{aw.date}</span>
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
