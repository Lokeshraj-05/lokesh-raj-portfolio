"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Github } from "lucide-react";
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
            <div className="group relative overflow-hidden rounded-[2rem] border border-[rgba(127,174,181,0.18)] bg-[#0c0c0c] p-8 sm:p-10"
              style={{ boxShadow: "0 0 0 1px rgba(127,174,181,0.12), 0 0 18px rgba(127,174,181,0.06), 0 16px 40px rgba(0,0,0,0.48)" }}
            >
              {/* Corner accents */}
              <span className="pointer-events-none absolute left-0 top-0 h-16 w-16 border-l border-t border-primary/25" />
              <span className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 border-b border-r border-primary/25" />

              <div className="relative flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 border border-[rgba(127,174,181,0.26)] bg-[#141414] px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary" style={{ borderRadius: "999px" }}>
                  <Sparkles size={12} />
                  Featured Project
                </span>
              </div>

              <div className="relative mt-6 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{featured.name}</h3>
                  <p className="mt-1 font-mono text-sm text-secondary">{featured.tag}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {featured.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-white/[0.07] bg-[#141414] px-3 py-1 font-mono text-[11px] text-foreground/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-3">
                    <a
                      href="https://github.com/Lokeshraj-05/ReSageAI"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="btn-icon h-12 w-12"
                    >
                      <Github size={20} />
                    </a>

                    <a
                      href="https://ieeexplore.ieee.org/document/11448669"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="btn-primary px-5 py-3 text-sm"
                    >
                      View Publication
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-0 self-start border border-white/[0.05] sm:grid-cols-2">
                  {featured.features.map((f, fi) => (
                    <div
                      key={f}
                      className={`flex items-center gap-2.5 px-3.5 py-3 text-sm text-foreground/80 ${
                        fi % 2 === 0 ? "bg-[#111111]" : "bg-[#0e0e0e]"
                      } ${fi < featured.features.length - 2 ? "border-b border-white/[0.04] sm:border-b-0" : ""}`}
                    >
                      <span className="font-mono text-[10px] text-primary/70">{String(fi + 1).padStart(2, "0")}</span>
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
                whileHover={{ boxShadow: "0 0 0 1px rgba(127,174,181,0.20), inset 0 0 24px rgba(127,174,181,0.05), 0 12px 32px rgba(0,0,0,0.45)" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full rounded-[1.75rem] border border-white/[0.06] bg-[#0e0e0e] p-7 sm:p-8"
                style={{ borderTop: "1px solid rgba(127,174,181,0.22)", boxShadow: "0 0 0 1px rgba(127,174,181,0.08), 0 8px 28px rgba(0,0,0,0.38)" }}
              >
                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">{p.name}</h3>
                <p className="mt-1 font-mono text-sm text-secondary">{p.tag}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.description}</p>

                <div className="mt-6 space-y-2">
                  {p.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-3 border-l border-[rgba(127,174,181,0.18)] py-1.5 pl-3 text-sm text-foreground/80 transition-colors group-hover:border-primary/50"
                    >
                      {f}
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-white/[0.06] pt-5 font-mono text-[11px] text-muted">
                  {p.tech.join(" · ")}
                </div>
                <div className="mt-6">
                  <a
                    href="https://github.com/Lokeshraj-05/dumper-safety-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="btn-outline inline-flex px-5 py-3 text-sm"
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
