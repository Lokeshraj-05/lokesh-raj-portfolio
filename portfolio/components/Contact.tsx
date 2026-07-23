"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, socials } from "@/lib/data";

const contactCards = [
  {
    type: "link" as const,
    href: `mailto:${profile.email}`,
    icon: Mail,
    title: "Email",
    value: profile.email,
    surface: "border border-white/[0.06] bg-[#0e0e0e] hover:shadow-[inset_0_0_20px_rgba(127,174,181,0.07)]",
    iconWrap: "border border-[rgba(127,174,181,0.20)] bg-[#141414] text-primary",
  },
  {
    type: "link" as const,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
    title: "Phone",
    value: profile.phone,
    surface: "surface-inset hover:border-[rgba(127,174,181,0.26)]",
    iconWrap: "bg-primary/10 text-primary",
  },
  {
    type: "static" as const,
    icon: MapPin,
    title: "Location",
    value: profile.location,
    surface: "border-l-2 border-l-primary/40 bg-[#111111] border border-white/[0.04]",
    iconWrap: "bg-transparent text-secondary",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to internships, research collaborations, and freelance AI/ML work."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-3">
          {contactCards.map((card, i) => {
            const inner = (
              <>
                <div className={`flex h-12 w-12 items-center justify-center transition-colors ${card.iconWrap}`}>
                  <card.icon size={20} />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{card.title}</p>
                  <p className={`mt-1 text-xs text-muted ${card.title === "Email" ? "break-all" : ""}`}>
                    {card.value}
                  </p>
                </div>
              </>
            );

            return (
              <Reveal key={card.title} delay={0.05 + i * 0.1}>
                {card.type === "link" ? (
                  <a
                    href={card.href}
                    data-cursor-hover
                    className={`flex h-full flex-col items-center gap-3 rounded-[2rem] p-7 text-center transition-all duration-400 ${card.surface}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={`flex h-full flex-col items-center gap-3 rounded-[2rem] p-7 text-center ${card.surface}`}>
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="mt-10 flex flex-col items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            data-cursor-hover
            className="btn-primary px-8 py-4"
          >
            <Mail size={16} />
            Send Email
          </a>

          <div className="flex items-center gap-3">
            {[
              { href: socials.github, icon: Github, label: "GitHub" },
              { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: socials.instagram, icon: Instagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }, i) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-cursor-hover
                className={`btn-icon h-11 w-11 ${i === 0 ? "" : i === 1 ? "rounded-sm" : "rounded-full"}`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
