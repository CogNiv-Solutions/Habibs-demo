import { Quote } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const slots = [
  { quote: "Client testimonial will appear here.", name: "Client Name", meta: "Verified Customer" },
  { quote: "Client testimonial will appear here.", name: "Client Name", meta: "Verified Customer" },
  { quote: "Client testimonial will appear here.", name: "Client Name", meta: "Verified Customer" },
] as const;

export function SalonTestimonials() {
  return (
    <section id="reviews" aria-labelledby="salon-reviews-heading" className="scroll-mt-20 bg-[#fdfbf7]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a51c30]">
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
            Reviews
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
          </p>
          <h2
            id="salon-reviews-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[#1c1917] md:text-5xl"
          >
            WHAT CLIENTS SAY
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1c1917]/65 md:text-lg">
            Real reviews from real visits — this space is ready for the salon&rsquo;s Google and client
            feedback.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3">
          {slots.map((s, i) => (
            <StaggerItem key={i}>
              <figure className="flex h-full flex-col rounded-[20px] border border-dashed border-[#a51c30]/35 bg-white p-7">
                <span aria-hidden className="grid h-11 w-11 place-items-center rounded-full bg-[#a51c30]/10 text-[#a51c30]">
                  <Quote className="h-5 w-5" />
                </span>
                <blockquote className="mt-5 flex-1 text-[16px] leading-relaxed text-[#1c1917]/70">
                  &ldquo;{s.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-[#1c1917]/10 pt-5">
                  <p className="text-[15px] font-semibold text-[#1c1917]">{s.name}</p>
                  <p className="mt-0.5 text-[13px] text-[#1c1917]/55">{s.meta}</p>
                  <p className="mt-3 inline-flex rounded-full border border-[#1c1917]/10 bg-[#fdfbf7] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#1c1917]/50">
                    Demo placeholder
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <p className="mx-auto mt-8 max-w-[70ch] text-center text-[12.5px] leading-relaxed text-[#1c1917]/60">
            No reviews are shown in this demo — nothing here is a real customer testimonial or rating.
            Connect Google reviews or add verified client feedback before launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
