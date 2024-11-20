"use client";

import React from "react";

import { motion } from "framer-motion";

export default function AnimatedInView({ children, animation }) {
  return (
    <motion.div
      initial="initial"
      whileInView="enter"
      viewport={{ once: true }}
      variants={animation}
    >
      {children}
    </motion.div>
  );
}
