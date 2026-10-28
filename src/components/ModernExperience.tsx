import { Briefcase, Zap, CheckCircle2, ChevronRight, Terminal } from "lucide-react";
import { EXPERIENCES, ENGINEERING_PROJECTS } from "@/data/portfolioData";

export default function ModernExperience() {
  return (
    <section id="experience" className="bg-[#070b14] border-b border-cyan-500/10">
      <div className="page-container">
        
        {/* Section 1: Professional Experience */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <div className="reveal section-title !mb-1">
                Professional Experience &amp; Research Appointments
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Industry R&amp;D internship at Viettel High Tech, academic research coordination at VNU-UET, and national competition engineering.
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
              CAREER &amp; RESEARCH TIMELINE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                className={`reveal reveal-delay-${idx + 1} glass-card p-6 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 uppercase tracking-wider">
                      {exp.badge}
                    </span>
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                    {exp.role}
                  </h3>

                  <div className="text-xs font-semibold text-cyan-400 mb-1">
                    {exp.organization}
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 mb-4">
                    {exp.period} · {exp.location}
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-800">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#091120] border border-cyan-500/20 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Applied TinyML & Edge AI Engineering Projects */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <div className="reveal section-title !mb-1">
                Applied TinyML &amp; Edge Embedded Systems
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Real-world quantized neural networks deployed on resource-constrained microcontrollers and autonomous cargo verification robots.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 uppercase bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
              PRODUCTION EMBEDDED AI
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ENGINEERING_PROJECTS.map((proj, idx) => (
              <div
                key={proj.id}
                className={`reveal reveal-delay-${idx + 1} glass-card p-6 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 uppercase tracking-wider">
                      {proj.badge}
                    </span>
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 leading-snug">
                    {proj.title}
                  </h3>

                  <div className="text-xs text-cyan-300 font-medium mb-3">
                    {proj.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Benchmark Metrics Callout */}
                  {proj.metrics && proj.metrics.length > 0 && (
                    <div className="space-y-1.5 mb-4 p-3 rounded-xl bg-[#060a12] border border-cyan-500/20">
                      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        Benchmarked Edge Metrics:
                      </div>
                      {proj.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-tight">{m}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-800">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#091120] border border-cyan-500/20 text-slate-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
