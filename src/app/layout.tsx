import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aymane Oug - Multi-Personality Portfolio",
  description: "17-year-old Moroccan prodigy showcasing expertise in cybersecurity, graphic design, music, and aerospace engineering. Explore four unique professional identities.",
  keywords: ["cybersecurity", "graphic design", "musician", "aerospace engineer", "portfolio", "Morocco", "Aymane Oug"],
  authors: [{ name: "Aymane Oug" }],
  creator: "Aymane Oug",
  metadataBase: new URL('https://aymane-portfolio.vercel.app'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aymane-portfolio.vercel.app",
    siteName: "Aymane Oug Portfolio",
    title: "Aymane Oug - Multi-Personality Portfolio",
    description: "Explore the diverse talents of a 17-year-old Moroccan prodigy across cybersecurity, design, music, and aerospace.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aymane Oug Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aymane Oug - Multi-Personality Portfolio",
    description: "Cybersecurity expert, designer, musician, and aerospace enthusiast. One person, four incredible journeys.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import GlobalCanvas from "@/components/effects/GlobalCanvas";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <GlobalCanvas />
          <div className="film-grain" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

