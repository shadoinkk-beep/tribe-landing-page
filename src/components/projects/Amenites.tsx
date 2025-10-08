"use client";

import { FC, JSX } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Fitness Center",
    image: "/amenities/gym.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
    icon: <img src="/icons/leaf.svg" alt="Adventure Icon" className="w-6 h-6" />,
  },
  {
    title: "Adventure Park",
    image: "/amenities/adventure Park.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
    icon: <img src="/icons/wellness.svg" alt="Wellness Icon" className="w-6 h-6" />,
  },
  {
    title: "Cycle Track",
    image: "/amenities/Cycle Track.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
    icon: <img src="/icons/palm.svg" alt="Family Icon" className="w-6 h-6" />,
  },
  {
    title: "Kids Play Area",
    image: "/amenities/kids play area.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
    icon: <img src="/icons/globe.svg" alt="Luxury Icon" className="w-6 h-6" />,
  },
  {
    title: "Assured Rentals",
    image: "/amenities/Assured Rentals.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
    icon: <img src="/icons/globe.svg" alt="Luxury Icon" className="w-6 h-6" />,
  },
  {
    title: "Party Hall",
    image: "/amenities/club.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
    icon: <img src="/icons/globe.svg" alt="Luxury Icon" className="w-6 h-6" />,
  },
  {
    title: "Table Tennis",
    image: "/amenities/badminton_court.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
    icon: <img src="/icons/globe.svg" alt="Luxury Icon" className="w-6 h-6" />,
  },
  {
    title: "Well Appointed Lawns",
    image: "/amenities/Farm House with Private Pool.webp",
    content: "Thoughtful spaces for fitness, relaxation, and holistic rejuvenation.",
    icon: <img src="/icons/globe.svg" alt="Luxury Icon" className="w-6 h-6" />,
  },
];

const Amenites: FC = () => {
  return (
    <section id="amenities-section" className="container_section-green">

    <div
      
      className="container_content"
    >
      <span className="bg-white text-black px-4 py-1 rounded-full text-lg font-normal w-fit">
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
  icon: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, image, icon }) => {
  return (
    <div className="relative group cursor-pointer bg-black/75 rounded-lg overflow-hidden w-full hover:scale-[1.05] origin-top transition-transform duration-300 h-[360px] bg-cover bg-center shadow-md">
      <img
        src={image}
        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-85 sm:brightness-80"
        alt={title}
      />

      {/* ✅ Your custom overlay container preserved */}
      <div className="box-bg group group-hover:show-after">
        <div className="absolute bottom-8 ease-in-out group-hover:bottom-24 transition-all left-4 z-10 text-white duration-700">
          <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
        </div>
      </div>
    </div>
  );
};
