import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const paragraphs = [
  'We are a technology-driven studio specializing in ERPNext, Frappe Framework, and custom software development.',
  'Our goal is simple — help businesses replace manual processes with smart, automated systems.',
  'We combine ERP solutions, mobile apps, and web development to create fully integrated digital ecosystems that improve efficiency, visibility, and growth.',
  'Whether you are a startup or an established business, we build solutions that scale with you.',
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-10 border-t border-ink/5"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-iris mb-10"
        >
          <span className="h-px w-6 bg-iris" />
          Who we are
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-6xl leading-[1.1] tracking-tight text-balance text-ink">
              {paragraphs[0].split(' ').map((word, i) => (
                <Word key={i} progress={scrollYProgress} index={i} total={paragraphs[0].split(' ').length}>
                  {word}
                </Word>
              ))}
            </h2>

            <div className="mt-12 space-y-6 max-w-2xl text-lg text-muted leading-relaxed">
              {paragraphs.slice(1).map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: 0.1 * i }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl border border-ink/10 bg-white p-6 md:p-8 overflow-hidden glow-ring"
            >
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-iris/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-rose/15 blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.25em] text-iris">
                  Our positioning
                </div>
                <p className="mt-5 font-display text-xl md:text-2xl leading-snug text-ink">
                  We don't just build software — we build complete business
                  systems powered by <span className="accent-text">ERPNext</span>.
                </p>
                <div className="mt-8 flex items-center gap-3 text-sm text-muted">
                  <div className="h-px flex-1 bg-ink/10" />
                  One partner — ERP, Mobile, Web.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Word({
  children,
  progress,
  index,
  total,
}: {
  children: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  index: number
  total: number
}) {
  const start = 0.08 + (index / total) * 0.35
  const end = start + 0.08
  const opacity = useTransform(progress, [start, end], [0.18, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  )
}
