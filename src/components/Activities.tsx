"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Bot, Trophy, Presentation, Maximize2, X } from "lucide-react";
import { ACTIVITIES, Activity } from "@/data/portfolioData";

export default function Activities() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    "All",
    "Robotics & AMR",
    "VEDC Competition",
    "REV Conference",
    "NCKH",
    "Lab & Team",
  ];

  const filtered =
    activeCategory === "All"
      ? ACTIVITIES
      : ACTIVITIES.filter((a) => a.category === activeCategory);

  return (
    <section id="activities" className="py-20 relative border-t-4 border-[#ff2a4b] bg-[#0c0406]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div style={{ fontFamily: "var(--font-press-start)" }} className="text-xs text-[#ff2a4b] mb-2">
              [ GALLERY &amp; FIELD OPERATIONS ]
            </div>
            <h2 style={{ fontFamily: "var(--font-press-start)" }} className="text-2xl sm:text-3xl font-black text-white drop-shadow-[3px_3px_0_#881337]">
              AMR CAR, VEDC &amp; RESEARCH TEAM
            </h2>
            <p style={{ fontFamily: "var(--font-vt323)" }} className="text-xl text-gray-400 mt-2">
              Hình ảnh thực tế robot tự hành CAR V2, xe VEDC, hội nghị REV, thuyết trình NCKH và đồng đội
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{ fontFamily: "var(--font-press-start)" }}
                className={`text-[9px] px-3 py-2 uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-[#ff2a4b] text-white border-2 border-white shadow-[2px_2px_0_0_#000000]"
                    : "bg-[#170508] text-gray-400 border border-[#4c0d18] hover:text-white hover:border-[#ff2a4b]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of pixel-framed cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="pixel-box-subtle p-3 hover:border-[#ff2a4b] transition-all flex flex-col justify-between group"
            >
              {/* Image Frame */}
              <div
                className="relative aspect-[4/3] w-full bg-black border-2 border-[#ff2a4b] overflow-hidden cursor-pointer shadow-[3px_3px_0_0_#000000]"
                onClick={() => setSelectedImage(item.image)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge Category */}
                <div
                  style={{ fontFamily: "var(--font-press-start)" }}
                  className="absolute top-2 left-2 px-2 py-1 bg-black/90 text-[#ff4d6d] border border-[#ff2a4b] text-[8px] uppercase"
                >
                  {item.category}
                </div>

                {/* Click hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <Maximize2 className="w-5 h-5 text-[#ff2a4b]" />
                  <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px]">
                    ZOOM
                  </span>
                </div>
              </div>

              {/* Text Card */}
              <div className="p-3 flex-1 flex flex-col justify-between mt-2">
                <div>
                  <div className="flex items-center justify-between text-[#ff4d6d] mb-1">
                    <span style={{ fontFamily: "var(--font-press-start)" }} className="text-[9px]">
                      {item.role}
                    </span>
                    <span style={{ fontFamily: "var(--font-vt323)" }} className="text-base text-gray-400">
                      {item.period}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "var(--font-press-start)" }}
                    className="text-xs font-bold text-white group-hover:text-[#ff4d6d] leading-snug mb-2 transition-colors"
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontFamily: "var(--font-vt323)" }} className="text-lg text-gray-300 leading-snug mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#38080f]">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      style={{ fontFamily: "var(--font-press-start)" }}
                      className="text-[7px] px-1.5 py-0.5 bg-[#170508] border border-[#ff2a4b]/50 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-[80vh] border-4 border-[#ff2a4b] bg-black p-2 shadow-[8px_8px_0_0_#ff2a4b]">
            <Image
              src={selectedImage}
              alt="Enlarged"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{ fontFamily: "var(--font-press-start)" }}
              className="pixel-btn absolute top-3 right-3 text-[10px] py-1.5 px-3 z-30"
            >
              [X] CLOSE
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
