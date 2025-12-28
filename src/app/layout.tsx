import type { Metadata } from 'next'
import '@/styles/globals.css'
import { SITE_METADATA } from '@/constant/metadata.constant'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = SITE_METADATA

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY || ''

  return (
    <html lang="en">
      <body>
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {children}
      </body>
    </html>
  )
}
