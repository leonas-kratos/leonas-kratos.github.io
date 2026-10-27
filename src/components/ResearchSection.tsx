import { RESEARCH_PRESENTATION_DATA } from "@/data/portfolioData";

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080808]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="mb-14">
          <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[1.2rem] text-[#FF0000] tracking-[2px] mb-2 uppercase">
            [ RESEARCH &amp; PRESENTATION ]
          </div>
          <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.25rem] text-[#CCCCCC]">
            Student scientific research defense presentation &amp; dedicated research team members
          </p>
        </div>

        {/* 2 Columns: Uses .photo-wrapper, gap 24px */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {RESEARCH_PRESENTATION_DATA.map((item) => (
            <div key={item.id} className="pixel-card p-5 flex flex-col justify-between">
              <div>
                <div className="photo-wrapper">
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
                    className="text-[0.75rem] font-bold text-white leading-relaxed mb-2"
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.1rem] text-[#CCCCCC] leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 mt-4 border-t-2 border-[#660000]">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    style={{ fontFamily: "var(--font-vt323)" }}
                    className="text-base px-2 py-0.5 bg-[#1A0000] border border-[#660000] text-[#FF6666]"
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
