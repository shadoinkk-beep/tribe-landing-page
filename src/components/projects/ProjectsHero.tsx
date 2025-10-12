"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Textfit } from "react-textfit";

export default function ProjectHero() {
  const [windowWidth, setWindowWidth] = useState(0);

  // 🔁 Track window size and trigger re-render on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="our_projects" className="container_section-green">
      <main className="container_content grid gap-6">
        {/* Hero Section */}
        <motion.div

          key={windowWidth} // 👈 ensures Textfit re-renders on resize
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center gap-6 grid"
        >
          {/* Title 1 */}
          <Textfit mode="single" className="font-semibold" max={200} style={{ width: "100%" }}>
            Legally Clean & Verified
          </Textfit>

          {/* Title 2 */}
          <span className="flex justify-center sm:inline-flex items-center gap-2">
            <Textfit mode="single" style={{ width: "33%" }}>
              Lifestyle
            </Textfit>
            <span className="overflow-hidden w-[33%] aspect-[551/151] sm:mx-8">
              <img
                src="/textImageSmall.png"
                alt="Farmhouse"
                className="object-cover w-full h-full rounded-full"
              />
            </span>
            <Textfit mode="single" style={{ width: "33%" }}>
              Ready
            </Textfit>
          </span>

          {/* Title 3 */}
          <Textfit mode="single" style={{ width: "100%" }}>
            Farmhouses & Gated Communities
          </Textfit>

          {/* Description + Button */}
          <div className="grid gap-6 sm:flex justify-between items-center">
            <p className="text-gray-200 max-w-md text-left text-sm md:text-base">
              TRIBE is India’s first integrated farmhouse ecosystem, built to
              remove the risks that collapse most land deals. By uniting legal
              due diligence, luxury development,
            </p>

            <Link href={"/projects/ananta"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block px-12 py-3 border bg-white text-green-900 rounded-xl shadow font-medium cursor-pointer hover:bg-transparent hover:text-white hover:border-white"
              >
                Explore Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center justify-between text-base text-gray-300"
        >
          <span>Our Projects</span>
          <hr className="w-[90%]" />
        </motion.div>

        {/* Projects Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden text-green-900 grid gap-4"
          >
            <Image
              src="/Ananata-Farm-Main.png"
              alt="Ananta Farms"
              width={800}
              height={500}
              className="object-cover w-full h-72 rounded-lg"
            />
            <div className="flex justify-between items-center text-white">
              <span>Ananta Farms</span>
              <Link href={"/projects/ananta"}>
                <button className="button_explore !rounded-none">Explore</button>
              </Link>
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden text-green-900 grid gap-4"
          >
            <Image
              src="/Whispering-woods-main.png"
              alt="Whispering Woods"
              width={800}
              height={500}
              className="object-cover w-full h-72 rounded-lg"
            />
            <div className="flex justify-between items-center text-white">
              <span>Whispering Woods</span>
              <Link href={"/projects/whisperingwoods"}>
                <button className="button_explore !rounded-none">Explore</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
