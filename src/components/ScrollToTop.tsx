"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollTop / docHeight) * 100);
      }
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 p-2.5 rounded-full bg-[#0a1220]/90 hover:bg-[#00f0ff] border border-cyan-500/50 text-white hover:text-slate-950 shadow-[0_4px_20px_rgba(0,240,255,0.25)] hover:shadow-[0_4px_25px_rgba(0,240,255,0.55)] backdrop-blur-md transition-all duration-300 transform hover:scale-110 cursor-pointer flex items-center justify-center group"
    >
      <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:text-slate-950 transition-colors" />
      <span className="sr-only">Scroll to top ({Math.round(scrollProgress)}%)</span>
    </button>
  );
}
