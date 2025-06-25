import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import GlitchText from "@/components/custom/glitch-text";

export default function ManufacturingAppPage() {
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === "01");

  useEffect(() => {
    if (!project) {
      navigate("/projects");
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen w-full p-24 pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate("/projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Projects
            </button>
          </div>
          <h1 className="text-6xl font-light tracking-wider mb-4">
            <GlitchText text={project.name} />
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.role}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-4">Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-light mb-4">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                Real-time event tracking for clock-in/out, breaks, and
                production package scanning
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                Advanced efficiency calculations per worker, task, and
                department
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                Performance-based bonus system integration
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                Offline-first architecture for reliable operation in
                manufacturing environments
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                Real-time synchronization with backend systems
              </span>
            </li>
          </ul>
        </div>

        {/* Impact */}
        <div>
          <h2 className="text-2xl font-light mb-4">Business Impact</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                Improved production flow through data-driven insights
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                Enhanced worker motivation through transparent performance
                tracking
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                Optimized workforce allocation based on efficiency metrics
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                Reduced manual data entry and processing time
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
