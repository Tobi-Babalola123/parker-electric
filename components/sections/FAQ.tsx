"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { faqs } from "@/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      {" "}
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:px-12 xl:gap-20 xl:px-16 2xl:px-20">
        {/* FAQ introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="min-w-0 lg:sticky lg:top-28 lg:self-start"
        >
          {" "}
          <div className="inline-flex items-center gap-3">
            {" "}
            <span className="h-0.5 w-8 rounded-full bg-amber-400" />{" "}
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-neutral-600 sm:text-sm">
              FAQ{" "}
            </span>{" "}
          </div>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
            Questions About Electrical Service?
          </h2>
          <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
            Get quick answers, then call our local team to discuss your specific
            electrical needs.
          </p>
          {/* Contact prompt */}
          <div className="mt-7 flex items-start gap-4 rounded-2xl border border-neutral-200 bg-stone-50 p-4 sm:mt-9 sm:p-5">
            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-400/15 text-amber-600">
              <MessageCircle className="size-5" />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-extrabold text-neutral-950">
                Still have questions?
              </p>
              <p className="mt-1 text-sm leading-6 text-neutral-600">
                Get in touch with Parker Electric to discuss your project.
              </p>
              <a
                href="#contact"
                className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-neutral-950 underline decoration-amber-400 decoration-2 underline-offset-4 transition-colors hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
              >
                Contact our team
              </a>
            </div>
          </div>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="min-w-0 space-y-3"
        >
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-amber-400/70 bg-stone-50"
                    : "border-neutral-200 bg-white hover:border-neutral-300"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 px-4 py-5 text-left text-sm font-extrabold leading-6 text-neutral-950 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-amber-500 sm:gap-6 sm:px-6 sm:py-6 sm:text-base md:text-lg"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                  >
                    <span className="min-w-0">{item.question}</span>

                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-amber-400 text-neutral-950"
                          : "bg-stone-100 text-neutral-600"
                      }`}
                    >
                      <ChevronDown
                        className={`size-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                      <div className="mb-4 h-px w-full bg-neutral-200" />
                      <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
