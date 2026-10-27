import { Mail, FolderGit2, MapPin, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  return (
    <section id="cv" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#000000]">
      <div className="max-w-[1100px] mx-auto text-center">
        
        {/* Header */}
        <div className="mb-14">
          <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[1.2rem] text-[#FF0000] tracking-[2px] mb-2 uppercase">
            [ DOWNLOAD CV &amp; CONTACT ]
          </div>
          <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.25rem] text-[#CCCCCC] max-w-xl mx-auto">
            Download Curriculum Vitae (CV) or connect regarding AMR autonomous robotics, ROS 2, and embedded engineering opportunities.
          </p>
        </div>

        {/* Big Pixel Download CV Banner */}
        <div className="pixel-card p-6 mb-12 max-w-lg mx-auto bg-[#0D0000] border-4 border-[#CC0000]">
          <div style={{ fontFamily: "var(--font-press-start)" }} className="text-xs text-white mb-3">
            CURRICULUM VITAE (PDF)
          </div>
          <p style={{ fontFamily: "var(--font-vt323)" }} className="text-[1.15rem] text-[#CCCCCC] mb-6">
            Updated academic credentials, research publications, and engineering project milestones.
          </p>
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn-red text-xs py-3.5 px-6 inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD MY CV (.PDF)
          </a>
        </div>

        {/* Contact Links */}
        <div className="pixel-card p-6 max-w-lg mx-auto text-left">
          <div className="space-y-4">
            
            {/* Primary Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-4 p-3 bg-[#000000] border-2 border-[#CC0000] hover:bg-[#200507] group"
            >
              <div className="w-10 h-10 bg-[#CC0000] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-[2px_2px_0_0_#000000]">
                @
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-press-start)" }} className="block text-[8px] text-gray-400 uppercase">
                  PRIMARY EMAIL
                </span>
                <span style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-white group-hover:text-[#FF3333]">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            {/* University Email */}
            <a
              href={`mailto:${PERSONAL_INFO.eduEmail}`}
              className="flex items-center gap-4 p-3 bg-[#000000] border-2 border-[#CC0000] hover:bg-[#200507] group"
            >
              <div className="w-10 h-10 bg-[#660000] text-white flex items-center justify-center font-bold text-sm shrink-0 border border-[#CC0000]">
                UET
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-press-start)" }} className="block text-[8px] text-gray-400 uppercase">
                  ACADEMIC EMAIL
                </span>
                <span style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-white group-hover:text-[#FF3333]">
                  {PERSONAL_INFO.eduEmail}
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 bg-[#000000] border-2 border-[#CC0000] hover:bg-[#200507] group"
            >
              <div className="w-10 h-10 bg-[#120304] border border-white text-white flex items-center justify-center font-bold text-sm shrink-0">
                GIT
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-press-start)" }} className="block text-[8px] text-gray-400 uppercase">
                  GITHUB PROFILE
                </span>
                <span style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-white group-hover:text-[#FF3333]">
                  github.com/leonas-kratos
                </span>
              </div>
            </a>

          </div>

          <div style={{ fontFamily: "var(--font-vt323)" }} className="mt-6 pt-4 border-t-2 border-[#660000] text-lg text-gray-400 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#CC0000]" />
            <span>{PERSONAL_INFO.location} • VNU University of Engineering &amp; Technology (UET)</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t-4 border-[#CC0000] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-gray-400 flex items-center gap-1.5">
            <span className="text-[#FF0000]">♥</span> © {new Date().getFullYear()} {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
          </p>
          <p style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px] text-[#FF0000] blink-coin">
            INSERT COIN TO RESTART [8-BIT]
          </p>
        </div>

      </div>
    </section>
  );
}
