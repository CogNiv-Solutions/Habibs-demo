"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  SALON_PHONE_DISPLAY,
  SALON_PHONE_HREF,
  SALON_WHATSAPP_HREF,
} from "@/lib/salon";
import { serviceCategories } from "./salon-services";

type AppointmentPayload = {
  name: string;
  phone: string;
  service: string;
  date: string;
  dateLabel: string;
  time: string;
  message: string;
};

const serviceOptions = serviceCategories.flatMap((c) => c.services.map((s) => s.name));

const timeOptions = ["Morning", "Afternoon", "Evening"] as const;

const inputCls =
  "mt-1.5 min-h-[52px] w-full rounded-[14px] border border-[#1c1917]/15 bg-white px-4 text-[15px] text-[#1c1917] placeholder:text-[#1c1917]/35 focus:border-[#a51c30] focus:outline-none";

const labelCls = "text-[12.5px] font-semibold uppercase tracking-[0.1em] text-[#1c1917]/60";

export function SalonAppointment() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<AppointmentPayload | null>(null);

  // Sets "no past dates" on the client only, so SSR HTML stays identical (no hydration mismatch).
  function setDateMin(el: HTMLInputElement | null) {
    if (el) el.min = new Date().toISOString().split("T")[0];
  }

  async function onSubmit(form: HTMLFormElement) {
    const data = new FormData(form);
    const date = String(data.get("date") ?? "");
    // Payload shape is final — wire this object to the booking endpoint later.
    const payload: AppointmentPayload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service: String(data.get("service") ?? ""),
      date,
      dateLabel: date
        ? new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })
        : "",
      time: String(data.get("time") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    setSending(true);
    // Demo only: simulate a request. Replace with fetch to the booking API.
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSent(payload);
  }

  return (
    <section id="contact" aria-labelledby="salon-contact-heading" className="scroll-mt-20 bg-[#1c1917] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        {/* Copy + direct contact */}
        <Reveal>
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
            Book an appointment
          </p>
          <h2
            id="salon-contact-heading"
            className="mt-4 text-4xl font-bold leading-[1.02] tracking-tight md:text-5xl"
          >
            READY FOR YOUR
            <br />
            <span className="font-serif font-medium italic text-[#e8b4bc]">Next look?</span>
          </h2>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-white/65">
            Tell us what you&rsquo;re looking for and our team can help you choose the right service.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={SALON_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-[#a51c30] px-6 text-[14px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#c2283f]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp Us
            </a>
            <a
              href={SALON_PHONE_HREF}
              className="btn-press inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-[14px] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/60"
            >
              <Phone className="h-4 w-4" aria-hidden /> {SALON_PHONE_DISPLAY}
            </a>
          </div>

          <dl className="mt-8 space-y-3 border-t border-white/10 pt-6 text-[14.5px]">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 font-semibold uppercase tracking-[0.1em] text-white/55 text-[12px] pt-0.5">Visit</dt>
              <dd className="text-white/75">Shop No. 12, JD Gaatha, Porwal Road, Lohegaon, Pune 411047.</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 font-semibold uppercase tracking-[0.1em] text-white/55 text-[12px] pt-0.5">Hours</dt>
              <dd className="text-white/75">Opening hours to be confirmed.</dd>
            </div>
          </dl>
        </Reveal>

        {/* Form card */}
        <Reveal delay={0.1}>
          <div className="rounded-[24px] bg-white p-6 text-[#1c1917] md:p-8">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span aria-hidden className="grid h-16 w-16 place-items-center rounded-full bg-[#a51c30]/10 text-[#a51c30]">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-2xl font-bold tracking-tight">Request received</h3>
                <p className="mt-2 max-w-[40ch] text-[15px] leading-relaxed text-[#1c1917]/60">
                  Thanks {sent.name.split(" ")[0] || "there"} — your appointment request for{" "}
                  <strong className="font-semibold text-[#1c1917]">{sent.service || "a service"}</strong>
                  {sent.dateLabel ? ` on ${sent.dateLabel}` : ""} has been noted.
                </p>
                <p className="mt-4 inline-flex rounded-full border border-[#1c1917]/10 bg-[#fdfbf7] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#1c1917]/50">
                  Demo only — nothing was sent or booked
                </p>
                <button
                  type="button"
                  onClick={() => setSent(null)}
                  className="btn-press mt-6 inline-flex min-h-[48px] items-center rounded-full border border-[#1c1917]/15 px-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1c1917] hover:border-[#a51c30]/50 hover:text-[#a51c30]"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form
                aria-label="Appointment enquiry form"
                onSubmit={(e) => {
                  e.preventDefault();
                  void onSubmit(e.currentTarget);
                }}
              >
                <h3 className="text-xl font-bold tracking-tight">Request an appointment</h3>
                <p className="mt-1 text-[13.5px] text-[#1c1917]/55">We&rsquo;ll confirm your slot on call or WhatsApp.</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="apt-name" className={labelCls}>Full Name</label>
                    <input id="apt-name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="apt-phone" className={labelCls}>Phone Number</label>
                    <input id="apt-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="e.g. 98765 43210" className={inputCls} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="apt-service" className={labelCls}>Service</label>
                    <select id="apt-service" name="service" required defaultValue="" className={inputCls}>
                      <option value="" disabled>Choose a service</option>
                      <option value="Help me choose">Not sure — help me choose</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="apt-date" className={labelCls}>Preferred Date</label>
                    <input id="apt-date" name="date" type="date" required ref={setDateMin} className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="apt-time" className={labelCls}>Preferred Time</label>
                    <select id="apt-time" name="time" required defaultValue="" className={inputCls}>
                      <option value="" disabled>Choose a slot</option>
                      {timeOptions.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="apt-message" className={labelCls}>Message <span className="font-normal normal-case tracking-normal text-[#1c1917]/40">(optional)</span></label>
                    <textarea id="apt-message" name="message" rows={3} placeholder="Anything we should know — occasion, hair length, allergies…" className={inputCls} />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-press group mt-6 inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[#a51c30] px-6 text-[14px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#7f1424] disabled:opacity-70"
                >
                  {sending ? "Sending…" : "Request Appointment"}
                  {!sending && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />}
                </button>

                <p className="mt-4 text-center text-[12.5px] leading-relaxed text-[#1c1917]/60">
                  Your details are only used to respond to your enquiry. Demo form — nothing is sent,
                  stored or booked.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
      {/* Spacer so the mobile sticky CTA never covers content */}
      <div aria-hidden className="h-20 lg:hidden" />
    </section>
  );
}
