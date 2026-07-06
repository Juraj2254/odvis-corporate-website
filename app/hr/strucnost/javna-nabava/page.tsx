import type { Metadata } from "next"
import StructuredData from "@/components/seo/structured-data"
import JavnaNabavaContent from "./javna-nabava-content"

export const metadata: Metadata = {
  title: "Pravo javne nabave | ODVIS",
  description:
    "ODVIS pruža stručnu pravnu podršku u postupcima javne nabave u Hrvatskoj — priprema ponuda, žalbe pred DKOM-om, sporovi i odabrani dobiveni predmeti.",
  keywords: [
    "pravo javne nabave Hrvatska",
    "odvjetnik javna nabava",
    "DKOM žalbe",
    "priprema ponuda",
    "sporovi javne nabave",
    "javnobupno",
  ],
  alternates: {
    canonical: "https://odvis.hr/hr/strucnost/javna-nabava",
    languages: {
      "en-US": "https://odvis.hr/expertise/public-procurement",
    },
  },
  openGraph: {
    type: "website",
    url: "https://odvis.hr/hr/strucnost/javna-nabava",
    title: "Pravo javne nabave | ODVIS",
    description:
      "Stručna pravna podrška u postupcima javne nabave u Hrvatskoj — priprema ponuda, žalbe pred DKOM-om i dobiveni predmeti.",
    locale: "hr_HR",
    images: [
      {
        url: "/odvis-preview.png",
        width: 1200,
        height: 630,
        alt: "Pravo javne nabave — ODVIS",
      },
    ],
  },
}

const pageSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Pravo javne nabave — ODVIS",
  description:
    "Stručna pravna podrška u postupcima javne nabave u Hrvatskoj — priprema ponuda, žalbe pred DKOM-om i dobiveni predmeti.",
  url: "https://odvis.hr/hr/strucnost/javna-nabava",
  provider: {
    "@id": "https://odvis.hr/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: "Croatia",
  },
  serviceType: "Pravne usluge javne nabave",
  isPartOf: {
    "@type": "WebPage",
    "@id": "https://odvis.hr/hr/strucnost/javna-nabava",
  },
  inLanguage: "hr",
}

export default function JavnaNabavaPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
      <JavnaNabavaContent />
    </>
  )
}
