"use client";

import { FC, useRef } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TribeProject, tribeProjects } from "@/data/projects";

const ProjectPanel: FC<{
  project: TribeProject;
  index: number;
  progress: MotionValue<number>;
}> = ({ project, index, progress }) => {
  const imageScale = useTransform(progress, [0, 0.5, 1], [1.08, 1.02, 1.07]);
  const cardY = useTransform(progress, [0, 0.5, 1], [index % 2 === 0 ? "20px" : "-12px", "0px", index % 2 === 0 ? "-18px" : "18px"]);
  const insetY = useTransform(progress, [0, 0.5, 1], ["38px", "0px", "-22px"]);

  return (
    <article className="grid w-screen min-w-[100vw] items-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative z-30 grid gap-6 text-light">
          <div className="flex max-w-xl items-center gap-4 text-sm font-semibold uppercase tracking-[0.18em] text-cream-deep">
            <span>0{index + 1}</span>
            <span className="h-px flex-1 bg-cream-deep/45" />
            <span>{project.label}</span>
          </div>

          <div className="grid gap-4">
            <h2 className="max-w-[9ch] text-[clamp(3.1rem,8.4vw,7.4rem)] font-semibold uppercase leading-[0.9] text-cream">
              {project.name}
            </h2>
            <p className="text-lg font-semibold text-brown-soft">
              {project.location}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-cream-deep sm:text-lg">
              {project.story}
            </p>
          </div>

          <Link
            href={project.href}
            className="group inline-flex w-fit items-center gap-3 rounded-lg border border-light/55 px-5 py-3 text-sm font-semibold text-light transition duration-300 hover:bg-light hover:text-dark"
          >
            View project
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
        </div>

        <div className="relative min-h-[560px] w-full">
          <motion.div
            className="absolute right-0 top-1/2 z-20 grid h-[58vh] min-h-[430px] w-full max-w-[640px] -translate-y-1/2 overflow-visible"
            style={{ y: cardY, rotate: `${project.rotation}deg` }}
          >
            <Link
              href={project.href}
              className="group grid h-full overflow-hidden rounded-lg border border-cream-deep/35 bg-brown-deep shadow-[0_32px_90px_rgba(20,16,8,0.3)]"
            >
              <div className="relative min-h-[50%] overflow-hidden">
                <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 1024px) 86vw, 42vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,36,18,0.02),rgba(43,36,18,0.58))]" />
                <div className="absolute left-4 top-4 rounded-full border border-cream-deep/45 bg-brown-deep/55 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cream">
                  {project.label}
                </div>
              </div>

              <div className="grid content-between gap-5 p-5 sm:p-7">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brown-soft">
                    0{index + 1} / 0{tribeProjects.length}
                  </p>
                  <h3 className="mt-3 text-4xl font-semibold leading-none text-light sm:text-5xl">
                    {project.name}
                  </h3>
                </div>
                <p className="max-w-xl text-base leading-relaxed text-cream-deep">
                  {project.description}
                </p>
              </div>
            </Link>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-7 -right-5 hidden h-[38%] w-[34%] overflow-hidden rounded-lg border border-cream-deep/35 bg-brown-deep shadow-[0_18px_54px_rgba(20,16,8,0.26)] sm:block"
              style={{ y: insetY, rotate: `${project.rotation * -0.6}deg` }}
            >
              <Image
                src={project.portraitImage}
                alt=""
                fill
                sizes="18vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(43,36,18,0.22))]" />
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -left-9 top-12 hidden h-[25%] w-[30%] overflow-hidden rounded-lg border border-cream-deep/30 bg-brown-deep shadow-[0_16px_42px_rgba(20,16,8,0.22)] lg:block"
              style={{ y: insetY }}
            >
              <Image
                src={project.detailImage}
                alt=""
                fill
                sizes="16vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brown-deep/10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default function ProjectsCollectionPage() {
  const heroRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: horizontalScroll } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });

  const heroProgress = useSpring(heroScroll, {
    stiffness: 24,
    damping: 30,
    mass: 1,
    restDelta: 0.0005,
  });
  const trackProgress = useSpring(horizontalScroll, {
    stiffness: 18,
    damping: 34,
    mass: 1.15,
    restDelta: 0.0005,
  });

  const heroY = useTransform(heroProgress, [0, 1], ["0px", "-120px"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.72, 1], [1, 1, 0]);
  const ruleScale = useTransform(heroProgress, [0, 0.9], [0.08, 1]);
  const heroBgScale = useTransform(heroProgress, [0, 1], [1.08, 1]);
  const heroBgY = useTransform(heroProgress, [0, 1], ["0px", "90px"]);
  const trackX = useTransform(
    trackProgress,
    [0.04, 0.78],
    ["0vw", `-${(tribeProjects.length - 1) * 100}vw`]
  );

  return (
    <main className="bg-dark font-head text-light">
      <section
        ref={heroRef}
        className="relative grid min-h-screen items-center overflow-hidden bg-dark px-4 pb-20 pt-32 sm:px-6 lg:px-8"
      >
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ scale: heroBgScale, y: heroBgY }}
        >
          <Image
            src="/projects/generated/ananta-arrival-path.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,36,18,0.92)_0%,rgba(43,36,18,0.74)_45%,rgba(43,36,18,0.44)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(75,61,26,0.12)_0%,#4B3D1A_100%)]" />
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto grid w-full max-w-7xl gap-7"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="flex max-w-[46rem] items-center gap-4 text-sm font-semibold uppercase tracking-[0.18em] text-cream-deep">
            <span>Scroll through our collection</span>
            <motion.span
              className="h-px flex-1 origin-left bg-cream-deep/45"
              style={{ scaleX: ruleScale }}
            />
          </div>
          <h1 className="max-w-[10ch] text-[clamp(3.2rem,8.8vw,8rem)] font-semibold uppercase leading-[0.92] text-cream sm:max-w-[12ch]">
            Every project has a place
          </h1>
          <p className="max-w-[44rem] text-base leading-relaxed text-cream-deep sm:text-xl">
            Tribe projects are built around verified ownership, natural setting,
            and a second-home rhythm that feels considered from the first visit.
          </p>
        </motion.div>
      </section>

      <section
        ref={horizontalRef}
        className="relative h-[520vh] overflow-clip bg-dark"
      >
        <div className="sticky top-0 min-h-screen overflow-hidden">
          <motion.div
            className="flex h-screen w-max"
            style={{ x: trackX }}
          >
            {tribeProjects.map((project, index) => (
              <ProjectPanel
                key={project.name}
                project={project}
                index={index}
                progress={trackProgress}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
