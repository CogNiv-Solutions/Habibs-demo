import { Reveal } from "@/components/reveal";

const items = ["Hair", "Beauty", "Grooming", "Personal Care"] as const;

export function SalonTrustStrip() {
  return (
    <section aria-label="Salon focus areas" className="border-y border-[#1c1917]/10 bg-blush">
      <Reveal y={14}>
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-5 md:justify-between md:px-8">
          {items.map((item, i) => (
            <li key={item} className="flex items-center gap-8">
              <span className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#1c1917]/75">
                {item}
              </span>
              {i < items.length - 1 && (
                <span aria-hidden className="hidden h-1.5 w-1.5 rounded-full bg-[#a51c30] sm:inline-block" />
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
