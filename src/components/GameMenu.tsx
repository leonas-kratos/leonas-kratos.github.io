import Link from "next/link";
import { ArrowRight, FileText, ExternalLink } from "lucide-react";
import {
  VEDC_DATA,
  RESEARCH_PRESENTATION_DATA,
  CONFERENCE_DATA,
  LAB_DATA,
  PUBLICATIONS,
} from "@/data/portfolioData";

export const MENU_CARDS = [
  {
    title: "VEDC",
    icon: "🏎️",
    href: "/vedc",
    image: "/images/VEDC_CAR.png",
    imageFit: "contain",
    subtitle: "Autonomous Electric Vehicle Design Competition",
    description:
      "Embedded control, lane tracking, and obstacle avoidance on STM32 microcontroller platform.",
    badge: "SECTOR 01",
  },
  {
    title: "RESEARCH",
    icon: "🔬",
    href: "/research",
    image: "/images/NCKH_present.png",
    imageFit: "cover",
    subtitle: "Student Scientific Research (NCKH)",
    description:
      "UWB-based indoor positioning with non-linear state estimation filters for GPS-denied environments.",
    badge: "SECTOR 02",
  },
  {
    title: "CONFERENCE",
    icon: "🏛️",
    href: "/conference",
    image: "/images/REV2025.png",
    imageFit: "cover",
    subtitle: "REV-ECIT 2025 National Conference",
    description:
      "Oral presentation on state estimation filters (EKF, UKF, PF) for UWB robotic indoor localization.",
    badge: "SECTOR 03",
  },
  {
    title: "LAB",
    icon: "👥",
    href: "/lab",
    image: "/images/Lab.png",
    imageFit: "cover",
    subtitle: "Department Research Laboratory",
    description:
      "Department of Telecommunication Systems, FET VNU-UET academic research team & workspaces.",
    badge: "SECTOR 04",
  },
  {
    title: "PUBLICATIONS",
    icon: "📄",
    href: "/publications",
    image: "/images/Car_V2.png",
    imageFit: "contain",
    subtitle: "5 Scientific Works & Full Monograph",
    description:
      "2 International Conferences (IEEE ATC, ICARIC), 1 National Journal (JEC), 1 Conference & Report.",
    badge: "SECTOR 05",
  },
];

export default function GameMenu() {
  const delays = [
    "reveal-delay-1",
    "reveal-delay-2",
    "reveal-delay-3",
    "reveal-delay-4",
    "reveal-delay-1",
  ];

  const badgeLabels: Record<string, string> = {
    "International Conference": "INTL CONF",
    "National Journal": "NAT JOURNAL",
    "National Conference": "NAT CONF",
    "Research Report": "REPORT",
  };

  return (
    <>
      {/* 1. QUICK SECTOR NAVIGATION BENTO GRID */}
      <section id="missions" className="bg-transparent">
        <div className="page-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div className="reveal section-title !mb-0">
              Research &amp; Engineering Sectors
            </div>
            <span className="text-xs font-mono text-zinc-400">
              SELECT A SECTOR OR SCROLL FOR FULL VISUAL GALLERY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MENU_CARDS.map((card, idx) => (
              <Link
                key={card.title}
                href={card.href}
                className={`reveal ${delays[idx]} img-card p-4 sm:p-5 flex flex-col justify-between group ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Card Visual Preview Header */}
                  <div className="relative w-full h-40 sm:h-44 rounded-lg overflow-hidden mb-4 bg-[#09090d] border border-white/10">
                    <img
                      src={card.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110"
                    />
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className={`relative z-10 w-full h-full ${
                        card.imageFit === "contain"
                          ? "object-contain p-2"
                          : "object-cover object-center"
                      } transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[#FF4444] border border-[#CC0000]/50 uppercase tracking-wider">
                        {card.badge}
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-center text-base">
                      {card.icon}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF3333] transition-colors mb-1">
                    {card.title}
                  </h3>

                  <p className="text-xs text-[#FF4444] font-semibold mb-2">
                    {card.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-[#FF3333] transition-colors">
                  <span>OPEN {card.title} PAGE</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. VEDC & AMR PLATFORM SHOWCASE */}
      <section id="vedc-showcase" className="bg-[#0b0b0f]/60 border-t border-white/5">
        <div className="page-container">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <div className="reveal section-title !mb-1">
                {VEDC_DATA.sectionTitle}
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                {VEDC_DATA.sectionSubtitle}
              </p>
            </div>
            <Link href="/vedc" className="btn-secondary-outline !py-1.5 !px-3.5 !text-xs">
              Details <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1: VEDC_CAR.png */}
            <div className="reveal reveal-delay-1 img-card p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="vehicle-img-wrapper">
                  <img
                    src={VEDC_DATA.car.image}
                    alt=""
                    aria-hidden="true"
                    className="!absolute inset-0 w-full h-full !object-cover blur-xl opacity-35 scale-110"
                  />
                  <img
                    src={VEDC_DATA.car.image}
                    alt={VEDC_DATA.car.title}
                    loading="lazy"
                    className="p-2"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-[10px] font-mono font-bold text-[#FF4444] uppercase">
                    {VEDC_DATA.car.badge}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 mb-2">
                    {VEDC_DATA.car.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
                    {VEDC_DATA.car.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t border-white/10">
                {VEDC_DATA.car.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded bg-[#1A0505] border border-[#CC0000]/40 text-[#FF6666] font-mono"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: VEDC2025_Teamate.png */}
            <div className="reveal reveal-delay-2 img-card p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="person-img-wrapper">
                  <img
                    src={VEDC_DATA.teammates.image}
                    alt={VEDC_DATA.teammates.title}
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-[10px] font-mono font-bold text-[#FF4444] uppercase">
                    {VEDC_DATA.teammates.badge}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 mb-2">
                    {VEDC_DATA.teammates.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
                    {VEDC_DATA.teammates.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t border-white/10">
                {VEDC_DATA.teammates.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded bg-[#1A0505] border border-[#CC0000]/40 text-[#FF6666] font-mono"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: Car_V2.png */}
            <div className="reveal reveal-delay-3 img-card p-4 sm:p-5 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
              <div>
                <div className="vehicle-img-wrapper">
                  <img
                    src={VEDC_DATA.currentResearchCar.image}
                    alt=""
                    aria-hidden="true"
                    className="!absolute inset-0 w-full h-full !object-cover blur-xl opacity-35 scale-110"
                  />
                  <img
                    src={VEDC_DATA.currentResearchCar.image}
                    alt={VEDC_DATA.currentResearchCar.title}
                    loading="lazy"
                    className="p-2"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-[10px] font-mono font-bold text-[#FF4444] uppercase">
                    {VEDC_DATA.currentResearchCar.badge}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 mb-2">
                    {VEDC_DATA.currentResearchCar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
                    {VEDC_DATA.currentResearchCar.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t border-white/10">
                {VEDC_DATA.currentResearchCar.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded bg-[#1A0505] border border-[#CC0000]/40 text-[#FF6666] font-mono"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESEARCH (NCKH), CONFERENCE (REV 2025) & LAB GALLERY */}
      <section id="research-gallery" className="bg-transparent border-t border-white/5">
        <div className="page-container">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <div className="reveal section-title !mb-1">
                Scientific Research, Conference &amp; Lab
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                UWB indoor localization presentations, REV-ECIT 2025 oral defense, and Department of Telecommunication Systems laboratory at VNU-UET.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* NCKH Present & NCKH Teammate */}
            {RESEARCH_PRESENTATION_DATA.map((item, idx) => (
              <div
                key={item.id}
                className={`reveal reveal-delay-${idx + 1} img-card p-4 sm:p-5 flex flex-col justify-between`}
              >
                <div>
                  <div className="person-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] font-mono font-bold text-[#FF4444] uppercase">
                      {item.badge}
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t border-white/10">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#1A0505] border border-[#CC0000]/40 text-[#FF6666] font-mono"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* REV 2025 Conference */}
            <div className="reveal reveal-delay-1 img-card p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="person-img-wrapper">
                  <img
                    src={CONFERENCE_DATA.image}
                    alt={CONFERENCE_DATA.title}
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-[10px] font-mono font-bold text-[#FF4444] uppercase">
                    ORAL PRESENTATION &amp; DEFENSE
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 mb-2">
                    {CONFERENCE_DATA.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
                    {CONFERENCE_DATA.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t border-white/10">
                {CONFERENCE_DATA.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded bg-[#1A0505] border border-[#CC0000]/40 text-[#FF6666] font-mono"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Department Research Lab */}
            <div className="reveal reveal-delay-2 img-card p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="person-img-wrapper">
                  <img
                    src={LAB_DATA.image}
                    alt={LAB_DATA.title}
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-[10px] font-mono font-bold text-[#FF4444] uppercase">
                    FET · VNU-UET LABORATORY
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 mb-2">
                    {LAB_DATA.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b0b0ba] leading-relaxed">
                    {LAB_DATA.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t border-white/10">
                {LAB_DATA.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded bg-[#1A0505] border border-[#CC0000]/40 text-[#FF6666] font-mono"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PUBLICATIONS LIST */}
      <section id="publications-showcase" className="bg-[#0b0b0f]/60 border-t border-white/5">
        <div className="page-container">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <div className="reveal section-title !mb-1">
                Publications &amp; Scientific Works
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                5 peer-reviewed papers and research monographs on UWB indoor positioning and Kalman filtering.
              </p>
            </div>
            <Link href="/publications" className="btn-secondary-outline !py-1.5 !px-3.5 !text-xs">
              View All with PDF Previews <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {PUBLICATIONS.map((pub, idx) => (
              <div
                key={pub.id}
                className={`reveal reveal-delay-${(idx % 4) + 1} pub-card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4`}
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2 py-0.5 rounded bg-[#CC0000] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      {badgeLabels[pub.type] || pub.type}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#FF4444]">
                      {pub.year}
                    </span>
                    <span className="text-xs text-zinc-400 italic">
                      · {pub.venue}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    <strong className="text-zinc-300">Authors:</strong> {pub.authors}
                  </p>
                </div>

                <a
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-outline !py-2 !px-3.5 !text-xs shrink-0 self-start sm:self-center inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
