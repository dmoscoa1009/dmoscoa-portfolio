import GlitchText from "@/components/custom/glitch-text";
import GlitchyBlob from "@/components/custom/glitchy-blob";
import { NavLink } from "react-router";
import { projects } from "@/data/projects";

const TECH_ICONS = ["×", "◻", "✖", "◉", "◼", "●", "×", "◻", "✖", "◉"];

export default function ProjectsPage() {
  return (
    <div className="relative h-svh w-full flex items-center justify-center bg-background">
      <GlitchyBlob
        width={8}
        height={3}
        density={0.7}
        colorClass="text-accent"
        className="absolute bottom-5 right-5 z-0 opacity-60"
      />
      {/* Top Techy Icon Row */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        {TECH_ICONS.map((icon, i) => (
          <span key={i} className="text-2xl text-foreground">
            {icon}
          </span>
        ))}
      </div>
      {/* Techy Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-4 text-xs tracking-widest z-10 select-none">
        [SYS/PROJECTS] :: DEV MODE // SELECT AN ENTRY
      </div>
      <div className="w-full max-w-2xl flex flex-col items-start justify-center gap-2 mt-12">
        {projects.map((project, idx) => (
          <NavLink
            key={project.id + "-" + idx}
            to={project.link}
            className="group w-full flex items-center justify-start p-4 text-xs transition-colors hover:bg-primary hover:text-primary-foreground relative"
          >
            {/* Selector for hover/focus */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity text-lg font-bold select-none">
              &gt;
            </span>
            {/* Project ID */}
            <span className="mr-2 w-16 text-left">
              <GlitchText text={`[0x${project.id}]`} />
            </span>
            {/* Techy symbols and project name (smaller) */}
            <span className="mr-1 text-base select-none">{">"}</span>
            <span className="relative text-base tracking-widest mx-1">
              <GlitchText text={project.name} />
            </span>
            <span className="ml-1 text-base select-none">{"<"}</span>
            {/* System tag */}
            <span className="text-xs ml-2">
              <GlitchText text={`[SYS: ACTIVE]`} />
            </span>
            {/* Year, right-aligned */}
            <span className="text-xs absolute right-4 top-1/2 -translate-y-1/2">
              <GlitchText text={`Y:${project.year}`} />
            </span>
            {/* Extra techy ASCII decoration */}
            <span className="ml-4 text-accent/60 text-xs select-none">|=|</span>
          </NavLink>
        ))}
      </div>
      {/* Techy Footer */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-widest z-10 select-none">
        [END OF LIST] :: SYS/OK // ░▒▓ FOLIO 0:2025 ▓▒░
      </div>
    </div>
  );
}
