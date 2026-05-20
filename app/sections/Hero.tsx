"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, FileDown } from 'lucide-react'
import GlowButton from '../components/GlowButton'
import TypingEffect from '../components/TypingEffect'

const typingPhrases = [
  'React Native Developer',
  'Full Stack Engineer',
  'Back End Developer',
  'Software Engineer',
]

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyan/20 mb-8"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-cyan"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-sm text-cyan">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6"
        >
          <span className="text-foreground">Jithin Babu</span>
          <br />
          <span className="text-gradient">K M</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-mono text-lg md:text-xl text-secondary mb-4 h-8"
        >
          <TypingEffect phrases={typingPhrases} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Full Stack Developer | AI Tech Enthusiast | Mobile & Backend Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-sm text-muted mb-10"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            London, UK — Full Right to Work (No Sponsorship Required)
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <GlowButton onClick={() => scrollToSection('#projects')} icon={<ArrowRight size={18} />}>
            View Projects
          </GlowButton>
          <GlowButton variant="secondary" href="/resume.pdf" icon={<FileDown size={18} />}>
            Download Resume
          </GlowButton>
          <GlowButton variant="secondary" onClick={() => scrollToSection('#contact')}>
            Contact Me
          </GlowButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a 
            href="https://github.com/jithinbabukmofficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:border-cyan/50 transition-all duration-300 group"
          >
            <Github size={20} className="text-secondary group-hover:text-cyan transition-colors" />
          </a>
          <a 
            href="https://linkedin.com/in/jithinbabukm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:border-cyan/50 transition-all duration-300 group"
          >
            <Linkedin size={20} className="text-secondary group-hover:text-cyan transition-colors" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex items-center justify-center gap-12 md:gap-16"
        >
          {[
            { num: '4+', label: 'Years Exp' },
            { num: '10+', label: 'Apps Shipped' },
            { num: '3', label: 'Platforms' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-cyan mb-1">{stat.num}</div>
              <div className="text-xs text-muted uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-px h-12 bg-gradient-to-b from-cyan to-transparent" />
        <span className="text-xs text-muted uppercase tracking-[3px]">Scroll</span>
      </motion.div>
    </section>
  )
}