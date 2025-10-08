"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

const About: FC<{ image: string; name: string; about: string; brochure: string }> = ({
  name,
  image,
  about,
  brochure,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brochure; // Public folder or CDN
    link.download = `${name}.pdf`;
    link.click();
  };

  return (
    <section className="container_section-white !py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-[#FBF0D9] font-sans overflow-hidden">
        {/* Left: Image */}
        <motion.div
          className="w-full h-[60vh] lg:h-auto"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="flex flex-col justify-center px-8 lg:px-20 py-12"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-sm text-dark tracking-widest mb-2 font-regular side_line relative">
            ABOUT US
          </p>

          <h1 className="text-4xl font-semibold text-black mb-6 font-head">
            {name}
          </h1>

          <p className="text-black leading-relaxed mb-8 font-regular">
            {about}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownload}
            className="button_black_bg w-fit !rounded-none"
          >
            Download Brochure
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
