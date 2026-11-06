import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectMeta } from "@/components/ProjectGrid";
import { getProject, projects } from "@/content/projects";
import { assetPath } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const description = project.excerpt ?? `${project.category} interior by Flipwire Design.`;
  return {
    title: project.title,
    description,
    openGraph: { title: project.title, description, images: [project.cover] },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const alt = project.location ? `${project.title}, ${project.location}` : project.title;

  return (
    <article className="py-20 md:py-28">
      <header className="mx-auto max-w-3xl px-6 text-center">
        <ProjectMeta project={project} />
        <h1 className="mt-5 font-display text-4xl font-light md:text-5xl">{project.title}</h1>
        {project.excerpt && (
          <p className="mt-7 text-base leading-relaxed text-ink-soft">{project.excerpt}</p>
        )}
        <p className="label mt-6 text-muted">
          {project.scope.join("  ·  ")}
          {project.areaSqft ? `  ·  ${project.areaSqft.toLocaleString()} sqft` : ""}
        </p>
      </header>

      {/* The work carries the page, so the images run large and uncropped. */}
      <div className="mx-auto mt-14 max-w-[1400px] space-y-6 px-6 md:mt-20 md:space-y-10">
        {project.gallery.map((photo, i) => (
          <Image
            key={photo.src}
            src={assetPath(photo.src)}
            alt={alt}
            width={photo.width}
            height={photo.height}
            priority={i === 0}
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="h-auto w-full bg-bone-deep"
          />
        ))}
      </div>

      {project.body && project.body.length > 0 && (
        <div className="mx-auto mt-16 max-w-2xl space-y-6 px-6 text-base leading-relaxed text-ink-soft">
          {project.body.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
        </div>
      )}

      <div className="mx-auto mt-20 max-w-3xl px-6">
        <Link href="/projects" className="label inline-block border-b border-clay pb-1 text-clay-ink">
          All projects
        </Link>
      </div>
    </article>
  );
}
