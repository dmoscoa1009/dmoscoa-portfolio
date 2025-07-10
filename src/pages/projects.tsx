import GlitchText from "@/components/custom/glitch-text";
import StructureBar from "@/components/custom/structure-bar";
import { NavLink } from "react-router";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="pb-0 sm:py-20 relative h-svh w-full justify-center flex flex-col gap-8 sm:items-center">
      {/* Top Techy Icon Row */}
      <div className="sm:absolute top-4 sm:left-1/2 sm:-translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <StructureBar left="SYS: PROJECTS" right="NODE: ACTIVE" />
        <div className="text-xs tracking-widest select-none">
          [SYS/PROJECTS] :: DEV MODE // SELECT AN ENTRY
        </div>
      </div>
      {/* Main Projects Section */}
      <div className="w-full max-w-2xl flex flex-col items-start justify-center gap-2 flex-shrink-0 mx-auto sm:flex-1 sm:justify-center">
        {projects.map((project, idx) => (
          <NavLink
            key={project.id + "-" + idx}
            to={project.link}
            className="group w-full flex flex-col items-start justify-center p-4 text-xs transition-opacity opacity-60 hover:opacity-100 focus:opacity-100 relative"
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
      </div>
      {/* Techy Footer */}
      <div className="sm:absolute flex flex-col gap-4 bottom-4 sm:left-1/2 sm:-translate-x-1/2 text-xs tracking-widest z-10 select-none mx-auto">
        {/* Extra Techy Section - replaced with single link */}
        <div className="mx-auto w-full max-w-2xl flex flex-col items-center justify-end gap-6 px-4 mt-auto flex-grow">
          <NavLink to="/code" className="mt-8">
            <Button variant="ghost" className="w-full">
              Want to see my code? CLICK HERE
            </Button>
          </NavLink>
        </div>
        <div>[END OF LIST] :: SYS/OK // ░▒▓ FOLIO 0:2025 ▓▒░</div>
      </div>

      {/* Bottom Structure Bar */}
      <div className="absolute bottom-5 right-5 z-0 opacity-60">
        <StructureBar left="PROJECTS" right="ACTIVE" duration={10000} />
      </div>
    </div>
  );
}
