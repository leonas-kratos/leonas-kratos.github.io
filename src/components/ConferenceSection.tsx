import { CONFERENCE_DATA } from "@/data/portfolioData";

export default function ConferenceSection() {
  return (
    <section id="conference" className="py-20 relative pixel-section-divider bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <div style={{ fontFamily: "var(--font-press-start)" }} className="text-xs text-[#CC0000] mb-2">
            [ SCIENTIFIC FORUMS &amp; CONFERENCES ]
          </div>
          <h2 style={{ fontFamily: "var(--font-press-start)" }} className="text-xl sm:text-3xl font-black text-white drop-shadow-[3px_3px_0_#660000]">
            {CONFERENCE_DATA.title}
          </h2>
          <div className="pixel-header-line w-48 my-3" />
          <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-gray-300">
            {CONFERENCE_DATA.subtitle}
          </p>
        </div>

        {/* Conference Card: Uses .photo-wrapper (max-width: 500px, height: 350px) */}
        <div className="pixel-card p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="photo-wrapper shadow-[4px_4px_0_0_#000000]">
              <img
                src={CONFERENCE_DATA.image}
                alt={CONFERENCE_DATA.title}
                loading="lazy"
              />
              <div
                style={{ fontFamily: "var(--font-press-start)" }}
                className="absolute top-2 left-2 px-2 py-1 bg-black text-[#FF0000] border-2 border-[#CC0000] text-[8px] uppercase z-10"
              >
                {CONFERENCE_DATA.badge}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[10px] text-[#CC0000] mb-2">
                  &gt; ORAL PRESENTATION
                </div>
                <h3
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-xs sm:text-sm font-bold text-white leading-relaxed mb-3"
                >
                  {CONFERENCE_DATA.title}
                </h3>
                <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-gray-300 leading-relaxed mb-6">
                  {CONFERENCE_DATA.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-[#660000]">
                {CONFERENCE_DATA.tags.map((t) => (
                  <span
                    key={t}
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="text-[8px] px-2 py-1 bg-[#120304] border border-[#CC0000] text-gray-200"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
