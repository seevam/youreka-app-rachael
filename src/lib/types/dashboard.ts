export interface SkinProfile {
  skinType: string
  concerns: SkinConcern[]
  confidenceScore: number
  lastScanDate: string
}

export interface SkinConcern {
  id: string
  name: string
  icon: string
  affectedArea: string
  severity: 'mild' | 'moderate' | 'severe'
}

export interface Product {
  id: string
  name: string
  brand: string
  price: number
  rating: number
  reviewCount: number
  imageUrl?: string
  reason: string
  budgetTier: 'under-15' | '15-30' | '30-plus'
  category: 'cleanser' | 'moisturizer' | 'treatment' | 'sunscreen'
  skinTypes: string[]
}

export interface RoutineStep {
  id: string
  stepNumber: number
  productType: string
  productName: string
  purpose: string
  timeOfDay: 'am' | 'pm'
}

export interface UserStats {
  daysActive: number
  completionRate: number
  productsTried: number
  skinScans: number
  currentStreak: number
}

export interface DashboardData {
  skinProfile: SkinProfile
  recommendedProducts: Product[]
  routine: {
    morning: RoutineStep[]
    evening: RoutineStep[]
  }
  stats: UserStats
  completedSteps: string[]
}
