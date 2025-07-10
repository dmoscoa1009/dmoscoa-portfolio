import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BinaryBackground from "./binary-background";

interface InitializerProps {
  onComplete: () => void;
}

const commands = ["INITIALIZING...", "LOADING...", "READY."];

export default function Initializer({ onComplete }: InitializerProps) {
  const [row, setRow] = useState(0); // current line
  const [col, setCol] = useState(0); // current char
  const [blink, setBlink] = useState(true);

  /* caret blink */
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 450);
    return () => clearInterval(id);
  }, []);

  /* typewriter */
  useEffect(() => {
    if (row >= commands.length) return;

    const next =
      col < commands[row].length
        ? () => setCol((c) => c + 1)
        : () => {
            setRow((r) => r + 1);
            setCol(0);
          };

    const id = setTimeout(next, col < commands[row].length ? 25 : 100);
    return () => clearTimeout(id);
  }, [row, col]);

  /* finish */
  useEffect(() => {
    if (row === commands.length) {
      const id = setTimeout(onComplete, 400);
      return () => clearTimeout(id);
    }
  }, [row, onComplete]);

  const progress =
    ((row + col / commands[Math.min(row, commands.length - 1)].length) /
      commands.length) *
    100;

  return (
    <AnimatePresence>
      <BinaryBackground />
      {row <= commands.length && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="fixed inset-0 z-50 px-8 flex items-center justify-center"
        >
          <div className="w-96 text-sm text-foreground space-y-2">
            {/* command lines */}
            {commands.map((txt, i) => (
              <div key={i} className="flex">
                <span className="mr-2 text-foreground/60 select-none">$</span>
                <span className="break-words">
                  {i < row ? txt : i === row ? txt.slice(0, col) : ""}
                </span>
                {i === row && blink && <span className="ml-1">_</span>}
              </div>
            ))}

            {/* progress bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-foreground/60">PROGRESS</span>
                <span className="text-xs text-accent font-bold">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="flex gap-4 w-full h-2">
                {Array.from({ length: 20 }, (_, i) => {
                  const barProgress = i * 5;
                  const currentProgress = progress;
                  return (
                    <div
                      key={i}
                      className={`flex-1 w-0.5 ${
                        barProgress < currentProgress
                          ? "bg-accent/70"
                          : barProgress === Math.floor(currentProgress / 5) * 5
                          ? "bg-accent/50"
                          : "bg-transparent"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
