"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "VEDC", href: "/vedc" },
    { label: "Conference", href: "/conference" },
    { label: "Research", href: "/research" },
    { label: "Lab", href: "/lab" },
    { label: "Publications", href: "/publications" },
  ];

  return (
    <nav className="site-navbar">
      <div className="page-container h-16 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-[#CC0000] border border-[#FF3333] flex items-center justify-center text-white font-black text-xs shadow-[0_0_12px_rgba(204,0,0,0.5)] group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold text-white tracking-tight group-hover:text-[#FF3333] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono text-[#FF4444] tracking-wider uppercase">
              UWB-IPS · VNU-UET
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-7 text-xs font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? "text-[#FF0000]" : "text-zinc-300 hover:text-[#FF3333]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF0000] shadow-[0_0_8px_#FF0000]" />
                )}
              </Link>
            );
          })}

          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-red !py-1.5 !px-3.5 !text-xs flex items-center gap-1.5 rounded"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV PDF</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded border border-zinc-800 bg-[#121212]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF3333]" /> : <Menu className="w-5 h-5 text-[#FF3333]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#CC0000]/40 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium py-1.5 ${
                pathname === link.href ? "text-[#FF0000] font-bold" : "text-zinc-300 hover:text-[#FF3333]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-red w-full text-center mt-4 text-xs py-2.5 rounded block"
          >
            DOWNLOAD CV
          </a>
        </div>
      )}
    </nav>
  );
}
