"use client";

import { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";

interface PdfPageViewport {
  width: number;
  height: number;
}

interface PdfPage {
  getViewport: (options: { scale: number }) => PdfPageViewport;
  render: (options: {
    canvasContext: CanvasRenderingContext2D;
    viewport: PdfPageViewport;
  }) => { promise: Promise<void> };
}

interface PdfDocument {
  getPage: (pageNumber: number) => Promise<PdfPage>;
}

interface PdfJsLib {
  GlobalWorkerOptions: {
    workerSrc: string;
  };
  getDocument: (url: string) => {
    promise: Promise<PdfDocument>;
  };
}

declare global {
  interface Window {
    pdfjsLib?: PdfJsLib;
  }
}

interface PdfThumbnailProps {
  pdfUrl: string;
  title: string;
}

export default function PdfThumbnail({ pdfUrl, title }: PdfThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const renderPage = () => {
      if (!window.pdfjsLib || !canvasRef.current || isCancelled) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

      window.pdfjsLib
        .getDocument(pdfUrl)
        .promise.then((pdf: PdfDocument) => {
          if (isCancelled) return;
          return pdf.getPage(1).then((page: PdfPage) => {
            if (isCancelled) return;
            const unscaledViewport = page.getViewport({ scale: 1 });
            const scale = 120 / unscaledViewport.width;
            const viewport = page.getViewport({ scale });

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const renderContext = {
              canvasContext: ctx,
              viewport: viewport,
            };
            return page.render(renderContext).promise.then(() => {
              if (!isCancelled) {
                setIsRendered(true);
              }
            });
          });
        })
        .catch((err: unknown) => {
          console.warn("PDF render fallback:", err);
        });
    };

    if (window.pdfjsLib) {
      renderPage();
    } else {
      const interval = setInterval(() => {
        if (window.pdfjsLib) {
          clearInterval(interval);
          renderPage();
        }
      }, 100);
      return () => {
        isCancelled = true;
        clearInterval(interval);
      };
    }

    return () => {
      isCancelled = true;
    };
  }, [pdfUrl]);

  return (
    <div className="relative w-[120px] h-[160px] bg-[#0d0d12] border border-zinc-800 rounded overflow-hidden flex items-center justify-center shrink-0 shadow-md group">
      {/* Fallback & Loading Placeholder */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-3 text-center transition-opacity duration-300 ${
          isRendered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-10 h-10 rounded-lg bg-[#1A0505] border border-[#CC0000]/50 flex items-center justify-center text-[#FF4444] mb-2">
          <FileText className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider line-clamp-2">
          PDF COVER
        </span>
      </div>

      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover relative z-10 transition-opacity duration-300 ${
          isRendered ? "opacity-100" : "opacity-0"
        }`}
        title={title}
      />
    </div>
  );
}
