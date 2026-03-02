import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { prisma } from "@/lib/prisma";

// Generate at request time so build doesn't require a database connection
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let projects: { slug: string; updatedAt: Date }[] = [];
  try {
    [projects] = await Promise.all([
      prisma.projects.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true },
        orderBy: { updatedAt: "desc" },
      }),
    ]);
  } catch {
    // DB unavailable (e.g. at build time); sitemap will only include static entries
  }

  const projectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  return [...staticEntries, ...projectEntries];
}
