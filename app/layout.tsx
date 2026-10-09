import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const stackSansNotch = localFont({
  src: [
    {
      path: "./fonts/StackSansNotch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stack-sans-notch",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title:
    "Parker Electric | Electrician & Electrical Services in Gainesville, TX",

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  description:
    "Parker Electric has been serving Gainesville and surrounding North Texas communities since 1942. We provide dependable residential and commercial electrical repairs, upgrades, new installations, and professional electrical solutions built to last.",

  keywords: [
    "Parker Electric",
    "Parker Electric Gainesville TX",
    "Parker Electric Texas",
    "electrician Gainesville TX",
    "electrician Gainesville Texas",
    "electrical contractor Gainesville TX",
    "electrical services Gainesville TX",
    "electricians North Texas",
    "electrical contractor North Texas",
    "residential electrician Gainesville TX",
    "commercial electrician Gainesville TX",
    "residential electrical services Texas",
    "commercial electrical services Texas",
    "electrical repairs Gainesville TX",
    "electrical repair North Texas",
    "electrical upgrades Gainesville TX",
    "electrical installation Gainesville TX",
    "new electrical installations Texas",
    "home electrical contractor Gainesville",
    "commercial electrical contractor Texas",
    "local electrician Gainesville TX",
    "experienced electrician North Texas",
    "reliable electrical contractor Texas",
    "professional electrical services",
    "quality electrical workmanship",
    "electrical contractor since 1942",
    "Parker Electric since 1942",
    "electrician near Gainesville TX",
    "electrical services Cooke County TX",
  ],

  authors: [
    {
      name: "Parker Electric",
    },
  ],

  creator: "Parker Electric",
  publisher: "Parker Electric",
  applicationName: "Parker Electric",

  category: "Electrical Services",

  metadataBase: new URL("https://parkerelectrictx.com"),

  openGraph: {
    title: "Parker Electric | Trusted Electrical Services Since 1942",

    description:
      "Serving Gainesville and surrounding North Texas communities since 1942. Parker Electric delivers dependable residential and commercial electrical repairs, upgrades, and installations with quality workmanship built to last.",

    url: "https://parkerelectrictx.com",

    siteName: "Parker Electric",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Parker Electric | Electrician & Electrical Services in Gainesville, TX",

    description:
      "Parker Electric has served Gainesville and North Texas since 1942, providing dependable electrical repairs, upgrades, and installations for homes and businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2744",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={stackSansNotch.variable}>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
