import React from "react";

import Image from "next/image";

import AnimatedInView from "@/app/components/animated-in-view";
import Container from "@/app/components/container";

import { clippathInDown } from "@/app/utils/animations";

export default function ProjectImageGallery({ project }) {
  return (
    <section className="border-b-2 border-secondary">
      <Container>
        <ul className="space-y-4 lg:space-y-10">
          {project.images.map((image, i) => (
            <AnimatedInView animation={clippathInDown} key={image}>
              <li>
                <div className="shimmer-bg relative aspect-[5/4] bg-gray-300 lg:aspect-[3/2]">
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

        <h3 className="my-space-md text-center text-2xl font-semibold lg:text-6xl">
          Scroll to explore more
        </h3>
      </Container>
    </section>
  );
}
