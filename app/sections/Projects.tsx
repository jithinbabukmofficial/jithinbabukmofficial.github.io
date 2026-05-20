"use client"

import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Mebo App',
    description: 'Full-stack cross-platform mobile application built from concept to App Store launch. Features real-time functionality, JWT authentication, and scalable NoSQL architecture.',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'REST API', 'JWT'],
    featured: true,
    icon: '📱',
    color: 'cyan',
  },
  // {
  //   title: 'Healthcare Management System',
  //   description: 'Enterprise-grade healthcare platform with patient management, appointment scheduling, and secure data handling compliant with NHS standards.',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Healthcare IT', 'Security'],
  //   icon: '🏥',
  //   color: 'purple',
  // },
  {
    title: 'Full Stack Mobile Applications',
    description: 'Suite of 7+ cross-platform mobile applications with custom native modules, automated testing, and CI/CD integration.',
    tags: ['React Native', 'Swift', 'Kotlin', 'CI/CD', 'Testing'],
    icon: '📲',
    color: 'pink',
  },
  {
    title: 'REST API Systems',
    description: 'Scalable RESTful backend APIs with JWT authentication, real-time features, and comprehensive documentation.',
    tags: ['Node.js', 'Express', 'REST API', 'JWT', 'Documentation'],
    icon: '⚡',
    color: 'blue',
  },
  {
    title: 'Database Management Solutions',
    description: 'NoSQL and SQL database architectures with optimized queries, indexing strategies, and data migration pipelines.',
    tags: ['MongoDB', 'SQL', 'Neo4j', 'Optimization', 'Migration'],
    icon: '🗄️',
    color: 'cyan',
  },
]

const colorMap: Record<string, string> = {
  cyan: 'from-cyan/20 to-cyan/5 border-cyan/20 hover:border-cyan/40',
  purple: 'from-purple/20 to-purple/5 border-purple/20 hover:border-purple/40',
  pink: 'from-pink/20 to-pink/5 border-pink/20 hover:border-pink/40',
  blue: 'from-blue/20 to-blue/5 border-blue/20 hover:border-blue/40',
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="04 — Projects"
          title="Featured"
          highlight="Work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative glass rounded-3xl p-8 border transition-all duration-500 overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              } ${colorMap[project.color]}`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[project.color].split(' ')[0]} ${colorMap[project.color].split(' ')[1]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {project.featured && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan to-blue text-background mb-4">
                    Featured Project
                  </span>
                )}

                <div className="text-4xl mb-4">{project.icon}</div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-cyan transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-secondary border border-border group-hover:border-cyan/30 group-hover:text-cyan transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href="https://github.com/jithinbabukmofficial" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Source
                  </a>
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={24} className="text-cyan" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}