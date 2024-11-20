"use client";

import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function AnimatedButton({ label, href, color, className }) {
  const themeClasses = {
    text: color === "black" ? "text-secondary" : "text-primary",
    bg: color === "black" ? "bg-secondary" : "bg-primary",
  };

  return (
    <Link
      href={href}
      className={twMerge(
        "group relative inline-block w-fit font-minecraft text-lg font-semibold uppercase duration-500 hover:-translate-y-1",
        themeClasses.text,
        className,
      )}
    >
      {label}
      <div
        className={twMerge(
          "absolute bottom-0 left-0 h-[2px] w-full origin-right-center scale-x-0 transition-transform duration-500 group-hover:origin-left-center group-hover:scale-x-100",
          themeClasses.bg,
        )}
      />
    </Link>
  );
}
