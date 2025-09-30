import ContactForm from "@/components/common/Contact";
import Footer from "@/components/common/Footer";
import AboutUs from "@/components/home/AboutUs";
import FeatureHero from "@/components/home/FeaturesHero";
import Hero from "@/components/home/Hero";
import RisksCarousel from "@/components/home/RisksCarousel";
import ProjectHero from "@/components/projects/ProjectsHero";

export const metadata = {
  title: "Luxury Real Estate Properties in India",
  description:
    "Discover premium farmhouses projects across India with Tribe Group.",
  openGraph: {
    title: "Luxury Real Estate Properties in India",
    description: "Find your dream property with Tribe Group.",
    url: "https://tribegroup.in",
    images: [
      {
        url: "https://tribegroup.in/HeroMainBg.png",
        width: 1200,
        height: 630,
        alt: "Tribe Group",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    

    <>
    <Hero/>
    <RisksCarousel/>
    <ProjectHero/>
    <FeatureHero/>
    <AboutUs/>
    <ContactForm/>
    <Footer/>
    
    </>

  );
}
