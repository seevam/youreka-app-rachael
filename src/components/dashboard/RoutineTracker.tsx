import React, { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { RoutineStep as RoutineStepComponent } from './RoutineStep'
import { RoutineStep } from '@/lib/types/dashboard'
import { Sun, Moon } from 'lucide-react'

interface RoutineTrackerProps {
  routine: {
    morning: RoutineStep[]
    evening: RoutineStep[]
  }
  completedSteps: string[]
  onStepToggle: (stepId: string) => void
}

export const RoutineTracker: React.FC<RoutineTrackerProps> = ({
  routine,
  completedSteps,
  onStepToggle
}) => {
  const [activeTab, setActiveTab] = useState<'am' | 'pm'>('am')

  const currentRoutine = activeTab === 'am' ? routine.morning : routine.evening
  const completedCount = currentRoutine.filter(step =>
    completedSteps.includes(step.id)
  ).length
  const totalCount = currentRoutine.length
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  return (
    <Card className="h-full">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-text-primary mb-4">
          Today's Routine
        </h3>

        {/* Tab Toggle */}
        <div className="flex space-x-2 bg-background-gray rounded-lg p-1">
          <button
            onClick={() => setActiveTab('am')}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all ${
              activeTab === 'am'
                ? 'bg-white shadow-sm text-accent-pink'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Sun size={18} />
            <span className="font-semibold">Morning</span>
          </button>
          <button
            onClick={() => setActiveTab('pm')}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all ${
              activeTab === 'pm'
                ? 'bg-white shadow-sm text-accent-lavender'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Moon size={18} />
            <span className="font-semibold">Evening</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-text-secondary">
            {completedCount} of {totalCount} steps complete
          </span>
          <span className="font-semibold text-primary">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              activeTab === 'am' ? 'bg-accent-pink' : 'bg-accent-lavender'
            }`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Routine Steps */}
      <div className="space-y-4 mb-6">
        {currentRoutine.map((step) => (
          <RoutineStepComponent
            key={step.id}
            stepNumber={step.stepNumber}
            productType={step.productType}
            productName={step.productName}
            purpose={step.purpose}
            completed={completedSteps.includes(step.id)}
            onToggle={() => onStepToggle(step.id)}
            timeOfDay={activeTab}
          />
        ))}
      </div>

      {/* Footer */}
      <div className={`pt-4 border-t border-divider flex items-center justify-between`}>
        <div className="text-sm">
          <span className="text-text-secondary">Estimated time: </span>
          <span className="font-semibold text-text-primary">
            {activeTab === 'am' ? '4' : '3'} minutes
          </span>
        </div>
        {progressPercentage === 100 && (
          <div className="text-primary font-semibold text-sm flex items-center">
            <span className="mr-1">🎉</span>
            Complete!
          </div>
        )}
      </div>
    </Card>
  )
}
