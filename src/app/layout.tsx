import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stratomexa.in"),
  title: {
    default: "Stratomexa | Zoho Certified Partner & Financial Consulting Hyderabad",
    template: "%s | Stratomexa Business Consulting",
  },
  description:
    "Official Zoho Certified Implementation Partner (ID: PI0626000). Expert Zoho Books setup, migration from Tally/Excel, GST/TDS statutory compliance, and Virtual CFO advisory for growing businesses across India.",
  keywords: [
    "Zoho Books Implementation Partner",
    "Zoho Partner Hyderabad",
    "Tally to Zoho Books Migration",
    "GST Compliance Hyderabad",
    "Financial Accounting Bookkeeping",
    "Virtual CFO India",
    "Stratomexa Business Consulting",
    "Zoho Partner PI0626000",
    "Statutory Audit Assurance Support",
  ],
  authors: [{ name: "Stratomexa Business Consulting Services" }],
  creator: "Stratomexa",
  publisher: "Stratomexa",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://stratomexa.in",
    siteName: "Stratomexa Business Consulting",
    title: "Stratomexa | Zoho Certified Partner & Financial Consulting",
    description:
      "Simplify your finances. Grow your business. Official Zoho Certified Implementation Partner serving India & Global enterprises.",
    images: [
      {
        url: "/images/certificate.jpeg",
        width: 1200,
        height: 630,
        alt: "Stratomexa Zoho Certified Partner Certificate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratomexa | Zoho Certified Partner & Financial Consulting",
    description:
      "Official Zoho Implementation Partner & Finance Advisory. Zoho Books setup, GST filings, and Virtual CFO.",
    images: ["/images/certificate.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import TopProgressBar from "@/components/ui/TopProgressBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900 antialiased">
        <TopProgressBar />
        <OrganizationJsonLd />
        <Navbar />
        <main className="flex-grow pt-[68px]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

