"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedInView from "./animated-in-view";
import { clippathInLeft, clippathInRight } from "../utils/animations";

export default function InfiniteText() {
  return (
    <div className="group bg-primary text-xlarge/none font-semibold text-secondary">
      <AnimatedInView animation={clippathInLeft}>
        <div
          id="text-infinite"
          className="relative flex flex-nowrap overflow-clip py-space-md"
          aria-hidden="true"
        >
          <motion.span className="animate-infinite-text-move text-nowrap">
            Say hi with me 👋 Say hi with me 👋 Say hi with me{" "}
            <span className="mr-4">👋</span>
          </motion.span>
          <motion.span className="animate-infinite-text-move text-nowrap">
            Say hi with me 👋 Say hi with me 👋 Say hi with me{" "}
            <span className="mr-4">👋</span>
          </motion.span>
        </div>
      </AnimatedInView>
    </div>
  );
}
