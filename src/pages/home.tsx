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
    <div className="relative h-svh w-full p-4 sm:p-8 pt-24 pb-12 sm:pt-32 flex flex-col gap-y-4 text-foreground">
      <div className="sm:absolute top-32 sm:left-1/2 sm:-translate-x-1/2 sm:max-w-2xl ml-auto mr-6 max-w-[30vw] w-full z-10 flex flex-col gap-4">
        <StructureBar left="NODE" right="PACKET" />
      </div>
      {/* Description */}
      <div className="flex flex-col mx-2 gap-y-2 sm:mx-24 items-center sm:items-start">
        <GlitchText
          text={displayText}
          className="text-7xl sm:text-6xl bebas-neue-regular font-bold tracking-wider"
        />
        <div className="max-w-full sm:max-w-md text-center sm:text-left">
          <p className="text-xs font-mono tracking-wider text-muted-foreground">
            <GlitchText
              className="break-words"
              text="[ID: 0xD13G0] // SYS: CODE-SLINGER ∑ TEAM-LEAD"
            />
            <br />
            <GlitchText
              className="break-words"
              text="BLENDING REACT, TYPESCRIPT, + PURE HUSTLE TO CRAFT SCALABLE APPS."
            />
            <br />
            <GlitchText text="[SYS: SHIPS EXPERIENCES]" />
          </p>
        </div>
      </div>

      {/* Centered Project Button */}
      <div className="sm:absolute items-center sm:top-1/2 my-auto sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 flex justify-center">
        <NavLink to="/projects">
          <Button className="text-base px-6 py-3 rounded-none border-none shadow-none transition-none w-48 sm:w-auto">
            See projects
          </Button>
        </NavLink>
      </div>

      {/* Project Details */}
      <div className="hidden sm:block sm:absolute sm:bottom-8 sm:right-8 text-xs uppercase text-foreground">
        <div className="grid grid-cols-3 gap-12">
          <div className="text-right">
            <p className="mb-2 text-muted-foreground">
              <GlitchText text="// SYS: YEAR" />
            </p>
            <p>
              <GlitchText text="0x2025" />
            </p>
          </div>
          <div className="text-right">
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
          <div className="text-right">
            <p className="mb-2 text-muted-foreground">
              <GlitchText text="// TECH" />
            </p>
            <p>
              <GlitchText text="REACT / VITE / NODE" />
              <br />
              <GlitchText text="TYPESCRIPT" />
              <br />
              <GlitchText text="NESTJS / .NET" />
            </p>
          </div>
        </div>
      </div>

      {/* Project Counter & Contact */}
      <div className="flex flex-col sm:block items-center sm:items-start gap-8 w-full sm:w-auto sm:absolute sm:bottom-8 sm:left-8">
        {/* Futuristic Info Block */}
        <div className="flex flex-col gap-1 sm:items-start items-center">
          <StructureBar left="SYS" right="ONLINE" duration={5000} />
          <p className="text-xs hidden sm:block">[SYS: ONLINE] // NODE: HOME</p>
          <p className="text-xs hidden sm:block">ID: 0xD13G0-1999</p>
          <p className="text-xs hidden sm:block">SECTOR: ∑-ALPHA</p>
          <p className="text-xs hidden sm:block">ACCESS: #ROOT</p>
          <div className="text-2xl sm:text-4xl font-bold mt-2 bebas-neue-regular uppercase">
            <GlitchText
              className="min-h-[2.5rem] sm:min-h-[5rem]"
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

      {/* Folio Number */}
      <div className="fixed right-4 bottom-12 sm:bottom-0 -z-10 sm:top-1/2 sm:-translate-y-1/2 text-accent text-3xl sm:text-5xl tracking-tighter">
        <GlitchText text="FOLIO" />
        <br />
        <GlitchText text="/2025" />
      </div>
    </div>
  );
}
