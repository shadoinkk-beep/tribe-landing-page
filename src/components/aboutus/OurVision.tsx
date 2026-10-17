"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const articleUrl = "https://businesstodayglobal.com/tribe-designing-life-outdoors/";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const principles = [
  "Legally clear land and responsible approvals",
  "Retreats designed around family, wellness, and nature",
  "Long-term stewardship that protects value after handover",
];

const OurVision: React.FC = () => {
  return (
    <motion.section
      className="container_section-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="container_content" variants={container}>
        <motion.div
          className="overflow-hidden rounded-[28px] border border-brown-soft/20 bg-[#FFF7E8] shadow-[0_24px_70px_rgba(43,36,18,0.12)]"
          variants={fadeUp}
        >
          <div className="grid min-h-[560px] lg:grid-cols-[1.04fr_0.96fr]">
            <div className="relative min-h-[340px] overflow-hidden bg-brown-deep lg:min-h-full">
              <Image
                src="/tribe-founders-collective.jpg"
                alt="TRIBE founders featured in Business Today Global"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-right"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,36,18,0.28),rgba(63,74,39,0.06))]" />
              <div className="absolute bottom-5 left-5 rounded-full bg-light/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brown-deep">
                Founders of TRIBE
              </div>
            </div>

            <div className="flex items-center px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
              <motion.div className="max-w-xl" variants={container}>
                <motion.p
                  className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brown-soft"
                  variants={fadeUp}
                >
                  Our Vision
                </motion.p>

                <motion.h2
                  className="text-[clamp(2.5rem,5vw,5.25rem)] font-semibold leading-[0.95] text-brown-deep"
                  variants={fadeUp}
                >
                  Designing life outdoors.
                </motion.h2>

                <motion.p
                  className="mt-6 text-xl font-medium leading-snug text-brown-deep sm:text-2xl"
                  variants={fadeUp}
                >
                  TRIBE exists to give families room to grow, breathe, and build
                  a legacy without trading away clarity or trust.
                </motion.p>

                <motion.p
                  className="mt-5 text-base leading-relaxed text-brown sm:text-lg"
                  variants={fadeUp}
                >
                  Inspired by the Business Today Global feature, our vision is
                  rooted in Growth without Compromise: every retreat must respect
                  law, lifestyle, and long-term capital at once. From discovery
                  and due diligence to design, delivery, and stewardship, TRIBE
                  turns farmhouse ownership into a complete, responsible
                  experience.
                </motion.p>

                <motion.div className="mt-7 grid gap-3" variants={container}>
                  {principles.map((principle) => (
                    <motion.div
                      key={principle}
                      className="flex items-start gap-3 text-sm font-medium text-brown-deep sm:text-base"
                      variants={fadeUp}
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brown-soft" />
                      <span>{principle}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.a
                  href={articleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-lg border border-dark bg-dark px-5 py-3 text-sm font-semibold text-light transition hover:bg-brown-deep"
                  variants={fadeUp}
                >
                  Read the feature
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default OurVision;
