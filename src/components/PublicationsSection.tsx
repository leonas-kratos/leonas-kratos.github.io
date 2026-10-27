import { FileText } from "lucide-react";
import { PUBLICATIONS } from "@/data/portfolioData";

export default function PublicationsSection() {
  const badgeStyle: Record<string, string> = {
    "International Conference": "bg-[#CC0000] text-white border-2 border-white",
    "National Conference": "bg-[#880000] text-white border-2 border-[#FF3333]",
    "National Journal": "bg-[#550000] text-white border-2 border-[#FF6666]",
    "Research Report": "bg-[#220000] text-white border-2 border-[#CC0000]",
  };

  return (
    <section id="publications" className="py-20 relative pixel-section-divider bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div style={{ fontFamily: "var(--font-press-start)" }} className="text-xs text-[#CC0000] mb-2">
              [ SCIENTIFIC PUBLICATIONS &amp; VENUES ]
            </div>
            <h2 style={{ fontFamily: "var(--font-press-start)" }} className="text-xl sm:text-3xl font-black text-white drop-shadow-[3px_3px_0_#660000]">
              PUBLICATIONS &amp; VENUES
            </h2>
            <div className="pixel-header-line w-48 my-3" />
            <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-gray-300">
              Published scientific research: 2 International Conferences, 1 National Journal, 1 National Conference &amp; 1 Full Research Report
            </p>
          </div>

          <div className="mt-4 md:mt-0 pixel-card px-4 py-2 text-center shrink-0">
            <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[10px] text-[#FF0000]">
              TOTAL: 05 PAPERS / REPORTS
            </span>
          </div>
        </div>

        {/* Papers List - Displays Conference/Journal Venue Name ONLY */}
        <div className="space-y-5 max-w-4xl mx-auto">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="pixel-card p-5 relative group hover:border-[#FF0000] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                {/* Type Badge & Year */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className={`px-2.5 py-1 text-[8px] uppercase shadow-[2px_2px_0_0_#000000] ${
                      badgeStyle[pub.type] || "bg-black text-white border border-[#CC0000]"
                    }`}
                  >
                    {pub.type}
                  </span>
                  <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-gray-400">
                    // {pub.year}
                  </span>
                </div>

                {/* Venue / Conference / Journal Name */}
                <h3
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF3333] leading-relaxed transition-colors mb-3"
                >
                  {pub.venue}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{ fontFamily: "var(--font-press-start)" }}
                      className="text-[7px] px-2 py-0.5 bg-[#120304] border border-[#CC0000] text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download PDF button */}
              <a
                href={pub.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-red shrink-0 text-[9px] py-2.5 px-4 flex items-center gap-2 self-start sm:self-center"
              >
                <FileText className="w-3.5 h-3.5" />
                READ PDF
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
