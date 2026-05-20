"use client"

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-display text-2xl font-bold">
              JB<span className="text-cyan">.</span>
            </div>
            <p className="text-sm text-muted mt-1">Designed & Built by Jithin Babu K M</p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/jithinbabukmofficial' },
              { icon: Linkedin, href: 'https://linkedin.com/in/jithinbabukm' },
              { icon: Mail, href: 'mailto:jithinbabukmofficial@gmail.com' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-11 h-11 rounded-xl glass border-border hover:border-cyan/50 flex items-center justify-center text-secondary hover:text-cyan transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">© 2024 Jithin Babu K M. All rights reserved.</p>
          <p className="font-mono text-xs text-muted/60 mt-1">Built with Next.js, Three.js, Framer Motion & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}