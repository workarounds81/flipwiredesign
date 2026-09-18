import Link from "next/link";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="mx-auto max-w-[1680px] px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-36">
        {/* TODO: replace with the studio's own line. This is a neutral draft. */}
        <h1 className="max-w-4xl font-display text-4xl font-light leading-[1.15] md:text-6xl">
          Homes and spaces in Singapore, built around the carpentry that makes them work.
        </h1>
        <p className="mt-10 max-w-xl text-base leading-relaxed text-ink-soft">
          {site.description}
        </p>
        <Link href="/projects" className="label mt-10 inline-block border-b border-copper pb-1 text-copper">
          View projects
        </Link>
      </section>

      <section className="mx-auto max-w-[1680px] px-6 md:px-10">
        <h2 className="label mb-16 text-center text-muted">Selected work</h2>
        <ProjectGrid projects={featured} />
      </section>
    </>
  );
}
