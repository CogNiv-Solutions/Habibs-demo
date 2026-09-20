"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

const ease = [0.32, 0.72, 0, 1] as const;

export function SalonHero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" aria-labelledby="salon-hero-heading" className="relative overflow-hidden bg-white pt-[76px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-10 top-16 hidden select-none font-serif text-[11rem] italic leading-none text-[#a51c30]/[0.06] lg:block">
          H
        </div>
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#a51c30]/25 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-8 md:px-8 md:pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pb-20 lg:pt-14">
        <div className="max-w-xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a51c30]">
              <span aria-hidden className="h-px w-8 bg-[#a51c30]" />
              Habib&rsquo;s Hair &amp; Beauty Salon
            </p>
          </motion.div>

          <motion.h1
            id="salon-hero-heading"
            initial={reduce ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-5 text-[2.75rem] font-bold leading-[0.98] tracking-tight text-[#1c1917] sm:text-6xl lg:text-[4.6rem]"
          >
            Your Style.
            <br />
            <span className="font-serif font-medium italic text-[#a51c30]">Your Confidence.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease }}
            className="mt-5 max-w-[46ch] text-base leading-relaxed text-[#1c1917]/65 md:text-lg"
          >
            Expert hair, beauty and grooming in Lohegaon, Pune — walk in for a refresh, or book ahead
            for your big occasion.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="btn-press group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#a51c30] px-2 py-2 pl-7 pr-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#7f1424]"
            >
              Book Appointment
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </a>
            <a
              href="#services"
              className="btn-press inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#1c1917]/15 bg-white px-7 text-[14px] font-semibold uppercase tracking-[0.1em] text-[#1c1917] hover:border-[#a51c30]/50 hover:text-[#a51c30]"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.14, ease }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-[#1c1917]/10 bg-[#faf7f2]">
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/5] lg:aspect-[4/4.6]">
              <Image
                src="/salon/hero.jpg"
                alt="Professional stylist finishing a client's hair inside a bright premium salon"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div aria-hidden className="pointer-events-none absolute inset-3 rounded-[20px] border border-white/50" />
          </div>
          <div aria-hidden className="absolute -left-3 -top-3 -z-10 h-full w-full rounded-[28px] bg-[#a51c30]/10" />

          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-[#1c1917]/10 bg-white/95 py-2.5 pl-2.5 pr-5 shadow-[0_18px_44px_-20px_rgb(28_25_23/0.45)] backdrop-blur sm:left-6">
            <span className="relative h-12 w-12 overflow-hidden rounded-xl">
              <Image
                src="/salon/detail.jpg"
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span className="leading-tight">
              <span className="block text-[13px] font-semibold text-[#1c1917]">Hair · Beauty · Grooming</span>
              <span className="mt-0.5 block text-[12px] text-[#1c1917]/55">For women &amp; men</span>
            </span>
            <span aria-hidden className="ml-1 h-8 w-[3px] rounded-full bg-[#a51c30]" />
          </div>

          <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-[#1c1917]/50 sm:mt-9">
            Lohegaon · Pune
          </p>
        </motion.div>
      </div>
    </section>
  );
}
