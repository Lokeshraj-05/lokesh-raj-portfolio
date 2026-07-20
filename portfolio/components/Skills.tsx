"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Toolkit & Technologies"
          description="Grouped by discipline — from raw code to deployed intelligence."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.08}>
              {/* iCloud-style oval category container */}
              <div className="glass h-full rounded-[2.5rem] p-7 transition-all duration-300 hover:border-primary/40 sm:p-8">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-1.5">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                    {cat.label}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: si * 0.05 }}
                      className="skill-pill px-4 py-2 font-mono text-xs text-white/90 sm:text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
