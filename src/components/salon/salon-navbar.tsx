"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, MessageCircle, Phone, Scissors, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const salonLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

// Replace with the real salon details before launch. All values below are placeholders.
export const SALON_PHONE_DISPLAY = "+91 00000 00000";
export const SALON_PHONE_HREF = "tel:+910000000000";
export const SALON_WHATSAPP_HREF = "https://wa.me/910000000000?text=Hi%20Habib%27s%20Hair%20%26%20Beauty%20Salon%2C%20I%27d%20like%20to%20book%20an%20appointment.";
export const SALON_EMAIL_DISPLAY = "hello@habibssalon.example";

export function SalonNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = salonLinks.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300",
          scrolled ? "border-b border-[#1c1917]/10 shadow-[0_8px_30px_-18px_rgb(28_25_23/0.35)]" : "border-b border-transparent"
        )}
      >
        <nav
          aria-label="Salon demo primary"
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 md:px-8",
            scrolled ? "h-[60px]" : "h-[76px]"
          )}
        >
          <a href="#home" className="flex items-center gap-3" aria-label="Habib's Hair and Beauty Salon — back to top">
            <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#a51c30] text-white">
              <Scissors className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[17px] font-bold tracking-[0.08em] text-[#1c1917]">HABIB&rsquo;S</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#a51c30]">
                Hair &amp; Beauty
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {salonLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
                    active === l.href ? "text-[#a51c30]" : "text-[#1c1917]/65 hover:text-[#1c1917]"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={SALON_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#1c1917]/15 bg-white px-4 text-[14px] font-semibold text-[#1c1917] hover:border-[#a51c30]/40 hover:text-[#a51c30]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="btn-press inline-flex min-h-[44px] items-center rounded-full bg-[#a51c30] px-6 text-[14px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#7f1424]"
            >
              Book Appointment
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#1c1917]/10 bg-white text-[#1c1917] lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-30 bg-white lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Salon menu"
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 pb-28 pt-24">
              <ul className="divide-y divide-[#1c1917]/8 border-y border-[#1c1917]/8">
                {salonLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.08, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-4 text-2xl font-semibold tracking-tight",
                        active === l.href ? "text-[#a51c30]" : "text-[#1c1917]"
                      )}
                    >
                      {l.label}
                      <span aria-hidden className="h-px w-8 bg-[#a51c30]/40" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.4 }}
                className="mt-6 grid gap-3"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#a51c30] px-6 text-[15px] font-semibold uppercase tracking-[0.08em] text-white"
                >
                  Book Appointment
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={SALON_WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#1c1917]/15 px-4 text-[15px] font-semibold text-[#1c1917]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
                  </a>
                  <a
                    href={SALON_PHONE_HREF}
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#1c1917]/15 px-4 text-[15px] font-semibold text-[#1c1917]"
                  >
                    <Phone className="h-4 w-4" aria-hidden /> Call
                  </a>
                </div>
                <p className="text-center text-[12px] text-[#1c1917]/60">Demo preview — phone number is a placeholder.</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
