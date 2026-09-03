import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useSiteData } from "@/lib/store";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "Why Us", hash: "why-us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { settings, company } = useSiteData();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-border bg-background/95 shadow-card backdrop-blur" : "border-transparent bg-background"
      }`}
    >
      <div className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
        <Link to="/" className="flex items-center gap-3" aria-label={company.name}>
          <span className="flex h-10 w-10 items-center justify-center bg-navy text-primary-foreground">
            <span className="font-display text-lg font-bold">P</span>
          </span>
          <span className="leading-none">
            <span className="block font-display text-[15px] font-bold tracking-[0.12em] text-navy sm:text-base">
              {settings.logoText}
            </span>
            <span className="mt-1 block text-[10px] font-bold tracking-[0.35em] text-gold">{settings.logoSubtitle}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={"hash" in item ? item.hash : undefined}
              className="relative text-[13px] font-semibold tracking-wide text-charcoal/80 transition-colors hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={"hash" in item ? {} : { className: "text-navy after:w-full" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-semibold text-slate hover:text-navy">
            <Phone size={15} /> {company.phone}
          </a>
          <Link to="/contact" className="btn btn-gold px-5 py-3 text-xs">
            Enquire Now
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-background lg:hidden animate-fade-in">
          <nav className="container-x flex flex-col py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={"hash" in item ? item.hash : undefined}
                className="border-b border-border py-3.5 text-sm font-semibold text-charcoal last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-gold mt-4" onClick={() => setOpen(false)}>
              Enquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
