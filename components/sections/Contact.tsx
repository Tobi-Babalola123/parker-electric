"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowUpRight, Clock } from "lucide-react";

const fieldClass =
  "mt-2.5 w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-3.5 text-base font-normal text-neutral-900 outline-none transition duration-200 placeholder:text-neutral-400 hover:border-neutral-300 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10";

const contactItems = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    content: (
      <address className="not-italic leading-7 text-neutral-600">
        112 South Rusk Street
        <br />
        Gainesville, Texas 76240
      </address>
    ),
    href: "https://maps.google.com/?q=112+South+Rusk+Street+Gainesville+Texas+76240",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: (
      <div className="space-y-1">
        <a
          href="tel:9406652721"
          className="font-bold text-neutral-900 transition-colors hover:text-amber-600"
        >
          940-665-2721
        </a>
        <p className="text-sm text-neutral-500">Fax: 940-665-2734</p>
      </div>
    ),
  },
  {
    icon: Mail,
    title: "Email Us",
    content: (
      <a
        href="mailto:parkerelectric1942@gmail.com"
        className="break-all text-neutral-700 transition-colors hover:text-amber-600"
      >
        parkerelectric1942@gmail.com
      </a>
    ),
    href: "mailto:parkerelectric1942@gmail.com",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-stone-100 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-amber-400/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-neutral-300/30 blur-3xl" />

      <div className="container-shell relative mx-auto">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16 xl:gap-20">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-400/10 px-4 py-2">
              <span className="size-2 rounded-full bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700 sm:text-sm">
                Get in touch
              </span>
            </div>

            <h2 className="mt-6 max-w-xl font-display text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Let's Talk About Your{" "}
              <span className="text-amber-500">Electrical Project.</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Have an electrical issue or planning an upgrade? Tell us what you
              need, and let's discuss how Parker Electric can help.
            </p>

            {/* Contact detail cards */}
            <div className="mt-9 space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="group flex gap-4 rounded-2xl border border-neutral-200/80 bg-white/80 p-4 shadow-sm shadow-black/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/50 hover:bg-white hover:shadow-md hover:shadow-black/[0.04] sm:gap-5 sm:p-5"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-600 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-neutral-950">
                      <Icon className="size-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-sm font-bold text-neutral-950">
                        {item.title}
                      </h3>
                      {item.content}
                    </div>

                    {item.href && (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("https://")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.href.startsWith("https://")
                            ? "noreferrer"
                            : undefined
                        }
                        aria-label={`Open ${item.title}`}
                        className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-amber-50 hover:text-amber-600"
                      >
                        <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Trust note */}
            <div className="mt-6 flex items-start gap-3 px-1">
              <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-amber-400">
                <Clock className="size-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">
                  Need immediate assistance?
                </p>
                <p className="mt-1 text-sm leading-6 text-neutral-500">
                  For urgent service, call us directly at{" "}
                  <a
                    href="tel:9406652721"
                    className="font-semibold text-neutral-800 underline decoration-amber-400 decoration-2 underline-offset-4 transition-colors hover:text-amber-600"
                  >
                    940-665-2721
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-xl shadow-neutral-950/[0.04] sm:p-8 lg:p-9"
          >
            <div className="mb-7 border-b border-neutral-100 pb-6 sm:mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                Service request
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-neutral-950 sm:text-3xl">
                Tell Us What You Need
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-500 sm:text-base">
                Fill out the form below and let us know how we can help.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                <label className="block text-sm font-bold text-neutral-800">
                  Full Name <span className="text-amber-600">*</span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    className={fieldClass}
                  />
                </label>

                <label className="block text-sm font-bold text-neutral-800">
                  Phone Number <span className="text-amber-600">*</span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Your phone number"
                    className={fieldClass}
                  />
                </label>

                <label className="block text-sm font-bold text-neutral-800">
                  Email Address <span className="text-amber-600">*</span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </label>

                <label className="block text-sm font-bold text-neutral-800">
                  Service Needed <span className="text-amber-600">*</span>
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className={`${fieldClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Electrical Repair</option>
                    <option>Electrical Installation</option>
                    <option>Electrical Upgrade</option>
                    <option>Lighting</option>
                    <option>Commercial Electrical</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <label className="mt-5 block text-sm font-bold text-neutral-800">
                Tell Us About Your Project{" "}
                <span className="text-amber-600">*</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Describe the electrical work you need..."
                  className={`${fieldClass} min-h-36 resize-y`}
                />
              </label>

              <button
                type="submit"
                className="group mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-neutral-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-neutral-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-neutral-950 hover:shadow-xl hover:shadow-amber-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-base"
              >
                Request Service
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 8 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4"
                      role="status"
                      aria-live="polite"
                    >
                      <p className="text-sm font-bold text-neutral-900">
                        Thanks for reaching out!
                      </p>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        This demo form hasn't sent your request. Please call{" "}
                        <a
                          href="tel:9406652721"
                          className="font-bold text-neutral-900 underline decoration-amber-500 underline-offset-4"
                        >
                          940-665-2721
                        </a>{" "}
                        for assistance.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="mt-5 text-center text-xs leading-5 text-neutral-500">
                Your information will be used to respond to your service
                request.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
