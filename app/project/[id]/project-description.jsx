import React from "react";

import AnimatedButton from "@/app/ui/animated-button";
import AnimatedInView from "@/app/components/animated-in-view";
import DivideLine from "@/app/ui/divide-line";

import { clippathInDown, opacity, slideInUp } from "@/app/utils/animations";

export default function ProjectDescription({ project }) {
  return (
    <section className="">
      <div className="flex h-screen items-end">
        <div className="p-space-sm">
          <AnimatedInView animation={opacity}>
            <h1 className="font-minecraft text-large font-bold uppercase">
              {project.name}
            </h1>
          </AnimatedInView>

          <div className="flex flex-col gap-y-12 lg:flex-row lg:gap-x-16">
            {/* PROJECT DETAILS */}
            <div className="lg:order-1 lg:flex-[1.5]">
              <div className="flex flex-col gap-y-4 md:text-lg lg:gap-y-6">
                <AnimatedInView animation={slideInUp}>
                  <div className="flex justify-between">
                    <h3 className="text-xs text-secondary opacity-50 lg:text-base">
                      Year
                    </h3>
                    <p className="font-semibold xl:text-xl">{project.year}</p>
                  </div>
                </AnimatedInView>

                <DivideLine />

                <AnimatedInView animation={slideInUp}>
                  <div className="flex justify-between">
                    <h3 className="text-xs text-secondary opacity-50 lg:text-base">
                      Techs
                    </h3>
                    <ul className="flex flex-col text-end font-semibold sm:flex-row sm:gap-x-5 xl:text-xl">
                      {project.techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </AnimatedInView>

                <DivideLine />

                <AnimatedInView animation={slideInUp}>
                  <div className="flex justify-between">
                    <h3 className="text-xs text-secondary opacity-50 lg:text-base">
                      Type
                    </h3>
                    <p className="font-semibold xl:text-xl">{project.type}</p>
                  </div>
                </AnimatedInView>
              </div>
            </div>

            {/* PROJECT DESCRIPTION */}
            <div className="lg:flex-1">
              <AnimatedInView animation={clippathInDown}>
                <h2 className="mb-2 text-2xl font-semibold uppercase xl:text-4xl">
                  description
                </h2>

                <p className="mb-6 font-medium md:text-xl xl:text-2xl">
                  {project.description}
                </p>

                <div className="flex gap-x-6">
                  <AnimatedButton
                    href={project.liveDemo}
                    label="view live site"
                    color="black"
                    className="capitalize xl:text-xl"
                  />

                  <AnimatedButton
                    href={project.repository}
                    label="view code"
                    color="black"
                    className="capitalize xl:text-xl"
                  />
                </div>
              </AnimatedInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
