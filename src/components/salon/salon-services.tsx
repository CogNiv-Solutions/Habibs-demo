import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { salonWhatsAppHref } from "@/lib/salon";

export function salonEnquireHref(service: string) {
  return salonWhatsAppHref(`Hi Habib's Hair & Beauty Salon, I'd like to enquire about ${service}.`);
}

const cards = [
  {
    name: "Hair Styling",
    desc: "Precision cuts, blowouts and everyday styling.",
    src: "/salon/featured-styling.jpg",
    alt: "Stylist blow-drying and finishing a client's hair",
  },
  {
    name: "Hair Colour",
    desc: "Global colour, touch-ups and dimensional streaks.",
    src: "/salon/gallery-hair-1.jpg",
    alt: "Long wavy hair with soft lavender colour",
  },
  {
    name: "Hair Treatments",
    desc: "Spa, repair and smoothing rituals for healthy hair.",
    src: "/salon/featured-treatment.jpg",
    alt: "Relaxing head and hair spa treatment",
  },
  {
    name: "Skin & Beauty",
    desc: "Facials, clean-ups and glow rituals.",
    src: "/salon/featured-skin.jpg",
    alt: "Facial skin-care treatment being applied",
  },
  {
    name: "Makeup",
    desc: "Natural everyday looks to party-ready glam.",
    src: "/salon/gallery-beauty-1.jpg",
    alt: "Makeup being applied for an evening look",
  },
  {
    name: "Grooming",
    desc: "Classic cuts, shaving and beard detailing.",
    src: "/salon/gallery-grooming-1.jpg",
    alt: "Barber giving a classic clipper haircut",
  },
] as const;

export function SalonServices() {
  return (
    <section id="services" aria-labelledby="salon-services-heading" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a51c30]">
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
            Services
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
          </p>
          <h2
            id="salon-services-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[#1c1917] md:text-5xl"
          >
            CARE FOR EVERY LOOK
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1c1917]/65 md:text-lg">
            Six essentials, done well — for routine days and big occasions.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {cards.map((s) => (
            <StaggerItem key={s.name}>
              <article className="group h-full overflow-hidden rounded-[22px] border border-[#1c1917]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#a51c30]/35 hover:shadow-[0_24px_50px_-28px_rgb(165_28_48/0.45)]">
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </span>
                <span className="block p-6">
                  <span className="flex items-start justify-between gap-3">
                    <h3 className="text-[19px] font-bold tracking-tight text-[#1c1917]">{s.name}</h3>
                    <span aria-hidden className="mt-1 h-[3px] w-8 shrink-0 rounded-full bg-[#a51c30]/25 transition-all duration-300 group-hover:w-12 group-hover:bg-[#a51c30]" />
                  </span>
                  <span className="mt-1.5 block text-[14.5px] leading-relaxed text-[#1c1917]/60">{s.desc}</span>
                  <a
                    href={salonEnquireHref(s.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${s.name} on WhatsApp`}
                    className="mt-4 inline-flex min-h-[44px] items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#a51c30] hover:text-[#7f1424]"
                  >
                    Enquire <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </span>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
