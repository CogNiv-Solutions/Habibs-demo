"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type GalleryCategory = "Hair" | "Styling" | "Beauty" | "Salon" | "Grooming";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  aspect: string;
};

const filters = ["All", "Hair", "Styling", "Beauty", "Salon", "Grooming"] as const;
type Filter = (typeof filters)[number];

const images: GalleryImage[] = [
  {
    src: "/salon/gallery-hair-1.jpg",
    alt: "Demo photograph of long wavy lavender-coloured hair",
    caption: "Lavender waves, soft colour",
    category: "Hair",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/salon/gallery-salon-2.jpg",
    alt: "Demo photograph of a modern salon interior with styling chairs and round mirrors",
    caption: "Chairs, mirrors & calm",
    category: "Salon",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/salon/gallery-beauty-1.jpg",
    alt: "Demo photograph of makeup being applied to a client's lips",
    caption: "Makeup, up close",
    category: "Beauty",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/salon/gallery-grooming-2.jpg",
    alt: "Demo photograph of barber clippers, scissors and grooming products on a table",
    caption: "Tools of the trade",
    category: "Grooming",
    aspect: "aspect-square",
  },
  {
    src: "/salon/gallery-styling-2.jpg",
    alt: "Demo photograph of a barber detailing a precision fade haircut",
    caption: "Precision fade detailing",
    category: "Styling",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/salon/gallery-beauty-3.jpg",
    alt: "Demo photograph of professional makeup brushes in a holder",
    caption: "The pro brush kit",
    category: "Beauty",
    aspect: "aspect-square",
  },
  {
    src: "/salon/gallery-hair-2.jpg",
    alt: "Demo photograph of stylists posing with scissors and hairbrushes",
    caption: "Scissors, brushes & good hair days",
    category: "Hair",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/salon/gallery-salon-1.jpg",
    alt: "Demo photograph of a premium barbershop-style salon interior",
    caption: "Inside the salon",
    category: "Salon",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/salon/gallery-beauty-4.jpg",
    alt: "Demo photograph of makeup products arranged on a dark surface",
    caption: "The kit, laid out",
    category: "Beauty",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/salon/gallery-grooming-1.jpg",
    alt: "Demo photograph of a barber giving a classic clipper haircut",
    caption: "The classic cut",
    category: "Grooming",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/salon/gallery-styling-1.jpg",
    alt: "Demo photograph of a stylist blow-drying and finishing a client's hair",
    caption: "Shaped, smoothed & finished",
    category: "Styling",
    aspect: "aspect-square",
  },
  {
    src: "/salon/gallery-beauty-2.jpg",
    alt: "Demo photograph of a beauty portrait",
    caption: "The beauty portrait",
    category: "Beauty",
    aspect: "aspect-[3/4]",
  },
];

export function SalonGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const visible = filter === "All" ? images : images.filter((img) => img.category === filter);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length));
    },
    [visible.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex !== null ? visible[openIndex] : null;

  return (
    <section id="gallery" aria-labelledby="salon-gallery-heading" className="scroll-mt-20 border-t border-[#1c1917]/8 bg-blush">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a51c30]">
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
            Gallery
            <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
          </p>
          <h2
            id="salon-gallery-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[#1c1917] md:text-5xl"
          >
            THE HABIB&rsquo;S EXPERIENCE
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1c1917]/65 md:text-lg">
            A glimpse into our world of style, beauty and grooming.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery by category">
            {filters.map((f) => {
              const count = f === "All" ? images.length : images.filter((img) => img.category === f).length;
              const selected = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => {
                    setFilter(f);
                    setOpenIndex(null);
                  }}
                  aria-pressed={selected}
                  className={cn(
                    "btn-press min-h-[44px] rounded-full border px-5 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors",
                    selected
                      ? "border-[#a51c30] bg-[#a51c30] text-white"
                      : "border-[#1c1917]/15 bg-white text-[#1c1917]/65 hover:border-[#a51c30]/40 hover:text-[#a51c30]"
                  )}
                >
                  {f}
                  <span aria-hidden className={cn("ml-1.5 text-[11px]", selected ? "text-white/70" : "text-[#1c1917]/35")}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Masonry grid */}
        <div className="mt-8 columns-2 gap-4 md:mt-10 lg:columns-3 [&>*]:mb-4">
          {visible.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View photo: ${img.caption}`}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-[20px] border border-[#1c1917]/10 bg-[#faf7f2] text-left"
            >
              <span className={cn("relative block w-full overflow-hidden", img.aspect)}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 380px"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                {/* Red overlay + view indicator */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[#a51c30]/0 transition-colors duration-300 group-hover:bg-[#a51c30]/30"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#1c1917]">
                  {img.category}
                </span>
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="text-[13.5px] font-semibold leading-snug text-white drop-shadow-[0_1px_8px_rgb(0_0_0/0.6)]">
                    {img.caption}
                  </span>
                  <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#a51c30]">
                    <Expand className="h-4 w-4" />
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[68ch] text-center text-[12.5px] leading-relaxed text-[#1c1917]/60">
          Demo photographs for layout preview — they are not photographs of this salon and will be replaced
          with the salon&rsquo;s own work before launch.
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#1c1917]/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo viewer: ${current.caption}`}
            onClick={close}
          >
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 md:px-8">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/60">
                {openIndex + 1} / {visible.length}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close photo viewer"
                className="grid h-12 w-12 place-items-center rounded-full bg-[#a51c30] text-white transition-colors hover:bg-[#c2283f]"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <div
              className="relative mx-auto w-full max-w-5xl flex-1 px-4 pb-2 md:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full max-h-[68vh] w-full overflow-hidden rounded-[20px]">
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div
              className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-3 md:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#a51c30] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  {current.category}
                </span>
                <p className="text-[14.5px] font-medium text-white">{current.caption}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
