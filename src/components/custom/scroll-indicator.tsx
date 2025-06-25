import { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  scrollContainer: HTMLDivElement | null;
}

export default function ScrollIndicator({
  scrollContainer,
}: ScrollIndicatorProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollHeight =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const progress = (scrollContainer.scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [scrollContainer]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-y-4">
      <div className="h-48 w-[1px] bg-muted-foreground relative">
        <div
          className="absolute top-0 left-0 w-full bg-accent dark:bg-accent-foreground transition-all duration-300"
          style={{
            height: `${scrollProgress}%`,
          }}
        />
      </div>
      <span className="text-xs text-muted-foreground rotate-90 origin-center">
        SCROLL
      </span>
    </div>
  );
}
