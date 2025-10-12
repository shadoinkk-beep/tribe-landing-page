"use client";

import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

export const Hero: FC = () => {
  return (
    <section
      style={{ backgroundImage: "url('./HeroMainBg.png')" }}
      
      className="container_section-white sm:min-h-screen h-screen sm:h-auto bg-cover bg-center flex items-start justify-center sm:aspect-[1536/1024]"
    >
      <main className="container_content h-full grid justify-center ">
        <motion.div
          className="text-center top-16 relative overflow-visible"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main headline text */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  font-medium leading-snug mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            India's first farmhouse ecosystem uniting compliance,
            <br />
            development, and lifestyle under one roof.
          </motion.h1>

          {/* Buttons container */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {/* Explore Projects Button (Dark Green) */}
            <Link href={"#our_projects"} className="button_black_bg !px-18">
              Explore Projects
            </Link>

            {/* Contact Us Button (Light Bordered) */}
            <Link href={"#contact"} className="button_white_bg !px-18">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
};

export default Hero;
