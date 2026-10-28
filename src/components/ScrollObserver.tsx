"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure all reveal elements are fully visible immediately
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      el.classList.add("visible");
    });
  }, [pathname]);

  return null;
}
