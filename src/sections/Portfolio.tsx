import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'
import { SectionHeader } from '@/components/SectionHeader'
import { caseStudies } from '@/data/site'

export function Portfolio() {
  return (
    <section
      id="work"
      className="relative py-32 md:py-48 px-6 md:px-10 border-t border-ink/5"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our work"
          title={
            <>
              A few things we’ve{' '}
              <span className="italic font-light accent-text">shipped</span>.
            </>
          }
          description="Selected projects across ERP, mobile, and web. Full case studies on request."
        />

        <div className="mt-20 divide-y divide-ink/10 border-y border-ink/10">
          {caseStudies.map((w, i) => (
            <WorkRow key={w.title} work={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkRow({
  work,
  index,
}: {
  work: (typeof caseStudies)[number]
  index: number
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { damping: 30, stiffness: 200 })
  const y = useSpring(my, { damping: 30, stiffness: 200 })
  const rotate = useTransform(x, [-100, 100], [-6, 6])

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left - rect.width / 2)
    my.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <motion.a
      ref={ref}
      href={`/work/${work.slug}`}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0)
        my.set(0)
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="group relative grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-center hover:bg-mist/50 transition-colors"
    >
      <div className="col-span-1 md:col-span-1 font-mono text-xs text-iris/60">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="col-span-11 md:col-span-5">
        <h3 className="font-display text-2xl md:text-4xl text-ink group-hover:translate-x-2 group-hover:accent-text transition-all duration-500">
          {work.title}
        </h3>
      </div>
      <div className="col-span-6 md:col-span-4 text-muted text-sm md:text-base">
        {work.description}
      </div>
      <div className="col-span-4 md:col-span-1 text-xs uppercase tracking-[0.2em] text-muted">
        Case study
      </div>
      <div className="col-span-2 md:col-span-1 flex justify-end text-ink/40 group-hover:text-iris transition-colors">
        →
      </div>

      <motion.div
        aria-hidden
        style={{ x, y, rotate }}
        className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center rounded-2xl accent-gradient text-white backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-iris/30"
      >
        {work.category}
      </motion.div>
    </motion.a>
  )
}
