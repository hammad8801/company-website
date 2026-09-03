import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, ArrowDown,
  Eye, Search, Layers, SlidersHorizontal, Map, CheckCircle2,
  FileText, Microscope, Lightbulb, Settings2, Network, BarChart3, Route, Coins,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

// ── Framework stages ─────────────────────────────────────────────────────────
const stages = [
  {
    number: '01', icon: Eye, title: 'Understand',
    subtitle: 'How does your business actually work?',
    body: 'We sit with the people who operate the business — not just management. We study sales, purchasing, inventory, accounting, approvals and reporting. But more importantly, we look for the workarounds people actually use. That\'s where ERP problems are hiding.',
    bullets: [
      'Sales, purchasing, inventory and accounting flows',
      'Approval hierarchies and communication channels',
      'Existing software, Excel workflows and manual processes',
      'Real pain points — not the official process, the actual one',
      'Reporting gaps that leadership can\'t currently answer',
    ],
    note: 'We don\'t just document the official process. We find the gap between how work is supposed to happen and how it actually happens.',
  },
  {
    number: '02', icon: Search, title: 'Assess',
    subtitle: 'Where does ERPNext fit — and where doesn\'t it?',
    body: 'Every business requirement gets classified against ERPNext\'s actual capabilities. This is where we give honest, direct recommendations rather than promising that ERPNext can do everything.',
    bullets: [
      '🟢 FIT — ERPNext handles it → Configure',
      '🟡 IMPROVE — Process can be simplified → Redesign',
      '🔵 AUTOMATE — Valid but manual → Automate',
      '🟣 CUSTOMIZE — ERPNext can\'t handle it → Controlled customization',
      '🟠 BUILD — Larger business capability → Custom Frappe application',
    ],
    note: 'This classification prevents the two most common ERP failures: customizing what should be configured, and configuring what genuinely needs custom development.',
  },
  {
    number: '03', icon: Layers, title: 'Design',
    subtitle: 'Design the ERP around the business — not the other way around.',
    body: 'Once we understand the gaps, we design the future state. ERP structure, process flows, control logic, and reporting — all designed around the actual business, not around ERPNext\'s module list.',
    bullets: [
      'ERP structure: companies, branches, warehouses, cost centers',
      'Process design: sales, purchase, inventory, manufacturing, accounting flows',
      'Approval hierarchy and permission structure',
      'Business rules, notifications and restrictions',
      'Reporting design: what decisions does management need to make?',
    ],
    note: 'Instead of "What reports does ERPNext have?" we ask "What decisions does management need to make?" — then work backwards to the information required.',
  },
  {
    number: '04', icon: SlidersHorizontal, title: 'Prioritize',
    subtitle: 'Not everything should be built on Day 1.',
    body: 'One of the most common ERP failures is trying to implement everything before anyone has started using the system. We divide requirements into clear priority tiers so your team gets to a working system fast — and improves from there.',
    bullets: [
      '🔴 Critical — required for the business to operate at go-live',
      '🟠 Important — significant improvement, not a go-live blocker',
      '🟡 Valuable — useful optimization for Phase 2',
      '⚪ Future — introduce after adoption is stable',
    ],
    note: 'Phased delivery is not cutting corners. It\'s how ERP projects actually succeed.',
  },
  {
    number: '05', icon: Map, title: 'Plan',
    subtitle: 'A concrete roadmap — not a vague timeline.',
    body: 'We produce a detailed implementation plan covering every dimension of the project. Not "implementation takes X months" — but a named, sequenced, scoped roadmap you can hold us to.',
    bullets: [
      'Modules required and their dependencies',
      'Exact scope: what\'s in, what\'s out',
      'Customization and automation requirements',
      'Integration map for external systems',
      'Data migration plan and reconciliation approach',
      'Training plan by role and department',
      'Testing scenarios based on real business flows',
      'Phased rollout sequence and milestones',
    ],
    note: 'This roadmap becomes the foundation of your implementation contract — so there are no scope surprises later.',
  },
  {
    number: '06', icon: CheckCircle2, title: 'Decide',
    subtitle: 'We tell you what we honestly recommend — even when the answer isn\'t "build more."',
    body: 'At the end of consultancy, you receive a clear recommendation. Not a sales pitch for the largest possible project. An honest assessment of what ERPNext can do for your business.',
    bullets: [
      'ERPNext is a good fit → Proceed to implementation',
      'ERPNext fits with defined customization → Proceed with strategy',
      'ERPNext is not currently the right fit → We tell you why',
    ],
    note: 'Our job is to determine whether ERPNext is the right solution for your business — and if it is, how to implement it correctly. Not to sell you the largest engagement.',
  },
]

// ── Deliverables ─────────────────────────────────────────────────────────────
const deliverables = [
  { icon: FileText,   label: '01 — Business Process Map',         desc: 'How your business operates today — documented clearly, including the workarounds.' },
  { icon: Microscope, label: '02 — ERPNext Fit & Gap Analysis',   desc: 'What ERPNext handles, what it doesn\'t, and what business processes should change.' },
  { icon: Lightbulb,  label: '03 — Solution Blueprint',           desc: 'How ERPNext should be structured for your company: modules, flows, hierarchy.' },
  { icon: Settings2,  label: '04 — Customization & Automation Plan', desc: 'What should be configured, automated, customized, or built as a separate application.' },
  { icon: Network,    label: '05 — Integration Map',              desc: 'Which external systems need to communicate with ERPNext and how.' },
  { icon: BarChart3,  label: '06 — Reporting & KPI Plan',         desc: 'What management and each department need to see — designed around decisions, not data.' },
  { icon: Route,      label: '07 — Implementation Roadmap',       desc: 'Modules, phases, dependencies, priorities and a realistic sequence.' },
  { icon: Coins,      label: '08 — Scope & Investment Estimate',  desc: 'A realistic, itemised basis for implementation planning — not a ballpark guess.' },
]

// ── Service comparison ───────────────────────────────────────────────────────
const services = [
  {
    name: 'ERPNext Consultancy',
    href: '/services/erpnext-consulting',
    question: 'What should we build — and why?',
    steps: ['Understand', 'Assess', 'Design', 'Prioritize', 'Plan', 'Decide'],
    current: true,
  },
  {
    name: 'ERPNext Implementation',
    href: '/services/erpnext-implementation',
    question: 'How do we deploy it successfully?',
    steps: ['Understand', 'Design', 'Configure', 'Build', 'Migrate', 'Go Live'],
    current: false,
  },
  {
    name: 'ERPNext Customization',
    href: '/services/erpnext-customization',
    question: 'How do we extend ERPNext where standard functionality isn\'t enough?',
    steps: ['Configure', 'Redesign', 'Automate', 'Customize', 'Build'],
    current: false,
  },
]

export function ERPNextConsultingPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
          { label: 'ERPNext Consulting' },
        ]}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-iris/8 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-violet-300/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-iris">
              Service · ERPNext
            </motion.div>
            <motion.h1 variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-4xl">
              Before we build your ERP,{' '}
              <span className="text-iris">we understand your business.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              ERPNext is powerful — but implementing the wrong ERP structure can make a good
              business process harder instead of easier. Nexora consultancy helps you understand
              where ERPNext fits, where your processes should change, and what your implementation
              should look like before development begins.
            </motion.p>
            <motion.div variants={fadeUp}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-6 py-4">
              <span className="font-display text-base font-medium text-ink">Don't start with software.</span>
              <span className="h-4 w-px bg-ink/15" />
              <span className="text-sm text-muted">Start with clarity.</span>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl hover:shadow-iris/35 transition-all">
                Let's Understand Your Business <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/process"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                Our Full Process <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ─────────────────────────────────────────────── */}
      <section className="border-y border-ink/8 bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {['Understand first', 'Design intelligently', 'Build purposefully', 'Honest recommendations'].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-6">
                  <span className="font-medium text-ink/80">{item}</span>
                  {i < arr.length - 1 && <span className="font-bold text-iris text-lg leading-none">×</span>}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── "WE DON'T START WITH MODULES" ────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-iris">Our starting point</p>
              <h2 className="mt-3 font-display text-4xl text-ink">
                We don't start with ERPNext modules.
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                Most ERP consultants open ERPNext and walk you through modules. We do the opposite.
                Only after we understand the business do we decide which modules, configurations,
                customizations and integrations are actually required.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                The real consulting challenge isn't knowing ERPNext — it's understanding the gap
                between how work is <em>supposed</em> to happen and how it <em>actually</em> happens.
                That's where ERP projects fail.
              </p>
            </div>

            {/* Visual flow */}
            <div className="rounded-[2rem] border border-ink/8 bg-white p-8">
              <div className="flex flex-col items-center gap-0 text-center text-sm">
                {[
                  { label: 'Your Business', style: 'border-iris/25 bg-iris/5 text-iris font-display text-base' },
                  { label: 'Your People', style: 'border-ink/10 bg-white text-ink/80' },
                  { label: 'Your Processes', style: 'border-ink/10 bg-white text-ink/80' },
                  { label: 'Your Problems', style: 'border-red-100 bg-red-50/60 text-red-600' },
                  { label: 'Your Goals', style: 'border-ink/10 bg-white text-ink/80' },
                  { label: 'ERPNext Fit', style: 'border-violet-200 bg-violet-50 text-violet-700' },
                  { label: 'Solution Design', style: 'border-violet-200 bg-violet-50 text-violet-700' },
                  { label: 'Implementation Roadmap', style: 'border-iris/20 accent-gradient text-white font-semibold shadow-md shadow-iris/20' },
                ].map((item, i) => (
                  <div key={item.label} className="flex flex-col items-center w-full">
                    {i > 0 && <ArrowDown className="h-4 w-4 text-ink/25 my-1.5" />}
                    <div className={`w-full max-w-xs rounded-2xl border px-5 py-3 ${item.style}`}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 STAGES ─────────────────────────────────────────────────────── */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The framework</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Understand → Assess → Design → Prioritize → Plan → Decide
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Six structured stages. Each one produces a real output. No vague "consulting hours."
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {stages.map((s, idx) => {
              const Icon = s.icon
              return (
                <motion.div key={s.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="rounded-[2rem] border border-ink/10 bg-white p-8">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl accent-gradient text-white shadow-md shadow-iris/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-iris/70">{s.number}</p>
                      <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 font-medium text-ink/80">{s.subtitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                  <ul className="mt-5 grid gap-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink/75">
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-iris" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border border-iris/15 bg-iris/4 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-iris mb-1">Key principle</p>
                    <p className="text-sm italic text-ink/75">{s.note}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">What you receive</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Not vague advice. Actual deliverables.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              At the end of Nexora consultancy, you have eight concrete documents. Each one feeds
              directly into the implementation that follows.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((d, idx) => {
              const Icon = d.icon
              return (
                <motion.div key={d.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="rounded-[2rem] border border-ink/10 bg-white p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-iris/8 text-iris mb-4">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-iris/70 mb-1">{d.label.split('—')[0].trim()}</p>
                  <p className="font-display text-base text-ink mb-2">{d.label.split('—')[1]?.trim()}</p>
                  <p className="text-sm leading-relaxed text-muted">{d.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── THE REAL/OFFICIAL GAP ─────────────────────────────────────────── */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The consulting problem</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              The gap between how work should happen and how it does.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              This is where most ERP implementations fail. Not because ERPNext isn't capable —
              but because the consultants never uncovered the real process.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Official */}
            <div className="rounded-[2rem] border border-ink/10 bg-white p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-muted">The official process</p>
              <div className="flex flex-col gap-2">
                {['Customer', 'Quotation', 'Sales Order', 'Delivery Note', 'Invoice', 'Payment'].map((step, i, arr) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className="w-full rounded-2xl border border-ink/10 bg-mist/40 px-4 py-2.5 text-sm text-center font-medium text-ink/70">
                      {step}
                    </div>
                    {i < arr.length - 1 && <ArrowDown className="h-4 w-4 text-ink/20 my-1" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Actual */}
            <div className="rounded-[2rem] border border-red-100 bg-red-50/30 p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-red-400">What actually happens</p>
              <div className="flex flex-col gap-2">
                {[
                  'Customer call / WhatsApp',
                  'Salesperson → Excel sheet',
                  'Manager approval via WhatsApp',
                  'Re-keyed into ERPNext (maybe)',
                  'Delivery confirmed verbally',
                  'Accounts reconciles end of week',
                ].map((step, i, arr) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className="w-full rounded-2xl border border-red-100 bg-white/80 px-4 py-2.5 text-sm text-center text-red-700">
                      {step}
                    </div>
                    {i < arr.length - 1 && <ArrowDown className="h-4 w-4 text-red-200 my-1" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-iris/15 bg-iris/5 p-7 text-center">
            <p className="font-display text-xl text-ink mb-2">
              Our job is to uncover that gap — then design the bridge.
            </p>
            <p className="text-muted text-sm max-w-xl mx-auto">
              Current reality → Business problem → Better process → ERPNext solution → Automation
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE ECOSYSTEM ────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The full picture</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Three services. One coherent journey.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Consultancy answers what to build. Implementation builds it. Customization extends it.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {services.map((svc, i) => (
              <motion.div key={svc.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-[2rem] border p-7 ${svc.current ? 'border-iris/25 bg-iris/5' : 'border-ink/10 bg-white'}`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {svc.current && (
                        <span className="rounded-full accent-gradient px-3 py-0.5 text-xs font-medium text-white">
                          You are here
                        </span>
                      )}
                      <p className="font-display text-xl text-ink">{svc.name}</p>
                    </div>
                    <p className="text-sm text-iris font-medium mb-3">{svc.question}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.steps.map((step, si) => (
                        <span key={step} className="flex items-center gap-1.5">
                          <span className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink/70">
                            {step}
                          </span>
                          {si < svc.steps.length - 1 && (
                            <ChevronRight className="h-3 w-3 text-ink/25" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  {!svc.current && (
                    <Link to={svc.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-medium text-ink hover:bg-mist transition-all flex-shrink-0">
                      View service <ChevronRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrow between consultancy → implementation */}
          <div className="mt-4 text-center text-sm text-muted">
            Consultancy feeds directly into Implementation. The deliverables become the brief.
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] accent-gradient p-12 text-center text-white shadow-2xl shadow-iris/20">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Start here</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              The right ERP isn't about features.<br />It's about fit.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/75 text-lg leading-relaxed">
              We don't sell ERPNext first. We sell clarity first — then use ERPNext to execute
              the strategy that clarity reveals. Let's start by understanding your business.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-iris shadow-lg hover:shadow-xl transition-all">
                Let's Understand Your Business <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/erpnext-implementation"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white hover:bg-white/20 transition-all">
                See: Implementation <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
