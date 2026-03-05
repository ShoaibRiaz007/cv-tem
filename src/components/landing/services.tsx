import type { LucideIcon } from "lucide-react";
import { Gamepad2, Glasses, Gauge, Users } from "lucide-react";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { services } from "@/lib/constants";
import DitherSplitter from "../global/dither-splitter";

const serviceIcons: Record<string, LucideIcon> = {
  Gamepad2,
  Glasses,
  Gauge,
  Users,
};

const Services = () => {
  return (
    <>
      <MaxWidthWrapper parentBorder="border-b">
        <div
          id="services"
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="flex flex-col gap-2 p-6 border-b border-purple-500/10 w-full">
            <span className="text-xs font-semibold uppercase tracking-[4px] text-purple-400">What I Offer</span>
            <h2 className="font-display text-3xl font-bold gradient-text">Services</h2>
          </div>
          <div className="flex flex-col gap-4 p-5">
            {services.slice(0, 2).map((service, index) => {
              const Icon = service.icon ? serviceIcons[service.icon] : null;
              return (
                <article
                  key={service.id}
                  className="glass-card rounded-xl p-5 transition-all duration-300"
                >
                  <div className="w-full flex items-center justify-center gap-5">
                    <div className="size-[45px] p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg shrink-0 flex items-center justify-center">
                      {Icon ? (
                        <Icon className="size-full text-purple-400" />
                      ) : null}
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <span className="w-full text-left font-mono text-xs text-muted-foreground tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="w-full text-left mt-1.5 text-lg font-semibold tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {service.description}&nbsp;This includes:
                  </p>
                  <ul className="mt-4 flex flex-col gap-1.5 list-disc list-inside">
                    {service.includes.map((item) => (
                      <li key={item} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
      <DitherSplitter />
      <MaxWidthWrapper parentBorder="border-b">
        <div className="w-full flex flex-col gap-4 p-5">
          {services.slice(2, 4).map((service) => {
            const Icon = service.icon ? serviceIcons[service.icon] : null;

            return (
              <article
                key={service.id}
                className="glass-card rounded-xl p-5 transition-all duration-300"
              >
                <div className="w-full flex items-center justify-center gap-5">
                  <div className="size-[45px] p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg shrink-0 flex items-center justify-center">
                    {Icon ? (
                      <Icon className="size-full text-purple-400" />
                    ) : null}
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <span className="w-full text-left font-mono text-xs text-muted-foreground tabular-nums">
                      {String(service.id).padStart(2, "0")}
                    </span>
                    <h3 className="w-full text-left mt-1.5 text-lg font-semibold tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                  {service.description}&nbsp;This includes:
                </p>
                <ul className="mt-4 flex flex-col gap-1.5 list-disc list-inside">
                  {service.includes.map((item) => (
                    <li key={item} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Services;
