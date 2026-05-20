"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  onClick?: () => void
  icon?: ReactNode
  className?: string
}

export default function GlowButton({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  icon,
  className = '' 
}: GlowButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"

  const variants = {
    primary: "bg-gradient-to-r from-cyan to-blue text-background hover:shadow-lg hover:shadow-cyan/30 hover:-translate-y-0.5",
    secondary: "bg-card border border-border text-foreground hover:border-cyan/50 hover:bg-cyan/5 hover:-translate-y-0.5",
    ghost: "text-cyan hover:text-foreground transition-colors",
  }

  const Component = href ? motion.a : motion.button
  const props = href ? { href } : { onClick }

  return (
    <Component
      {...props}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </Component>
  )
}