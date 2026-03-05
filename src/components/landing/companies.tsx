import MaxWidthWrapper from "@/components/ui/max-width-wrapper";

const companies = [
  { name: "UserWise", period: "2026" },
  { name: "InvoZone", period: "2022-2025" },
  { name: "InvoGames", period: "2022-2025" },
  { name: "OZI Technology", period: "2022" },
  { name: "Survival Tech Valley", period: "2020-2021" },
];

const Companies = () => {
  return (
    <MaxWidthWrapper parentBorder="border-b">
      <div className="w-full flex flex-col gap-3 p-5">
        <span className="text-[11px] font-semibold uppercase tracking-[3px] text-purple-400/60">
          Trusted By
        </span>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-baseline gap-2 group"
            >
              <span className="text-lg font-display font-light text-foreground/80 hover:text-purple-400 transition-colors">
                {company.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {company.period}
              </span>
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>
    </MaxWidthWrapper>
  );
};

export default Companies;
