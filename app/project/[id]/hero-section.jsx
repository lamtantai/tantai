import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection({ project }) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-[1000px] px-space-sm pt-[calc(15vh+15vw)]">
        <h1 className="font-minecraft text-xlarge font-black uppercase">
          {project.name}
        </h1>

        <div className="flex flex-col gap-y-8">
          <div className="">
            <h2 className="text-lg font-medium md:text-2xl">
              {project.introduction}
            </h2>

            <Link href="" className="mt-10">
              view live site
            </Link>
          </div>

          <div className="flex flex-col gap-y-6 uppercase">
            <div className="">
              <h4 className="text-xs text-secondary opacity-50 md:text-base">
                year
              </h4>
              <div className="my-3 h-[1px] w-full bg-secondary opacity-50"></div>
              <p className="capitalize md:text-xl">{project.year}</p>
            </div>
            <div className="">
              <h4 className="text-xs text-secondary opacity-50 md:text-base">
                type
              </h4>
              <div className="my-3 h-[1px] w-full bg-secondary opacity-50"></div>
              <p className="capitalize md:text-xl">{project.type}</p>
            </div>
            <div className="">
              <h4 className="text-xs text-secondary opacity-50 md:text-base">
                techs
              </h4>
              <div className="my-3 h-[1px] w-full bg-secondary opacity-50"></div>
              <ul className="flex flex-wrap justify-between capitalize md:text-xl">
                {project.techs.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pt-space-lg md:py-space-xl"
        data-scroll-section
        data-scroll
      >
        <div className="relative mx-auto aspect-square md:w-[85%] lg:aspect-video">
          <Image
            src={project.srcImage}
            alt="project image"
            fill
            sizes="100%"
            className="h-[120%] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
