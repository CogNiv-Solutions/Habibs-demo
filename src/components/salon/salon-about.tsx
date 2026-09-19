import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function SalonAbout() {
  return (
    <section id="about" aria-labelledby="salon-about-heading" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Image */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-[#1c1917]/10 bg-[#faf7f2]">
            <div className="relative aspect-[4/4.4] w-full sm:aspect-[5/4.6] lg:aspect-[4/4.4]">
              <Image
                src="/salon/about.jpg"
                alt="Inside a bright premium salon with styling chairs and mirrors — demo photograph"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div aria-hidden className="pointer-events-none absolute inset-3 rounded-[20px] border border-white/50" />
          </div>
          <div aria-hidden className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[28px] bg-[#a51c30]/10" />
          <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-[#1c1917]/50">
            Demo photo — replace with real salon interior
          </p>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a51c30]">
              <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
              About the salon
            </p>
            <h2
              id="salon-about-heading"
              className="mt-4 text-4xl font-bold leading-[1.02] tracking-tight text-[#1c1917] md:text-5xl"
            >
              BEAUTY, STYLE
              <br />
              <span className="font-serif font-medium italic text-[#a51c30]">&amp; Confidence</span>
            </h2>
            <span aria-hidden className="mt-6 block h-[3px] w-16 rounded-full bg-[#a51c30]" />
            <p className="mt-6 text-base leading-relaxed text-[#1c1917]/70 md:text-lg">
              Discover a complete hair and beauty experience designed to help you look and feel your best.
            </p>
            <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-[#1c1917]/60">
              The salon provides professional hair, beauty and grooming services for everyday routines and
              special occasions alike — from cuts, colour and treatments to skin care, makeup and nails.
              Final details about the team, space and service menu will be added here with the
              salon&rsquo;s real information.
            </p>
            <div className="mt-8">
              <a
                href="#services"
                className="btn-press group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#a51c30] px-2 py-2 pl-7 pr-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#7f1424]"
              >
                Explore our services
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
