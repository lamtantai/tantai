import { memo } from "react";

import { motion, useMotionTemplate, useTransform } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default memo(function ProjectImage({
  scrollYProgress,
  start,
  end,
  project,
  i,
}) {
  const block1 = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
  const block2 = useTransform(
    scrollYProgress,
    [start + 0.14, end],
    ["100%", "0%"],
  );
  const block3 = useTransform(
    scrollYProgress,
    [start + 0.31, end],
    ["100%", "0%"],
  );
  const block4 = useTransform(
    scrollYProgress,
    [start + 0.3, end],
    ["100%", "0%"],
  );
  const block5 = useTransform(
    scrollYProgress,
    [start + 0.33, end],
    ["100%", "0%"],
  );
  const block6 = useTransform(
    scrollYProgress,
    [start + 0.34, end],
    ["100%", "0%"],
  );
  const block7 = useTransform(
    scrollYProgress,
    [start + 0.36, end],
    ["100%", "0%"],
  );

  const clipPath = useMotionTemplate`polygon(0% 100%, 0% ${block1}, 14.28% ${block1}, 14.28% ${block2}, 28.56% ${block2}, 28.56% ${block3}, 42.84% ${block3}, 42.84% ${block4}, 57.12% ${block4}, 57.12% ${block5}, 71.40% ${block5}, 71.40% ${block6}, 85.68% ${block6}, 85.68% ${block7}, 100% ${block7}, 100% 100%)`;

  return (
    <motion.div
      className="absolute inset-0 h-screen"
      style={{
        clipPath: i === 0 ? "none" : clipPath,
      }}
    >
      <Link
        href={project.href}
        className="absolute inset-0 z-50 h-full w-full"
      />
      <Image
        src={project.thumbnail}
        alt="project image"
        fill
        className="object-cover"
      />

      <div className="relative flex h-full items-end px-space-md py-space-lg uppercase">
        <div className="flex w-full items-end justify-between">
          <h1 className="space-y-1 bg-secondary font-minecraft text-large/none uppercase text-primary">
            {project.name}
          </h1>
        </div>
      </div>
    </motion.div>
  );
});
