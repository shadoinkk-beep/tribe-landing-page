import About from "@/components/projects/About";
import FAQ from "@/components/projects/FAQ";
import Gallery from "@/components/projects/Gallery";
import HighlightSection from "@/components/projects/HighlightSection";
import LocationAdvantage from "@/components/projects/LocationAdvantage";
import OtherProject from "@/components/projects/OtherProject";
import ProjectHighlight from "@/components/projects/ProjectHighlight";
import { Metadata } from "next";

const mapUrl = "https://maps.app.goo.gl/fgskUMEXXME1GXko8?g_st=aw";
const originalClass = "h-96 aspect-video overflow-hidden object-contain";

const photos = [
  {
    original: "/projects/wildflowerhills/main.jpg",
    thumbnail: "/projects/wildflowerhills/main.jpg",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass,
  },
  {
    original: "/projects/wildflowerhills/about.jpg",
    thumbnail: "/projects/wildflowerhills/about.jpg",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass,
  },
  {
    original: "/projects/wildflowerhills/hillside.jpg",
    thumbnail: "/projects/wildflowerhills/hillside.jpg",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass,
  },
  {
    original: "/projects/wildflowerhills/mountains.jpg",
    thumbnail: "/projects/wildflowerhills/mountains.jpg",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass,
  },
];

const projectHighlights = [
  "5,500 ft altitude in Lamghara, Almora",
  "360-degree views of snow-capped Himalayan peaks",
  "Freehold plots sized between 2,300 and 2,650 sq.ft",
  "Only 18 low-density residential plots",
  "Plug-and-play water, power, and road infrastructure",
  "24/7 estate security with dedicated private parking",
];

export const metadata: Metadata = {
  title: "Wildflower Hills – Mountain Plots & Cottages | Tribe Group",
  description:
    "Explore Wildflower Hills in Lamghara, Almora: a curated mountain retreat with residential plots, 2 BHK cottages, Himalayan views, and managed serviced rental potential.",
  openGraph: {
    title: "Wildflower Hills – Mountain Plots & Cottages",
    description:
      "A curated mountain retreat in Lamghara, Almora with freehold plots, cottage planning, resort amenities, and 360-degree Himalayan views.",
    url: "https://tribegroup.in/projects/wildflowerhills",
    images: [
      {
        url: "https://www.tribegroup.in/projects/wildflowerhills/main.jpg",
        width: 1200,
        height: 630,
        alt: "Wildflower Hills",
      },
    ],
  },
};

export default function WildflowerHillsPage() {
  const project = {
    title: "Wildflower Hills – Mountain Plots & Cottages",
    desc: "Wildflower Hills is a curated mountain retreat in Lamghara, Almora, perched at an altitude of 5,500 ft with 360-degree views of the snow-capped Himalayan peaks. The project brings together premium residential plots, cottage planning, essential infrastructure, and serviced rental potential for effortless second-home ownership in Kumaon.",
    slug: "wildflowerhills",
    location: "Lamghara, Almora, Uttarakhand",
    estateSpread: "Approximately 60,784 sq.ft / 28 Nali",
    plotSizes: "2,300 to 2,650 sq.ft",
    totalPlots: "18 exclusive residential plots",
    cottagePlan: "2 BHK cottage, approximately 1,000 sq.ft built-up area",
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: project.title,
    description: project.desc,
    brand: {
      "@type": "RealEstateAgent",
      name: "Tribe Group",
    },
    image: ["https://www.tribegroup.in/projects/wildflowerhills/main.jpg"],
    additionalProperty: [
      { "@type": "PropertyValue", name: "Location", value: project.location },
      { "@type": "PropertyValue", name: "Estate Spread", value: project.estateSpread },
      { "@type": "PropertyValue", name: "Plot Sizes", value: project.plotSizes },
      { "@type": "PropertyValue", name: "Total Plots", value: project.totalPlots },
      { "@type": "PropertyValue", name: "Cottage Plan", value: project.cottagePlan },
      { "@type": "PropertyValue", name: "Google Location", value: mapUrl },
    ],
  };

  return (
    <>
      <HighlightSection
        name="Wildflower Hills"
        address="Lamghara, Almora, Uttarakhand"
        bg="/projects/wildflowerhills/main.jpg"
        configuration="Premium residential plots with optional 2 BHK hillside cottages"
        startingAt="Plots & Cottages"
        partnerLogo=""
        features={[
          "Altitude: 5,500 ft in Kumaon",
          "360-degree Himalayan peak views",
          "Plot sizes: 2,300 to 2,650 sq.ft",
          "Only 18 low-density residential plots",
          "20 minutes from Almora Helipad",
          "2-hour scenic drive from Bhimtal",
        ]}
      />

      <About
        brochure="/projects/wildflowerhills/Wildflower Hill & Resorts.pdf"
        name="Wildflower Hills"
        image="/projects/wildflowerhills/about.jpg"
        about={project.desc}
      />

      <section className="container_section-white">
        <div className="container_content grid gap-6">
          <div className="max-w-3xl">
            <p className="side_line relative mb-3 text-sm tracking-widest text-dark">
              PROJECT VIDEO
            </p>
            <h2 className="font-head text-4xl font-semibold text-brown-deep">
              Wildflower hills, seen in motion.
            </h2>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg bg-cream-deep shadow-sm">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/projects/wildflowerhills/main.jpg"
              aria-label="Wildflower Hills project film"
            >
              <source
                src="/projects/wildflowerhills/wildflower-hills-web.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video playback.
            </video>
          </div>
        </div>
      </section>

      <ProjectHighlight
        highlights={projectHighlights}
        title="A mountain community shaped around privacy, natural contours, clear infrastructure, and the rare calm of Himalayan second-home living."
      />

      <section className="container_section-white">
        <div className="container_content grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="side_line relative mb-3 text-sm tracking-widest text-dark">
              MASTER LAYOUT
            </p>
            <h2 className="font-head text-4xl font-semibold text-brown-deep">
              Low-density planning in pristine mountain terrain.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Estate Spread", project.estateSpread],
              ["Residential Plots", project.totalPlots],
              ["Plot Footprints", project.plotSizes],
              ["Anchor Zone", "14,886 sq.ft for resort amenities, Kumaon 360, and guest parking"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-cream-deep bg-cream p-5">
                <p className="text-sm uppercase tracking-wide text-brown">{label}</p>
                <p className="mt-2 text-lg font-semibold text-brown-deep">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities-section" className="container_section-green">
        <div className="container_content grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-4">
            <span className="bg-cream-deep text-brown-deep px-4 py-1 rounded-full text-lg font-normal w-fit">
              Lifestyle & Amenities
            </span>
            <h2 className="font-head text-4xl font-semibold text-light">
              The Tribe experience in the hills.
            </h2>
            <p className="text-cream-deep">
              The estate is planned with outdoor play zones for children, private
              gardens for every cottage, dedicated stargazing zones, native green
              buffers, internal spine roads, and centralized guest parking.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              "Nature-inspired outdoor play zones",
              "Private garden with every cottage",
              "Dedicated stargazing areas",
              "Native landscaping and green buffers",
              "Internal road network following the natural contours",
              "24/7 estate security and private parking",
            ].map((item) => (
              <div key={item} className="border-b border-cream-deep/40 pb-3 text-light">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container_section-white">
        <div className="container_content grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="side_line relative mb-3 text-sm tracking-widest text-dark">
              COTTAGE PLAN
            </p>
            <h2 className="font-head text-4xl font-semibold text-brown-deep">
              A 2 BHK hillside cottage designed for long, quiet stays.
            </h2>
          </div>
          <div className="grid gap-3 text-brown">
            <p>
              The brochure outlines an approximately 1,000 sq.ft built-up plan
              with a 28 ft by 35 ft footprint, two grand bedrooms, two en-suite
              baths, an open kitchen and dining zone, and a dedicated drawing room.
            </p>
            <p>
              When not in residence, the cottage can join an exclusive serviced
              rental pool managed as a hillside suite, with dedicated hospitality
              staff helping keep the home hotel-ready through the year.
            </p>
          </div>
        </div>
      </section>

      <LocationAdvantage
        img="/projects/wildflowerhills/mountains.jpg"
        places={[
          "Lamghara, Almora, Uttarakhand",
          "Altitude: 5,500 ft",
          "Almora Helipad: 20 min",
          "Bhimtal: 2 hr scenic drive",
          "360-degree Himalayan peak views",
          "Google Location available for site visits",
        ]}
      />

      <Gallery photos={photos} />
      <FAQ />
      <OtherProject
        name="Ananta"
        image="/projects/ananta/main.webp"
        alt="Ananta second homes"
        url="/projects/ananta"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
    </>
  );
}
