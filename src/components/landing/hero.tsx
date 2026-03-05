import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import type { profile } from "@/generated/prisma/client";
import { server } from "@/lib/elysia/server";
import Dither from "../ui/dither";

const Hero = async () => {
  const res = await server.profile.get();
  const profileData = Array.isArray(res)
    ? (res[0] as profile | undefined)
    : (res as { data?: profile | null })?.data;

  return (
    <MaxWidthWrapper parentBorder="border-b">
      <div className="w-full relative min-h-screen">
        <div className="absolute inset-0">
          <Dither
            waveSpeed={0.05}
            waveAmplitude={0.3}
            colorA="#0a0515"
            colorB="#a855f7"
            disableAnimation={false}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-28">
          <div className="w-full max-w-2/3 mx-auto flex flex-col items-center justify-center gap-6 text-center pointer-events-auto">
            {profileData?.picture && (
              <Image
                src={profileData.picture}
                alt={profileData.name ?? "Profile"}
                width={112}
                height={112}
                className="size-28 rounded-full border-2 border-purple-500/40 object-cover shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              />
            )}
            <p className="px-5 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 border border-purple-500/30 bg-purple-500/10 text-purple-300">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
              {profileData?.title ?? "Senior Game Engineer | Unity | Unreal"}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight gradient-text">
              {profileData?.name ?? "Shoaib Riaz"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl">
              {profileData?.shortBio ??
                "Crafting Immersive Gaming Experiences That Captivate Players."}
            </p>
            <Link
              href="#contact"
              className="gradient-btn inline-flex items-center px-8 py-3.5 rounded-full text-base font-semibold mt-2"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-purple-500/10">
          <div className="grid grid-cols-3 divide-x divide-purple-500/10">
            <div className="p-5">
              <span className="text-[11px] uppercase tracking-[2px] text-purple-300/60">
                Location
              </span>
              <p className="mt-1 text-sm font-medium text-foreground">
                {profileData?.location ?? "Lahore, Pakistan"}
              </p>
            </div>
            <div className="p-5">
              <span className="text-[11px] uppercase tracking-[2px] text-purple-300/60">
                Specialization
              </span>
              <p className="mt-1 text-sm font-medium text-foreground">
                Unity & Unreal
              </p>
            </div>
            <div className="p-5">
              <span className="text-[11px] uppercase tracking-[2px] text-purple-300/60">
                Experience
              </span>
              <p className="mt-1 text-sm font-medium text-foreground">
                5+ Years
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
