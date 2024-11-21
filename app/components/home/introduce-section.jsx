import React from "react";

import SplitText from "@/app/ui/split-text";

import AnimatedButton from "@/app/ui/animated-button";
import Container from "../container";

import { opacity, slideInUp } from "@/app/utils/animations";

export default function IntroduceSection() {
  return (
    <section>
      <Container>
        <h2 className="font-bulevar text-[40vw]/none uppercase lg:-mb-[5vw]">
          <SplitText
            text="helloooo"
            type="chars"
            width="full"
            animation={slideInUp}
          />
        </h2>

        <div className="flex flex-col gap-y-4 lg:items-end lg:gap-y-10">
          <p className="text-balance text-[clamp(1.125rem,0.5266rem+2.5532vw,3rem)]/tight lg:w-3/4 lg:text-end">
            <SplitText
              text="My name is Tai, and I'm a self-taught front end web developer, who always trying to learn new things everyday."
              type="words"
              animation={opacity}
            />
          </p>

          <AnimatedButton
            label="more about me"
            color="black"
            href="/about"
            className="text-2xl xl:text-4xl"
          />
        </div>
      </Container>
    </section>
  );
}
