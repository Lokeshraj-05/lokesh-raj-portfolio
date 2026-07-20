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
          <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-secondary/15 blur-[100px]" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-5">
                <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary/20 bg-white/5 text-primary sm:flex">
                  <FileText size={26} />
                </div>
                <div>
                  <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                    <BadgeCheck size={13} />
                    {publication.badge} Published
                  </span>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">{publication.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{publication.venue}</p>
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
                className="flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 md:self-center"
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
