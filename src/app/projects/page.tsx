import type { Metadata } from "next";
import ProjectsHub from "@/components/portfolio/projects-hub";
import type { projects } from "@/generated/prisma/client";
import { SITE_URL } from "@/lib/constants";
import { server } from "@/lib/elysia/server";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Portfolio — Projects",
  description:
    "Browse the full portfolio of games, AR/VR experiences, and interactive projects by Shoaib Riaz.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: "Portfolio — Projects",
    description:
      "Browse the full portfolio of games, AR/VR experiences, and interactive projects by Shoaib Riaz.",
    url: `${SITE_URL}/projects`,
    siteName: "Shoaib Riaz",
  },
};

export default async function ProjectsPage() {
  const res = await server.project.get();
  const rawProjects = Array.isArray(res)
    ? res
    : (res as { data?: projects[] })?.data;
  const projects = rawProjects ?? [];

  return <ProjectsHub projects={projects} />;
}
