"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaLinkedinIn, Fawebsite } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  website?: string;
}

const team: TeamMember[] = [
  {
    name: "Ishmeet Singh Raina",
    role: "Partner Tribe Group",
    image: "vision_ishmeet_singh_raina.png",
    linkedin: "https://www.linkedin.com/in/ishmeet-singh-raina/",
    website: "https://alchemylandbase.com",
  },
  {
    name: "Charu Verma",
    role: "Partner Tribe Group",
    image: "/vision_charu_verma.png",
    linkedin: "https://www.linkedin.com/in/ishmeet-singh-raina/",
    website: "https://alchemylandbase.com",
  },
  {
    name: "Vidit Vineet Singh",
    role: "Partner Tribe Group",
    image: "/vision_vidit_vineet_singh.png",
    linkedin: "https://www.linkedin.com/in/vidit-vineet-singh-7220b819/",
    website: "https://xcis.in",
  },
];

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
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
        <motion.div className="grid md:grid-cols-3 gap-8" variants={container}>
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#0F3714] text-white pb-4 rounded-2xl shadow-lg p-1 flex flex-col items-center overflow-hidden group relative"
              variants={fadeUp}
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="rounded-2xl  w-full object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Info Section */}
              <div className="relative w-full text-center h-[70px] flex items-center justify-center">
                {/* Default state (name + role) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-200">{member.role}</p>
                </div>

                {/* Hover state (social icons) */}
                <div className="absolute inset-0 flex pt-6 items-center justify-center gap-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                    >
                      <FaLinkedinIn className="text-white text-xl" />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                    >
                      <MdLanguage className="text-white text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default OurVision;
