import { FileText, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import { PUBLICATIONS } from "@/data/portfolioData";

export const metadata = {
  title: "Publications & Research Papers | Dang Minh Duc",
  description: "Peer-reviewed scientific publications on UWB indoor positioning, state estimation algorithms (EKF, UKF, PF), and AMR localization.",
};

export default function PublicationsPage() {
  const badgeLabels: Record<string, string> = {
    "International Conference": "INTL CONF",
    "National Journal": "NAT JOURNAL",
    "National Conference": "NAT CONF",
    "Research Report": "REPORT",
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#CCCCCC]">
      <ScrollProgressBar />
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
        <SubpageNav currentPath="/publications" currentPageName="PUBLICATIONS" />

        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1A0000] border border-[#CC0000]/40 text-[#FF4444] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            ACADEMIC CONTRIBUTIONS
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Publications &amp; Scientific Works
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Peer-reviewed papers on UWB indoor positioning, state estimation filters (EKF, UKF, PF), and sensor fusion applied to autonomous mobile robots.
          </p>
        </div>

        {/* Premium Publications Cards */}
        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="pub-card p-6 sm:p-7 flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="flex-1">
                {/* Header Badge & Year */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#CC0000] text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {badgeLabels[pub.type] || pub.type}
                  </span>
                  <span className="text-xs font-semibold text-[#FF4444]">
                    {pub.year}
                  </span>
                </div>

                {/* Actual Paper Title */}
                <h2 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {pub.title}
                </h2>

                {/* Authors */}
                <p className="text-xs sm:text-sm text-zinc-400 mb-2">
                  <strong className="text-zinc-300">Authors:</strong> {pub.authors}
                </p>

                {/* Venue / Conference Name */}
                <p className="text-xs sm:text-sm text-[#FF4444] font-medium mb-4 italic">
                  {pub.venue}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#161616] border border-zinc-800 text-zinc-400 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* READ PDF button */}
              <div className="shrink-0 self-start md:self-center">
                <a
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-outline py-2.5 px-4 text-xs inline-flex items-center gap-2 rounded"
                >
                  <FileText className="w-4 h-4" />
                  <span>READ PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <SubpageFooterNav currentPath="/publications" />
      </main>
    </div>
  );
}
