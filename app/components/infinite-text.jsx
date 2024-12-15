"use client";

import React from "react";

import { motion } from "framer-motion";

import AnimatedInView from "./animated-in-view";

import { clippathInLeft } from "../utils/animations";

const translateX = {
  initial: {
    x: 0,
  },

  enter: {
    x: "-100%",
    transition: { duration: 15, ease: "linear", repeat: Infinity },
  },

  slow: {
    x: "-100%",
    transition: { duration: 40, ease: "linear", repeat: Infinity },
  },
};

export default function InfiniteText() {
  return (
    <motion.div
      className="whitespace-nowrap bg-primary text-xlarge/none font-semibold text-secondary"
      initial="initial"
      whileInView="enter"
    >
      <AnimatedInView animation={clippathInLeft}>
        <div
          id="text-infinite"
          className="relative flex flex-nowrap overflow-clip whitespace-nowrap py-space-md"
          aria-hidden="true"
        >
          <motion.span className="text-nowrap" variants={translateX}>
            Say hi with me 👋 Say hi with me 👋 Say hi with me{" "}
            <span className="mr-4">👋</span>
          </motion.span>
          <motion.span className="text-nowrap" variants={translateX}>
            Say hi with me 👋 Say hi with me 👋 Say hi with me{" "}
            <span className="mr-4">👋</span>
          </motion.span>
        </div>
      </AnimatedInView>
    </motion.div>
  );
}
