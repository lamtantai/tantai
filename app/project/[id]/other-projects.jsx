"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { useScroll, useMotionValueEvent } from "framer-motion";

import HeroSection from "./hero-section";

export default function OtherProjects({ nextProject }) {
  const router = useRouter();

  const { scrollYProgress } = useScroll();

  const [isRedirected, setIsRedirected] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest === 1 && !isRedirected) {
      setIsRedirected(true);
      setTimeout(() => {
        router.push(nextProject.href);
      }, 100);
    }
  });

  return (
    <>
      <HeroSection project={nextProject} />
    </>
  );
}
