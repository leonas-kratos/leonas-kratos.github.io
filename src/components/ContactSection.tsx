import { Mail, FolderGit2, MapPin, Download, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  return (
    <section id="cv" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-zinc-800">
      <div className="max-w-[1100px] mx-auto text-center">
        
        {/* Header */}
        <div className="mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1A0000] border border-[#CC0000]/40 text-[#FF4444] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            GET IN TOUCH
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curriculum Vitae &amp; Research Contact
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Download my comprehensive CV or connect regarding research opportunities, state estimation collaboration, or embedded robotic systems engineering.
          </p>
        </div>

        {/* Download CV Banner */}
        <div className="bg-[#141414] border border-[#CC0000]/60 rounded-xl p-8 mb-12 max-w-xl mx-auto shadow-[0_0_30px_rgba(204,0,0,0.2)]">
          <h3 className="text-lg font-bold text-white mb-2">
            Curriculum Vitae (PDF)
          </h3>
          <p className="text-sm text-zinc-400 mb-6">
            Detailed monograph of academic research at VNU-UET, published papers, conference defenses, and technical projects.
          </p>
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-red py-3 px-6 text-sm inline-flex items-center gap-2 rounded-lg"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD CURRICULUM VITAE (.PDF)</span>
          </a>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
          
          {/* Primary Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-4 rounded-lg bg-[#141414] border border-zinc-800 hover:border-[#CC0000] transition-all group flex flex-col items-center text-center"
          >
            <div className="w-9 h-9 rounded-full bg-[#1A0000] border border-[#CC0000]/60 flex items-center justify-center text-[#FF4444] mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
              Primary Email
            </span>
            <span className="text-xs font-semibold text-zinc-200 group-hover:text-[#FF3333] transition-colors mt-1">
              {PERSONAL_INFO.email}
            </span>
          </a>

          {/* Academic Email */}
          <a
            href={`mailto:${PERSONAL_INFO.eduEmail}`}
            className="p-4 rounded-lg bg-[#141414] border border-zinc-800 hover:border-[#CC0000] transition-all group flex flex-col items-center text-center"
          >
            <div className="w-9 h-9 rounded-full bg-[#1A0000] border border-[#CC0000]/60 flex items-center justify-center text-[#FF4444] mb-3 group-hover:scale-110 transition-transform">
              <span className="font-mono text-xs font-bold">UET</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
              Academic Email
            </span>
            <span className="text-xs font-semibold text-zinc-200 group-hover:text-[#FF3333] transition-colors mt-1">
              {PERSONAL_INFO.eduEmail}
            </span>
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-[#141414] border border-zinc-800 hover:border-[#CC0000] transition-all group flex flex-col items-center text-center"
          >
            <div className="w-9 h-9 rounded-full bg-[#1A0000] border border-[#CC0000]/60 flex items-center justify-center text-[#FF4444] mb-3 group-hover:scale-110 transition-transform">
              <FolderGit2 className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
              GitHub Profile
            </span>
            <span className="text-xs font-semibold text-zinc-200 group-hover:text-[#FF3333] transition-colors mt-1">
              leonas-kratos
            </span>
          </a>

        </div>

        {/* Location Note */}
        <div className="text-xs text-zinc-500 flex items-center justify-center gap-2 mb-16 font-mono">
          <MapPin className="w-3.5 h-3.5 text-[#CC0000]" />
          <span>{PERSONAL_INFO.location} · {PERSONAL_INFO.affiliation}</span>
        </div>

        {/* Footer Minimal */}
        <footer className="pt-8 border-t border-[#CC0000]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-[#CC0000] fill-[#CC0000]" />
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3333] transition-colors">
              GitHub
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#FF3333] transition-colors">
              Contact
            </a>
            <a href={PERSONAL_INFO.cvUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3333] transition-colors">
              CV
            </a>
          </div>
        </footer>

      </div>
    </section>
  );
}
