import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";
import { scale } from "../utils/animations";

export default function Cursor({ isHovered }) {
  // Define the spring configuration for smooth following motion
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  // Initialize mouse position with Framer Motion springs
  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const { x, y } = mousePosition;

  const cursorSize = 100;

  // Add the event listener on mount, and remove it on unmount
  useEffect(() => {
    // Handle mouse movement
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const targetX = clientX - cursorSize / 2;
      const targetY = clientY - cursorSize / 2;
      mousePosition.x.set(targetX);
      mousePosition.y.set(targetY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 cursor-pointer items-center justify-center rounded-full bg-primary mix-blend-difference lg:flex"
      initial={false}
      animate={isHovered ? "enter" : "initial"}
      variants={scale}
      style={{
        x,
        y,
        width: cursorSize,
        height: cursorSize,
      }}
    >
      <span className="text-center text-base/none font-bold uppercase text-primary mix-blend-difference">
        view project
      </span>
    </motion.div>
  );
}
