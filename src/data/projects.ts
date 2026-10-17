export type TribeProject = {
  name: string;
  label: string;
  location: string;
  description: string;
  story: string;
  image: string;
  secondaryImage: string;
  portraitImage: string;
  detailImage: string;
  alt: string;
  href: string;
  rotation: number;
};

export const tribeProjects: TribeProject[] = [
  {
    name: "Ananta Farms",
    label: "Gated farm living",
    location: "Off Delhi - Jaipur Expressway",
    description:
      "A legally verified second-home community shaped around private farmhouses, open lawns, and resort-style calm near the city.",
    story:
      "Ananta is designed for families who want an easy weekend rhythm without giving up privacy, clear ownership, or the comfort of a managed community.",
    image: "/projects/ananta/main.webp",
    secondaryImage: "/projects/ananta/gallery/1.webp",
    portraitImage: "/projects/generated/ananta-pool-garden.png",
    detailImage: "/projects/generated/ananta-arrival-path.png",
    alt: "Ananta Farms second-home community",
    href: "/projects/ananta",
    rotation: -5,
  },
  {
    name: "Whispering Woods",
    label: "Forest-edge retreats",
    location: "Naogaon, Delhi - Mumbai Expressway",
    description:
      "A nature-led destination for families who want quiet ownership, clear paperwork, and homes surrounded by mature green cover.",
    story:
      "Whispering Woods brings resort-style second-home living into a greener setting, with private pools, open air, and a slower pace close to strong road connectivity.",
    image: "/projects/whisperingwoods/main.webp",
    secondaryImage: "/gallery/Scene3.png",
    portraitImage: "/projects/generated/whisperingwoods-forest-path.png",
    detailImage: "/projects/generated/whisperingwoods-terrace.png",
    alt: "Whispering Woods project landscape",
    href: "/projects/whisperingwoods",
    rotation: 4,
  },
  {
    name: "Wildflower Hills",
    label: "Hillside resort homes",
    location: "Lamghara, Almora, Uttarakhand",
    description:
      "A mountain-facing escape with curated resort living, scenic decks, and a slower rhythm built for long weekends and legacy stays.",
    story:
      "Wildflower Hills is for owners who want Himalayan views, low-density planning, and a home that feels both personal and hospitality-ready.",
    image: "/projects/wildflowerhills/main.jpg",
    secondaryImage: "/projects/wildflowerhills/mountains.jpg",
    portraitImage: "/projects/generated/wildflowerhills-stargazing-deck.png",
    detailImage: "/projects/generated/wildflowerhills-hillside-path.png",
    alt: "Wildflower Hills resort homes",
    href: "/projects/wildflowerhills",
    rotation: -3,
  },
];
