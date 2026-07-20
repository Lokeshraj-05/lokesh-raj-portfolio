"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, socials } from "@/lib/data";

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

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          <Reveal delay={0.05}>
            <a
              href={`mailto:${profile.email}`}
              data-cursor-hover
              className="glass flex h-full flex-col items-center gap-3 rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold">Email</p>
                <p className="mt-1 break-all text-xs text-muted">{profile.email}</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              data-cursor-hover
              className="glass flex h-full flex-col items-center gap-3 rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold">Phone</p>
                <p className="mt-1 text-xs text-muted">{profile.phone}</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="glass flex h-full flex-col items-center gap-3 rounded-2xl p-7 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold">Location</p>
                <p className="mt-1 text-xs text-muted">{profile.location}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-10 flex flex-col items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            data-cursor-hover
            className="flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            <Send size={16} />
            Say Hello
          </a>

          <div className="flex items-center gap-4">
            {[
              { href: socials.github, icon: Github, label: "GitHub" },
              { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: socials.instagram, icon: Instagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-cursor-hover
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all hover:-translate-y-1 hover:text-accent"
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
