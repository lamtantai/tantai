"use client";

import { useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import ProjectSection from "./project-section";
import Cursor from "../../ui/cursor";
import { projectsListData } from "@/app/lib/data";

export default function LatestProject() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-primary text-secondary">
      <div
        className="relative z-10 h-[300vh]"
        ref={ref}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Cursor isHovered={isHovered} />
        <div className="sticky top-0 h-screen">
          {projectsListData.map((project, i) => {
            const start =
              i / (projectsListData.length - 1) -
              1 / (projectsListData.length - 1);
            const end = i / (projectsListData.length - 1);
            return (
              <ProjectSection
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
