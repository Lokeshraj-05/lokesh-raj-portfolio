"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[900] w-full transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <a
          href="#hero"
          data-cursor-hover
          className={`glass flex items-center gap-2 rounded-full px-4 py-2 font-display text-sm font-semibold tracking-wide transition-all ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
          }`}
        >
          LOKI
        </a>

        <nav className="hidden items-center gap-1 rounded-full glass px-2 py-2 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-cursor-hover
          className="hidden rounded-full bg-gradient-primary px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-105 md:block"
        >
          Reach Out
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="glass rounded-full p-2.5 text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="section-container mt-3 md:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-wider text-muted transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
