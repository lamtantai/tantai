"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <AnimatePresence mode="wait">
      <div className="" key={pathname}>
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-50 flex h-screen w-full items-center bg-red-500"
          initial={{ top: "-100vh" }}
          animate={{
            top: "0vh",
            transition: { duration: 2 },
            transitionEnd: { top: "100vh" },
          }}
          exit={{ top: "0vh", transition: { duration: 2 } }}
        >
          <p className="text-center text-6xl text-secondary">{pathname}</p>
        </motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
}
