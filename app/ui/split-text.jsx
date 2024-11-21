"use client";

import React, { memo } from "react";

import { motion } from "framer-motion";

export default memo(function SplitText({
  text,
  type,
  animation = {},
  delay = 0,
  width,
}) {
  const words = text.split(" ");
  const chars = text.split("");

  return (
    <motion.span
      initial="initial"
      whileInView="enter"
      viewport={{ once: true }}
      variants={{
        enter: (delay) => ({
          transition: {
            staggerChildren: 0.035,
            delayChildren: delay,
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
});

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
