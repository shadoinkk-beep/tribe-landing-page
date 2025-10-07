import HeroSection from "@/components/aboutus/AboutHero";
import OurValues from "@/components/aboutus/OurValues";
import OurVision from "@/components/aboutus/OurVision";
import RisksCarousel from "@/components/home/RisksCarousel";

export const metadata = {
  title: "About Us – Tribe Group",
  description:
    "Tribe brings together 16+ years of real estate and finance expertise with a proven track record in farmhouse land, development and investor trust",
  openGraph: {
    title: "About Tribe Group",
    description:
      "Trusted real estate experts helping families find their dream homes for over a decade.",
    url: "https://tribegroup.in/about",
    images: [
      {
        url: "https://tribegroup.in/HeroMainBg.png",
        width: 1200,
        height: 630,
        alt: "Tribe Group Team",
      },
    ],
    type: "article",
  },
};

export default function About() {
  return (
    <>
    <HeroSection/>
    <OurValues/>
    <OurVision/>
    <RisksCarousel/>

    </>
  );
}
