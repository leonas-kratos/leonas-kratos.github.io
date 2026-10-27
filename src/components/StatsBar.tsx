"use client";

import { useEffect, useRef, useState } from "react";
import { STATS_DATA } from "@/data/portfolioData";

export default function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(STATS_DATA.map((s) => s.value));
  const [hasAnimated, setHasAnimated] = useState(false);

  const delayClasses = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          STATS_DATA.forEach((stat, index) => {
            const target = stat.value;
            const duration = 900;
            const steps = 20;
            const stepDuration = duration / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += target / steps;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.round(current);
                return next;
              });
            }, stepDuration);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={containerRef} className="!py-6 sm:!py-8 bg-[#0b0b0f]/90 border-b border-[#CC0000]/25">
      <div className="page-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS_DATA.map((item, index) => (
            <div
              key={item.label}
              className={`reveal ${delayClasses[index]} rounded-xl bg-gradient-to-br from-[#15151b] to-[#0d0d11] border border-white/10 hover:border-[#CC0000]/60 p-4 sm:p-5 flex flex-col items-center text-center transition-all shadow-md`}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FF3333] tracking-tight drop-shadow-[0_0_12px_rgba(204,0,0,0.35)]">
                {counts[index]}
                {item.suffix}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-zinc-300 mt-1.5 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
