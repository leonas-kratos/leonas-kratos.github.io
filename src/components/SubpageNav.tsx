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
  const currentIndex = SECTIONS.findIndex((s) => s.path === currentPath);
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : SECTIONS[SECTIONS.length - 1];
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : SECTIONS[0];

  return (
    <div className="w-full mb-10">
      {/* Top Breadcrumb & Back */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-[#330000]">
        <Link
          href="/"
          className="pixel-btn-black text-[9px] py-2 px-3 inline-flex items-center gap-1.5"
        >
          <ChevronLeft className="w-3.5 h-3.5 text-[#FF0000]" />
          &lt; BACK TO MENU
        </Link>

        {/* Breadcrumb: HOME > PAGE_NAME */}
        <div style={{ fontFamily: "var(--font-press-start)" }} className="text-[10px] text-gray-400">
          <Link href="/" className="hover:text-[#FF0000] text-gray-400">HOME</Link>
          <span className="text-[#CC0000] mx-2">&gt;</span>
          <span className="text-[#FF0000]">{currentPageName}</span>
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
    <div className="mt-20 pt-8 border-t-4 border-[#CC0000]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Prev link */}
        <Link
          href={prevSection.path}
          className="pixel-btn-black text-[9px] py-2.5 px-4 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <ChevronLeft className="w-3.5 h-3.5 text-[#FF0000]" />
          &lt; PREV: [{prevSection.name}]
        </Link>

        <Link
          href="/"
          style={{ fontFamily: "var(--font-press-start)" }}
          className="text-[9px] text-gray-400 hover:text-[#FF0000]"
        >
          [ MAIN MENU ]
        </Link>

        {/* Next link */}
        <Link
          href={nextSection.path}
          className="pixel-btn-red text-[9px] py-2.5 px-4 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          NEXT: [{nextSection.name}] &gt;
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
