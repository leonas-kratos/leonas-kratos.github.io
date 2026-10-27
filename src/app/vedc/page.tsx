import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import { VEDC_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "VEDC Competition & AMR Car | Dang Minh Duc",
  description: "Autonomous Electric Vehicle Design Competition — embedded control, lane tracking, obstacle avoidance on STM32 platform.",
};

export default function VEDCPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#CCCCCC]">
      <ScrollProgressBar />
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
        <SubpageNav currentPath="/vedc" currentPageName="VEDC" />

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1A0000] border border-[#CC0000]/40 text-[#FF4444] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            SECTOR 01 · COMPETITION &amp; VEHICLES
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {VEDC_DATA.sectionTitle}
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            {VEDC_DATA.sectionSubtitle}
          </p>
        </div>

        {/* 2-Column Responsive Grid on Desktop, 1 on Mobile, Gap 24px */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: VEDC Autonomous Car */}
          <div className="bg-[#141414] border border-[#222222] rounded-lg p-5 flex flex-col justify-between hover:border-[#CC0000] transition-colors">
            <div>
              <div className="vehicle-card-wrapper">
                <img
                  src={VEDC_DATA.car.image}
                  alt={VEDC_DATA.car.title}
                  loading="lazy"
                />
                <div className="card-hover-overlay">
                  <span className="text-white text-xs font-mono font-bold uppercase tracking-wider">
                    {VEDC_DATA.car.badge}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[11px] font-mono font-bold text-[#FF4444] uppercase mb-1">
                  {VEDC_DATA.car.badge}
                </div>
                <h2 className="text-lg font-bold text-white mb-2">
                  {VEDC_DATA.car.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
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
          <div className="bg-[#141414] border border-[#222222] rounded-lg p-5 flex flex-col justify-between hover:border-[#CC0000] transition-colors">
            <div>
              <div className="person-card-wrapper">
                <img
                  src={VEDC_DATA.teammates.image}
                  alt={VEDC_DATA.teammates.title}
                  loading="lazy"
                />
                <div className="card-hover-overlay">
                  <span className="text-white text-xs font-mono font-bold uppercase tracking-wider">
                    {VEDC_DATA.teammates.badge}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[11px] font-mono font-bold text-[#FF4444] uppercase mb-1">
                  {VEDC_DATA.teammates.badge}
                </div>
                <h2 className="text-lg font-bold text-white mb-2">
                  {VEDC_DATA.teammates.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
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

          {/* Card 3: AMR CAR V2 (Current Research Vehicle) */}
          <div className="md:col-span-2 bg-[#141414] border border-[#222222] rounded-lg p-5 flex flex-col justify-between hover:border-[#CC0000] transition-colors">
            <div>
              <div className="vehicle-card-wrapper max-w-full">
                <img
                  src={VEDC_DATA.currentResearchCar.image}
                  alt={VEDC_DATA.currentResearchCar.title}
                  loading="lazy"
                />
                <div className="card-hover-overlay">
                  <span className="text-white text-xs font-mono font-bold uppercase tracking-wider">
                    {VEDC_DATA.currentResearchCar.badge}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[11px] font-mono font-bold text-[#FF4444] uppercase mb-1">
                  {VEDC_DATA.currentResearchCar.badge}
                </div>
                <h2 className="text-lg font-bold text-white mb-2">
                  {VEDC_DATA.currentResearchCar.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
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
