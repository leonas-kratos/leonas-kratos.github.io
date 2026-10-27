import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SubpageNavProps {
  currentPath: string;
  currentPageName: string;
}

const SECTIONS = [
  { name: "VEDC", path: "/vedc", icon: "🏎️" },
  { name: "RESEARCH", path: "/research", icon: "🔬" },
  { name: "CONFERENCE", path: "/conference", icon: "🏛️" },
  { name: "LAB", path: "/lab", icon: "👥" },
  { name: "PUBLICATIONS", path: "/publications", icon: "📄" },
];

export default function SubpageNav({ currentPath, currentPageName }: SubpageNavProps) {
  return (
    <div className="w-full mb-10">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#111] border border-zinc-800 hover:border-[#CC0000] text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-[#FF3333]" />
          <span>BACK TO HOME</span>
        </Link>

        {/* Breadcrumb */}
        <div className="text-xs font-mono text-zinc-500">
          <Link href="/" className="hover:text-white text-zinc-400">HOME</Link>
          <span className="text-[#CC0000] mx-2">/</span>
          <span className="text-[#FF4444] font-semibold">{currentPageName}</span>
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
    <div className="mt-20 pt-8 border-t border-zinc-800">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href={prevSection.path}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#111] border border-zinc-800 hover:border-[#CC0000] text-xs font-semibold text-zinc-300 hover:text-white transition-all w-full sm:w-auto justify-center"
        >
          <ChevronLeft className="w-4 h-4 text-[#FF3333]" />
          <span>PREV: {prevSection.name}</span>
        </Link>

        <Link
          href="/"
          className="text-xs font-mono text-zinc-400 hover:text-[#FF3333] transition-colors"
        >
          [ MAIN OVERVIEW ]
        </Link>

        <Link
          href={nextSection.path}
          className="btn-primary-red !py-2 !px-4 !text-xs inline-flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <span>NEXT: {nextSection.name}</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
