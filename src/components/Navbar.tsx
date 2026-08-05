import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { cn } from '@/lib/cn'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
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
          'mx-auto max-w-7xl flex items-center justify-between rounded-full border transition-all duration-500',
          scrolled
            ? 'bg-white/80 backdrop-blur-xl px-5 py-2.5 border-ink/10 shadow-lg shadow-iris/5'
            : 'bg-white/40 backdrop-blur-md px-5 py-3 border-ink/5',
        )}
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg accent-gradient text-white font-display font-bold">
            Nas
            <span className="absolute -inset-1 rounded-xl border border-iris/30 group-hover:rotate-45 transition-transform duration-500" />
          </span>
          <span className="font-display font-medium tracking-tight text-ink">
            NexoraSolution
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-ink/70 hover:text-ink rounded-full hover:bg-mist transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full accent-gradient text-white px-4 py-2 text-sm font-medium shadow-md shadow-iris/25 hover:shadow-lg hover:shadow-iris/35 transition-all"
        >
          Get in touch
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </motion.header>
  )
}
