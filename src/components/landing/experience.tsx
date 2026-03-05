import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import type { experiences } from "@/generated/prisma/client";
import { server } from "@/lib/elysia/server";

function ExperienceEntry({ entry }: { entry: experiences }) {
  return (
    <div className="relative pl-8 hover:bg-white/[0.02] transition-colors rounded-lg">
      <div className="absolute left-0 top-1.5 size-3 rounded-full border-2 border-purple-500 bg-purple-500/20" />
      <div className="absolute left-[5px] top-5 bottom-0 w-px bg-gradient-to-b from-purple-500/40 to-cyan-500/20" />

      <div className="flex flex-col gap-1 pb-10">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-mono text-base font-semibold text-foreground">
            {entry.role}
          </h3>
          <span className="font-mono text-xs text-muted-foreground">
            {entry.startDate} — {entry.endDate ?? "Present"}
          </span>
        </div>

        <p className="font-mono text-sm text-muted-foreground">
          {entry.company}
          {entry.location && ` · ${entry.location}`}
        </p>

        {entry.description && (
          <p className="mt-2 font-mono text-sm leading-relaxed text-foreground/90">
            {entry.description}
          </p>
        )}

        {entry.bullets.length > 0 && (
          <ul className="mt-2 flex flex-col gap-1.5">
            {entry.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-2 font-mono text-sm leading-relaxed text-foreground/80"
              >
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const Experience = async () => {
  const res = await server.experience.get();
  const rawExperiences = Array.isArray(res)
    ? res
    : (res as { data?: experiences[] })?.data;
  const experiences = rawExperiences ?? [];

  return (
    <section id="experience" className="scroll-mt-20">
      <MaxWidthWrapper parentBorder="border-b">
        <div className="flex flex-col gap-2 p-6 border-b border-purple-500/10">
          <span className="text-xs font-semibold uppercase tracking-[4px] text-purple-400">Career</span>
          <h2 className="font-display text-3xl font-bold gradient-text">Experience</h2>
        </div>
        <div className="relative p-5">
          {experiences.map((entry, i) => (
            <div key={entry.id} className="relative">
              <ExperienceEntry entry={entry} />
              {i === experiences.length - 1 && (
                <div className="absolute bottom-0 left-[5px] h-px w-0" />
              )}
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Experience;
