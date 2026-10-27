"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

interface PdfThumbnailProps {
  pdfUrl: string;
  title: string;
}

export default function PdfThumbnail({ pdfUrl, title }: PdfThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        .promise.then((pdf: any) => {
          if (isCancelled) return;
          return pdf.getPage(1).then((page: any) => {
            if (isCancelled) return;
            // Target thumbnail roughly 120px width
            const unscaledViewport = page.getViewport({ scale: 1 });
            const scale = 120 / unscaledViewport.width;
            const viewport = page.getViewport({ scale });

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const renderContext = {
              canvasContext: ctx,
              viewport: viewport,
            };
            return page.render(renderContext).promise;
          });
        })
        .catch((err: any) => {
          console.warn("PDF render fallback:", err);
        });
    };

    // If pdfjsLib already loaded, render immediately
    if (window.pdfjsLib) {
      renderPage();
    } else {
      // Check every 100ms until pdfjs is ready
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
    <div className="w-[120px] h-[160px] bg-[#000] border border-zinc-800 rounded overflow-hidden flex items-center justify-center shrink-0 shadow-md">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        title={title}
      />
    </div>
  );
}
