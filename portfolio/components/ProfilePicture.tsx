"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

/**
 * Profile showcase component.
 *
 * To use your own photo: drop a file at `public/linkedin-profile.jpeg`
 * (recommended: portrait/square image, at least 800x1000px). No code changes needed.
 */
export default function ProfilePicture() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Scroll-driven exit: fades, lifts, and tilts away as the user scrolls past the hero
  const scrollOpacity = useTransform(scrollY, [0, 420], [1, 0]);
  const scrollScale = useTransform(scrollY, [0, 420], [1, 0.85]);
  const scrollY_ = useTransform(scrollY, [0, 420], [0, -55]);
  const scrollRotateX = useTransform(scrollY, [0, 420], [0, 10]);
  const glowIntensity = useTransform(scrollY, [0, 420], [1, 0.35]);

  // Mouse-driven 3D tilt / parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltSpring = { stiffness: 150, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), tiltSpring);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), tiltSpring);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["10%", "90%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["10%", "90%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const particles = [
    { top: "8%", left: "-6%", size: 6, duration: 5.5, delay: 0 },
    { top: "22%", left: "104%", size: 4, duration: 6.5, delay: 0.6 },
    { top: "68%", left: "-8%", size: 5, duration: 7, delay: 1.1 },
    { top: "82%", left: "100%", size: 4, duration: 5, delay: 0.3 },
    { top: "-4%", left: "40%", size: 4, duration: 6, delay: 0.9 },
    { top: "104%", left: "60%", size: 5, duration: 6.8, delay: 1.4 },
  ];

  return (
    <motion.div
      style={{
        opacity: scrollOpacity,
        scale: scrollScale,
        y: scrollY_,
        rotateX: scrollRotateX,
        perspective: 1200,
      }}
      initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-[260px] sm:w-[320px]"
    >
      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute -z-0 rounded-full bg-primary/50"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px rgba(143,206,212,0.22)",
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Continuous float wrapper */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Mouse-tilt wrapper */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative"
        >
          {/* Matte frame with corner accents */}
          <div
            className="relative p-[2px]"
            style={{
              background: "linear-gradient(160deg, rgba(143,206,212,0.32) 0%, rgba(143,206,212,0.08) 50%, rgba(143,206,212,0.20) 100%)",
              boxShadow: "0 0 0 1px rgba(143,206,212,0.22), 0 0 28px rgba(143,206,212,0.10)",
            }}
          >
            {/* Card body */}
            <div
              className="relative aspect-[4/5] w-full overflow-hidden bg-[#111111]"
              style={{ transform: "translateZ(20px)" }}
            >
              <Image
                src="/linkedin-profile.jpeg"
                alt="Lokesh Raj J"
                fill
                sizes="(max-width: 640px) 260px, 320px"
                className="object-cover"
                priority
              />

              {/* Depth overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-white/[0.03]" />

              {/* Light sweep */}
              <motion.div
                className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                style={{ skewX: -18 }}
                animate={{ x: ["-140%", "260%"] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  repeatDelay: 3.5,
                  ease: "easeInOut",
                }}
              />

              {/* Mouse-reactive glare */}
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background: `radial-gradient(220px circle at ${glareX} ${glareY}, rgba(143,206,212,0.16), transparent 70%)`,
                }}
              />

              {/* Bottom strip */}
              <div className="absolute inset-x-0 bottom-0 border-t border-[rgba(143,206,212,0.18)] bg-[#0a0a0a]/80 px-4 py-3 backdrop-blur-xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-secondary">
                  AI &amp; Data Science
                </p>
              </div>
            </div>
          </div>

          {/* Secondary offset depth layer */}
          <div
            className="absolute inset-0 -z-10 border border-white/[0.04] bg-[#0e0e0e]"
            style={{ transform: "translateZ(-30px) translateY(14px) scale(0.96)" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
