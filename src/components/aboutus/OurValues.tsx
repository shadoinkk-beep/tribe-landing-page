"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FaCheckSquare,
  FaMedal,
  FaPencilAlt,
  FaChartLine,
} from "react-icons/fa";

interface ValueItem {
  icon: React.ElementType;
  title: string;
  description: string;
  color?: string;
}

const values: ValueItem[] = [
  {
    icon: FaCheckSquare,
    title: "Compliance First",
    description:
      "We begin with due diligence, not design. Every project passes layered legal checks before a single plan is drawn.",
    color: "bg-[#0F371466] text-black",
  },
  {
    icon: FaMedal,
    title: "Transparency Always",
    description:
      "No hidden clauses, no 'approvals in process.' We share every document, every step — so investors always know what they own.",
    color: "bg-[#0F371466] text-black",
  },
  {
    icon: FaPencilAlt,
    title: "Legacy-Driven Design",
    description:
      "We build farmhouses meant to outlive trends — rooted in soil health, sustainability, and timeless architecture.",
    color: "bg-[#0F371466] text-black",
  },
  {
    icon: FaChartLine,
    title: "Growth Without Compromise",
    description:
      "Our goal isn’t fast returns; it’s long-term value. We blend compliance, lifestyle, and nature into one ecosystem built to last.",
    color: "bg-[#0F371466] text-black",
  },
];

// Variants for main heading and paragraph
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Variants for card content
const cardContentVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.5 },
  },
};

const OurValues: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="ourvalues" className="container_section-white">
      <div className="container_content">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left column: animated heading & text */}
          <motion.div
            className="text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2
              className="text-5xl lg:text-7xl font-bold mb-6 text-black leading-[1.1]"
              variants={fadeUp}
            >
              Our <br /> Values
            </motion.h2>
            <motion.p
              className="max-w-2xl text-black"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              At TRIBE, our values guide every decision — from the land we
              acquire to the lifestyle we create. Each one reflects our promise
              to make farmhouse ownership secure, transparent, and truly
              future-ready.
            </motion.p>
          </motion.div>

          {/* Right grid: cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`p-6 rounded-2xl shadow-lg flex flex-col justify-between transition-all duration-300 transform cursor-pointer
                    ${
                      isActive
                        ? "bg-[#123622] text-white"
                        : `${item.color}`
                    }`}
                >
                  {/* Animate content inside the card */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardContentVariants}
                    className="flex-1"
                  >
                    <Icon className="mb-16" size={28} />
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardContentVariants}
                    transition={{ delay: 0.1 * index }} // stagger effect
                    className="mt-auto"
                  >
                    <p className="text-sm mb-2">{item.description}</p>

                    <div
                      className={`h-[1px] w-full mb-3 ${
                        isActive || item.color.includes("text-white")
                          ? "bg-[#0F371466]"
                          : "bg-[#0F3714]"
                      }`}
                    />
                    <p className="text-base font-medium">{item.title}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
