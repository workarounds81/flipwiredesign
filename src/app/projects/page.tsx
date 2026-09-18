import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Residential, hospitality and commercial interiors by Flipwire Design.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-[1680px] px-6 py-24 md:px-10 md:py-32">
      <h1 className="label mb-16 text-center text-muted">Projects</h1>
      <ProjectGrid projects={projects} />
    </section>
  );
}
