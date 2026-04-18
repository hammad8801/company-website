import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { HeroScene } from '@/components/HeroScene'

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2 + i * 0.12,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden grain"
    >
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex items-center px-6 md:px-10 pt-32 pb-20"
      >
        <div className="mx-auto max-w-7xl w-full">
          <motion.div
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              ERPNext · Frappe · Mobile · Web
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="mt-6 text-5xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tight text-balance text-white"
            >
              Build powerful business systems with{' '}
              <span className="italic font-light text-white/80">ERPNext</span>
              {' & '}
              <span className="italic font-light text-white/80">Frappe</span>.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed text-balance"
            >
              We help businesses automate operations, streamline workflows, and
              scale faster — custom Frappe apps, ERP implementations, mobile
              apps, and modern websites. From idea to execution.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 text-sm font-medium overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-black/5 transition-colors" />
                <span className="relative">Get free consultation</span>
                <span className="relative transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                View our work
              </a>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl border-t border-white/10 pt-8"
            >
              {[
                ['50+', 'Projects'],
                ['12+', 'Industries'],
                ['98%', 'On-time'],
                ['24/7', 'Support'],
              ].map(([n, l]) => (
                <div key={l as string}>
                  <div className="font-display text-3xl md:text-4xl text-white">{n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/50">{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="block h-10 w-px bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
