import ContactForm from "@/components/common/Contact";
import Footer from "@/components/common/Footer";
import AboutUs from "@/components/home/AboutUs";
import FeatureHero from "@/components/home/FeaturesHero";
import Hero from "@/components/home/Hero";
import ProjectHero from "@/components/projects/ProjectsHero";

export const metadata = {
  title: "Luxury Real Estate Properties in India",
  description:
    "Discover premium real estate projects, villas, and apartments across India with DreamHomes Realty.",
  openGraph: {
    title: "Luxury Real Estate Properties in India",
    description: "Find your dream property with DreamHomes Realty.",
    url: "https://dreamhomes.com",
    images: [
      {
        url: "https://dreamhomes.com/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "DreamHomes Realty",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    

    <>
    <Hero/>
    <ProjectHero/>
    <FeatureHero/>
    <AboutUs/>
    <ContactForm/>
    <Footer/>
    
    </>

  );
}
