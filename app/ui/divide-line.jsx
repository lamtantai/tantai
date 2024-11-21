"use client";

import { motion } from "framer-motion";
import { scaleX } from "../utils/animations";

export default function DivideLine({ color }) {
  return (
    <motion.div
      className={`h-[2px] w-full origin-left-center opacity-50 ${color === "primary" ? "bg-primary" : "bg-secondary"} `}
      initial="initial"
      whileInView="enter"
      viewport={{ once: true }}
      variants={scaleX}
    />
  );
}
