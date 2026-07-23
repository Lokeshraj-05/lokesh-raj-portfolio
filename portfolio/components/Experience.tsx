"use client";

import { Briefcase } from "lucide-react";
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
              <div className="grid gap-6 rounded-[2rem] border border-white/[0.05] bg-[#0e0e0e] p-7 transition-all duration-400 sm:p-9 md:grid-cols-[1fr_2fr] md:gap-10"
                style={{ boxShadow: "0 0 0 1px rgba(127,174,181,0.10), 0 12px 32px rgba(0,0,0,0.40)" }}
              >
                {/* Left column — role metadata */}
                <div className="relative md:border-r md:border-white/[0.05] md:pr-8">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center border border-[rgba(127,174,181,0.22)] bg-[#141414] text-primary" style={{ borderRadius: "6px" }}>
                    <Briefcase size={18} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">{exp.role}</h3>
                  <p className="mt-1 text-sm text-muted">{exp.org}</p>
                  <span className="eyebrow mt-4 inline-block text-[11px]">{exp.duration}</span>
                </div>

                {/* Right column — research points */}
                <ul className="space-y-4">
                  {exp.points.map((point, pi) => (
                    <li
                      key={point}
                      className="group flex items-start gap-4 text-sm leading-relaxed text-foreground/85 sm:text-base"
                    >
                      <span className="mt-2 flex shrink-0 flex-col items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/70 transition-colors group-hover:bg-accent-hover" />
                        {pi < exp.points.length - 1 && (
                          <span className="h-full min-h-[1rem] w-px bg-white/[0.06]" />
                        )}
                      </span>
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
