import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import type { education } from "@/generated/prisma/client";
import { server } from "@/lib/elysia/server";

function EducationCard({ entry }: { entry: education }) {
  return (
    <div className="flex flex-col gap-1 glass-card rounded-xl p-5">
      <h3 className="font-mono text-base font-semibold text-foreground">
        {entry.institution}
      </h3>
      <p className="font-mono text-sm text-muted-foreground">
        {entry.degree}
        {entry.field && ` — ${entry.field}`}
      </p>
      {entry.graduationDate && (
        <span className="mt-1 w-fit rounded border border-purple-500/20 bg-purple-500/5 px-2 py-0.5 font-mono text-xs text-purple-300">
          {entry.graduationDate}
        </span>
      )}
    </div>
  );
}

const Education = async () => {
  const res = await server.education.get();
  const rawEducation = Array.isArray(res)
    ? res
    : (res as { data?: education[] })?.data;
  const educationList = rawEducation ?? [];

  return (
    <section id="education" className="scroll-mt-20">
      <MaxWidthWrapper parentBorder="border-b">
        <div className="flex flex-col gap-2 p-6 border-b border-purple-500/10">
          <span className="text-xs font-semibold uppercase tracking-[4px] text-purple-400">Academic Background</span>
          <h2 className="font-display text-3xl font-bold gradient-text">Education</h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 p-5 md:grid-cols-2">
          {educationList.map((entry) => (
            <EducationCard key={entry.id} entry={entry} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Education;
