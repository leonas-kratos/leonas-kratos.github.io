"use client";

import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "VEDC", href: "#vedc" },
    { label: "Conference", href: "#conference" },
    { label: "Research", href: "#research" },
    { label: "Lab", href: "#lab" },
    { label: "Publications", href: "#publications" },
    { label: "CV", href: "#cv" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/95 border-b-4 border-[#CC0000] shadow-[0_4px_0_0_#660000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-[#CC0000] border-2 border-white flex items-center justify-center text-white font-black text-sm shadow-[2px_2px_0_0_#000000] group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div className="flex flex-col">
            <span style={{ fontFamily: "var(--font-press-start)" }} className="text-xs sm:text-sm font-bold text-white tracking-wider group-hover:text-[#FF0000] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span style={{ fontFamily: "var(--font-vt323)" }} className="text-base text-[#CC0000] tracking-widest uppercase">
              AMR • ROBOTICS • UET
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ fontFamily: "var(--font-press-start)" }} className="hidden lg:flex items-center space-x-6 text-[10px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-[#FF0000] transition-colors flex items-center gap-1 hover:translate-y-[-1px]"
            >
              <span className="text-[#CC0000]">&gt;</span>
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn-red text-[9px] py-1.5 px-3 flex items-center gap-1.5"
          >
            <FileText className="w-3 h-3" />
            CV_PDF
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 border-2 border-[#CC0000] bg-[#120304] shadow-[2px_2px_0_0_#000000]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF0000]" /> : <Menu className="w-5 h-5 text-[#FF0000]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{ fontFamily: "var(--font-press-start)" }} className="lg:hidden bg-[#000000] border-b-4 border-[#CC0000] px-6 py-6 space-y-4 text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-[#FF0000] py-1"
            >
              &gt; {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn-red block text-center w-full mt-4"
          >
            DOWNLOAD CV
          </a>
        </div>
      )}
    </nav>
  );
}
