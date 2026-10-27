import Navbar from "@/components/Navbar";
import SubpageNav, { SubpageFooterNav } from "@/components/SubpageNav";
import { CONFERENCE_DATA } from "@/data/portfolioData";

export const metadata = {
  title: "REV 2025 Conference | Dang Minh Duc",
  description: "National Conference on Electronics, Communications and Information Technology presentation.",
};

export default function ConferencePage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#f3f4f6]">
      <Navbar />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb & Back */}
        <SubpageNav currentPath="/conference" currentPageName="CONFERENCE" />

        {/* Page Title */}
        <div className="mb-12">
          <h1
            style={{ fontFamily: "var(--font-press-start)" }}
            className="text-xl sm:text-3xl font-black text-[#FF0000] tracking-[2px] leading-relaxed mb-3 drop-shadow-[3px_3px_0_#660000]"
          >
            [ {CONFERENCE_DATA.title} ]
          </h1>
          <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.3rem] text-[#CCCCCC]">
            {CONFERENCE_DATA.subtitle}
          </p>
        </div>

        {/* Conference Card */}
        <div className="pixel-card p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="photo-wrapper">
              <img
                src={CONFERENCE_DATA.image}
                alt={CONFERENCE_DATA.title}
                loading="eager"
              />
              <div
                style={{ fontFamily: "var(--font-press-start)" }}
                className="absolute top-2 left-2 px-2 py-1 bg-black text-[#FF0000] border-2 border-[#CC0000] text-[8px] uppercase z-10"
              >
                {CONFERENCE_DATA.badge}
              </div>
            </div>

            <div className="flex flex-col justify-between h-full">
              <div>
                <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-[#CC0000] mb-2 uppercase">
                  &gt; ORAL PRESENTATION
                </div>
                <h3
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="text-[0.85rem] font-bold text-white leading-relaxed mb-3"
                >
                  {CONFERENCE_DATA.title}
                </h3>
                <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.2rem] text-[#CCCCCC] leading-relaxed mb-6">
                  {CONFERENCE_DATA.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-[#660000]">
                {CONFERENCE_DATA.tags.map((t) => (
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

          </div>
        </div>

        {/* Bottom Level Navigator */}
        <SubpageFooterNav currentPath="/conference" />
      </main>
    </div>
  );
}
