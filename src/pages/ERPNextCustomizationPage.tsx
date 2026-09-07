import { ContactLink } from '@/components/ContactLink'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight,
  ChevronRight,
  ArrowDown,
  CheckCircle2,
  FileCode2,
  GitBranch,
  Zap,
  BarChart3,
  Puzzle,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

// ── Customization capability areas ───────────────────────────────────────────
const capabilities = [
  {
    number: '01',
    icon: FileCode2,
    title: 'Forms & Data',
    subtitle: 'Capture the information your business actually needs.',
    body: 'Standard ERPNext forms are built for the majority. Your business has specifics. We extend the data model cleanly—adding fields, tables and DocTypes without touching the ERPNext core.',
    bullets: [
      'Custom fields and field groups',
      'Custom DocTypes and child tables',
      'Conditional fields and validation rules',
      'Role-based field visibility',
      'Custom naming logic and series',
      'Form layouts and section ordering',
    ],
    example: {
      label: 'Example',
      text: 'Your sales team needs project-specific margin and approval information on a Quotation that ERPNext doesn\'t capture by default. We add it without changing the standard sales flow.',
    },
  },
  {
    number: '02',
    icon: GitBranch,
    title: 'Business Rules & Workflows',
    subtitle: 'Turn your company\'s approval process into something ERPNext can enforce.',
    body: 'Instead of employees remembering who needs to approve what, ERPNext becomes the process. Multi-level, conditional, department-routed workflows with full audit trails.',
    bullets: [
      'Multi-level and conditional approvals',
      'Department-based routing and escalations',
      'Role-based actions and restrictions',
      'Status transitions and lifecycle gates',
      'Automated notifications at each stage',
      'Approval deadline enforcement',
    ],
    example: {
      label: 'Example',
      text: 'Purchase Request → Department Head → Finance Manager → Director → Purchase Order. ERPNext routes, notifies and escalates automatically.',
    },
  },
  {
    number: '03',
    icon: Zap,
    title: 'Automation',
    subtitle: 'Remove repetitive work from your team\'s day.',
    body: 'This is where customization moves into genuine business automation. Scheduled tasks, cross-module triggers, and smart document creation that runs itself—correctly, every time.',
    bullets: [
      'Automatic document creation triggers',
      'Scheduled and recurring operations',
      'Cross-module automation chains',
      'Stock-level triggered purchase workflows',
      'Follow-up and reminder automation',
      'Business-rule driven status updates',
    ],
    example: {
      label: 'Example flow',
      text: 'Stock falls below reorder level → ERPNext identifies shortage → Purchase workflow triggered → Approval requested → Purchase Order created.',
    },
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Reports & Decision Systems',
    subtitle: 'We don\'t just show you ERPNext data. We turn it into information your team can act on.',
    body: 'Generic reports show everything. Decision systems show the right person the right number at the right time. We build reports around roles, not around tables.',
    bullets: [
      'Management: Revenue, profitability, outstanding receivables, KPIs',
      'Operations: Stock movement, pending orders, delivery performance',
      'Finance: Receivables, payables, cash flow, tax visibility',
      'Sales: Pipeline, conversion, salesperson performance',
      'Custom dashboards per department or role',
      'Scheduled report delivery',
    ],
    example: {
      label: 'Distinction',
      text: 'Anyone can pull an ERPNext report. We design which numbers a CFO, a warehouse manager or a sales director needs to make a decision — and build that view.',
    },
  },
  {
    number: '05',
    icon: Puzzle,
    title: 'Custom Applications',
    subtitle: 'When a customization grows beyond a few fields, it deserves to become an application.',
    body: 'Piling custom code onto ERPNext creates fragility. When your requirement is large enough, we build a proper Frappe application — clean, documented, independently maintained.',
    bullets: [
      'Custom modules with their own DocTypes',
      'Custom business logic and lifecycle hooks',
      'Customer and vendor portals',
      'Specialized industry-specific workflows',
      'REST API endpoints and webhooks',
      'Integration with external platforms',
    ],
    example: {
      label: 'Distinction',
      text: 'We know when a customization should remain a customization — and when it deserves to become an application. That distinction is what keeps your system maintainable.',
    },
  },
]

// ── Decision tree ────────────────────────────────────────────────────────────
const decisions = [
  {
    number: '01',
    question: 'Can ERPNext already do this?',
    yes: 'Configure it',
    yesColor: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  },
  {
    number: '02',
    question: 'Can the existing process be improved?',
    yes: 'Redesign the workflow',
    yesColor: 'bg-blue-50 border-blue-200 text-blue-700',
  },
  {
    number: '03',
    question: 'Can automation remove the manual work?',
    yes: 'Automate it',
    yesColor: 'bg-violet-50 border-violet-200 text-violet-700',
  },
  {
    number: '04',
    question: 'Does the business genuinely need new functionality?',
    yes: 'Build it right',
    yesColor: 'bg-iris/8 border-iris/20 text-iris',
  },
]

// ── Architecture layers ──────────────────────────────────────────────────────
const layers = [
  {
    name: 'ERPNext Core',
    sub: 'Standard functionality — untouched',
    desc: 'Accounts · Sales · CRM · Buying · Inventory · HR · Manufacturing and more. Maintained by Frappe, upgradeable without breaking anything above.',
    bg: 'bg-mist/40 border-ink/8',
    badge: 'Foundation',
  },
  {
    name: 'Nexora Configuration',
    sub: 'Your processes — no code required',
    desc: 'Workflows · Permissions · Custom fields · Reports · Print formats · Notifications · Dashboards. Fully maintainable, reversible, upgrade-safe.',
    bg: 'bg-violet-50/60 border-violet-100',
    badge: 'Configured',
  },
  {
    name: 'Nexora Extensions',
    sub: 'What ERPNext can\'t do out of the box',
    desc: 'Custom Frappe apps · Integrations · Mobile apps · APIs · Industry-specific functionality. Built clean, documented, future-proof.',
    bg: 'bg-iris/5 border-iris/15',
    badge: 'Custom Built',
  },
]

export function ERPNextCustomizationPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
          { label: 'ERPNext Customization' },
        ]}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-violet-300/10 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-iris/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-iris"
            >
              Service · ERPNext
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-4xl"
            >
              ERPNext should adapt to your business.{' '}
              <span className="text-iris">Not the other way around.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              When standard ERPNext isn't enough, we extend it around the way your business actually
              works — with purposeful customization, automation and workflows designed to stay
              maintainable as your ERP evolves.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-6 py-4"
            >
              <span className="font-display text-base font-medium text-ink">Configure first.</span>
              <span className="h-4 w-px bg-ink/15" />
              <span className="text-sm text-muted">Customize with purpose.</span>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <ContactLink
                className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl hover:shadow-iris/35 transition-all"
              >
                Discuss Your Customization <ArrowRight className="h-4 w-4" />
              </ContactLink>
              <Link
                to="/services/erpnext-implementation"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all"
              >
                View Implementation Service <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ─────────────────────────────────────────────── */}
      <section className="border-y border-ink/8 bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {['Configure first', 'Purposeful customization', 'Upgrade-safe', 'Business-outcome driven'].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-6">
                  <span className="font-medium text-ink/80">{item}</span>
                  {i < arr.length - 1 && (
                    <span className="font-bold text-iris text-lg leading-none">×</span>
                  )}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── DECISION TREE ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Nexora Principle</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              The best customization is sometimes no customization at all.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              We don't build a customization just because you asked for one. Every requirement goes
              through four questions first. The answer determines the approach.
            </p>
          </div>

          {/* Visual flow */}
          <div className="mb-8 rounded-[2rem] border border-ink/8 bg-white p-8">
            <div className="flex flex-col items-center gap-0 text-center">
              {/* Requirement box */}
              <div className="rounded-2xl border-2 border-iris/25 bg-iris/5 px-8 py-4 font-display text-lg text-ink">
                Business Requirement
              </div>

              {decisions.map((d, i) => (
                <div key={i} className="flex w-full flex-col items-center">
                  {/* Arrow down */}
                  <div className="flex flex-col items-center py-3 text-ink/30">
                    <ArrowDown className="h-5 w-5" />
                  </div>

                  {/* Question + YES branch */}
                  <div className="flex w-full max-w-lg items-center gap-4">
                    <div className="flex-1 rounded-2xl border border-ink/10 bg-white px-5 py-3.5 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.18em] text-iris/60 mb-1">{d.number}</p>
                      <p className="text-sm font-medium text-ink">{d.question}</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs text-ink/40">YES</span>
                      <span className="text-ink/30">→</span>
                    </div>
                    <div className={`rounded-2xl border px-4 py-2.5 text-sm font-semibold ${d.yesColor}`}>
                      {d.yes}
                    </div>
                  </div>

                  {/* "No" label before next arrow */}
                  {i < decisions.length - 1 && (
                    <div className="mt-1 text-xs font-medium text-ink/40">NO ↓</div>
                  )}
                </div>
              ))}

              {/* Final outcome */}
              <div className="mt-3 flex flex-col items-center gap-2">
                <ArrowDown className="h-5 w-5 text-ink/30" />
                <div className="rounded-2xl accent-gradient px-8 py-3 font-display text-base font-semibold text-white shadow-lg shadow-iris/20">
                  Build It Right
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-iris/15 bg-iris/5 p-6 text-center">
            <p className="font-medium text-ink">
              This keeps your ERPNext system powerful, maintainable, and ready for the next version—
              without becoming an unmaintainable pile of patches.
            </p>
          </div>
        </div>
      </section>

      {/* ── CAPABILITY AREAS ─────────────────────────────────────────────── */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">What we customize</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Make ERPNext work the way your team works.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Five capability areas. Each organized around business outcomes, not development tasks.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon
              return (
                <motion.div
                  key={cap.number}
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
                      <p className="text-xs uppercase tracking-[0.22em] text-iris/70">{cap.number}</p>
                      <h3 className="font-display text-2xl text-ink">{cap.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 font-medium text-ink/80">{cap.subtitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cap.body}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {cap.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-iris/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50/60 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-violet-500 mb-1">
                      {cap.example.label}
                    </p>
                    <p className="text-sm text-ink/75 italic">{cap.example.text}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Note card: Integrations are separate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="rounded-[2rem] border border-dashed border-ink/15 bg-white/50 p-8 flex flex-col justify-center"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-muted mb-4">A note on scope</p>
              <h3 className="font-display text-xl text-ink mb-3">
                Customization vs. Integration — they're not the same thing.
              </h3>
              <div className="grid gap-4">
                {[
                  {
                    label: 'ERPNext Customization',
                    desc: 'Changes how ERPNext works internally — forms, workflows, automation, reports, apps.',
                    color: 'border-iris/20 bg-iris/5 text-iris',
                  },
                  {
                    label: 'Third-Party Integration',
                    desc: 'Connects ERPNext with external systems — WhatsApp, Shopify, payment gateways, biometrics.',
                    color: 'border-violet-200 bg-violet-50 text-violet-600',
                  },
                ].map((item) => (
                  <div key={item.label} className={`rounded-2xl border px-4 py-3 ${item.color}`}>
                    <p className="text-xs font-semibold">{item.label}</p>
                    <p className="mt-1 text-xs text-ink/60">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted">
                We keep these architecturally separate so both remain maintainable independently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THREE LAYER ARCHITECTURE ──────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Architecture</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Built for today. Prepared for the next ERPNext version.
            </h2>
            <p className="mt-4 text-muted">
              We follow a strict separation principle. Every customization sits in its own clean
              layer — so ERPNext upgrades don't break your custom work.
            </p>
          </div>

          <div className="grid gap-4">
            {layers.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`rounded-[1.75rem] border p-7 ${l.bg}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-xl text-ink">{l.name}</p>
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

          <div className="mt-6 rounded-[1.5rem] border border-ink/8 bg-white p-6 text-center">
            <p className="text-sm font-medium text-ink">
              We don't solve today's problem by creating tomorrow's technical debt.
            </p>
            <p className="mt-1 text-sm text-muted">
              Every customization is documented, version-controlled, and built to survive upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* ── UPGRADE-SAFE COMMITMENT ───────────────────────────────────────── */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Our commitment</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Customization that ages well.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Most ERPNext customization debt is created when teams prioritize speed over
              maintainability. We make different trade-offs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'No core hacks',
                desc: 'We never modify ERPNext\'s core Python or JavaScript files. All custom logic lives in separate Frappe apps or configuration.',
                icon: '🔒',
              },
              {
                title: 'Documented always',
                desc: 'Every customization is written up — what it does, why it exists, how to change it. So you\'re never dependent on us to understand your own system.',
                icon: '📄',
              },
              {
                title: 'Version controlled',
                desc: 'All custom apps and configuration exports live in Git. You own the code. We can hand it over completely if you ever need to.',
                icon: '🔀',
              },
              {
                title: 'Upgrade tested',
                desc: 'Before each ERPNext upgrade, we test your customizations against the new version in a staging environment. No surprises on go-live day.',
                icon: '✅',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-ink/10 bg-white p-7"
              >
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] accent-gradient p-12 text-center text-white shadow-2xl shadow-iris/20">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready to talk?</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Let's figure out what ERPNext actually needs to do for your business.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/75 text-lg leading-relaxed">
              We start by understanding your process — not by estimating a feature list. Tell us
              what's slowing your team down and we'll tell you whether it should be configured,
              automated, or built.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ContactLink
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-iris shadow-lg hover:shadow-xl transition-all"
              >
                Start the Conversation <ArrowRight className="h-4 w-4" />
              </ContactLink>
              <Link
                to="/services/erpnext-implementation"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white hover:bg-white/20 transition-all"
              >
                Also See: Implementation <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
