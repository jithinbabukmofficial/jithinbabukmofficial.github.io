"use client"

import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { GraduationCap, School, Award } from 'lucide-react'

const degrees = [
  {
    title: 'MSc Computer Science',
    school: 'University of Northampton, UK',
    date: 'Oct 2022 — Oct 2023',
    icon: GraduationCap,
    desc: 'Advanced computing concepts, software architecture, and modern development methodologies.',
  },
  {
    title: 'BSc Computer Applications',
    school: 'University of Calicut, India',
    date: '2013 — 2016',
    icon: School,
    desc: 'Foundation in programming, database systems, and application development.',
  },
]

const certifications = [
  'Advanced JavaScript Programming — Codecademy',
  'Master React Native & Redux — Udemy',
]

export default function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader 
          eyebrow="05 — Education"
          title="Academic"
          highlight="Background"
        />

        {/* Degrees */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {degrees.map((degree, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass rounded-3xl p-8 border border-border hover:border-purple/30 transition-all duration-500 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple to-pink flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <degree.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{degree.title}</h3>
                  <span className="text-cyan font-semibold text-sm">{degree.school}</span>
                  <span className="block font-mono text-xs text-muted mt-1 mb-3">{degree.date}</span>
                  <p className="text-secondary text-sm leading-relaxed">{degree.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="font-display text-xl font-bold text-secondary mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border-border hover:border-cyan/30 transition-all duration-300 group"
              >
                <Award size={18} className="text-cyan group-hover:scale-110 transition-transform" />
                <span className="text-sm text-secondary group-hover:text-foreground transition-colors">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}