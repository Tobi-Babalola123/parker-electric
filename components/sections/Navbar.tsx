"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Our Work", "#work"],
  ["Why Parker", "#why-parker"],
  ["Contact", "#contact"],
];

const PHONE = "940-665-2721";
const PHONE_LINK = "tel:9406652721";
const FAX = "940-665-2734";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-neutral-950 shadow-xl shadow-black/20"
          : "border-transparent bg-transparent"
      }`}
    >
      {" "}
      <nav
        className="mx-auto flex h-[80px] w-full max-w-[1600px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[88px] lg:px-10 xl:px-12"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#home"
          className="mt-2 flex shrink-0 items-center"
          aria-label="Parker Electric home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/parkerlogo.png"
            alt="Parker Electric — Powering Your Future"
            width={300}
            height={90}
            priority
            className="h-auto w-[180px] object-contain sm:w-[185px] xl:w-[215px]"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-6 2xl:gap-7">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap text-xs font-semibold text-white/75 transition-colors hover:text-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 xl:text-sm"
            >
              {label}
            </a>
          ))}
        </div>
        {/* Desktop contact and CTA */}
        <div className="hidden shrink-0 items-center gap-3 xl:gap-5 lg:flex">
          <div className="flex flex-col items-end gap-1">
            <a
              href={PHONE_LINK}
              className="whitespace-nowrap text-sm font-bold text-white transition-colors hover:text-amber-400"
            >
              {PHONE}
            </a>
            <span className="whitespace-nowrap text-[10px] text-white/50">
              Fax: {FAX}
            </span>
          </div>

          <a
            href={PHONE_LINK}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-amber-400 px-4 py-3 text-sm font-bold text-neutral-950 shadow-lg shadow-amber-400/10 transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 xl:px-5"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
        </div>
        {/* Mobile and tablet controls */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href={PHONE_LINK}
            className="grid size-11 place-items-center rounded-md bg-amber-400 text-neutral-950 transition-colors hover:bg-amber-300"
            aria-label={`Call Parker Electric at ${PHONE}`}
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="relative z-[80] grid size-11 place-items-center rounded-md border border-white/20 text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 flex h-[100dvh] w-[85%] max-w-sm flex-col overflow-y-auto border-l border-white/10 bg-neutral-950 px-6 pb-8 pt-28 shadow-2xl transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-6 border-b border-white/10 pb-5">
            <p className="text-lg font-black uppercase tracking-tight text-white">
              PARKER <span className="text-amber-400">ELECTRIC</span>
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Powering Your Future
            </p>
          </div>

          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-5 text-lg font-bold text-white transition-colors hover:text-amber-400 focus-visible:outline-2 focus-visible:outline-amber-400"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <a
              href={PHONE_LINK}
              tabIndex={open ? 0 : -1}
              className="flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-amber-400 px-5 py-4 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-300"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call {PHONE}
            </a>

            <p className="mt-5 text-center text-sm text-white/50">Fax: {FAX}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
