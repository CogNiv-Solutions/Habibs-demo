import type { SVGProps } from "react";
import { ArrowRight, MessageCircle, Scissors } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SALON_WHATSAPP_HREF } from "./salon-navbar";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

const socialLinks = [
  { label: "Instagram", href: "#", icon: InstagramIcon, note: "Link to be added", external: false },
  { label: "Facebook", href: "#", icon: FacebookIcon, note: "Link to be added", external: false },
  { label: "WhatsApp", href: SALON_WHATSAPP_HREF, icon: MessageCircle, note: null, external: true },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
] as const;

export function SalonFinalCta() {
  return (
    <section aria-labelledby="salon-final-cta-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-14 md:px-8 md:pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-[#a51c30] px-6 py-12 text-center text-white md:py-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <span className="absolute -left-8 -top-10 select-none font-serif text-[10rem] italic leading-none text-white/10">
                H
              </span>
              <span className="absolute -bottom-12 -right-6 select-none font-serif text-[10rem] italic leading-none text-white/10">
                S
              </span>
            </div>
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
              Habib&rsquo;s Hair &amp; Beauty Salon
            </p>
            <h2
              id="salon-final-cta-heading"
              className="relative mx-auto mt-4 max-w-[20ch] text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl"
            >
              YOUR NEXT LOOK{" "}
              <span className="font-serif font-medium italic">Starts Here.</span>
            </h2>
            <a
              href="#contact"
              className="btn-press group relative mx-auto mt-8 inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-white px-2 py-2 pl-8 pr-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-[#a51c30] hover:bg-[#fdfbf7]"
            >
              Book Appointment
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#a51c30] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SalonFooter() {
  return (
    <footer className="border-t border-[#1c1917]/10 bg-white text-[#1c1917]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-3">
              <span aria-hidden className="grid h-10 w-10 place-items-center rounded-full bg-[#a51c30] text-white">
                <Scissors className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[17px] font-bold tracking-[0.08em]">HABIB&rsquo;S</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#a51c30]">
                  Hair &amp; Beauty Salon
                </span>
              </span>
            </p>
            <p className="mt-4 font-serif text-xl italic text-[#1c1917]/75">Your style. Your signature.</p>
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={s.note ? `${s.label} (${s.note})` : s.label}
                  title={s.note ?? s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#1c1917]/15 text-[#1c1917]/70 transition-colors hover:border-[#a51c30] hover:bg-[#a51c30] hover:text-white"
                >
                  <s.icon className="h-4.5 w-4.5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Salon footer">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#1c1917]/40">Explore</p>
            <ul className="mt-4 space-y-1">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex min-h-[40px] items-center text-[14.5px] text-[#1c1917]/65 transition-colors hover:text-[#a51c30]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#1c1917]/40">Legal</p>
            <ul className="mt-4 space-y-1">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    aria-label={`${l.label} (page to be added)`}
                    className="inline-flex min-h-[40px] items-center text-[14.5px] text-[#1c1917]/65 transition-colors hover:text-[#a51c30]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12.5px] leading-relaxed text-[#1c1917]/60">
              Social and legal links are placeholders to be connected before launch.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1.5 border-t border-[#1c1917]/10 pt-6 text-[13px] text-[#1c1917]/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Habib&rsquo;s Hair &amp; Beauty Salon</p>
          <p className="font-mono text-[12px]">Sales demo — not the final website.</p>
        </div>
      </div>
    </footer>
  );
}
