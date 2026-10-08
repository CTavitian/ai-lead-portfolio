import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const display = localFont({
  src: [{ path: "./fonts/newsreader-500.woff2", weight: "500", style: "normal" }],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const body = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-sans-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});

const mono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Operations leader with 14 years in construction and fire protection services, building small tools to test where AI helps and where it should not act alone.",
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg` },
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description:
      "Small tools for testing AI agents in field-service operations, from an engineer and operations leader with a keen interest in AI.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <div className="site">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
