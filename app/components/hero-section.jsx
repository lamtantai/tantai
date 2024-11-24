"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import SplitText from "../ui/split-text";

import { slideInUp } from "@/app/utils/animations";

const delay = 1;

export default function HeroSection({ text }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.5], ["0vh", "-40vh"]);

  return (
    <section
      className="relative -z-10 -mb-[100vh] h-[200vh] bg-secondary"
      ref={container}
    >
      <motion.div
        className="sticky top-0 h-dvh bg-primary"
        style={{ scale, opacity, y }}
      >
        <div className="flex h-full flex-col justify-end px-space-sm pb-space-md">
          <div className="space-y-3">
            <StatusTag />

            <h1 className="text-large/tight font-semibold">
              <SplitText
                text={text}
                type="words"
                delay={delay}
                animation={slideInUp}
              />
            </h1>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatusTag() {
  return (
    <motion.button
      onClick={() => {
        document.getElementById("text-infinite").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      className="flex w-fit items-center justify-between gap-x-3 bg-zinc-500 px-5 py-3 text-primary"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: [0.65, 0, 0.35, 1],
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative size-2 rounded-full bg-green-500">
        <span className="absolute inset-0 h-full w-full animate-ping rounded-full bg-green-400"></span>
      </span>
      <h3 className="font-minecraft text-sm uppercase text-primary lg:text-lg">
        Available for job
      </h3>
    </motion.button>
  );
}
