import { TypingAnimation } from "@/components/magicui/typing-animation";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="h-full w-full flex flex-row justify-center gap-12 pl-12 py-6">
      <div className="flex flex-col justify-end flex-2/3 relative">
        <NavLink
          to="/"
          className="absolute top-0 left-0 text-foreground-secondary hover:text-foreground transition-colors"
        >
          ← Back to Home
        </NavLink>
        <span className="text-sm font-bold text-foreground mb-4">About Me</span>
        <h2 className="text-foreground mb-4 uppercase">
          <TypingAnimation className="font-black text-8xl">
            Who is
          </TypingAnimation>
          <TypingAnimation className="font-black text-8xl">
            Diego Moscoa?
          </TypingAnimation>
        </h2>
        <p className="text-foreground-secondary font-bold mb-8">
          Diego is a Costa Rica–based code-slinger, team captain, and digital
          builder who blends React, TypeScript, and pure hustle to craft smooth,
          scalable, user-obsessed web apps. From clean design systems to
          real-time APIs, he's been shaping the internet one fast-loading
          interface at a time — and leading dev teams while he's at it.
        </p>
        <span className="text-foreground-secondary text-sm">
          He doesn't just write code. He ships experiences.
        </span>
        <NavLink
          to="/experience"
          className="absolute top-0 right-0 ml-auto text-foreground-secondary hover:text-foreground transition-colors"
        >
          Experience →
        </NavLink>
      </div>

      {/* Centered Project Button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <NavLink to="/projects">
          <Button
            variant="outline"
            className="text-foreground hover:text-accent border-2 border-foreground hover:border-accent transition-all duration-300 uppercase tracking-wider text-sm font-bold px-8 py-6"
          >
            See Projects
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
