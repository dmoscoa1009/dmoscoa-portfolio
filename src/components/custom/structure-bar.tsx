import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Segment({ active, width }: { active: boolean; width: number }) {
  return (
    <motion.div
      className={`bg-accent transition-all duration-200 h-2 mx-0.5`}
      initial={false}
      animate={{
        width: active ? "1.5rem" : width,
        opacity: active ? 1 : 0.7,
      }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      style={{ minWidth: 4 }}
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
        <Segment active={activeIdx === 0} width={0.25} />
        <Segment active={activeIdx === 1} width={0.25} />
        <Segment active={activeIdx === 2} width={0.5} />
        <Segment active={activeIdx === 3} width={0.25} />
        <Segment active={activeIdx === 4} width={0.25} />
      </div>
      <span className="text-xs tracking-widest text-accent opacity-80">
        {right}
      </span>
    </div>
  );
}
