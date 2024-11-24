import React, { useEffect, useState } from "react";

import { motion, useSpring } from "framer-motion";

import Link from "next/link";

const spring = {
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

export default function ProjectLinkOverlay({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const { x, y } = mousePosition;

  useEffect(() => {
    // GET THE PARENT STICKY ELEMENT
    const el = document.querySelector("#single-project-sticky");

    //SET THE MOUSE POSITION
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const targetX = clientX - window.innerWidth / 2;
      const targetY =
        clientY - window.innerHeight / 2 - el.getBoundingClientRect().top;
      mousePosition.x.set(targetX);
      mousePosition.y.set(targetY);
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      mousePosition.x.set(0);
      mousePosition.y.set(0);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return (
    <Link
      href={project.href}
      className="overlay mix-blend-difference"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="overlay flex items-center justify-center text-primary"
        style={{
          x,
          y,
        }}
      >
        <h4 className="text-center text-4xl">
          {project.name}
          <br />
          (View)
        </h4>
      </motion.div>
    </Link>
  );
}
