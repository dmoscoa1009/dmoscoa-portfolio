import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const BinaryBackground = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const binaryString =
    "0100100001000101010011000100110001001111001000000101011101001111010100100100110001000100 01001000 01000101 01001100 01001100 01001111 00100000 01010111 01001111 01010010 01001100 01000100 01001000 01000101 01001100 01001100 01001111 00100000 01010111 01001111 01010010 01001100 01000100 01001000 01000101 01001100 01001100010011110010000001010111010011110101001001001100010001000100100001000101010011000100110001001111001000000101011101001111010100100100110001000100";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  useEffect(() => {
    const unsubscribeX = x.on("change", (val) =>
      setPosition((prev) => ({ ...prev, x: val }))
    );
    const unsubscribeY = y.on("change", (val) =>
      setPosition((prev) => ({ ...prev, y: val }))
    );

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [x, y]);

  return (
    <div className="absolute inset-0 h-screen w-screen overflow-hidden">
      {/* Binary text */}
      <span className="text-accent dark:text-accent/10 light-alt:text-accent/30 dark-alt:text-accent/10 text-9xl select-none break-words absolute inset-0 z-0">
        {binaryString}
      </span>

      {/* Hover mask */}
      <motion.div
        className="pointer-events-none fixed backdrop-blur-2xl inset-0 z-[10]"
        style={{
          maskImage: `radial-gradient(circle 500px at ${position.x}px ${position.y}px, transparent 0%, var(--background) 80%)`,
          WebkitMaskImage: `radial-gradient(circle 500px at ${position.x}px ${position.y}px, transparent 0%, var(--background) 80%)`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          backgroundImage: `radial-gradient(circle 500px at ${position.x}px ${position.y}px, transparent 0%, var(--background) 60%)`,
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Static full-screen mask */}
      <div
        className="pointer-events-none fixed backdrop-blur-2xl inset-0 z-[10]"
        style={{
          maskImage: `radial-gradient(circle at center, transparent 0%, var(--background) 60%)`,
          WebkitMaskImage: `radial-gradient(circle at center, transparent 0%, var(--background) 60%)`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          backgroundImage: `radial-gradient(circle at center, transparent 0%, var(--background) 80%)`,
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Fisheye lens */}
      <motion.div
        className="pointer-events-none absolute rounded-full bg-transparent z-20"
        style={{
          top: position.y - 150,
          left: position.x - 150,
          width: 300,
          height: 300,
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default BinaryBackground;
