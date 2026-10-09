"use client";

import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=88";

const benefits = [
  "Experienced Electricians",
  "Quality Materials",
  "Local Service",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-neutral-950 pb-16 pt-32 text-white sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      {/* Background accent */}{" "}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_20%,rgba(251,191,36,0.10),transparent_45%)]"
      />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="min-w-0"
        >
          <div className="inline-flex max-w-full items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-400 sm:text-sm sm:tracking-[0.2em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400" />
            <span>Established Electrical Contractor</span>
          </div>

          <h1 className="mt-6 max-w-2xl break-words text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[clamp(3.25rem,4.2vw,4.75rem)]">
            Electrical Work Done Right.
            <span className="text-amber-400"> The First Time.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:mt-7 sm:text-lg sm:leading-8">
            From electrical repairs and upgrades to new installations, Parker
            Electric delivers dependable workmanship and lasting solutions for
            homes and businesses in Gainesville and the surrounding North Texas
            area.
          </p>

          {/* Calls to action */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <a
              href="tel:9406652721"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 sm:w-auto sm:px-6"
            >
              <Phone className="size-5 shrink-0" aria-hidden="true" />
              Call Parker Electric
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-amber-400/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 sm:w-auto sm:px-6"
            >
              Request Service
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <a
            href="tel:9406652721"
            className="mt-6 inline-flex text-xl font-extrabold tracking-tight text-white transition-colors hover:text-amber-400 sm:mt-7 sm:text-2xl"
          >
            940-665-2721
          </a>

          {/* Trust indicators */}
          <div className="mt-7 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3 xl:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex min-w-0 items-center gap-2 text-sm font-medium text-white/65"
              >
                <CheckCircle2
                  className="size-4 shrink-0 text-amber-400"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full min-w-0 max-w-2xl lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-xl border border-amber-400/20 sm:-inset-3"
          />

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-900 sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src={HERO_IMAGE}
              alt="Professional electrician working on an electrical installation"
              className="absolute inset-0 h-full w-full object-cover object-center"
              fetchPriority="high"
            />

            {/* Image overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
            />

            {/* Image caption */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-7">
              <div className="max-w-sm border-l-2 border-amber-400 bg-neutral-950/75 px-4 py-4 backdrop-blur-md sm:px-5">
                <p className="text-lg font-extrabold sm:text-xl">
                  Quality You Deserve
                </p>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  Professional electrical service
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
