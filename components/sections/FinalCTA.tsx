"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Zap } from "lucide-react";

const PHONE = "940-665-2721";
const PHONE_LINK = "tel:9406652721";
const FAX = "940-665-2734";

const CTA_BACKGROUND = "/images/parkervan.webp";

export default function FinalCTA() {
  return (
    <section
      className="relative isolate overflow-hidden px-4 py-20 text-center text-white sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      aria-labelledby="final-cta-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={CTA_BACKGROUND}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlays preserve contrast over the photograph */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-neutral-950/75" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/35 via-neutral-950/55 to-neutral-950/85" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-amber-950/10" />

      {/* Subtle amber glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="container-shell relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-neutral-950/45 px-4 py-2 backdrop-blur-sm">
            <Zap className="size-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 sm:text-sm">
              Ready when you are
            </span>
          </div>

          <h2
            id="final-cta-heading"
            className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Need Electrical Work{" "}
            <span className="text-amber-400">
              <span className="lg:block">Done Right?</span>
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 [text-shadow:0_1px_10px_rgba(0,0,0,0.35)] sm:mt-6 sm:text-lg sm:leading-8">
            Whether you're dealing with an electrical issue, planning an
            upgrade, or starting a new project, Parker Electric is ready to
            help. Let's get the job done right.
          </p>

          <a
            href={PHONE_LINK}
            aria-label={`Call Parker Electric at ${PHONE}`}
            className="mt-7 inline-block rounded-xl text-3xl font-extrabold tracking-tight text-amber-400 drop-shadow-lg transition-colors duration-300 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950 sm:mt-8 sm:text-4xl md:text-5xl"
          >
            {PHONE}
          </a>

          <div className="mt-8 flex w-full max-w-md flex-col justify-center gap-3 sm:mt-9 sm:max-w-none sm:flex-row">
            <a
              href={PHONE_LINK}
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-neutral-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:min-h-14 sm:px-7 sm:text-base"
            >
              <Phone className="size-5 shrink-0" aria-hidden="true" />
              Call Parker Electric
            </a>

            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-white/35 bg-neutral-950/35 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-neutral-950/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:min-h-14 sm:px-7 sm:text-base"
            >
              Request Service
              <ArrowRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-5 text-sm text-white/75">Fax: {FAX}</p>

          <div className="mt-9 flex items-center gap-3 sm:mt-10">
            <span className="h-px w-8 bg-amber-400/60 sm:w-12" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.25em]">
              The quality you deserve.
            </p>
            <span className="h-px w-8 bg-amber-400/60 sm:w-12" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
