import { motion } from 'motion/react'
import { industries as siteIndustries } from '@/data/site'

const industries = siteIndustries.map((item) => item.title)


export function Industries() {
  const row = [...industries, ...industries, ...industries]

  return (
    <section className="relative py-20 md:py-28 border-y border-ink/5 bg-mist/40 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-xs uppercase tracking-[0.3em] text-iris mb-10"
      >
        Industries we serve
      </motion.div>

      <div className="relative flex overflow-hidden mask-x">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex gap-16 md:gap-24 whitespace-nowrap pr-16 md:pr-24"
        >
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-6 md:gap-10 shrink-0"
            >
              <span className="font-display text-3xl md:text-5xl text-ink/80">
                {name}
              </span>
              <span className="h-2 w-2 rounded-full accent-gradient" />
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .mask-x {
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>
    </section>
  )
}
