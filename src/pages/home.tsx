import { Button } from "@/components/ui/button";
import ContactDrawer from "@/components/custom/contact-drawer";
import GlitchText from "@/components/custom/glitch-text";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import StructureBar from "@/components/custom/structure-bar";

export default function HomePage() {
  const [displayText, setDisplayText] = useState("DMOSCOA");

  useEffect(() => {
    const texts = [
      "DIEGOMOSCOA",
      "DEV",
      "DMOSCOA",
      "CREATOR",
      "DIEGOMOSCOA",
      "BUILDER",
      "DMOSCOA",
      "ENGINEER",
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setDisplayText(texts[currentIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-svh w-full p-4 md:p-8 pt-20 md:pt-32 text-foreground">
      <div className="sm:absolute top-32 sm:left-1/2 sm:-translate-x-1/2 max-w-2xl w-full z-10 flex flex-col gap-4">
        <StructureBar left="NODE" right="PACKET" />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-y-4 mx-2 md:mx-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <GlitchText
            text={displayText}
            className="text-4xl sm:text-6xl bebas-neue-regular font-bold tracking-wider"
          />
        </div>
        <div className="max-w-full md:max-w-md mt-2">
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
      <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex justify-center my-8 md:my-0">
        <NavLink to="/projects">
          <Button className="text-base px-6 py-3 rounded-none border-none shadow-none transition-none w-48 sm:w-auto">
            See projects
          </Button>
        </NavLink>
      </div>

      {/* Project Details */}
      <div className="flex flex-col md:block gap-8 w-full md:w-auto md:absolute md:bottom-8 md:right-8 text-xs uppercase text-foreground">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12">
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

      {/* Project Counter & Contact */}
      <div className="flex flex-col md:block items-end gap-8 w-full pb-8 md:w-auto md:absolute md:bottom-8 md:left-8 pt-8">
        {/* Futuristic Info Block */}
        <div className="flex flex-col gap-1 md:items-start items-end">
          <StructureBar left="SYS" right="ONLINE" duration={5000} />
          <p className="text-xs">[SYS: ONLINE] // NODE: HOME</p>
          <p className="text-xs">ID: 0xD13G0-1999</p>
          <p className="text-xs">SECTOR: ∑-ALPHA</p>
          <p className="text-xs">ACCESS: #ROOT</p>
          <div className="text-2xl md:text-4xl font-bold mt-2 bebas-neue-regular uppercase">
            <GlitchText
              className="min-h-[2.5rem] md:min-h-[5rem]"
              text="Full Stack Developer"
            />
          </div>
          <ContactDrawer>
            <Button
              variant="outline"
              className="mt-4 text-xs uppercase w-32 sm:w-auto"
            >
              Contact →
            </Button>
          </ContactDrawer>
        </div>
      </div>

      {/* Folio Number (still fixed) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 text-accent text-3xl md:text-5xl tracking-tighter">
        <GlitchText text="FOLIO" />
        <br />
        <GlitchText text="/2025" />
      </div>
    </div>
  );
}
