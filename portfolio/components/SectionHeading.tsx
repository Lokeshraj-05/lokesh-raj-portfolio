import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div className={`flex flex-col gap-3 ${align === "center" ? "items-center" : "items-start"}`}>
        <span className="eyebrow flex items-center gap-2.5">
          <span className="h-px w-6 bg-gradient-to-r from-primary to-transparent" />
          {eyebrow}
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className={`max-w-2xl text-base leading-relaxed text-muted ${align === "center" ? "mx-auto" : ""}`}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
