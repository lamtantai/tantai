import Container from "@/app/components/container";
import Image from "next/image";
import React from "react";

export default function ProjectImageGallery({ project }) {
  return (
    <section className="w-full py-space-lg md:py-space-xl">
      <Container>
        <ul className="space-y-4 lg:space-y-10">
          {project.images.map((image, i) => (
            <li className="bg-[#e6e9eb]" key={image}>
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
          ))}
        </ul>
      </Container>
    </section>
  );
}
