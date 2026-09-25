import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { assetPath } from "@/lib/site";

/**
 * The meta line under each card. Only the fields that are actually known are
 * printed, so a project catalogued from photography alone shows its category
 * and nothing invented.
 */
export function ProjectMeta({ project }: { project: Project }) {
  const parts = [
    project.category,
    project.unitType,
    project.location,
    project.year?.toString(),
  ].filter(Boolean);

  return <p className="label text-muted">{parts.join("  |  ")}</p>;
}

/**
 * Grid card: image, title, meta. No description — the site is image-led, and a
 * paragraph under every thumbnail competes with the photography for attention.
 * Any writing lives on the project page.
 */
export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article>
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="media-zoom relative aspect-[4/5] overflow-hidden bg-bone-deep">
          <Image
            src={assetPath(project.cover)}
            alt={project.location ? `${project.title}, ${project.location}` : project.title}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <h3 className="label mt-5 group-hover:text-clay-ink">{project.title}</h3>
        <div className="mt-2">
          <ProjectMeta project={project} />
        </div>
      </Link>
    </article>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <p className="py-20 text-center text-sm text-ink-soft">No projects in this category yet.</p>;
  }

  return (
    <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} priority={i < 3} />
      ))}
    </div>
  );
}
