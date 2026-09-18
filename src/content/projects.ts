export type Discipline = "Residential" | "Hospitality" | "Commercial";

export type Project = {
  slug: string;
  title: string;
  discipline: Discipline;
  location: string;
  year: number;
  excerpt: string;
  body: string[];
  /** Paths under /public, or absolute CDN URLs once the DAM is wired up. */
  cover: string;
  gallery: string[];
  /** Feature on the home page "Latest work" grid. */
  featured?: boolean;
};

/**
 * Placeholder entries so the layout can be reviewed with real structure.
 * Swap `cover`/`gallery` for the studio's photography, or move this file
 * behind a CMS (see docs/GITHUB-SETUP.md) once the content model settles.
 */
export const projects: Project[] = [
  {
    slug: "keppel-bay-residence",
    title: "Keppel Bay Residence",
    discipline: "Residential",
    location: "Singapore",
    year: 2026,
    excerpt:
      "A waterfront apartment reworked around a single continuous oak spine, trading partitioned rooms for light, sightlines and quiet.",
    body: [
      "The brief asked for calm. We removed the corridor that split the plan and replaced it with a continuous oak volume that carries storage, services and a concealed study.",
      "Materials are limited to three: white oak, lime plaster and a honed travertine that runs from the kitchen through to the terrace threshold.",
    ],
    cover: "/projects/placeholder-01.jpg",
    gallery: ["/projects/placeholder-01.jpg", "/projects/placeholder-02.jpg"],
    featured: true,
  },
  {
    slug: "telok-ayer-house",
    title: "Telok Ayer House",
    discipline: "Hospitality",
    location: "Singapore",
    year: 2025,
    excerpt:
      "A shophouse restored as a sixteen-cover dining room, where the original party walls were left raw and lit rather than replastered.",
    body: [
      "Conservation constraints set the geometry. Within it, the intervention is deliberately light — a freestanding bar, a linen ceiling plane, and nothing fixed to the historic fabric.",
    ],
    cover: "/projects/placeholder-02.jpg",
    gallery: ["/projects/placeholder-02.jpg"],
    featured: true,
  },
  {
    slug: "cecil-street-workplace",
    title: "Cecil Street Workplace",
    discipline: "Commercial",
    location: "Singapore",
    year: 2025,
    excerpt:
      "Nine hundred square metres of workplace planned as a series of rooms rather than an open floor, giving each team an edge and a window.",
    body: [
      "We treated the floorplate as a small neighbourhood: a shared centre for making and eating, with quieter rooms pushed to the perimeter.",
    ],
    cover: "/projects/placeholder-03.jpg",
    gallery: ["/projects/placeholder-03.jpg"],
    featured: true,
  },
];

export const disciplines: Discipline[] = ["Residential", "Hospitality", "Commercial"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
