"use client";

import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import { clippathInUp } from "../utils/animations";

export default function ClippathInUp({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -30% 0px" });
  return (
    <motion.div
      ref={ref}
      className="relative w-fit"
      initial="initial"
      animate={isInView && "enter"}
      variants={clippathInUp}
    >
      {children}
    </motion.div>
  );
}
