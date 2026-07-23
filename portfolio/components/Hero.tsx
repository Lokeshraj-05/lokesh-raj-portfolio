"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import ProfilePicture from "./ProfilePicture";
import { profile, socials } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 -z-10 grid-backdrop" />

      <div className="section-container flex flex-col items-center text-center">
        <ProfilePicture />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-center"
        >
          <motion.div
            variants={item}
            className="eyebrow mb-6 flex items-center gap-2.5 border border-[rgba(127,174,181,0.22)] bg-[#0e0e0e] px-4 py-1.5"
            style={{ boxShadow: "0 0 0 1px rgba(127,174,181,0.14), inset 0 1px 0 rgba(127,174,181,0.08)", borderRadius: "999px" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            {profile.status}
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-sm uppercase tracking-[0.25em] text-secondary sm:text-base"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex items-center gap-3">
            {[
              { href: socials.github, icon: Github, label: "GitHub" },
              { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: socials.instagram, icon: Instagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }, i) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-cursor-hover
                className={`btn-icon h-11 w-11 ${i === 1 ? "rounded-sm" : i === 2 ? "rounded-full" : ""}`}
                style={i === 0 ? { borderRadius: 0 } : undefined}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
