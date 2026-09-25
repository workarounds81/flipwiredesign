/**
 * Project categories as Singapore clients actually search for them.
 * Property type is the primary filter; scope is secondary metadata.
 */
export type Category = "HDB" | "Condominium" | "Landed" | "Commercial";

export type Scope =
  | "Full renovation"
  | "Carpentry"
  | "Addition & alteration"
  | "Fit-out"
  | "Reinstatement";

export type Project = {
  slug: string;
  title: string;
  category: Category;

  /*
   * Everything below down to `scope` is optional on purpose.
   *
   * Projects are catalogued from the photography, which shows the property
   * type, the rooms and the carpentry but says nothing about the address, the
   * completion year or the floor area. An omitted field renders as absent; a
   * guessed one would read to a client as fact. Fill them in when known —
   * never estimate.
   */

  /** e.g. "4-room BTO", "Executive maisonette", "2-bedroom", "Café". */
  unitType?: string;
  /** Estate or district, e.g. "Punggol". Omit rather than guess. */
  location?: string;
  /** Gross floor area in square feet — how briefs are quoted here. */
  areaSqft?: number;
  /** Year of completion. Omit rather than guess. */
  year?: number;

  scope: Scope[];
  excerpt: string;
  body: string[];
  /** Paths under /public/projects. Run `npm run photos` to generate them. */
  cover: string;
  gallery: string[];
  /** Feature on the home page "Selected work" grid. */
  featured?: boolean;
};

/**
 * ---------------------------------------------------------------------------
 * These entries are scaffolding, keyed to the kinds of work in the studio's
 * portfolio (@flipwire) — built-in carpentry, kitchens and wardrobes for HDB
 * and condo homes, plus F&B fit-out.
 *
 * Every `title`, `excerpt` and `body` below is placeholder copy. Replace it
 * with the real project name, address area and a short account of the brief.
 * Do not ship this copy as-is.
 * ---------------------------------------------------------------------------
 */
export const projects: Project[] = [
  {
    slug: "bto-four-room",
    title: "TODO — 4-room BTO",
    category: "HDB",
    unitType: "4-room BTO",
    location: "Singapore",
    areaSqft: 990,
    scope: ["Full renovation", "Carpentry"],
    year: 2025,
    excerpt:
      "TODO — one or two sentences on the brief. What the owners asked for, and the one move that answered it.",
    body: [
      "TODO — what the flat looked like on handover and what changed.",
      "TODO — the carpentry: kitchen run, wardrobe system, TV wall. Name the finishes.",
    ],
    cover: "/projects/placeholder-01.jpg",
    gallery: ["/projects/placeholder-01.jpg", "/projects/placeholder-02.jpg"],
    featured: true,
  },
  {
    slug: "condominium-two-bedroom",
    title: "TODO — 2-bedroom condominium",
    category: "Condominium",
    unitType: "2-bedroom",
    location: "Singapore",
    areaSqft: 780,
    scope: ["Full renovation", "Carpentry"],
    year: 2025,
    excerpt: "TODO — the brief in one or two sentences.",
    body: ["TODO — the approach.", "TODO — materials and detailing."],
    cover: "/projects/placeholder-02.jpg",
    gallery: ["/projects/placeholder-02.jpg"],
    featured: true,
  },
  {
    slug: "cafe-fit-out",
    title: "TODO — Café fit-out",
    category: "Commercial",
    unitType: "Café",
    location: "Singapore",
    areaSqft: 1200,
    scope: ["Fit-out", "Carpentry"],
    year: 2024,
    excerpt:
      "TODO — the operator's brief, the cover count, and what the counter and seating had to do.",
    body: ["TODO — planning and circulation.", "TODO — joinery, counter, signage."],
    cover: "/projects/placeholder-03.jpg",
    gallery: ["/projects/placeholder-03.jpg"],
    featured: true,
  },
];

export const categories: Category[] = ["HDB", "Condominium", "Landed", "Commercial"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Only categories that actually have work, so the filter never shows a dead tab. */
export function activeCategories() {
  return categories.filter((c) => projects.some((p) => p.category === c));
}
