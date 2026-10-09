"use client";

import { motion } from "framer-motion";
import { whyItems } from "@/data";

export default function WhyChooseParker() {
  return (
    <section
      id="why-parker"
      className="relative isolate overflow-hidden bg-neutral-950 py-16 text-white sm:py-20 lg:py-28"
    >
      {/* Decorative background accent */}{" "}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 select-none text-[18rem] font-black leading-none text-white/[0.025] sm:-right-20 sm:-top-20 sm:text-[26rem] lg:-right-24 lg:-top-28 lg:text-[34rem]"
      >
        ϟ{" "}
      </div>
      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-0.5 w-8 rounded-full bg-amber-400" />
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-400 sm:text-sm">
              Why Parker
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Built Around Quality. Backed by Experience.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            From the materials we use to the care we bring to every project, our
            focus is on dependable electrical work and lasting results.
          </p>
        </motion.div>

        {/* Why choose Parker cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {whyItems.map(({ title, text, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/20 sm:p-7 lg:min-h-[350px] lg:p-6 xl:min-h-[370px] xl:p-8"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-amber-400 transition-transform duration-300 group-hover:scale-x-100" />

              {/* Icon and number */}
              <div className="flex items-center justify-between gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-400 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-neutral-950">
                  <Icon
                    className="size-6"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <span className="font-display text-3xl font-extrabold tracking-tight text-white/15 sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Card content */}
              <h3 className="mt-7 text-lg font-extrabold uppercase leading-snug tracking-wide text-white sm:mt-9 sm:text-xl">
                {title}
              </h3>

              <div className="mt-4 h-0.5 w-10 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-16" />

              <p className="mt-4 flex-1 text-sm leading-7 text-white/60 sm:mt-5">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
