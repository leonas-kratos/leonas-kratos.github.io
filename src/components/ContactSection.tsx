import { Download, Heart } from "lucide-react";
import { EmailIcon, GitHubIcon, LocationIcon, UniversityIcon } from "@/components/CleanIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  return (
    <section id="cv" className="reveal bg-[#0d0d0d] border-t border-zinc-800">
      <div className="page-container text-center">
        
        {/* Header */}
        <div className="reveal section-title text-left inline-block">
          Curriculum Vitae &amp; Research Contact
        </div>
        
        <p className="reveal text-sm sm:text-base text-[#aaa] max-w-xl mx-auto mb-10 text-center">
          Download my comprehensive CV or connect regarding research opportunities, state estimation collaboration, or embedded robotic systems engineering.
        </p>

        {/* Download CV Banner */}
        <div className="reveal img-card p-8 mb-12 max-w-xl mx-auto shadow-[0_0_30px_rgba(204,0,0,0.15)] text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Curriculum Vitae (PDF)
          </h3>
          <p className="text-sm text-[#aaa] mb-6">
            Detailed monograph of academic research at VNU-UET, published papers, conference defenses, and technical projects.
          </p>
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-red inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD CURRICULUM VITAE (.PDF)</span>
          </a>
        </div>

        {/* Contact Links Grid with Clean SVG Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16 text-center">
          
          {/* Primary Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="reveal reveal-delay-1 p-5 rounded bg-[#111] border border-zinc-800 hover:border-[#CC0000] transition-all group flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#1A0000] border border-[#CC0000]/60 flex items-center justify-center text-[#FF4444] mb-3 group-hover:scale-110 transition-transform">
              <EmailIcon className="w-4 h-4" />
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
            className="reveal reveal-delay-2 p-5 rounded bg-[#111] border border-zinc-800 hover:border-[#CC0000] transition-all group flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#1A0000] border border-[#CC0000]/60 flex items-center justify-center text-[#FF4444] mb-3 group-hover:scale-110 transition-transform">
              <UniversityIcon className="w-4 h-4" />
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
            className="reveal reveal-delay-3 p-5 rounded bg-[#111] border border-zinc-800 hover:border-[#CC0000] transition-all group flex flex-col items-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#1A0000] border border-[#CC0000]/60 flex items-center justify-center text-[#FF4444] mb-3 group-hover:scale-110 transition-transform">
              <GitHubIcon className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
              GitHub Profile
            </span>
            <span className="text-xs font-semibold text-zinc-200 group-hover:text-[#FF3333] transition-colors mt-1">
              leonas-kratos
            </span>
          </a>

        </div>

        {/* Location Note with LocationIcon */}
        <div className="reveal text-xs text-zinc-500 flex items-center justify-center gap-2 mb-16 font-mono">
          <LocationIcon className="w-4 h-4 text-[#CC0000]" />
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
