"use client";

import { FileText, ExternalLink, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { publication } from "@/lib/data";

export default function Publications() {
  return (
    <section id="research" className="relative py-28 md:py-36">
      <div className="section-container">
        <SectionHeading
          eyebrow="Research"
          title="Publications"
          description="Peer-reviewed work documenting the systems I've built."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="card-hover relative overflow-hidden rounded-[2rem] border border-[rgba(143,206,212,0.24)] bg-[#0c0c0c] p-8 sm:p-10"
            style={{ boxShadow: "0 0 0 1px rgba(143,206,212,0.14), 0 0 20px rgba(143,206,212,0.08), 0 16px 40px rgba(0,0,0,0.46)" }}
          >
            {/* Left accent bar */}
            <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/15 to-transparent" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:pl-4">
              <div className="flex gap-5">
                <div className="hidden h-16 w-16 shrink-0 flex-col items-center justify-center border border-[rgba(143,206,212,0.28)] bg-[#141414] text-primary sm:flex">
                  <FileText size={24} />
                  <span className="mt-1 font-mono text-[8px] uppercase tracking-widest text-muted">Pub</span>
                </div>
                <div>
                  <span className="mb-3 inline-flex items-center gap-1.5 border border-[rgba(143,206,212,0.32)] bg-[#111111] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary" style={{ borderRadius: "999px" }}>
                    <BadgeCheck size={12} />
                    {publication.badge} Published
                  </span>
                  <h3 className="font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                    {publication.title}
                  </h3>
                  <p className="mt-2 font-mono text-sm text-secondary">{publication.venue}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {publication.description}
                  </p>
                </div>
              </div>

              <a
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="btn-primary shrink-0 self-start px-6 py-3.5 text-sm md:self-center"
              >
                View Publication
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
