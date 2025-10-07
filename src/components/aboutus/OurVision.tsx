"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Ishmeet Singh Raina",
    role: "Partner Tribe Group",
    image: "vision_ishmeet_singh_raina.png",
  },
  {
    name: "Charu Verma",
    role: "Partner Tribe Group",
    image: "/vision_charu_verma.png",
  },
  {
    name: "Vidit Vineet Singh",
    role: "Partner Tribe Group",
    image: "/vision_vidit_vineet_singh.png",
  },
];

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const OurVision: React.FC = () => {
  return (
    <motion.section
      className="container_section-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="container_content" variants={container}>
        {/* Header */}
        <motion.h2
          className="text-5xl lg:text-7xl font-bold mb-6 text-left text-black"
          variants={fadeUp}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="text-gray-800 text-left mb-12 leading-relaxed max-w-4xl"
          variants={fadeUp}
        >
          At TRIBE, our vision is simple: to redefine farmhouse ownership by
          uniting law, lifestyle, and legacy. Through Xcis, we safeguard every
          investment with rigorous compliance and due diligence. Through Alchemy
          Landbase, we deliver luxury farmhouse communities that are
          lifestyle-ready and future-proof. Together as TRIBE, we promise growth
          without compromise.
        </motion.p>

        {/* Team Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#0F3714] text-white rounded-2xl shadow-lg p-1 flex flex-col items-center"
              variants={fadeUp}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-2xl mb-4 w-full object-cover aspect-[3/4]"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-200">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default OurVision;
