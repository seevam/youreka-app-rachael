import React from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SkinProfile } from '@/lib/types/dashboard'
import { Sparkles } from 'lucide-react'

interface SkinProfileCardProps {
  profile: SkinProfile
}

export const SkinProfileCard: React.FC<SkinProfileCardProps> = ({ profile }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'severe':
        return 'border-accent-pink'
      case 'moderate':
        return 'border-primary'
      case 'mild':
        return 'border-accent-lavender'
      default:
        return 'border-gray-300'
    }
  }

  return (
    <Card className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                {profile.skinType}
              </h2>
              <div className="bg-primary/20 px-3 py-1 rounded-full flex items-center">
                <Sparkles size={14} className="text-primary mr-1" />
                <span className="text-sm font-semibold text-primary">
                  {profile.confidenceScore}% Match
                </span>
              </div>
            </div>
            <p className="text-sm text-text-secondary">
              Last scan: {new Date(profile.lastScanDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="mt-4 md:mt-0"
            href="/#quiz"
          >
            Retake Quiz
          </Button>
        </div>

        {/* Concerns Grid */}
        <div>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
            Your Skin Concerns
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.concerns.map((concern) => (
              <div
                key={concern.id}
                className={`bg-white rounded-lg p-4 border-l-4 ${getSeverityColor(concern.severity)} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-3xl">{concern.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-text-primary mb-1">
                      {concern.name}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {concern.affectedArea}
                    </p>
                    <span className={`inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full ${
                      concern.severity === 'severe'
                        ? 'bg-accent-pink/20 text-accent-pink'
                        : concern.severity === 'moderate'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-accent-lavender/20 text-text-secondary'
                    }`}>
                      {concern.severity.charAt(0).toUpperCase() + concern.severity.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
