import GlitchText from "@/components/custom/glitch-text";
import GlitchyBlob from "@/components/custom/glitchy-blob";
import { NavLink } from "react-router";
import { projects } from "@/data/projects";
import InfiniteScrollLoop from "@/components/custom/infinite-scroll-loop";
import { Button } from "@/components/ui/button";

const TECH_ICONS = ["×", "◻", "✖", "◉", "◼", "●", "×", "◻", "✖", "◉"];

export default function ProjectsPage() {
  return (
    <div className="pt-32 relative h-svh w-full flex flex-col items-center justify-center bg-background">
      <GlitchyBlob
        width={8}
        height={3}
        density={0.7}
        colorClass="text-accent"
        className="absolute bottom-5 right-5 z-0 opacity-60"
      />
      {/* Top Techy Icon Row */}
      <div className="lg:flex hidden absolute top-32 lg:top-8 left-1/2 -translate-x-1/2 gap-4 z-10">
        {TECH_ICONS.map((icon, i) => (
          <span key={i} className="text-2xl text-foreground">
            {icon}
          </span>
        ))}
      </div>
      {/* Techy Header */}
      <div className="block sm:absolute mt-4 sm:top-24 lg:top-0 sm:left-1/2 sm:-translate-x-1/2 text-xs tracking-widest z-10 select-none">
        [SYS/PROJECTS] :: DEV MODE // SELECT AN ENTRY
      </div>
      {/* Main Projects Section with Infinite Scroll */}
      <div className="w-full max-w-2xl flex flex-col items-start justify-center gap-2 mt-12 flex-shrink-0 h-[70vh]">
        <InfiniteScrollLoop>
          {projects.map((project, idx) => (
            <NavLink
              key={project.id + "-" + idx}
              to={project.link}
              className="group w-full flex flex-col items-start justify-center p-4 text-xs transition-opacity opacity-80 hover:opacity-100 focus:opacity-100 relative"
            >
              {/* Selector for hover/focus */}
              <span className="absolute left-0 top-8 text-accent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity text-lg font-bold select-none">
                &gt;
              </span>
              {/* Project Name - big and bebas-neue */}
              <h2 className="text-4xl sm:text-6xl font-light tracking-tight bebas-neue-regular text-foreground/90 text-left z-10 mb-2">
                <GlitchText text={project.name.toUpperCase()} />
              </h2>
              <div className="flex flex-row items-center w-full gap-2">
                {/* Project ID */}
                <span className="w-20 text-left">
                  <GlitchText text={`[0x${project.id}]`} />
                </span>
                {/* System tag */}
                <span className="text-xs">
                  <GlitchText text={`[SYS: ACTIVE]`} />
                </span>
                {/* Year, right-aligned */}
                <span className="text-xs ml-auto">
                  <GlitchText text={`Y:${project.year}`} />
                </span>
                {/* Extra techy ASCII decoration */}
                <span className="ml-4 text-accent/60 text-xs select-none">
                  |=|
                </span>
              </div>
            </NavLink>
          ))}
        </InfiniteScrollLoop>
      </div>
      {/* Extra Techy Section - replaced with single link */}
      <div className="w-full max-w-2xl flex flex-col items-center justify-end gap-6 px-4 mt-auto mb-24 flex-grow">
        <NavLink to="/code" className="mt-8">
          <Button variant="ghost" className="w-full">
            Want to see my code?
          </Button>
        </NavLink>
      </div>
      {/* Techy Footer */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-widest z-10 select-none">
        [END OF LIST] :: SYS/OK // ░▒▓ FOLIO 0:2025 ▓▒░
      </div>
    </div>
  );
}
