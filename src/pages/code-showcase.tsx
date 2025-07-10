import GlitchText from "@/components/custom/glitch-text";
import GlitchyBlob from "@/components/custom/glitchy-blob";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export default function CodeShowcasePage() {
  return (
    <div className="relative h-svh w-full flex flex-col items-center justify-center p-8">
      <GlitchyBlob
        width={8}
        height={3}
        density={0.7}
        colorClass="text-accent"
        className="absolute bottom-8 right-8 z-0 opacity-60"
      />
      <div className="flex flex-col items-center gap-8 z-10">
        <GlitchText
          text="Want to see my code?"
          className="text-4xl bebas-neue-regular font-bold tracking-wider mb-2"
        />
        <div className="text-xs font-mono text-foreground/70 max-w-md text-center mb-4">
          Explore the source code for this portfolio and a demo e-commerce
          project. The code is clean, well-structured, and easy to follow.
        </div>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <a
            href="https://github.com/dmoscoa1009/dmoscoa-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="outline" className="w-full">
              Portfolio Source [↗]
            </Button>
          </a>
          <a
            href="https://github.com/dmoscoa1009/e-commerce-monorepo.git"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="outline" className="w-full">
              Demo Project [↗]
            </Button>
          </a>
        </div>
        <NavLink to="/projects" className="mt-8">
          <Button variant="ghost" className="w-full">
            ← Back to Projects
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
