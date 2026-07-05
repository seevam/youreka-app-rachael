import { DashboardData } from '../types/dashboard'

export const MOCK_DASHBOARD_DATA: DashboardData = {
  skinProfile: {
    skinType: "Combination • Acne-Prone",
    confidenceScore: 98,
    lastScanDate: "2024-01-15",
    concerns: [
      {
        id: "acne-tzone",
        name: "Active Acne",
        icon: "🎯",
        affectedArea: "T-Zone",
        severity: "moderate"
      },
      {
        id: "dry-cheeks",
        name: "Dry Patches",
        icon: "💧",
        affectedArea: "Cheeks",
        severity: "mild"
      },
      {
        id: "texture",
        name: "Uneven Texture",
        icon: "✨",
        affectedArea: "Forehead",
        severity: "mild"
      }
    ]
  },
  recommendedProducts: [
    {
      id: "prod-1",
      name: "Foaming Facial Cleanser",
      brand: "CeraVe",
      price: 12.99,
      rating: 4.7,
      reviewCount: 467,
      reason: "Perfect for oily T-zone",
      budgetTier: "under-15",
      category: "cleanser",
      skinTypes: ["combination", "oily"]
    },
    {
      id: "prod-2",
      name: "Hydro Boost Gel-Cream",
      brand: "Neutrogena",
      price: 18.99,
      rating: 4.6,
      reviewCount: 892,
      reason: "Hydrates dry cheeks without clogging pores",
      budgetTier: "15-30",
      category: "moisturizer",
      skinTypes: ["combination", "dry"]
    },
    {
      id: "prod-3",
      name: "Niacinamide 10% + Zinc 1%",
      brand: "The Ordinary",
      price: 5.99,
      rating: 4.5,
      reviewCount: 1243,
      reason: "Reduces acne and balances oil production",
      budgetTier: "under-15",
      category: "treatment",
      skinTypes: ["combination", "oily", "acne-prone"]
    },
    {
      id: "prod-4",
      name: "Hydrating Facial Cleanser",
      brand: "CeraVe",
      price: 14.99,
      rating: 4.8,
      reviewCount: 2156,
      reason: "Gentle for dry areas",
      budgetTier: "under-15",
      category: "cleanser",
      skinTypes: ["dry", "sensitive"]
    },
    {
      id: "prod-5",
      name: "Clear Face Liquid Sunscreen SPF 55",
      brand: "Neutrogena",
      price: 11.99,
      rating: 4.4,
      reviewCount: 689,
      reason: "Oil-free protection",
      budgetTier: "under-15",
      category: "sunscreen",
      skinTypes: ["oily", "combination", "acne-prone"]
    },
    {
      id: "prod-6",
      name: "BHA Liquid Exfoliant",
      brand: "Paula's Choice",
      price: 32.00,
      rating: 4.7,
      reviewCount: 3421,
      reason: "Unclogs pores and smooths texture",
      budgetTier: "30-plus",
      category: "treatment",
      skinTypes: ["oily", "combination", "acne-prone"]
    }
  ],
  routine: {
    morning: [
      {
        id: "am-1",
        stepNumber: 1,
        productType: "Cleanser",
        productName: "CeraVe Foaming Cleanser",
        purpose: "Removes oil & dirt",
        timeOfDay: "am"
      },
      {
        id: "am-2",
        stepNumber: 2,
        productType: "Treatment",
        productName: "The Ordinary Niacinamide",
        purpose: "Controls oil & reduces acne",
        timeOfDay: "am"
      },
      {
        id: "am-3",
        stepNumber: 3,
        productType: "Moisturizer",
        productName: "Neutrogena Hydro Boost",
        purpose: "Hydrates skin",
        timeOfDay: "am"
      },
      {
        id: "am-4",
        stepNumber: 4,
        productType: "Sunscreen",
        productName: "Neutrogena Clear Face SPF 55",
        purpose: "Protects from UV damage",
        timeOfDay: "am"
      }
    ],
    evening: [
      {
        id: "pm-1",
        stepNumber: 1,
        productType: "Cleanser",
        productName: "CeraVe Foaming Cleanser",
        purpose: "Removes makeup & impurities",
        timeOfDay: "pm"
      },
      {
        id: "pm-2",
        stepNumber: 2,
        productType: "Treatment",
        productName: "Paula's Choice BHA Exfoliant",
        purpose: "Exfoliates & unclogs pores",
        timeOfDay: "pm"
      },
      {
        id: "pm-3",
        stepNumber: 3,
        productType: "Moisturizer",
        productName: "Neutrogena Hydro Boost",
        purpose: "Deeply hydrates overnight",
        timeOfDay: "pm"
      }
    ]
  },
  stats: {
    daysActive: 14,
    completionRate: 85,
    productsTried: 8,
    skinScans: 3,
    currentStreak: 5
  },
  completedSteps: []
}
