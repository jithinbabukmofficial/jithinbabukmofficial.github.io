import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jithin Babu K M | Full Stack Developer | Healthcare Tech',
  description: 'Portfolio of Jithin Babu K M — Full Stack Developer specializing in React Native, healthcare technology, mobile & backend engineering. MSc Computer Science, London UK.',
  keywords: ['Jithin Babu K M', 'React Native Developer', 'Full Stack Developer', 'Healthcare Tech', 'Mobile Developer', 'London', 'NHS', 'Software Engineer'],
  authors: [{ name: 'Jithin Babu K M' }],
  openGraph: {
    title: 'Jithin Babu K M | Full Stack Developer',
    description: 'Full Stack Developer | Healthcare Tech Enthusiast | Mobile & Backend Engineer',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}