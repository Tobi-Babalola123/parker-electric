"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projectImages } from "@/data";

export default function Projects() {
  return (
    <section
      id="work"
      className="overflow-hidden bg-stone-50 py-16 sm:py-20 lg:py-28"
    >
      {" "}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section heading */}{" "}
        <div className="grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-[1.1fr_0.7fr] lg:items-end lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="min-w-0"
          >
            {" "}
            <div className="inline-flex items-center gap-3">
              {" "}
              <span className="h-0.5 w-8 rounded-full bg-amber-400" />{" "}
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-neutral-600 sm:text-sm">
                Our Work{" "}
              </span>{" "}
            </div>
            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
              Professional Electrical Work You Can See.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="max-w-xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8 lg:justify-self-end"
          >
            See examples of the quality and attention to detail Parker Electric
            brings to every project.
          </motion.p>
        </div>
        {/* Project gallery */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:grid-rows-2">
          {projectImages.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.07,
                ease: "easeOut",
              }}
              className={`group relative isolate min-h-[260px] overflow-hidden rounded-xl bg-neutral-900 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-950/10 sm:min-h-[280px] ${
                index === 0
                  ? "sm:col-span-2 lg:row-span-2 lg:min-h-[480px] xl:min-h-[560px]"
                  : "lg:min-h-[232px] xl:min-h-[272px]"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/10 to-transparent transition-colors duration-300 group-hover:from-neutral-950/90" />

              {/* Category and image accent */}
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5 lg:p-5 xl:p-6">
                <span className="inline-flex max-w-full items-center rounded-full border border-amber-300/30 bg-amber-400 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-neutral-950 sm:text-xs">
                  {image.category}
                </span>

                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 translate-y-2 place-items-center rounded-full border border-white/30 bg-neutral-950/30 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ArrowRight className="size-4 -rotate-45" />
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mt-8 sm:mt-10"
        >
          <a
            href="#contact"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-neutral-950 px-5 py-4 text-center text-sm font-bold text-white transition-colors duration-300 hover:bg-amber-400 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 sm:w-auto sm:px-6"
          >
            Talk to Us About Your Project
            <ArrowRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
