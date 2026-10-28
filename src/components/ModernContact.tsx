"use client";

import { useState } from "react";
import { Download, Mail, MapPin, Copy, Check, School, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/CleanIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ModernContact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(id);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="contact" className="bg-[#050810] pt-14 pb-12">
      <div className="page-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="section-title justify-center !mb-2">
            Curriculum Vitae &amp; Research Collaboration
          </div>
          <p className="text-sm text-slate-300">
            Open for academic research collaborations, master&apos;s/PhD opportunities, and autonomous mobile robotics engineering.
          </p>
        </div>

        {/* Download CV Highlight Banner */}
        <div className="glass-card p-6 sm:p-8 max-w-2xl mx-auto text-center mb-10 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.12)]">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            Curriculum Vitae &amp; Research Monograph (PDF)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-xl mx-auto">
            Comprehensive document including published conference papers, nonlinear filter formulations, hardware schematics, and academic achievements.
          </p>
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyan-primary inline-flex items-center gap-2 w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD CURRICULUM VITAE (.PDF)</span>
          </a>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          
          {/* Primary Email */}
          <div className="glass-card p-5 flex flex-col items-center text-center justify-between group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                Primary Email
              </div>
              <div className="text-xs font-semibold text-white break-all mb-3">
                {PERSONAL_INFO.email}
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(PERSONAL_INFO.email, "primary")}
              className="text-[11px] font-mono text-cyan-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              {copiedEmail === "primary" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* Academic Email */}
          <div className="glass-card p-5 flex flex-col items-center text-center justify-between group">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
              <School className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                Academic VNU Email
              </div>
              <div className="text-xs font-semibold text-white break-all mb-3">
                {PERSONAL_INFO.eduEmail}
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(PERSONAL_INFO.eduEmail, "edu")}
              className="text-[11px] font-mono text-blue-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              {copiedEmail === "edu" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* GitHub Profile */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 flex flex-col items-center text-center justify-between group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
              <GitHubIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                GitHub Repository
              </div>
              <div className="text-xs font-semibold text-white mb-3">
                leonas-kratos
              </div>
            </div>
            <div className="text-[11px] font-mono text-slate-300 group-hover:text-cyan-400 flex items-center gap-1 transition-colors">
              <span>VIEW PROFILE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

        </div>

        {/* Location & Institution */}
        <div className="text-xs text-slate-400 flex items-center justify-center gap-2 mb-10 font-mono text-center">
          <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{PERSONAL_INFO.location} · {PERSONAL_INFO.affiliation}</span>
        </div>

        {/* Footer Minimal */}
        <footer className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div className="font-mono text-[11px]">
            &copy; 2026 ĐẶNG MINH ĐỨC (LEONAS KRATOS) · VNU-UET
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
            <span>UWB-IPS RESEARCH</span>
            <span>·</span>
            <span>AMR ROBOTICS</span>
            <span>·</span>
            <span>STATE ESTIMATION</span>
          </div>
        </footer>

      </div>
    </section>
  );
}
