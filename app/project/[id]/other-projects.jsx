"use client";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useInView } from "framer-motion";
import HeroSection from "./project-description";
import { useSmoothScroll } from "@/app/components/locomotive-scroll";

export default function OtherProjects({ nextProject }) {
  const { stopScroll, startScroll } = useSmoothScroll();

  const ref = useRef(null);
  const router = useRouter();

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      router.replace(nextProject.href);
      stopScroll();
    }

    return () => {
      startScroll();
    };
  });

  return (
    <>
      <HeroSection project={nextProject} />
      <div className="relative" aria-hidden>
        <div
          className="absolute bottom-0 left-0 h-[1px] w-full opacity-0"
          ref={ref}
        />
      </div>
    </>
  );
}
