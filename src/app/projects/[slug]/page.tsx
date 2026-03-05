import { ArrowLeft, Earth, Github } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DitherSplitter from "@/components/global/dither-splitter";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import type { projects } from "@/generated/prisma/client";
import { SITE_URL } from "@/lib/constants";
import { server } from "@/lib/elysia/server";
import {
  PERSON_SCHEMA_ID,
  safeJsonLdStringify,
  toAbsoluteUrl,
  WEBSITE_SCHEMA_ID,
} from "@/lib/json-ld";
import { cn } from "@/lib/utils";

type Project = projects;

export const revalidate = 3600;

function convertToEmbed(url: string): string {
  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/,
  );
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

  return url;
}

function CaseStudySection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("p-5 border-b border-purple-500/10 last:border-b-0", className)}>
      <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 mb-1">
        Case Study
      </h2>
      <h3 className="font-mono text-sm font-light uppercase tracking-wider text-muted-foreground mb-4">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-muted-foreground space-y-3">
        {children}
      </div>
    </section>
  );
}

function Paragraphs({ text }: { text: string }) {
  const blocks = text.trim().split(/\n\n+/).filter(Boolean);
  return (
    <>
      {blocks.map((block) => {
        const trimmed = block.trim();
        return <p key={trimmed}>{trimmed}</p>;
      })}
    </>
  );
}

function BulletList({ text }: { text: string }) {
  const items = text.trim().split(/\n/).filter(Boolean);
  return (
    <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
      {items.map((item) => {
        const text = item.replace(/^[-•]\s*/, "").trim();
        return <li key={text}>{text}</li>;
      })}
    </ul>
  );
}

function TagList({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300/80"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function toIsoDate(value: unknown): string | undefined {
  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value === "string") {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }
  }

  return undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const raw = await server.project({ slug }).get();
  const project = (
    raw && typeof raw === "object" && "data" in raw
      ? (raw as { data: Project | null }).data
      : raw
  ) as Project | null;
  if (!project) return { title: "Project not found" };
  const title = project.seoTitle ?? project.title;
  const description = project.seoDescription ?? project.tagline;
  const canonical = `${SITE_URL}/projects/${slug}`;
  return {
    title,
    description,
    keywords: project.keywords?.length ? project.keywords : undefined,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: project.coverImage
        ? [
            {
              url: project.coverImage,
              alt: project.title,
              width: 1200,
              height: 630,
            },
          ]
        : undefined,
      siteName: "Shoaib Riaz",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.coverImage ? [project.coverImage] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const raw = await server.project({ slug }).get();
  const project = (
    raw && typeof raw === "object" && "data" in raw
      ? (raw as { data: Project | null }).data
      : raw
  ) as Project | null;

  if (!project) notFound();

  const metaItems: string[] = [];
  if (project.industry) metaItems.push(project.industry);
  metaItems.push(project.role);
  if (project.durationInMonths != null)
    metaItems.push(
      `${project.durationInMonths} month${project.durationInMonths !== 1 ? "s" : ""}`,
    );
  if (project.teamSize != null) metaItems.push(`Team of ${project.teamSize}`);

  const executionItems =
    project.execution?.trim().split(/\n/).filter(Boolean) ?? [];
  const canonical = `${SITE_URL}/projects/${slug}`;
  const title = project.seoTitle ?? project.title;
  const description = project.seoDescription ?? project.tagline;
  const publishedAt = toIsoDate(project.createdAt);
  const updatedAt = toIsoDate(project.updatedAt);
  const imageUrl = toAbsoluteUrl(project.coverImage);
  const aboutItems = [project.industry, project.projectType]
    .filter((value): value is string => Boolean(value))
    .map((value) => ({ "@type": "Thing", name: value }));
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${SITE_URL}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: canonical,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: title,
        description,
        url: canonical,
        mainEntityOfPage: canonical,
        isPartOf: {
          "@id": WEBSITE_SCHEMA_ID,
        },
        image: [imageUrl],
        author: { "@id": PERSON_SCHEMA_ID },
        publisher: { "@id": PERSON_SCHEMA_ID },
        ...(publishedAt ? { datePublished: publishedAt } : {}),
        ...(updatedAt ? { dateModified: updatedAt } : {}),
        ...(project.keywords?.length
          ? { keywords: project.keywords.join(", ") }
          : {}),
        ...(aboutItems.length ? { about: aboutItems } : {}),
      },
    ],
  };

  return (
    <article className="min-h-screen">
      <script type="application/ld+json">
        {safeJsonLdStringify(projectJsonLd)}
      </script>

      {/* Cover Image */}
      <MaxWidthWrapper parentBorder="border-none">
        <header className="relative w-full">
          <Image
            priority
            width={1000}
            height={1000}
            alt={project.title}
            className="object-cover"
            src={project.coverImage}
          />
        </header>
      </MaxWidthWrapper>

      {/* Title Block */}
      <MaxWidthWrapper parentBorder="border-y" className="border-purple-500/10">
        <div className="mx-auto max-w-3xl border-0 p-5 w-full flex flex-col items-center justify-center">
          <p className="w-full text-left font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
            Project
          </p>
          <h1 className="mt-1 w-full text-left font-display text-4xl md:text-5xl font-bold gradient-text">
            {project.title}
          </h1>
          <p className="mt-2 w-full text-left text-xl text-muted-foreground">
            {project.tagline}
          </p>
          {metaItems.length > 0 && (
            <p className="mt-3 w-full text-left font-mono text-xs text-muted-foreground md:text-sm">
              {metaItems.join(" · ")}
            </p>
          )}
        </div>
      </MaxWidthWrapper>

      <DitherSplitter />

      {/* Back Link */}
      <MaxWidthWrapper parentBorder="border-b" className="border-purple-500/10" showPlusIcons={true}>
        <div className="mx-auto max-w-3xl border-0 p-5 flex items-center justify-start">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="size-4 mr-2.5" /> Back to projects
          </Link>
        </div>
      </MaxWidthWrapper>

      {/* Video Section */}
      {project.videoUrl && (
        <MaxWidthWrapper parentBorder="border-b" className="border-purple-500/10">
          <div className="mx-auto max-w-3xl border-0 p-5">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 mb-1">
              Media
            </h2>
            <h3 className="font-mono text-sm font-light uppercase tracking-wider text-muted-foreground mb-4">
              Video
            </h3>
            <div className="aspect-video w-full rounded-xl border border-purple-500/20 overflow-hidden glow-sm">
              <iframe
                src={convertToEmbed(project.videoUrl)}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${project.title} video`}
              />
            </div>
          </div>
        </MaxWidthWrapper>
      )}

      {/* WebGL Demo */}
      {project.webglUrl && (
        <MaxWidthWrapper parentBorder="border-b" className="border-purple-500/10">
          <div className="mx-auto max-w-3xl border-0 p-5">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 mb-1">
              Interactive
            </h2>
            <h3 className="font-mono text-sm font-light uppercase tracking-wider text-muted-foreground mb-4">
              Playable Demo
            </h3>
            <div className="aspect-video w-full rounded-xl border border-purple-500/20 overflow-hidden glow-md">
              <iframe
                src={project.webglUrl}
                className="w-full h-full border-0"
                allowFullScreen
                title={`${project.title} playable demo`}
              />
            </div>
          </div>
        </MaxWidthWrapper>
      )}

      {/* Case Study */}
      <MaxWidthWrapper parentBorder="border-none">
        <div className="mx-auto max-w-3xl border-0">
          <CaseStudySection title="Problem">
            <Paragraphs text={project.problem} />
          </CaseStudySection>
          {project.context?.trim() && (
            <CaseStudySection title="Context">
              <Paragraphs text={project.context} />
            </CaseStudySection>
          )}
          <CaseStudySection title="Strategy">
            <Paragraphs text={project.strategy} />
          </CaseStudySection>
          <CaseStudySection title="Architecture">
            <Paragraphs text={project.architecture} />
          </CaseStudySection>
          <CaseStudySection title="Execution">
            {executionItems.length > 1 ? (
              <BulletList text={project.execution} />
            ) : (
              <Paragraphs text={project.execution} />
            )}
          </CaseStudySection>
          {project.challenges?.trim() && (
            <CaseStudySection title="Challenges">
              <Paragraphs text={project.challenges} />
            </CaseStudySection>
          )}
          <CaseStudySection title="Solution">
            <Paragraphs text={project.solution} />
          </CaseStudySection>
          <CaseStudySection title="Measurable Impact">
            <Paragraphs text={project.measurableImpact} />
          </CaseStudySection>

          {/* Tech & Infrastructure */}
          <section className="border-b border-purple-500/10 p-5">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 mb-1">
              Stack
            </h2>
            <h3 className="font-mono text-sm font-light uppercase tracking-wider text-muted-foreground mb-4">
              Tech & Infrastructure
            </h3>
            <div className="space-y-4">
              {project.techStack?.length > 0 && (
                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-2">
                    Tech Stack
                  </p>
                  <TagList items={project.techStack} />
                </div>
              )}
              {project.infrastructure?.length > 0 && (
                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-2">
                    Infrastructure
                  </p>
                  <TagList items={project.infrastructure} />
                </div>
              )}
              {project.integrations?.length > 0 && (
                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-2">
                    Integrations
                  </p>
                  <TagList items={project.integrations} />
                </div>
              )}
            </div>
          </section>

          {/* Links */}
          {(project.demoUrl || project.repositoryUrl) && (
            <section className="w-full flex flex-wrap items-center justify-center p-5 gap-3 border-b border-purple-500/10">
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  className="gradient-btn inline-flex items-center gap-2 text-sm"
                >
                  <Earth className="size-4" />
                  Live Demo
                </Link>
              )}
              {project.repositoryUrl && (
                <Link
                  href={project.repositoryUrl}
                  className="gradient-btn inline-flex items-center gap-2 text-sm"
                >
                  <Github className="size-4" />
                  Repository
                </Link>
              )}
            </section>
          )}

          {/* Gallery Carousel */}
          {project.galleryImages?.length > 0 && (
            <section className="border-b border-purple-500/10 p-5">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 mb-1">
                Visuals
              </h2>
              <h3 className="font-mono text-sm font-light uppercase tracking-wider text-muted-foreground mb-4">
                Gallery
              </h3>
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border">
                {project.galleryImages.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-video min-w-[80%] sm:min-w-[60%] snap-center shrink-0 overflow-hidden rounded-lg border border-purple-500/10 bg-muted"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                      sizes="80vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </MaxWidthWrapper>

      <DitherSplitter />
    </article>
  );
}
