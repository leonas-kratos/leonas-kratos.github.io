import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import { RESEARCH_PRESENTATION_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "Student Scientific Research | Dang Minh Duc",
  description: "Student Scientific Research — UWB-based indoor positioning with state estimation filters for GPS-denied environments.",
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#aaa]">
      <ScrollProgressBar />
      <ScrollObserver />
      <Navbar />

      <main className="page-container py-12">
        <SubpageNav currentPath="/research" currentPageName="RESEARCH" />

        {/* Section Header */}
        <div className="reveal section-title mb-4">
          Student Scientific Research (NCKH)
        </div>
        <p className="reveal text-sm sm:text-base text-[#aaa] max-w-2xl mb-12">
          Student Scientific Research — UWB-based indoor positioning with state estimation filters for GPS-denied environments applied to autonomous mobile robots.
        </p>

        {/* 2-Column Responsive Card Grid */}
        <div className="card-grid">
          {RESEARCH_PRESENTATION_DATA.map((item, idx) => (
            <div
              key={item.id}
              className={`reveal reveal-delay-${idx + 1} img-card p-5 flex flex-col justify-between`}
            >
              <div>
                <div className="person-img-wrapper rounded">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>

                <div className="mt-5">
                  <div className="text-[11px] font-mono font-bold text-[#FF4444] uppercase mb-1">
                    {item.badge}
                  </div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[#aaa] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-zinc-800">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-[#1A0000] border border-[#660000] text-[#FF6666] font-mono"
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
    </div>
  );
}
