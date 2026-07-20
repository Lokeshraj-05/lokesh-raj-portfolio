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
},
{
  icon: Eye,
  label: "Computer Vision",
  desc: "Developing systems that perceive, detect, and understand visual information from the real world.",
},
{
  icon: Database,
  label: "Data Analytics",
  desc: "Transforming complex data into actionable insights through analysis, visualization, and interpretation.",
},
{
  icon: Code2,
  label: "Full Stack Development",
  desc: "Designing and deploying scalable applications with modern frontend, backend, and API technologies.",
},
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
            <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-wider text-muted">
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-lg font-bold text-white">8.3</div>
                CGPA
              </div>
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-lg font-bold text-white">2027</div>
                Graduating
              </div>
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-lg font-bold text-white">2+</div>
                Core Projects
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.label} delay={0.1 * i}>
                <div className="glass group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary/20 bg-white/5 text-primary transition-colors group-hover:text-accent">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-display text-base font-semibold">{p.label}</h3>
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
