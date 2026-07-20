"use client";

import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="section-container">
        <SectionHeading
          eyebrow="Education"
          title="Academic Timeline"
          description="The foundation behind the systems I build."
        />

        <div className="relative mt-14 ml-3 border-l border-white/10 pl-8 sm:ml-6">
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={i * 0.15} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary shadow-glow sm:-left-[41px]">
                <GraduationCap size={15} className="text-white" />
              </span>

              <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-primary/40 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="eyebrow">{edu.duration}</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-accent">
                    {edu.metric}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold sm:text-2xl">
                  {edu.institution}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {edu.degree} — {edu.department}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
