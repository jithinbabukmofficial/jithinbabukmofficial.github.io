"use client"

import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { Mail, Phone, MapPin, Linkedin, Github, FileDown, Send, ArrowUpRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jithinbabukmofficial@gmail.com',
    href: 'mailto:jithinbabukmofficial@gmail.com',
    highlight: false,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+44 7436 671414',
    href: 'tel:+447436671414',
    highlight: false,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'East Dulwich, London SE22 8AU',
    href: null,
    highlight: false,
  },
  {
    icon: FileDown,
    label: 'Work Authorization',
    value: 'Full UK Right to Work — No Sponsorship Required',
    href: null,
    highlight: true,
  },
]

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/jithinbabukm' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/jithinbabukmofficial' },
  { icon: Mail, label: 'Email', href: 'mailto:jithinbabukmofficial@gmail.com' },
  { icon: Phone, label: 'Call', href: 'tel:+447436671414' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-background via-background/95 to-background">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader 
          eyebrow="06 — Contact"
          title="Let's build"
          highlight="something amazing"
          centered
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-secondary mb-16 max-w-lg mx-auto"
        >
          I'm currently available for full-time roles and freelance projects in London or remote.
          Specializing in NHS software developer roles, enterprise software engineering, and healthcare IT positions.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className={`flex items-center gap-4 p-5 rounded-2xl glass border transition-all duration-400 group ${
                      item.highlight 
                        ? 'border-cyan/30 bg-cyan/5 hover:bg-cyan/10' 
                        : 'border-border hover:border-cyan/30 hover:bg-cyan/5'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-blue flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-muted uppercase tracking-wider">{item.label}</span>
                      <span className="block text-foreground font-semibold truncate">{item.value}</span>
                    </div>
                    <ArrowUpRight size={18} className="text-muted group-hover:text-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                ) : (
                  <div className={`flex items-center gap-4 p-5 rounded-2xl glass border ${
                    item.highlight 
                      ? 'border-cyan/30 bg-cyan/5' 
                      : 'border-border'
                  }`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-blue flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-muted uppercase tracking-wider">{item.label}</span>
                      <span className="block text-foreground font-semibold">{item.value}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Connect</h3>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass border-border hover:border-cyan/30 transition-all duration-300 group"
                >
                  <social.icon size={20} className="text-cyan group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">{social.label}</span>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="mailto:jithinbabukmofficial@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-cyan to-blue text-background font-bold hover:shadow-lg hover:shadow-cyan/30 transition-all duration-300"
            >
              <Send size={18} />
              Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}