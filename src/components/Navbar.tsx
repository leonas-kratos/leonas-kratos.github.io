"use client";

import { useState } from "react";
import { FolderGit2, Menu, X, Gamepad2, Skull, Flame } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "STATUS", href: "#hero" },
    { label: "SKILLS", href: "#skills" },
    { label: "PAPERS", href: "#publications" },
    { label: "AMR_CAR & LAB", href: "#activities" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0406]/95 border-b-4 border-[#ff2a4b] shadow-[0_4px_0_0_#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Pixel Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#ff2a4b] border-2 border-white flex items-center justify-center text-black font-black text-lg shadow-[2px_2px_0_0_#000000] group-hover:scale-105 transition-transform">
            👾
          </div>
          <div className="flex flex-col">
            <span style={{ fontFamily: "var(--font-press-start)" }} className="text-xs sm:text-sm font-bold text-white tracking-wider group-hover:text-[#ff4d6d] transition-colors">
              {PERSONAL_INFO.englishName}
            </span>
            <span style={{ fontFamily: "var(--font-vt323)" }} className="text-base text-[#ff2a4b] tracking-widest uppercase">
              LVL.99 AMR • ROBOTICS • AI
            </span>
          </div>
        </a>

        {/* Desktop Retro Nav Links */}
        <div style={{ fontFamily: "var(--font-press-start)" }} className="hidden md:flex items-center space-x-6 text-[10px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-[#ff2a4b] transition-colors flex items-center gap-1 hover:translate-y-[-2px]"
            >
              <span className="text-[#ff2a4b]">&gt;</span>
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn-dark px-3 py-1.5 flex items-center gap-2 text-[9px]"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#ff2a4b]" />
            GIT_REPO
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 border-2 border-[#ff2a4b] bg-[#1a080c] shadow-[2px_2px_0_0_#000000]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff4d6d]" /> : <Menu className="w-5 h-5 text-[#ff4d6d]" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{ fontFamily: "var(--font-press-start)" }} className="md:hidden bg-[#0d0406] border-b-4 border-[#ff2a4b] px-6 py-6 space-y-4 text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-[#ff2a4b] py-1"
            >
              &gt; {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn block text-center w-full mt-4"
          >
            GITHUB PROFILE
          </a>
        </div>
      )}
    </nav>
  );
}
