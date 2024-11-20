"use client";

import {
  useScroll,
  motion,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./hero-section";

export default function OtherProjects({ nextProject }) {
  const router = useRouter();
  const [redirected, setRedirected] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest === 1 && !redirected) {
      setRedirected(true);
      setTimeout(() => {
        router.replace(nextProject.href);
      }, 405);
    }
  });

  return (
    <motion.section className="relative h-[200vh]" ref={ref}>
      <div className="sticky top-0">
        <div className="absolute left-0 top-0 w-full">
          <motion.div
            className="h-2 w-full origin-left-center bg-emerald-400"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

        <HeroSection project={nextProject} />
      </div>
    </motion.section>
  );
}
