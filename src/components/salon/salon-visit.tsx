import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import {
  SALON_EMAIL_DISPLAY,
  SALON_PHONE_DISPLAY,
  SALON_PHONE_HREF,
  SALON_WHATSAPP_HREF,
} from "./salon-navbar";

const cards = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Shop No. __, Street __", "Pune, Maharashtra — to be confirmed"],
    action: null as null | { label: string; href: string },
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [SALON_PHONE_DISPLAY, "Tap to call the salon"],
    action: { label: `Call ${SALON_PHONE_DISPLAY}`, href: SALON_PHONE_HREF },
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Monday – Sunday", "Timings to be confirmed"],
    action: null as null | { label: string; href: string },
  },
  {
    icon: Mail,
    title: "Email",
    lines: [SALON_EMAIL_DISPLAY, "For enquiries and feedback"],
    action: null as null | { label: string; href: string },
  },
] as const;

export function SalonVisit() {
  return (
    <section id="visit" aria-labelledby="salon-visit-heading" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a51c30]">
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
            Location & contact
          </p>
          <h2
            id="salon-visit-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[#1c1917] md:text-5xl"
          >
            VISIT US
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1c1917]/65 md:text-lg">
            Walk in for a consultation, or reach out first — whichever suits your day.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Map preview */}
          <Reveal className="relative min-h-[320px] overflow-hidden rounded-[24px] border border-[#1c1917]/10 bg-[#faf7f2] lg:min-h-full">
            <iframe
              title="Map preview of Pune — exact salon location to be added"
              src="https://www.google.com/maps?q=Pune,Maharashtra,India&z=11&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale transition-[filter] duration-500 hover:grayscale-0"
            />
            <p className="absolute bottom-3 left-3 rounded-full bg-white/95 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#1c1917]/60 shadow">
              Map preview — exact pin to be added
            </p>
          </Reveal>

          {/* Cards */}
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {cards.map((c) => (
              <StaggerItem key={c.title}>
                <article className="flex h-full flex-col rounded-[20px] border border-[#1c1917]/10 bg-white p-6 transition-colors duration-300 hover:border-[#a51c30]/35">
                  <span aria-hidden className="grid h-11 w-11 place-items-center rounded-full bg-[#a51c30] text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[14px] font-bold uppercase tracking-[0.12em] text-[#1c1917]">
                    {c.title}
                  </h3>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1 text-[14.5px] leading-relaxed text-[#1c1917]/65 first:mt-2">
                      {l}
                    </p>
                  ))}
                  {c.action && (
                    <a
                      href={c.action.href}
                      className="mt-3 inline-flex min-h-[44px] items-center text-[13px] font-semibold uppercase tracking-[0.1em] text-[#a51c30] hover:text-[#7f1424]"
                    >
                      {c.action.label}
                    </a>
                  )}
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-[24px] bg-[#fdfbf7] px-6 py-6 sm:flex-row md:px-8">
            <p className="text-center text-[15px] font-medium text-[#1c1917]/75 sm:text-left">
              Fastest way to reach us? <span className="font-semibold text-[#1c1917]">WhatsApp the salon.</span>
            </p>
            <a
              href={SALON_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#a51c30] px-7 text-[14px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#7f1424]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp Us
            </a>
          </div>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-8 max-w-[70ch] text-center text-[12.5px] leading-relaxed text-[#1c1917]/60">
            All address, contact and timing details are placeholders — the exact branch information must be
            confirmed with the client before production.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
