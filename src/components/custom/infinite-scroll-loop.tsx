import React, { useRef, useLayoutEffect, useState, CSSProperties } from "react";

interface InfiniteScrollLoopProps {
  surroundingBackup?: number;
  outerStyle?: CSSProperties;
  innerStyle?: CSSProperties;
  children: React.ReactNode;
}

const InfiniteScrollLoop: React.FC<InfiniteScrollLoopProps> = ({
  surroundingBackup = 4,
  outerStyle = {},
  innerStyle = {},
  children,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);

  const backupHeight = height * surroundingBackup;

  useLayoutEffect(() => {
    if (contentRef.current && scrollRef.current) {
      setHeight(contentRef.current.offsetHeight);
      scrollRef.current.scrollTop = backupHeight;
    }
    // Recalculate on window resize
    const handleResize = () => {
      if (contentRef.current) setHeight(contentRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [backupHeight, children]);

  return (
    <div className="relative h-full w-full" style={outerStyle}>
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute left-0 top-0 w-full h-full z-10">
        {/* Top gradient fade */}
        <div
          className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, transparent 100%)",
          }}
        />
        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent"
          style={{
            background:
              "linear-gradient(to top, var(--background) 0%, transparent 100%)",
          }}
        />
      </div>
      <div
        className="overflow-y-scroll scrollbar-none h-full w-full"
        ref={scrollRef}
        style={{ scrollbarWidth: "none", ...innerStyle }}
      >
        {Array.from({ length: surroundingBackup }).map((_, i) => (
          <div key={"before-" + i}>{children}</div>
        ))}
        <div ref={contentRef}>{children}</div>
        {Array.from({ length: surroundingBackup }).map((_, i) => (
          <div key={"after-" + i}>{children}</div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollLoop;
