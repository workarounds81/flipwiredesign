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
   * These projects were catalogued from the studio's photo archive, which
   * shows the property type, the rooms and the carpentry but says nothing
   * about the address, the completion year or the floor area. An omitted
   * field renders as absent; a guessed one would read to a client as fact.
   * Fill them in when known — never estimate.
   */

  /** e.g. "4-room BTO", "Executive maisonette", "2-bedroom", "Cafe". */
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
   */
  excerpt?: string;
  body?: string[];

  /** Grid thumbnail. Cropped to 4:3, so centre the subject. */
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

/*
 * Titles describe what is in the photographs. Names, estates, years and floor
 * areas are absent because the archive does not record them — they are not
 * guesses waiting to be confirmed, they are simply unknown. Add them as they
 * come to hand.
 */
export const projects: Project[] = [
  {
    slug: "route-65-bar-kitchen",
    title: "Route 65 Bar + Kitchen",
    category: "Commercial",
    unitType: "Bar and restaurant",
    scope: ["Fit-out", "Carpentry"],
    excerpt:
      "A bar and dining room built around a long brass-tiled counter, banked booth seating and a continuous run of exposed lighting down the length of the room.",
    cover: "/projects/route-65-bar-kitchen/01.jpg",
    gallery: [
      { src: "/projects/route-65-bar-kitchen/01.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/02.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/03.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/04.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/05.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/06.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/07.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/08.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/09.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/10.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/11.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/12.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/13.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/14.jpg", width: 2400, height: 1347 },
      { src: "/projects/route-65-bar-kitchen/15.jpg", width: 2400, height: 1347 },
    ],
    featured: true,
  },
  {
    slug: "shisha-lounge",
    title: "Shisha Lounge",
    category: "Commercial",
    unitType: "Lounge",
    scope: ["Fit-out"],
    excerpt:
      "Patterned tilework, carved timber seating and low coloured light, worked into a small lounge.",
    cover: "/projects/shisha-lounge/01.jpg",
    gallery: [
      { src: "/projects/shisha-lounge/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/shisha-lounge/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/shisha-lounge/03.jpg", width: 2400, height: 1740 },
      { src: "/projects/shisha-lounge/04.jpg", width: 2400, height: 1800 },
    ],
    featured: true,
  },
  {
    slug: "timber-screens-polished-concrete",
    title: "Timber Screens, Polished Concrete",
    category: "Condominium",
    unitType: "Apartment",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "Vertical timber screens divide the plan without closing it, set against polished concrete floors and a black steel frame carried across the ceiling.",
    cover: "/projects/timber-screens-polished-concrete/01.jpg",
    gallery: [
      { src: "/projects/timber-screens-polished-concrete/01.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-screens-polished-concrete/02.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-screens-polished-concrete/03.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-screens-polished-concrete/04.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-screens-polished-concrete/05.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-screens-polished-concrete/06.jpg", width: 1346, height: 2400 },
      { src: "/projects/timber-screens-polished-concrete/07.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-screens-polished-concrete/08.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-screens-polished-concrete/09.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-screens-polished-concrete/10.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-screens-polished-concrete/11.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-screens-polished-concrete/12.jpg", width: 1346, height: 2400 },
      { src: "/projects/timber-screens-polished-concrete/13.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-screens-polished-concrete/14.jpg", width: 2400, height: 1346 },
    ],
    featured: true,
  },
  {
    slug: "concrete-island-kitchen",
    title: "Concrete Island Kitchen",
    category: "Condominium",
    unitType: "Apartment",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A cast concrete island runs the length of the kitchen, lit from a black steel frame hung above it.",
    cover: "/projects/concrete-island-kitchen/01.jpg",
    gallery: [
      { src: "/projects/concrete-island-kitchen/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-island-kitchen/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-island-kitchen/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-island-kitchen/04.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-island-kitchen/05.jpg", width: 2048, height: 1152 },
      { src: "/projects/concrete-island-kitchen/06.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-island-kitchen/07.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-island-kitchen/08.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-island-kitchen/09.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-island-kitchen/10.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-island-kitchen/11.jpg", width: 1800, height: 2400 },
    ],
    featured: true,
  },
  {
    slug: "plywood-workplace",
    title: "Plywood Workplace",
    category: "Commercial",
    unitType: "Office",
    scope: ["Fit-out", "Carpentry"],
    excerpt:
      "Oriented strand board used straight, as wall lining, desking and shelving, with a black counter and concealed strip lighting.",
    cover: "/projects/plywood-workplace/01.jpg",
    gallery: [
      { src: "/projects/plywood-workplace/01.jpg", width: 2400, height: 1346 },
      { src: "/projects/plywood-workplace/02.jpg", width: 1346, height: 2400 },
      { src: "/projects/plywood-workplace/03.jpg", width: 1346, height: 2400 },
      { src: "/projects/plywood-workplace/04.jpg", width: 2400, height: 1346 },
      { src: "/projects/plywood-workplace/05.jpg", width: 2400, height: 1346 },
      { src: "/projects/plywood-workplace/06.jpg", width: 2400, height: 1346 },
      { src: "/projects/plywood-workplace/07.jpg", width: 2400, height: 1346 },
      { src: "/projects/plywood-workplace/08.jpg", width: 1346, height: 2400 },
      { src: "/projects/plywood-workplace/09.jpg", width: 1346, height: 2400 },
    ],
    featured: true,
  },
  {
    slug: "aquarium-wall-home",
    title: "Aquarium Wall Home",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A planted aquarium set into the partition between entrance and living room, with oak carpentry running the length of the flat.",
    cover: "/projects/aquarium-wall-home/01.jpg",
    gallery: [
      { src: "/projects/aquarium-wall-home/01.jpg", width: 1596, height: 879 },
      { src: "/projects/aquarium-wall-home/02.jpg", width: 1596, height: 902 },
      { src: "/projects/aquarium-wall-home/03.jpg", width: 1596, height: 841 },
      { src: "/projects/aquarium-wall-home/04.jpg", width: 1596, height: 897 },
      { src: "/projects/aquarium-wall-home/05.jpg", width: 1596, height: 924 },
      { src: "/projects/aquarium-wall-home/06.jpg", width: 1596, height: 892 },
      { src: "/projects/aquarium-wall-home/07.jpg", width: 1596, height: 895 },
      { src: "/projects/aquarium-wall-home/08.jpg", width: 1596, height: 918 },
      { src: "/projects/aquarium-wall-home/09.jpg", width: 1596, height: 902 },
      { src: "/projects/aquarium-wall-home/10.jpg", width: 1065, height: 1596 },
      { src: "/projects/aquarium-wall-home/11.jpg", width: 769, height: 1596 },
    ],
    featured: true,
  },
  {
    slug: "zebrano-galley-kitchen",
    title: "Zebrano Galley Kitchen",
    category: "Condominium",
    unitType: "Apartment",
    scope: ["Carpentry"],
    excerpt:
      "Figured zebrano veneer above and below a white solid-surface counter, with the splashback lit from behind the upper run.",
    cover: "/projects/zebrano-galley-kitchen/01.jpg",
    gallery: [
      { src: "/projects/zebrano-galley-kitchen/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/zebrano-galley-kitchen/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/zebrano-galley-kitchen/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/zebrano-galley-kitchen/04.jpg", width: 1800, height: 2400 },
      { src: "/projects/zebrano-galley-kitchen/05.jpg", width: 2400, height: 1800 },
      { src: "/projects/zebrano-galley-kitchen/06.jpg", width: 2400, height: 1800 },
      { src: "/projects/zebrano-galley-kitchen/07.jpg", width: 1800, height: 2400 },
      { src: "/projects/zebrano-galley-kitchen/08.jpg", width: 1800, height: 2400 },
      { src: "/projects/zebrano-galley-kitchen/09.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "black-stair-maisonette",
    title: "Black Stair Maisonette",
    category: "Condominium",
    unitType: "Maisonette",
    scope: ["Full renovation"],
    excerpt:
      "A black stair and mesh balustrade cut through the double-height volume, left deliberately spare against white walls and oak floors.",
    cover: "/projects/black-stair-maisonette/01.jpg",
    gallery: [
      { src: "/projects/black-stair-maisonette/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/black-stair-maisonette/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/black-stair-maisonette/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/black-stair-maisonette/04.jpg", width: 2400, height: 1800 },
      { src: "/projects/black-stair-maisonette/05.jpg", width: 2400, height: 1800 },
      { src: "/projects/black-stair-maisonette/06.jpg", width: 1800, height: 2400 },
      { src: "/projects/black-stair-maisonette/07.jpg", width: 2400, height: 1800 },
      { src: "/projects/black-stair-maisonette/08.jpg", width: 2400, height: 1800 },
      { src: "/projects/black-stair-maisonette/09.jpg", width: 1800, height: 2400 },
      { src: "/projects/black-stair-maisonette/10.jpg", width: 1800, height: 2400 },
      { src: "/projects/black-stair-maisonette/11.jpg", width: 1800, height: 2400 },
      { src: "/projects/black-stair-maisonette/12.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "oak-spine-flat",
    title: "Oak Spine Flat",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A single oak volume carries storage, the kitchen run and a concealed door, with a slot of light cut into its face.",
    cover: "/projects/oak-spine-flat/01.jpg",
    gallery: [
      { src: "/projects/oak-spine-flat/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-spine-flat/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-spine-flat/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-spine-flat/04.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-spine-flat/05.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-spine-flat/06.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-spine-flat/07.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-spine-flat/08.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "white-and-oak-flat",
    title: "White and Oak Flat",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "Cove and slot lighting shape otherwise plain white rooms, with oak carpentry kept to the pieces that do work.",
    cover: "/projects/white-and-oak-flat/01.jpg",
    gallery: [
      { src: "/projects/white-and-oak-flat/01.jpg", width: 2400, height: 1346 },
      { src: "/projects/white-and-oak-flat/02.jpg", width: 2400, height: 1346 },
      { src: "/projects/white-and-oak-flat/03.jpg", width: 2400, height: 1346 },
      { src: "/projects/white-and-oak-flat/04.jpg", width: 1346, height: 2400 },
      { src: "/projects/white-and-oak-flat/05.jpg", width: 1346, height: 2400 },
      { src: "/projects/white-and-oak-flat/06.jpg", width: 1346, height: 2400 },
      { src: "/projects/white-and-oak-flat/07.jpg", width: 1346, height: 2400 },
      { src: "/projects/white-and-oak-flat/08.jpg", width: 1346, height: 2400 },
      { src: "/projects/white-and-oak-flat/09.jpg", width: 1346, height: 2400 },
      { src: "/projects/white-and-oak-flat/10.jpg", width: 2400, height: 1346 },
      { src: "/projects/white-and-oak-flat/11.jpg", width: 1346, height: 2400 },
    ],
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
