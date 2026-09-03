import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="eager" />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-x relative py-20 lg:py-28">
        <span className="eyebrow animate-fade-up">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-primary-foreground sm:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: "80ms" }}>
          {title}
        </h1>
        {text && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg animate-fade-up" style={{ animationDelay: "160ms" }}>
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
