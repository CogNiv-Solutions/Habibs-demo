// Single source of truth for real salon details.
// Phone, address and map pin below are confirmed client details.
// Email and opening hours are still placeholders — confirm before launch.

export const SALON_PHONE_DISPLAY = "+91 86685 40399";
export const SALON_PHONE_HREF = "tel:+918668540399";

export const SALON_WHATSAPP_NUMBER = "918668540399";

export function salonWhatsAppHref(message: string) {
  return `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SALON_WHATSAPP_HREF = salonWhatsAppHref(
  "Hi Habib's Hair & Beauty Salon, I'd like to book an appointment."
);

export const SALON_EMAIL_DISPLAY = "hello@habibssalon.example";

export const SALON_ADDRESS_LINES = [
  "Shop No. 12, JD Gaatha, 296/3/1",
  "Porwal Road, Lohegaon, DY Patil University Rd corner",
  "Pune, Maharashtra 411047",
] as const;

export const SALON_MAP_QUERY = "JD Gaatha, Porwal Road, Lohegaon, Pune 411047";
export const SALON_MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  SALON_MAP_QUERY
)}&z=16&output=embed`;
