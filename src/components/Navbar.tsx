"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "VEDC", href: "#vedc", id: "vedc" },
    { label: "Conference", href: "#conference", id: "conference" },
    { label: "Research", href: "#research", id: "research" },
    { label: "Lab", href: "#lab", id: "lab" },
    { label: "Publications", href: "#publications", id: "publications" },
    { label: "CV", href: "#cv", id: "cv" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#0A0000] border-b-[3px] border-[#CC0000]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#CC0000] border-2 border-white flex items-center justify-center text-white font-black text-xs shadow-[2px_2px_0_0_#000000]">
            ⚡
          </div>
          <div className="flex flex-col">
            <span style={{ fontFamily: "var(--font-press-start)" }} className="text-xs sm:text-sm font-bold text-white tracking-wider group-hover:text-[#FF0000]">
              {PERSONAL_INFO.name}
            </span>
            <span style={{ fontFamily: "var(--font-vt323)" }} className="text-sm text-[#CC0000] tracking-widest uppercase">
              AMR • ROBOTICS • UET
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? "nav-link-active" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn-red text-[9px] py-2 px-3.5 flex items-center gap-1.5"
          >
            <FileText className="w-3 h-3" />
            CV_PDF
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 border-2 border-[#CC0000] bg-[#120304]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF0000]" /> : <Menu className="w-5 h-5 text-[#FF0000]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0000] border-b-4 border-[#CC0000] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-[#FF0000] py-1 text-xs"
              style={{ fontFamily: "var(--font-press-start)" }}
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
