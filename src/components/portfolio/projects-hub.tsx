"use client";

import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { projects } from "@/generated/prisma/client";
import { cn } from "@/lib/utils";

type Project = projects;

function extractUnique(
  items: Project[],
  getter: (p: Project) => string | null | undefined,
): string[] {
  const set = new Set<string>();
  for (const p of items) {
    const val = getter(p);
    if (val?.trim()) set.add(val.trim());
  }
  return Array.from(set).sort();
}

function extractSkills(items: Project[]): string[] {
  const set = new Set<string>();
  for (const p of items) {
    for (const t of p.techStack ?? []) {
      if (t?.trim()) set.add(t.trim());
    }
  }
  return Array.from(set).sort();
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 font-mono text-xs transition-all duration-200",
        active
          ? "bg-purple-500/20 border-purple-500/40 text-purple-300"
          : "bg-white/5 border-white/10 text-muted-foreground hover:border-purple-500/30 hover:text-purple-300",
      )}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "glass-card group flex h-full flex-col rounded-xl overflow-hidden",
        "transition-all duration-300 hover:-translate-y-1",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <h3 className="font-display text-lg font-semibold group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.tagline}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {(project.platform || project.projectType) && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300/80">
              {project.platform ?? project.projectType}
            </span>
          )}
          {project.techStack?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300/80"
            >
              {tech}
            </span>
          ))}
          {(project.techStack?.length ?? 0) > 3 && (
            <span className="text-xs text-muted-foreground">
              +{(project.techStack?.length ?? 0) - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsHub({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [activePlatforms, setActivePlatforms] = useState<Set<string>>(
    new Set(),
  );
  const [activeSkills, setActiveSkills] = useState<Set<string>>(new Set());

  const platforms = useMemo(
    () =>
      extractUnique(projects, (p) => p.platform ?? p.projectType ?? p.industry),
    [projects],
  );

  const skills = useMemo(() => extractSkills(projects), [projects]);

  const filtered = useMemo(() => {
    const sorted = [...projects].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    return sorted.filter((p) => {
      if (query.trim()) {
        const q = query.toLowerCase();
        const haystack = [
          p.title,
          p.tagline,
          ...(p.techStack ?? []),
          p.industry,
          p.platform,
          p.projectType,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      if (activePlatforms.size > 0) {
        const pPlatform = (
          p.platform ??
          p.projectType ??
          p.industry ??
          ""
        ).trim();
        if (!activePlatforms.has(pPlatform)) return false;
      }

      if (activeSkills.size > 0) {
        const pSkills = new Set((p.techStack ?? []).map((s) => s.trim()));
        const hasAny = Array.from(activeSkills).some((s) => pSkills.has(s));
        if (!hasAny) return false;
      }

      return true;
    });
  }, [projects, query, activePlatforms, activeSkills]);

  const togglePlatform = (p: string) => {
    setActivePlatforms((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p);
      else next.add(p);
      return next;
    });
  };

  const toggleSkill = (s: string) => {
    setActiveSkills((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next;
    });
  };

  const hasActiveFilters =
    query.trim() || activePlatforms.size > 0 || activeSkills.size > 0;

  const clearAll = () => {
    setQuery("");
    setActivePlatforms(new Set());
    setActiveSkills(new Set());
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-purple-500/10 px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
            Portfolio
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold gradient-text md:text-5xl">
            Projects
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A curated collection of games, interactive experiences, and
            technical projects.
          </p>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="border-b border-purple-500/10 px-5 py-6">
        <div className="mx-auto max-w-5xl space-y-5">
          {/* Search Bar */}
          <div className="relative rounded-lg bg-white/5 border border-purple-500/20 focus-within:border-purple-500/40 focus-within:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-purple-400/60" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-lg bg-transparent py-2.5 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Platform Filters */}
          {platforms.length > 0 && (
            <div>
              <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Platform
              </p>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <FilterPill
                    key={p}
                    label={p}
                    active={activePlatforms.has(p)}
                    onClick={() => togglePlatform(p)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Skill Filters */}
          {skills.length > 0 && (
            <div>
              <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <FilterPill
                    key={s}
                    label={s}
                    active={activeSkills.has(s)}
                    onClick={() => toggleSkill(s)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Active filter indicator */}
          {hasActiveFilters && (
            <div className="flex items-center gap-3">
              <p className="font-mono text-xs text-muted-foreground/60">
                {filtered.length} project{filtered.length !== 1 ? "s" : ""}{" "}
                found
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="font-mono text-xs text-purple-400 hover:text-purple-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Project Grid */}
      <div className="px-5 py-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="font-mono text-lg text-muted-foreground">
                No projects match your filters
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="gradient-btn mt-4 text-sm"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
