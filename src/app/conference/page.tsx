import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import { CONFERENCE_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "REV 2025 Conference Presentation | Dang Minh Duc",
  description: "Oral presentation on state estimation filters (EKF, UKF, PF) for UWB robotic indoor localization at REV-ECIT 2025.",
};

export default function ConferencePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#CCCCCC]">
      <ScrollProgressBar />
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
        <SubpageNav currentPath="/conference" currentPageName="CONFERENCE" />

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1A0000] border border-[#CC0000]/40 text-[#FF4444] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            SECTOR 03 · NATIONAL SCIENTIFIC FORUM
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {CONFERENCE_DATA.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            {CONFERENCE_DATA.subtitle}
          </p>
        </div>

        {/* Conference Card */}
        <div className="bg-[#141414] border border-[#222222] rounded-lg p-6 max-w-4xl mx-auto hover:border-[#CC0000] transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="person-card-wrapper">
              <img
                src={CONFERENCE_DATA.image}
                alt={CONFERENCE_DATA.title}
                loading="lazy"
              />
              <div className="card-hover-overlay">
                <span className="text-white text-xs font-mono font-bold uppercase tracking-wider">
                  {CONFERENCE_DATA.badge}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-mono font-bold text-[#FF4444] uppercase mb-2">
                  &gt; ORAL PRESENTATION &amp; DEFENSE
                </div>
                <h2 className="text-xl font-bold text-white mb-3">
                  {CONFERENCE_DATA.title}
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {CONFERENCE_DATA.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                {CONFERENCE_DATA.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded bg-[#1A0000] border border-[#660000] text-[#FF6666] font-mono"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        <SubpageFooterNav currentPath="/conference" />
      </main>
    </div>
  );
}
