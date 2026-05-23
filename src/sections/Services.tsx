import { motion } from 'motion/react'
import { SectionHeader } from '@/components/SectionHeader'
import {
  Boxes,
  Code2,
  Smartphone,
  Globe,
  Cpu,
  ArrowUpRight,
} from 'lucide-react'

type Service = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  tagline: string
  description: string
  bullets: string[]
}

const services: Service[] = [
  {
    icon: Boxes,
    title: 'ERPNext Services',
    tagline: 'Implementation & customization',
    description:
      'We tailor ERPNext to your business — from setup and configuration to deep module customization and data migration.',
    bullets: [
      'Full ERPNext setup and configuration',
      'Sales, HR, Inventory, Accounts customization',
      'Data migration from existing systems',
      'Third-party integrations',
      'Performance optimization and support',
    ],
  },
  {
    icon: Code2,
    title: 'Frappe Development',
    tagline: 'Custom Frappe applications',
    description:
      'Powerful custom applications built on the Frappe Framework — workflows, dashboards, and APIs designed around how you actually work.',
    bullets: [
      'Custom app development',
      'Workflow automation',
      'Custom reports and dashboards',
      'API integrations',
      'Backend system architecture',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    tagline: 'Android & Flutter',
    description:
      'Mobile apps that talk directly to your ERP — real-time sync, native performance, and tight business automation.',
    bullets: [
      'Native Android applications',
      'Cross-platform Flutter apps',
      'ERP-integrated mobile dashboards',
      'Real-time data synchronization',
      'Business automation apps',
    ],
  },
  {
    icon: Globe,
    title: 'Website Development',
    tagline: 'Modern & scalable web',
    description:
      'Fast, responsive, business-focused websites — from marketing sites to admin dashboards and ERP-integrated portals.',
    bullets: [
      'Business websites',
      'Admin dashboards',
      'Web portals',
      'ERP-integrated websites',
      'SEO-friendly development',
    ],
  },
  {
    icon: Cpu,
    title: 'Custom Software',
    tagline: 'End-to-end automation',
    description:
      'Bespoke systems built around the exact shape of your business — CRM, inventory, HR, payroll, SaaS platforms.',
    bullets: [
      'CRM systems',
      'Inventory management',
      'HR and payroll systems',
      'Business process automation',
      'SaaS platforms',
    ],
  },
]

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
          {services.map((s, i) => (
            <ServiceRow key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
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
      <div className="absolute inset-0 bg-gradient-to-br from-mist via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative grid md:grid-cols-12 gap-6 md:gap-10 p-6 md:p-10">
        <div className="md:col-span-1 flex md:block items-center justify-between">
          <span className="font-mono text-xs tracking-wider text-iris/60">
            / {num}
          </span>
        </div>

        <div className="md:col-span-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl accent-gradient text-white mb-6 group-hover:scale-110 transition-transform shadow-md shadow-iris/30">
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-iris">
            {service.tagline}
          </div>
          <h3 className="mt-3 font-display text-2xl md:text-3xl text-ink">
            {service.title}
          </h3>
          <p className="mt-4 text-muted leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {service.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-sm text-ink/75"
              >
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
    </motion.div>
  )
}
