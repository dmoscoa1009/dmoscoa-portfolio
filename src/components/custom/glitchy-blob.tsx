import React, { useEffect, useRef, useState } from "react";

interface GlitchyBlobProps {
  width?: number; // number of columns
  height?: number; // number of rows
  density?: number; // 0-1, how much of the grid is filled
  characters?: string[];
  className?: string;
  colorClass?: string; // Tailwind color class
  style?: React.CSSProperties;
}

const DEFAULT_CHARACTERS = [
  "□",
  "■",
  "○",
  "●",
  "×",
  "◦",
  "◼",
  "◻",
  "◯",
  "◉",
  "+",
  "*",
  "#",
  "@",
  "░",
  "▒",
  "▓",
];

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBool(prob: number) {
  return Math.random() < prob;
}

const GlitchyBlob: React.FC<GlitchyBlobProps> = ({
  width = 14,
  height = 8,
  density = 0.6,
  characters = DEFAULT_CHARACTERS,
  className = "",
  colorClass = "text-accent",
  style = {},
}) => {
  // 2D array of { char, active }
  const [grid, setGrid] = useState<{ char: string; active: boolean }[][]>([]);
  const frame = useRef(0);

  // Generate an organic mask (roughly circular/oval, but random)
  function generateMask() {
    const cx = width / 2;
    const cy = height / 2;
    const rx = width * 0.45 * (0.9 + Math.random() * 0.2);
    const ry = height * 0.45 * (0.9 + Math.random() * 0.2);
    return Array.from({ length: height }, (_, y) =>
      Array.from({ length: width }, (_, x) => {
        // Ellipse formula + random jitter
        const dx = (x + 0.5 - cx) / rx;
        const dy = (y + 0.5 - cy) / ry;
        const d = dx * dx + dy * dy;
        // Add some noise for organic edge
        const edge = 1 + (Math.random() - 0.5) * 0.3;
        return d < edge * density;
      })
    );
  }

  // Initialize grid
  useEffect(() => {
    const mask = generateMask();
    setGrid(
      Array.from({ length: height }, (_, y) =>
        Array.from({ length: width }, (_, x) => ({
          char: characters[randomInt(0, characters.length - 1)],
          active: mask[y][x],
        }))
      )
    );
    // eslint-disable-next-line
  }, [width, height, density, characters]);

  // Animate: change chars and slightly morph the mask
  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((prev) => {
        // Occasionally regenerate mask for morphing
        const morph = frame.current % 20 === 0;
        const mask = morph ? generateMask() : null;
        return prev.map((row, y) =>
          row.map((cell, x) => {
            // Glitch: randomize char sometimes
            const glitch = randomBool(0.15);
            // Morph: update active from new mask
            const active = mask ? mask[y][x] : cell.active;
            return {
              char:
                glitch && active
                  ? characters[randomInt(0, characters.length - 1)]
                  : cell.char,
              active,
            };
          })
        );
      });
      frame.current++;
    }, 120);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [characters]);

  return (
    <div
      className={`inline-block leading-none font-mono select-none ${className}`}
      style={{
        display: "inline-grid",
        gridTemplateColumns: `repeat(${width}, 1em)`,
        gridTemplateRows: `repeat(${height}, 1em)`,
        ...style,
      }}
    >
      {grid.map((row, y) =>
        row.map((cell, x) => (
          <span
            key={y + "-" + x}
            className={
              cell.active
                ? `${colorClass} transition-all duration-200`
                : "opacity-0"
            }
            style={{
              filter:
                cell.active && Math.random() < 0.08 ? "blur(1px)" : undefined,
              opacity: cell.active ? 1 : 0,
            }}
          >
            {cell.char}
          </span>
        ))
      )}
    </div>
  );
};

export default GlitchyBlob;
