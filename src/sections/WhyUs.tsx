import { motion } from 'motion/react'
import { SectionHeader } from '@/components/SectionHeader'

const reasons = [
  {
    t: 'ERPNext & Frappe expertise',
    d: 'Deep specialization in the Frappe ecosystem — not a generalist shop that also does ERP.',
  },
  {
    t: 'Complete solutions',
    d: 'ERP, mobile, and web from one team — fewer handoffs, one source of accountability.',
  },
  {
    t: 'Built for your workflow',
    d: 'Every module, screen, and automation is shaped around how your business actually runs.',
  },
  {
    t: 'Scalable architecture',
    d: 'Systems designed to grow — from first users to the scale you haven\u2019t hit yet.',
  },
  {
    t: 'Transparent communication',
    d: 'Clear scopes, honest timelines, async updates you can actually read.',
  },
  {
    t: 'Automation first',
    d: 'If it can be automated, we automate it — so your team gets time back.',
  },
]

export function WhyUs() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why choose us"
          title={
            <>
              Built like a product team,{' '}
              <span className="italic font-light text-white/70">not</span> a
              services agency.
            </>
          }
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {reasons.map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08 }}
              className="group relative bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#0f0f0f] transition-colors"
            >
              <div className="font-mono text-xs text-white/30 mb-6">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-xl md:text-2xl text-white">
                {r.t}
              </h3>
              <p className="mt-4 text-white/60 leading-relaxed text-sm md:text-base">
                {r.d}
              </p>
              <div className="absolute bottom-0 left-0 h-px bg-white/40 w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
