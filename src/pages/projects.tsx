import GlitchText from "@/components/custom/glitch-text";
import StructureBar from "@/components/custom/structure-bar";
import { NavLink } from "react-router";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-8 px-6 relative min-h-svh w-full justify-between flex flex-col gap-4 items-center">
      {/* Top Techy Icon Row */}
      <div className="max-w-[80vw]">
        <StructureBar left="// SELECT AN ENTRY" right="LIST" />
      </div>
      {/* Main Projects Section */}
      <div className="w-full max-w-2xl flex flex-col items-start justify-center gap-2">
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
      <div className="flex flex-col gap-4 text-xs tracking-widest select-none">
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
      <div className="absolute bottom-0 right-6 z-0 opacity-80">
        <StructureBar left="PROJECTS" right="ACTIVE" duration={10000} />
      </div>
    </div>
  );
}
