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
    slug: "ue-residence-penthouse",
    title: "UE Residence — Penthouse",
    category: "Condominium",
    unitType: "Penthouse",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A two-storey penthouse where the stair, the kitchen and the storage were taken as one piece of work — blackened steel through the void, a concrete-topped island under a full stainless splashback, and every cupboard built flat to the wall.",
    body: [
      "A duplex unit with a double-volume living room, taken from bare shell to handover. A space this tall is easy to make impressive and hard to make settled, so the work went into the three things you touch every day: the kitchen, the stair and the storage. Everything else was kept deliberately quiet — one floor material throughout, cupboards flat to the wall, nothing standing proud that did not need to.",
      "The kitchen takes direct afternoon sun, so the counter had to hold its colour rather than fade out in two years. We used a concrete-finish top with a full-height stainless steel splashback behind the hob and sink — the same material a commercial kitchen uses. It wipes down in seconds and bounces light back into the room instead of swallowing it. Carpentry is a pale oak laminate, handleless, with the oven and the tall units gathered into one bank so the rest of the wall stays quiet.",
      "The stair is mild steel with blackened treads and an expanded mesh balustrade, which keeps the void open rather than walling it off. The parapet and the bulkheads around it are partition board, taped and skimmed flush so the edges read as solid plaster instead of boxed-in trunking. A light strip is concealed along the top of the landing wall — at night it is the only thing you need switched on upstairs.",
      "The bedrooms are deliberately plain: full-height wardrobes in the same pale oak, one run per room, with mirror fronts where a corridor needed widening visually. Bathrooms are white bevelled tile and grey floor tile with a wall-hung vanity, so the floor stays clear and cleaning is a two-minute job.",
    ],
    cover: "/projects/ue-residence-penthouse/01.jpg",
    gallery: [
      { src: "/projects/ue-residence-penthouse/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/ue-residence-penthouse/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/03.jpg", width: 2400, height: 1800 },
      { src: "/projects/ue-residence-penthouse/04.jpg", width: 2400, height: 1800 },
      { src: "/projects/ue-residence-penthouse/05.jpg", width: 2400, height: 1800 },
      { src: "/projects/ue-residence-penthouse/06.jpg", width: 2400, height: 1800 },
      { src: "/projects/ue-residence-penthouse/07.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/08.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/09.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/10.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/11.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/12.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/13.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/14.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/15.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/16.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/17.jpg", width: 2400, height: 1800 },
      { src: "/projects/ue-residence-penthouse/18.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/19.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/20.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/21.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/22.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/23.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/24.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/25.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/26.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/27.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/28.jpg", width: 2400, height: 1800 },
      { src: "/projects/ue-residence-penthouse/29.jpg", width: 2400, height: 1800 },
      { src: "/projects/ue-residence-penthouse/30.jpg", width: 2400, height: 1800 },
      { src: "/projects/ue-residence-penthouse/31.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/32.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/33.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/34.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/35.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/36.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/37.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/38.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/39.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/40.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/41.jpg", width: 1803, height: 2400 },
      { src: "/projects/ue-residence-penthouse/42.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/43.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/44.jpg", width: 1800, height: 2400 },
      { src: "/projects/ue-residence-penthouse/45.jpg", width: 2400, height: 1800 },
    ],
    featured: true,
  },
  {
    slug: "toa-payoh-5-room",
    title: "Toa Payoh — 5-Room HDB",
    category: "HDB",
    unitType: "5-room flat",
    location: "Toa Payoh",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A 5-room flat opened up end to end — the non-structural walls taken out, one pale tile from the entrance to the back, and the lighting buried in the ceiling so the front of the flat reads as a single room.",
    body: [
      "The original plan cut the front of the house into a living room, a dining room and a passage between them. Structural walls in an HDB flat are not negotiable, so the ones that had to stay were squared off and widened into clean openings, and everything non-structural came out. What is left reads as one room that happens to have a few thick piers in it. The floor runs as a single pale tile from the entrance through to the back, which does more for the sense of space than any amount of white paint.",
      "Almost all the lighting is hidden. A cove runs around the ceiling perimeter — an L-box built in partition board with an LED strip tucked behind the lip — so light washes up the wall instead of glaring down from the middle of the room. Downlights and surface-mounted spots do the rest, aimed at the places that actually need them: the corridor, the dining table, the kitchen counter. There is no central ceiling light anywhere in the flat.",
      "The kitchen is one white handleless run with a full stainless steel splashback. It wipes clean, and behind a gas hob it takes the heat and the oil without the staining that eventually gets into tile grout. LED strips sit under the wall cabinets and again at the plinth, so the counter is properly lit for cooking and the floor gets a soft wash at night. Hood, hob, oven and dishwasher are all built in flush, with the wet work kept to the service yard behind.",
      "Built-in carpentry was kept deliberately light. Instead of lining every wall with full-height cabinets, we used wall-mounted shelving systems on timber shelves — they take books, plants and a fold-down work surface, and they can be shifted or added to later. For a family planning to be here twenty years, that flexibility is worth more than another two metres of laminate.",
    ],
    cover: "/projects/toa-payoh-5-room/01.jpg",
    gallery: [
      { src: "/projects/toa-payoh-5-room/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/toa-payoh-5-room/02.jpg", width: 2400, height: 1800 },
      { src: "/projects/toa-payoh-5-room/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/toa-payoh-5-room/04.jpg", width: 2400, height: 1800 },
      { src: "/projects/toa-payoh-5-room/05.jpg", width: 1800, height: 2400 },
      { src: "/projects/toa-payoh-5-room/06.jpg", width: 2400, height: 1800 },
      { src: "/projects/toa-payoh-5-room/07.jpg", width: 2400, height: 1800 },
      { src: "/projects/toa-payoh-5-room/08.jpg", width: 2400, height: 1800 },
      { src: "/projects/toa-payoh-5-room/09.jpg", width: 1800, height: 2400 },
      { src: "/projects/toa-payoh-5-room/10.jpg", width: 1800, height: 2400 },
    ],
    featured: true,
  },
  {
    slug: "jalan-tentaram-4-room",
    title: "Jalan Tentaram — 4-Room BTO",
    category: "HDB",
    unitType: "4-room BTO",
    location: "Jalan Tentaram",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A 4-room BTO for a creative couple — colour and pattern built into the fixed work rather than left to the furniture. Sage green shaker fronts, a stainless kitchen on a chequered floor, and a timber wall that carries the television instead of hiding it.",
    body: [
      "The owners are a creative couple, and a BTO hands you a completely blank flat: no history, no character, nothing to work with or against. The usual answer is to paint it all white and hope the furniture does the talking. We went the other way and built the personality into the fixed elements, so the flat has something to say on day one and the couple's own things — the prints, the plants, the chairs they have collected — sit on top of it rather than carrying the whole load.",
      "The kitchen is a stainless steel counter and splashback over teak veneer fronts, on a black-and-white patterned floor tile. Stainless is a working surface: it takes a wok, it takes heat, it does not stain, and in a kitchen that opens to the living room it reads as deliberate rather than industrial. The patterned floor is the one genuinely loud move in the flat, and it is in the room that can carry it.",
      "The bedroom wardrobes are full-height shaker fronts sprayed sage green, with the track lighting left exposed above them. Shaker panelling is slower and dearer to build than a flat laminate door, but it gives a shadow line and a sense of craft that a flat front cannot, and it holds a colour far better. The green was the client's call and it was the right one.",
      "Bathrooms are white metro tile with a black hexagon floor — cheap to buy, hard to get wrong, and it will age better than whatever is trending this year. Wall-hung WC and basin keep the floor clear so the tile runs uninterrupted. Everywhere else is deliberately plain: one grey tile through the living areas, white walls, and a single timber feature wall holding the television. The quiet is what lets the colour land.",
    ],
    cover: "/projects/jalan-tentaram-4-room/01.jpg",
    gallery: [
      { src: "/projects/jalan-tentaram-4-room/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/jalan-tentaram-4-room/02.jpg", width: 1800, height: 2400 },
      { src: "/projects/jalan-tentaram-4-room/03.jpg", width: 2400, height: 2400 },
      { src: "/projects/jalan-tentaram-4-room/04.jpg", width: 1800, height: 2400 },
      { src: "/projects/jalan-tentaram-4-room/05.jpg", width: 2400, height: 1800 },
      { src: "/projects/jalan-tentaram-4-room/06.jpg", width: 1800, height: 2400 },
      { src: "/projects/jalan-tentaram-4-room/07.jpg", width: 1800, height: 2400 },
      { src: "/projects/jalan-tentaram-4-room/08.jpg", width: 1800, height: 2400 },
      { src: "/projects/jalan-tentaram-4-room/09.jpg", width: 1800, height: 2400 },
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
    category: "HDB",
    unitType: "Flat",
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
    category: "HDB",
    unitType: "Flat",
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
    category: "HDB",
    unitType: "Flat",
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
    category: "HDB",
    unitType: "Flat",
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
];

export const categories: Category[] = ["HDB", "Condominium", "Landed", "Commercial"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Only categories that actually have work, so the filter never shows a dead tab. */
export function activeCategories() {
  return categories.filter((c) => projects.some((p) => p.category === c));
}
