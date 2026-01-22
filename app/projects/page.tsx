import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer",
    description:
      "An AI-powered system that reviews source code and suggests optimizations using LLMs.",
    tech: ["Next.js", "TypeScript", "OpenAI"],
    image: "/projects/ml-dashboard.png",
  },
  {
    id: "ml-dashboard",
    title: "ML Experiment Dashboard",
    description:
      "A dashboard to track machine learning experiments and visualize metrics.",
    tech: ["React", "D3.js", "Python"],
    image: "/projects/ml-dashboard.png",
  },
  {
    id: "physics-engine",
    title: "Physics Simulation Engine",
    description:
      "Browser-based physics simulation for oscillations and particle systems.",
    tech: ["Three.js", "WebGL", "Framer Motion"],
    image: "/projects/physics-engine.png",
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto mb-14">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Projects</h1>
        <p className="mt-4 text-neutral-400 max-w-2xl">
          Selected projects focused on AI, systems, and engineering depth.
        </p>
      </div>

      <div
        className="
          max-w-7xl mx-auto
          grid gap-8
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
