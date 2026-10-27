import Image from "next/image";
import { Cpu, Trophy, Sparkles } from "lucide-react";
import { VEDC_DATA } from "@/data/portfolioData";

export default function VEDCSection() {
  return (
    <section id="vedc" className="py-20 relative pixel-section-divider bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div style={{ fontFamily: "var(--font-press-start)" }} className="text-xs text-[#CC0000] mb-2">
            [ FIELD COMPETITION &amp; VEHICLES ]
          </div>
          <h2 style={{ fontFamily: "var(--font-press-start)" }} className="text-xl sm:text-3xl font-black text-white drop-shadow-[3px_3px_0_#660000]">
            {VEDC_DATA.sectionTitle}
          </h2>
          <div className="pixel-header-line w-48 my-3" />
          <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-gray-300">
            {VEDC_DATA.sectionSubtitle}
          </p>
        </div>

        {/* 3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: VEDC Autonomous Car (CAR: object-fit contain, bg black, fixed height 250px) */}
          <div className="pixel-card p-4 flex flex-col justify-between">
            <div>
              <div
                className="w-full bg-[#000000] overflow-hidden relative shadow-[4px_4px_0_0_#000000]"
                style={{
                  height: "250px",
                  border: "4px solid #CC0000",
                  borderRadius: "0px",
                  position: "relative",
                  backgroundColor: "#000000",
                }}
              >
                <Image
                  src={VEDC_DATA.car.image}
                  alt={VEDC_DATA.car.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                />
                <div
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="absolute top-2 left-2 px-2 py-1 bg-black text-[#FF0000] border-2 border-[#CC0000] text-[8px] uppercase z-10"
                >
                  {VEDC_DATA.car.badge}
                </div>
              </div>

              <div className="mt-4">
                <h3
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-xs font-bold text-white leading-relaxed mb-2"
                >
                  {VEDC_DATA.car.title}
                </h3>
                <p style={{ fontFamily: "var(--font-vt323)" }} className="text-lg text-gray-300 leading-snug">
                  {VEDC_DATA.car.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t-2 border-[#660000]">
              {VEDC_DATA.car.tags.map((t) => (
                <span
                  key={t}
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-[7px] px-1.5 py-0.5 bg-[#120304] border border-[#CC0000] text-gray-200"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: VEDC Teammate (Person: object-fit cover, fixed height 300px) */}
          <div className="pixel-card p-4 flex flex-col justify-between">
            <div>
              <div
                className="w-full bg-[#000000] overflow-hidden relative shadow-[4px_4px_0_0_#000000]"
                style={{
                  height: "300px",
                  border: "4px solid #CC0000",
                  borderRadius: "0px",
                  position: "relative",
                }}
              >
                <Image
                  src={VEDC_DATA.teammates.image}
                  alt={VEDC_DATA.teammates.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-300"
                />
                <div
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="absolute top-2 left-2 px-2 py-1 bg-black text-[#FF0000] border-2 border-[#CC0000] text-[8px] uppercase z-10"
                >
                  {VEDC_DATA.teammates.badge}
                </div>
              </div>

              <div className="mt-4">
                <h3
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-xs font-bold text-white leading-relaxed mb-2"
                >
                  {VEDC_DATA.teammates.title}
                </h3>
                <p style={{ fontFamily: "var(--font-vt323)" }} className="text-lg text-gray-300 leading-snug">
                  {VEDC_DATA.teammates.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t-2 border-[#660000]">
              {VEDC_DATA.teammates.tags.map((t) => (
                <span
                  key={t}
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-[7px] px-1.5 py-0.5 bg-[#120304] border border-[#CC0000] text-gray-200"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: CAR V2 (Current Research Vehicle: object-fit contain, bg black, fixed height 250px) */}
          <div className="pixel-card p-4 flex flex-col justify-between">
            <div>
              <div
                className="w-full bg-[#000000] overflow-hidden relative shadow-[4px_4px_0_0_#000000]"
                style={{
                  height: "250px",
                  border: "4px solid #CC0000",
                  borderRadius: "0px",
                  position: "relative",
                  backgroundColor: "#000000",
                }}
              >
                <Image
                  src={VEDC_DATA.currentResearchCar.image}
                  alt={VEDC_DATA.currentResearchCar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                />
                <div
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="absolute top-2 left-2 px-2 py-1 bg-black text-[#FF0000] border-2 border-[#CC0000] text-[8px] uppercase z-10"
                >
                  {VEDC_DATA.currentResearchCar.badge}
                </div>
              </div>

              <div className="mt-4">
                <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-[#CC0000] mb-1">
                  &gt; SUBSECTION: CURRENT RESEARCH
                </div>
                <h3
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-xs font-bold text-white leading-relaxed mb-2"
                >
                  {VEDC_DATA.currentResearchCar.title}
                </h3>
                <p style={{ fontFamily: "var(--font-vt323)" }} className="text-lg text-gray-300 leading-snug">
                  {VEDC_DATA.currentResearchCar.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t-2 border-[#660000]">
              {VEDC_DATA.currentResearchCar.tags.map((t) => (
                <span
                  key={t}
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-[7px] px-1.5 py-0.5 bg-[#120304] border border-[#CC0000] text-gray-200"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
