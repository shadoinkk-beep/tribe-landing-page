"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";

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
            <h2 className="heading-section text-light">About Us</h2>

            {/* Overlapping Circles */}
            <div className="flex items-center justify-start">
              <div className="relative flex">
                {/* Circle 1 */}
                <div className="aspect-square h-48 sm:h-50 md:h-60 lg:h-64 rounded-full border border-light flex flex-col items-center justify-center text-left z-10">
                  <span className="text-2xl  md:text-5xl font-normal">
                    {startCount ? (
                      <CountUp start={0} className="" end={100} duration={2} suffix="+" />
                    ) : (
                      "0+"
                    )}
                  </span>
                  <span className="text-sm mt-1 text-center"> Acres of Land <br className="sm:hidden" />  Acquired</span>
                </div>

                {/* Circle 2 (overlapping) */}
                <div className="aspect-square h-48 sm:h-50 md:h-60 lg:h-64 rounded-full border border-light flex flex-col items-center justify-center text-left !-ml-8">
                  <span className=" text-2xl md:text-5xl font-normal">
                    {startCount ? (
                      <CountUp start={0} end={3} duration={2} suffix="+" />
                    ) : (
                      "0+"
                    )}
                  </span>
                  <span className="text-sm mt-1">Ongoing Projects</span>
                </div>
              </div>
            </div>

            <p className="subtitle-copy-light text-sm sm:text-base">
              TRIBE is India’s first integrated second-home ecosystem—uniting
              compliance, land aggregation, development, and advisory to remove risks from land
              deals. With Xcis and Alchemy Landbase, we deliver second homes that
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
            <div className="relative h-72 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/aboutus_hero_img1.jpg"
                alt="Second-home community"
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brown-deep/45 flex flex-col justify-end p-6">
                <h3 className="text-lg font-semibold">
                  India’s First Second-Home Ecosystem
                </h3>
                <p className="text-sm text-cream-deep mt-2">
                  TRIBE brings together compliance, land aggregation, development, and investor
                  advisory under one roof. We were created to solve the risks
                  that collapse most second-home land deals and deliver ownership that
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
            <div className="relative h-72 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/aboutus_hero_img2.jpg"
                alt="Landscape"
                fill
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brown-deep/45 flex flex-col justify-end p-6">
                <h3 className="text-lg font-semibold">Law. Lifestyle. Legacy.</h3>
                <p className="text-sm text-cream-deep mt-2">
                  Through Xcis (compliance & advisory) and Alchemy Landbase
                  (land aggregation), TRIBE ensures every project is
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
