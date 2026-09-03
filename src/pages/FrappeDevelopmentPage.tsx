import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, ArrowDown,
  AppWindow, Puzzle, Workflow, Network, LayoutDashboard, Rocket, CheckCircle2,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const capabilities = [
  {
    number: '01', icon: AppWindow, title: 'Custom Frappe Applications',
    subtitle: 'From business idea to working application.',
    body: 'Build complete applications on the Frappe Framework for processes that don\'t fit an existing product. Industry-specific systems, operations platforms, customer portals, vendor portals — engineered around how the business actually works.',
    bullets: ['Industry-specific business systems', 'Customer and vendor portals', 'Operations and management platforms', 'Standalone Frappe apps with their own modules and DocTypes'],
  },
  {
    number: '02', icon: Puzzle, title: 'ERPNext Extensions',
    subtitle: 'Extend ERPNext without rebuilding ERPNext.',
    body: 'When ERPNext already covers 80% of the requirement, the answer isn\'t a separate system — it\'s a purposeful extension. We add what\'s genuinely missing while keeping the core clean, upgrade-safe and maintainable.',
    bullets: ['Custom DocTypes and child tables', 'Business rules and validations', 'Custom modules and screens', 'Reports, dashboards and print formats'],
  },
  {
    number: '03', icon: Workflow, title: 'Business Workflow Engineering',
    subtitle: 'Turn the way your business works into software.',
    body: 'Workflows aren\'t just Frappe features — they are business processes expressed as code. We map the real process (approvals, calculations, rules, documents, notifications, accounting) and build it as a connected application.',
    bullets: ['Multi-stage approval chains', 'Calculation and business rule automation', 'Document generation and notifications', 'Automated accounting and ERP triggers'],
  },
  {
    number: '04', icon: Network, title: 'APIs & Connected Applications',
    subtitle: 'Frappe as the backend for everything around it.',
    body: 'Frappe\'s REST API and custom endpoint support lets us build the technical backbone for mobile apps, websites, third-party integrations and cross-system workflows — all using Frappe as the authoritative business layer.',
    bullets: ['Custom REST API endpoints', 'Webhook publishing and receiving', 'OAuth and API key authentication', 'Mobile and website backends'],
  },
  {
    number: '05', icon: LayoutDashboard, title: 'Portals & Business Interfaces',
    subtitle: 'Authenticated experiences beyond the ERPNext Desk.',
    body: 'Frappe supports public and authenticated portal pages alongside the standard Desk interface. We use this to build customer-facing and employee-facing experiences that connect directly to the business data.',
    bullets: ['Customer portals: orders, invoices, status', 'Vendor portals: POs, submissions, documents', 'Employee portals: requests, approvals, workflows', 'B2B interfaces and self-service tools'],
  },
  {
    number: '06', icon: Rocket, title: 'Deployment & Evolution',
    subtitle: 'From development to production — and beyond.',
    body: 'Development doesn\'t end when the code does. We handle production deployment, performance optimization, monitoring, version upgrades and ongoing evolution so your application stays healthy as the business grows.',
    bullets: ['Production deployment and Frappe Bench', 'Frappe Cloud and Docker-based deployments', 'Performance optimization and monitoring', 'Version upgrades and long-term maintenance'],
  },
]

const methodology = [
  { step: 'Discover', desc: 'Understand the business problem, users, processes and outcome.' },
  { step: 'Model', desc: 'Design DocTypes, workflows, roles, permissions and architecture.' },
  { step: 'Build', desc: 'Develop business logic, interfaces, reports and automation.' },
  { step: 'Connect', desc: 'Connect APIs, external systems and other business tools.' },
  { step: 'Prove', desc: 'Test real workflows, permissions, calculations and integrations.' },
  { step: 'Evolve', desc: 'Deploy, monitor, maintain and improve continuously.' },
]

const spectrum = [
  { label: 'Configure', desc: 'Use what Frappe/ERPNext already does', style: 'border-emerald-200 bg-emerald-50/60 text-emerald-700' },
  { label: 'Extend', desc: 'Add fields, DocTypes, rules and custom screens', style: 'border-violet-100 bg-violet-50/60 text-violet-700' },
  { label: 'Build', desc: 'Create a complete Frappe application', style: 'border-iris/20 bg-iris/5 text-iris' },
  { label: 'Productize', desc: 'Turn the application into a deployable product', style: 'border-iris/30 accent-gradient text-white' },
]

const projects = [
  {
    name: 'Export Price Calc',
    href: '/products/export-price-calculation',
    desc: 'Complex export pricing, costing, container logistics and profitability — built as a connected Frappe application.',
    steps: ['Product Cost', 'Quotation', 'CBM / Weight', 'Container', 'FOB / CIF', 'Profitability', 'Sales Order'],
  },
  {
    name: 'Lease Management',
    href: '/products/leasing',
    desc: 'Rental lifecycle automation — from unit availability and lease creation to billing, PDC tracking and accounting.',
    steps: ['Property', 'Unit', 'Lease', 'Billing', 'Invoice', 'PDC', 'Accounting', 'Renewal'],
  },
]

export function FrappeDevelopmentPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Frappe Development' }]} />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-iris/8 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-violet-300/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-iris">
              Service · Frappe
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-4xl">
              Build business software{' '}
              <span className="text-iris">on Frappe.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              From ERPNext extensions to complete business applications, we design and build Frappe
              solutions around the way your business actually works — not around what the platform
              does by default.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-6 py-4">
              <span className="font-display text-sm font-medium text-ink">Frappe gives us the foundation.</span>
              <span className="h-4 w-px bg-ink/15" />
              <span className="text-sm text-muted">We build what your business actually needs.</span>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl transition-all">
                Discuss Your Frappe Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/erpnext-customization" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                Also See: ERPNext Customization <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* METHODOLOGY STRIP */}
      <section className="border-y border-ink/8 bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {['Discover', 'Model', 'Build', 'Connect', 'Prove', 'Evolve'].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-4">
                <span className="font-medium text-ink/80">{item}</span>
                {i < arr.length - 1 && <span className="font-bold text-iris text-lg leading-none">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FRAPPE VS ERPNEXT */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-iris">The distinction</p>
              <h2 className="mt-3 font-display text-4xl text-ink">
                ERPNext is one application.<br />Frappe is the platform.
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                Most businesses know ERPNext. Fewer realize that ERPNext is built on top of the
                Frappe Framework — a full-stack Python/JavaScript platform with database models,
                permissions, UI, APIs, workflows, background jobs, realtime and deployment
                infrastructure.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                That distinction matters. It means Nexora can build <em>much more</em> than
                ERPNext extensions. We can build complete business applications — industry-specific
                systems, portals, automation engines, mobile backends — all on the same foundation.
              </p>
            </div>

            {/* Visual */}
            <div className="rounded-[2rem] border border-ink/8 bg-white p-8">
              <div className="flex flex-col items-center gap-0 text-center text-sm">
                <div className="w-full max-w-xs rounded-2xl border border-iris/25 bg-iris/5 px-5 py-4">
                  <p className="font-display text-base text-iris">Frappe Framework</p>
                  <p className="mt-1 text-xs text-muted">Database · Permissions · UI · APIs · Workflows · Background Jobs</p>
                </div>
                <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
                <div className="flex w-full max-w-xs gap-2">
                  <div className="flex-1 rounded-2xl border border-ink/10 bg-mist/40 px-3 py-3 text-xs">
                    <p className="font-medium text-ink">ERPNext</p>
                    <p className="mt-1 text-muted text-[10px]">Finance · HR · Sales · Inventory</p>
                  </div>
                  <div className="flex-1 rounded-2xl border border-violet-200 bg-violet-50/60 px-3 py-3 text-xs">
                    <p className="font-medium text-violet-700">Custom Apps</p>
                    <p className="mt-1 text-muted text-[10px]">Built by Nexora for your business</p>
                  </div>
                </div>
                <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
                <div className="w-full max-w-xs rounded-2xl border border-emerald-200 bg-emerald-50/60 px-5 py-3">
                  <p className="font-display text-sm text-emerald-700">Your Business System</p>
                </div>
              </div>
              <p className="mt-6 text-center text-xs text-muted italic">
                Less foundation-building. More business logic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE FRAPPE BUILD SPECTRUM */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Frappe build spectrum</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              We determine how much Frappe your business actually needs.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Not every business requirement needs a custom application. We start with configuration
              and only build when the business genuinely needs more.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            {spectrum.map((item, i) => (
              <div key={item.label} className="flex w-full flex-col items-center">
                {i > 0 && <ArrowDown className="h-4 w-4 text-ink/20 my-1" />}
                <div className={`w-full max-w-lg rounded-2xl border px-6 py-4 flex items-center justify-between gap-6 ${item.style}`}>
                  <div>
                    <p className="font-display text-base">{item.label}</p>
                    <p className={`mt-0.5 text-xs ${item.style.includes('accent-gradient') ? 'text-white/75' : 'text-muted'}`}>{item.desc}</p>
                  </div>
                  <span className={`flex-shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${item.style.includes('accent-gradient') ? 'border-white/30 text-white' : 'border-ink/10 text-muted bg-white/60'}`}>
                    {['Best', 'ERPNext Extensions', 'Custom Frappe App', 'Productized'][i]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIX CAPABILITIES */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">What we build</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Six capability areas.</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              From lightweight extensions to complete business applications.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {capabilities.map((c, idx) => {
              const Icon = c.icon
              return (
                <motion.div key={c.number}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="rounded-[2rem] border border-ink/10 bg-white p-8">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl accent-gradient text-white shadow-md shadow-iris/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-iris/70">{c.number}</p>
                      <h3 className="font-display text-2xl text-ink">{c.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 font-medium text-ink/80">{c.subtitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-iris/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* REAL BUSINESS PROCESSES */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Proof of approach</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Built around real business processes.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              We don't just develop Frappe features. We turn complex business processes into
              working applications. Here's what that looks like.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((proj) => (
              <div key={proj.name} className="rounded-[2rem] border border-ink/10 bg-white p-8">
                <p className="font-display text-2xl text-ink mb-2">{proj.name}</p>
                <p className="text-sm text-muted leading-relaxed mb-6">{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.steps.map((step, i) => (
                    <span key={step} className="flex items-center gap-1.5">
                      <span className="rounded-full border border-ink/10 bg-mist/40 px-3 py-1 text-xs text-ink/70">{step}</span>
                      {i < proj.steps.length - 1 && <span className="text-iris/40 text-xs">→</span>}
                    </span>
                  ))}
                </div>
                <Link to={proj.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-iris hover:gap-3 transition-all">
                  See how it was built <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Our build method</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Discover → Model → Build → Connect → Prove → Evolve
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Six stages. Each one ensuring the application reflects the real business — not just the initial requirement.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {methodology.map((m, i) => (
              <motion.div key={m.step}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[1.75rem] border border-ink/10 bg-white p-6">
                <p className="font-mono text-xs text-iris/60 mb-3">{String(i + 1).padStart(2, '0')}</p>
                <p className="font-display text-lg text-ink mb-2">{m.step}</p>
                <p className="text-sm text-muted leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FRAPPE */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2.5rem] border border-ink/10 bg-white p-10 md:p-14">
            <p className="text-xs uppercase tracking-[0.22em] text-iris mb-4">Why Frappe</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
              Less foundation-building. More business logic.
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              Frappe already provides the application infrastructure — database models, permissions,
              UI engine, REST APIs, background jobs, realtime services, workflows and deployment
              tooling. That means Nexora can focus engineering effort on what's unique to your
              business: the rules, calculations, workflows and logic that make your operations work.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We don't build today's requirement into tomorrow's limitation. Using modular app
              architecture, clean business logic and upgrade-conscious development, your application
              grows with your business rather than against it.
            </p>
            <div className="rounded-2xl border border-iris/15 bg-iris/5 px-6 py-5 mb-8">
              <p className="font-medium text-ink italic">
                "When your differentiator lives in process, your software cannot be a compromise.
                Frappe gives us the right foundation. We build what your business actually needs on top of it."
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl transition-all">
                Discuss Your Frappe Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/erpnext-customization" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                ERPNext Customization <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] accent-gradient p-12 text-center text-white shadow-2xl shadow-iris/20">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready to build?</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Don't build from scratch.<br />Build from a foundation.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/75 text-lg leading-relaxed">
              Tell us what your business needs. We'll tell you how much of Frappe's foundation you
              can use — and exactly what needs to be built on top.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-iris shadow-lg hover:shadow-xl transition-all">
                Discuss a Custom Frappe App <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/erpnext-consulting" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white hover:bg-white/20 transition-all">
                Start With Consultancy <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
