"use client";

import { Briefcase, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Research Experience"
          description="Hands-on work turning research into working systems."
        />

        <div className="mt-14 space-y-6">
          {experience.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.1}>
              <div className="glass grid gap-6 rounded-2xl p-7 transition-all duration-300 hover:border-primary/40 sm:p-9 md:grid-cols-[1fr_2fr]">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary/20 bg-white/5 text-primary">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{exp.role}</h3>
                  <p className="mt-1 text-sm text-muted">{exp.org}</p>
                  <span className="eyebrow mt-3 inline-block">{exp.duration}</span>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-white/80 sm:text-base">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
