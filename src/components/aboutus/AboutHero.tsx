"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

type Card = {
  text: string;
  bgColor?: string;
  image?: string;
};

type Dot = {
  src: string;
  posClass: string;
  sizeClass?: string;
};

const HeroSection: React.FC = () => {
  const cards: Card[] = [
    { text: "We", bgColor: "bg-[#123622] text-white" },
    { text: "De-Risk", image: "/De-Risk.jpg" },
    { text: "Every", bgColor: "bg-[#123622] text-white" },
    { text: "Investment", image: "/Investment.jpg" },
  ];

  const dots: Dot[] = [
    { src: "/aboutus_hero_img1.jpg", posClass: "left-36 top-94", sizeClass: "w-12 h-12" },
    { src: "/aboutus_hero_img2.jpg", posClass: "left-20 top-64", sizeClass: "w-12 h-12" },
    { src: "/Features_bg_2.png", posClass: "right-36 top-94", sizeClass: "w-12 h-12" },
    { src: "/Features_bg_2.png", posClass: "right-8 top-64", sizeClass: "w-12 h-12" },
  ];

  // Headline / paragraph fade-up
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Dot entrance animation
  const dotVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 120, damping: 15 },
    }),
  };

  // Bottom card animation: full sequential entrance
  const cardDuration = 0.5; // each card animation duration in seconds
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * cardDuration, // next card waits for previous
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: cardDuration,
      },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="container_section-white">
      <div className="container_content relative">
        {/* Decorative circular images */}
        {dots.map((d, i) => (
          <motion.img
            key={i}
            src={d.src}
            alt=""
            aria-hidden="true"
            className={`hidden md:block absolute ${d.posClass} ${d.sizeClass ?? "w-12 h-12"} rounded-full object-cover border-2 border-white shadow-lg pointer-events-none z-0`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={dotVariants}
          />
        ))}

        {/* Headline + buttons */}
        <motion.div
          className="relative z-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4 leading-tight"
            variants={fadeUp}
          >
            India’s First Premium Integrated
            <br />
            Farmhouse Ecosystem
          </motion.h1>

          <motion.p
            className="max-w-3xl mx-auto text-base md:text-lg text-black/80 mb-8"
            variants={fadeUp}
          >
            TRIBE unites compliance, development, and advisory—removing risks from
            farmhouse ownership and transforming investments into lasting legacies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex justify-center items-center gap-6 mb-12"
            variants={fadeUp}
          > 
          <Link href={"#ourvalues"} >
            <motion.button
              className="px-6 cursor-pointer py-2 rounded-full border border-black bg-transparent hover:bg-black hover:text-white transition z-10"
              whileHover={{ scale: 1.05 }}
              >
              Explore Now
            </motion.button>
                 </Link>
                 <Link href={"#ourvalues"} >
            <motion.button
              className="text-black underline underline-offset-4 hover:opacity-80 z-10"
              whileHover={{ scale: 1.05 }}
              >
              Learn more
            </motion.button>
                </Link>
          </motion.div>
        </motion.div>

        {/* Cards row */}
        <div className="relative z-10 mt-8 grid grid-cols-2 md:grid-cols-4 gap-0">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              role="group"
              className={`relative rounded-[30%] overflow-hidden flex items-center justify-center shadow-md transform transition-transform duration-300 ${card.bgColor ?? ""}`}
              style={
                card.image
                  ? {
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: 220,
                    }
                  : { height: 220 }
              }
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover="hover"
            >
              {card.image && <div className="absolute inset-0 bg-black/30" aria-hidden />}
              <span
                className={`relative z-10 text-2xl md:text-3xl font-normal ${
                  card.bgColor?.includes("text-white") || card.image ? "text-white" : "text-black"
                }`}
              >
                {card.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
