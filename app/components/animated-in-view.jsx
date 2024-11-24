"use client";

import React from "react";

import { motion } from "framer-motion";

export default function AnimatedInView({ children, animation, className }) {
  return (
    <motion.div
      initial="initial"
      whileInView="enter"
      viewport={{ once: true }}
      variants={animation}
      className={className}
    >
      {children}
    </motion.div>
  );
}
