import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "ODVIS | Odvjetnički ured Vešligaj i Sliepčević",
    template: "%s | ODVIS",
  },
  description:
    "ODVIS — Odvjetnički ured Vešligaj i Sliepčević. Specijalizirana pravna podrška za poduzeća i građane od 2016. godine. Pravo javne nabave, nekretnine, radno pravo i opće pravne usluge.",
  keywords: [
    "odvjetnički ured Zagreb",
    "pravo javne nabave",
    "pravo nekretnina",
    "radno pravo Hrvatska",
    "javnobupno",
    "DKOM žalbe",
    "odvjetnik Zagreb",
    "pravne usluge",
  ],
  authors: [{ name: "ODVIS" }],
  metadataBase: new URL("https://odvis.hr"),
  alternates: {
    canonical: "https://odvis.hr/hr",
    languages: {
      "en-US": "https://odvis.hr",
      "hr-HR": "https://odvis.hr/hr",
      "x-default": "https://odvis.hr",
    },
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://odvis.hr/hr",
    siteName: "ODVIS — Odvjetnički ured Vešligaj i Sliepčević",
    title: "ODVIS | Odvjetnički ured Vešligaj i Sliepčević",
    description:
      "Specijalizirana pravna podrška za poduzeća i građane od 2016. godine.",
    images: [
      {
        url: "/odvis-preview.png",
        width: 1200,
        height: 630,
        alt: "ODVIS — Odvjetnički ured Vešligaj i Sliepčević",
      },
    ],
  },
}

export default function HrLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
