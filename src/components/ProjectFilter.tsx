"use client";

import { useState } from "react";
import { ProjectGrid } from "./ProjectGrid";
import type { Category, Project } from "@/content/projects";

/**
 * Client-side filter. The full list is still rendered into the HTML on first
 * paint, so crawlers see every project regardless of the selected tab.
 */
export function ProjectFilter({
  projects,
  categories,
}: {
  projects: Project[];
  categories: Category[];
}) {
  const [active, setActive] = useState<Category | "All">("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  const tabs: (Category | "All")[] = ["All", ...categories];

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter projects by property type"
        className="mb-16 flex flex-wrap justify-center gap-x-8 gap-y-3"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={`label pb-1 transition-colors ${
              active === tab
                ? "border-b border-clay text-clay-ink"
                : "border-b border-transparent text-muted hover:text-ink"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <ProjectGrid projects={shown} />
    </>
  );
}
