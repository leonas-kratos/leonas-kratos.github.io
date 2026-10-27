"use client";

import { useEffect, useRef, useState } from "react";
import { STATS_DATA } from "@/data/portfolioData";

export default function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          STATS_DATA.forEach((stat, index) => {
            const target = stat.value;
            const duration = 1200; // ms
            const steps = 30;
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
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#0D0D0D] border-t border-b border-[#CC0000]/40 py-10 px-4 sm:px-6"
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
        {STATS_DATA.map((item, index) => (
          <div key={item.label} className="pt-4 md:pt-0 px-3 flex flex-col items-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FF3333] tracking-tight drop-shadow-[0_0_12px_rgba(204,0,0,0.4)]">
              {counts[index]}
              {item.suffix}
            </div>
            <div className="text-xs sm:text-sm font-medium text-zinc-400 mt-2 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
