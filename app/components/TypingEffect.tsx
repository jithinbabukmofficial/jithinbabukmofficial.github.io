"use client"

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  phrases: string[]
  className?: string
}

export default function TypingEffect({ phrases, className = '' }: TypingEffectProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const phrase = phrases[currentPhrase]

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(pauseTimer)
    }

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false)
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        return
      }
      const deleteTimer = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1))
      }, 50)
      return () => clearTimeout(deleteTimer)
    }

    if (displayText === phrase) {
      setIsPaused(true)
      return
    }

    const typeTimer = setTimeout(() => {
      setDisplayText(phrase.slice(0, displayText.length + 1))
    }, 100)
    return () => clearTimeout(typeTimer)
  }, [displayText, isDeleting, isPaused, currentPhrase, phrases])

  return (
    <span className={className}>
      <span className="text-cyan">&gt;</span> {displayText}
      <span className="inline-block w-0.5 h-5 bg-cyan ml-1 animate-pulse" />
    </span>
  )
}