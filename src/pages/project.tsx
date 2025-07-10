import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import GlitchText from "@/components/custom/glitch-text";
import { Marquee } from "@/components/magicui/marquee";
import StructureBar from "@/components/custom/structure-bar";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <>
      <div className="absolute top-20 right-6 max-w-md">
        <StructureBar left={project.name} right={`00x${project.id}`} />
      </div>
      {/* Overview - Big, bold, scattered info */}
      <section className="relative w-full h-[60vh] sm:h-[80vh] flex flex-col justify-center items-center px-2 sm:px-8 pt-24">
        {/* Scattered Info - mobile: stacked, desktop: absolute */}
        <div className="flex flex-col gap-1 w-full text-xs text-foreground/60 mt-2 sm:hidden">
          <div className="flex flex-row gap-1 justify-between">
            <GlitchText text={project.year || "YEAR"} />
            <GlitchText text={project.role} />
          </div>
          <div className="flex flex-row gap-1 justify-between">
            {project.features[1] && <GlitchText text={project.features[1]} />}
            {project.features[2] && <GlitchText text={project.features[2]} />}
          </div>
        </div>

        {/* Big Project Name */}
        <div className="relative w-full flex flex-col items-center justify-center select-none">
          <h1 className="text-[20vw] leading-none font-light tracking-tight bebas-neue-regular text-foreground/90 text-center z-10">
            <GlitchText text={project.name.toUpperCase()} />
          </h1>

          {/* Scattered Info - mobile: stacked, desktop: absolute */}
          <div className="flex text-center flex-col gap-1 text-xs text-foreground/60 mt-2 sm:hidden">
            <GlitchText text={project.features[0]} />
            <GlitchText text={project.technologies.join(" / ")} />
          </div>
          {/* Desktop: absolute scattered info */}
          <div className="hidden sm:block">
            <div className="absolute left-2 top-4 text-xs text-foreground/60 uppercase tracking-widest z-20 max-w-[40vw]">
              <GlitchText text={project.features[0]} />
            </div>
            <div className="absolute left-2 bottom-4 text-xs text-foreground/60 uppercase tracking-widest z-20 max-w-[40vw]">
              <GlitchText text={project.technologies.join(" / ")} />
            </div>
            <div className="absolute right-2 top-4 text-xs text-foreground/60 uppercase tracking-widest z-20 max-w-[40vw] text-right">
              <GlitchText text={project.year || "YEAR"} />
            </div>
            <div className="absolute right-2 bottom-4 text-xs text-foreground/60 uppercase tracking-widest z-20 max-w-[40vw] text-right">
              <GlitchText text={project.role} />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/4 text-xs tracking-widest z-20 max-w-[60vw] text-center">
              <GlitchText text={project.features[1] || ""} />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-1/4 text-xs tracking-widest z-20 max-w-[60vw] text-center">
              <GlitchText text={project.features[2] || ""} />
            </div>
          </div>
        </div>
      </section>

      {/* Large Description Section */}
      <section className="w-full flex flex-col items-center justify-center py-8 px-8">
        {/* Showcase image with offset rectangle */}
        <div className="relative flex justify-center items-center mb-24">
          {/* Offset rectangle behind */}
          <div
            className="absolute top-4 left-4 w-full h-full bg-primary"
            style={{
              maxWidth: "40rem",
              height: "16vw",
              minHeight: 180,
              zIndex: 0,
            }}
          />
          {/* Glitch effect overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none opacity-60">
            <div className="w-full h-full glitch" />
          </div>
          {/* Showcase image */}
          <img
            src={project.showcaseImage}
            alt={project.name}
            className="w-full max-w-3xl h-[16vw] min-h-[180px] object-cover select-none"
            style={{ zIndex: 1 }}
            draggable={false}
          />
        </div>
        <div className="max-w-7xl w-full text-center text-[clamp(1rem,2vw,2.5rem)] tracking-wide leading-relaxed">
          <GlitchText text={project.description} />
        </div>
      </section>

      {/* Gallery Section with Marquee */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="w-full flex flex-col items-center justify-center py-8 sm:py-16">
          <div className="w-full max-w-7xl mb-6 flex items-center justify-center">
            <StructureBar left="SYS/IMG_STREAM" right="DATA FEED // LIVE" />
          </div>
          {/* Marquee */}
          <div className="relative w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {project.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="mx-4 inline-block relative group"
                  style={{ width: 320, height: 180 }}
                >
                  {/* Glitch effect overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none opacity-60 group-hover:opacity-100 transition-all">
                    <div className="w-full h-full glitch" />
                  </div>
                  <img
                    src={img.image}
                    alt="Gallery"
                    className="w-full h-full object-cover bg-black"
                    draggable={false}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </section>
      )}

      <Button
        className="fixed bottom-0 right-0 text-lg px-8 py-6"
        onClick={() => window.open(project.externalLink, "_blank")}
      >
        <GlitchText text="visit [↗]" />
      </Button>
    </>
  );
}
