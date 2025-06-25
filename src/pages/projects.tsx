import GlitchText from "@/components/custom/glitch-text";
import { NavLink } from "react-router";
import { useRef, useEffect } from "react";
import ScrollIndicator from "@/components/custom/scroll-indicator";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scrollAmount = e.deltaY;
      container.scrollTop += scrollAmount;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="relative h-svh w-full">
      <div
        ref={scrollContainerRef}
        className="h-full overflow-y-auto scrollbar-none"
        style={{
          scrollBehavior: "smooth",
          scrollSnapType: "y proximity",
        }}
      >
        <div className="min-h-screen w-full p-24 pt-32 overflow-hidden flex flex-col">
          {projects.map((project) => (
            <div
              key={project.id}
              className="opacity-30 w-full hover:opacity-100 flex items-center gap-x-12 py-12"
              style={{ scrollSnapAlign: "start" }}
            >
              <span className="text-foreground text-3xl w-16">
                <GlitchText text={`P/${project.id}`} />
              </span>
              <NavLink
                to={project.link}
                className="group flex grow-1 items-center gap-x-8"
              >
                <span className="text-6xl grow-1 font-light tracking-wider text-foreground transition-colors">
                  <GlitchText text={project.name} />
                </span>
                <span className="text-sm text-muted-foreground">
                  <GlitchText text={project.year} />
                </span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <ScrollIndicator scrollContainer={scrollContainerRef.current} />
    </div>
  );
}
