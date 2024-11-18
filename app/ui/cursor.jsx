import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

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

  const cursorSize = 100;

  // Handle mouse movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - cursorSize / 2;
    const targetY = clientY - cursorSize / 2;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  // Add the event listener on mount, and remove it on unmount
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Destructure x and y springs for use in motion styles
  const { x, y } = mousePosition;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden cursor-pointer items-center justify-center rounded-full bg-primary mix-blend-difference backdrop-blur-2xl lg:flex"
      initial={false}
      animate={{
        scale: isHovered ? 1 : 0,
      }}
      transition={{
        scale: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
      }}
      style={{
        x,
        y,
        width: cursorSize,
        height: cursorSize,
      }}
    >
      <span className="text-center text-base/none font-bold uppercase text-primary mix-blend-difference">
        view <br />
        project
      </span>
    </motion.div>
  );
}
