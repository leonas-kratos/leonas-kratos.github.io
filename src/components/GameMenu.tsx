import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const MENU_CARDS = [
  {
    title: "VEDC",
    icon: "🏎️",
    href: "/vedc",
    subtitle: "Autonomous Electric Vehicle Design Competition",
    description: "Embedded control, lane tracking, and obstacle avoidance on STM32 microcontroller platform.",
    badge: "SECTOR 01",
  },
  {
    title: "RESEARCH",
    icon: "🔬",
    href: "/research",
    subtitle: "Student Scientific Research (NCKH)",
    description: "UWB-based indoor positioning with non-linear state estimation filters for GPS-denied environments.",
    badge: "SECTOR 02",
  },
  {
    title: "CONFERENCE",
    icon: "🏛️",
    href: "/conference",
    subtitle: "REV-ECIT 2025 National Conference",
    description: "Oral presentation on state estimation filters (EKF, UKF, PF) for UWB robotic indoor localization.",
    badge: "SECTOR 03",
  },
  {
    title: "LAB",
    icon: "👥",
    href: "/lab",
    subtitle: "Department Research Laboratory",
    description: "Department of Telecommunication Systems, FET VNU-UET academic research team & workspaces.",
    badge: "SECTOR 04",
  },
  {
    title: "PUBLICATIONS",
    icon: "📄",
    href: "/publications",
    subtitle: "5 Scientific Works & Full Monograph",
    description: "2 International Conferences (IEEE ATC, ICARIC), 1 National Journal (JEC), 1 Conference & Report.",
    badge: "SECTOR 05",
  },
];

export default function GameMenu() {
  return (
    <section id="missions" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1A0000] border border-[#CC0000]/40 text-[#FF4444] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            SECTOR NAVIGATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Research &amp; Engineering Sectors
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Explore dedicated sectors detailing UWB indoor positioning, state estimation algorithms, hardware development, and scientific papers.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_CARDS.map((card, idx) => (
            <Link
              key={card.title}
              href={card.href}
              className={`group bg-[#141414] border border-[#222222] hover:border-[#CC0000] rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(204,0,0,0.35)] hover:-translate-y-1 ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#220000] text-[#FF4444] border border-[#CC0000]/40 uppercase tracking-wider">
                    {card.badge}
                  </span>
                  <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#FF3333] transition-colors mb-1">
                  {card.title}
                </h3>

                <p className="text-xs text-[#FF4444]/90 font-medium mb-3">
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-[#FF3333] transition-colors">
                <span>EXPLORE SECTOR</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
