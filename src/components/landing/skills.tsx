import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { techStack } from "@/lib/constants";
import { Marquee } from "../ui/marquee";

const Skills = () => {
  return (
    <MaxWidthWrapper parentBorder="border-b">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col gap-2 p-6 border-b border-purple-500/10">
          <span className="text-xs font-semibold uppercase tracking-[4px] text-purple-400">Tech Stack</span>
          <h2 className="font-display text-3xl font-bold gradient-text">Skills</h2>
        </div>
        <div className="relative w-full py-6">
          <Marquee>
            {techStack.map((skill) => (
              <span
                key={skill.name}
                className="mx-2.5 rounded-full border border-purple-500/20 bg-purple-500/5 px-5 py-2.5 font-mono text-sm text-foreground/80 whitespace-nowrap hover:border-purple-500/40 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300"
              >
                {skill.name}
              </span>
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Skills;
