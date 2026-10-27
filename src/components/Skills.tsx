import { Cpu, Radio, Eye, Layers, Terminal } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative border-t-4 border-[#ff2a4b] bg-[#0c0406]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div style={{ fontFamily: "var(--font-press-start)" }} className="text-xs text-[#ff2a4b] mb-3">
            [ SKILL TREE &amp; ATTRIBUTES ]
          </div>
          <h2 style={{ fontFamily: "var(--font-press-start)" }} className="text-2xl sm:text-3xl font-black text-white drop-shadow-[3px_3px_0_#881337]">
            TECHNICAL ABILITIES
          </h2>
          <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl sm:text-2xl text-gray-400 mt-2 max-w-xl mx-auto">
            Hệ thống kỹ năng từ phần cứng điều khiển nhúng thời gian thực đến giải thuật lọc phi tuyến &amp; ROS 2
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="pixel-box-subtle p-5 hover:border-[#ff2a4b] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 pb-3 mb-4 border-b-2 border-[#38080f]">
                  <div className="w-8 h-8 bg-[#ff2a4b] border border-white text-black font-bold flex items-center justify-center text-xs">
                    0{idx + 1}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-press-start)" }} className="text-[11px] font-bold text-white tracking-wide group-hover:text-[#ff4d6d]">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill List */}
                <ul className="space-y-2">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      style={{ fontFamily: "var(--font-vt323)" }}
                      className="text-lg text-gray-300 flex items-start gap-2 hover:text-white transition-colors"
                    >
                      <span className="text-[#ff2a4b] font-bold">&gt;</span>
                      <span>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pixel EXP bar */}
              <div className="mt-5 pt-3 border-t-2 border-[#38080f]">
                <div className="flex justify-between text-[8px] font-mono text-gray-400 mb-1">
                  <span>MASTERY</span>
                  <span className="text-[#ff4d6d]">MAX</span>
                </div>
                <div className="h-2 w-full bg-[#1e070b] border border-[#ff2a4b] p-[1px]">
                  <div className="h-full bg-gradient-to-r from-[#881337] to-[#ff2a4b] w-[92%]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
