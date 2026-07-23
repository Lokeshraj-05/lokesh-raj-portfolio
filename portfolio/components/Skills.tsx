"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillCategories } from "@/lib/data";

const categoryStyles = [
  {
    container: "surface-inset border-l-[3px] border-l-primary/50 p-6 sm:p-7",
    label: "font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4 block",
    chip: "skill-chip skill-chip-a",
    layout: "flex flex-wrap gap-2",
  },
  {
    container: "surface-matte p-6 sm:p-8",
    label: "inline-block font-mono text-xs uppercase tracking-[0.2em] text-foreground mb-1 pb-3 border-b border-[rgba(143,163,184,0.18)] w-full",
    chip: "skill-chip skill-chip-b",
    layout: "flex flex-wrap gap-x-4 gap-y-2",
  },
  {
    container: "surface-soft p-6 sm:p-7",
    label: "font-display text-sm font-semibold text-foreground mb-5 flex items-center gap-2",
    labelAccent: true,
    chip: "skill-chip skill-chip-c",
    layout: "grid grid-cols-2 gap-2 sm:grid-cols-3",
  },
  {
    container: "bg-[#0d0d0d] border border-white/[0.04] p-6 sm:p-7",
    label: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-4",
    chip: "skill-chip skill-chip-d",
    layout: "flex flex-col gap-1.5",
  },
  {
    container: "surface-layered p-6 sm:p-8",
    label: "eyebrow mb-5",
    chip: "skill-chip skill-chip-a rounded-none",
    layout: "flex flex-wrap gap-2.5",
  },
  {
    container: "border border-[rgba(143,163,184,0.12)] bg-[#111111] p-6 sm:p-7",
    label: "font-mono text-xs text-secondary uppercase tracking-widest mb-4 border-l border-primary pl-3",
    chip: "skill-chip skill-chip-c text-[11px]",
    layout: "flex flex-wrap gap-2",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Toolkit & Technologies"
          description="Grouped by discipline — from raw code to deployed intelligence."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillCategories.map((cat, i) => {
            const style = categoryStyles[i % categoryStyles.length];
            return (
              <Reveal key={cat.id} delay={i * 0.08}>
                <div
                  className={`h-full rounded-[1.75rem] transition-all duration-400 hover:border-[rgba(143,163,184,0.22)] ${style.container}`}
                >
                  {style.labelAccent ? (
                    <span className={style.label}>
                      <span className="h-1 w-1 bg-primary" />
                      {cat.label}
                    </span>
                  ) : (
                    <span className={style.label}>{cat.label}</span>
                  )}

                  <div className={style.layout}>
                    {cat.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: si * 0.04 }}
                        className={style.chip}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
