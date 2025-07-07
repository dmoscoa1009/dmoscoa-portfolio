import { Button } from "@/components/ui/button";
import ContactDrawer from "@/components/custom/contact-drawer";
import GlitchText from "@/components/custom/glitch-text";
import { NavLink } from "react-router";
import GlitchyBlob from "@/components/custom/glitchy-blob";

export default function HomePage() {
  return (
    <div className="relative h-svh w-full p-8 pt-32  text-foreground">
      {/* Description */}
      <div className="flex flex-col gap-y-4 mx-24">
        <div className="flex items-center gap-4">
          <GlitchText
            text="DMOSCOA"
            className="text-6xl bebas-neue-regular font-bold tracking-wider"
          />
          <GlitchyBlob
            width={6}
            height={2}
            density={0.8}
            colorClass="text-accent"
          />
        </div>
        <div className="max-w-md mt-2">
          <p className="text-xs font-mono tracking-wider mb-4 text-muted-foreground">
            <GlitchText
              className="break-words"
              text="[ID: 0xD13G0] // SYS: CODE-SLINGER ∑ TEAM-LEAD // NODE: DIGITAL BUILDER"
            />
            <br />
            <GlitchText
              className="break-words"
              text="BLENDING REACT, TYPESCRIPT, + PURE HUSTLE TO CRAFT SCALABLE, USER-OBSESSED APPS."
            />
            <br />
            <GlitchText
              className="break-words"
              text="CLEAN DESIGN SYSTEMS // REAL-TIME APIS // FAST-LOADING INTERFACES — LEADING DEV TEAMS."
            />
            <br />
            <GlitchText text="[SYS: SHIPS EXPERIENCES]" />
          </p>
        </div>
      </div>

      {/* Centered Project Button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <NavLink to="/projects">
          <Button className="text-base px-8 py-3 rounded-none border-none shadow-none transition-none">
            See projects
          </Button>
        </NavLink>
      </div>

      {/* Project Counter */}
      <div className="absolute bottom-8 left-8">
        {/* Futuristic Glitchy Info Block */}
        <div className="flex flex-col gap-1 items-start">
          <GlitchyBlob
            width={10}
            height={3}
            density={0.7}
            colorClass="text-accent"
          />
          <p className="text-xs">[SYS: ONLINE] // NODE: HOME</p>
          <p className="text-xs">ID: 0xD13G0-0999</p>
          <p className="text-xs">SECTOR: ∑-ALPHA</p>
          <p className="text-xs">ACCESS: #ROOT</p>
        </div>
        <div className="text-4xl font-bold mt-2 bebas-neue-regular uppercase">
          <GlitchText className="min-h-[5rem]" text="Full Stack Developer" />
        </div>
        <ContactDrawer>
          <Button variant="outline" className="mt-4 text-xs uppercase">
            Contact →
          </Button>
        </ContactDrawer>
      </div>

      {/* Project Details */}
      <div className="absolute bottom-8 right-8 text-xs uppercase text-foreground">
        <div className="grid grid-cols-3 gap-12">
          <div>
            <p className="mb-2 text-muted-foreground">
              <GlitchText text="// SYS: YEAR" />
            </p>
            <p>
              <GlitchText text="0x2025" />
            </p>
          </div>
          <div>
            <p className="mb-2 text-muted-foreground">
              <GlitchText text="// NODE: ROLE" />
            </p>
            <p>
              <GlitchText text="FULL STACK" />
              <br />
              <GlitchText text="DEV-LEAD" />
              <br />
              <GlitchText text="/ ∑-SIGMA" />
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
              <GlitchText text="#AI + ∞" />
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
