import React from "react";
import Image from "next/image";
import Container from "../components/container";
import SplitText from "../ui/split-text";
import { opacity } from "../utils/animations";

export default function AboutSection() {
  return (
    <section className="text-secondary lg:text-balance">
      <Container>
        <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-10">
          <h2 className="text-xl font-semibold md:flex-1 lg:text-2xl 2xl:text-4xl/tight">
            <SplitText
              text="Though my background is self-taught, I'm dedicated to continuously learning and applying new skills through hands-on projects. Each one is an opportunity to explore new concepts and build my experience."
              type="words"
              animation={opacity}
            />
          </h2>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:max-w-[45vw] sm:self-end md:flex-1">
            <Image
              src="/bin.jpg"
              alt="a"
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="mt-10 text-xl font-semibold lg:ml-[35%] lg:mt-20 lg:text-end lg:text-2xl 2xl:mt-20 2xl:text-4xl/tight">
          <SplitText
            text="Through out my projects, I have developed skills in React, Next.js, Tailwind CSS, and Framer Motion to craft responsive, interactive web interfaces."
            type="words"
            animation={opacity}
          />
        </h2>
      </Container>
    </section>
  );
}
