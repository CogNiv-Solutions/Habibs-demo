"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Reveal } from "@/components/reveal";

type GalleryImage = { src: string; alt: string; caption: string; aspect: string };

const images: GalleryImage[] = [
  {
    src: "/salon/gallery-hair-1.jpg",
    alt: "Long wavy hair with soft lavender colour",
    caption: "Soft colour, flowing lengths",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/salon/gallery-salon-2.jpg",
    alt: "Modern salon interior with styling chairs and round mirrors",
    caption: "Our Lohegaon studio",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/salon/gallery-styling-1.jpg",
    alt: "Stylist blow-drying and finishing a client's hair",
    caption: "The perfect blowout",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/salon/gallery-beauty-1.jpg",
    alt: "Makeup being applied for an evening look",
    caption: "Evening glam",
    aspect: "aspect-square",
  },
  {
    src: "/salon/gallery-hair-2.jpg",
    alt: "Stylists with scissors and brushes, ready to work",
    caption: "In good hands",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/salon/gallery-salon-1.jpg",
    alt: "Premium salon interior with classic styling chairs",
    caption: "Take your chair",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/salon/gallery-grooming-1.jpg",
    alt: "Barber giving a sharp classic haircut",
    caption: "Sharp classic cuts",
    aspect: "aspect-square",
  },
  {
    src: "/salon/gallery-beauty-2.jpg",
    alt: "Beauty portrait with a fresh, glowing look",
    caption: "Fresh and glowing",
    aspect: "aspect-[3/4]",
  },
];

export function SalonGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((i) => (i === null ? i : (i + dir + images.length) % images.length));
    },
    []
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

  const current = openIndex !== null ? images[openIndex] : null;

  return (
    <section id="gallery" aria-labelledby="salon-gallery-heading" className="scroll-mt-20 bg-white">
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
            THE SALON, UP CLOSE
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1c1917]/65 md:text-lg">
            Cuts, colour, beauty and the space itself — tap any photo to view.
          </p>
        </Reveal>

        <div className="mt-8 columns-2 gap-4 md:mt-10 lg:columns-3 [&>*]:mb-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View photo: ${img.caption}`}
              className={`group relative block w-full break-inside-avoid overflow-hidden rounded-[20px] border border-[#1c1917]/10 bg-[#faf7f2] text-left ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 380px"
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-[#a51c30]/0 transition-colors duration-300 group-hover:bg-[#a51c30]/30"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="text-[13.5px] font-semibold leading-snug text-white drop-shadow-[0_1px_8px_rgb(0_0_0/0.6)]">
                  {img.caption}
                </span>
                <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#a51c30]">
                  <Expand className="h-4 w-4" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

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
                {openIndex + 1} / {images.length}
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
              <p className="text-[14.5px] font-medium text-white">{current.caption}</p>
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
