"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data";

export default function Services() {
  return (
    <section id="services" className="bg-stone-50 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-600 sm:text-sm">
            <span className="h-px w-8 bg-amber-500" />
            What We Do
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
            Electrical Services for Every Project
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
            Whether you need a repair, an upgrade, a new installation or
            electrical work for a larger project, Parker Electric provides
            professional solutions built to last.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/80 hover:shadow-xl hover:shadow-neutral-950/5 sm:p-8 lg:p-9"
            >
              {/* Amber Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber-400 transition-transform duration-300 group-hover:scale-x-100" />

              {/* Service Icon */}
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-neutral-950 text-amber-400 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-neutral-950 sm:size-14">
                <Icon
                  className="size-5 sm:size-6"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              {/* Service Content */}
              <h3 className="mt-6 text-xl font-extrabold leading-snug tracking-tight text-neutral-950 sm:mt-8 sm:text-2xl">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600 sm:mt-4 sm:text-[15px]">
                {description}
              </p>

              {/* Learn More Indicator */}
              <div className="mt-6 flex items-center gap-2 border-t border-neutral-100 pt-5 text-xs font-extrabold uppercase tracking-[0.14em] text-neutral-950 transition-colors duration-300 group-hover:text-amber-600 sm:mt-8">
                <span>Learn More</span>
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 sm:mt-12">
          <a
            href="#contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-neutral-950 px-6 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-amber-400 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 sm:w-auto"
          >
            Discuss Your Project
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
