"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/data";

const YELP_URL =
  "https://www.yelp.com/search?find_desc=Parker+Electric&find_loc=Gainesville%2C+TX";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      {" "}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {" "}
          <div className="inline-flex items-center gap-3">
            {" "}
            <span className="h-0.5 w-8 rounded-full bg-amber-400" />{" "}
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-neutral-600 sm:text-sm">
              Customer Reviews{" "}
            </span>{" "}
          </div>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
            Quality Service. Happy Customers.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
            We believe great electrical work goes hand in hand with dependable
            service, clear communication, and attention to detail.
          </p>
        </motion.div>

        {/* Review cards */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {testimonials.map((review, index) => (
            <motion.article
              key={review.quote}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="group flex min-w-0 flex-col rounded-xl border border-neutral-200 bg-stone-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/70 hover:bg-white hover:shadow-xl hover:shadow-neutral-950/5 sm:p-7 lg:p-8"
            >
              {/* Stars and quote icon */}
              <div className="flex items-center justify-between gap-3">
                <div
                  className="flex gap-1 text-amber-500"
                  role="img"
                  aria-label="Five stars (sample rating)"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className="size-4 fill-current sm:size-[18px]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <span
                  aria-hidden="true"
                  className="font-serif text-5xl leading-none text-amber-400/50 transition-colors duration-300 group-hover:text-amber-400"
                >
                  “
                </span>
              </div>

              {/* Review text */}
              <p className="mt-4 flex-1 text-sm leading-7 text-neutral-700 sm:mt-5 sm:text-base sm:leading-8">
                “{review.quote}”
              </p>

              {/* Reviewer information */}
              <div className="mt-7 border-t border-neutral-200 pt-5 sm:mt-8">
                <p className="break-words text-sm font-extrabold text-neutral-950 sm:text-base">
                  {review.name}
                </p>

                <p className="mt-1.5 text-[10px] font-bold uppercase leading-5 tracking-[0.12em] text-neutral-500 sm:text-xs">
                  Sample review · {review.service}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Yelp callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-6 flex flex-col gap-6 rounded-xl border border-white/10 bg-neutral-950 p-6 text-white sm:mt-8 sm:p-8 md:flex-row md:items-center md:justify-between md:gap-8 lg:p-10"
        >
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-400">
              <Star className="size-3.5 fill-current" />
              More customer feedback
            </div>

            <h3 className="mt-4 text-xl font-extrabold leading-snug tracking-tight sm:text-2xl">
              See What Customers Are Saying About Parker Electric
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/60 sm:text-base">
              Visit Yelp to explore customer feedback and reviews.
            </p>
          </div>

          <a
            href={YELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-extrabold text-neutral-950 transition-colors duration-300 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 sm:w-auto"
          >
            View Reviews
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
