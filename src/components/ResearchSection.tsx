import { RESEARCH_PRESENTATION_DATA } from "@/data/portfolioData";

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 relative pixel-section-divider bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <div style={{ fontFamily: "var(--font-press-start)" }} className="text-xs text-[#CC0000] mb-2">
            [ DEFENSE &amp; SCIENTIFIC COLLABORATION ]
          </div>
          <h2 style={{ fontFamily: "var(--font-press-start)" }} className="text-xl sm:text-3xl font-black text-white drop-shadow-[3px_3px_0_#660000]">
            RESEARCH &amp; PRESENTATION
          </h2>
          <div className="pixel-header-line w-48 my-3" />
          <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-gray-300">
            Student scientific research defense presentation &amp; dedicated research team members
          </p>
        </div>

        {/* 2 Columns: Uses .photo-wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {RESEARCH_PRESENTATION_DATA.map((item) => (
            <div key={item.id} className="pixel-card p-5 flex flex-col justify-between">
              <div>
                <div className="photo-wrapper shadow-[4px_4px_0_0_#000000]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="absolute top-2 left-2 px-2 py-1 bg-black text-[#FF0000] border-2 border-[#CC0000] text-[8px] uppercase z-10"
                  >
                    {item.badge}
                  </div>
                </div>

                <div className="mt-4">
                  <h3
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="text-xs font-bold text-white leading-relaxed mb-2"
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-vt323)" }} className="text-lg text-gray-300 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t-2 border-[#660000]">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="text-[7px] px-1.5 py-0.5 bg-[#120304] border border-[#CC0000] text-gray-200"
                  >
                    #{t}
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
