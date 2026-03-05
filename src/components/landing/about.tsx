import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import type { profile } from "@/generated/prisma/client";
import { server } from "@/lib/elysia/server";

const FALLBACK_SUMMARY = `I am a Senior Game Engineer specializing in Unity and Unreal Engine, with deep expertise in building immersive gaming experiences across mobile, PC, and console platforms.

Over the years, I have led the design and delivery of production-grade games and interactive applications spanning AR/VR, metaverse, and traditional gaming. My work covers gameplay programming, rendering optimization, physics systems, and cross-platform deployment.

I approach every project with a craftsman's mindset: technical precision, creative problem-solving, and systems built to perform under real-world constraints.`;

const About = async () => {
  const res = await server.profile.get();
  const profileData = Array.isArray(res)
    ? (res[0] as profile | undefined)
    : (res as { data?: profile | null })?.data;

  const summary = profileData?.summary ?? FALLBACK_SUMMARY;
  const paragraphs = summary.split(/\n\n+/).filter(Boolean);

  return (
    <MaxWidthWrapper parentBorder="border-b">
      <div className="flex flex-col gap-2 p-6 border-b border-purple-500/10">
        <span className="text-xs font-semibold uppercase tracking-[4px] text-purple-400">Background</span>
        <h2 className="font-display text-3xl font-bold gradient-text">About Me</h2>
      </div>
      <div
        id="about"
        className="w-full flex flex-col items-center justify-center gap-5 p-5 text-sm"
      >
        {paragraphs.map((paragraph, i) => (
          <span key={i} className="w-full text-left leading-relaxed text-muted-foreground">
            {paragraph}
          </span>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default About;
