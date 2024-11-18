import React from "react";
import SplitText from "./ui/split-text";
import Link from "next/link";
import Container from "./container";
import { opacity, slideInUp } from "../utils/animations";

export default function IntroduceSection() {
  return (
    <section className="bg-primary text-secondary">
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

          <div className="group relative w-fit duration-500 hover:-translate-y-1">
            <Link
              href="/about"
              className="font-minecraft text-2xl font-bold uppercase xl:text-4xl"
            >
              More about me
            </Link>
            <div className="absolute bottom-0 left-0 h-[0.2em] w-full origin-right-center scale-x-0 bg-secondary transition-transform duration-500 group-hover:origin-left-center group-hover:scale-x-100" />
          </div>
        </div>

        <h2 className="pb-space-sm pt-space-xl font-bulevar text-xlarge/none font-black uppercase">
          All projects
        </h2>
      </Container>
    </section>
  );
}
