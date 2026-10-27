import Navbar from "@/components/Navbar";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import { VEDC_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "VEDC Competition | Dang Minh Duc",
  description: "Autonomous electric vehicle competition car, teammates, and AMR V2 research vehicle.",
};

export default function VEDCPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#f3f4f6]">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb & Back */}
        <SubpageNav currentPath="/vedc" currentPageName="VEDC" />

        {/* Page Title */}
        <div className="mb-12">
          <h1
            style={{ fontFamily: "var(--font-press-start)" }}
            className="text-xl sm:text-3xl font-black text-[#FF0000] tracking-[2px] leading-relaxed mb-3 drop-shadow-[3px_3px_0_#660000]"
          >
            [ {VEDC_DATA.sectionTitle} ]
          </h1>
          <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.3rem] text-[#CCCCCC]">
            {VEDC_DATA.sectionSubtitle}
          </p>
        </div>

        {/* 3 Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: VEDC Autonomous Car */}
          <div className="pixel-card p-4 flex flex-col justify-between">
            <div>
              <div className="car-image-wrapper">
                <img
                  src={VEDC_DATA.car.image}
                  alt={VEDC_DATA.car.title}
                  loading="eager"
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
                  className="text-[0.75rem] font-bold text-white leading-relaxed mb-2"
                >
                  {VEDC_DATA.car.title}
                </h3>
                <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.1rem] text-[#CCCCCC] leading-snug">
                  {VEDC_DATA.car.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t-2 border-[#660000]">
              {VEDC_DATA.car.tags.map((t) => (
                <span
                  key={t}
                  style={{ fontFamily: "var(--font-vt323)" }}
                  className="text-base px-2 py-0.5 bg-[#1A0000] border border-[#660000] text-[#FF6666]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: VEDC Teammate */}
          <div className="pixel-card p-4 flex flex-col justify-between">
            <div>
              <div className="photo-wrapper">
                <img
                  src={VEDC_DATA.teammates.image}
                  alt={VEDC_DATA.teammates.title}
                  loading="eager"
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
                  className="text-[0.75rem] font-bold text-white leading-relaxed mb-2"
                >
                  {VEDC_DATA.teammates.title}
                </h3>
                <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.1rem] text-[#CCCCCC] leading-snug">
                  {VEDC_DATA.teammates.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t-2 border-[#660000]">
              {VEDC_DATA.teammates.tags.map((t) => (
                <span
                  key={t}
                  style={{ fontFamily: "var(--font-vt323)" }}
                  className="text-base px-2 py-0.5 bg-[#1A0000] border border-[#660000] text-[#FF6666]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: CAR V2 (Current Research) */}
          <div className="pixel-card p-4 flex flex-col justify-between">
            <div>
              <div className="car-image-wrapper">
                <img
                  src={VEDC_DATA.currentResearchCar.image}
                  alt={VEDC_DATA.currentResearchCar.title}
                  loading="eager"
                />
                <div
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="absolute top-2 left-2 px-2 py-1 bg-black text-[#FF0000] border-2 border-[#CC0000] text-[8px] uppercase z-10"
                >
                  {VEDC_DATA.currentResearchCar.badge}
                </div>
              </div>

              <div className="mt-4">
                <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[8px] text-[#CC0000] mb-1">
                  &gt; CURRENT RESEARCH
                </div>
                <h3
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-[0.75rem] font-bold text-white leading-relaxed mb-2"
                >
                  {VEDC_DATA.currentResearchCar.title}
                </h3>
                <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.1rem] text-[#CCCCCC] leading-snug">
                  {VEDC_DATA.currentResearchCar.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t-2 border-[#660000]">
              {VEDC_DATA.currentResearchCar.tags.map((t) => (
                <span
                  key={t}
                  style={{ fontFamily: "var(--font-vt323)" }}
                  className="text-base px-2 py-0.5 bg-[#1A0000] border border-[#660000] text-[#FF6666]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Level Navigator */}
        <SubpageFooterNav currentPath="/vedc" />
      </main>
    </div>
  );
}
