import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { salonEnquireHref } from "./salon-services";

const featured = [
  {
    title: "Hair Styling",
    desc: "Cuts, colour and styling for everyday looks and big occasions.",
    src: "/salon/featured-styling.jpg",
    alt: "Stylist blow-drying and styling a client's hair — demo photograph",
  },
  {
    title: "Hair Treatments",
    desc: "Spa, repair and smoothing rituals matched to your hair.",
    src: "/salon/featured-treatment.jpg",
    alt: "Relaxing head and hair spa treatment in a calm salon — demo photograph",
  },
  {
    title: "Beauty & Skin Care",
    desc: "Facials and skin rituals for a fresh, rested glow.",
    src: "/salon/featured-skin.jpg",
    alt: "Facial skin-care treatment being applied — demo photograph",
  },
] as const;

export function SalonFeatured() {
  return (
    <section aria-labelledby="salon-featured-heading" className="bg-blush">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a51c30]">
              <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
              Highlights
            </p>
            <h2
              id="salon-featured-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-[#1c1917] md:text-4xl"
            >
              MOST LOVED SERVICES
            </h2>
          </div>
          <a
            href="#services"
            className="inline-flex min-h-[44px] items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#a51c30] hover:text-[#7f1424]"
          >
            View all services <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>

        <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
          {featured.map((f) => (
            <StaggerItem key={f.title}>
              <a
                href={salonEnquireHref(f.title)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about ${f.title} on WhatsApp`}
                className="group block overflow-hidden rounded-[24px] border border-[#1c1917]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#a51c30]/35 hover:shadow-[0_28px_60px_-28px_rgb(28_25_23/0.5)]"
              >
                <span className="relative block aspect-[4/4.6] overflow-hidden sm:aspect-[4/3.4] md:aspect-[4/4.6]">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#1c1917]/85 via-[#1c1917]/25 to-transparent"
                  />
                  <span className="absolute inset-x-0 bottom-0 p-6">
                    <span aria-hidden className="mb-3 block h-[3px] w-10 rounded-full bg-[#a51c30] transition-all duration-300 group-hover:w-16 group-hover:bg-white" />
                    <span className="block text-2xl font-bold tracking-tight text-white">{f.title}</span>
                    <span className="mt-1.5 block text-[14px] leading-relaxed text-white/80">{f.desc}</span>
                    <span className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-white/95 px-5 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-[#1c1917] transition-colors group-hover:bg-[#a51c30] group-hover:text-white">
                      Enquire <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
