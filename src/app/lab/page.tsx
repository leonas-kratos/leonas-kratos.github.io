import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import ScrollToTop from "@/components/ScrollToTop";
import { LAB_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "Department Research Lab & Members | Dang Minh Duc",
  description: "Department of Telecommunication Systems, FET VNU-UET academic research team & workspaces.",
};

export default function LabPage() {
  return (
    <div className="min-h-screen bg-[#06090f] text-slate-300">
      <ScrollProgressBar />
      <ScrollObserver />
      <Navbar />

      <main className="page-container py-6 sm:py-10">
        <SubpageNav currentPath="/lab" currentPageName="LAB" />

        {/* Section Header */}
        <div className="section-title !mb-2">
          {LAB_DATA.title}
        </div>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-8">
          {LAB_DATA.subtitle}
        </p>

        {/* Lab Card */}
        <div className="reveal glass-card p-5 sm:p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="md:col-span-6 academic-img-wrapper">
              <img
                src={LAB_DATA.image}
                alt={LAB_DATA.title}
                loading="eager"
                className="object-cover object-center"
              />
            </div>

            <div className="md:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase mb-2">
                  &gt; FET LABORATORY CREW
                </div>
                <h2 className="text-xl font-bold text-white mb-3">
                  {LAB_DATA.title}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {LAB_DATA.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                {LAB_DATA.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded bg-[#091120] border border-cyan-500/20 text-slate-300 font-mono"
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
      <ScrollToTop />
    </div>
  );
}
