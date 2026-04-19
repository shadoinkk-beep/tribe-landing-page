import { Metadata } from "next";

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
    type: "product",
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
    image: [`https://tribegroup.in/images/${project.slug}.jpg`],
    additionalProperty: [
      { "@type": "PropertyValue", name: "Construction Area", value: project.constructionArea },
      { "@type": "PropertyValue", name: "Plot Area", value: project.plotArea },
      { "@type": "PropertyValue", name: "Private Pool", value: project.poolSize },
      { "@type": "PropertyValue", name: "Location", value: project.location },
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
        item: `https://tribegroup.in/projects/${project.slug}`,
      },
    ],
  };

  return (
    <section className="p-10">
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

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
        <div>
          <h3 className="font-semibold">Construction Area:</h3>
          <p>{project.constructionArea}</p>
        </div>
        <div>
          <h3 className="font-semibold">Plot Area:</h3>
          <p>{project.plotArea}</p>
        </div>
        <div>
          <h3 className="font-semibold">Private Pool:</h3>
          <p>{project.poolSize}</p>
        </div>
        <div>
          <h3 className="font-semibold">Location:</h3>
          <p>{project.location}</p>
        </div>
      </div>

      <p className="mt-6 text-xl font-semibold text-green-700">
        Starting Price: ₹{Number(project.price).toLocaleString("en-IN")}
      </p>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </section>
  );
}
