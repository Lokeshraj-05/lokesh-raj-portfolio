"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillCategories } from "@/lib/data";

// Standard styles for categories 0–3 (Programming, AI, Backend, Databases)
// Categories 4 (Data Analytics) and 5 (Developer Tools) get custom renders below
const categoryStyles = [
  {
    container: "surface-inset border-l-[3px] border-l-primary/50 p-6 sm:p-7",
    label: "font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4 block",
    chip: "skill-chip skill-chip-a",
    layout: "flex flex-wrap gap-2",
  },
  {
    container: "surface-matte p-6 sm:p-8",
    label: "inline-block font-mono text-xs uppercase tracking-[0.2em] text-foreground mb-1 pb-3 border-b border-[rgba(127,174,181,0.22)] w-full",
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
  // Databases — two-column inline list with index markers
  null,
  // Data Analytics — two-column stat-style layout
  null,
  // Developer Tools — grouped rows with category dividers
  null,
];

function animSpan(skill: string, si: number, className: string) {
  return (
    <motion.span
      key={skill}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: si * 0.04 }}
      className={className}
    >
      {skill}
    </motion.span>
  );
}

// ── Databases card ──────────────────────────────────────────────────────────
function DatabasesCard({ skills }: { skills: string[] }) {
  return (
    <div className="h-full rounded-[1.75rem] bg-[#0d0d0d] border border-white/[0.04] p-6 sm:p-7 transition-all duration-400 hover:border-[rgba(127,174,181,0.28)]">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-5 block">
        Databases
      </span>
      <div className="grid grid-cols-2 gap-x-4 gap-y-0">
        {skills.map((skill, si) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: si * 0.06 }}
            className="flex items-center gap-3 border-b border-white/[0.04] py-3"
          >
            <span className="font-mono text-[10px] text-primary/50 shrink-0 w-4">
              {String(si + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs text-foreground/85">{skill}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Data Analytics card ─────────────────────────────────────────────────────
function DataAnalyticsCard({ skills }: { skills: string[] }) {
  return (
    <div className="h-full rounded-[1.75rem] surface-soft p-6 sm:p-7 transition-all duration-400 hover:border-[rgba(127,174,181,0.28)]">
      <span className="font-display text-sm font-semibold text-foreground mb-5 flex items-center gap-2">
        <span className="h-1 w-1 bg-primary" />
        Data Analytics
      </span>
      <div className="flex flex-col gap-0">
        {skills.map((skill, si) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: si * 0.07 }}
            className="group flex items-center justify-between border-b border-white/[0.05] py-3 last:border-b-0"
          >
            <span className="font-mono text-xs text-foreground/85">{skill}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary/50 group-hover:text-primary transition-colors duration-300">
              Tool
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Developer Tools card ────────────────────────────────────────────────────
const toolGroups = [
  { label: "Version Control", keys: ["Git", "GitHub"] },
  { label: "Editors & Notebooks", keys: ["VS Code", "Google Colab", "Jupyter Notebook"] },
  { label: "Documentation", keys: ["Overleaf (LaTeX)"] },
];

function DeveloperToolsCard({ skills }: { skills: string[] }) {
  const skillSet = new Set(skills);
  return (
    <div className="h-full rounded-[1.75rem] surface-layered p-6 sm:p-8 transition-all duration-400 hover:border-[rgba(127,174,181,0.28)]">
      <span className="eyebrow mb-5 block">Developer Tools</span>
      <div className="flex flex-col gap-5">
        {toolGroups.map((group, gi) => {
          const groupSkills = group.keys.filter((k) => skillSet.has(k));
          if (!groupSkills.length) return null;
          return (
            <div key={group.label}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/60 mb-2">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {groupSkills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: gi * 0.05 + si * 0.04 }}
                    className="skill-chip skill-chip-a rounded-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
            // Custom renders for refined cards
            if (cat.id === "databases") {
              return (
                <Reveal key={cat.id} delay={i * 0.08}>
                  <DatabasesCard skills={cat.skills} />
                </Reveal>
              );
            }
            if (cat.id === "analytics") {
              return (
                <Reveal key={cat.id} delay={i * 0.08}>
                  <DataAnalyticsCard skills={cat.skills} />
                </Reveal>
              );
            }
            if (cat.id === "tools") {
              return (
                <Reveal key={cat.id} delay={i * 0.08}>
                  <DeveloperToolsCard skills={cat.skills} />
                </Reveal>
              );
            }

            // Standard cards for remaining categories
            const style = categoryStyles[i % categoryStyles.length]!;
            return (
              <Reveal key={cat.id} delay={i * 0.08}>
                <div
                  className={`h-full rounded-[1.75rem] transition-all duration-400 hover:border-[rgba(127,174,181,0.30)] ${style.container}`}
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
                    {cat.skills.map((skill, si) =>
                      animSpan(skill, si, style.chip)
                    )}
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
