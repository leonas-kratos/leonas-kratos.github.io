import { BookOpen, FileText, Download, ScrollText, Sparkles } from "lucide-react";
import { PUBLICATIONS } from "@/data/portfolioData";

export default function Publications() {
  const badgeStyle: Record<string, string> = {
    "International Conference": "bg-[#e11d48] text-white border-2 border-white",
    "National Conference": "bg-[#9f1239] text-[#ffe4e6] border-2 border-[#ff4d6d]",
    "National Journal": "bg-[#881337] text-white border-2 border-[#f43f5e]",
    "Research Report": "bg-[#4c0519] text-[#fecdd3] border-2 border-[#fb7185]",
  };

  return (
    <section id="publications" className="py-20 relative border-t-4 border-[#ff2a4b] bg-[#090305]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div style={{ fontFamily: "var(--font-press-start)" }} className="text-xs text-[#ff2a4b] mb-2">
              [ SCIENTIFIC QUESTS COMPLETED ]
            </div>
            <h2 style={{ fontFamily: "var(--font-press-start)" }} className="text-2xl sm:text-3xl font-black text-white drop-shadow-[3px_3px_0_#881337]">
              PUBLICATIONS &amp; RESEARCH
            </h2>
            <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-gray-400 mt-2">
              4 bài báo khoa học xuất bản (2 Quốc tế, 1 Tạp chí Quốc gia, 1 Hội nghị Quốc gia) + 1 Báo cáo NCKH toàn văn
            </p>
          </div>

          <div className="mt-4 md:mt-0 pixel-box-subtle px-4 py-2 text-center">
            <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[10px] text-[#ff4d6d]">
              TOTAL: 05 SCHOLARLY WORKS
            </span>
          </div>
        </div>

        {/* Papers List in Pixel Panels */}
        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="pixel-box-subtle p-6 hover:border-[#ff2a4b] transition-all relative group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  
                  {/* Category Badge & Year */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      style={{ fontFamily: "var(--font-press-start)" }}
                      className={`px-2.5 py-1 text-[9px] uppercase shadow-[2px_2px_0_0_#000000] ${
                        badgeStyle[pub.type] || "bg-black text-white border border-red-500"
                      }`}
                    >
                      {pub.type}
                    </span>
                    <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-gray-400">
                      // {pub.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff4d6d] leading-relaxed transition-colors mb-2"
                  >
                    {pub.title}
                  </h3>
                </div>

                {/* Download PDF button */}
                <a
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn self-start shrink-0 text-[9px] py-2 px-3"
                >
                  <FileText className="w-3.5 h-3.5 mr-1.5" />
                  READ PDF
                </a>
              </div>

              {/* Authors & Venue */}
              <div style={{ fontFamily: "var(--font-vt323)" }} className="text-xl mb-4 bg-[#140608] border-l-4 border-[#ff2a4b] pl-3 py-1">
                <div className="text-gray-300">
                  <span className="text-[#ff4d6d] font-bold">AUTHORS:</span> {pub.authors}
                </div>
                <div className="text-[#fda4af]">
                  <span className="text-[#ff4d6d] font-bold">VENUE:</span> {pub.venue}
                </div>
              </div>

              {/* Abstract */}
              <div className="p-3 bg-[#0a0304] border border-[#38080f] mb-4">
                <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[8px] text-[#ff2a4b] uppercase block mb-1">
                  ABSTRACT_SUMMARY:
                </span>
                <p style={{ fontFamily: "var(--font-vt323)" }} className="text-lg text-gray-300 leading-snug">
                  {pub.abstract}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="text-[8px] px-2 py-1 bg-[#1a0508] border border-[#ff2a4b] text-[#ff8097]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
