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
  return {
    title: project.title,
    description: project.excerpt,
    openGraph: { title: project.title, description: project.excerpt, images: [project.cover] },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32">
      <header className="mx-auto max-w-3xl text-center">
        <ProjectMeta project={project} />
        <h1 className="mt-6 font-display text-4xl font-light md:text-5xl">{project.title}</h1>
        <p className="mt-8 text-base leading-relaxed text-ink-soft">{project.excerpt}</p>
        <p className="label mt-6 text-muted">
          {project.scope.join("  ·  ")}
          {project.areaSqft ? `  ·  ${project.areaSqft.toLocaleString()} sqft` : ""}
        </p>
      </header>

      <div className="relative mt-16 aspect-[16/9] overflow-hidden bg-bone-deep">
        <Image
          src={assetPath(project.cover)}
          alt={`${project.title}, ${project.location}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto mt-16 max-w-2xl space-y-6 text-base leading-relaxed text-ink-soft">
        {project.body.map((para) => (
          <p key={para.slice(0, 32)}>{para}</p>
        ))}
      </div>

      {project.gallery.length > 1 && (
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {project.gallery.slice(1).map((src) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden bg-bone-deep">
              <Image
                src={assetPath(src)}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <Link href="/projects" className="label mt-20 inline-block border-b border-copper pb-1 text-copper">
        All projects
      </Link>
    </article>
  );
}
