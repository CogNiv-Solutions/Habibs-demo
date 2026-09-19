import { Hand, Palette, Scissors, Smile, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

import { salonWhatsAppHref } from "@/lib/salon";

export function salonEnquireHref(service: string) {
  return salonWhatsAppHref(`Hi Habib's Hair & Beauty Salon, I'd like to enquire about ${service}.`);
}

type ServiceItem = { name: string; desc: string };
export type ServiceCategory = { id: string; name: string; icon: LucideIcon; services: ServiceItem[] };

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    name: "Hair",
    icon: Scissors,
    services: [
      { name: "Haircut & Styling", desc: "Precision cuts and styling shaped around your face and routine." },
      { name: "Hair Color", desc: "Global colour, touch-ups and gloss looks matched to your tone." },
      { name: "Hair Spa", desc: "Deep-conditioning spa ritual for softer, shinier hair." },
      { name: "Hair Treatment", desc: "Targeted care for frizz, dryness and damage, planned on visit." },
      { name: "Hair Straightening", desc: "Smooth, straight finishes — suitability confirmed in consultation." },
      { name: "Hair Streaking", desc: "Highlights and streaks placed to add depth and dimension." },
    ],
  },
  {
    id: "beauty-skin",
    name: "Beauty & Skin",
    icon: Sparkles,
    services: [
      { name: "Facial", desc: "Clean-up and facial rituals for a fresh, rested glow." },
      { name: "Skin Treatments", desc: "Routine skin care for everyday brightness and texture." },
      { name: "Anti-Acne Treatments", desc: "Guided care for acne-prone skin, planned on consultation." },
      { name: "Chemical Peel", desc: "Exfoliating peel treatments — suitability confirmed in consultation." },
    ],
  },
  {
    id: "grooming",
    name: "Grooming",
    icon: Smile,
    services: [
      { name: "Shaving", desc: "Clean, comfortable shaving with a neat finish." },
      { name: "Beard Grooming", desc: "Beard shaping, trimming and tidy-up." },
    ],
  },
  {
    id: "makeup",
    name: "Makeup",
    icon: Palette,
    services: [
      { name: "Basic Makeup", desc: "Simple, natural makeup for everyday occasions." },
      { name: "Occasion / Party Makeup", desc: "Party-ready looks for events and celebrations." },
    ],
  },
  {
    id: "nails",
    name: "Nails",
    icon: Hand,
    services: [{ name: "Manicure", desc: "Nail shaping, cuticle care and polish." }],
  },
];

export function SalonServices() {
  return (
    <section id="services" aria-labelledby="salon-services-heading" className="scroll-mt-20 bg-[#fdfbf7]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a51c30]">
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
            Services
          </p>
          <h2
            id="salon-services-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[#1c1917] md:text-5xl"
          >
            OUR SERVICES
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1c1917]/65 md:text-lg">
            Professional care for every style, occasion and routine.
          </p>
        </Reveal>

        <div className="mt-10 space-y-12 md:mt-14 md:space-y-16">
          {serviceCategories.map((cat) => (
            <div key={cat.id}>
              <Reveal>
                <div className="flex items-center gap-4">
                  <span aria-hidden className="grid h-11 w-11 place-items-center rounded-full bg-[#a51c30] text-white">
                    <cat.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-[0.08em] text-[#1c1917] md:text-2xl">
                    {cat.name}
                  </h3>
                  <span aria-hidden className="h-px flex-1 bg-[#1c1917]/10" />
                  <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-[#1c1917]/40 sm:inline">
                    {cat.services.length} {cat.services.length === 1 ? "service" : "services"}
                  </span>
                </div>
              </Reveal>

              <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.services.map((s) => (
                  <StaggerItem key={s.name}>
                    <article className="group flex h-full flex-col rounded-[20px] border border-[#1c1917]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a51c30]/40 hover:shadow-[0_20px_44px_-24px_rgb(165_28_48/0.4)]">
                      <div className="flex items-center justify-between gap-3">
                        <span aria-hidden className="grid h-9 w-9 place-items-center rounded-full bg-[#a51c30]/10 text-[#a51c30] transition-colors duration-300 group-hover:bg-[#a51c30] group-hover:text-white">
                          <cat.icon className="h-4 w-4" />
                        </span>
                        <span className="rounded-full border border-[#1c1917]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1c1917]/50">
                          Price on enquiry
                        </span>
                      </div>
                      <h4 className="mt-4 text-[17px] font-semibold tracking-tight text-[#1c1917]">{s.name}</h4>
                      <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-[#1c1917]/60">{s.desc}</p>
                      <a
                        href={salonEnquireHref(s.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enquire about ${s.name} on WhatsApp`}
                        className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#a51c30]/30 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#a51c30] transition-colors hover:bg-[#a51c30] hover:text-white"
                      >
                        Enquire / Book
                      </a>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 border-t border-[#1c1917]/10 pt-6 text-[12.5px] leading-relaxed text-[#1c1917]/60">
            Demo service list based on publicly available listings for similarly named salons — exact services
            and prices must be confirmed with the client before launch. No prices are shown in this demo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
