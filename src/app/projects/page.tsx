import type { Metadata } from "next";
import { ProjectFilter } from "@/components/ProjectFilter";
import { activeCategories, projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "HDB, condominium and commercial interiors by Flipwire Design — renovation, built-in carpentry and fit-out in Singapore.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32">
      <h1 className="label mb-12 text-center text-muted">Projects</h1>
      <ProjectFilter projects={projects} categories={activeCategories()} />
    </section>
  );
}
