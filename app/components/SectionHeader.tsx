"use client"

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  highlight: string
  centered?: boolean
}

export default function SectionHeader({ eyebrow, title, highlight, centered = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      <span className="inline-block font-mono text-sm text-cyan uppercase tracking-[3px] mb-4">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
        {title}{' '}
        <span className="text-gradient">{highlight}</span>
      </h2>
    </motion.div>
  )
}