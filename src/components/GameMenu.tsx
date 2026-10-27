import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const MENU_CARDS = [
  {
    title: "VEDC",
    icon: "🏎️",
    href: "/vedc",
    description: "Autonomous electric vehicle competition car, engineering teammates & current AMR V2 research.",
    badge: "STAGE 01",
  },
  {
    title: "RESEARCH",
    icon: "🔬",
    href: "/research",
    description: "Student scientific research defense presentation & NCKH collaborative research team members.",
    badge: "STAGE 02",
  },
  {
    title: "CONFERENCE",
    icon: "🏛️",
    href: "/conference",
    description: "REV-ECIT 2025 national scientific conference oral presentation on nonlinear state estimation filters.",
    badge: "STAGE 03",
  },
  {
    title: "LAB",
    icon: "👥",
    href: "/lab",
    description: "Faculty of Electronics and Telecommunications research laboratory members & team workspaces.",
    badge: "STAGE 04",
  },
  {
    title: "PUBLICATIONS",
    icon: "📄",
    href: "/publications",
    description: "5 peer-reviewed scientific works: 2 International Conferences, 1 National Journal, 1 Conference & Report.",
    badge: "STAGE 05",
  },
];

export default function GameMenu() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#080808]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Menu Header */}
        <div className="mb-10 text-center">
          <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[1.1rem] sm:text-[1.3rem] text-[#FF0000] tracking-[2px] mb-2 uppercase">
            [ SELECT MISSION // LEVEL SELECT ]
          </div>
          <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.25rem] text-[#CCCCCC]">
            Choose a sector to inspect robotics engineering prototypes, scientific defenses, and publications
          </p>
        </div>

        {/* 5 Cards Grid: like game level select */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_CARDS.map((card, idx) => (
            <Link
              key={card.title}
              href={card.href}
              className={`pixel-card p-6 flex flex-col justify-between group hover:scale-[1.02] cursor-pointer ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Header: Stage badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="text-[8px] px-2 py-0.5 bg-[#CC0000] text-black font-black uppercase"
                  >
                    {card.badge}
                  </span>
                  <span className="text-2xl">{card.icon}</span>
                </div>

                {/* Title */}
                <h3
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-[0.95rem] font-bold text-white group-hover:text-[#FF3333] mb-3 flex items-center gap-2"
                >
                  <span>{card.title}</span>
                </h3>

                {/* 1-line description */}
                <p
                  style={{ fontFamily: "var(--font-vt323)" }}
                  className="text-[1.15rem] text-[#CCCCCC] leading-snug mb-6"
                >
                  {card.description}
                </p>
              </div>

              {/* ENTER > Button */}
              <div className="pt-3 border-t-2 border-[#330000] flex items-center justify-between">
                <span
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-[8px] text-gray-500 group-hover:text-gray-300"
                >
                  ACCESS_LEVEL: READY
                </span>
                <span
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="pixel-btn-red text-[9px] py-1.5 px-3 flex items-center gap-1 group-hover:bg-[#FF0000]"
                >
                  ENTER &gt;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
