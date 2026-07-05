import React from 'react'
import { Card } from '@/components/ui/Card'
import { Product } from '@/lib/types/dashboard'

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getBudgetColor = (tier: string) => {
    switch (tier) {
      case 'under-15':
        return 'bg-primary/20 text-primary'
      case '15-30':
        return 'bg-accent-lavender/30 text-text-primary'
      case '30-plus':
        return 'bg-accent-pink/30 text-text-primary'
      default:
        return 'bg-gray-200 text-text-secondary'
    }
  }

  const getBudgetLabel = (tier: string) => {
    switch (tier) {
      case 'under-15':
        return 'Under $15'
      case '15-30':
        return '$15-$30'
      case '30-plus':
        return '$30+'
      default:
        return ''
    }
  }

  return (
    <Card hover className="h-full flex flex-col justify-between">
      <div>
        {/* Budget Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getBudgetColor(product.budgetTier)}`}>
            💰 {getBudgetLabel(product.budgetTier)}
          </span>
          <div className="flex items-center text-sm">
            <span className="text-accent-pink mr-1">⭐</span>
            <span className="font-semibold text-text-primary">{product.rating}</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="mb-3">
          <h4 className="text-lg font-semibold text-text-primary mb-1 line-clamp-2">
            {product.name}
          </h4>
          <p className="text-sm text-text-secondary">{product.brand}</p>
        </div>

        {/* Reason Badge */}
        <div className="bg-primary/10 rounded-lg p-2 mb-3">
          <p className="text-xs text-primary font-medium">
            ✨ {product.reason}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-divider">
        <div>
          <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
          <p className="text-xs text-text-secondary">{product.reviewCount} teen reviews</p>
        </div>
        <button className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
          View →
        </button>
      </div>
    </Card>
  )
}
