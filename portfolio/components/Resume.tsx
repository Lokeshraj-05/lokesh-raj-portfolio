"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lock, Download, Eye } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/**
 * Resume section.
 * Drop your resume PDF at `public/resume.pdf` — the "View" and "Download"
 * buttons below already point to that path and require no code changes.
 */
export default function Resume() {
  return (
    <section id="resume" className="relative py-28 md:py-36">
      <div className="section-container">
        <SectionHeading
          eyebrow="Loki_Resume"
          title="Full Overview"
          description="A complete snapshot of my education, skills, and experience."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <Reveal>
            {/* Ambient glow behind card */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-xs"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(110,128,152,0.07) 0%, rgba(110,128,152,0.03) 50%, transparent 75%)",
                filter: "blur(32px)",
                transform: "scale(1.25)",
              }}
            />

            <motion.div
              initial={false}
              whileHover="hover"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              variants={{
                hover: { y: -8, scale: 1.03 },
              }}
              className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl"
              style={{
                boxShadow: "0 0 0 1px rgba(143,163,184,0.14), 0 0 32px rgba(110,128,152,0.05)",
              }}
            >
              {/* Breathing border glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 1px rgba(143,163,184,0.16), 0 0 24px rgba(110,128,152,0.05)",
                    "0 0 0 1px rgba(143,163,184,0.22), 0 0 32px rgba(110,128,152,0.07)",
                    "0 0 0 1px rgba(143,163,184,0.16), 0 0 24px rgba(110,128,152,0.05)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
              />

              {/* Resume image — edge to edge */}
              <Image
                src="/resume-preview.png"
                alt="Resume Preview"
                fill
                sizes="(max-width: 640px) 320px, 280px"
                className="object-cover object-top"
                priority
              />

              {/* Glassmorphism base tint */}
              <div className="pointer-events-none absolute inset-0 bg-background/10" />

              {/* Edge fade overlays — top */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-10"
                style={{
                  height: "38%",
                  background: "linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0.85) 40%, transparent 100%)",
                }}
              />
              {/* Edge fade — bottom */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
                style={{
                  height: "38%",
                  background: "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.85) 40%, transparent 100%)",
                }}
              />
              {/* Edge fade — left */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10"
                style={{
                  width: "22%",
                  background: "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.6) 50%, transparent 100%)",
                }}
              />
              {/* Edge fade — right */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10"
                style={{
                  width: "22%",
                  background: "linear-gradient(to left, #0a0a0a 0%, rgba(10,10,10,0.6) 50%, transparent 100%)",
                }}
              />

              {/* Center glass badge */}
              <motion.div
                variants={{ hover: { opacity: 0.85 } }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-2"
              >
                <div
                  className="flex flex-col items-center gap-2 rounded-2xl px-5 py-4 text-center"
                  style={{
                    background: "rgba(10,10,10,0.55)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(143,163,184,0.12)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
                  }}
                >
                  <Lock size={15} className="text-primary opacity-80" />
                  <p className="font-display text-[11px] font-semibold tracking-wide text-white/90">
                    Preview Available
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/45 leading-relaxed">
                    Open Resume to View<br />Complete Details
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="rounded-[2rem] border border-white/[0.06] bg-[#0e0e0e] p-8 sm:p-9"
              style={{ boxShadow: "inset 0 1px 0 rgba(110,128,152,0.05)" }}
            >
              <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                Get the complete picture, on paper.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                My resume covers everything on this page — education, skills, experience, and
                projects — formatted for a quick, recruiter-friendly read.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="Loki_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="btn-primary"
                >
                  <Eye size={16} />
                  View Resume
                </a>
                <a
                  href="Loki_Resume.pdf"
                  download
                  data-cursor-hover
                  className="inline-flex items-center gap-2 border border-dashed border-[rgba(143,163,184,0.22)] px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-[#141414]"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
