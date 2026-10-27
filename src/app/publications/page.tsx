import { FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import { PUBLICATIONS } from "@/data/portfolioData";

export const metadata = {
  title: "Publications & Venues | Dang Minh Duc",
  description: "Published scientific research in International Conferences, National Journal and Conference.",
};

export default function PublicationsPage() {
  const badgeLabels: Record<string, string> = {
    "International Conference": "INTL CONF",
    "National Journal": "NAT JOURNAL",
    "National Conference": "NAT CONF",
    "Research Report": "REPORT",
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#f3f4f6]">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb & Back */}
        <SubpageNav currentPath="/publications" currentPageName="PUBLICATIONS" />

        {/* Page Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h1
              style={{ fontFamily: "var(--font-press-start)" }}
              className="text-xl sm:text-3xl font-black text-[#FF0000] tracking-[2px] leading-relaxed mb-3 drop-shadow-[3px_3px_0_#660000]"
            >
              [ PUBLICATIONS &amp; VENUES ]
            </h1>
            <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.3rem] text-[#CCCCCC]">
              Published scientific research: 2 International Conferences, 1 National Journal, 1 National Conference &amp; 1 Full Report
            </p>
          </div>

          <div className="mt-4 md:mt-0 pixel-card px-4 py-2 text-center shrink-0">
            <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-[#FF0000]">
              TOTAL: 05 PAPERS / REPORTS
            </span>
          </div>
        </div>

        {/* Papers Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="pixel-card p-6 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge: Red background #CC0000, black text + Year pill */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="px-2.5 py-1 text-[8px] bg-[#CC0000] text-black font-black uppercase tracking-wider"
                  >
                    {badgeLabels[pub.type] || "PUB"}
                  </span>

                  <span
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="px-2 py-0.5 text-[8px] text-[#FF0000] border-2 border-[#FF0000]"
                  >
                    {pub.year}
                  </span>
                </div>

                {/* Paper Title / Venue */}
                <h3
                  style={{ fontFamily: "var(--font-vt323)" }}
                  className="text-[1.3rem] text-white leading-snug mb-5"
                >
                  {pub.venue}
                </h3>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t-2 border-[#330000]">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{ fontFamily: "var(--font-vt323)" }}
                      className="text-base px-2 py-0.5 bg-[#1A0000] border border-[#660000] text-[#FF6666]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* READ PDF button */}
                <a
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn-black w-full text-center text-[9px] py-2.5 flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  READ PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Level Navigator */}
        <SubpageFooterNav currentPath="/publications" />
      </main>
    </div>
  );
}
