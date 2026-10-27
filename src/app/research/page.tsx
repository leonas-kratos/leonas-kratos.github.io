import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import { RESEARCH_PRESENTATION_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "Student Scientific Research | Dang Minh Duc",
  description: "Student Scientific Research — UWB-based indoor positioning with state estimation filters for GPS-denied environments.",
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#CCCCCC]">
      <ScrollProgressBar />
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
        <SubpageNav currentPath="/research" currentPageName="RESEARCH" />

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1A0000] border border-[#CC0000]/40 text-[#FF4444] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            SECTOR 02 · SCIENTIFIC RESEARCH
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Student Scientific Research (NCKH)
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Student Scientific Research — UWB-based indoor positioning with state estimation filters for GPS-denied environments applied to autonomous mobile robots.
          </p>
        </div>

        {/* 2-Column Responsive Grid on Desktop, 1 on Mobile, Gap 24px */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESEARCH_PRESENTATION_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#141414] border border-[#222222] rounded-lg p-5 flex flex-col justify-between hover:border-[#CC0000] transition-colors"
            >
              <div>
                <div className="person-card-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="card-hover-overlay">
                    <span className="text-white text-xs font-mono font-bold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-[11px] font-mono font-bold text-[#FF4444] uppercase mb-1">
                    {item.badge}
                  </div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">
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
