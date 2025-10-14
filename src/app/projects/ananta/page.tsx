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
export const metadata: Metadata = {
  title: "Ananta – Luxury Micro Farmhouses | Tribe Group",
  description:
    "Discover Ananta – Luxury Micro Farmhouses nestled near the Aravallis. Featuring 2.5 BHK farmhouses with private pools, sustainable design, and modern amenities.",
  openGraph: {
    title: "Ananta – Luxury Micro Farmhouses",
    description:
      "Experience the life of your dreams with Ananta’s 2.5 BHK micro-farmhouses featuring private pools, stunning Aravalli views, and premium facilities.",
    url: "https://tribegroup.in/projects/ananta",
    images: [
      {
        url: "https://tribegroup.in/og/ananta.jpg",
        width: 1200,
        height: 630,
        alt: "Ananta – Luxury Micro Farmhouses",
      },
    ],
  },
};

export default function ProjectAnantaPage() {
  const project = {
    title: "Ananta – Luxury Micro Farmhouses",
    desc: "Ananta is a luxury micro-farmhouse community nestled near the Aravallis. Inspired by Santorini’s rustic blue and porcelain white architecture, each farmhouse offers a 2.5 BHK layout with a private pool, modern amenities, and serene natural surroundings. Located just 750 meters from the highway, with Phase 1 and 2 already delivered, Ananta redefines retreat living.",
    price: "14500000", // sample average price (INR)
    slug: "ananta",
    location: "Near Aravallis, Gurugram–Jaipur Electric Corridor",
    plotArea: "500 & 1000 sq. yards",
    constructionArea: "1450 sq.ft",
    poolSize: "20ft x 8ft",
  };

  const amenities = [
    "2.5 BHK micro-farmhouses with private pools",
    "Aangan – a vibrant clubhouse with restaurant & coffee house",
    "Multipurpose hall and amphitheatre",
    "Fully equipped gymnasium",
    "Scenic Aravalli views and serene green surroundings",
    "Located near the Gurugram–Jaipur Electric Corridor",
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
    offers: {
      "@type": "Offer",
      url: `https://tribegroup.in/projects/${project.slug}`,
      priceCurrency: "INR",
      price: project.price,
      availability: "https://schema.org/InStock",
    },
    image: [`https://www.tribegroup.in/projects/ananta/main.webp`],
    additionalProperty: [
      { "@type": "PropertyValue", name: "Construction Area", value: project.constructionArea },
      { "@type": "PropertyValue", name: "Plot Area", value: project.plotArea },
      { "@type": "PropertyValue", name: "Private Pool", value: project.poolSize },
      { "@type": "PropertyValue", name: "Location", value: project.location },
    ],
  };



  return (
    <>
    <HighlightSection name="Ananta" address="Off Delhi - Jaipur Expressway" bg="/projects/ananta/main.webp" />

    <About brochure="/Ananta - Luxury Micro Farmhouses .pdf" name="Ananta" image="/images/ananta-farms.webp" about="The rustic blue beautifully contrasting with porcelain white overlooking a vista of greens and a cool blue pool, the farmhouse design is inspired by the Greek island houses in Santorini." />
    <ProjectHighlight/>
    <PriceList/>
    <Amenites/>
    <Plans/>
    <LocationAdvantage places = {[
  'Jaipur: 65KM',
  'Sariska: 45KM',
  'Jaipur ExpWay: 0.6KM',
  'Khatu Shyam Ji: 73KM',
  'Neemrana: 73KM',
  'Salasar: 176KM'
]} img="/projects/ananta/Ananta Map Location Advantage.webp" />



    <Gallery photos={photos}   />
    <FAQ/>
    <OtherProject name="Whispering Woods" image="/projects/whisperingwoods/main.jpg"  alt="Whispering Woods" url="/projects/whisperingwoods" />
    </>
  );
}


const photos = [
  {
    original: "/projects/ananta/gallery/4.webp",
    thumbnail: "/projects/ananta/gallery/4.webp",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass
  },
  {
    original: "/projects/ananta/gallery/1.webp",
    thumbnail: "/projects/ananta/gallery/1.webp",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass
  },
    {
    original: "/projects/ananta/gallery/5.webp",
    thumbnail: "/projects/ananta/gallery/5.webp",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass
  },
  {
    original: "/projects/ananta/gallery/2.webp",
    thumbnail: "/projects/ananta/gallery/2.webp",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass
  },

  {
    original: "/projects/ananta/gallery/3.webp",
    thumbnail: "/projects/ananta/gallery/3.webp",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass
  },

]