import type { Metadata } from "next"
import StructuredData from "@/components/seo/structured-data"
import PublicProcurementContent from "./public-procurement-content"

export const metadata: Metadata = {
  title: "Public Procurement Law | ODVIS",
  description:
    "ODVIS provides expert legal support for public procurement procedures in Croatia — bid preparation, appeals before DKOM, contract disputes and selected winning cases.",
  keywords: [
    "public procurement lawyer Croatia",
    "DKOM proceedings",
    "public procurement appeal",
    "bid preparation Croatia",
    "contract dispute lawyer",
    "javna nabava odvjetnik",
    "DKOM žalbe",
  ],
  alternates: {
    canonical: "https://odvis.hr/expertise/public-procurement",
    languages: {
      "hr-HR": "https://odvis.hr/hr/strucnost/javna-nabava",
    },
  },
  openGraph: {
    type: "website",
    url: "https://odvis.hr/expertise/public-procurement",
    title: "Public Procurement Law | ODVIS",
    description:
      "Expert legal support for public procurement procedures in Croatia — bid preparation, appeals before DKOM, and winning cases.",
    images: [
      {
        url: "/odvis-preview.png",
        width: 1200,
        height: 630,
        alt: "Public Procurement Law — ODVIS",
      },
    ],
  },
}

const pageSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Public Procurement Law — ODVIS",
  description:
    "Expert legal support for public procurement procedures in Croatia — bid preparation, appeals before DKOM, and winning cases.",
  url: "https://odvis.hr/expertise/public-procurement",
  provider: {
    "@id": "https://odvis.hr/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: "Croatia",
  },
  serviceType: "Public Procurement Legal Services",
  isPartOf: {
    "@type": "WebPage",
    "@id": "https://odvis.hr/expertise/public-procurement",
  },
}

export default function PublicProcurementPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
      <PublicProcurementContent />
    </>
  )
}
