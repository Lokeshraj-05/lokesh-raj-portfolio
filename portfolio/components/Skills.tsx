"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillCategories } from "@/lib/data";

const categoryStyles = [
  {
    container: "surface-inset border-l-[3px] border-l-primary/60 p-6 sm:p-7",
    label: "font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4 block",
    chip: "skill-chip skill-chip-a",
    layout: "flex flex-wrap gap-2",
  },
  {
    container: "surface-matte p-6 sm:p-8",
    label: "inline-block font-mono text-xs uppercase tracking-[0.2em] text-foreground mb-1 pb-3 border-b border-[rgba(143,206,212,0.28)] w-full",
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

// ── Databases ───────────────────────────────────────────────────────────────
// Two items: clean indexed rows with a divider, filling the card height evenly
function DatabasesCard({ skills }: { skills: string[] }) {
  return (
    <div className="card-hover h-full rounded-[1.75rem] bg-[#0d0d0d] border border-white/[0.05] p-6 sm:p-7 transition-all duration-300">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6 block">
        Databases
      </span>
      <div className="flex flex-col gap-0">
        {skills.map((skill, si) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: si * 0.08 }}
            className="flex items-center gap-4 border-b border-white/[0.05] py-4 last:border-b-0"
          >
            <span className="font-mono text-[10px] text-primary/60 shrink-0 tabular-nums">
              {String(si + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-sm text-foreground/90 font-medium">{skill}</span>
            <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-primary/40">
              SQL
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Data Analytics ──────────────────────────────────────────────────────────
// Two items: each rendered as a labelled tool entry with a type annotation
function DataAnalyticsCard({ skills }: { skills: string[] }) {
  const meta: Record<string, string> = {
    "Excel": "Spreadsheet",
    "Power BI": "Visualisation",
  };
  return (
    <div className="card-hover h-full rounded-[1.75rem] surface-soft p-6 sm:p-7 transition-all duration-300">
      <span className="font-display text-sm font-semibold text-foreground mb-6 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Data Analytics
      </span>
      <div className="flex flex-col gap-0">
        {skills.map((skill, si) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: si * 0.08 }}
            className="group flex items-center justify-between border-b border-white/[0.05] py-4 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-4 bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
              <span className="font-mono text-sm text-foreground/90 font-medium">{skill}</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary/50 group-hover:text-primary transition-colors duration-300">
              {meta[skill] ?? "Tool"}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Developer Tools ─────────────────────────────────────────────────────────
// Six items grouped into three logical sub-sections
const toolGroups = [
  { label: "Version Control", keys: ["Git", "GitHub"] },
  { label: "Editors & Notebooks", keys: ["VS Code", "Google Colab", "Jupyter Notebook"] },
  { label: "Documentation", keys: ["Overleaf (LaTeX)"] },
];

function DeveloperToolsCard({ skills }: { skills: string[] }) {
  const skillSet = new Set(skills);
  return (
    <div className="card-hover h-full rounded-[1.75rem] surface-layered p-6 sm:p-8 transition-all duration-300">
      <span className="eyebrow mb-6 block">Developer Tools</span>
      <div className="flex flex-col gap-5">
        {toolGroups.map((group, gi) => {
          const groupSkills = group.keys.filter((k) => skillSet.has(k));
          if (!groupSkills.length) return null;
          return (
            <div key={group.label}>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/55 mb-2.5 flex items-center gap-2">
                <span className="h-px w-3 bg-primary/40" />
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {groupSkills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.06 + si * 0.04 }}
                    className="skill-chip skill-chip-a"
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

            const style = categoryStyles[i % categoryStyles.length]!;
            return (
              <Reveal key={cat.id} delay={i * 0.08}>
                <div
                  className={`card-hover h-full rounded-[1.75rem] transition-all duration-300 ${style.container}`}
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
                    {cat.skills.map((skill, si) => animSpan(skill, si, style.chip))}
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
