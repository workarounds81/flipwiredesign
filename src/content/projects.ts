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
    slug: "waterloo-3-room",
    title: "Waterloo — 3-Room HDB",
    category: "HDB",
    unitType: "3-room flat",
    location: "Waterloo",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A 3-room flat stripped back to its structure and rebuilt around a single cast concrete island — kitchen, prep bench and dining table in one object, under a black steel frame carrying the hood and the lights.",
    body: [
      "A 3-room flat is small and chopped up, and the usual fix is to line every surface with carpentry until the storage problem goes away and the flat feels smaller than when you started. We went the other way. The flat was stripped back to its structure, the non-structural partitions came out, and very little was put back. What is left is one long room with the services on show — conduit run neatly on the surface instead of buried, and no false ceiling over most of it.",
      "The island is the whole project. Cast concrete, close to the length of the flat, doing the work of a kitchen counter, a prep bench and a dining table at once. Sink and hob are set into the top so the surface still reads as one slab. Above it hangs a blackened steel frame carrying the hood, the lighting and nothing else — it gives the island a ceiling of its own without closing anything in.",
      "Floors are concrete screed, sealed and left alone. Walls are mixed: skim coat where they needed to be flat, bare where the original concrete was worth keeping. This is harder to get right than tile and paint, not easier — a screed floor shows every trowel mark and cannot be patched afterwards, so it goes down once and it goes down properly. Concealed strips at the wall and ceiling junction do the lighting, which is what stops raw surfaces reading as unfinished.",
      "The bathrooms follow the same logic. Vanities are cast concrete cantilevered off the wall with nothing underneath, so the floor runs clear beneath them and the basin is part of the slab rather than dropped into it. Walls are white square tile with a dark grout — the one piece of pattern in the flat, and the easiest surface in the house to keep clean. An expanded metal screen handles ventilation where a window had to stay open.",
    ],
    cover: "/projects/waterloo-3-room/01.jpg",
    gallery: [
      { src: "/projects/waterloo-3-room/01.jpg", width: 1800, height: 2400 },
      { src: "/projects/waterloo-3-room/02.jpg", width: 2048, height: 1801 },
      { src: "/projects/waterloo-3-room/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/waterloo-3-room/04.jpg", width: 1800, height: 2400 },
      { src: "/projects/waterloo-3-room/05.jpg", width: 1800, height: 2400 },
      { src: "/projects/waterloo-3-room/06.jpg", width: 1800, height: 2400 },
      { src: "/projects/waterloo-3-room/07.jpg", width: 1080, height: 1080 },
      { src: "/projects/waterloo-3-room/08.jpg", width: 1800, height: 2400 },
      { src: "/projects/waterloo-3-room/09.jpg", width: 1800, height: 2400 },
      { src: "/projects/waterloo-3-room/10.jpg", width: 1800, height: 2400 },
      { src: "/projects/waterloo-3-room/11.jpg", width: 1080, height: 1080 },
      { src: "/projects/waterloo-3-room/12.jpg", width: 1080, height: 1080 },
      { src: "/projects/waterloo-3-room/13.jpg", width: 1800, height: 2400 },
      { src: "/projects/waterloo-3-room/14.jpg", width: 1800, height: 2400 },
      { src: "/projects/waterloo-3-room/15.jpg", width: 1800, height: 2400 },
    ],
    featured: true,
  },
  {
    slug: "yishun-jumbo",
    title: "Yishun — Jumbo HDB",
    category: "HDB",
    unitType: "Jumbo flat",
    location: "Yishun",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A jumbo flat for a professional couple in their early thirties, kept deliberately empty. Structural columns left as bare concrete, one screed floor end to end, and freestanding timber shelving doing the work that partition walls usually do.",
    body: [
      "A jumbo is two adjoining flats that HDB merged, so you inherit close to double the usual floor area and, more awkwardly, double the usual number of walls. The owners are a professional couple in their early thirties who had no intention of filling it. The brief was space, not storage — the opposite of almost every renovation brief we are given, and much harder to hold your nerve on once the carpentry quotes start arriving.",
      "The structural columns marking where the two flats met were left as bare concrete. They could have been boxed in and painted to match the walls, and most people would have done exactly that. Leaving them legible is what tells you what this flat actually is. The floor is a single concrete screed from one end to the other, which does more than any amount of white paint to make the whole thing read as one volume rather than two flats stitched together.",
      "In place of partition walls, the plan is divided by freestanding timber shelving — solid, modular, open on both sides. It separates without closing, it holds books and the things people actually own rather than hiding them, and when the couple want the plan to change it simply moves. A built wall cannot do that, and in a flat this size the ability to change your mind later is worth more than another metre of cupboard.",
      "The kitchen is a pale oak island with a white solid-surface top, left out in the open instead of shut into a room of its own. The main bedroom sits behind a low wall capped in the same timber, so it borrows light and ceiling height from the living area and the flat never feels corridored. Fitted carpentry is held to one full-height wardrobe run and a counter — enough for two people who would rather own less and see more floor.",
    ],
    cover: "/projects/yishun-jumbo/01.jpg",
    gallery: [
      { src: "/projects/yishun-jumbo/01.jpg", width: 1280, height: 719 },
      { src: "/projects/yishun-jumbo/02.jpg", width: 1280, height: 723 },
      { src: "/projects/yishun-jumbo/03.jpg", width: 1280, height: 751 },
      { src: "/projects/yishun-jumbo/04.jpg", width: 1280, height: 719 },
      { src: "/projects/yishun-jumbo/05.jpg", width: 1280, height: 719 },
      { src: "/projects/yishun-jumbo/06.jpg", width: 1280, height: 719 },
      { src: "/projects/yishun-jumbo/07.jpg", width: 1280, height: 719 },
    ],
    featured: true,
  },
  {
    slug: "mcnair-4-room",
    title: "McNair — 4-Room HDB",
    category: "HDB",
    unitType: "4-room flat",
    location: "McNair",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A 4-room flat where almost every piece of carpentry carries its own light — a recess cut into the living room wall, a shelf and a bench that appear to float, and a wedge of light widening down the corridor.",
    body: [
      "Nothing here is lit from the middle of the ceiling. Each piece of carpentry carries its own light instead — a strip tucked behind a recess, under a shelf, beneath a bench — so the rooms are lit by their own surfaces rather than by a fitting hanging overhead. It costs more in planning than in money: every run has to be settled before the electrician starts chasing walls, because a concealed strip cannot be added later without opening everything up again.",
      "The living room wall has a long recess cut into it and lit from within, which does the work a feature wall usually does and takes up almost no depth. Opposite, a timber shelf runs the length of the room with a light under its lip, and the window bench below appears to hover because the strip sits in the shadow gap beneath it. None of these are ornaments. They are a shelf, a seat and storage, each doing its job and lighting the room while it does it.",
      "The corridor is the one piece of theatre. A slot is cut through the partition and splayed — narrow at one end, wide at the other — so it reads as a wedge of light rather than a window. The vertical niches work the same way: deep enough for books, lit from the side, so the shelf itself disappears and only what sits on it is visible.",
      "The kitchen is white with pale oak, the strip run behind the upper cabinets so the splashback glows and the counter stays free of glare. The wardrobes light up inside when opened. Bathrooms are deliberately plain by comparison — white tile, a wall-hung vanity, a mirror lit from behind — because by that point the flat has made its argument and a bathroom only needs to work.",
    ],
    cover: "/projects/mcnair-4-room/01.jpg",
    gallery: [
      { src: "/projects/mcnair-4-room/01.jpg", width: 2400, height: 1346 },
      { src: "/projects/mcnair-4-room/02.jpg", width: 1346, height: 2400 },
      { src: "/projects/mcnair-4-room/03.jpg", width: 2400, height: 1346 },
      { src: "/projects/mcnair-4-room/04.jpg", width: 2400, height: 1346 },
      { src: "/projects/mcnair-4-room/05.jpg", width: 1346, height: 2400 },
      { src: "/projects/mcnair-4-room/06.jpg", width: 1346, height: 2400 },
      { src: "/projects/mcnair-4-room/07.jpg", width: 1346, height: 2400 },
      { src: "/projects/mcnair-4-room/08.jpg", width: 1346, height: 2400 },
      { src: "/projects/mcnair-4-room/09.jpg", width: 1346, height: 2400 },
      { src: "/projects/mcnair-4-room/10.jpg", width: 1346, height: 2400 },
      { src: "/projects/mcnair-4-room/11.jpg", width: 2400, height: 1346 },
      { src: "/projects/mcnair-4-room/12.jpg", width: 2400, height: 1346 },
      { src: "/projects/mcnair-4-room/13.jpg", width: 1346, height: 2400 },
      { src: "/projects/mcnair-4-room/14.jpg", width: 1346, height: 2400 },
    ],
    featured: true,
  },
  {
    slug: "kitchener-office",
    title: "Kitchener — Office",
    category: "Commercial",
    unitType: "Office",
    location: "Kitchener",
    scope: ["Fit-out", "Carpentry"],
    excerpt:
      "The studio's own former office. A cast concrete counter mitred at the corner, set against walls and carpentry built entirely from OSB — the structural sheathing board that normally gets covered over.",
    body: [
      "This was Flipwire Design's own office before the studio moved. Your own premises are the one job with no client to answer to, which makes them the right place to test an idea properly rather than talk somebody else into it. Almost everything here is two materials: one board and one slab.",
      "The board is OSB — oriented strand board, the cheap structural sheathing that usually gets nailed up inside a wall and buried under plasterboard and paint. Here it is the finish. Walls, partitions, the corridor lining, the meeting room shelving and the pantry carcass are all the same sheet, sanded and sealed and nothing else. The difficulty with a material like this is the junctions: cut it carelessly and the place looks like a building site, so every edge is mitred, the sheets line through, and the shelves are let into the lining rather than hung off it. It costs a fraction of veneer and it is far less forgiving of bad setting out.",
      "The reception counter is cast concrete, mitred at the corner so the slab folds as one plane with no change of thickness where it turns. Against the strand pattern of the board it does the work an entire palette usually does — one rough and warm, one smooth and cool, and nothing else required.",
      "The pantry is black stone over the same board, lit from a slot behind the upper panel so the light grazes down the splashback instead of pointing at anyone standing there. Desks are a single timber worktop on a slim steel frame, long enough to seat the whole studio at once. The floor was left as screed. Nothing in the office was finished twice.",
    ],
    cover: "/projects/kitchener-office/01.jpg",
    gallery: [
      { src: "/projects/kitchener-office/01.jpg", width: 2400, height: 1346 },
      { src: "/projects/kitchener-office/02.jpg", width: 2400, height: 1346 },
      { src: "/projects/kitchener-office/03.jpg", width: 1346, height: 2400 },
      { src: "/projects/kitchener-office/04.jpg", width: 1346, height: 2400 },
      { src: "/projects/kitchener-office/05.jpg", width: 2400, height: 1346 },
      { src: "/projects/kitchener-office/06.jpg", width: 2400, height: 1346 },
      { src: "/projects/kitchener-office/07.jpg", width: 1346, height: 2400 },
      { src: "/projects/kitchener-office/08.jpg", width: 1346, height: 2400 },
      { src: "/projects/kitchener-office/09.jpg", width: 1346, height: 2400 },
    ],
    featured: true,
  },
  {
    slug: "pasir-ris-5-room",
    title: "Pasir Ris — 5-Room HDB",
    category: "HDB",
    unitType: "5-room flat",
    location: "Pasir Ris",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A 5-room flat worked in three materials — a concrete counter cantilevered off its column, timber slat screens that divide without closing, and a custom expanded-mesh gate in place of the usual grille.",
    body: [
      "Three materials carry this flat and nothing else does much: polished concrete underfoot through the living areas, timber in two tones for the carpentry, and blackened steel for anything that hangs. Keeping the palette this short is a discipline rather than a saving. With so few materials, every junction between them is visible, so each one has to be drawn properly before anybody starts building.",
      "The living area is divided by timber slat screens rather than walls. Vertical battens at a fixed spacing let light and air through while still marking where one part of the flat ends and the next begins — which matters in a 5-room, where closing anything off makes the whole plan feel narrow. The window bench behind them is lit from underneath, so in the evening the screens read as silhouettes against a glow rather than as a dark barrier.",
      "The kitchen counter is concrete, cantilevered off a single column so the slab sits clear of the floor instead of resting on cabinets. Above it hangs a blackened steel rack, a welded open frame carrying the lighting and the extract and built as one piece, so the ceiling stays free of boxing. The glass splashback behind it is a single pane with no joints — the sort of detail that only works if the wall behind was made flat first.",
      "Two smaller things set the tone. The entrance has a custom gate in dark expanded metal mesh, replacing the standard grille that comes with almost every flat in Singapore; it costs more and it is the first thing any visitor touches. And the long living room wall is left almost bare — one lit recess, one slot of shelving, nothing else. In a flat where the screens and the rack are doing the talking, one wall had to stay quiet.",
    ],
    cover: "/projects/pasir-ris-5-room/01.jpg",
    gallery: [
      { src: "/projects/pasir-ris-5-room/01.jpg", width: 2400, height: 1346 },
      { src: "/projects/pasir-ris-5-room/02.jpg", width: 2400, height: 1346 },
      { src: "/projects/pasir-ris-5-room/03.jpg", width: 2400, height: 1397 },
      { src: "/projects/pasir-ris-5-room/04.jpg", width: 2400, height: 1346 },
      { src: "/projects/pasir-ris-5-room/05.jpg", width: 2400, height: 1346 },
      { src: "/projects/pasir-ris-5-room/06.jpg", width: 2400, height: 1346 },
      { src: "/projects/pasir-ris-5-room/07.jpg", width: 2400, height: 1346 },
      { src: "/projects/pasir-ris-5-room/08.jpg", width: 1346, height: 2400 },
      { src: "/projects/pasir-ris-5-room/09.jpg", width: 1346, height: 2400 },
      { src: "/projects/pasir-ris-5-room/10.jpg", width: 1346, height: 2400 },
      { src: "/projects/pasir-ris-5-room/11.jpg", width: 1346, height: 2400 },
      { src: "/projects/pasir-ris-5-room/12.jpg", width: 1346, height: 2400 },
      { src: "/projects/pasir-ris-5-room/13.jpg", width: 1346, height: 2400 },
    ],
    featured: true,
  },
  {
    slug: "queensway-anchorage",
    title: "Queensway — Anchorage",
    category: "Condominium",
    unitType: "Apartment",
    location: "Queensway",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A condominium apartment lit almost entirely from its edges — a folded false ceiling carrying concealed LED, light boxed into the window reveals, and pale oak carpentry kept flat against the walls.",
    body: [
      "The lighting is the project. Rather than a grid of downlights, the false ceiling is cut back from the walls in a folded, faceted edge with LED hidden behind the lip, so light washes outward along the ceiling plane and the room is lit by its own surfaces. The folds are not decorative: they follow where the ceiling had to drop for ducting and where it could stay high, so the shape is the service run made visible instead of boxed in and apologised for.",
      "The same idea is carried to the windows. Each reveal is lined and lit from within, which turns a standard aluminium window into a framed opening and, more usefully, softens the contrast between a bright window and a dark wall at night. It is the cheapest way to make a room feel considered after dark, and the one most often skipped.",
      "Carpentry is pale oak laminate, held flat to the walls — sliding wardrobes with no protruding handles, and desk runs that span the full width beneath each bedroom window so the floor stays clear. One wardrobe is finished in black gloss instead, set against the pale floor, which is the single point of contrast in an otherwise even palette.",
      "Elsewhere the apartment is deliberately restrained: polished large-format tile through the living areas, timber plank in the bedrooms, a white gloss kitchen over a black counter, and dome sconces in dark chrome doing the work of bedside lamps. The decisions worth paying for here were all in the ceiling.",
    ],
    cover: "/projects/queensway-anchorage/01.jpg",
    gallery: [
      { src: "/projects/queensway-anchorage/01.jpg", width: 2400, height: 1800 },
      { src: "/projects/queensway-anchorage/02.jpg", width: 960, height: 1280 },
      { src: "/projects/queensway-anchorage/03.jpg", width: 1280, height: 960 },
      { src: "/projects/queensway-anchorage/04.jpg", width: 2400, height: 1800 },
      { src: "/projects/queensway-anchorage/05.jpg", width: 1800, height: 2400 },
      { src: "/projects/queensway-anchorage/06.jpg", width: 2400, height: 1800 },
      { src: "/projects/queensway-anchorage/07.jpg", width: 1800, height: 2400 },
      { src: "/projects/queensway-anchorage/08.jpg", width: 960, height: 1280 },
      { src: "/projects/queensway-anchorage/09.jpg", width: 2400, height: 1800 },
      { src: "/projects/queensway-anchorage/10.jpg", width: 1800, height: 2400 },
      { src: "/projects/queensway-anchorage/11.jpg", width: 2400, height: 1800 },
      { src: "/projects/queensway-anchorage/12.jpg", width: 1800, height: 2400 },
      { src: "/projects/queensway-anchorage/13.jpg", width: 1800, height: 2400 },
      { src: "/projects/queensway-anchorage/14.jpg", width: 1800, height: 2400 },
    ],
    featured: true,
  },
  {
    slug: "bukit-panjang-2-room",
    title: "Bukit Panjang — 2-Room Condo",
    category: "Condominium",
    unitType: "2-room apartment",
    location: "Bukit Panjang",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "A compact condo where the false ceiling does the zoning — a lit L-box marks out the open kitchen, so a small living area does not need walls to feel organised.",
    body: [
      "In a 2-room unit every wall you add costs floor area, so the kitchen stays open to the living room and the ceiling separates them instead. The false ceiling drops over the kitchen as an L-box with cove lighting along its edge and downlights underneath, which gives the cooking zone its own light and its own outline. Over the living area the ceiling stays at full height, with a black track light that can be re-aimed if the furniture moves — easier than re-wiring downlights once the ceiling is closed up.",
      "The kitchen is white handleless cabinetry with a black granite top running out into a peninsula, which is the dining table, the extra prep space and the breakfast counter in one. Granite was chosen for the counter because it takes hot pots and daily scrubbing without staining, and black hides wear that a pale top would show within a year. The oven is built into the base run so the counter stays clear.",
      "At the entrance, a low shoe cabinet and a separate upper cabinet in pale oak laminate leave the wall between them open, so the entrance does not feel boxed in by a full-height cabinet in a small space. The bedroom carries the same oak: a sliding-door wardrobe, which needs no swing space in front of it, and a study desk with drawers built right up to the window, lit from a pelmet above. Vinyl plank in the bedroom is warmer underfoot than the large-format tile used in the living area and kitchen, where the floor has to stand up to spills.",
      "Both bathrooms use the same glazed grey-green tile in the shower and a cement-finish ledge that hides the concealed cistern and gives a shelf for toiletries. The wall-hung WC leaves the floor clear underneath, so mopping is one pass instead of working around a pedestal. One bathroom has a vessel basin on a long vanity with a mirror cabinet lit from below; the other uses a compact basin to fit the narrower room. A frameless glass screen keeps the water in the shower without the visual weight of a full enclosure.",
    ],
    cover: "/projects/bukit-panjang-2-room/01.jpg",
    gallery: [
      { src: "/projects/bukit-panjang-2-room/01.jpg", width: 2400, height: 1553 },
      { src: "/projects/bukit-panjang-2-room/02.jpg", width: 2400, height: 1552 },
      { src: "/projects/bukit-panjang-2-room/03.jpg", width: 1800, height: 2400 },
      { src: "/projects/bukit-panjang-2-room/04.jpg", width: 2400, height: 2153 },
      { src: "/projects/bukit-panjang-2-room/05.jpg", width: 2400, height: 1778 },
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
      { src: "/projects/walnut-and-white-island/06.jpg", width: 1800, height: 2400 },
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
    slug: "dark-kitchen-white-counter",
    title: "Dark Kitchen, White Counter",
    category: "HDB",
    unitType: "Flat",
    scope: ["Full renovation", "Carpentry"],
    excerpt:
      "Dark timber and near-black cabinetry under a white counter, with the cooking wall kept deliberately plain.",
    cover: "/projects/dark-kitchen-white-counter/03.jpg",
    gallery: [
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
