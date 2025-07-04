import type { Metadata } from 'next'
import './globals.css'
import { SITE_METADATA } from '@/constant/metadata.constant'

export const metadata: Metadata = SITE_METADATA

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
