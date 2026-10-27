import { FileText } from "lucide-react";
import { PUBLICATIONS } from "@/data/portfolioData";

export default function PublicationsSection() {
  const badgeLabels: Record<string, string> = {
    "International Conference": "INTL CONF",
    "National Journal": "NAT JOURNAL",
    "National Conference": "NAT CONF",
    "Research Report": "REPORT",
  };

  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080808]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[1.2rem] text-[#FF0000] tracking-[2px] mb-2 uppercase">
              [ PUBLICATIONS &amp; VENUES ]
            </div>
            <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.25rem] text-[#CCCCCC]">
              Published scientific research: 2 International Conferences, 1 National Journal, 1 National Conference &amp; 1 Full Research Report
            </p>
          </div>

          <div className="mt-4 md:mt-0 pixel-card px-4 py-2 text-center shrink-0">
            <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-[#FF0000]">
              TOTAL: 05 PAPERS / REPORTS
            </span>
          </div>
        </div>

        {/* Papers Grid: 2 columns on desktop, 1 on mobile, gap 24px */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="pixel-card p-6 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge: Red background #CC0000, black text, pixel font, small caps + Year pill */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="px-2.5 py-1 text-[8px] bg-[#CC0000] text-black font-black uppercase tracking-wider"
                  >
                    {badgeLabels[pub.type] || "PUB"}
                  </span>

                  {/* Year pill: border: 2px solid #FF0000, red text */}
                  <span
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="px-2 py-0.5 text-[8px] text-[#FF0000] border-2 border-[#FF0000]"
                  >
                    {pub.year}
                  </span>
                </div>

                {/* Paper Title / Venue: white, VT323 font, font-size: 1.3rem */}
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

                {/* READ PDF button: pixel style, red border, hover fills red background with black text */}
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

      </div>
    </section>
  );
}
