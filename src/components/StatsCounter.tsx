import { BookOpen, Globe2, Award, Zap } from "lucide-react";

export default function StatsCounter() {
  const stats = [
    {
      value: "5",
      label: "Scientific Publications",
      sublabel: "IEEE ATC, ICARIC, JEC, REV, Report",
      icon: <BookOpen className="w-5 h-5 text-[#00f0ff]" />,
      color: "text-[#00f0ff]",
      border: "border-cyan-500/30",
    },
    {
      value: "2",
      label: "International Conferences",
      sublabel: "IEEE ATC 2026 & ICARIC 2026",
      icon: <Globe2 className="w-5 h-5 text-[#3b82f6]" />,
      color: "text-[#60a5fa]",
      border: "border-blue-500/30",
    },
    {
      value: "1",
      label: "NCKH Research Award",
      sublabel: "Second Prize (Giải Nhì NCKH FET)",
      icon: <Award className="w-5 h-5 text-[#10b981]" />,
      color: "text-[#34d399]",
      border: "border-emerald-500/30",
    },
    {
      value: "1",
      label: "VEDC Competition Award",
      sublabel: "National Semi-finalist 2025",
      icon: <Zap className="w-5 h-5 text-[#f59e0b]" />,
      color: "text-[#fbbf24]",
      border: "border-amber-500/30",
    },
  ];

  return (
    <section className="!py-8 bg-[#070b14] border-b border-cyan-500/10">
      <div className="page-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={`reveal reveal-delay-${idx + 1} glass-card p-4 sm:p-5 flex flex-col justify-between border ${s.border}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono ${s.color}`}>
                  {s.value}
                </span>
                <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight mb-1">
                  {s.label}
                </h3>
                <p className="text-[11px] font-mono text-slate-400 line-clamp-1">
                  {s.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
