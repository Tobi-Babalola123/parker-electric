"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquareText,
  SearchCheck,
  Wrench,
} from "lucide-react";

const steps = [
  {
    title: "Tell Us What You Need",
    text: "Call Parker Electric or submit a service request describing the issue or project.",
    icon: MessageSquareText,
  },
  {
    title: "Discuss the Solution",
    text: "We'll understand your needs and determine the right electrical solution.",
    icon: SearchCheck,
  },
  {
    title: "Get the Work Done Right",
    text: "Our experienced electricians complete the work with quality and attention to detail.",
    icon: Wrench,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="overflow-hidden bg-stone-50 py-16 sm:py-20 lg:py-28"
    >
      {" "}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {" "}
          <div className="inline-flex items-center justify-center gap-3">
            {" "}
            <span className="h-0.5 w-8 rounded-full bg-amber-400" />{" "}
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-neutral-600 sm:text-sm">
              How It Works{" "}
            </span>{" "}
            <span className="h-0.5 w-8 rounded-full bg-amber-400" />{" "}
          </div>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
            Getting Electrical Help Is Simple
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
            From your first call to the completed project, we make it easy to
            get the electrical help you need.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {steps.map(({ title, text, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/70 hover:shadow-xl hover:shadow-neutral-950/5 sm:p-7 lg:min-h-[330px] lg:p-8"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-100 bg-neutral-950 transition-colors duration-300 group-hover:bg-amber-400" />

              {/* Icon and step number */}
              <div className="flex items-center justify-between gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-amber-400/15 text-amber-600 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-neutral-950 sm:size-14">
                  <Icon
                    className="size-6"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <span className="font-display text-4xl font-black tracking-tight text-neutral-100 transition-colors duration-300 group-hover:text-amber-100 sm:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Step content */}
              <h3 className="mt-7 text-lg font-extrabold leading-snug text-neutral-950 sm:mt-8 sm:text-xl">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600 sm:mt-4 sm:text-base">
                {text}
              </p>

              {/* Step indicator */}
              <div className="mt-6 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-neutral-400 transition-colors duration-300 group-hover:text-amber-600">
                <span className="h-px w-6 bg-current" />
                Step {index + 1}
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mt-8 text-center sm:mt-10"
        >
          <a
            href="#contact"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-neutral-950 px-6 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-amber-400 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 sm:w-auto sm:px-8"
          >
            Request Service
            <ArrowRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
