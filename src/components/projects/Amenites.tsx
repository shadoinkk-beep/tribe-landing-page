"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Fitness Center",
    image: "/amenities/gym.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
  },
  {
    title: "Adventure Park",
    image: "/amenities/adventure Park.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
  },
  {
    title: "Cycle Track",
    image: "/amenities/Cycle Track.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
  },
  {
    title: "Kids Play Area",
    image: "/amenities/kids play area.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
  },
  {
    title: "Assured Rentals",
    image: "/amenities/Assured Rentals.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
  },
  {
    title: "Party Hall",
    image: "/amenities/club.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
  },
  {
    title: "Table Tennis",
    image: "/amenities/badminton_court.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
  },
  {
    title: "Well Appointed Lawns",
    image: "/amenities/Farm House with Private Pool.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
  },
];

const Amenites: FC = () => {
  return (
    <section id="amenities-section" className="container_section-green">

    <div
      
      className="container_content grid gap-4"
    >
      <span className="bg-cream-deep text-brown-deep px-4 py-1  rounded-full text-lg font-normal w-fit">
        Amenities
      </span>

      {/* Desktop grid */}
      <div className="hidden mt-4 sm:grid gap-6 justify-start md:grid-cols-2 lg:grid-cols-4 w-full grid-cols-1">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card {...card} />
          </motion.div>
        ))}
      </div>

      {/* Mobile grid */}
      <div className="grid sm:hidden gap-6 justify-start md:grid-cols-2 lg:grid-cols-4 w-full grid-cols-1">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card {...card} />
          </motion.div>
        ))}
      </div>
    </div>
    </section>

  );
};

export default Amenites;

interface CardProps {
  title: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className="relative group cursor-pointer bg-brown-deep/75 rounded-lg overflow-hidden w-full hover:scale-[1.05] origin-top transition-transform duration-300 h-[360px] bg-cover bg-center shadow-md">
      <Image
        src={image}
        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-85 sm:brightness-80"
        alt={title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      />

      {/* ✅ Your custom overlay container preserved */}
      <div className="box-bg group group-hover:show-after">
        <div className="absolute bottom-8 ease-in-out group-hover:bottom-24 transition-all left-4 z-10 text-light duration-700">
          <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
        </div>
      </div>
    </div>
  );
};
