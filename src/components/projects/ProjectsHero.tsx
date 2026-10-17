"use client";

import { FC, useRef } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TribeProject, tribeProjects } from "@/data/projects";

const StackProjectCard: FC<{
  project: TribeProject;
  index: number;
  progress: MotionValue<number>;
}> = ({ project, index, progress }) => {
  const start = 0.05 + index * 0.23;
  const lift = start + 0.14;
  const settle = start + 0.34;
  const stackY = index * 22;
  const finalY = index * 15;
  const stackScale = 1 - index * 0.04;

  const y = useTransform(
    progress,
    [start, lift, settle, 1],
    ["112vh", "54vh", `${stackY}px`, `${finalY}px`]
  );
  const rotate = useTransform(
    progress,
    [start, lift, settle, 1],
    [`${project.rotation + 14}deg`, `${project.rotation + 6}deg`, `${project.rotation}deg`, `${project.rotation * 0.55}deg`]
  );
  const scale = useTransform(
    progress,
    [start, lift, settle, 1],
    [0.82, 0.9, stackScale, stackScale - 0.015]
  );
  const opacity = useTransform(progress, [start, lift, settle], [0, 0.5, 1]);
  const imageScale = useTransform(progress, [start, lift, settle, 1], [1.16, 1.1, 1.02, 1.04]);

  return (
    <motion.article
      className="absolute inset-0 mx-auto grid w-full max-w-[600px] place-items-center font-head text-light"
      style={{ y, rotate, scale, opacity, zIndex: 10 + index }}
    >
      <div className="grid min-h-[430px] w-full overflow-hidden rounded-lg border border-cream-deep/35 bg-brown-deep shadow-[0_28px_90px_rgba(20,16,8,0.3)] md:min-h-[500px]">
        <Link href={project.href} className="group grid h-full">
          <div className="relative min-h-[235px] overflow-hidden">
            <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 86vw, 42vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,36,18,0.02),rgba(43,36,18,0.64))]" />
            <div className="absolute left-4 top-4 rounded-full border border-cream-deep/45 bg-brown-deep/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cream">
              {project.label}
            </div>
          </div>

          <div className="grid content-between gap-7 p-5 sm:p-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brown-soft">
                0{index + 1} / 0{tribeProjects.length}
              </p>
              <h3 className="mt-3 text-4xl font-semibold leading-none text-light sm:text-5xl">
                {project.name}
              </h3>
              <p className="mt-3 text-sm font-semibold text-brown-soft">
                {project.location}
              </p>
            </div>
            <p className="max-w-md text-base leading-relaxed text-cream-deep">
              {project.description}
            </p>
          </div>
        </Link>
      </div>
    </motion.article>
  );
};

export default function ProjectHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 20,
    damping: 32,
    mass: 1.2,
    restDelta: 0.0005,
  });

  const copyY = useTransform(smoothProgress, [0, 0.18, 1], ["30px", "0px", "-36px"]);
  const copyScale = useTransform(smoothProgress, [0, 0.28, 1], [0.98, 1, 0.97]);
  const copyOpacity = useTransform(smoothProgress, [0, 0.78, 1], [1, 1, 0.64]);
  const ruleScale = useTransform(smoothProgress, [0.04, 0.94], [0.08, 1]);

  return (
    <section
      ref={containerRef}
      id="our_projects"
      className="relative h-[430vh] overflow-clip bg-dark font-head text-light"
    >
      <div className="sticky top-0 grid min-h-screen items-center overflow-hidden bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <motion.div
            className="relative z-30 grid gap-6 text-center lg:text-left"
            style={{ y: copyY, scale: copyScale, opacity: copyOpacity }}
          >
            <div className="mx-auto flex w-full max-w-xl items-center gap-4 text-sm font-semibold uppercase tracking-[0.18em] text-cream-deep lg:mx-0">
              <span>Our Projects</span>
              <motion.span
                className="h-px flex-1 origin-left bg-cream-deep/45"
                style={{ scaleX: ruleScale }}
              />
            </div>

            <div className="grid gap-4">
              <h2 className="text-[clamp(3rem,8.6vw,7.8rem)] font-semibold uppercase leading-[0.9] text-light">
                Curated
                <span className="block text-cream">Second</span>
                <span className="block text-brown-soft">Homes</span>
              </h2>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-cream-deep sm:text-lg lg:mx-0">
                Scroll through Tribe&apos;s verified communities as each project
                rises into view and collects into a considered stack.
              </p>
            </div>

            <Link
              href="/projects"
              className="group mx-auto inline-flex w-fit items-center gap-3 rounded-lg border border-light/55 px-5 py-3 text-sm font-semibold text-light transition duration-300 hover:bg-light hover:text-dark lg:mx-0"
            >
              View all projects
              <span className="grid h-7 w-7 place-items-center rounded-md bg-light text-dark transition duration-300 group-hover:bg-dark group-hover:text-light">
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </motion.div>

          <div className="relative z-20 h-[640px] min-h-[520px] w-full">
            {tribeProjects.map((project, index) => (
              <StackProjectCard
                key={project.name}
                project={project}
                index={index}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
