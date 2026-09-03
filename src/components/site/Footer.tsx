import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { useSiteData } from "@/lib/store";

export function Footer() {
  const { settings, company, services } = useSiteData();
  const socials = [
    { icon: Facebook, href: settings.social.facebook, label: "Facebook" },
    { icon: Instagram, href: settings.social.instagram, label: "Instagram" },
    { icon: Linkedin, href: settings.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: settings.social.twitter, label: "Twitter" },
  ];

  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-gold text-navy-deep">
              <span className="font-display text-lg font-bold">P</span>
            </span>
            <span className="leading-none">
              <span className="block font-display text-base font-bold tracking-[0.12em]">{settings.logoText}</span>
              <span className="mt-1 block text-[10px] font-bold tracking-[0.35em] text-gold">{settings.logoSubtitle}</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">{settings.footerText}</p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: I, href, label }) => (
              <a
                key={label}
                href={href || "#"}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-gold hover:bg-gold hover:text-navy-deep"
              >
                <I size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold tracking-[0.2em] text-gold uppercase font-sans">Company</h4>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold tracking-[0.2em] text-gold uppercase font-sans">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            {services.filter((s) => s.enabled).sort((a, b) => a.order - b.order).map((s) => (
              <li key={s.id}>
                <Link to="/services" hash={s.id} className="hover:text-gold">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold tracking-[0.2em] text-gold uppercase font-sans">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/75">
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-gold" /><a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-gold">{company.phone}</a></li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-gold" /><span className="break-all">{company.email}</span></li>
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" /><span>{company.address}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-primary-foreground/55 sm:flex-row">
          <p>{settings.copyright}</p>
          <div className="flex items-center gap-4">
            <span>LLPIN: {company.llpin}</span>
            <Link to="/admin/login" className="font-semibold text-gold/90 underline-offset-4 hover:underline">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
