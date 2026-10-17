"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const skyScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);
  const sceneBlur = useTransform(scrollYProgress, [0.42, 0.82, 1], ["blur(0px)", "blur(0.9px)", "blur(1.4px)"]);

  const copyOpacity = useTransform(scrollYProgress, [0, 0.22, 0.48, 0.62], [1, 1, 0.42, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.62], ["0px", "-96px"]);
  const copyScale = useTransform(scrollYProgress, [0, 0.62], [1, 0.9]);

  const houseScale = useTransform(scrollYProgress, [0, 0.42, 1], [0.9, 1, 1.1]);
  const houseY = useTransform(scrollYProgress, [0, 0.42, 1], ["18%", "2%", "0%"]);

  const leftCloudX = useTransform(scrollYProgress, [0, 1], ["-10%", "-22%"]);
  const rightCloudX = useTransform(scrollYProgress, [0, 1], ["9%", "21%"]);
  const cloudOpacity = useTransform(scrollYProgress, [0, 0.22, 0.8], [0.82, 1, 0.84]);
  const middleCloudY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  const fogScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fogY = useTransform(scrollYProgress, [0, 1], ["24%", "2%"]);
  const fogOpacity = useTransform(scrollYProgress, [0, 0.36, 0.82], [0.22, 0.58, 0.42]);

  const tribeOpacity = useTransform(scrollYProgress, [0.5, 0.62, 0.95], [0, 0.48, 0.42]);
  const tribeY = useTransform(scrollYProgress, [0.5, 1], ["86px", "-42px"]);
  const tribeScale = useTransform(scrollYProgress, [0.5, 0.74, 1], [0.78, 0.98, 1.08]);

  const livingOpacity = useTransform(scrollYProgress, [0.58, 0.72, 0.96], [0, 0.52, 0.46]);
  const livingY = useTransform(scrollYProgress, [0.58, 1], ["72px", "-28px"]);
  const livingScale = useTransform(scrollYProgress, [0.58, 0.78, 1], [0.84, 1, 1.04]);

  const heroOpacity = useTransform(scrollYProgress, [0.93, 1], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[320vh] bg-light">
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden bg-cream-deep"
        style={{ opacity: heroOpacity }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          style={{ y: skyY, scale: skyScale, filter: sceneBlur }}
        >
          <Image
            src="/images/hero_sky.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="h-[118%] w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(231,243,249,0.35)_0%,rgba(251,240,217,0.03)_44%,rgba(251,240,217,0.3)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,rgba(251,181,112,0.34),transparent)]" />
        </motion.div>

        <motion.img
          src="/images/cloud_find.png"
          alt=""
          className="pointer-events-none absolute left-[-17vw] top-[14vh] z-[1] w-[62vw] min-w-[560px] max-w-[980px] opacity-80 mix-blend-screen"
          style={{ x: leftCloudX, opacity: cloudOpacity }}
        />
        <motion.img
          src="/images/cloud_find.png"
          alt=""
          className="pointer-events-none absolute right-[-17vw] top-[10vh] z-[1] w-[58vw] min-w-[520px] max-w-[940px] scale-x-[-1] opacity-80 mix-blend-screen"
          style={{ x: rightCloudX, opacity: cloudOpacity }}
        />
        <motion.img
          src="/images/cloud_find.png"
          alt=""
          className="pointer-events-none absolute left-[16vw] top-[23vh] z-[2] w-[46vw] min-w-[420px] max-w-[740px] opacity-55 mix-blend-screen"
          style={{ y: middleCloudY, opacity: cloudOpacity }}
        />
        <motion.img
          src="/images/cloud_find.png"
          alt=""
          className="pointer-events-none absolute right-[8vw] top-[28vh] z-[2] w-[42vw] min-w-[390px] max-w-[700px] scale-x-[-1] opacity-50 mix-blend-screen"
          style={{ y: middleCloudY, opacity: cloudOpacity }}
        />

        <motion.div
          className="pointer-events-none absolute inset-x-0 top-[16vh] z-10 mx-auto flex max-w-[1180px] flex-col items-center px-4 text-center sm:top-[17vh]"
          style={{ opacity: copyOpacity, y: copyY, scale: copyScale }}
        >
          <h1
          className="max-w-[11ch] text-[clamp(4rem,10.5vw,8.6rem)] font-black leading-[0.92] text-dark sm:max-w-none"
            style={{ letterSpacing: "0" }}
          >
            Find Your Tribe
          </h1>

          <p className="mt-5 max-w-3xl text-base font-semibold leading-relaxed text-moss sm:text-xl md:text-2xl">
            Curated second homes. Clear paperwork. A calmer path to ownership.
          </p>

          <div className="pointer-events-auto mt-7 sm:mt-8">
            <Link
              href="#our_projects"
              className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-dark px-6 py-3 text-sm font-semibold text-light shadow-[0_16px_35px_rgba(75,61,26,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-brown-deep sm:px-7"
            >
              Explore Projects
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-light/15 transition group-hover:bg-light/25">
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-[-6vh] z-[4] flex justify-center sm:bottom-[-10vh]"
          style={{
            scale: houseScale,
            y: houseY,
            filter: sceneBlur,
            transformOrigin: "center bottom",
          }}
        >
          <Image
            src="/images/hero_asset_optimized.webp"
            alt="Luxury Tribe second home"
            width={1680}
            height={1050}
            priority
            sizes="100vw"
            className="h-auto w-[126vw] max-w-[1680px] object-contain object-bottom sm:w-[98vw] lg:w-[92vw]"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%)",
              maskImage:
                "linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%)",
            }}
          />
        </motion.div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[31vh] z-[6] mx-auto flex flex-col items-center text-center uppercase leading-none text-light"
          style={{
            textShadow: "0 16px 42px rgba(30,24,12,0.32)",
          }}
        >
          <motion.span
            data-hero-tribe
            className="text-[clamp(5.2rem,17vw,14rem)] font-black tracking-normal"
            style={{ opacity: tribeOpacity, y: tribeY, scale: tribeScale }}
          >
            TRIBE
          </motion.span>
          <motion.span
            data-hero-living
            className="-mt-2 text-[clamp(2.3rem,7.2vw,6rem)] font-semibold normal-case tracking-normal"
            style={{ opacity: livingOpacity, y: livingY, scale: livingScale }}
          >
            Second-Home Living
          </motion.span>
        </div>

        <motion.div
          className="pointer-events-none absolute inset-x-[-14vw] bottom-[-12vh] z-[8] flex justify-center mix-blend-screen"
          style={{ opacity: fogOpacity, scale: fogScale, y: fogY }}
        >
          <Image
            src="/images/smoke_find.png"
            alt=""
            width={1800}
            height={620}
            sizes="100vw"
            className="h-[44vh] min-h-[280px] w-[140vw] object-cover object-bottom"
            style={{
              WebkitMaskImage:
                "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.38) 14%, #000 36%, #000 100%)",
              maskImage:
                "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.38) 14%, #000 36%, #000 100%)",
            }}
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[9] h-32 bg-[linear-gradient(180deg,transparent,rgba(251,240,217,0.58)_58%,#FBF0D9_100%)]" />
      </motion.div>
    </div>
  );
};

export default Hero;
