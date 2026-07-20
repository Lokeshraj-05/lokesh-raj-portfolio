"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const ringX = useSpring(mouseX, { damping: 22, stiffness: 150, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 150, mass: 0.6 });

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, visible]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[998] hidden md:block">
      <motion.div
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-accent"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-primary/60"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 52 : 32,
          height: isPointer ? 52 : 32,
          opacity: visible ? (isPointer ? 0.8 : 0.4) : 0,
          transition: "width 0.25s ease, height 0.25s ease, opacity 0.25s ease",
        }}
      />
    </div>
  );
}
