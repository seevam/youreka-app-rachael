'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/animations/FadeIn'
import { SkinProfileCard } from '@/components/dashboard/SkinProfileCard'
import { ProductRecommendations } from '@/components/dashboard/ProductRecommendations'
import { RoutineTracker } from '@/components/dashboard/RoutineTracker'
import { ProgressStats } from '@/components/dashboard/ProgressStats'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { MOCK_DASHBOARD_DATA } from '@/lib/mock-data/dashboard-data'

export default function HomePage() {
  const [dashboardData] = useState(MOCK_DASHBOARD_DATA)
  const [completedSteps, setCompletedSteps] = useState<string[]>([])

  const handleStepToggle = (stepId: string) => {
    setCompletedSteps(prev =>
      prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background-gray">
      <Container>
        {/* Welcome Header */}
        <FadeIn>
          <div className="mb-8">
            <h1 className="text-h2-mobile md:text-h2 text-text-primary mb-2">
              Welcome back! ✨
            </h1>
            <p className="text-body-mobile md:text-body text-text-secondary">
              Keep up your routine and watch your skin transform
            </p>
          </div>
        </FadeIn>

        {/* Main Dashboard Grid */}
        <div className="space-y-8">
          {/* Skin Profile - Full Width */}
          <FadeIn delay={0.1}>
            <SkinProfileCard profile={dashboardData.skinProfile} />
          </FadeIn>

          {/* Stats Overview - Full Width */}
          <FadeIn delay={0.2}>
            <ProgressStats stats={dashboardData.stats} />
          </FadeIn>

          {/* Two Column Layout for Routine & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Routine Tracker */}
            <FadeIn delay={0.3}>
              <RoutineTracker
                routine={dashboardData.routine}
                completedSteps={completedSteps}
                onStepToggle={handleStepToggle}
              />
            </FadeIn>

            {/* Quick Actions */}
            <FadeIn delay={0.4}>
              <QuickActions />
            </FadeIn>
          </div>

          {/* Product Recommendations - Full Width */}
          <FadeIn delay={0.5}>
            <ProductRecommendations
              products={dashboardData.recommendedProducts}
              skinType={dashboardData.skinProfile.skinType}
            />
          </FadeIn>
        </div>
      </Container>
    </main>
  )
}
