import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://berkcanmeric.com";

export const metadata: Metadata = {
  title: "Berkcan Meric | Software Engineer",
  description:
    "Software Engineer building web and mobile applications with modern technologies.",
  keywords: [
    "software engineer",
    "berkcan meric",
    "react",
    "next.js",
    "swift",
    "ios",
    "java",
    "spring boot",
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Berkcan Meric | Software Engineer",
    description:
      "Software Engineer building web and mobile applications with modern technologies.",
    url: siteUrl,
    siteName: "Berkcan Meric",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berkcan Meric | Software Engineer",
    description:
      "Software Engineer building web and mobile applications with modern technologies.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
