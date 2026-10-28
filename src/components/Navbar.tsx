"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Menu,
  X,
  Radio,
  BookOpen,
  Cpu,
  Layers,
  Briefcase,
  Trophy,
  Compass,
  Mail,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "/#overview", icon: <Radio className="w-3.5 h-3.5 text-cyan-400" /> },
    { label: "Pipeline", href: "/#pipeline", icon: <Layers className="w-3.5 h-3.5 text-blue-400" /> },
    { label: "Publications", href: "/#publications", icon: <BookOpen className="w-3.5 h-3.5 text-cyan-300" /> },
    { label: "Hardware & Lab", href: "/#projects", icon: <Cpu className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: "Experience", href: "/#experience", icon: <Briefcase className="w-3.5 h-3.5 text-purple-400" /> },
    { label: "Awards", href: "/#awards", icon: <Trophy className="w-3.5 h-3.5 text-amber-400" /> },
    { label: "Skills", href: "/#skills", icon: <Compass className="w-3.5 h-3.5 text-sky-400" /> },
    { label: "Contact", href: "/#contact", icon: <Mail className="w-3.5 h-3.5 text-emerald-400" /> },
  ];

  return (
    <div className="floating-navbar-wrapper">
      <nav className="floating-navbar flex items-center justify-between">
        
        {/* Left: Brand Identity with Cyber Beacon */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00f0ff] via-[#38bdf8] to-[#0284c7] flex items-center justify-center text-[#06090f] font-black text-sm shadow-[0_0_18px_rgba(0,240,255,0.45)] group-hover:scale-105 transition-transform">
            <Radio className="w-4 h-4 text-[#040812]" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold text-white tracking-tight group-hover:text-[#00f0ff] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.2 rounded bg-cyan-500/10 border border-cyan-500/30 text-[9px] font-mono text-cyan-300">
                <Sparkles className="w-2.5 h-2.5 text-cyan-400" /> FET · VNU-UET
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#38bdf8] tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]" />
              UWB-IPS · AMR RESEARCH
            </span>
          </div>
        </Link>

        {/* Center: Decorated Navigation Links with Icons */}
        <div className="hidden xl:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-pill-link"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Right: Decorated Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyan-primary !py-2 !px-4 !text-xs flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV (PDF)</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-white p-2 rounded-xl border border-cyan-500/30 bg-[#0c1424] hover:border-cyan-400 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-[#00f0ff]" />
          ) : (
            <Menu className="w-5 h-5 text-[#00f0ff]" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 max-w-2xl mx-auto bg-[#070d18]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl space-y-2 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0b1324] border border-slate-800 text-xs font-semibold text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyan-primary w-full flex items-center justify-center gap-2 !py-2.5 text-xs"
            >
              <FileText className="w-4 h-4" />
              <span>DOWNLOAD CV / MONOGRAPH (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
