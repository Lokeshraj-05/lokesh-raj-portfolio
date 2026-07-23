"use client";

import { Brain, Eye, Database, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const pillars = [
  {
    icon: Brain,
    label: "Artificial Intelligence",
    desc: "Building intelligent systems using machine learning, generative AI, and data-driven problem solving.",
    surface: "surface-inset border-l-2 border-l-primary/40",
    iconWrap: "bg-[#141414] border border-white/[0.06] text-primary",
  },
  {
    icon: Eye,
    label: "Computer Vision",
    desc: "Developing systems that perceive, detect, and understand visual information from the real world.",
    surface: "surface-matte corner-accent",
    iconWrap: "bg-transparent border border-[rgba(143,163,184,0.18)] text-secondary",
  },
  {
    icon: Database,
    label: "Data Analytics",
    desc: "Transforming complex data into actionable insights through analysis, visualization, and interpretation.",
    surface: "surface-soft border-t border-t-primary/25",
    iconWrap: "bg-[#0d0d0d] text-primary",
  },
  {
    icon: Code2,
    label: "Full Stack Development",
    desc: "Designing and deploying scalable applications with modern frontend, backend, and API technologies.",
    surface: "surface-layered",
    iconWrap: "bg-primary/10 text-primary",
  },
];

const stats = [
  { value: "8.3", label: "CGPA", style: "surface-inset px-4 py-3" },
  { value: "2027", label: "Graduating", style: "border border-[rgba(143,163,184,0.15)] bg-[#111111] px-4 py-3" },
  { value: "2+", label: "Core Projects", style: "surface-matte border-b border-b-primary/30 px-4 py-3" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="section-container">
        <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:gap-10">
          <div>
            <SectionHeading eyebrow="About Me" title="Curious by default, systematic by training." />
            <Reveal delay={0.15} className="mt-6">
              <p className="text-base leading-relaxed text-muted sm:text-lg">{profile.summary}</p>
            </Reveal>
            <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wider text-muted">
              {stats.map((s) => (
                <div key={s.label} className={s.style}>
                  <div className="text-lg font-bold text-foreground">{s.value}</div>
                  {s.label}
                </div>
              ))}
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.label} delay={0.1 * i}>
                <div
                  className={`group h-full rounded-[1.5rem] p-5 transition-all duration-500 ${p.surface} ${
                    i % 2 === 0
                      ? "hover:shadow-[inset_0_0_20px_rgba(110,128,152,0.04)]"
                      : "hover:border-[rgba(143,163,184,0.22)]"
                  }`}
                >
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center transition-colors duration-300 group-hover:text-accent-hover ${p.iconWrap}`}
                  >
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">{p.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
