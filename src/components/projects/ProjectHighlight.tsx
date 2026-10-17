"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@devnomic/marquee";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { BsArrowRight } from "react-icons/bs";

const defaultHighlights = [
  "Private Pool & Premium Clubhouse",
  "Paintball Arena, Party & Picnic Spaces",
  "Multipurpose Hall & Amphitheatre",
  "Woodland Adventure Park & Zip Line",
  "Restaurant, Coffee House & Theme Dining",
  "Fully Equipped Gym & Wellness Zone",
];

const defaultTitle =
  "Every detail tells a story. Here’s a glimpse into the craftsmanship, vision, and soul that set our second homes apart.";

const ProjectHighlight: FC<{ highlights?: string[]; title?: string }> = ({
  highlights = defaultHighlights,
  title = defaultTitle,
}) => {
  return (
    <section className="container_section-green !py-0">
      <div id="projectHighlights" className="container_content text-light !py-0">
        <div className="md:max-h-[500px] lg:max-h-[700px] min-h-fit h-screen gap-2 sm:gap-12 grid sm:flex py-18 items-start text-light max-w-7xl mx-auto">
          <AnimationOnScroll
            className="sm:w-1/2 h-full grid items-stretch"
            animateIn="animate__zoomIn"
          >
            <div>
              <span className="bg-cream-deep text-brown-deep text-sm font-semibold px-3 py-1 rounded-full">
                Project Highlight
              </span>
              <h3 className="text-2xl text-light my-8 lg:text-3xl font-medium font-head md:my-12 lg:my-20 tracking-wide">
                {title}
              </h3>
            </div>
            <div className="group w-fit">
              <Link
                href="#amenities-section"
                className="flex content-center items-center gap-2 cursor-pointer font-semibold text-light hover:underline"
              >
                Explore Amenities
                <BsArrowRight />
              </Link>
              <div className="bg-btn-primary h-[2px] w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </AnimationOnScroll>

          <div className="overflow-hidden w-full justify-center items-center hidden sm:flex h-full">
            <Marquee fade className="gap-2 flex h-full [--duration:20s] w-full" direction="up">
              {highlights.map((highlight, index) => (
                <FeatureCard index={index} key={highlight} highlight={highlight} />
              ))}
            </Marquee>
          </div>
          <Marquee className="gap-2 max-h-[300px] flex sm:hidden [--duration:20s]" direction="left">
            {highlights.map((highlight, index) => (
              <FeatureCard index={index} key={highlight} highlight={highlight} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlight;

const FeatureCard: React.FC<{ highlight: string; index: number }> = ({
  highlight,
  index,
}) => {
  return (
    <div className="bg-light p-6 flex justify-center content-center items-center m-2 w-full rounded-md shadow-lg relative">
      <div className="bg-light place-items-center border border-brown-soft grid gap-4 justify-center content-center h-56 sm:aspect-16/5 rounded-md sm:w-full px-12 py-4 sm:py-0 relative shadow-md">
        <Image className="h-16 w-16" src="/logos/stars.svg" width={64} height={64} alt="" />
        <p className="text-center text-lg text-brown-deep">{highlight}</p>
        <span className="absolute top-2 right-3 text-cream-deep text-sm sm:text-2xl font-semibold select-none">
          {index + 1}
        </span>
      </div>
    </div>
  );
};
