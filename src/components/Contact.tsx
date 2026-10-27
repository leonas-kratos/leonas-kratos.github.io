import { Mail, FolderGit2, MapPin, Terminal, Send, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative border-t-4 border-[#ff2a4b] bg-[#070204]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div style={{ fontFamily: "var(--font-press-start)" }} className="text-xs text-[#ff2a4b] mb-2">
          [ FINAL STAGE: COMMUNICATIONS ]
        </div>
        <h2 style={{ fontFamily: "var(--font-press-start)" }} className="text-2xl sm:text-3xl font-black text-white drop-shadow-[3px_3px_0_#881337] mb-4">
          CONNECT / COLLABORATE
        </h2>
        <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-gray-300 max-w-xl mx-auto mb-10">
          Sẵn sàng trao đổi về nghiên cứu xe tự hành AMR, ROS 2, Embedded STM32, lọc ước lượng trạng thái hoặc cơ hội hợp tác R&amp;D.
        </p>

        {/* Pixel Contact Card */}
        <div className="pixel-box p-6 max-w-lg mx-auto">
          <div className="space-y-4">
            
            {/* Primary Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-4 p-3 bg-[#170508] border-2 border-[#ff2a4b] hover:bg-[#2e0910] transition-colors group"
            >
              <div className="w-10 h-10 bg-[#ff2a4b] text-black flex items-center justify-center font-bold text-sm shrink-0 shadow-[2px_2px_0_0_#000000]">
                @
              </div>
              <div className="text-left">
                <span style={{ fontFamily: "var(--font-press-start)" }} className="block text-[8px] text-gray-400 uppercase">
                  DIRECT EMAIL
                </span>
                <span style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-white group-hover:text-[#ff4d6d]">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            {/* University Email */}
            <a
              href={`mailto:${PERSONAL_INFO.eduEmail}`}
              className="flex items-center gap-4 p-3 bg-[#170508] border-2 border-[#ff2a4b] hover:bg-[#2e0910] transition-colors group"
            >
              <div className="w-10 h-10 bg-[#881337] text-white flex items-center justify-center font-bold text-sm shrink-0 border border-[#ff4d6d]">
                UET
              </div>
              <div className="text-left">
                <span style={{ fontFamily: "var(--font-press-start)" }} className="block text-[8px] text-gray-400 uppercase">
                  ACADEMIC EMAIL
                </span>
                <span style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-white group-hover:text-[#ff4d6d]">
                  {PERSONAL_INFO.eduEmail}
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 bg-[#170508] border-2 border-[#ff2a4b] hover:bg-[#2e0910] transition-colors group"
            >
              <div className="w-10 h-10 bg-black border border-white text-white flex items-center justify-center font-bold text-sm shrink-0">
                GIT
              </div>
              <div className="text-left">
                <span style={{ fontFamily: "var(--font-press-start)" }} className="block text-[8px] text-gray-400 uppercase">
                  GITHUB ACCOUNT
                </span>
                <span style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-white group-hover:text-[#ff4d6d]">
                  github.com/leonas-kratos
                </span>
              </div>
            </a>

          </div>

          <div style={{ fontFamily: "var(--font-vt323)" }} className="mt-6 pt-4 border-t-2 border-[#38080f] text-lg text-gray-400 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#ff2a4b]" />
            <span>{PERSONAL_INFO.location} • VNU University of Engineering &amp; Technology (UET)</span>
          </div>
        </div>

        {/* Footer */}
        <div style={{ fontFamily: "var(--font-press-start)" }} className="mt-16 pt-8 border-t-2 border-[#1f0509] text-[9px] text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.</p>
          <p className="text-[#ff4d6d]">INSERT COIN TO CONTINUE</p>
        </div>

      </div>
    </section>
  );
}
