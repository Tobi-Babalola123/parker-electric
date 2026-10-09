"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";

const navigationLinks = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Our Work", "#work"],
  ["Contact", "#contact"],
];

const serviceLinks = [
  "Electrical Repairs",
  "Installations",
  "Upgrades",
  "Lighting",
  "Commercial Electrical",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background accent */}
      <div className="pointer-events-none absolute -right-40 -top-40 size-[30rem] rounded-full bg-amber-400/[0.04] blur-3xl" />

      {/* Main container: explicit horizontal padding and max width */}
      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 gap-y-12 border-b border-white/10 py-14 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 lg:py-15 xl:gap-x-14"
        >
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <a
              href="#home"
              aria-label="Parker Electric home"
              className="inline-flex shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950"
            >
              <Image
                src="/images/parkerlogo.png"
                alt="Parker Electric — Powering Your Future"
                width={220}
                height={70}
                className="h-auto w-[160px] object-contain sm:w-[180px] lg:w-[230px]"
              />
            </a>

            <p className="-mt-[28px] font-display text-xl font-bold leading-snug text-white">
              You call us, we'll wire you.
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
              Professional electrical services focused on quality workmanship,
              dependable solutions, and customer satisfaction.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-400"
            >
              Discuss Your Project
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Navigation column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wide text-white">
              Quick Links
            </h3>

            <div className="mb-6 mt-4 h-0.5 w-9 rounded-full bg-amber-400" />

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-4"
            >
              {navigationLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-amber-400"
                >
                  {label}
                  <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          {/* Services column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wide text-white">
              Our Services
            </h3>

            <div className="mb-6 mt-4 h-0.5 w-9 rounded-full bg-amber-400" />

            <nav
              aria-label="Footer services"
              className="flex flex-col items-start gap-4"
            >
              {serviceLinks.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-amber-400"
                >
                  {service}
                  <ArrowUpRight className="size-3.5 shrink-0 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold tracking-wide text-white">
              Get in Touch
            </h3>

            <div className="mb-6 mt-4 h-0.5 w-9 rounded-full bg-amber-400" />

            <div className="space-y-6">
              {/* Phone */}
              <a href="tel:9406652721" className="group flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-amber-400 transition-colors duration-200 group-hover:bg-amber-400 group-hover:text-neutral-950">
                  <Phone className="size-[18px]" />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-xs font-medium text-white/40">
                    Give us a call
                  </span>
                  <span className="mt-1.5 block text-sm font-semibold text-white transition-colors group-hover:text-amber-400">
                    940-665-2721
                  </span>
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:parkerelectric1942@gmail.com"
                className="group flex items-start gap-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-amber-400 transition-colors duration-200 group-hover:bg-amber-400 group-hover:text-neutral-950">
                  <Mail className="size-[18px]" />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-xs font-medium text-white/40">
                    Send us an email
                  </span>
                  <span className="mt-1.5 block break-all text-sm font-medium leading-6 text-white/75 transition-colors group-hover:text-amber-400">
                    parkerelectric1942@gmail.com
                  </span>
                </span>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=112+South+Rusk+Street+Gainesville+Texas+76240"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-amber-400 transition-colors duration-200 group-hover:bg-amber-400 group-hover:text-neutral-950">
                  <MapPin className="size-[18px]" />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-xs font-medium text-white/40">
                    Visit our office
                  </span>
                  <span className="mt-1.5 block text-sm leading-6 text-white/75 transition-colors group-hover:text-amber-400">
                    112 South Rusk Street
                    <br />
                    Gainesville, TX 76240
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-amber-400/80">
                    Get directions
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </span>
              </a>
            </div>

            <a
              href="https://www.yelp.com/search?find_desc=Parker+Electric&find_loc=Gainesville%2C+TX"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2.5 text-xs font-semibold text-white/55 transition-colors hover:border-amber-400/30 hover:text-amber-400"
            >
              Find us on Yelp
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-6 text-xs leading-5 text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Parker Electric. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-2">
            <Zap className="size-3.5 shrink-0 text-amber-400" />
            The quality you deserve.
          </p>
        </div>
      </div>
    </footer>
  );
}
