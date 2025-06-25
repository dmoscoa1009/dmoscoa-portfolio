"use client";

import React, { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  duration?: number;
  characters?: string;
  className?: string;
  triggerKey?: number;
  glitchFrom?: number;
}

const DEFAULT_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  duration = 1500,
  characters = DEFAULT_CHARACTERS,
  className = "",
  triggerKey = 0,
  glitchFrom = 0,
}) => {
  const [displayed, setDisplayed] = useState<string[]>(() =>
    Array(text.length).fill("")
  );

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let frame = 0;
    const fps = 30;
    const frameDuration = 1000 / fps;
    const totalFrames = Math.floor(duration / frameDuration);

    const lockInFrames = text
      .split("")
      .map(() =>
        Math.floor(Math.random() * totalFrames * 0.6 + totalFrames * 0.4)
      );

    intervalId = setInterval(() => {
      frame++;

      setDisplayed((prev) =>
        text.split("").map((char, i) => {
          if (char === " ") {
            return " "; // ✨ Always show spaces
          }
          if (i < glitchFrom) {
            return char;
          }
          if (frame >= lockInFrames[i]) {
            return char;
          } else {
            return characters[Math.floor(Math.random() * characters.length)];
          }
        })
      );

      if (frame >= totalFrames) {
        clearInterval(intervalId);
      }
    }, frameDuration);

    return () => clearInterval(intervalId);
  }, [text, duration, characters, triggerKey, glitchFrom]);

  return (
    <span className={className}>
      {displayed.map((char, idx) => (
        <span key={idx}>{char}</span>
      ))}
    </span>
  );
};

export default GlitchText;
