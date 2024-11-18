"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InfiniteText() {
  return (
    <div
      id="text-infinite"
      className="group relative flex flex-nowrap overflow-clip bg-primary py-space-md text-xlarge/none font-semibold text-secondary"
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
  );
}
