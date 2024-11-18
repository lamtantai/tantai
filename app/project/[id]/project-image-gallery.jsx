import ImageWithOverlayDevice from "@/app/ui/image-with-overlay-device";
import Image from "next/image";
import React from "react";

export default function ProjectImageGallery({ project }) {
  return (
    <section className="w-full">
      <ul>
        {project.srcImageGallery.map((srcImage, i) => (
          <li className="bg-[#e6e9eb]" key={srcImage}>
            {i % 2 === 0 ? (
              <div className="px-space-md py-space-xl lg:px-space-xl">
                <ImageWithOverlayDevice src={srcImage} />
              </div>
            ) : (
              <div className="relative aspect-[5/4] lg:aspect-video">
                <Image
                  src={srcImage}
                  alt="project image"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
