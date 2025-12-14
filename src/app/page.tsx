import { Hero } from '@/components/landing/Hero'
import { ProblemStatement } from '@/components/landing/ProblemStatement'
import { Features } from '@/components/landing/Features'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { Stats } from '@/components/landing/Stats'
import { CTASection } from '@/components/landing/CTASection'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <Features />
      <HowItWorks />
      <Stats />
      <CTASection />
    </main>
  )
}
