import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { cn } from '@/lib/cn'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40)
  })

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 pt-5"
    >
      <div
        className={cn(
          'mx-auto max-w-7xl flex items-center justify-between rounded-full border border-white/5 transition-all duration-500',
          scrolled
            ? 'bg-black/60 backdrop-blur-xl px-5 py-2.5 border-white/10'
            : 'bg-transparent px-5 py-3',
        )}
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white text-black font-display font-bold">
            N
            <span className="absolute -inset-1 rounded-xl border border-white/20 group-hover:rotate-45 transition-transform duration-500" />
          </span>
          <span className="font-display font-medium tracking-tight text-white">
            Nexora
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-all"
        >
          Get in touch
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </motion.header>
  )
}
