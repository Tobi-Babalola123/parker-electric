"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const ABOUT_IMAGE = "/images/parkervan.webp";

const highlights = [
  "Serving Since 1942",
  "Quality Workmanship",
  "Customer-First Service",
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white py-14 sm:py-20 lg:py-28"
    >
      {" "}
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-5 sm:gap-12 sm:px-8 md:px-10 lg:grid-cols-2 lg:gap-12 lg:px-12 xl:gap-16 xl:px-16 2xl:px-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative min-w-0"
        >
          {" "}
          <div className="relative h-[260px] overflow-hidden rounded-2xl bg-stone-100 sm:h-[360px] md:h-[420px] lg:h-[520px] xl:h-[580px]">
            {" "}
            <img
              src={ABOUT_IMAGE}
              alt="Experienced electrician completing detailed electrical work"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            {/* Subtle image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/25 via-transparent to-transparent" />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-2 -right-2 -z-10 h-24 w-24 rounded-2xl bg-amber-400/70 sm:-bottom-3 sm:-right-3 sm:h-32 sm:w-32" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="min-w-0 lg:py-4"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-0.5 w-8 rounded-full bg-amber-400" />
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-neutral-600 sm:text-sm">
              About Parker Electric
            </span>
          </div>

          <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
            Serving Gainesville With{" "}
            <span className="text-amber-500">Quality Since 1942.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-700 sm:mt-6 sm:text-lg sm:leading-8">
            Parker Electric has been serving customers since 1942, with a
            commitment to quality workmanship, dependable electrical service,
            and customer satisfaction.
          </p>

          <p className="mt-4 text-sm leading-7 text-neutral-600 sm:mt-5 sm:text-base sm:leading-8">
            We believe great service starts with clear communication. From your
            first conversation with our team to the completion of your project,
            we aim to understand your needs and deliver electrical solutions you
            can depend on.
          </p>

          <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
            Whether you need electrical work for your home or business, Parker
            Electric is ready to help. Get in touch to discuss your project and
            find the right solution.
          </p>

          {/* Key benefits */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-3 sm:gap-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-stone-50 p-4 transition-colors duration-300 hover:border-amber-400/80 sm:flex-col sm:items-start sm:gap-3 sm:p-4"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-amber-400/15 text-amber-600">
                  <Check className="size-4" strokeWidth={2.5} />
                </span>

                <p className="text-sm font-bold leading-5 text-neutral-900">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10">
            <a
              href="#why-parker"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-neutral-950 px-5 py-3.5 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-amber-400 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 sm:w-auto sm:px-6"
            >
              Learn More About Parker Electric
              <ArrowRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
