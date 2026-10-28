import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import ScrollToTop from "@/components/ScrollToTop";
import { RESEARCH_PRESENTATION_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "Student Scientific Research | Dang Minh Duc",
  description: "Student Scientific Research — UWB-based indoor positioning with state estimation filters for GPS-denied environments.",
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#06090f] text-slate-300">
      <ScrollProgressBar />
      <ScrollObserver />
      <Navbar />

      <main className="page-container py-6 sm:py-10">
        <SubpageNav currentPath="/research" currentPageName="RESEARCH" />

        {/* Section Header */}
        <div className="section-title !mb-2">
          Student Scientific Research (NCKH)
        </div>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-8">
          Student Scientific Research — UWB-based indoor positioning with state estimation filters for GPS-denied environments applied to autonomous mobile robots.
        </p>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESEARCH_PRESENTATION_DATA.map((item, idx) => (
            <div
              key={item.id}
              className={`reveal reveal-delay-${idx + 1} glass-card p-5 flex flex-col justify-between`}
            >
              <div>
                <div className="landscape-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="eager"
                  />
                </div>

                <div className="mt-4">
                  <div className="text-[11px] font-mono font-bold text-cyan-400 uppercase mb-1">
                    {item.badge}
                  </div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h2>
                  <div className="info-subbox text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-800">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="spec-pill"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SubpageFooterNav currentPath="/research" />
      </main>
      <ScrollToTop />
    </div>
  );
}
