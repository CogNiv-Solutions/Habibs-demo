"use client";

import { MessageCircle, Phone } from "lucide-react";
import { SALON_PHONE_HREF, SALON_WHATSAPP_HREF } from "@/lib/salon";

export function SalonMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1c1917]/10 bg-blush/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-[56px_56px_1fr] gap-2.5">
        <a
          href={SALON_PHONE_HREF}
          aria-label="Call the salon"
          className="inline-flex min-h-[52px] min-w-[56px] items-center justify-center rounded-full border border-[#1c1917]/15 text-[#1c1917]"
        >
          <Phone className="h-5 w-5" aria-hidden />
        </a>
        <a
          href={SALON_WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with the salon on WhatsApp"
          className="inline-flex min-h-[52px] min-w-[56px] items-center justify-center rounded-full border border-[#1c1917]/15 text-[#1c1917]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#a51c30] px-4 text-[14px] font-semibold uppercase tracking-[0.08em] text-white"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
}
