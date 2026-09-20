import type { SVGProps } from "react";
import { MessageCircle, Scissors } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  SALON_ADDRESS_LINES,
  SALON_PHONE_DISPLAY,
  SALON_PHONE_HREF,
  SALON_WHATSAPP_HREF,
  salonServiceNames,
} from "@/lib/salon";

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

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export function SalonFooter() {
  return (
    <footer className="bg-white text-[#1c1917]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
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
              <p className="mt-4 font-serif text-lg italic text-[#1c1917]/70">Your style. Your confidence.</p>
              <div className="mt-5 flex gap-2.5">
                {[
                  { label: "Instagram (link to be added)", href: "#", Icon: InstagramIcon },
                  { label: "Facebook (link to be added)", href: "#", Icon: FacebookIcon },
                  { label: "WhatsApp", href: SALON_WHATSAPP_HREF, Icon: MessageCircle, external: true },
                ].map(({ label, href, Icon, ...rest }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...("external" in rest && rest.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="grid h-11 w-11 place-items-center rounded-full border border-[#1c1917]/15 text-[#1c1917]/70 transition-colors hover:border-[#a51c30] hover:bg-[#a51c30] hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>

            <nav aria-label="Salon footer">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#1c1917]/40">Explore</p>
              <ul className="mt-4 space-y-1">
                {quickLinks.map((l) => (
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
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#1c1917]/40">Services</p>
              <ul className="mt-4 space-y-1">
                {salonServiceNames.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="inline-flex min-h-[40px] items-center text-[14.5px] text-[#1c1917]/65 transition-colors hover:text-[#a51c30]"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#1c1917]/40">Contact</p>
              <address className="mt-4 space-y-2 text-[14.5px] not-italic leading-relaxed text-[#1c1917]/65">
                <p>
                  <a href={SALON_PHONE_HREF} className="font-semibold text-[#1c1917] hover:text-[#a51c30]">
                    {SALON_PHONE_DISPLAY}
                  </a>
                </p>
                {SALON_ADDRESS_LINES.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </address>
              <div className="mt-3 flex gap-4 font-mono text-[11.5px] uppercase tracking-[0.16em]">
                <a href="#" aria-label="Privacy Policy (page to be added)" className="text-[#1c1917]/50 hover:text-[#a51c30]">
                  Privacy
                </a>
                <a href="#" aria-label="Terms (page to be added)" className="text-[#1c1917]/50 hover:text-[#a51c30]">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-1.5 border-t border-[#1c1917]/10 pt-6 text-[13px] text-[#1c1917]/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Habib&rsquo;s Hair &amp; Beauty Salon</p>
          <p className="font-mono text-[12px]">Demo website — real details confirmed for phone &amp; address.</p>
        </div>
      </div>
    </footer>
  );
}
