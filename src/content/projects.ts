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

export type Photo = {
  /** Path under /public, e.g. "/projects/<slug>/01.jpg". */
  src: string;
  width: number;
  height: number;
};

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

  /*
   * Copy is optional too. The site is image-led: a project with good
   * photography and no words reads better than one padded out with filler.
   * Write an excerpt when there is something worth saying about the brief.
   */
  excerpt?: string;
  body?: string[];

  /** Grid thumbnail. Cropped to 4:5, so centre the subject. */
  cover: string;
  /**
   * Gallery images with their intrinsic dimensions, so each renders at its
   * natural aspect instead of being cropped to a fixed shape. Interior work
   * is shot both portrait and landscape and cropping butchers one of them.
   * `npm run photos` measures these and prints the block to paste in.
   */
  gallery: Photo[];
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
  /*
   * Placeholder. Replaced as the studio's photography is catalogued — see
   * public/projects/README.md.
   */
  {
    slug: "sample-project",
    title: "TODO — replace with the first real project",
    category: "HDB",
    scope: ["Full renovation", "Carpentry"],
    cover: "/projects/placeholder-01.jpg",
    gallery: [
      { src: "/projects/placeholder-01.jpg", width: 1600, height: 2000 },
      { src: "/projects/placeholder-02.jpg", width: 1600, height: 2000 },
    ],
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
