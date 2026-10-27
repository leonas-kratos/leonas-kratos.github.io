import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import { LAB_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "Department Research Lab & Members | Dang Minh Duc",
  description: "Department of Telecommunication Systems, FET VNU-UET academic research team & workspaces.",
};

export default function LabPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#aaa]">
      <ScrollProgressBar />
      <ScrollObserver />
      <Navbar />

      <main className="page-container py-12">
        <SubpageNav currentPath="/lab" currentPageName="LAB" />

        {/* Section Header */}
        <div className="reveal section-title mb-4">
          {LAB_DATA.title}
        </div>
        <p className="reveal text-sm sm:text-base text-[#aaa] max-w-2xl mb-12">
          {LAB_DATA.subtitle}
        </p>

        {/* Lab Card */}
        <div className="reveal img-card p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="person-img-wrapper rounded">
              <img
                src={LAB_DATA.image}
                alt={LAB_DATA.title}
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-mono font-bold text-[#FF4444] uppercase mb-2">
                  &gt; FET LABORATORY CREW
                </div>
                <h2 className="text-xl font-bold text-white mb-3">
                  {LAB_DATA.title}
                </h2>
                <p className="text-sm text-[#aaa] leading-relaxed mb-6">
                  {LAB_DATA.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                {LAB_DATA.tags.map((t) => (
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

        <SubpageFooterNav currentPath="/lab" />
      </main>
    </div>
  );
}
