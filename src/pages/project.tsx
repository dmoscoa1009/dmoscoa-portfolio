import { useParams, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import GlitchText from "@/components/custom/glitch-text";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return null;

  return (
    <>
      <div
        className="h-screen relative"
        style={{
          backgroundImage: `url(${project.showcaseImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute bottom-0 right-0 bg-primary text-primary-foreground h-fit"
          style={{ width: "clamp(400px, 33vw, 600px)" }}
        >
          <div className="relative flex flex-col justify-center p-6 gap-2 h-full">
            <Button
              variant="ghost"
              onClick={() => navigate("/projects")}
              className="w-fit px-0 transition-colors"
            >
              Back to Projects
            </Button>
            <h1 className="text-4xl font-light tracking-wider bebas-neue-regular mb-2">
              <GlitchText text={project.name} />
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-4">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.role}</span>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              {project.description}
            </p>
            {project.externalLink && (
              <Button
                variant="inverted"
                className="absolute bottom-0 right-0 uppercase w-fit"
                onClick={() =>
                  window.open(project.externalLink || "", "_blank")
                }
              >
                Visit [↗]
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="w-full flex flex-col p-32 justify-center gap-16">
        <div className="flex flex-col gap-2">
          <span className="text-xs tracking-widest ">
            {`[SYS/OVERVIEW] :: PROJECT.${project.name.toUpperCase()} // STATUS: ACTIVE`}
          </span>
          <h2 className="text-9xl font-light tracking-wider bebas-neue-regular relative">
            <GlitchText text="OVERVIEW" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-accent/30 text-5xl select-none animate-pulse pointer-events-none">
              ░▒▓
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-transparent my-2 rounded-full" />
        </div>
        <div className="flex flex-row gap-12 items-start">
          {/* Left: Info + small image */}
          <div className="flex flex-col gap-8 w-1/2">
            <div className="flex flex-col gap-4 text-xs tracking-widest  text-foreground/80">
              <div className="mb-1 font-semibold ">// ROLE</div>
              <div className="mb-2">{project.role}</div>
              <div className="mb-1 font-semibold ">// STACK</div>
              <div className="mb-2">{project.technologies.join(" / ")}</div>
              <div className="mb-1 font-semibold ">// FEATURES</div>
              <div className="mb-2">{project.features.join(" / ")}</div>
              <div className="mt-4  text-[10px]">
                [ID: 0x{project.id}] // [SYS: OK]
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Galery */}
      <section className="w-full flex flex-col p-32 justify-center gap-12 min-h-screen">
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-xs tracking-widest  font-mono">
            {`[SYS/GALLERY] :: PROJECT.${project.name.toUpperCase()} // MEDIA.LOG`}
          </span>
          <h2 className="text-9xl font-light tracking-wider bebas-neue-regular relative">
            <GlitchText text="GALLERY" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-accent/20 text-4xl select-none animate-pulse pointer-events-none">
              ░▒▓
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent my-2 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.galleryImages?.map((galleryImage) => (
            <div className="flex flex-col gap-2">
              <span className="text-xs mb-1">[{galleryImage.name}]</span>
              <div className="relative overflow-hidden">
                <LazyLoadImage
                  src={galleryImage.image}
                  alt={galleryImage.name}
                  className="w-full h-auto object-cover"
                  effect="blur"
                  threshold={100}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
