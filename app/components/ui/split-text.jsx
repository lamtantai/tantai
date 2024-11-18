"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import splitText from "@/app/utils/split-text";

export default function SplitText({ text, type, animation, delay, width }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -30% 0px" });

  const { words, chars } = splitText(text);

  return (
    <motion.span
      ref={ref}
      initial="initial"
      animate={isInView && "enter"}
      variants={{
        enter: (delay) => ({
          transition: {
            staggerChildren: 0.035,
            delayChildren: delay ? delay : 0,
          },
        }),
      }}
      custom={delay}
      className={`${width === "full" ? "flex justify-between" : "inline-block"}`}
    >
      {type === "words" && <SplitWords words={words} animation={animation} />}

      {type === "chars" && <SplitChars chars={chars} animation={animation} />}
    </motion.span>
  );
}

function SplitWords({ words, animation }) {
  return words.map((word, i) => (
    <span className="inline-block overflow-clip" key={word + i}>
      <motion.span className="inline-block" variants={animation}>
        {word}
        {i < words.length - 1 ? "\u00A0" : ""}
      </motion.span>
    </span>
  ));
}

function SplitChars({ chars, animation }) {
  return chars.map((char, i) => (
    <span className="inline-block overflow-clip" key={char + i}>
      <motion.span className="inline-block" variants={animation}>
        {char}
      </motion.span>
    </span>
  ));
}
