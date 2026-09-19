import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { salonEnquireHref } from "./salon-services";

const packages = [
  {
    name: "The Hair Experience",
    includes: ["Haircut", "Styling", "Hair Care"],
    note: "Cut, finish and after-care in one visit.",
  },
  {
    name: "The Beauty Experience",
    includes: ["Facial", "Grooming", "Beauty Care"],
    note: "Skin, grooming and beauty rituals, combined.",
  },
  {
    name: "The Occasion Experience",
    includes: ["Hair Styling", "Makeup", "Beauty Preparation"],
    note: "A complete getting-ready package for big days.",
  },
] as const;

export function SalonPackages() {
  return (
    <section aria-labelledby="salon-packages-heading" className="bg-blush">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a51c30]">
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
            Packages
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
          </p>
          <h2
            id="salon-packages-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[#1c1917] md:text-5xl"
          >
            CURATED BEAUTY EXPERIENCES
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1c1917]/65 md:text-lg">
            Thoughtful combinations for hair days, glow days and celebration days.
          </p>
        </Reveal>

        <Stagger className="mx-auto mt-10 grid max-w-5xl gap-5 md:mt-12 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <StaggerItem key={pkg.name}>
              <article className="group flex h-full flex-col rounded-[24px] border border-[#1c1917]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#a51c30]/35 hover:shadow-[0_28px_60px_-30px_rgb(165_28_48/0.5)]">
                <p aria-hidden className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#a51c30]">
                  Package {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[22px] font-bold leading-tight tracking-tight text-[#1c1917]">
                  {pkg.name}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-[#1c1917]/55">{pkg.note}</p>

                <span aria-hidden className="my-6 h-px bg-[#1c1917]/10" />

                <ul className="flex-1 space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-[#1c1917]/80">
                      <span aria-hidden className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#a51c30]/10 text-[#a51c30]">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-center">
                  <span className="font-serif text-2xl font-medium italic text-[#1c1917]">Custom Package</span>
                  <span className="mt-1 block text-[12px] uppercase tracking-[0.14em] text-[#1c1917]/45">
                    Priced on enquiry
                  </span>
                </p>

                <a
                  href={salonEnquireHref(pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${pkg.name} on WhatsApp`}
                  className="btn-press mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#a51c30] px-6 text-[13.5px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#7f1424]"
                >
                  Enquire Now
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <p className="mx-auto mt-8 max-w-[68ch] text-center text-[12.5px] leading-relaxed text-[#1c1917]/60">
            Demo package concepts — inclusions and pricing must be confirmed with the salon before launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
