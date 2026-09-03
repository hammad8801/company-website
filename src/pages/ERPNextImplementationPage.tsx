import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, CheckCircle2, Search, Lightbulb,
  Settings2, Wrench, FlaskConical, Rocket,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

// ── Stage definitions ───────────────────────────────────────────────────────
const stages = [
  {
    number: '01', icon: Search, title: 'Understand',
    subtitle: 'Before we configure anything, we understand how you operate.',
    body: 'We start with the business—not ERPNext. Our team works with the people who actually run the processes to understand every pain point, workaround and reporting gap.',
    bullets: [
      'How leads become customers and orders',
      'How purchasing and approvals work',
      'How inventory moves across locations',
      'How invoices and payments are handled',
      'Where Excel, WhatsApp or manual workarounds exist',
      'What reports leadership currently can\'t get',
    ],
    deliverable: 'A clear picture of your current business processes and the exact problems ERPNext needs to solve.',
  },
  {
    number: '02', icon: Lightbulb, title: 'Design',
    subtitle: 'We turn your existing processes into a better operating model.',
    body: 'Once we understand the business, we map every process into ERPNext—deciding what to keep, improve, automate or build from scratch.',
    bullets: [
      'Company structure, chart of accounts, warehouses',
      'Customer and supplier structure',
      'Approval workflows, roles and permissions',
      'Document flows, notifications and dashboards',
      'Module dependencies and data model',
    ],
    deliverable: 'A written scope: modules, customizations, integrations, data migration plan, and a fixed timeline with named milestones.',
  },
  {
    number: '03', icon: Settings2, title: 'Configure',
    subtitle: 'We build the foundation before writing custom code.',
    body: 'ERPNext is configured around the approved process design before any custom development begins. Configuration first. Customization second.',
    bullets: [
      'Accounts, Sales, Buying, Inventory, CRM',
      'HR, Payroll, Assets, Projects',
      'Warehouses, item groups, price lists',
      'Workflows, permissions, print formats',
      'Standard and custom reports, dashboards',
    ],
    deliverable: 'A fully configured ERPNext environment covering 80–90% of requirements before any custom code is written.',
  },
  {
    number: '04', icon: Wrench, title: 'Build & Connect',
    subtitle: 'When ERPNext needs to do more, we build around it.',
    body: 'Custom extensions are built as a clean layer on top of ERPNext—not tangled into the core—using our Frappe development capability.',
    bullets: [
      'Custom DocTypes, apps and workflows',
      'Server-side automation and scheduled jobs',
      'Custom reports, dashboards and print formats',
      'REST API and third-party integrations',
      'Mobile applications (Android / Flutter)',
      'Website, portal and e-commerce connections',
    ],
    deliverable: 'A maintainable ERPNext ecosystem: standard core + clean custom layer + tested integrations.',
  },
  {
    number: '05', icon: FlaskConical, title: 'Migrate, Validate & Train',
    subtitle: 'Your data. Your people. Your processes. Ready together.',
    body: 'Going live requires data accuracy, tested workflows and a trained team—simultaneously. We address all three before you go live.',
    bullets: [
      'Data: Extract → Clean → Map → Transform → Import → Validate',
      'Testing against real business flows (Lead → Invoice → Payment)',
      'Role-based training around actual workflows',
      'Parallel-run period with reconciliation reports',
    ],
    deliverable: 'Data validated, workflows tested against real scenarios, every user trained on their own job inside ERPNext.',
  },
  {
    number: '06', icon: Rocket, title: 'Go Live & Evolve',
    subtitle: 'Going live isn\'t the finish line.',
    body: 'We plan the transition carefully, support the initial period intensively, and stay on as your implementation partner as your business grows.',
    bullets: [
      'Final data validation, opening balances, user readiness',
      'Production deployment and cutover',
      'Intensive go-live support window',
      'Ongoing: bug fixes, new requirements, upgrades',
      'Automation improvements and reporting expansions',
    ],
    deliverable: 'A live ERPNext system and a partner who stays accountable after launch.',
  },
]

// ── Module categories ───────────────────────────────────────────────────────
const moduleGroups = [
  {
    label: 'Run the Business',
    color: 'text-iris',
    mods: ['Accounting', 'Sales', 'CRM', 'Buying', 'Inventory'],
  },
  {
    label: 'Manage the Workforce',
    color: 'text-violet-600',
    mods: ['HR', 'Payroll', 'Attendance', 'Leave management', 'Employee lifecycle'],
  },
  {
    label: 'Run Operations',
    color: 'text-blue-600',
    mods: ['Projects', 'Manufacturing', 'Asset management', 'Maintenance'],
  },
  {
    label: 'Extend the Business',
    color: 'text-emerald-600',
    mods: ['Custom apps', 'APIs & integrations', 'Mobile apps', 'Portals', 'Website'],
  },
]

// ── Decision tree steps ─────────────────────────────────────────────────────
export const decisions = [
  { q: 'Can ERPNext already do this?', yes: 'Configure it' },
  { q: 'Can the process be improved?', yes: 'Redesign the workflow' },
  { q: 'Can automation solve it?', yes: 'Automate it' },
  { q: 'Is customization justified?', yes: 'Build it' },
]

export function ERPNextImplementationPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
          { label: 'ERPNext Implementation' },
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
              ERPNext, implemented around the way your{' '}
              <span className="text-iris">business actually works.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              From process discovery and system design to customization, migration, training and go-live—we
              build ERPNext around your operations, not the other way around.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl hover:shadow-iris/35 transition-all">
                Start Your ERPNext Journey <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                View Case Studies <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ─────────────────────────────────────────────── */}
      <section className="border-y border-ink/8 bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {['Process-first', 'ERPNext', 'Automation', 'Continuous improvement'].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-6">
                <span className="font-medium text-ink/80">{item}</span>
                {i < arr.length - 1 && <span className="font-bold text-iris text-lg leading-none">×</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ───────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The transformation</p>
            <h2 className="mt-3 font-display text-4xl text-ink">One system. One source of truth.</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Most businesses run on a patchwork of disconnected tools. We replace the patchwork with a single, connected operating system.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Before */}
            <div className="rounded-[2rem] border border-red-100 bg-red-50/40 p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-red-400">Before Nexora</p>
              <div className="grid gap-3">
                {[
                  ['Excel spreadsheets', 'Inventory, pricing, payroll—all in separate files'],
                  ['WhatsApp approvals', 'Purchase orders approved over chat'],
                  ['Separate accounting', 'Manual re-keying into Tally or another system'],
                  ['Disconnected inventory', 'Stock counts don\'t match sales records'],
                  ['Manual month-end', '9 days of archaeology to close the books'],
                  ['No single source of truth', 'Every department has a different number'],
                ].map(([label, desc]) => (
                  <div key={label} className="flex gap-3 rounded-2xl border border-red-100 bg-white/60 px-4 py-3.5">
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-400">✕</span>
                    <div>
                      <p className="text-sm font-medium text-ink/80">{label}</p>
                      <p className="mt-0.5 text-xs text-muted">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* After */}
            <div className="rounded-[2rem] border border-iris/15 bg-iris/3 p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-iris">After Nexora</p>
              {/* Hub visual */}
              <div className="mb-6 rounded-2xl border border-iris/15 bg-white p-4 text-center">
                <div className="mx-auto mb-3 w-fit rounded-2xl accent-gradient px-5 py-2 font-display text-lg font-semibold text-white shadow-md shadow-iris/20">
                  ERPNext
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {['Sales', 'Inventory', 'Accounts', 'Buying', 'HR', 'CRM'].map((m) => (
                    <div key={m} className="rounded-xl border border-iris/15 bg-iris/5 py-1.5 text-center text-xs font-medium text-iris">
                      {m}
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted">One system · Real-time · Audit-ready</p>
              </div>
              <div className="grid gap-3">
                {[
                  ['Real-time visibility', 'Management reports available the moment you need them'],
                  ['Automated workflows', 'Approvals, invoices, notifications happen automatically'],
                  ['Accurate inventory', 'Stock variance under 1% across all locations'],
                  ['2-day month-end close', 'Down from 9 days, with a full audit trail'],
                  ['One source of truth', 'Every team works from the same live data'],
                  ['Built to grow', 'Add modules and custom apps as the business evolves'],
                ].map(([label, desc]) => (
                  <div key={label} className="flex gap-3 rounded-2xl border border-iris/10 bg-white/80 px-4 py-3.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-iris" />
                    <div>
                      <p className="text-sm font-medium text-ink/80">{label}</p>
                      <p className="mt-0.5 text-xs text-muted">{desc}</p>
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
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The methodology</p>
            <h2 className="mt-3 font-display text-4xl text-ink">From Business Process → Working ERP</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">Six stages of transformation. Each one builds on the last.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {stages.map((s, idx) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="rounded-[2rem] border border-ink/10 bg-white p-8"
                >
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
                    <p className="text-xs uppercase tracking-[0.18em] text-iris mb-1">Deliverable</p>
                    <p className="text-sm text-ink/80">{s.deliverable}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT WE IMPLEMENT ────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Scope</p>
            <h2 className="mt-3 font-display text-4xl text-ink">What We Implement</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Every module is configured around your processes. We add only what your business needs.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {moduleGroups.map((g) => (
              <div key={g.label} className="rounded-[2rem] border border-ink/10 bg-white p-6">
                <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${g.color}`}>{g.label}</p>
                <ul className="grid gap-2">
                  {g.mods.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-sm text-ink/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-iris/40 flex-shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Need something ERPNext doesn't provide out of the box?{' '}
            <Link to="/services/frappe-development" className="text-iris hover:underline">
              That's where our Frappe development team comes in →
            </Link>
          </p>
        </div>
      </section>

      /*{/* ── CUSTOMIZATION DECISION TREE ────────────────────────────────────
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Our philosophy</p>
            <h2 className="mt-3 font-display text-4xl text-ink">What happens when we find a problem?</h2>
            <p className="mt-4 text-muted">
              We don't automatically build a customization. Every requirement goes through four questions first.
            </p>
          </div>
          <div className="relative">
            {decisions.map((d, i) => (
              <div key={i} className="relative">
                <div className="rounded-[1.5rem] border border-ink/10 bg-white p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full accent-gradient text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="font-medium text-ink">{d.q}</p>
                  </div>
                  <div className="flex-shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    Yes → {d.yes}
                  </div>
                </div>
                {i < decisions.length - 1 && (
                  <div className="flex justify-center py-2 text-ink/30">
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-xs text-ink/40">No ↓</span>
                      <ArrowDown className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-iris/15 bg-iris/5 p-6 text-center">
            <p className="font-medium text-ink">
              This keeps your ERPNext system powerful without turning it into an unmaintainable pile of custom code.
            </p>
          </div>
        </div>
      </section> */}*/

      {/* ── THREE LAYERS ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Architecture</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Your ERPNext doesn't have to look like everyone else's.</h2>
            <p className="mt-4 text-muted">Three clean layers. Each one maintained independently.</p>
          </div>
          <div className="grid gap-4">
            {[
              {
                layer: 'ERPNext Core',
                sub: 'Standard functionality',
                desc: 'Accounts · Sales · CRM · Buying · Inventory · HR · Manufacturing and more. Untouched, upgradeable, maintained by Frappe.',
                bg: 'bg-mist/40 border-ink/8',
                badge: 'Foundation',
              },
              {
                layer: 'Nexora Configuration',
                sub: 'Tailored to your business',
                desc: 'Workflows · Permissions · Reports · Print formats · Notifications · Dashboards. No code, fully maintainable, reversible.',
                bg: 'bg-violet-50/60 border-violet-100',
                badge: 'Configured',
              },
              {
                layer: 'Nexora Extensions',
                sub: 'What ERPNext can\'t do out of the box',
                desc: 'Custom apps · Integrations · Mobile · APIs · Industry-specific functionality. Built clean, documented, future-proof.',
                bg: 'bg-iris/5 border-iris/15',
                badge: 'Custom Built',
              },
            ].map((l, i) => (
              <motion.div
                key={l.layer}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-[1.75rem] border p-7 ${l.bg}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-xl text-ink">{l.layer}</p>
                    <p className="mt-0.5 text-sm font-medium text-iris">{l.sub}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{l.desc}</p>
                  </div>
                  <span className="flex-shrink-0 rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink/60">
                    {l.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] accent-gradient p-12 text-center text-white shadow-2xl shadow-iris/20">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready to start?</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Let's map your business to ERPNext.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/75 text-lg leading-relaxed">
              We start with understanding your operations—not which modules you want. Book a free assessment and we'll tell you exactly what an implementation would look like for your business.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-iris shadow-lg hover:shadow-xl transition-all"
              >
                Book a Free ERP Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white hover:bg-white/20 transition-all"
              >
                See Our Work <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
