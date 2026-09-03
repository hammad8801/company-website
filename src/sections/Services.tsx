import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { SectionHeader } from '@/components/SectionHeader'
import { services } from '@/data/site'
import { ArrowUpRight } from 'lucide-react'

export function Services() {
  return (
    <section
      id="services"
      className="relative py-32 md:py-48 px-6 md:px-10 border-t border-ink/5"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              One partner for ERP,{' '}
              <span className="italic font-light accent-text">mobile</span>,
              and <span className="italic font-light accent-text">web</span>.
            </>
          }
          description="From rollout to ongoing support — we ship complete digital systems, not just code."
        />

        <div className="mt-20 space-y-4">
          {services.map((s, i) =>
            s.slug === 'erpnext-implementation' ? (
              <ERPNextHubRow key={s.title} service={s} index={i} />
            ) : (
              <ServiceRow key={s.title} service={s} index={i} />
            )
          )}
        </div>
      </div>
    </section>
  )
}

// ── ERPNext 4-sub-service hub tile ────────────────────────────────────────────
const erpnextSubServices = [
  {
    num: '01',
    label: 'ERPNext Consultancy',
    sub: 'Understand, assess & plan',
    href: '/services/erpnext-consulting',
  },
  {
    num: '02',
    label: 'ERPNext Implementation',
    sub: 'Configure, migrate & launch',
    href: '/services/erpnext-implementation',
  },
  {
    num: '03',
    label: 'ERPNext Customization',
    sub: 'Extend, automate & optimise',
    href: '/services/erpnext-customization',
  },
  {
    num: '04',
    label: 'Third-Party Integrations',
    sub: 'Connect ERPNext with your systems',
    href: '/services/erpnext-integration',
  },
]

function ERPNextHubRow({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const Icon = service.icon
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl border border-ink/10 bg-white overflow-hidden hover:border-iris/30 hover:shadow-xl hover:shadow-iris/10 transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-mist via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative grid md:grid-cols-12 gap-6 md:gap-10 p-6 md:p-10">
        {/* Index */}
        <div className="md:col-span-1 flex md:block items-center justify-between">
          <span className="font-mono text-xs tracking-wider text-iris/60">/ {num}</span>
        </div>

        {/* Left — identity */}
        <div className="md:col-span-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl accent-gradient text-white mb-6 group-hover:scale-110 transition-transform shadow-md shadow-iris/30">
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-iris">ERPNext Services</div>
          <h3 className="mt-3 font-display text-2xl md:text-3xl text-ink">ERPNext Solutions</h3>
          <p className="mt-4 text-muted leading-relaxed">
            From strategy to implementation and integrations, we help businesses build ERPNext
            around the way they actually work.
          </p>
          <Link
            to="/services/erpnext-consulting"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-iris hover:gap-3 transition-all"
          >
            Explore ERPNext <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Right — 4 sub-service rows */}
        <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center gap-1">
          {erpnextSubServices.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="group/row flex items-center gap-4 rounded-2xl border border-transparent px-4 py-3 hover:border-iris/15 hover:bg-mist/60 transition-all"
            >
              <span className="font-mono text-xs text-iris/50 group-hover/row:text-iris transition-colors w-6 shrink-0">
                {item.num}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink group-hover/row:translate-x-0.5 transition-transform">
                  {item.label}
                </p>
                <p className="text-xs text-muted mt-0.5 opacity-0 max-h-0 group-hover/row:opacity-100 group-hover/row:max-h-6 transition-all duration-200 overflow-hidden">
                  {item.sub}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-ink/30 group-hover/row:text-iris group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 transition-all shrink-0" />
            </Link>
          ))}
        </div>

        {/* Decorative corner arrow */}
        <div className="md:col-span-1 md:col-start-12 flex md:justify-end">
          <ArrowUpRight className="h-5 w-5 text-ink/40 group-hover:text-iris group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  )
}

// ── Generic service tile ───────────────────────────────────────────────────────
function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const Icon = service.icon
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl border border-ink/10 bg-white overflow-hidden hover:border-iris/30 hover:shadow-xl hover:shadow-iris/10 transition-all"
    >
      <Link
        to={`/services/${service.slug}`}
        className="relative block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-iris"
        aria-label={`View ${service.title}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-mist via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative grid md:grid-cols-12 gap-6 md:gap-10 p-6 md:p-10">
          <div className="md:col-span-1 flex md:block items-center justify-between">
            <span className="font-mono text-xs tracking-wider text-iris/60">/ {num}</span>
          </div>

          <div className="md:col-span-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl accent-gradient text-white mb-6 group-hover:scale-110 transition-transform shadow-md shadow-iris/30">
              <Icon className="h-5 w-5" />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-iris">{service.tagline}</div>
            <h3 className="mt-3 font-display text-2xl md:text-3xl text-ink">{service.title}</h3>
            <p className="mt-4 text-muted leading-relaxed">{service.description}</p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink/75">
                  <span className="mt-[9px] h-px w-4 bg-iris/60 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 md:col-start-12 flex md:justify-end">
            <ArrowUpRight className="h-5 w-5 text-ink/40 group-hover:text-iris group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
