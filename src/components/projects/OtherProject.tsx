"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const OtherProject: FC<{
  image: string;
  alt: string;
  name: string;
  url: string;
}> = ({ name, image, alt, url }) => {
  return (

    <section className="container_section-green">

    <div className="container_content">
      <h2 className="text-4xl font-semibold mb-4 font-head text-light">
        Other Projects
      </h2>

      {/* === Animated Project Card === */}
      <motion.div
        className="relative rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image */}
        <Image
          src={image}
          alt={alt}
          width={1200}
          height={700}
          className="w-full h-auto brightness-80 transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 text-light flex flex-col justify-end p-6 bg-gradient-to-t from-brown-deep/70 via-brown-deep/20 to-transparent">
          <h3 className="text-2xl font-semibold mb-1 font-head">{name}</h3>
          <p className="text-base mb-4 max-w-md">
            A luxurious second-home destination with private spaces, lush gardens,
            modern amenities, and tranquility.
          </p>
          <Link
            href={url}
            className="self-start border border-light cursor-pointer hover:bg-light hover:border-light hover:text-dark text-sm font-medium px-4 py-1 rounded-md transition"
          >
            Explore Now
          </Link>
        </div>
      </motion.div>
    </div>
    </section>

  );
};

export default OtherProject;
