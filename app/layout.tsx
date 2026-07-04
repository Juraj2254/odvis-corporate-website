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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://odvis.hr",
    siteName: "ODVIS",
    images: [
      {
        url: "/odvis-preview.png",
        width: 1200,
        height: 630,
        alt: "ODVIS — ODVIS Law Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  metadataBase: new URL("https://odvis.hr"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
