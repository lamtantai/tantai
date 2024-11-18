"use client";

import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import { opacity, slideInUp } from "../utils/animations";

export default function SlideInUp({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -30% 0px" });
  return (
    <motion.div
      ref={ref}
      className="w-fit"
      initial="initial"
      animate={isInView && "enter"}
      variants={opacity}
    >
      {children}
    </motion.div>
  );
}
