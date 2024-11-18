import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticMotion({ children }) {
  const ref = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  function mouseMove(event) {
    const { clientX, clientY } = event;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({ x, y });
  }

  function mouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{
        x,
        y,
        transition: { type: "spring", stiffness: 150, mass: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
}
