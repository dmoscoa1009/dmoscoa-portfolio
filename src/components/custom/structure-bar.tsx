import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Segment({ active }: { active: boolean }) {
  return (
    <motion.div
      className={`bg-accent transition-all duration-200 h-2 mx-0.5`}
      initial={false}
      animate={{
        width: active ? "1.5rem" : "0.20rem",
      }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
    />
  );
}

export default function StructureBar({
  left = "A",
  right = "B",
  duration = 2000,
}) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((idx) => (idx + 1) % 5);
    }, duration);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto py-2">
      <span className="text-xs tracking-widest text-accent opacity-80">
        {left}
      </span>
      <div className="flex-1 flex items-center justify-around mx-4">
        <Segment active={activeIdx === 0} />
        <Segment active={activeIdx === 1} />
        <Segment active={activeIdx === 2} />
        <Segment active={activeIdx === 3} />
        <Segment active={activeIdx === 4} />
      </div>
      <span className="text-xs tracking-widest text-accent opacity-80">
        {right}
      </span>
    </div>
  );
}
