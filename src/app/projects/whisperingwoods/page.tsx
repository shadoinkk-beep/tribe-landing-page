import About from "@/components/projects/About";
import Amenites from "@/components/projects/Amenites";
import FAQ from "@/components/projects/FAQ";
import Gallery from "@/components/projects/Gallery";
import HighlightSection from "@/components/projects/HighlightSection";
import LocationAdvantage from "@/components/projects/LocationAdvantage";
import OtherProject from "@/components/projects/OtherProject";
import Plans from "@/components/projects/Plans";
import PriceList from "@/components/projects/PriceList";
import ProjectHighlight from "@/components/projects/ProjectHighlight";
import { Metadata } from "next";



const originalClass = "h-96 aspect-video overflow-hidden object-contain";
const photos = [
  {
    original: "/gallery/3.png",
    thumbnail: "/gallery/3.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass

  },
  {
    original: "/gallery/Scene3.png",
    thumbnail: "/gallery/Scene3.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass

  },
  {
    original: "/gallery/Scene2.png",
    thumbnail: "/gallery/Scene2.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-contain",
    originalClass

  },
  {
    original: "/gallery/4.png",
    thumbnail: "/gallery/4.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass

  },
  {
    original: "/gallery/5.png",
    thumbnail: "/gallery/5.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass

  },
  {
    original: "/gallery/6.png",
    thumbnail: "/gallery/6.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass

  },
  {
    original: "/gallery/7.png",
    thumbnail: "/gallery/7.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass

  },
  
]

export const metadata: Metadata = {
  title: "Whispering Woods – Luxury Community Farmhouses | Tribe Group",
  description:
    "Whispering Woods by Tribe Group – luxury 2 BHK & 3 BHK farmhouses near Siliserh Lake, Alwar. Enjoy nature, modern amenities, and resort-style living surrounded by greenery.",
  openGraph: {
    title: "Whispering Woods – Luxury Community Farmhouses",
    description:
      "Discover Whispering Woods – premium 2 & 3 BHK farmhouses with pools, lush surroundings, adventure park, and clubhouse near Delhi–Mumbai Expressway.",
    url: "https://tribegroup.in/projects/whispering-woods",
    images: [
      {
        url: "https://www.tribegroup.in/projects/whisperingwoods/main.jpg",
        width: 1200,
        height: 630,
        alt: "Whispering Woods – Luxury Farmhouses in Alwar",
      },
    ],
  },
};

export default function WhisperingWoodsPage() {
  const project = {
    title: "Whispering Woods – Luxury Community Farmhouses",
    desc: "Nestled near the scenic Siliserh Lake in Alwar, Whispering Woods is a premium community farmhouse development by Tribe Group. Offering 2 BHK and 3 BHK farmhouses with private pools and green surroundings, the project combines luxury living with nature-inspired design. Located just a short drive from the 85 KM exit on the Delhi–Mumbai Expressway, it provides easy connectivity and serene escape.",
    slug: "whispering-woods",
    location: "Alwar, Rajasthan (near Delhi–Mumbai Expressway, 85KM exit)",
    configurations: [
      {
        name: "2 BHK + Store Farmhouse with Pool",
        plotArea: "13,600 sq.ft",
        builtUpArea: "1,250 sq.ft",
        poolArea: "260 sq.ft",
        estimatedEarnings: "₹11,25,600 – ₹13,50,720 per year",
      },
      {
        name: "3 BHK + Store Farmhouse with Pool",
        plotArea: "27,225 sq.ft",
        builtUpArea: "2,172 sq.ft",
        poolArea: "494 sq.ft",
        estimatedEarnings: "₹13,33,000 – ₹16,00,320 per year",
      },
    ],
  };

  const amenities = [
    "Adventure Island Park with zip lines and rock climbing",
    "Nature trails and woodland walks",
    "Cycle track and community vegetation area",
    "Skate park, cricket pitch, and beach volleyball",
    "Tennis and half basketball courts",
    "Clubhouse with restaurant, coffee house, and gym",
    "Squash room, badminton courts, and daycare centre",
    "Party lawn and amphitheatre",
    "Serene water bodies and landscaped greens",
  ];

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: project.title,
    description: project.desc,
    brand: {
      "@type": "RealEstateAgent",
      name: "Tribe Group",
    },
    offers: project.configurations.map((config) => ({
      "@type": "Offer",
      url: `https://tribegroup.in/projects/${project.slug}`,
      priceCurrency: "INR",
      price: config.estimatedEarnings.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock",
    })),
    image: [`https://tribegroup.in/projects/whisperingwoods/main.jpg`],
    additionalProperty: [
      { "@type": "PropertyValue", name: "Location", value: project.location },
      {
        "@type": "PropertyValue",
        name: "Configurations",
        value: project.configurations
          .map((c) => c.name)
          .join(", "),
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tribegroup.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://tribegroup.in/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://tribegroup.in/projects/whisperingwoods`,
      },
    ],
  };

  return (
    <>
    {/* <section className="p-10">
      <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{project.desc}</p>

      <div className="mt-8 bg-gray-50 p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Project Highlights</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {amenities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold">Configurations</h2>
        {project.configurations.map((config) => (
          <div
            key={config.name}
            className="border border-gray-200 rounded-xl p-5 shadow-sm"
          >
            <h3 className="text-xl font-semibold">{config.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-gray-700">
              <p>
                <span className="font-medium">Plot Area:</span> {config.plotArea}
              </p>
              <p>
                <span className="font-medium">Built-Up Area:</span>{" "}
                {config.builtUpArea}
              </p>
              <p>
                <span className="font-medium">Pool Area:</span>{" "}
                {config.poolArea}
              </p>
              <p>
                <span className="font-medium">Estimated Earnings:</span>{" "}
                {config.estimatedEarnings}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xl font-semibold text-green-700">
        Location: {project.location}
      </p>

    </section> */}
      {/* JSON-LD Structured Data */}

    <HighlightSection name="Whispering Woods" address="Naogaon, Delhi - Mumbai Expressway" bg="/projects/whisperingwoods/main.jpg" />

    <About brochure="/Whispering Woods_10Jun Update.pdf" image="/images/overview.webp" name="Whispering Woods" about="Experience the pinnacle of luxury living at Whispering Woods Luxury Micro
          Farmhouses by Ram Rattan Group. Set amidst tranquil landscapes, this exclusive
          development offers a refined lifestyle like no other. Ideally located off the
          Delhi-Jaipur Expressway, Whispering Woods provides seamless connectivity while
          serving as a peaceful escape from the city's fast pace." />
    <ProjectHighlight/>
    <PriceList/>
    <Amenites/>
    <Plans/>
    <LocationAdvantage img="/projects/whisperingwoods/location-map.webp" places = {[
    'Silisera Lake: 30 Min Drive',
    'Moosi Maharani Ka Mahal : 30 Min Drive',
    'Bala Quila Fort : 30 Min Drive',
    'Sarika Tiger Reserve : 40 Min Drive',
    'Bharatpur Bird Sanctuary : 50 Min Drive ',
    'Rajiv Chowk : 85 Min Drive'

  ]} />



    <Gallery photos={photos} />
    <FAQ/>
    <OtherProject name="Ananta" image="/projects/ananta/main.webp"  alt="Ananta Farms" url="/projects/ananta" />
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
    />
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
</>
  );
}
