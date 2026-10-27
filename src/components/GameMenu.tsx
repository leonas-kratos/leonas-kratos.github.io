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
  const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4", "reveal-delay-1"];

  return (
    <section id="missions" className="reveal bg-[#0a0a0a]">
      <div className="page-container">
        {/* Section Header */}
        <div className="reveal section-title">
          Research &amp; Engineering Sectors
        </div>

        {/* Card Grid Layout */}
        <div className="card-grid">
          {MENU_CARDS.map((card, idx) => (
            <Link
              key={card.title}
              href={card.href}
              className={`reveal ${delays[idx]} img-card p-6 flex flex-col justify-between group ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#220000] text-[#FF4444] border border-[#CC0000]/40 uppercase tracking-wider">
                    {card.badge}
                  </span>
                  <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#FF3333] transition-colors mb-1">
                  {card.title}
                </h3>

                <p className="text-xs text-[#FF4444] font-medium mb-3">
                  {card.subtitle}
                </p>

                <p className="text-sm text-[#aaa] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

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
