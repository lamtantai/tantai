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
        "group relative inline-block w-fit pb-1 text-lg font-semibold uppercase duration-500 hover:-translate-y-1",
        themeClasses.text,
        className,
      )}
    >
      {label}
      <div
        className={twMerge(
          "absolute bottom-0 left-0 h-[2px] w-full origin-left-center transition-transform duration-500 group-hover:origin-right-center group-hover:scale-x-0",
          themeClasses.bg,
        )}
      />
    </Link>
  );
}
