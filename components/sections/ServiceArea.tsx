"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { serviceAreas } from "@/data";

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="relative isolate overflow-hidden bg-amber-400 py-16 sm:py-20 lg:py-28"
    >
      {/* Decorative background grid */}{" "}
      <div
        aria-hidden="true"
        className="map-grid pointer-events-none absolute inset-0 opacity-20"
      />
      {/* Soft decorative accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full border border-neutral-950/10 sm:size-80 lg:size-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full border border-neutral-950/10 sm:size-56 lg:size-80"
      />
      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-5 sm:gap-12 sm:px-8 md:px-10 lg:grid-cols-[1.1fr_0.72fr] lg:gap-14 lg:px-12 xl:gap-20 xl:px-16 2xl:px-20">
        {/* Service area content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="min-w-0"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-0.5 w-8 rounded-full bg-neutral-950/70" />
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-neutral-900 sm:text-sm">
              Local Service
            </span>
          </div>

          <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
            Your Local Electrical Partner in Gainesville
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-800 sm:mt-6 sm:text-lg sm:leading-8">
            Based in Gainesville, Texas, Parker Electric provides professional
            electrical services for homeowners, businesses, and property owners
            throughout the surrounding area.
          </p>

          {/* Service area tags */}
          <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex max-w-full items-center rounded-full border border-neutral-950/15 bg-white/55 px-3.5 py-2.5 text-xs font-bold text-neutral-900 transition-colors duration-200 hover:border-neutral-950/30 hover:bg-white/80 sm:px-4 sm:text-sm"
              >
                <MapPin
                  className="mr-2 size-3.5 shrink-0 text-neutral-700"
                  aria-hidden="true"
                />
                <span className="break-words">{area}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="min-w-0"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-6 text-white shadow-2xl shadow-neutral-950/20 sm:p-8 lg:p-9 xl:p-10">
            {/* Decorative card accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full border border-amber-400/10 sm:size-52"
            />

            <div className="relative">
              <div className="grid size-12 place-items-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-400">
                <MapPin className="size-6" strokeWidth={1.8} />
              </div>

              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-white/50 sm:text-sm">
                Visit Parker Electric
              </p>

              <address className="mt-3 break-words text-2xl font-extrabold leading-snug tracking-tight not-italic sm:text-3xl">
                112 South Rusk Street
                <br />
                Gainesville, TX 76240
              </address>

              <div className="my-6 h-px bg-white/10 sm:my-7" />

              <p className="text-sm leading-6 text-white/60">
                Have an electrical project or need professional assistance? Get
                in touch with our team.
              </p>

              <a
                href="tel:9406652721"
                className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-amber-400 px-5 py-4 text-center text-sm font-extrabold text-neutral-950 transition-colors duration-300 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 sm:mt-8"
              >
                <Phone className="size-5 shrink-0" />
                Call 940-665-2721
                <ArrowUpRight className="ml-auto size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <p className="mt-4 text-center text-xs text-white/40">
                Tap to call from your phone
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
