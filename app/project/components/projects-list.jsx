"use client";

import InfiniteText from "@/app/components/infinite-text";
import Cursor from "@/app/ui/cursor";
import { projectsListData, projects } from "@/app/lib/data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Container from "@/app/components/container";
import SplitText from "@/app/components/ui/split-text";
import { opacity } from "@/app/utils/animations";

export default function ProjectsList() {
  return (
    <section className="">
      <Container>
        <nav>
          <ul>
            {projects.map((project, i) => (
              <li key={project.id} className="py-space-md">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}

function ProjectCard({ project }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const isInView = useInView(ref, { margin: "0% 0px -30% 0px", once: "true" });

  return (
    <div
      className="relative flex h-fit flex-col gap-y-3 overflow-clip lg:flex-row lg:justify-between"
      ref={ref}
    >
      <motion.div
        className="relative aspect-[4/5] sm:aspect-[5/4] lg:basis-2/3 2xl:aspect-[16/10]"
        animate={{
          clipPath: isInView ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
          transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Cursor isHovered={isHovered} />

        <Link
          href={project.href}
          className="absolute inset-0 z-10 flex h-full w-full items-start justify-center"
        />
        <Image
          src={project.thumbnail}
          alt="project image"
          sizes="100%"
          fill
          className="object-cover"
          style={{
            scale: isInView ? 1 : 1.5,
            transition: "scale 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        />
      </motion.div>

      <div className="lg:basis-1/4">
        <div className="sticky top-5 flex flex-col gap-y-3 text-secondary lg:gap-y-8">
          <div className="uppercase">
            <span className="font-minecraft text-3xl font-bold md:text-4xl">
              {project.name}
            </span>

            <div className="flex justify-between text-sm font-semibold md:text-base lg:max-w-72">
              <span className="">{project.type}</span>
              <span className="">{project.year}</span>
            </div>
          </div>

          <p className="text-sm font-semibold sm:text-base">
            <SplitText
              text={project.description}
              type="words"
              animation={opacity}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
