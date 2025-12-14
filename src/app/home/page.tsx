'use client'

import { useAuth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

export default function HomePage() {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isSignedIn) {
    redirect('/')
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background-gray">
      <Container>
        <div className="mb-8">
          <h1 className="text-h1-mobile md:text-h1 text-text-primary mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-body-mobile md:text-body text-text-secondary">
            Your personalized beauty journey starts here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card hover>
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Take Your First Scan
            </h3>
            <p className="text-text-secondary">
              Start your beauty journey with an AI-powered face scan
            </p>
          </Card>

          <Card hover>
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              View Your Profile
            </h3>
            <p className="text-text-secondary">
              Check your personalized beauty recommendations
            </p>
          </Card>

          <Card hover>
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Track Progress
            </h3>
            <p className="text-text-secondary">
              Monitor your skin health improvements over time
            </p>
          </Card>

          <Card hover>
            <div className="text-4xl mb-4">🛍️</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Product Matches
            </h3>
            <p className="text-text-secondary">
              Discover products perfect for your skin type
            </p>
          </Card>

          <Card hover>
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Beauty Tips
            </h3>
            <p className="text-text-secondary">
              Get personalized advice for glowing skin
            </p>
          </Card>

          <Card hover>
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Settings
            </h3>
            <p className="text-text-secondary">
              Customize your experience and preferences
            </p>
          </Card>
        </div>
      </Container>
    </main>
  )
}
