import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05])
  const blobY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 md:px-10">
      <motion.div
        style={{ scale }}
        className="relative mx-auto max-w-7xl rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent"
      >
        <motion.div
          style={{ y: blobY }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 h-[60%] w-[80%] rounded-full bg-white/10 blur-3xl"
        />

        <div className="relative grid lg:grid-cols-2 gap-10 p-10 md:p-16 lg:p-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
              <span className="h-px w-6 bg-white/40" />
              Let's build
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9 }}
              className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-white text-balance"
            >
              Ready to{' '}
              <span className="italic font-light text-white/70">automate</span>{' '}
              your business?
            </motion.h2>
            <p className="mt-8 text-lg text-white/60 max-w-md">
              From first call to live deployment — talk to us about what you're
              trying to build.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { label: 'Get a free consultation', href: '#contact' },
              { label: 'Discuss your project', href: '#contact' },
              { label: 'Request a demo', href: '#contact' },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.03] px-6 py-5 hover:bg-white/[0.08] hover:border-white/30 transition-all"
              >
                <span className="font-display text-xl md:text-2xl text-white">
                  {item.label}
                </span>
                <span className="h-10 w-10 rounded-full border border-white/20 inline-flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:rotate-[-45deg] transition-all duration-500">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
