import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import ScrollToTop from "@/components/ScrollToTop";
import { VEDC_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "VEDC Competition & AMR Car | Dang Minh Duc",
  description: "Autonomous Electric Vehicle Design Competition — embedded control, lane tracking, obstacle avoidance on STM32 platform.",
};

export default function VEDCPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#b4b4be]">
      <ScrollProgressBar />
      <ScrollObserver />
      <Navbar />

      <main className="page-container py-6 sm:py-10">
        <SubpageNav currentPath="/vedc" currentPageName="VEDC" />

        {/* Section Header */}
        <div className="section-title !mb-2">
          {VEDC_DATA.sectionTitle}
        </div>
        <p className="text-sm sm:text-base text-[#b0b0ba] max-w-2xl mb-8">
          {VEDC_DATA.sectionSubtitle}
        </p>

        {/* Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: VEDC Autonomous Car */}
          <div className="reveal reveal-delay-1 img-card p-5 flex flex-col justify-between">
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
                  loading="eager"
                  className="p-2"
                />
              </div>

              <div className="mt-5">
                <div className="text-[11px] font-mono font-bold text-[#FF4444] uppercase mb-1">
                  {VEDC_DATA.car.badge}
                </div>
                <h2 className="text-lg font-bold text-white mb-2">
                  {VEDC_DATA.car.title}
                </h2>
                <p className="text-sm text-[#b0b0ba] leading-relaxed">
                  {VEDC_DATA.car.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/10">
              {VEDC_DATA.car.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-0.5 rounded bg-[#1A0505] border border-[#CC0000]/40 text-[#FF6666] font-mono"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: VEDC Teammate */}
          <div className="reveal reveal-delay-2 img-card p-5 flex flex-col justify-between">
            <div>
              <div className="person-img-wrapper">
                <img
                  src={VEDC_DATA.teammates.image}
                  alt={VEDC_DATA.teammates.title}
                  loading="eager"
                />
              </div>

              <div className="mt-5">
                <div className="text-[11px] font-mono font-bold text-[#FF4444] uppercase mb-1">
                  {VEDC_DATA.teammates.badge}
                </div>
                <h2 className="text-lg font-bold text-white mb-2">
                  {VEDC_DATA.teammates.title}
                </h2>
                <p className="text-sm text-[#b0b0ba] leading-relaxed">
                  {VEDC_DATA.teammates.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/10">
              {VEDC_DATA.teammates.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-0.5 rounded bg-[#1A0505] border border-[#CC0000]/40 text-[#FF6666] font-mono"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: AMR CAR V2 */}
          <div className="reveal reveal-delay-3 img-card p-5 md:col-span-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 vehicle-img-wrapper">
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

            <div className="md:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="text-[11px] font-mono font-bold text-[#FF4444] uppercase mb-1">
                  {VEDC_DATA.currentResearchCar.badge}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {VEDC_DATA.currentResearchCar.title}
                </h2>
                <p className="text-sm text-[#b0b0ba] leading-relaxed">
                  {VEDC_DATA.currentResearchCar.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/10">
                {VEDC_DATA.currentResearchCar.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-0.5 rounded bg-[#1A0505] border border-[#CC0000]/40 text-[#FF6666] font-mono"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        <SubpageFooterNav currentPath="/vedc" />
      </main>
      <ScrollToTop />
    </div>
  );
}
