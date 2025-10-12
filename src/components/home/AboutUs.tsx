"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function AboutUs() {
  // Track if section is in view
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <section className="container_section-green" ref={ref}>
      <main className="container_content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side: Heading + Circles + Subtext */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="space-y-8 grid gap-6 content-between h-full"
          >
            <h2 className="text-5xl">About Us</h2>

            {/* Overlapping Circles */}
            <div className="flex items-center justify-start">
              <div className="relative flex">
                {/* Circle 1 */}
                <div className="aspect-square h-48 sm:h-50 md:h-60 lg:h-64 rounded-full border border-white flex flex-col items-center justify-center text-left z-10">
                  <span className="text-2xl  md:text-5xl font-normal">
                    {startCount ? (
                      <CountUp start={0} className="" end={500} duration={2} suffix="+" />
                    ) : (
                      "0+"
                    )}
                  </span>
                  <span className="text-sm mt-1 text-center"> Acres of Land <br className="sm:hidden" />  Acquired</span>
                </div>

                {/* Circle 2 (overlapping) */}
                <div className="aspect-square h-48 sm:h-50 md:h-60 lg:h-64 rounded-full border border-white flex flex-col items-center justify-center text-left !-ml-8">
                  <span className=" text-2xl md:text-5xl font-normal">
                    {startCount ? (
                      <CountUp start={0} end={2} duration={2} suffix="+" />
                    ) : (
                      "0+"
                    )}
                  </span>
                  <span className="text-sm mt-1">Ongoing Projects</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              TRIBE is India’s first integrated farmhouse ecosystem—uniting
              compliance, development, and advisory to remove risks from land
              deals. With Xcis and Alchemy Landbase, we deliver farmhouses that
              are legally secure, lifestyle-ready, and built to last as legacy
              assets.
            </p>
          </motion.div>

          {/* Right side: Image cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="grid gap-3"
          >
            {/* Card 1 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="/aboutus_hero_img1.jpg"
                alt="Farmhouse"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-lg font-semibold">
                  India’s First Farmhouse Ecosystem
                </h3>
                <p className="text-sm text-gray-200 mt-2">
                  TRIBE brings together compliance, development, and investor
                  advisory under one roof. We were created to solve the risks
                  that collapse most farmhouse deals and deliver ownership that
                  is both secure and seamless.
                </p>
                <a
                  href="/about"
                  className="mt-3 text-sm font-medium hover:underline"
                >
                  Know More →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="/aboutus_hero_img2.jpg"
                alt="Landscape"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-lg font-semibold">Law. Lifestyle. Legacy.</h3>
                <p className="text-sm text-gray-200 mt-2">
                  Through Xcis (compliance & advisory) and Alchemy Landbase
                  (farmhouse development), TRIBE ensures every project is
                  legally clean and lifestyle-ready. For investors, this means
                  peace of mind and a true legacy asset.
                </p>
                <a
                  href="/about"
                  className="mt-3 text-sm font-medium hover:underline"
                >
                  Know More →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
