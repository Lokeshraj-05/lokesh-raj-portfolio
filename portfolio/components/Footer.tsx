import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04] py-12">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-sm font-medium tracking-wide text-foreground/80">
              {profile.name}
            </p>
            <p className="mt-1 font-mono text-[11px] tracking-wider text-muted">
              © {year} All rights reserved.
            </p>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent sm:block sm:mx-8" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted/70">
            AI Engineer · Researcher · Builder
          </p>
        </div>
      </div>
    </footer>
  );
}
