import { ContactLink } from '@/components/ContactLink'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, ArrowDown, Cpu, Zap, RefreshCw,
  CheckCircle2, ArrowUpRight, ShieldCheck, Building2, Calculator,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const pillars = [
  {
    number: '01', icon: Zap, title: 'Process Automation',
    tagline: 'Automate what repeats.',
    subtitle: 'Remove repetitive manual work.',
    body: 'We identify manual tasks that consume team hours without requiring human judgement. Automation isn\'t about replacing people — it\'s about removing unnecessary steps from their workday so they focus on value.',
    bullets: ['Automatic data entry & validation', 'Multi-tier approval workflows', 'Email, SMS & WhatsApp notifications', 'Document & PDF report generation', 'Scheduled background tasks & sync'],
  },
  {
    number: '02', icon: RefreshCw, title: 'System Integration & Workflows',
    tagline: 'Connect what is disconnected.',
    subtitle: 'Make your software talk to each other.',
    body: 'Moving data manually between your CRM, website, accounting, and messaging apps causes delays and human errors. We build multi-system workflows where an action in one tool automatically drives the next step everywhere else.',
    bullets: ['Cross-platform workflow orchestrations', 'CRM ↔ ERPNext ↔ WhatsApp pipelines', 'Real-time webhook & event triggers', 'Automatic status updates across tools', 'Retry-aware, observable data flows'],
  },
  {
    number: '03', icon: Cpu, title: 'Custom Business Software',
    tagline: 'Build what doesn\'t exist.',
    subtitle: 'When existing software stops fitting.',
    body: 'When off-the-shelf software hits its limit, forcing your business into rigid workarounds, we build bespoke systems. We don\'t build custom software just because it\'s custom — we build it when your business case requires it.',
    bullets: ['Internal operational platforms & dashboards', 'Customer & vendor self-service portals', 'Custom ERP & CRM extensions', 'Workflow & compliance applications', 'Bespoke SaaS products & tools'],
  },
]

const whatWeBuild = [
  { label: 'Business Process Automation', desc: 'Workflows, triggers, and scheduled task automation.' },
  { label: 'Custom Business Applications', desc: 'Bespoke software engineered around your operations.' },
  { label: 'Internal Tools & Dashboards', desc: 'Operational views and tools built for your team.' },
  { label: 'Customer & Vendor Portals', desc: 'Self-service web experiences for external stakeholders.' },
  { label: 'Workflow & Approval Systems', desc: 'Multi-stage decision and signing flows.' },
  { label: 'API & System Automation', desc: 'Event-driven logic connecting cloud and local systems.' },
  { label: 'SaaS Products & Platforms', desc: 'Scalable multi-tenant web applications.' },
  { label: 'AI-Assisted Workflows', desc: 'Smart document parsing, categorization, and routing.' },
]

const methodology = [
  { step: 'MAP', desc: 'Understand how work actually happens: people, inputs, decisions, bottlenecks, and manual handoffs.' },
  { step: 'SIMPLIFY', desc: 'Before automating: we ask whether the process should exist in its current form and eliminate clutter.' },
  { step: 'AUTOMATE', desc: 'Automate the repetitive steps using reliable triggers, validation rules, actions, and alerts.' },
  { step: 'BUILD', desc: 'If automation isn\'t enough, build the missing software: portals, dashboards, custom apps, or modules.' },
  { step: 'CONNECT', desc: 'Connect the new workflow seamlessly with ERPNext, Frappe, CRM, web, mobile, and APIs.' },
  { step: 'PROVE', desc: 'Test business rules, edge cases, failure scenarios, retries, structured logging, and recovery paths.' },
  { step: 'EVOLVE', desc: 'Monitor system health, maintain uptime, and continuously add capabilities as your business grows.' },
]

const relatedServices = [
  { label: 'Third-Party Integrations', sub: 'Connect external platforms directly to ERPNext & Frappe', href: '/services/erpnext-integration' },
  { label: 'Frappe Development', sub: 'Engineered custom apps on the open-source Frappe framework', href: '/services/frappe-development' },
  { label: 'Mobile App Development', sub: 'Purpose-built mobile tools for field and floor teams', href: '/services/mobile-apps' },
]

export function AutomationCustomSoftwarePage() {
  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Automation & Custom Software' }]} />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-iris/8 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-violet-300/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-iris">
              Service · Automation & Custom Software
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-4xl">
              Turn the way your business works{' '}
              <span className="text-iris">into software.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              We automate repetitive processes, connect disconnected systems, and build custom
              software for the problems standard off-the-shelf tools can't solve.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-6 py-4 shadow-sm">
              <span className="font-display text-sm font-medium text-ink">We don't start by asking what technology to use.</span>
              <span className="h-4 w-px bg-ink/15" />
              <span className="text-sm text-muted">We start by asking what shouldn't be manual anymore.</span>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <ContactLink className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl transition-all">
                Discuss Your Process <ArrowRight className="h-4 w-4" />
              </ContactLink>
              <Link to="/services/frappe-development" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                Also See: Frappe Development <ChevronRight className="h-4 w-4" />
              </Link>
              <Link to="/services/mobile-apps" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                Also See: Mobile Development <ChevronRight className="h-4 w-4" />
              </Link>
              <Link to="/services/web-development" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                Also See: Web Development <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* METHOD STRIP */}
      <section className="border-y border-ink/8 bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            {['Map', 'Simplify', 'Automate', 'Build', 'Connect', 'Prove', 'Evolve'].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-medium text-ink/80">{item}</span>
                {i < arr.length - 1 && <span className="font-bold text-iris text-lg leading-none">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THE AUTOMATION DECISION */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Nexora Decision</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Not every problem needs custom software.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              When a bottleneck stops your business, we determine the simplest, most effective solution.
              Sometimes it's automation, sometimes integration, and sometimes building something new.
            </p>
          </div>

          {/* Decision visual */}
          <div className="rounded-[2rem] border border-ink/8 bg-white p-8 md:p-10">
            <div className="flex flex-col items-center gap-0 text-sm text-center">
              <div className="rounded-2xl border border-ink/10 bg-mist/40 px-6 py-3 font-medium text-ink">
                Business Bottleneck
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="rounded-2xl border border-iris/15 bg-iris/5 px-6 py-3 text-muted italic text-sm">
                What is causing the friction?
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
                {[
                  { label: 'Manual Work', sub: 'Repetitive tasks', style: 'border-violet-200 bg-violet-50/60 text-violet-800' },
                  { label: 'Disconnected Systems', sub: 'Isolated data', style: 'border-emerald-200 bg-emerald-50/60 text-emerald-800' },
                  { label: 'Missing Software', sub: 'No fitting tool', style: 'border-iris/20 bg-iris/5 text-iris' },
                ].map((c) => (
                  <div key={c.label} className={`rounded-2xl border px-3 py-4 font-medium text-sm ${c.style}`}>
                    <p>{c.label}</p>
                    <p className="mt-1 text-xs opacity-75 font-normal">{c.sub}</p>
                  </div>
                ))}
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
                {[
                  { action: 'AUTOMATE', desc: 'Automate what repeats' },
                  { action: 'INTEGRATE', desc: 'Connect what is split' },
                  { action: 'BUILD', desc: 'Build what doesn\'t exist' },
                ].map((c) => (
                  <div key={c.action} className="rounded-2xl border border-ink/10 bg-white px-3 py-4 shadow-sm">
                    <p className="text-xs font-mono font-bold text-ink">{c.action}</p>
                    <p className="mt-1 text-xs text-muted">{c.desc}</p>
                  </div>
                ))}
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="w-full max-w-lg rounded-2xl border border-iris/25 bg-iris/5 px-6 py-4 shadow-sm">
                <p className="text-sm font-medium text-iris">One Connected, Frictionless Workflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Three core capabilities</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Automate · Connect · Build
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              We apply the right capability to solve the specific operational bottleneck.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((p, idx) => {
              const Icon = p.icon
              return (
                <motion.div key={p.number}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-[2rem] border border-ink/10 bg-white p-8 flex flex-col">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl accent-gradient text-white shadow-md shadow-iris/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-iris/70">{p.number}</p>
                      <h3 className="font-display text-2xl text-ink">{p.title}</h3>
                    </div>
                  </div>
                  <p className="font-medium text-iris text-sm mb-2">{p.tagline}</p>
                  <p className="text-sm font-medium text-ink/80 mb-3">{p.subtitle}</p>
                  <p className="text-sm leading-relaxed text-muted mb-6 flex-1">{p.body}</p>
                  <ul className="grid gap-2 mt-auto">
                    {p.bullets.map((b) => (
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

      {/* BEFORE / AFTER TRANSFORMATION */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Nexora Transformation</p>
            <h2 className="mt-3 font-display text-4xl text-ink">From manual work to a working system.</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              We turn fragmented spreadsheet-and-messaging routines into cohesive automated software.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-stretch">
            {/* BEFORE */}
            <div className="rounded-[2rem] border border-red-200 bg-red-50/30 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-600 mb-6">
                  Before Nexora
                </span>
                <p className="font-display text-2xl text-ink mb-4">Disconnected Process</p>
                <div className="space-y-3">
                  {[
                    'Spreadsheets with multiple versions',
                    'Email chains for simple approvals',
                    'WhatsApp messages for updates',
                    'Manual re-entry between tools',
                    'Human memory for follow-ups',
                  ].map((step) => (
                    <div key={step} className="flex items-center gap-3 rounded-xl border border-red-100 bg-white p-3 text-sm text-ink/75">
                      <span className="h-2 w-2 rounded-full bg-red-400 flex-shrink-0" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-xs text-red-600 font-medium italic">Outcome: High error rate, delayed reporting, burnout.</p>
            </div>

            {/* NEXORA ENGINE */}
            <div className="rounded-[2rem] border border-iris/20 bg-iris/5 p-8 flex flex-col justify-between text-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-iris/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-iris mb-6">
                  The Nexora Solution
                </span>
                <p className="font-display text-2xl text-ink mb-4">Automated Logic</p>
                <div className="flex flex-col items-center gap-2 my-4 text-xs">
                  <div className="w-full rounded-xl border border-iris/15 bg-white p-3 font-medium text-ink">1. Trigger Event</div>
                  <ArrowDown className="h-4 w-4 text-iris/40" />
                  <div className="w-full rounded-xl border border-iris/15 bg-white p-3 font-medium text-ink">2. Automation Rules</div>
                  <ArrowDown className="h-4 w-4 text-iris/40" />
                  <div className="w-full rounded-xl border border-iris/15 bg-white p-3 font-medium text-ink">3. Business System Update</div>
                  <ArrowDown className="h-4 w-4 text-iris/40" />
                  <div className="w-full rounded-xl border border-iris/15 bg-white p-3 font-medium text-ink">4. Automated Alerts & Logs</div>
                </div>
              </div>
              <p className="mt-6 text-xs text-iris font-medium italic">Core: Built with retries, validation, & audit logs.</p>
            </div>

            {/* AFTER */}
            <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/30 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-6">
                  After Nexora
                </span>
                <p className="font-display text-2xl text-ink mb-4">Working System</p>
                <div className="space-y-3">
                  {[
                    'One single source of truth',
                    'Automated multi-stage approvals',
                    'Instant alerts & notifications',
                    'Zero manual re-keying of data',
                    'Real-time executive dashboards',
                  ].map((step) => (
                    <div key={step} className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white p-3 text-sm text-ink/75">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-xs text-emerald-700 font-medium italic">Outcome: Zero data loss, fast execution, full audit trail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF POINTS: REAL NEXORA PRODUCTS */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Real-World Proof Points</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Custom business systems we've built.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              We don't just write code — we turn complex spreadsheet routines and manual operations into purpose-built software.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Case 1: Export Price Calc */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-ink/10 bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700 font-bold">
                  <Calculator className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">Export Price Calc</h3>
                  <p className="text-xs text-muted">Spreadsheet Routine → Custom ERPNext Software</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Transformed a complex, fragmented multi-sheet Excel quotation process into a structured Frappe/ERPNext application.
              </p>
              <div className="rounded-xl border border-ink/8 bg-mist/30 p-4 mb-4 text-xs font-mono text-ink/80">
                Costing → Dimensioning → Packaging → Freight → FOB/CIF → Margin Approval → Sales Order
              </div>
              <Link to="/products/export-price-calculation" className="inline-flex items-center gap-1 text-xs font-semibold text-iris hover:gap-2 transition-all">
                Explore Export Price Calc <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* Case 2: Lease Management */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-[2rem] border border-ink/10 bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-bold">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink">Lease Management System</h3>
                  <p className="text-xs text-muted">Property Operations → Automated Rental Lifecycle</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Built an automated property, lease contract, recurring invoice, post-dated cheque (PDC), and accounting lifecycle system.
              </p>
              <div className="rounded-xl border border-ink/8 bg-mist/30 p-4 mb-4 text-xs font-mono text-ink/80">
                Property → Units → Lease Contract → Payment Schedule → PDCs → Invoices → Renewals
              </div>
              <Link to="/products/leasing" className="inline-flex items-center gap-1 text-xs font-semibold text-iris hover:gap-2 transition-all">
                Explore Lease Management <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES & QUALITY STANDARD */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">What we build</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Capability overview.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeBuild.map((item, idx) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-ink/10 bg-white p-5 flex flex-col justify-between">
                <div>
                  <CheckCircle2 className="h-5 w-5 text-iris/70 mb-3" />
                  <p className="font-display text-base text-ink mb-1">{item.label}</p>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Design for failure principle */}
          <div className="mt-10 rounded-[2rem] border border-amber-200 bg-amber-50/40 p-8 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-3 py-1 text-xs font-semibold text-amber-800 mb-3">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-600" /> Engineering Principle
            </div>
            <p className="font-display text-2xl text-ink mb-2">Design for failure, not just success.</p>
            <p className="text-sm text-muted leading-relaxed">
              An automation that works only when everything goes right is an incident waiting to happen.
              We build automatic retries, data validation, structured execution logs, fail-safe fallbacks,
              and instant alert channels directly into every system.
            </p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">How we work</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Map → Simplify → Automate → Build → Connect → Prove → Evolve
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Seven structured steps to turn chaotic processes into dependable business software.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* RELATED SERVICES */}
      <section className="px-6 md:px-10 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.22em] text-iris mb-6">Part of a broader system</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedServices.map((item) => (
              <Link key={item.href} to={item.href}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-ink/10 bg-white px-6 py-5 hover:border-iris/20 hover:bg-mist/40 transition-all">
                <div>
                  <p className="font-medium text-ink group-hover:text-iris transition-colors">{item.label}</p>
                  <p className="mt-1 text-xs text-muted">{item.sub}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-ink/30 group-hover:text-iris transition-colors mt-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] accent-gradient p-12 text-center text-white shadow-2xl shadow-iris/20">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready to simplify?</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Tell us where your process gets stuck.<br />We'll turn it into a working system.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/75 text-lg leading-relaxed">
              Automate what repeats. Connect what is disconnected. Build what doesn't exist.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ContactLink className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-iris shadow-lg hover:shadow-xl transition-all">
                Discuss Your Process <ArrowRight className="h-4 w-4" />
              </ContactLink>
              <Link to="/services/erpnext-integration" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white hover:bg-white/20 transition-all">
                See: Third-Party Integrations <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
