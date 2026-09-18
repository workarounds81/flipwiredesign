import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article>
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="media-zoom relative aspect-[4/5] overflow-hidden bg-bone-deep">
          <Image
            src={project.cover}
            alt={`${project.title}, ${project.location}`}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <h3 className="label mt-6 group-hover:text-copper">{project.title}</h3>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-soft">{project.excerpt}</p>
        <p className="label mt-4 text-muted">
          {project.discipline} &nbsp;|&nbsp; {project.location} &nbsp;|&nbsp; {project.year}
        </p>
      </Link>
    </article>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-x-8 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} priority={i < 3} />
      ))}
    </div>
  );
}
