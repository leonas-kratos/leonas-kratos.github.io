import { Cpu, Terminal, Compass, Brain, Wrench } from "lucide-react";
import { TECHNICAL_SKILLS } from "@/data/portfolioData";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Languages & Scripting": <Terminal className="w-4 h-4 text-[#FF4444]" />,
  "Embedded & RTOS": <Cpu className="w-4 h-4 text-[#FF4444]" />,
  "Robotics & State Estimation": <Compass className="w-4 h-4 text-[#FF4444]" />,
  "AI & TinyML": <Brain className="w-4 h-4 text-[#FF4444]" />,
  "Hardware & EDA Tools": <Wrench className="w-4 h-4 text-[#FF4444]" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#0b0b0f]/60 border-t border-white/5">
      <div className="page-container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div className="reveal section-title !mb-1">
              Technical Skillset &amp; Tooling
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Cross-disciplinary engineering stack spanning embedded firmware, state estimation algorithms, edge AI quantization, and robotic hardware.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-500 uppercase">
            {"// HARDWARE · FIRMWARE · ALGORITHMS"}
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {TECHNICAL_SKILLS.map((cat, idx) => (
            <div
              key={cat.category}
              className={`reveal reveal-delay-${(idx % 3) + 1} img-card p-5 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1A0505] border border-[#CC0000]/50 flex items-center justify-center shrink-0">
                    {CATEGORY_ICONS[cat.category] || <Cpu className="w-4 h-4 text-[#FF4444]" />}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#160707] border border-[#CC0000]/30 text-zinc-200 hover:border-[#FF3333] hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
