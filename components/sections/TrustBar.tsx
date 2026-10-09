"use client";

import { BadgeCheck, Hammer, MapPin, ShieldCheck } from "lucide-react";

const items = [
  { label: "Experienced Electricians", icon: BadgeCheck },
  { label: "Quality Materials", icon: Hammer },
  { label: "Long-Lasting Solutions", icon: ShieldCheck },
  { label: "Local Service", icon: MapPin },
];

export default function TrustBar() {
  return (
    <section
      className="border-b border-neutral-200 bg-white"
      aria-label="Parker Electric benefits"
    >
      <div className="container-shell grid grid-cols-2 divide-x divide-y divide-neutral-200 lg:grid-cols-4 lg:divide-y-0">
        {items.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex min-h-28 items-center gap-3 px-3 py-6 sm:px-6"
          >
            <Icon
              className="size-6 shrink-0 text-amber-500"
              strokeWidth={1.8}
            />
            <span className="text-sm font-extrabold leading-tight sm:text-base">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
