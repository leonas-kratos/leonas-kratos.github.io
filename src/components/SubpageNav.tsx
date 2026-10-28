import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SubpageNavProps {
  currentPath?: string;
  currentPageName: string;
}

const SECTIONS = [
  { name: "VEDC", path: "/vedc", icon: "🏎️" },
  { name: "RESEARCH", path: "/research", icon: "🔬" },
  { name: "CONFERENCE", path: "/conference", icon: "🏛️" },
  { name: "LAB", path: "/lab", icon: "👥" },
  { name: "PUBLICATIONS", path: "/publications", icon: "📄" },
];

export default function SubpageNav({ currentPageName }: SubpageNavProps) {
  return (
    <div className="w-full mb-10">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-cyan-500/15">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0c1424] border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-cyan-400" />
          <span>BACK TO MAIN OVERVIEW</span>
        </Link>

        {/* Breadcrumb */}
        <div className="text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400 text-slate-400">HOME</Link>
          <span className="text-cyan-500 mx-2">/</span>
          <span className="text-cyan-300 font-semibold">{currentPageName}</span>
        </div>
      </div>
    </div>
  );
}

export function SubpageFooterNav({ currentPath }: { currentPath: string }) {
  const currentIndex = SECTIONS.findIndex((s) => s.path === currentPath);
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : SECTIONS[SECTIONS.length - 1];
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : SECTIONS[0];

  return (
    <div className="mt-16 pt-8 border-t border-slate-800">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href={prevSection.path}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0c1424] border border-slate-800 hover:border-cyan-400 text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-all w-full sm:w-auto justify-center"
        >
          <ChevronLeft className="w-4 h-4 text-cyan-400" />
          <span>PREV: {prevSection.name}</span>
        </Link>

        <Link
          href="/"
          className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          [ MAIN OVERVIEW ]
        </Link>

        <Link
          href={nextSection.path}
          className="btn-cyan-primary !py-2 !px-4 !text-xs inline-flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <span>NEXT: {nextSection.name}</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
