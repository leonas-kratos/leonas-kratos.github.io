import { Briefcase, Trophy, Zap, CheckCircle2, Award as AwardIcon } from "lucide-react";
import { EXPERIENCES, ENGINEERING_PROJECTS, HONORS_AWARDS } from "@/data/portfolioData";

export default function ExperienceProjectsSection() {
  return (
    <>
      {/* 1. ENGINEERING PROJECTS & TINYML SHOWCASE */}
      <section id="engineering-projects" className="bg-[#0b0b0f]/60 border-t border-white/5">
        <div className="page-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <div className="reveal section-title !mb-1">
                Featured Engineering &amp; Edge AI Projects
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                Applied embedded systems, TinyML neural network quantization on MCUs, and autonomous mobile robotics.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase">
              {"// PRODUCTION FIRMWARE & HARDWARE"}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {ENGINEERING_PROJECTS.map((proj, idx) => (
              <div
                key={proj.id}
                className={`reveal reveal-delay-${idx + 1} img-card p-5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#1A0505] border border-[#CC0000]/60 text-[#FF4444] uppercase tracking-wider">
                      {proj.badge}
                    </span>
                    <Zap className="w-4 h-4 text-[#FF3333]" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-[#FF6666] font-medium mb-3">
                    {proj.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Benchmark & Engineering Metrics */}
                  {proj.metrics && proj.metrics.length > 0 && (
                    <div className="space-y-1.5 mb-4 p-3 rounded-lg bg-[#08080c] border border-white/5">
                      <div className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                        Key Performance Metrics:
                      </div>
                      {proj.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0 mt-0.5" />
                          <span className="leading-tight">{m}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#160707] border border-[#CC0000]/30 text-[#FF8888] font-mono"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROFESSIONAL EXPERIENCE TIMELINE */}
      <section id="experience" className="bg-transparent border-t border-white/5">
        <div className="page-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <div className="reveal section-title !mb-1">
                Professional Experience &amp; Research Appointments
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                Industry R&amp;D internship at Viettel High Tech, academic lab coordination, and national robotics engineering.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase">
              {"// CAREER MILESTONES"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                className={`reveal reveal-delay-${idx + 1} img-card p-5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#1A0505] border border-[#CC0000]/60 text-[#FF4444] uppercase tracking-wider">
                      {exp.badge}
                    </span>
                    <Briefcase className="w-4 h-4 text-[#FF3333]" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-0.5 leading-snug">
                    {exp.role}
                  </h3>

                  <div className="text-xs font-semibold text-[#FF4444] mb-1">
                    {exp.organization}
                  </div>

                  <div className="text-[11px] font-mono text-zinc-400 mb-3.5">
                    {exp.period} · {exp.location}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-[#b0b0ba] flex items-start gap-2 leading-relaxed">
                        <span className="text-[#CC0000] font-bold shrink-0 mt-0.5">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#160707] border border-[#CC0000]/30 text-zinc-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HONORS & ACADEMIC AWARDS */}
      <section id="awards" className="bg-[#0b0b0f]/60 border-t border-white/5">
        <div className="page-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <div className="reveal section-title !mb-1">
                Honors &amp; Research Awards
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                Recognitions for scientific research excellence, competition performance, and academic standing at VNU-UET.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase">
              {"// RECOGNITIONS"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HONORS_AWARDS.map((aw, idx) => (
              <div
                key={aw.id}
                className={`reveal reveal-delay-${(idx % 4) + 1} img-card p-5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1A0505] border border-[#CC0000]/50 flex items-center justify-center text-[#FF4444]">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-zinc-400 uppercase">
                      {aw.badge}
                    </span>
                  </div>

                  <div className="text-sm font-bold text-[#FF3333] mb-1">
                    {aw.rank}
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-white mb-2 leading-snug">
                    {aw.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mb-2">
                    {aw.organization}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                  <span>{aw.date}</span>
                  <AwardIcon className="w-3.5 h-3.5 text-[#CC0000]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
