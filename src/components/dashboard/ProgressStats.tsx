import React from 'react'
import { UserStats } from '@/lib/types/dashboard'

interface ProgressStatsProps {
  stats: UserStats
}

export const ProgressStats: React.FC<ProgressStatsProps> = ({ stats }) => {
  const statCards = [
    {
      id: 'days',
      icon: '📅',
      label: 'Days Active',
      value: stats.daysActive,
      suffix: '',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      id: 'completion',
      icon: '✅',
      label: 'Completion Rate',
      value: stats.completionRate,
      suffix: '%',
      gradient: 'from-accent-lavender/20 to-accent-lavender/5'
    },
    {
      id: 'products',
      icon: '🛍️',
      label: 'Products Tried',
      value: stats.productsTried,
      suffix: '',
      gradient: 'from-accent-pink/20 to-accent-pink/5'
    },
    {
      id: 'streak',
      icon: '🔥',
      label: 'Current Streak',
      value: stats.currentStreak,
      suffix: ' days',
      gradient: 'from-primary/30 to-accent-pink/10'
    }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((stat, index) => (
        <div
          key={stat.id}
          className={`bg-gradient-to-br ${stat.gradient} rounded-xl p-6 hover:scale-105 transition-transform duration-300`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-text-primary mb-1">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-sm text-text-secondary font-medium">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
