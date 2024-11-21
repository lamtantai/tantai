import React from "react";

import Image from "next/image";

import AnimatedInView from "@/app/components/animated-in-view";
import Container from "@/app/components/container";

import { clippathInDown } from "@/app/utils/animations";

export default function ProjectImageGallery({ project }) {
  return (
    <section className="w-full py-space-lg md:py-space-xl">
      <Container>
        <ul className="space-y-4 lg:space-y-10">
          {project.images.map((image, i) => (
            <AnimatedInView animation={clippathInDown} key={image}>
              <li>
                <div className="relative aspect-[5/4] lg:aspect-video">
                  <Image
                    src={image}
                    alt="project image"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </li>
            </AnimatedInView>
          ))}
        </ul>
        <h3 className="mt-space-md text-center text-2xl font-semibold uppercase lg:text-6xl">
          Scroll for next project
        </h3>
      </Container>
    </section>
  );
}
