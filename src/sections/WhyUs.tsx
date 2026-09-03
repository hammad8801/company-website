import { motion } from 'motion/react'
import { SectionHeader } from '@/components/SectionHeader'

const reasons = [
  {
    t: 'Business-first thinking',
    d: "We start with how your business actually works — then decide what should be configured, built, automated, or integrated. Software comes second.",
  },
  {
    t: 'One team, end to end',
    d: 'ERPNext, Frappe, web, mobile, and custom software — connected by one team from idea to production. Fewer handoffs, one source of accountability.',
  },
  {
    t: 'Built around your workflow',
    d: 'Every system, screen, workflow, and automation is shaped around the way your team actually operates — not around what the platform does by default.',
  },
  {
    t: 'Configure before we customize',
    d: 'We use what the platform already does well before adding custom code — keeping solutions simpler, cleaner, and easier to maintain over time.',
  },
  {
    t: 'Automation & integration mindset',
    d: 'We connect systems and remove repetitive manual work so information moves where it needs to — automatically and accurately.',
  },
  {
    t: 'Built to evolve',
    d: 'We design systems that can grow with your business — with maintainable architecture, clear documentation, and long-term support.',
  },
]

export function WhyUs() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-10 border-t border-ink/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why choose us"
          title={
            <>
              Built like a product team,{' '}
              <span className="italic font-light accent-text">not</span> a
              services agency.
            </>
          }
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 rounded-3xl overflow-hidden border border-ink/10">
          {reasons.map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08 }}
              className="group relative bg-white p-8 md:p-10 hover:bg-mist/60 transition-colors"
            >
              <div className="font-mono text-xs text-iris/60 mb-6">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-xl md:text-2xl text-ink">
                {r.t}
              </h3>
              <p className="mt-4 text-muted leading-relaxed text-sm md:text-base">
                {r.d}
              </p>
              <div className="absolute bottom-0 left-0 h-px accent-gradient w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
