"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Menu, X, Radio } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "/#overview" },
    { label: "Pipeline", href: "/#pipeline" },
    { label: "Publications", href: "/#publications" },
    { label: "Hardware & Lab", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="site-navbar">
      <div className="page-container h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#3b82f6] flex items-center justify-center text-[#06090f] font-black text-sm shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform">
            <Radio className="w-4 h-4 text-[#06090f]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold text-white tracking-tight group-hover:text-[#00f0ff] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono text-[#38bdf8] tracking-wider uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              UWB-IPS · VNU-UET
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 text-xs font-semibold text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-1 hover:text-[#00f0ff] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyan-primary !py-1.5 !px-3.5 !text-xs flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV PDF</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg border border-slate-800 bg-[#0c1322]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#00f0ff]" /> : <Menu className="w-5 h-5 text-[#00f0ff]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b14]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-5 space-y-3.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium py-1 text-slate-200 hover:text-[#00f0ff]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyan-primary w-full flex items-center justify-center gap-2 !py-2.5 text-xs"
            >
              <FileText className="w-4 h-4" />
              <span>DOWNLOAD CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
