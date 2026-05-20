"use client"

import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Mebo App',
    date: 'May 2024 — Present',
    location: 'London, UK',
    details: [
      'Built full-stack cross-platform mobile application (Flutter + Node.js + MongoDB) from concept to App Store launch',
      'Architected scalable RESTful backend APIs, JWT-based authentication, and NoSQL data models for real-time features',
      'Owned the complete product lifecycle: requirements gathering, UI/UX design, coding, QA, deployment, and iterative improvement',
      'Applied Test-Driven Development (TDD) principles to maintain code quality and reduce regression',
    ],
    stack: ['Flutter', 'Node.js', 'MongoDB', 'REST API', 'JWT', 'TDD'],
  },
  {
    title: 'React Native Developer',
    company: 'Applaunch',
    date: 'Jul 2021 — Apr 2022',
    location: 'Bangalore, India',
    details: [
      'Delivered 10+ high-impact features across iOS and Android platforms using React Native (JavaScript/TypeScript)',
      'Achieved a 25% improvement in app performance and 30% reduction in load time through code-splitting, lazy loading, and bundle optimisation',
      'Led peer code reviews and enforced coding standards, reducing post-release defects by 20%',
      'Integrated CI/CD pipelines and implemented comprehensive unit test coverage with Jest, raising test coverage above industry standards',
    ],
    stack: ['React Native', 'TypeScript', 'Redux', 'Jest', 'CI/CD', 'Performance'],
  },
  {
    title: 'React Native Developer',
    company: 'Infiyo Technologies',
    date: 'Nov 2018 — Jun 2021',
    location: 'Calicut, India',
    details: [
      'Built and maintained 7 cross-platform mobile applications from initial development to production release',
      'Integrated native modules using Swift/Objective-C (iOS) and Java/Kotlin (Android) to extend React Native capabilities',
      'Developed and maintained automated testing suites (unit, integration), improving release confidence and reducing QA cycle time',
      'Collaborated in Agile sprints, managed feature branches via Git-flow, and contributed to technical documentation',
    ],
    stack: ['React Native', 'Swift', 'Objective-C', 'Kotlin', 'Java', 'Git-flow', 'Agile'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader 
          eyebrow="03 — Experience"
          title="Professional"
          highlight="Journey"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-purple to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative mb-12 md:mb-0 ${i !== experiences.length - 1 ? 'md:mb-16' : ''}`}
            >
              <div className={`md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                {/* Date side */}
                <div className={`hidden md:block ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`pt-2 ${i % 2 === 1 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                    <span className="font-mono text-sm text-cyan">{exp.date}</span>
                  </div>
                </div>

                {/* Content side */}
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <motion.div
                    whileHover={{ x: i % 2 === 0 ? 8 : -8 }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-2xl p-6 md:p-8 border-border hover:border-cyan/30 transition-all duration-500 group"
                  >
                    {/* Mobile date */}
                    <div className="md:hidden flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-cyan" />
                      <span className="font-mono text-sm text-cyan">{exp.date}</span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-purple font-semibold">{exp.company}</span>
                      <span className="text-muted">·</span>
                      <span className="flex items-center gap-1 text-sm text-muted">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.details.map((detail, j) => (
                        <li key={j} className="text-secondary text-sm leading-relaxed flex gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 shrink-0 shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-cyan/10 text-cyan border border-cyan/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-6 md:top-8 w-4 h-4 -translate-x-1/2">
                <div className="w-full h-full rounded-full bg-cyan shadow-[0_0_12px_rgba(0,240,255,0.6)]" />
                <div className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}