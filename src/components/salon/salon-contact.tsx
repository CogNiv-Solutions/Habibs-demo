"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  SALON_ADDRESS_LINES,
  SALON_MAP_QUERY,
  SALON_PHONE_DISPLAY,
  SALON_PHONE_HREF,
  SALON_WHATSAPP_HREF,
  salonServiceNames,
} from "@/lib/salon";

const inputCls =
  "mt-1.5 min-h-[52px] w-full rounded-[14px] border border-[#1c1917]/15 bg-white px-4 text-[15px] text-[#1c1917] placeholder:text-[#1c1917]/35 focus:border-[#a51c30] focus:outline-none";

const labelCls = "text-[12.5px] font-semibold uppercase tracking-[0.1em] text-[#1c1917]/60";

const infoRows = [
  {
    icon: Phone,
    title: "Phone",
    lines: [SALON_PHONE_DISPLAY],
    link: { label: "Tap to call", href: SALON_PHONE_HREF },
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["Chat with us for quick bookings"],
    link: { label: "Start chat", href: SALON_WHATSAPP_HREF, external: true },
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [...SALON_ADDRESS_LINES],
    link: {
      label: "Get Directions",
      href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SALON_MAP_QUERY)}`,
      external: true,
    },
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Open all days — timings to be confirmed"],
    link: null,
  },
] as const;

export function SalonContact() {
  const [sending, setSending] = useState(false);
  const [sentName, setSentName] = useState<string | null>(null);

  function setDateMin(el: HTMLInputElement | null) {
    if (el) el.min = new Date().toISOString().split("T")[0];
  }

  async function onSubmit(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSentName(name);
  }

  return (
    <section id="contact" aria-labelledby="salon-contact-heading" className="scroll-mt-20 bg-[#1c1917] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
            Book an appointment
          </p>
          <h2
            id="salon-contact-heading"
            className="mt-4 text-4xl font-bold leading-[1.02] tracking-tight md:text-5xl"
          >
            READY FOR YOUR{" "}
            <span className="font-serif font-medium italic text-[#e8b4bc]">New Look?</span>
          </h2>
          <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-white/65">
            Send a demo request and we&rsquo;ll confirm your slot on call or WhatsApp.
          </p>

          <div className="mt-7 rounded-[24px] bg-white p-6 text-[#1c1917] md:p-7">
            {sentName !== null ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <span aria-hidden className="grid h-16 w-16 place-items-center rounded-full bg-[#a51c30]/10 text-[#a51c30]">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-2xl font-bold tracking-tight">Request received</h3>
                <p className="mt-2 max-w-[40ch] text-[15px] leading-relaxed text-[#1c1917]/60">
                  Thanks{sentName ? ` ${sentName.split(" ")[0]}` : ""} — we&rsquo;ll call you back shortly to
                  confirm your slot.
                </p>
                <p className="mt-4 inline-flex rounded-full border border-[#1c1917]/10 bg-[#fdfbf7] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#1c1917]/50">
                  Demo only — nothing was sent
                </p>
                <button
                  type="button"
                  onClick={() => setSentName(null)}
                  className="btn-press mt-6 inline-flex min-h-[48px] items-center rounded-full border border-[#1c1917]/15 px-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1c1917] hover:border-[#a51c30]/50 hover:text-[#a51c30]"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form
                aria-label="Demo appointment request form"
                onSubmit={(e) => {
                  e.preventDefault();
                  void onSubmit(e.currentTarget);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="demo-name" className={labelCls}>Name</label>
                    <input id="demo-name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="demo-phone" className={labelCls}>Phone</label>
                    <input id="demo-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="e.g. 86685 40399" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="demo-service" className={labelCls}>Service</label>
                    <select id="demo-service" name="service" required defaultValue="" className={inputCls}>
                      <option value="" disabled>Choose a service</option>
                      {salonServiceNames.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="demo-date" className={labelCls}>Preferred Date</label>
                    <input id="demo-date" name="date" type="date" required ref={setDateMin} className={inputCls} />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-press group mt-5 inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-[#a51c30] px-6 text-[14px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#7f1424] disabled:opacity-70"
                >
                  {sending ? "Sending…" : "Request Appointment"}
                  {!sending && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />}
                </button>
                <p className="mt-3.5 text-center text-[12.5px] leading-relaxed text-[#1c1917]/60">
                  Demo form — your details stay on this page and are never sent anywhere.
                </p>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-center gap-4">
            {infoRows.map((row) => (
              <div
                key={row.title}
                className="flex gap-4 rounded-[20px] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-[#a51c30]/50"
              >
                <span aria-hidden className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#a51c30] text-white">
                  <row.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-white/50">{row.title}</h3>
                  {row.lines.map((l) => (
                    <p key={l} className="mt-1 text-[15.5px] font-medium leading-relaxed text-white">{l}</p>
                  ))}
                  {row.link && (
                    <a
                      href={row.link.href}
                      {...("external" in row.link && row.link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="mt-1.5 inline-flex min-h-[40px] items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#e8b4bc] hover:text-white"
                    >
                      {row.link.label === "Get Directions" && <Navigation className="h-3.5 w-3.5" aria-hidden />}
                      {row.link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <div aria-hidden className="h-20 lg:hidden" />
    </section>
  );
}
