"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
      <div className="grid min-h-screen grid-cols-1 overflow-hidden bg-light font-head lg:grid-cols-2">
        {/* Left: Image */}
        <motion.div
          className="relative h-[60vh] w-full lg:h-auto"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
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
          <p className="eyebrow-copy text-dark mb-2 side_line relative">
            ABOUT US
          </p>

          <h1 className="heading-section mb-6 text-brown-deep">
            {name}
          </h1>

          <p className="subtitle-copy mb-8">
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
