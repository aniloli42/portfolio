import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Anil Oli Portfolio', template: '%s | Anil Oli Portfolio' },
  description: 'Website',
  creator: 'Anil Oli'
}

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
