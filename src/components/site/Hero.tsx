import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useSiteData } from "@/lib/store";

export function Hero() {
  const { homepage } = useSiteData();
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      {/* Banner image — swap homepage.heroImage in admin or mockData */}
      <img
        src={homepage.heroImage}
        alt="Modern architecture by Prospera Arcon LLP"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="grid-pattern absolute inset-0 opacity-60" />

      <div className="container-x relative flex min-h-[78vh] flex-col justify-center py-24 lg:min-h-[86vh]">
        <span className="eyebrow animate-fade-up">Construction · Real Estate · Pune</span>
        <h1
          className="mt-6 max-w-4xl text-4xl leading-[1.08] font-semibold text-primary-foreground sm:text-5xl lg:text-7xl animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          {homepage.heroHeading}
        </h1>
        <p
          className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg lg:text-xl animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          {homepage.heroSubheading}
        </p>
        <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <Link to="/projects" className="btn btn-gold">
            {homepage.heroPrimaryCta} <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn btn-outline-light">
            {homepage.heroSecondaryCta}
          </Link>
        </div>
      </div>

      {/* Credibility strip */}
      <div className="relative border-t border-primary-foreground/10 bg-navy-deep/80 backdrop-blur">
        <div className="container-x grid grid-cols-2 divide-primary-foreground/10 py-5 md:grid-cols-4 md:divide-x">
          {homepage.heroBadges.map((b, i) => (
            <div key={b} className={`flex items-center gap-2.5 py-1.5 text-[13px] font-semibold tracking-wide text-primary-foreground/85 ${i > 0 ? "md:pl-6" : ""}`}>
              <CheckCircle2 size={16} className="shrink-0 text-gold" />
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
