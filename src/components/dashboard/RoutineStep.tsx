import React from 'react'

interface RoutineStepProps {
  stepNumber: number
  productType: string
  productName: string
  purpose: string
  completed: boolean
  onToggle: () => void
  timeOfDay: 'am' | 'pm'
}

export const RoutineStep: React.FC<RoutineStepProps> = ({
  stepNumber,
  productType,
  productName,
  purpose,
  completed,
  onToggle,
  timeOfDay
}) => {
  const accentColor = timeOfDay === 'am' ? 'bg-accent-pink' : 'bg-accent-lavender'
  const accentColorLight = timeOfDay === 'am' ? 'bg-accent-pink/20' : 'bg-accent-lavender/20'

  return (
    <div className="flex items-start space-x-3 group">
      {/* Checkbox */}
      <button
        onClick={onToggle}
        className={`flex-shrink-0 w-5 h-5 rounded border-2 transition-all mt-1 ${
          completed
            ? `${accentColor} border-transparent`
            : 'border-gray-300 hover:border-primary'
        }`}
      >
        {completed && (
          <svg
            className="w-full h-full text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </button>

      {/* Step Badge */}
      <div className={`flex-shrink-0 w-8 h-8 ${accentColorLight} rounded-full flex items-center justify-center mt-0.5`}>
        <span className="text-sm font-bold text-text-primary">{stepNumber}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className={`transition-opacity ${completed ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center space-x-2 mb-1">
            <h4 className={`text-sm font-semibold text-text-primary ${completed ? 'line-through' : ''}`}>
              {productType}
            </h4>
            <span className="text-xs text-text-secondary">•</span>
            <span className="text-xs text-text-secondary truncate">{productName}</span>
          </div>
          <p className="text-xs text-text-secondary">{purpose}</p>
        </div>
      </div>
    </div>
  )
}
