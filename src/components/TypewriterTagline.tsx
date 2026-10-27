"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "UWB Indoor Positioning Researcher",
  "State Estimation & Embedded Systems",
  "AMR Navigation · FET · VNU-UET",
];

export default function TypewriterTagline() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = WORDS[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
    } else {
      const speed = isDeleting ? 30 : 65;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullWord.substring(0, prev.length - 1)
            : fullWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <div className="flex items-center text-lg sm:text-2xl font-semibold text-[#FF3333] tracking-wide min-h-[36px]">
      <span>{currentText}</span>
      <span className="w-[3px] h-6 bg-[#CC0000] ml-1.5 animate-pulse inline-block" />
    </div>
  );
}
