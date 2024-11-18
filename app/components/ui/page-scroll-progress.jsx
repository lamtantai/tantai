"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function PageScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="fixed bottom-0 z-40 h-2 bg-teal-400"
      style={{ width }}
    />
  );
}
