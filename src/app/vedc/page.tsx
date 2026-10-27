import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import { VEDC_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "VEDC Competition & AMR Car | Dang Minh Duc",
  description: "Autonomous Electric Vehicle Design Competition — embedded control, lane tracking, obstacle avoidance on STM32 platform.",
};

export default function VEDCPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#aaa]">
      <ScrollProgressBar />
      <ScrollObserver />
      <Navbar />

      <main className="page-container py-12">
        <SubpageNav currentPath="/vedc" currentPageName="VEDC" />

        {/* Section Header */}
        <div className="reveal section-title mb-4">
          {VEDC_DATA.sectionTitle}
        </div>
        <p className="reveal text-sm sm:text-base text-[#aaa] max-w-2xl mb-12">
          {VEDC_DATA.sectionSubtitle}
        </p>

        {/* 2-Column Responsive Card Grid */}
        <div className="card-grid">
          
          {/* Card 1: VEDC Autonomous Car */}
          <div className="reveal reveal-delay-1 img-card p-5 flex flex-col justify-between">
            <div>
              <div className="vehicle-img-wrapper rounded">
                <img
                  src={VEDC_DATA.car.image}
                  alt={VEDC_DATA.car.title}
                  loading="lazy"
                />
              </div>

              <div className="mt-5">
                <div className="text-[11px] font-mono font-bold text-[#FF4444] uppercase mb-1">
                  {VEDC_DATA.car.badge}
                </div>
                <h2 className="text-lg font-bold text-white mb-2">
                  {VEDC_DATA.car.title}
                </h2>
                <p className="text-sm text-[#aaa] leading-relaxed">
                  {VEDC_DATA.car.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-zinc-800">
              {VEDC_DATA.car.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded bg-[#1A0000] border border-[#660000] text-[#FF6666] font-mono"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: VEDC Teammate */}
          <div className="reveal reveal-delay-2 img-card p-5 flex flex-col justify-between">
            <div>
              <div className="person-img-wrapper rounded">
                <img
                  src={VEDC_DATA.teammates.image}
                  alt={VEDC_DATA.teammates.title}
                  loading="lazy"
                />
              </div>

              <div className="mt-5">
                <div className="text-[11px] font-mono font-bold text-[#FF4444] uppercase mb-1">
                  {VEDC_DATA.teammates.badge}
                </div>
                <h2 className="text-lg font-bold text-white mb-2">
                  {VEDC_DATA.teammates.title}
                </h2>
                <p className="text-sm text-[#aaa] leading-relaxed">
                  {VEDC_DATA.teammates.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-zinc-800">
              {VEDC_DATA.teammates.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded bg-[#1A0000] border border-[#660000] text-[#FF6666] font-mono"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: AMR CAR V2 */}
          <div className="reveal reveal-delay-3 img-card p-5 md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="vehicle-img-wrapper rounded">
                <img
                  src={VEDC_DATA.currentResearchCar.image}
                  alt={VEDC_DATA.currentResearchCar.title}
                  loading="lazy"
                />
              </div>

              <div className="mt-5">
                <div className="text-[11px] font-mono font-bold text-[#FF4444] uppercase mb-1">
                  {VEDC_DATA.currentResearchCar.badge}
                </div>
                <h2 className="text-lg font-bold text-white mb-2">
                  {VEDC_DATA.currentResearchCar.title}
                </h2>
                <p className="text-sm text-[#aaa] leading-relaxed max-w-3xl">
                  {VEDC_DATA.currentResearchCar.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-zinc-800">
              {VEDC_DATA.currentResearchCar.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded bg-[#1A0000] border border-[#660000] text-[#FF6666] font-mono"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

        </div>

        <SubpageFooterNav currentPath="/vedc" />
      </main>
    </div>
  );
}
