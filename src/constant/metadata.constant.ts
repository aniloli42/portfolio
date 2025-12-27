import { Metadata } from 'next'

export const SITE_METADATA: Metadata = {
  metadataBase: new URL('https://aniloli42.me'),
  title: {
    default: 'Anil Oli - Software Developer & Computer Science Student',
    template: '%s | Anil Oli'
  },
  description:
    'Passionate computer science student at Texas State University specializing in backend development with expertise in TypeScript, Node.js, and modern web technologies. Experienced in building scalable applications and optimizing database performance.',
  keywords: [
    'Anil Oli',
    'Software Developer',
    'Backend Developer',
    'Computer Science Student',
    'TypeScript',
    'Node.js',
    'React',
    'Next.js',
    'PostgreSQL',
    'Texas State University',
    'Full Stack Developer',
    'Web Development'
  ],
  authors: [{ name: 'Anil Oli', url: 'https://aniloli42.me' }],
  creator: 'Anil Oli',
  publisher: 'Anil Oli',
  icons: [
    {
      url: '/favicon-16x16.png',
      rel: 'icon',
      sizes: '16x16'
    },
    {
      url: '/favicon-32x32.png',
      rel: 'icon',
      sizes: '32x32'
    },
    {
      url: '/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '180x180'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aniloli42.me',
    title: 'Anil Oli - Software Developer & Computer Science Student',
    description:
      'Passionate computer science student specializing in backend development with expertise in TypeScript, Node.js, and modern web technologies.',
    siteName: 'Anil Oli Portfolio',
    images: [
      {
        url: '/anil_oli_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Anil Oli - Software Developer & Computer Science Student'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anil Oli - Software Developer & Computer Science Student',
    description:
      'Passionate computer science student specializing in backend development with expertise in TypeScript, Node.js, and modern web technologies.',
    images: ['/anil_oli_og_image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}
