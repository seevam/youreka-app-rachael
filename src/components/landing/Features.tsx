'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/animations/FadeIn'
import { FEATURES } from '@/lib/constants'

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-h2-mobile md:text-h2 text-text-primary mb-4">
              Your Personal Beauty Assistant
            </h2>
            <p className="text-body-mobile md:text-body text-text-secondary max-w-2xl mx-auto">
              Everything you need to discover your perfect beauty routine
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24">
          {FEATURES.map((feature, index) => (
            <FadeIn key={feature.id} delay={index * 0.1}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-h3-mobile md:text-h3 text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-text-primary font-medium">
                    {feature.description}
                  </p>
                  <p className="text-body-mobile md:text-body text-text-secondary">
                    {feature.subtitle}
                  </p>

                  {/* Feature-specific highlights */}
                  {feature.id === 1 && (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">Instant facial analysis in seconds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">Detect skin type, tone, and texture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">Identify concerns like acne, dark spots, and wrinkles</span>
                      </li>
                    </ul>
                  )}

                  {feature.id === 2 && (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">Custom skincare routines tailored to you</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">Makeup suggestions for your unique features</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">Wellness tips for glowing skin from within</span>
                      </li>
                    </ul>
                  )}

                  {feature.id === 3 && (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">Track improvements over time</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">Monitor hydration, texture, and clarity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">See your progress with visual comparisons</span>
                      </li>
                    </ul>
                  )}

                  {feature.id === 4 && (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">Get products matched to your skin profile</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">Discover brands that work for your needs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-text-secondary">Save money by avoiding wrong purchases</span>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Visual Mockup */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-background-gray rounded-2xl p-8 shadow-xl">
                    {/* Feature-specific mockup */}
                    {feature.id === 1 && (
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 border-l-4 border-primary">
                          <p className="text-sm font-semibold text-text-primary mb-2">Scan Complete: Combination Skin</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-text-secondary">Analysis time: 3 sec</span>
                            <span className="text-primary text-sm font-semibold">✨ 95% Match</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-primary"></div>
                            <div className="w-8 h-8 rounded-full bg-accent-yellow"></div>
                            <div className="w-8 h-8 rounded-full bg-accent-blue"></div>
                          </div>
                          <p className="text-sm text-text-secondary">3 concerns identified</p>
                        </div>
                      </div>
                    )}

                    {feature.id === 2 && (
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-text-secondary mb-1">Your Morning Routine</p>
                          <p className="text-3xl font-bold text-primary">4 Steps</p>
                          <p className="text-sm text-primary">Personalized for you ✨</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white rounded-lg p-3">
                            <p className="text-xs text-text-secondary">Cleanser</p>
                            <p className="text-sm font-semibold text-primary">Gentle Foam</p>
                          </div>
                          <div className="bg-white rounded-lg p-3">
                            <p className="text-xs text-text-secondary">Moisturizer</p>
                            <p className="text-sm font-semibold text-primary">Hydrating Gel</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {feature.id === 3 && (
                      <div className="space-y-3">
                        <div className="bg-primary/10 rounded-lg p-3 ml-auto max-w-[80%]">
                          <p className="text-sm text-text-primary">How is my skin doing?</p>
                        </div>
                        <div className="bg-white rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm text-text-primary">Your skin health has improved by 15% this month! Your hydration levels are up and dark spots are fading. Keep it up! 🌟</p>
                        </div>
                      </div>
                    )}

                    {feature.id === 4 && (
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm font-semibold text-text-primary mb-3">Top Matches For You</p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <span className="text-accent-yellow text-xl">⭐</span>
                                <span className="text-sm">CeraVe Cleanser</span>
                              </div>
                              <span className="text-sm font-semibold text-primary">98% Match</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <span className="text-accent-yellow text-xl">⭐</span>
                                <span className="text-sm">Neutrogena SPF</span>
                              </div>
                              <span className="text-sm font-semibold text-primary">95% Match</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <span className="text-accent-yellow text-xl">⭐</span>
                                <span className="text-sm">The Ordinary Serum</span>
                              </div>
                              <span className="text-sm font-semibold text-primary">92% Match</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}


