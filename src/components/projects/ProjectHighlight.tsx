"use client";
import { FC } from "react";
import Image from "next/image";
import { Marquee } from "@devnomic/marquee";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";


const hightlights = [
  "Private Pool & Premium Clubhouse",
  "Paintball Arena, Party & Picnic Spaces",
  "Multipurpose Hall & Amphitheatre",
  "Woodland Adventure Park & Zip Line",
  "Restaurant, Coffee House & Theme Dining",
  "Fully Equipped Gym & Wellness Zone",
]

const ProjectHighlight:FC = ()=>{



    return (
      <section className="container_section-green !py-0">

      <div id="projectHighlights" className="container_content text-white !py-0">

        <div className="md:max-h-[500px] lg:max-h-[700px] min-h-fit h-screen gap-2 sm:gap-12 grid sm:flex  py-18  items-start bg-bg-secondary text-black text-font1 max-w-7xl mx-auto">
          <AnimationOnScroll className="sm:w-1/2  h-full grid items-stretch" animateIn="animate__zoomIn">

          {/* <div className="sm:w-1/2 lg:w-1/3 h-full grid items-stretch" > */}
            <div>

              <span className="bg-white  text-sm font-semibold px-3 py-1 rounded-full">
                Project Highlight
              </span>
              <h3 className="text-2xl text-white my-8  lg:text-3xl font-medium font-head md:my-12 lg:my-20 tracking-wide">
                Every detail tells a story—<br />here’s a glimpse into the craftsmanship,
                vision, and soul that set our farmhouses apart.
              </h3>
            </div>
            <div className="group w-fit ">

            <Link href={"#amenities-section"} className="flex content-center items-center gap-2 cursor-pointer font-semibold text-white hover:underline">

            Explore Amenities
            <BsArrowRight/>
            {/* <Image height={20} width={20} src="/images/Arrow 12.webp" className="h-4 invert" alt="arrow_icon" /> */}
            </Link>
        <div className="bg-btn-primary h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>

            </div>

          {/* </div> */}
          </AnimationOnScroll>

      <div className="overflow-hidden w-full justify-center items-center hidden sm:flex h-full">

    <Marquee fade  className="gap-2 flex h-full [--duration:20s] w-full"  direction="up"  >
      {hightlights.map((highlight, index) => (
        <FeatureCard index={index} key={index} highlight={highlight} />))}

    </Marquee>
      </div>
          <Marquee  className="gap-2 max-h-[300px] flex sm:hidden [--duration:20s]"  direction="left"  >

      {hightlights.map((highlight, index) => (
        <FeatureCard index={index} key={index} highlight={highlight} />))}
    </Marquee>
          {/* <div className="md:col-span-2 space-y-8 py-6 pb-8">
            <div className="border border-indigo-300 rounded-md p-4 text-sm bg-gray-50">
              <ul className="list-disc list-inside space-y-1">
                <li>Paintball Arena, Party & Picnic Spaces</li>
                <li>Multipurpose Hall & Amphitheatre</li>
                <li>Woodland Adventure Park & Zip Line</li>
                <li>Restaurant, Coffee House & Theme Dining</li>
                <li>Private Pool & Premium Clubhouse</li>
                <li>Fully Equipped Gym & Wellness Zone</li>
              </ul>
            </div>
    
          </div> */}
        </div>
      </div>
      </section>


      );
}

export default ProjectHighlight;




// components/FeatureCard.tsx

const FeatureCard: React.FC<{highlight:string,index:number}> = ({highlight,index}) => {
  return (
    <div className="bg-white p-6 flex justify-center content-center items-center m-2 w-full rounded-md shadow-lg relative">
      <div className="bg-white place-items-center border border-black grid gap-4 justify-center content-center h-56 sm:aspect-16/5 rounded-md sm:w-full px-12 py-4 sm:py-0  relative shadow-md">
        {/* Icon */}
          <img className="h-16 w-16" src="/logos/stars.svg" alt="" />
        {/* Label */}
        <p className="text-center text-lg text-gray-900">
          {highlight}
        </p>

        {/* Faded Number */}
        <span className="absolute top-2 right-3 text-gray-200 text-sm sm:text-2xl font-semibold select-none">
          {index + 1}
        </span>
      </div>
    </div>
  );
};

