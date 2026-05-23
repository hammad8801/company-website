import { motion } from 'motion/react'

export function Footer() {
  return (
    <footer className="relative border-t border-ink/5 px-6 md:px-10 pt-20 pb-10 overflow-hidden bg-gradient-to-b from-paper to-mist/60">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="font-display leading-[0.85] tracking-tighter accent-text select-none"
          style={{ fontSize: 'clamp(64px, 18vw, 280px)' }}
        >
          NEXORA
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-10 text-sm">
          <div className="max-w-sm text-muted">
            We don't just build software — we build complete business systems
            powered by ERPNext.
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-iris mb-4">
              Navigate
            </div>
            <ul className="space-y-2">
              {[
                ['Services', '#services'],
                ['Process', '#process'],
                ['Work', '#work'],
                ['Contact', '#contact'],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="text-ink/80 hover:text-iris transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-iris mb-4">
              Contact
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@nexora.studio"
                  className="text-ink/80 hover:text-iris transition-colors"
                >
                  hello@nexora.studio
                </a>
              </li>
              <li className="text-muted">+91 00000 00000</li>
              <li className="text-muted">India</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 text-xs text-muted border-t border-ink/10 pt-8">
          <div>© {new Date().getFullYear()} Nexora. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-iris animate-ping opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-iris" />
            </span>
            Currently accepting new projects
          </div>
        </div>
      </div>
    </footer>
  )
}
