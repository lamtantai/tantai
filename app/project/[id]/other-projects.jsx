"use client";

import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import HeroSection from "./hero-section";

export default function OtherProjects({ nextProject }) {
  const router = useRouter();
  const [redirected, setRedirected] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.98 && !redirected) {
      setRedirected(true);
      setTimeout(() => {
        router.replace(nextProject.href);
      }, 1000);
    }
  });

  return (
    <motion.section
      className="relative h-[150vh]"
      ref={ref}
      animate={{ opacity: redirected ? 0 : 1, transition: { duration: 0.9 } }}
    >
      <div className="sticky top-0 h-screen">
        <div className="absolute left-0 top-0 w-full">
          <motion.div
            className="h-2 w-full origin-left-center bg-emerald-500"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
        <HeroSection project={nextProject} />
      </div>
    </motion.section>
  );
}
