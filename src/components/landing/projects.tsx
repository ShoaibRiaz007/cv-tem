import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import type { projects } from "@/generated/prisma/client";
import { server } from "@/lib/elysia/server";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: projects }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex col-span-1 h-full shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm",
        "transition-all duration-300 hover:border-border/80 hover:shadow-lg hover:-translate-y-1",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-mono text-lg font-semibold text-foreground transition-colors group-hover:text-foreground/90">
          {project.title}
        </h3>
        <p className="line-clamp-2 font-mono text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
          {(project.platform || project.projectType) && (
            <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-xs text-emerald-400">
              {project.platform ?? project.projectType}
            </span>
          )}
          {project.techStack?.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded border border-border/60 bg-muted/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

const Projects = async () => {
  const res = await server.project.get();
  const rawProjects = Array.isArray(res)
    ? res
    : (res as { data?: projects[] })?.data;
  const allProjects = rawProjects ?? [];

  const featured = allProjects.filter((p) => p.featured);
  const displayProjects =
    featured.length > 0 ? featured.slice(0, 3) : allProjects.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-20">
      <MaxWidthWrapper parentBorder="border-b">
        <div className="w-full border-b p-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Portfolio
          </p>
          <h2 className="mt-1 font-mono text-2xl font-light tracking-tight text-foreground">
            Featured Projects
          </h2>
        </div>
        <div className="relative grid w-full grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 p-5">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {allProjects.length > 3 && (
          <div className="flex items-center justify-center border-t p-5">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View All Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default Projects;
