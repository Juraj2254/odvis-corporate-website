import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ODVIS — Legal',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
