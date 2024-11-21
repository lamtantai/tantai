"use client";

import React, { useRef, useState } from "react";

import { useScroll } from "framer-motion";

import Cursor from "../../ui/cursor";
import Container from "../container";
import ProjectImage from "./project-image";
import AnimatedInView from "../animated-in-view";

import { clippathInDown } from "@/app/utils/animations";

import { projects } from "@/app/lib/data";

export default function AllProjects() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section>
      <Container>
        <AnimatedInView animation={clippathInDown}>
          <h2 className="pb-space-sm text-large/none font-black uppercase">
            all projects
          </h2>
        </AnimatedInView>
      </Container>

      <div
        ref={ref}
        className="relative z-10 h-[300vh]"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Cursor isHovered={isHovered} />
        <div className="sticky top-0 h-screen">
          {projects.map((project, i) => {
            const start = (i - 1) / (projects.length - 1);
            const end = i / (projects.length - 1);
            return (
              <ProjectImage
                i={i}
                key={i}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
                project={project}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
