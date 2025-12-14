import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Youreka - Your Personal Beauty AI Scanner',
  description: 'Discover your unique beauty profile with AI-powered face analysis. Get personalized skincare, makeup, and wellness recommendations tailored just for you.',
  keywords: ['beauty', 'AI', 'skincare', 'face analysis', 'personalized beauty'],
  authors: [{ name: 'Youreka Team' }],
  openGraph: {
    title: 'Youreka - Your Personal Beauty AI Scanner',
    description: 'Discover your unique beauty profile with AI-powered face analysis',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
