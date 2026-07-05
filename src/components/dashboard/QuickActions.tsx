import React from 'react'
import { Card } from '@/components/ui/Card'

interface QuickAction {
  id: string
  icon: string
  title: string
  description: string
  href: string
  gradient: string
}

export const QuickActions: React.FC = () => {
  const actions: QuickAction[] = [
    {
      id: 'scan',
      icon: '📸',
      title: 'New Skin Scan',
      description: 'Update your profile',
      href: '/#quiz',
      gradient: 'from-primary/10 to-primary/5'
    },
    {
      id: 'products',
      icon: '🛍️',
      title: 'Browse Products',
      description: 'Explore recommendations',
      href: '#products',
      gradient: 'from-accent-lavender/10 to-accent-lavender/5'
    },
    {
      id: 'tips',
      icon: '💡',
      title: 'Skincare Tips',
      description: 'Learn best practices',
      href: '#tips',
      gradient: 'from-accent-pink/10 to-accent-pink/5'
    },
    {
      id: 'progress',
      icon: '📈',
      title: 'Track Progress',
      description: 'View your journey',
      href: '#progress',
      gradient: 'from-primary/20 to-accent-pink/10'
    },
    {
      id: 'share',
      icon: '🎁',
      title: 'Invite Friends',
      description: 'Share & earn rewards',
      href: '#share',
      gradient: 'from-accent-pink/15 to-accent-lavender/10'
    },
    {
      id: 'settings',
      icon: '⚙️',
      title: 'Settings',
      description: 'Manage preferences',
      href: '#settings',
      gradient: 'from-gray-100 to-gray-50'
    }
  ]

  return (
    <Card className="h-full">
      <h3 className="text-xl font-bold text-text-primary mb-6">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <a
            key={action.id}
            href={action.href}
            className={`bg-gradient-to-br ${action.gradient} rounded-lg p-4 hover:scale-105 hover:shadow-md transition-all duration-200 group`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="text-center">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {action.icon}
              </div>
              <h4 className="text-sm font-semibold text-text-primary mb-1">
                {action.title}
              </h4>
              <p className="text-xs text-text-secondary">
                {action.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Card>
  )
}
