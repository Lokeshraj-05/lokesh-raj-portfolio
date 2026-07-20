import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted">
  AI Engineer • Researcher • Builder
</p>
      </div>
    </footer>
  );
}
