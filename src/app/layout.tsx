import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
