"use client";

import React, { useRef } from "react";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import Image from "next/image";

import Link from "next/link";
import AnimatedButton from "@/app/ui/animated-button";
import ProjectLinkOverlay from "./project-link-overlay";

import { projects } from "@/app/lib/data";

export default function ProjectList() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const percent = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const clipPath = useMotionTemplate`inset(${percent} 0 0 0)`;

  return (
    <section className="border-y-2 border-secondary font-minecraft font-semibold uppercase">
      <div ref={ref} className="relative z-10">
        <div className="absolute left-0 top-0 hidden h-full w-full lg:block">
          <div
            className="sticky top-0 h-screen overflow-hidden"
            id="single-project-sticky"
          >
            <SingleProjectDesktop project={projects[0]} />
            <SingleProjectDesktop project={projects[1]} clipPath={clipPath} />
          </div>
        </div>

        <div className="h-full w-full lg:pointer-events-none">
          <SingleProjectMobile project={projects[0]} i={1} />
          <SingleProjectMobile project={projects[1]} i={2} />
        </div>
      </div>

      <div className="mb-space-xl mt-space-sm text-center lg:text-5xl">
        <AnimatedButton
          label="see more project"
          href="/project"
          color="black"
          className="text-2xl lg:text-5xl"
        />
      </div>
    </section>
  );
}

function SingleProjectDesktop({ project, clipPath }) {
  return (
    <motion.div className="overlay group overflow-hidden" style={{ clipPath }}>
      <Image
        src={project.mockup}
        alt="project image"
        fill
        sizes="(min-width: 1024px) 100vw,0vw"
        className="object-cover duration-500 group-hover:scale-105"
      />

      <ProjectLinkOverlay project={project} />
    </motion.div>
  );
}

function SingleProjectMobile({ project, i }) {
  return (
    <div className="relative lg:h-screen">
      <div className="p-space-sm lg:hidden">
        <h4 className="text-4xl">{i}</h4>

        <h2 className="py-space-lg text-6xl">{project.name}</h2>

        <div className="flex items-center justify-between text-xl">
          <h4>{project.type}</h4>
          <span className="">&#10132;</span>
        </div>
      </div>

      <div className="relative aspect-square bg-gray-500 md:aspect-video lg:hidden">
        <Image
          src={project.mockup}
          alt="project image"
          fill
          sizes="(min-width: 1024px) 0vw, 100vw"
          className="object-cover lg:hidden"
        />
      </div>

      <Link href={project.href} className="overlay lg:hidden" />
    </div>
  );
}
