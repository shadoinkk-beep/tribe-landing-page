"use client";

import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type CardProps = {
  title: string;
  tag: string;
  image: string;
  description: string;
};

const cards: CardProps[] = [
  { title: "Fake Or Disputed Ownership", tag: "Fake Or Disputed Ownership", image: "/risks/1.png", description: "TRIBE verifies every title through layered legal due diligence, protecting you from fraud." },
  { title: "Section 143/144 Restrictions", tag: "Section 143/144 Restrictions", image: "/risks/2.jpg", description: "We ensure only construction-ready plots enter our ecosystem—no hidden legal blocks." },
  { title: "Endless 'Approvals in Process'", tag: "Endless 'Approvals in Process'", image: "/risks/3.jpg", description: "TRIBE completes conversion and zoning approvals upfront, not after you’ve invested." },
  { title: "Encumbrances & Liabilities", tag: "Encumbrances & Liabilities", image: "/risks/1.png", description: "Every property is cleared of outstanding loans, disputes, or claims before onboarding." },
  { title: "Illegal Layouts", tag: "Illegal Layouts", image: "/risks/1.png", description: "We block layouts that don’t comply with governing authority approvals." },
  { title: "Environmental Restrictions", tag: "Environmental Restrictions", image: "/risks/1.png", description: "Properties violating eco and zonal norms are excluded from our listings." },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const RisksCarousel: React.FC = () => {
  const carouselRef = useRef<any>(null); // ✅ use 'any' instead of CarouselRef

  return (
    <section className="container_section-white relative">
      <div className="container_content relative">
        {/* Heading + Arrows */}
        <div className="flex items-start justify-between mb-10 relative">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-900">
            The Critical Risks We Remove, <br />
            The Rare Trust We Deliver
          </h2>

          {/* Controller Buttons */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => carouselRef.current?.previous()}
              className="w-16 h-16 flex cursor-pointer items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition"
            >
              <FaArrowLeft size={18} />
            </button>
            <button
              onClick={() => carouselRef.current?.next()}
              className="w-16 h-16 flex items-center cursor-pointer justify-center rounded-full border border-black hover:bg-black hover:text-white transition"
            >
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite
          arrows={false} // default arrows disabled
          itemClass="px-3"
        >
          {cards.map((card, idx) => (
            <div key={idx} className="rounded-xl h-96 shadow-md overflow-hidden relative">
                <div className="black-layer"></div>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 p-4  w-full">
                <span className="bg-[#0F3714] text-white text-xs px-2 py-1 rounded-xl border-[0.5px] border-white">
                  {card.tag}
                </span>
                <p className="text-white text-sm mt-4">{card.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default RisksCarousel;
