import { FileText, ExternalLink } from "lucide-react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollObserver from "@/components/ScrollObserver";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import PdfThumbnail from "@/components/PdfThumbnail";
import ScrollToTop from "@/components/ScrollToTop";
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
    <div className="min-h-screen bg-transparent text-[#b4b4be]">
      {/* Load pdf.js CDN */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
        strategy="afterInteractive"
      />

      <ScrollProgressBar />
      <ScrollObserver />
      <Navbar />

      <main className="page-container py-6 sm:py-10">
        <SubpageNav currentPath="/publications" currentPageName="PUBLICATIONS" />

        {/* Section Header */}
        <div className="section-title !mb-2">
          Publications &amp; Scientific Works
        </div>
        <p className="text-sm sm:text-base text-[#b0b0ba] max-w-2xl mb-8">
          Peer-reviewed papers on UWB indoor positioning, state estimation filters (EKF, UKF, PF), and sensor fusion applied to autonomous mobile robots.
        </p>

        {/* Publications Cards with PDF Thumbnails (120x160px) */}
        <div className="space-y-5">
          {PUBLICATIONS.map((pub, idx) => (
            <div
              key={pub.id}
              className={`reveal reveal-delay-${(idx % 4) + 1} pub-card p-5 sm:p-6 flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-6`}
            >
              {/* Left Side: PDF Cover Page 1 Thumbnail Canvas */}
              <PdfThumbnail pdfUrl={pub.pdfUrl} title={pub.title} />

              {/* Right Side: Paper Info */}
              <div className="flex-1 flex flex-col justify-between h-full w-full">
                <div>
                  {/* Top Badge (Type) & Year */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded bg-[#CC0000] text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      {badgeLabels[pub.type] || pub.type}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#FF4444]">
                      {pub.year}
                    </span>
                  </div>

                  {/* Paper Title */}
                  <h2 className="text-base sm:text-xl font-bold text-white mb-2 leading-snug">
                    {pub.title}
                  </h2>

                  {/* Authors */}
                  <p className="text-xs sm:text-sm text-[#b0b0ba] mb-2">
                    <strong className="text-zinc-200">Authors:</strong> {pub.authors}
                  </p>

                  {/* Conference / Journal Name */}
                  <p className="text-xs sm:text-sm text-[#FF4444] font-medium mb-4 italic">
                    {pub.venue}
                  </p>
                </div>

                {/* Footer of Card: Tags & READ PDF Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#16161d] border border-white/10 text-zinc-300 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-outline !py-2 !px-4 !text-xs inline-flex items-center gap-2 rounded-lg shrink-0 self-start sm:self-auto"
                  >
                    <FileText className="w-4 h-4" />
                    <span>READ PDF →</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SubpageFooterNav currentPath="/publications" />
      </main>
      <ScrollToTop />
    </div>
  );
}
