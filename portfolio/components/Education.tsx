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

        <div className="relative mt-14 ml-3 pl-8 sm:ml-6">
          {/* Timeline spine */}
          <div
            className="absolute bottom-0 left-0 top-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(110,128,152,0.35) 0%, rgba(110,128,152,0.10) 60%, transparent 100%)",
            }}
          />

          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={i * 0.15} className="relative mb-12 last:mb-0">
              {/* Node */}
              <span className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center sm:-left-[41px]">
                <span className="absolute h-8 w-8 rounded-full border border-[rgba(143,163,184,0.22)] bg-[#0e0e0e]" />
                <span className="absolute h-3 w-3 rounded-full bg-primary/80" />
                <GraduationCap size={14} className="relative z-10 text-primary" />
              </span>

              <div
                className="group rounded-[1.75rem] border border-white/[0.05] bg-[#0e0e0e] p-6 transition-all duration-400 sm:p-7"
                style={{
                  boxShadow: "inset 3px 0 0 rgba(110,128,152,0.22)",
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="eyebrow">{edu.duration}</span>
                  <span
                    className="border border-[rgba(143,163,184,0.15)] bg-[#141414] px-3 py-1 font-mono text-xs text-secondary"
                    style={{ borderRadius: "999px" }}
                  >
                    {edu.metric}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
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
