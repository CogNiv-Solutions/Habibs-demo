import Image from "next/image";
import { BadgeCheck, HeartHandshake, Sofa, Sparkles } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const points = [
  { icon: BadgeCheck, title: "Professional Service", copy: "Trained hands and a clean, methodical approach to every appointment." },
  { icon: HeartHandshake, title: "Personalized Care", copy: "Services shaped around your hair, skin and the look you want." },
  { icon: Sparkles, title: "Premium Salon Experience", copy: "A polished visit, whether it's routine upkeep or a special occasion." },
  { icon: Sofa, title: "Clean & Comfortable", copy: "A welcoming space designed for you to sit back and relax." },
] as const;

export function SalonAbout() {
  return (
    <section id="about" aria-labelledby="salon-about-heading" className="scroll-mt-20 bg-blush">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-[#1c1917]/10 bg-white">
            <div className="relative aspect-[4/4.4] w-full sm:aspect-[5/4.4] lg:aspect-[4/4.4]">
              <Image
                src="/salon/about.jpg"
                alt="Styling chairs and mirrors inside a bright, modern salon"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div aria-hidden className="pointer-events-none absolute inset-3 rounded-[20px] border border-white/50" />
          </div>
          <div aria-hidden className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[28px] bg-[#a51c30]/10" />
        </Reveal>

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
              A NEIGHBOURHOOD SALON,{" "}
              <span className="font-serif font-medium italic text-[#a51c30]">Done Right.</span>
            </h2>
            <span aria-hidden className="mt-6 block h-[3px] w-16 rounded-full bg-[#a51c30]" />
            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-[#1c1917]/70 md:text-lg">
              Habib&rsquo;s Hair &amp; Beauty Salon in Lohegaon brings hair, beauty and grooming together
              under one roof — a complete everyday routine and occasion-ready experience designed to help
              you look and feel your best.
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <StaggerItem key={p.title}>
                <div className="flex h-full gap-3.5 rounded-[18px] border border-[#1c1917]/10 bg-white p-5">
                  <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#a51c30]/10 text-[#a51c30]">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[14.5px] font-bold text-[#1c1917]">{p.title}</span>
                    <span className="mt-1 block text-[13.5px] leading-relaxed text-[#1c1917]/60">{p.copy}</span>
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
