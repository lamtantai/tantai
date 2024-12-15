import React from "react";

import Image from "next/image";
import Link from "next/link";

import { clippathInUp } from "@/app/utils/animations";

import AnimatedInView from "@/app/components/animated-in-view";

import { projects } from "@/app/lib/data";

export default function AllProjects() {
  return (
    <section className="text-lg leading-none lg:text-xl">
      <div className="flex justify-between px-space-sm py-space-md font-semibold lg:text-3xl">
        <h3>All projects</h3>
        <h3>({projects.length})</h3>
      </div>

      <nav className="border-y-2 border-secondary px-space-sm pb-space-xl pt-space-md">
        <ul className="flex flex-col gap-y-16 md:flex-row md:flex-wrap md:justify-between">
          {projects.map((project, i) => (
            <li
              key={project.id}
              className="md:w-[calc(50%-var(--container-padding)/2)]"
            >
              <ProjectItem project={project} i={i + 1} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

function ProjectItem({ project, i }) {
  return (
    <div className="group relative overflow-clip">
      <AnimatedInView animation={clippathInUp}>
        <div className="shimmer-bg relative aspect-square w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt="project image"
            sizes="(min-width: 1024px) 60vw, 100vw"
            fill
            className="object-cover duration-500 group-hover:scale-75"
          />
        </div>
      </AnimatedInView>

      <div className="flex flex-wrap justify-between pt-space-sm font-semibold text-primary mix-blend-difference duration-500 group-hover:-translate-y-full group-hover:translate-x-[--container-padding] lg:flex-nowrap">
        <h3 className="pb-2 lg:basis-2/6">{project.name}</h3>
        <h3 className="lg:order-first lg:basis-1/6">{i}</h3>

        <h3 className="w-full lg:basis-3/6">({project.type})</h3>
      </div>

      <Link href={project.href} className="overlay" />
    </div>
  );
}
