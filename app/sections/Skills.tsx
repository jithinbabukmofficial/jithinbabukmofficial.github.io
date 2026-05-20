"use client"

import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '💻',
    skills: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
    color: 'cyan',
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Firebase'],
    color: 'purple',
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['SQL', 'MongoDB', 'Neo4j'],
    color: 'pink',
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'CI/CD', 'Linux', 'VPS', 'Agile', 'Testing'],
    color: 'blue',
  }
]

const colorMap: Record<string, { border: string; glow: string; text: string; bg: string }> = {
  cyan: { border: 'border-cyan/30', glow: 'hover:shadow-cyan/10', text: 'text-cyan', bg: 'bg-cyan/10' },
  purple: { border: 'border-purple/30', glow: 'hover:shadow-purple/10', text: 'text-purple', bg: 'bg-purple/10' },
  pink: { border: 'border-pink/30', glow: 'hover:shadow-pink/10', text: 'text-pink', bg: 'bg-pink/10' },
  blue: { border: 'border-blue/30', glow: 'hover:shadow-blue/10', text: 'text-blue', bg: 'bg-blue/10' },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="02 — Skills"
          title="Technical"
          highlight="Arsenal"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const colors = colorMap[category.color]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative glass rounded-3xl p-8 border ${colors.border} hover:${colors.glow} transition-all duration-500`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">{category.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05, duration: 0.4 }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono ${colors.bg} ${colors.text} border ${colors.border} hover:scale-105 transition-transform duration-200`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}