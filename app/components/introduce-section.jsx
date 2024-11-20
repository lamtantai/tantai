import React from "react";
import SplitText from "./ui/split-text";
import Container from "./container";
import { opacity, scaleX, slideInUp } from "../utils/animations";
import AnimatedInView from "./animated-in-view";
import AnimatedButton from "../ui/animated-button";

export default function IntroduceSection() {
  return (
    <section className="text-secondary">
      <Container>
        <h2 className="pt-space-xl font-bulevar text-[40vw]/none uppercase lg:-mb-[5vw]">
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

        <AnimatedInView animation={scaleX}>
          <h2 className="pb-space-sm pt-space-xl font-bulevar text-xlarge/none font-black uppercase">
            All projects
          </h2>
        </AnimatedInView>
      </Container>
    </section>
  );
}
