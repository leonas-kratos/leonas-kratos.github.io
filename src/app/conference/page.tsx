import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import ScrollToTop from "@/components/ScrollToTop";
import { CONFERENCE_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "REV 2025 Conference Presentation | Dang Minh Duc",
  description: "Oral presentation on state estimation filters (EKF, UKF, PF) for UWB robotic indoor localization at REV-ECIT 2025.",
};

export default function ConferencePage() {
  return (
    <div className="min-h-screen bg-[#06090f] text-slate-300">
      <ScrollProgressBar />
      <ScrollObserver />
      <Navbar />

      <main className="page-container py-6 sm:py-10">
        <SubpageNav currentPath="/conference" currentPageName="CONFERENCE" />

        {/* Section Header */}
        <div className="section-title !mb-2">
          {CONFERENCE_DATA.title}
        </div>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-8">
          {CONFERENCE_DATA.subtitle}
        </p>

        {/* Conference Card */}
        <div className="reveal glass-card p-5 sm:p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="md:col-span-6 landscape-frame">
              <img
                src={CONFERENCE_DATA.image}
                alt={CONFERENCE_DATA.title}
                loading="eager"
              />
            </div>

            <div className="md:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase mb-2">
                  &gt; ORAL PRESENTATION &amp; DEFENSE
                </div>
                <h2 className="text-xl font-bold text-white mb-3">
                  {CONFERENCE_DATA.title}
                </h2>
                <div className="info-subbox text-sm text-slate-300 leading-relaxed mb-4">
                  {CONFERENCE_DATA.description}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                {CONFERENCE_DATA.tags.map((t) => (
                  <span
                    key={t}
                    className="spec-pill"
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
      <ScrollToTop />
    </div>
  );
}
