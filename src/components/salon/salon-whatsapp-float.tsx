"use client";

import { MessageCircle } from "lucide-react";
import { SALON_WHATSAPP_HREF } from "@/lib/salon";

export function SalonWhatsAppFloat() {
  return (
    <a
      href={SALON_WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Habib's Hair & Beauty Salon on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#a51c30] text-white shadow-[0_16px_36px_-12px_rgb(165_28_48/0.65)] transition-transform duration-300 hover:scale-105 lg:bottom-8 lg:right-8"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
    </a>
  );
}
