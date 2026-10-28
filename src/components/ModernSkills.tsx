import { Terminal, Cpu, Compass, Brain, Wrench, CheckCircle } from "lucide-react";
import { TECHNICAL_SKILLS } from "@/data/portfolioData";

const CATEGORY_META: Record<
  string,
  { icon: React.ReactNode; accent: string; badge: string }
> = {
  "Languages & Scripting": {
    icon: <Terminal className="w-4 h-4 text-[#00f0ff]" />,
    accent: "border-cyan-500/30 text-cyan-300",
    badge: "CORE CODE",
  },
  "Embedded & RTOS": {
    icon: <Cpu className="w-4 h-4 text-[#3b82f6]" />,
    accent: "border-blue-500/30 text-blue-300",
    badge: "FIRMWARE & RTOS",
  },
  "Robotics & State Estimation": {
    icon: <Compass className="w-4 h-4 text-[#10b981]" />,
    accent: "border-emerald-500/30 text-emerald-300",
    badge: "AUTONOMOUS STACK",
  },
  "AI & TinyML": {
    icon: <Brain className="w-4 h-4 text-[#a855f7]" />,
    accent: "border-purple-500/30 text-purple-300",
    badge: "EDGE INTELLIGENCE",
  },
  "Hardware & EDA Tools": {
    icon: <Wrench className="w-4 h-4 text-[#f59e0b]" />,
    accent: "border-amber-500/30 text-amber-300",
    badge: "CAD & CIRCUITS",
  },
};

export default function ModernSkills() {
  return (
    <section id="skills" className="bg-[#070b14] border-b border-cyan-500/10">
      <div className="page-container">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="reveal section-title !mb-1">
              Technical Skillset &amp; Engineering Tooling
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Cross-disciplinary stack combining low-level embedded C/C++, state estimation mathematics, TinyML quantization, and ROS 2 robotics.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
            FULL HARDWARE-SOFTWARE INTEGRATION
          </span>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECHNICAL_SKILLS.map((cat, idx) => {
            const meta = CATEGORY_META[cat.category] || {
              icon: <Cpu className="w-4 h-4 text-cyan-400" />,
              accent: "border-cyan-500/30 text-cyan-300",
              badge: "ENGINEERING",
            };

            return (
              <div
                key={cat.category}
                className={`reveal reveal-delay-${(idx % 3) + 1} glass-card p-5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                        {meta.icon}
                      </div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {cat.category}
                      </h3>
                    </div>

                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-black/60 border border-white/10 text-slate-400 uppercase">
                      {meta.badge}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#0b1220] border border-slate-800 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
