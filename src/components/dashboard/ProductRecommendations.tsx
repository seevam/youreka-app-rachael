import React, { useState } from 'react'
import { ProductCard } from './ProductCard'
import { Product } from '@/lib/types/dashboard'

interface ProductRecommendationsProps {
  products: Product[]
  skinType: string
}

type FilterCategory = 'all' | 'cleanser' | 'moisturizer' | 'treatment' | 'sunscreen'

export const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({
  products,
  skinType
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')

  const filteredProducts = activeFilter === 'all'
    ? products.slice(0, 6)
    : products.filter(p => p.category === activeFilter).slice(0, 6)

  const filters: { id: FilterCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Products', icon: '✨' },
    { id: 'cleanser', label: 'Cleansers', icon: '🧼' },
    { id: 'moisturizer', label: 'Moisturizers', icon: '💧' },
    { id: 'treatment', label: 'Treatments', icon: '💊' },
    { id: 'sunscreen', label: 'Sunscreen', icon: '☀️' }
  ]

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Recommended for You
        </h3>
        <p className="text-text-secondary">
          Personalized picks for {skinType}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeFilter === filter.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-text-secondary hover:bg-background-gray border border-divider'
            }`}
          >
            <span className="mr-1">{filter.icon}</span>
            {filter.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Show More Link */}
      {filteredProducts.length > 0 && (
        <div className="text-center">
          <button className="text-primary font-semibold hover:text-primary-dark transition-colors">
            See All {activeFilter === 'all' ? 'Products' : filters.find(f => f.id === activeFilter)?.label} →
          </button>
        </div>
      )}

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h4 className="text-xl font-semibold text-text-primary mb-2">
            No products found
          </h4>
          <p className="text-text-secondary">
            Try selecting a different category
          </p>
        </div>
      )}
    </div>
  )
}
