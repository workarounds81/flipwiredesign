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
    slug: "centennial-tower-lounge-bar",
    title: "Centennial Tower Lounge Bar",
    category: "Commercial",
    unitType: "Lounge bar",
    location: "Centennial Tower",
    scope: ["Fit-out", "Carpentry"],
    excerpt:
      "A members' lounge and bar in the tower's upper floors. A brass fin ceiling runs the length of the room above a fluted teal bar front, with convex mirrors and suspended brass shelving carrying the back bar.",
    cover: "/projects/centennial-tower-lounge-bar/01.jpg",
    gallery: [
      { src: "/projects/centennial-tower-lounge-bar/01.jpg", width: 1623, height: 969 },
      { src: "/projects/centennial-tower-lounge-bar/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/03.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/04.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/05.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/06.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/07.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/08.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/09.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/10.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/11.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/12.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/13.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/14.jpg", width: 2400, height: 1800 },
      { src: "/projects/centennial-tower-lounge-bar/15.jpg", width: 2400, height: 1800 },
    ],
    featured: true,
  },
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
    slug: "exposed-columns-open-plan",
    title: "Exposed Columns, Open Plan",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "Partitions taken out to leave one room, with the structural columns left raw rather than boxed in. A pale oak island anchors the middle; walnut shelving and a solid timber table furnish the rest.",
    cover: "/projects/exposed-columns-open-plan/01.jpg",
    gallery: [
      { src: "/projects/exposed-columns-open-plan/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/exposed-columns-open-plan/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/exposed-columns-open-plan/03.jpg", width: 2400, height: 1800 },
      { src: "/projects/exposed-columns-open-plan/04.jpg", width: 2400, height: 1800 },
      { src: "/projects/exposed-columns-open-plan/05.jpg", width: 2400, height: 1800 },
      { src: "/projects/exposed-columns-open-plan/06.jpg", width: 2400, height: 1800 },
      { src: "/projects/exposed-columns-open-plan/07.jpg", width: 2400, height: 1800 },
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
  {
    slug: "walnut-island-gloss-floor",
    title: "Walnut Island, Gloss Floor",
    category: "Condominium",
    unitType: "Apartment",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A walnut-fronted island set against gloss porcelain, with the kitchen left open to the living room.",
    cover: "/projects/walnut-island-gloss-floor/01.jpg",
    gallery: [
      { src: "/projects/walnut-island-gloss-floor/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/walnut-island-gloss-floor/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/walnut-island-gloss-floor/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/walnut-island-gloss-floor/04.jpg", width: 1800, height: 2400 },
      { src: "/projects/walnut-island-gloss-floor/05.jpg", width: 1800, height: 2400 },
      { src: "/projects/walnut-island-gloss-floor/06.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "oak-bedrooms",
    title: "Oak Bedrooms",
    category: "HDB",
    unitType: "Flat",
    scope: ["Carpentry"],
    excerpt:
      "Full-height oak wardrobes with integrated desks and recessed lighting, run wall to wall in each room.",
    cover: "/projects/oak-bedrooms/01.jpg",
    gallery: [
      { src: "/projects/oak-bedrooms/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-bedrooms/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-bedrooms/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-bedrooms/04.jpg", width: 2400, height: 1800 },
      { src: "/projects/oak-bedrooms/05.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-bedrooms/06.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "white-fitted-kitchen",
    title: "White Fitted Kitchen",
    category: "Condominium",
    unitType: "Apartment",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "Handleless white cabinetry taken to the ceiling, with a single long island and no upper units on the window wall.",
    cover: "/projects/white-fitted-kitchen/01.jpg",
    gallery: [
      { src: "/projects/white-fitted-kitchen/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/white-fitted-kitchen/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/white-fitted-kitchen/03.jpg", width: 1351, height: 2400 },
      { src: "/projects/white-fitted-kitchen/04.jpg", width: 2400, height: 1800 },
      { src: "/projects/white-fitted-kitchen/05.jpg", width: 2400, height: 1800 },
      { src: "/projects/white-fitted-kitchen/06.jpg", width: 2400, height: 1800 },
      { src: "/projects/white-fitted-kitchen/07.jpg", width: 2400, height: 1800 },
      { src: "/projects/white-fitted-kitchen/08.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "concrete-vanity-bathroom",
    title: "Concrete Vanity Bathroom",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation"],
    excerpt:
      "A cast concrete vanity and shelf against glazed brick tile, with a wall-hung pan and a walk-in shower.",
    cover: "/projects/concrete-vanity-bathroom/01.jpg",
    gallery: [
      { src: "/projects/concrete-vanity-bathroom/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-vanity-bathroom/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-vanity-bathroom/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-vanity-bathroom/04.jpg", width: 2400, height: 1800 },
    ],
  },
  {
    slug: "stainless-steel-kitchen",
    title: "Stainless Steel Kitchen",
    category: "Condominium",
    unitType: "Apartment",
    scope: ["Carpentry"],
    excerpt:
      "A commercial-grade stainless run — splashback, counter and hood in one material — over pale cabinetry.",
    cover: "/projects/stainless-steel-kitchen/01.jpg",
    gallery: [
      { src: "/projects/stainless-steel-kitchen/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/stainless-steel-kitchen/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/stainless-steel-kitchen/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/stainless-steel-kitchen/04.jpg", width: 1800, height: 2400 },
      { src: "/projects/stainless-steel-kitchen/05.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "black-frame-kitchen",
    title: "Black Frame Kitchen",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A black steel frame hung over the island carries the lighting and the extract, and marks the kitchen out of an otherwise open plan.",
    cover: "/projects/black-frame-kitchen/01.jpg",
    gallery: [
      { src: "/projects/black-frame-kitchen/01.jpg", width: 2400, height: 1346 },
      { src: "/projects/black-frame-kitchen/02.jpg", width: 1346, height: 2400 },
      { src: "/projects/black-frame-kitchen/03.jpg", width: 2400, height: 1346 },
      { src: "/projects/black-frame-kitchen/04.jpg", width: 1346, height: 2400 },
      { src: "/projects/black-frame-kitchen/05.jpg", width: 1346, height: 2400 },
      { src: "/projects/black-frame-kitchen/06.jpg", width: 2400, height: 1346 },
    ],
  },
  {
    slug: "timber-feature-wall",
    title: "Timber Feature Wall",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A horizontal timber wall runs the length of the living room, with the television and storage worked into its face.",
    cover: "/projects/timber-feature-wall/01.jpg",
    gallery: [
      { src: "/projects/timber-feature-wall/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/timber-feature-wall/02.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-feature-wall/03.jpg", width: 2400, height: 1346 },
      { src: "/projects/timber-feature-wall/04.jpg", width: 1800, height: 2400 },
      { src: "/projects/timber-feature-wall/05.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "concrete-counter-galley",
    title: "Concrete Counter Galley",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A narrow galley with a poured concrete counter, pale carpentry and a slot of light along the ceiling line.",
    cover: "/projects/concrete-counter-galley/01.jpg",
    gallery: [
      { src: "/projects/concrete-counter-galley/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/concrete-counter-galley/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/concrete-counter-galley/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-counter-galley/04.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-counter-galley/05.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-counter-galley/06.jpg", width: 2400, height: 1800 },
      { src: "/projects/concrete-counter-galley/07.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "white-island-kitchen",
    title: "White Island Kitchen",
    category: "Condominium",
    unitType: "Apartment",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A single white island with no upper cabinets facing it, and full-height storage pushed to the back wall so the room reads as one space.",
    cover: "/projects/white-island-kitchen/01.jpg",
    gallery: [
      { src: "/projects/white-island-kitchen/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/white-island-kitchen/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/white-island-kitchen/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/white-island-kitchen/04.jpg", width: 1800, height: 2400 },
      { src: "/projects/white-island-kitchen/05.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "walnut-and-white-island",
    title: "Walnut and White Island",
    category: "Condominium",
    unitType: "Apartment",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "Walnut fronts below a white solid-surface top, with the appliance wall built as one flush run beside the entrance.",
    cover: "/projects/walnut-and-white-island/01.jpg",
    gallery: [
      { src: "/projects/walnut-and-white-island/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/walnut-and-white-island/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/walnut-and-white-island/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/walnut-and-white-island/04.jpg", width: 2400, height: 1800 },
      { src: "/projects/walnut-and-white-island/05.jpg", width: 2400, height: 1800 },
      { src: "/projects/walnut-and-white-island/06.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "green-fitted-wardrobes",
    title: "Green Fitted Wardrobes",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "Sage shaker wardrobes run the length of the hall, set against a timber feature wall in the living room.",
    cover: "/projects/green-fitted-wardrobes/01.jpg",
    gallery: [
      { src: "/projects/green-fitted-wardrobes/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/green-fitted-wardrobes/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/green-fitted-wardrobes/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/green-fitted-wardrobes/04.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "pale-oak-storage-wall",
    title: "Pale Oak Storage Wall",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "Pale oak carpentry carried from the entrance through to the bedroom — wardrobe, desk, platform and shelf as one continuous line, lit from within.",
    cover: "/projects/pale-oak-storage-wall/01.jpg",
    gallery: [
      { src: "/projects/pale-oak-storage-wall/01.jpg", width: 2400, height: 1346 },
      { src: "/projects/pale-oak-storage-wall/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/pale-oak-storage-wall/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/pale-oak-storage-wall/04.jpg", width: 1346, height: 2400 },
      { src: "/projects/pale-oak-storage-wall/05.jpg", width: 1346, height: 2400 },
      { src: "/projects/pale-oak-storage-wall/06.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "concrete-and-glazed-tile",
    title: "Concrete and Glazed Tile",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A poured concrete island down the middle of the plan, with the bathroom finished in the same concrete against small glazed tile.",
    cover: "/projects/concrete-and-glazed-tile/01.jpg",
    gallery: [
      { src: "/projects/concrete-and-glazed-tile/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-and-glazed-tile/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/concrete-and-glazed-tile/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/concrete-and-glazed-tile/04.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "brass-fin-corridor",
    title: "Brass Fin Corridor",
    category: "Commercial",
    unitType: "Approach and lift lobby",
    location: "Centennial Tower",
    scope: ["Fit-out", "Carpentry"],
    excerpt:
      "The approach to the lounge: timber-lined walls, brass fins set into the reveals and a run of patterned carpet drawing the eye through.",
    cover: "/projects/brass-fin-corridor/01.jpg",
    gallery: [
      { src: "/projects/brass-fin-corridor/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/brass-fin-corridor/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/brass-fin-corridor/03.jpg", width: 1024, height: 1820 },
      { src: "/projects/brass-fin-corridor/04.jpg", width: 1346, height: 2400 },
    ],
  },
  {
    slug: "glazed-lounge-meeting-rooms",
    title: "Glazed Lounge and Meeting Rooms",
    category: "Commercial",
    unitType: "Lounge and meeting rooms",
    location: "Centennial Tower",
    scope: ["Fit-out", "Carpentry"],
    excerpt:
      "Black steel glazing separates the meeting rooms from the lounge without closing either off, with panelled walls and the city beyond the glass.",
    cover: "/projects/glazed-lounge-meeting-rooms/01.jpg",
    gallery: [
      { src: "/projects/glazed-lounge-meeting-rooms/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/glazed-lounge-meeting-rooms/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/glazed-lounge-meeting-rooms/03.jpg", width: 2400, height: 1800 },
      { src: "/projects/glazed-lounge-meeting-rooms/04.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "oak-wardrobes-and-corridors",
    title: "Oak Wardrobes and Corridors",
    category: "HDB",
    unitType: "Flat",
    scope: ["Carpentry"],
    excerpt:
      "Wardrobes and overhead storage built flush into the corridor walls, so a narrow plan reads wider than it is.",
    cover: "/projects/oak-wardrobes-and-corridors/01.jpg",
    gallery: [
      { src: "/projects/oak-wardrobes-and-corridors/01.jpg", width: 2400, height: 1523 },
      { src: "/projects/oak-wardrobes-and-corridors/02.jpg", width: 2400, height: 1597 },
      { src: "/projects/oak-wardrobes-and-corridors/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-wardrobes-and-corridors/04.jpg", width: 1346, height: 2400 },
      { src: "/projects/oak-wardrobes-and-corridors/05.jpg", width: 1800, height: 2400 },
      { src: "/projects/oak-wardrobes-and-corridors/06.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "dark-kitchen-white-counter",
    title: "Dark Kitchen, White Counter",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "Dark timber and near-black cabinetry under a white counter, with the cooking wall kept deliberately plain.",
    cover: "/projects/dark-kitchen-white-counter/01.jpg",
    gallery: [
      { src: "/projects/dark-kitchen-white-counter/01.jpg", width: 2400, height: 1552 },
      { src: "/projects/dark-kitchen-white-counter/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/dark-kitchen-white-counter/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/dark-kitchen-white-counter/04.jpg", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "stair-landing-oak-floor",
    title: "Stair, Landing, Oak Floor",
    category: "Condominium",
    unitType: "Maisonette",
    scope: ["Full renovation"],
    excerpt:
      "The stair and the landing above it, taken as one piece of joinery — black treads against oak boards, with the balustrade left open.",
    cover: "/projects/stair-landing-oak-floor/01.jpg",
    gallery: [
      { src: "/projects/stair-landing-oak-floor/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/stair-landing-oak-floor/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/stair-landing-oak-floor/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/stair-landing-oak-floor/04.jpg", width: 2400, height: 1800 },
      { src: "/projects/stair-landing-oak-floor/05.jpg", width: 1800, height: 2400 },
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
