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
          className={`flex items-center gap-2 border border-white/[0.06] bg-[#0e0e0e]/90 px-4 py-2 font-display text-sm font-semibold tracking-[0.15em] text-foreground backdrop-blur-sm transition-all ${
            scrolled ? "opacity-100" : "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100"
          }`}
          style={{ boxShadow: "inset 0 1px 0 rgba(110,128,152,0.07)" }}
        >
          <span className="h-1.5 w-1.5 bg-primary" />
          LOKI
        </a>

        <nav
          className={`hidden items-center gap-0.5 border border-white/[0.06] bg-[#0e0e0e]/85 px-1.5 py-1.5 backdrop-blur-sm md:flex ${
            scrolled ? "shadow-depth" : ""
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="group relative px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-cursor-hover
          className="btn-nav-cta hidden md:block"
        >
          Reach Out
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="border border-white/[0.08] bg-[#111111] p-2.5 text-foreground md:hidden"
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
            <div className="surface-inset flex flex-col gap-0.5 p-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-l border-transparent px-4 py-3 font-mono text-sm uppercase tracking-wider text-muted transition-all hover:border-primary hover:bg-white/[0.02] hover:text-foreground"
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
