import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
  children?: ReactNode;
}) {
  const center = align === "center";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className={`eyebrow ${center ? "justify-center" : ""}`}>{eyebrow}</span>}
      <h2
        className={`mt-4 text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-primary-foreground" : ""
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
          {text}
        </p>
      )}
      {children}
    </div>
  );
}
