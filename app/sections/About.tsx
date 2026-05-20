"use client"

import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { Smartphone, Server, Rocket, Shield } from 'lucide-react'

const highlights = [
  { icon: Smartphone, label: 'Mobile First', desc: 'React Native & Flutter' },
  { icon: Server, label: 'Full-Stack', desc: 'Node.js, Express, MongoDB' },
  { icon: Rocket, label: 'DevOps', desc: 'CI/CD, GitHub Actions' },
  // { icon: Shield, label: 'Healthcare', desc: 'NHS & Enterprise Systems' },
]

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          eyebrow="01 — About"
          title="Building the future of"
          highlight="Software tech"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6 mb-10">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                MSc Computer Science graduate with software development. 
                Experienced in React Native, full-stack development, REST APIs, databases, backend systems, 
                and healthcare support environments.
              </p>
              <p className="text-secondary leading-relaxed">
                Passionate about Artifical Inteligence, system integration, and scalable applications. 
                I manage the full development lifecycle — from system design and performance optimization 
                to CI/CD and automated testing.
              </p>
              <p className="text-secondary leading-relaxed">
                As founder of <strong className="text-foreground">Mebo</strong>, I built and launched a full-stack 
                mobile app from concept to App Store using Flutter, Node.js, and MongoDB. Currently based in 
                <strong className="text-foreground"> London, UK</strong> with full right to work. 
                No sponsorship required.
              </p>
            </div>

            {/* Highlight Pills */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-full glass hover:border-cyan/30 transition-all duration-300 group cursor-default"
                >
                  <item.icon size={18} className="text-cyan group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                    <span className="text-xs text-muted ml-2">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32"
          >
            <div className="glass rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan/5 transition-shadow duration-500">
              {/* Window header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-white/[0.02]">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-muted ml-2">jithin.profile.ts</span>
              </div>

              {/* Code content */}
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                  <code>
                    <span className="text-purple">const</span>{' '}
                    <span className="text-pink">developer</span>{' '}={" "}
                    <span className="text-foreground">{"{"}</span>{""}
                    {"  "}<span className="text-cyan">name</span>:{' '}
                    <span className="text-green-400">&quot;Jithin Babu K M&quot;</span>,{"\n"}
                    {"  "}<span className="text-cyan">role</span>:{' '}
                    <span className="text-green-400">&quot;Full Stack Developer&quot;</span>,{"\n"}
                    {"  "}<span className="text-cyan">location</span>:{' '}
                    <span className="text-green-400">&quot;London, UK&quot;</span>,{"\n"}
                    {"  "}<span className="text-cyan">status</span>:{' '}
                    <span className="text-green-400">&quot;Available&quot;</span>,{"\n"}
                    {"  "}<span className="text-cyan">focus</span>:{' '}
                    <span className="text-green-400">&quot;Healthcare Tech&quot;</span>,{"\n"}
                    {"  "}<span className="text-cyan">skills</span>:{' '}
                    <span className="text-foreground">[</span>{"\n"}
                    {"    "}<span className="text-green-400">&quot;React Native&quot;</span>,{"\n"}
                    {"    "}<span className="text-green-400">&quot;Flutter&quot;</span>,{"\n"}
                    {"    "}<span className="text-green-400">&quot;Node.js&quot;</span>,{"\n"}
                    {"    "}<span className="text-green-400">&quot;MongoDB&quot;</span>,{"\n"}
                    {"    "}<span className="text-green-400">&quot;React JS&quot;</span>{"\n"}
                    {"  "}<span className="text-foreground">]</span>,{"\n"}
                    {"  "}<span className="text-cyan">workAuth</span>:{' '}
                    <span className="text-foreground">()</span>{' '}={" "}
                    <span className="text-green-400">&quot;Full UK Right to Work&quot;</span>{""}
                    <span className="text-foreground">{"}"}</span>;
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}