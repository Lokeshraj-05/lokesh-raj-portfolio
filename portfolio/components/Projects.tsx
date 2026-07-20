"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Check, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="section-container">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects"
          description="Systems built end-to-end — from raw data to a working interface."
        />

        {featured && (
          <Reveal delay={0.1} className="mt-14">
            <div className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 shadow-glow sm:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-[100px] transition-opacity duration-500 group-hover:opacity-80" />

              <div className="relative flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-white">
                  <Sparkles size={13} />
                  Featured Project
                </span>
              </div>

              <div className="relative mt-6 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">{featured.name}</h3>
                  <p className="mt-1 font-mono text-sm text-accent">{featured.tag}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {featured.description}
                  </p>
                  

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-4">

  <a
    href="https://github.com/Lokeshraj-05/ReSageAI"
    target="_blank"
    rel="noopener noreferrer"
    data-cursor-hover
    className="glass flex h-12 w-12 items-center justify-center rounded-full text-white transition-all hover:-translate-y-1 hover:text-accent"
  >
    <Github size={20} />
  </a>

  <a
    href="https://ieeexplore.ieee.org/document/11448669"
    target="_blank"
    rel="noopener noreferrer"
    data-cursor-hover
    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
  >
    View Publication
    <ArrowUpRight size={16} />
  </a>

</div>
                </div>

                <div className="grid grid-cols-1 gap-2.5 self-start sm:grid-cols-2">
                  {featured.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2.5 rounded-xl bg-white/5 px-3.5 py-2.5 text-sm text-white/85"
                    >
                      <Check size={14} className="shrink-0 text-primary" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="glass h-full rounded-2xl p-7 transition-colors duration-300 hover:border-primary/40 sm:p-8"
              >
                <h3 className="font-display text-xl font-bold sm:text-2xl">{p.name}</h3>
                <p className="mt-1 font-mono text-sm text-accent">{p.tag}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.description}</p>

                <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
  {p.features.map((f) => (
    <div
      key={f}
      className="flex items-center gap-2.5 rounded-xl bg-white/5 px-3.5 py-2.5 text-sm text-white/85"
    >
      <Check size={14} className="shrink-0 text-primary" />
      {f}
    </div>
  ))}
</div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
              
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
  <a
    href="https://github.com/Lokeshraj-05/dumper-safety-system"
    target="_blank"
    rel="noopener noreferrer"
    data-cursor-hover
    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
  >
    <Github size={18} />
    View Source Code
  </a>
</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
