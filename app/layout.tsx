import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "ODVIS | Law Firm Vešligaj and Sliepčević",
    template: "%s | ODVIS",
  },
  description:
    "ODVIS — Law Firm Vešligaj and Sliepčević. Specialised legal support for businesses and individuals since 2016. Public procurement, real estate, labour law, and general legal services in Croatia.",
  keywords: [
    "law firm Croatia",
    "public procurement lawyer",
    "real estate law Croatia",
    "labour law Croatia",
    "contract lawyer Zagreb",
    "DKOM proceedings",
    "legal services SME",
    "Odvjetnički ured",
    "javna nabava",
    "radno pravo",
    "pravo nekretnina",
  ],
  authors: [{ name: "ODVIS" }],
  creator: "ODVIS — Odvjetničko društvo Vešligaj i Sliepčević j.t.d.",
  publisher: "ODVIS",
  category: "Legal Services",
  classification: "Law Firm",
  applicationName: "ODVIS",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  metadataBase: new URL("https://odvis.hr"),
  alternates: {
    canonical: "https://odvis.hr",
    languages: {
      "en-US": "https://odvis.hr",
      "hr-HR": "https://odvis.hr/hr",
      "x-default": "https://odvis.hr",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://odvis.hr",
    siteName: "ODVIS — Law Firm Vešligaj and Sliepčević",
    title: "ODVIS | Law Firm Vešligaj and Sliepčević",
    description:
      "Specialised legal support for businesses and individuals since 2016. Public procurement, real estate, labour law, and general legal services in Croatia.",
    images: [
      {
        url: "/odvis-preview.png",
        width: 1200,
        height: 630,
        alt: "ODVIS — Law Firm Vešligaj and Sliepčević",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@odvis_hr",
    title: "ODVIS | Law Firm Vešligaj and Sliepčević",
    description:
      "Specialised legal support for businesses and individuals since 2016. Public procurement, real estate, labour law, and general legal services in Croatia.",
    images: ["/odvis-preview.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
  },
}

const schema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://odvis.hr/#organization",
      name: "ODVIS — Odvjetnički ured Vešligaj i Sliepčević",
      alternateName: ["Law Firm Vešligaj and Sliepčević", "ODVIS"],
      url: "https://odvis.hr",
      logo: "https://odvis.hr/logos/odvis-wordmark-dark.svg",
      image: "https://odvis.hr/odvis-preview.png",
      description:
        "Specialised legal support for businesses and individuals since 2016.",
      foundingDate: "2016-05-03",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Froudeova ulica 9",
        addressLocality: "Zagreb",
        postalCode: "10000",
        addressCountry: "HR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+385-1-6521072",
        email: "info@odvis.hr",
        contactType: "customer service",
        availableLanguage: ["English", "Croatian"],
      },
      areaServed: {
        "@type": "Country",
        name: "Croatia",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://odvis.hr/#website",
      url: "https://odvis.hr",
      name: "ODVIS — Law Firm Vešligaj and Sliepčević",
      inLanguage: ["en-US", "hr-HR"],
      publisher: { "@id": "https://odvis.hr/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://odvis.hr/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
