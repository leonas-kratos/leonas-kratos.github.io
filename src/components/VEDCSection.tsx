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

        {/* 3 Columns Desktop, 2 Tablet, 1 Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: VEDC Autonomous Car (.car-image-wrapper: contain, bg black, 300px height) */}
          <div className="pixel-card p-4 flex flex-col justify-between">
            <div>
              <div className="car-image-wrapper shadow-[4px_4px_0_0_#000000]">
                <img
                  src={VEDC_DATA.car.image}
                  alt={VEDC_DATA.car.title}
                  loading="lazy"
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

          {/* Card 2: VEDC Teammate (.photo-wrapper: cover, max-width 500px, 350px height) */}
          <div className="pixel-card p-4 flex flex-col justify-between">
            <div>
              <div className="photo-wrapper shadow-[4px_4px_0_0_#000000]">
                <img
                  src={VEDC_DATA.teammates.image}
                  alt={VEDC_DATA.teammates.title}
                  loading="lazy"
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

          {/* Card 3: CAR V2 (.car-image-wrapper: contain, bg black, 300px height) */}
          <div className="pixel-card p-4 flex flex-col justify-between">
            <div>
              <div className="car-image-wrapper shadow-[4px_4px_0_0_#000000]">
                <img
                  src={VEDC_DATA.currentResearchCar.image}
                  alt={VEDC_DATA.currentResearchCar.title}
                  loading="lazy"
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
