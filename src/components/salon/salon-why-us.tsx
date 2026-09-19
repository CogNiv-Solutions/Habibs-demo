import { Reveal, Stagger, StaggerItem } from "@/components/reveal";

const points = [
  {
    n: "01",
    title: "Personalized Style",
    copy: "Services tailored around the client's desired look.",
  },
  {
    n: "02",
    title: "Hair & Beauty",
    copy: "A complete range of grooming and beauty services.",
  },
  {
    n: "03",
    title: "Professional Experience",
    copy: "A polished salon experience for everyday grooming and special occasions.",
  },
  {
    n: "04",
    title: "Comfortable Experience",
    copy: "A clean, welcoming environment designed around client comfort.",
  },
] as const;

export function SalonWhyUs() {
  return (
    <section aria-labelledby="salon-why-heading" className="bg-[#fdfbf7]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a51c30]">
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
            Why choose us
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
          </p>
          <h2
            id="salon-why-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[#1c1917] md:text-5xl"
          >
            WHY HABIB&rsquo;S?
          </h2>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {points.map((p) => (
            <StaggerItem key={p.n}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[#1c1917]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#a51c30]/35 hover:shadow-[0_24px_50px_-28px_rgb(165_28_48/0.45)]">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#a51c30] transition-transform duration-300 group-hover:scale-x-100"
                />
                <span aria-hidden className="font-serif text-5xl font-medium italic leading-none text-[#a51c30]/15 transition-colors duration-300 group-hover:text-[#a51c30]/30">
                  {p.n}
                </span>
                <h3 className="mt-5 text-[15px] font-bold uppercase tracking-[0.1em] text-[#1c1917]">
                  {p.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-[#1c1917]/60">{p.copy}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <p className="mx-auto mt-8 max-w-[68ch] text-center text-[12.5px] leading-relaxed text-[#1c1917]/60">
            Positioning statements for demo purposes — final wording to be confirmed with the salon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
