import { motion } from 'motion/react'
import { SectionHeader } from '@/components/SectionHeader'
import {
  Calculator,
  KeyRound,
  Truck,
  Building2,
  Utensils,
  Car,
  Users,
  Scale,
  Boxes,
  Archive,
  Receipt,
  Wallet,
  Calendar,
  Store,
  BadgeCheck,
  Package,
  Layout,
  MessageCircle,
  CalendarDays,
  BarChart,
  ArrowUpRight,
} from 'lucide-react'

type Product = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  tag: string
}

const products: Product[] = [
  { icon: Calculator, title: 'Export Price Calculation', tag: 'Pricing tools' },
  { icon: KeyRound, title: 'Leasing', tag: 'Contracts & assets' },
  { icon: Truck, title: 'Distribution (VAN sales)', tag: 'DMS' },
  { icon: Building2, title: 'Facilities Management', tag: 'Operations' },
  { icon: Utensils, title: 'Restaurant Management', tag: 'Hospitality' },
  { icon: Car, title: 'Parking Management', tag: 'Operations' },
  { icon: Users, title: 'Sales & CRM', tag: 'Revenue ops' },
  { icon: Scale, title: 'Legal Case Management', tag: 'Legal' },
  { icon: Boxes, title: 'ERPNext Implementation', tag: 'Core ERP' },
  { icon: Archive, title: 'Asset Management', tag: 'Finance' },
  { icon: Receipt, title: 'POS Setups', tag: 'Retail' },
  { icon: Wallet, title: 'Payroll Management', tag: 'HR & finance' },
  { icon: Calendar, title: 'Appointment Scheduling', tag: 'Booking' },
  { icon: Store, title: 'Store Selection', tag: 'Retail' },
  { icon: BadgeCheck, title: 'Club Membership', tag: 'Memberships' },
  { icon: Package, title: '3PL & Logistics', tag: 'Supply chain' },
]

const addons = [
  { icon: Layout, title: 'Website design finalization' },
  { icon: MessageCircle, title: 'WhatsApp integration' },
  { icon: CalendarDays, title: 'Meeting scheduler' },
  { icon: BarChart, title: 'Analytics' },
]

export function Products() {
  return (
    <section
      id="products"
      className="relative py-32 md:py-48 px-6 md:px-10 border-t border-ink/5"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 dot-mesh opacity-30 mask-radial"
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Products"
          title={
            <>
              Ready-to-deploy{' '}
              <span className="italic font-light accent-text">
                business modules
              </span>
              .
            </>
          }
          description="Sixteen battle-tested verticals — configure, customize, and roll out fast. Each one is built on the Frappe stack and integrates cleanly with ERPNext."
        />

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {products.map((p, i) => (
            <ProductCard key={p.title} product={p} index={i} />
          ))}
        </div>

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-iris mb-8"
          >
            <span className="h-px w-6 bg-iris" />
            Built-in capabilities
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {addons.map((a, i) => {
              const Icon = a.icon
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.06 }}
                  className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-gradient-to-br from-white to-mist/40 px-5 py-5 hover:border-iris/30 hover:shadow-lg hover:shadow-iris/10 transition-all"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-iris/20 bg-mist text-iris group-hover:accent-gradient group-hover:text-white group-hover:border-transparent transition-colors">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-display text-base md:text-lg text-ink leading-snug">
                    {a.title}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col rounded-2xl border border-ink/10 bg-white p-6 overflow-hidden hover:border-iris/30 hover:shadow-xl hover:shadow-iris/10 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-mist/0 via-transparent to-haze/0 group-hover:from-mist/60 group-hover:to-haze/40 transition-colors duration-500" />

      <div className="relative flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl accent-gradient text-white shadow-md shadow-iris/25 group-hover:scale-110 group-hover:rotate-3 transition-transform">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-[10px] tracking-wider text-iris/50">
          / {num}
        </span>
      </div>

      <div className="relative mt-6">
        <div className="text-[10px] uppercase tracking-[0.22em] text-iris/70">
          {product.tag}
        </div>
        <h3 className="mt-2 font-display text-lg md:text-xl text-ink leading-snug">
          {product.title}
        </h3>
      </div>

      <div className="relative mt-6 flex items-center justify-between text-xs text-muted">
        <span className="opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all">
          Discuss this module
        </span>
        <ArrowUpRight className="h-4 w-4 text-ink/30 group-hover:text-iris group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
    </motion.a>
  )
}
