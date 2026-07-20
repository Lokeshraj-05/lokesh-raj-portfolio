"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowDown, FileDown, Send } from "lucide-react";
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
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 -z-10 grid-backdrop" />

      <div className="section-container flex flex-col items-center text-center">
        <ProfilePicture />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-col items-center"
        >
          <motion.div
            variants={item}
            className="eyebrow mb-5 flex items-center gap-2 rounded-full glass px-4 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {profile.status}
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-sm uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-primary sm:text-base"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              data-cursor-hover
              className="group flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
           <a
  href="#research"
  data-cursor-hover
  className="glass flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
>
  Research
</a>
            <a
              href="#contact"
              data-cursor-hover
              className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-muted transition-colors hover:border-white/25 hover:text-white"
            >
              <Send size={15} />
              Connect
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {[
              { href: socials.github, icon: Github, label: "GitHub" },
              { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: socials.instagram, icon: Instagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-cursor-hover
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all hover:-translate-y-1 hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
