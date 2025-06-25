import { Button } from "@/components/ui/button";
import ContactDrawer from "@/components/custom/contact-drawer";
import GlitchText from "@/components/custom/glitch-text";
import { NavLink } from "react-router";

export default function HomePage() {
  return (
    <div className="relative h-svh w-full p-8 pt-32  text-foreground">
      {/* Description */}
      <div className="flex flex-col gap-y-4 mx-24">
        <h1 className="text-6xl uppercase font-bold tracking-wider">
          <GlitchText text="DIEGO MOSCOA" />
        </h1>
        <div className="max-w-md">
          <p className="text-xs uppercase tracking-wider mb-4 text-muted-foreground">
            <GlitchText
              className="break-words "
              text="DIEGO IS A CODE-SLINGER, TEAM CAPTAIN, AND DIGITAL BUILDER WHO
            BLENDS REACT, TYPESCRIPT, AND PURE HUSTLE TO CRAFT SMOOTH, SCALABLE,
            USER-OBSESSED WEB APPS. FROM CLEAN DESIGN SYSTEMS TO REAL-TIME APIS,
            HE'S BEEN SHAPING THE INTERNET ONE FAST-LOADING INTERFACE AT A TIME
            — AND LEADING DEV TEAMS WHILE HE'S AT IT."
            />
            <br />
            <br />
            <GlitchText text="HE DOESN'T JUST WRITE CODE. HE SHIPS EXPERIENCES." />
          </p>
        </div>
      </div>

      {/* Centered Project Button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <NavLink to="/projects">
          <Button
            variant="ghost"
            className="transition-all bg-radial from-background to-transparent duration-300 uppercase tracking-wider text-2xl px-8 py-6"
          >
            See projects
          </Button>
        </NavLink>
      </div>

      {/* Project Counter */}
      <div className="absolute bottom-8 left-8">
        <p className="text-sm">P/01</p>
        <div className="text-4xl font-bold mt-2 uppercase tracking-tighter">
          <GlitchText className="min-h-[5rem]" text="Full Stack Developer" />
        </div>
        <ContactDrawer>
          <Button variant="outline" className="mt-4 text-xs uppercase ">
            The journey →
          </Button>
        </ContactDrawer>
      </div>

      {/* Project Details */}
      <div className="absolute bottom-8 right-8 text-xs uppercase">
        <div className="grid grid-cols-3 gap-12">
          <div>
            <p className="mb-2 text-muted-foreground">
              <GlitchText text="// YEAR" />
            </p>
            <p>
              <GlitchText text="2025" />
            </p>
          </div>
          <div>
            <p className="mb-2 text-muted-foreground">
              <GlitchText text="// ROLE" />
            </p>
            <p>
              <GlitchText text="FULL STACK" />
              <br />
              <GlitchText text="DEVELOPMENT" />
              <br />
              <GlitchText text="/ TEAM LEAD" />
            </p>
          </div>
          <div>
            <p className="mb-2 text-muted-foreground">
              <GlitchText text="// TECH" />
            </p>
            <p>
              <GlitchText text="REACT / VITE / NODE" />
              <br />
              <GlitchText text="TYPESCRIPT" />
              <br />
              <GlitchText text="+ More" />
            </p>
          </div>
        </div>
      </div>

      {/* Folio Number */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 text-accent text-5xl  tracking-tighter">
        <GlitchText text="FOLIO" />
        <br />
        <GlitchText text="/2025" />
      </div>
    </div>
  );
}
