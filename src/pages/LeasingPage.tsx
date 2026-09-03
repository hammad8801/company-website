import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, ArrowDown,
  Building2, FileText, Receipt, CreditCard, BookOpen, RefreshCw,
  CheckCircle2, X,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

// ── Six business outcomes ────────────────────────────────────────────────────
const outcomes = [
  {
    number: '01', icon: Building2, title: 'Know Your Property',
    subtitle: 'Always know what\'s available, what\'s occupied and what\'s coming free.',
    body: 'Properties and units are tracked in real time. Unit status updates automatically as leases are created, expire or approach renewal — so nobody has to maintain a separate availability spreadsheet.',
    bullets: [
      'Residential and commercial properties',
      'Per-unit tracking: floor, type, rent, occupancy',
      'Automatic status: Available · Reserved · On Lease · Expiring',
      'Units flagged 3 months before lease expiry',
      'Under Maintenance / In Legal / Inactive statuses',
    ],
  },
  {
    number: '02', icon: FileText, title: 'Control Your Leases',
    subtitle: 'Every lease term, service, deposit and renewal in one place.',
    body: 'Leases capture tenant, property/unit, dates, rent, security deposit, additional services and renewal history. Nothing lives in a separate file.',
    bullets: [
      'Tenant and unit linked to one lease record',
      'Flexible lease items: rent, service charges, utilities',
      'Per-item billing cycle: Monthly · Quarterly · 6 Months · Annually',
      'Security deposit tracking',
      'Renewal history chain maintained automatically',
    ],
  },
  {
    number: '03', icon: Receipt, title: 'Automate Billing',
    subtitle: 'Payment schedules and invoices generated from the lease — no manual calculation.',
    body: 'The system generates a complete payment schedule from lease terms, handling pro-rata calculations for partial periods and final rounding differences. A daily scheduler then raises invoices for payments due within the configured horizon.',
    bullets: [
      'Full payment schedule auto-generated from lease',
      'Pro-rata calculations for partial first/last periods',
      'Configurable invoice lead time (e.g., 7 days ahead)',
      'Daily scheduler raises invoices automatically',
      'No manual "which tenants need invoices this week?"',
    ],
  },
  {
    number: '04', icon: CreditCard, title: 'Control Collections',
    subtitle: 'Track every PDC from receipt to clearance — including delays, bounces and replacements.',
    body: 'Post-dated cheques are generated from the payment cycle and tracked through their full lifecycle. Every change is recorded with reason and date — so the history is never lost.',
    bullets: [
      'PDC schedule generated from lease payment cycle',
      'Full status lifecycle: Not Due → Due → Cleared / Delayed / Bounce / Replaced',
      'Delay tracking: original date, new date, reason, count',
      'Replacement workflow preserves old cheque trail',
      'Bulk Cleared / Bounce actions from PDC Dashboard',
      'Filter by property, unit, year, week or month',
    ],
  },
  {
    number: '05', icon: BookOpen, title: 'Connect Operations to Accounting',
    subtitle: 'One real-world event. One accounting entry. Automatically.',
    body: 'PDC clearance and bounce events trigger ERPNext Journal Entries automatically. The property team doesn\'t have to separately notify finance — the system creates the transaction.',
    bullets: [
      'Cheque cleared → Journal Entry created',
      'Cheque bounced → Accounting reversal created',
      'Payment entries linked to PDC records',
      'Full audit trail from PDC status to GL entry',
    ],
  },
  {
    number: '06', icon: RefreshCw, title: 'Never Lose the Lease History',
    subtitle: 'Renewals, replacements and delays — all preserved in the system.',
    body: 'Lease renewals create a new lease linked to the previous one, carrying forward tenant, unit, rent and terms. Cheque replacements retain the original cheque and its relationship to the new one. History is never overwritten.',
    bullets: [
      'Renewal chain: Lease 2025 → 2026 → 2027 linked',
      'Replacement chain: Old cheque → Replaced status → New cheque linked',
      'Delayed cheques retain original date and reason',
      'Complete tenant history across multiple lease periods',
    ],
  },
]

// ── PDC lifecycle statuses ───────────────────────────────────────────────────
const pdcStatuses = [
  { label: 'Not Due', color: 'border-ink/10 bg-white text-ink/60' },
  { label: 'Due', color: 'border-amber-200 bg-amber-50 text-amber-700' },
  { label: 'Cleared', color: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
  { label: 'Delayed', color: 'border-orange-200 bg-orange-50 text-orange-700' },
  { label: 'Bounce', color: 'border-red-200 bg-red-50 text-red-600' },
  { label: 'Replaced', color: 'border-violet-200 bg-violet-50 text-violet-700' },
]

// ── Unit statuses ────────────────────────────────────────────────────────────
const unitStatuses = [
  { label: 'Available', color: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
  { label: 'Reserved', color: 'border-blue-200 bg-blue-50 text-blue-700' },
  { label: 'On Lease', color: 'border-iris/20 bg-iris/8 text-iris' },
  { label: 'Expiring (3 mo)', color: 'border-amber-200 bg-amber-50 text-amber-700' },
  { label: 'Under Maintenance', color: 'border-orange-200 bg-orange-50 text-orange-700' },
  { label: 'In Legal', color: 'border-red-200 bg-red-50 text-red-600' },
]

export function LeasingPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Lease Management' },
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
              Product · Contracts & Assets
            </motion.div>
            <motion.h1 variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-4xl">
              A lease doesn't end{' '}
              <span className="text-iris">at the signature.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              Nexora Lease Management connects property occupancy, lease contracts, recurring billing,
              PDC tracking, accounting and renewals into one automated ERPNext workflow. From lease
              signed to rent collected — automatically.
            </motion.p>
            <motion.div variants={fadeUp}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-6 py-4">
              <span className="font-display text-sm font-medium text-ink">One Lease. One Workflow.</span>
              <span className="h-4 w-px bg-ink/15" />
              <span className="text-sm text-muted">Complete Visibility.</span>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl hover:shadow-iris/35 transition-all">
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/erpnext-customization"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                How We Build Custom Apps <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── LIFECYCLE STRIP ───────────────────────────────────────────────── */}
      <section className="border-y border-ink/8 bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {['Property', 'Unit', 'Lease', 'Billing', 'Invoice', 'PDC', 'Accounting', 'Renewal'].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-4">
                  <span className="font-medium text-ink/80">{item}</span>
                  {i < arr.length - 1 && <span className="font-bold text-iris text-lg leading-none">→</span>}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── THE REAL PROBLEM ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The problem</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              The real problem isn't managing leases.<br />It's keeping the entire rental lifecycle synchronized.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Property management looks simple on paper. In practice, every moving part needs to
              stay in sync — and each one is usually managed separately.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Before */}
            <div className="rounded-[2rem] border border-red-100 bg-red-50/40 p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-red-400">Before Lease Management</p>
              <div className="grid gap-3">
                {[
                  ['Property Excel', 'Manually updated availability list'],
                  ['Tenant records', 'Separate file per tenant or lease'],
                  ['Rent schedule', 'Calendar reminders, manual calculations'],
                  ['Invoice tracking', 'Someone generates each invoice manually'],
                  ['Cheque register', 'Spreadsheet updated per payment event'],
                  ['Accounting', 'Finance notified separately for each transaction'],
                  ['Renewal calendar', 'Manually flagged, often missed'],
                ].map(([label, desc]) => (
                  <div key={label} className="flex gap-3 rounded-2xl border border-red-100 bg-white/60 px-4 py-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-3 w-3 text-red-400" />
                    </span>
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
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-iris">After Lease Management</p>
              <div className="grid gap-3">
                {[
                  ['Real-time unit status', 'Auto-updated as leases are created and expire'],
                  ['One lease record', 'Tenant, unit, items, schedule, PDCs linked together'],
                  ['Auto billing schedule', 'Generated from lease terms including pro-rata'],
                  ['Auto invoice generation', 'Scheduler raises invoices within configured horizon'],
                  ['Full PDC lifecycle', 'Not Due → Due → Cleared / Delayed / Bounce / Replaced'],
                  ['Auto accounting', 'Clearance and bounce events create Journal Entries'],
                  ['Renewal chain', 'New lease linked to previous — history preserved'],
                ].map(([label, desc]) => (
                  <div key={label} className="flex gap-3 rounded-2xl border border-iris/10 bg-white/80 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-iris" />
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

      {/* ── LIFECYCLE VISUAL ──────────────────────────────────────────────── */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The rental lifecycle</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              From property to renewal — one connected system.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Every stage feeds the next. No manual handoffs between systems.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Left: main lifecycle flow */}
            <div className="flex flex-col items-center gap-0">
              {[
                { label: 'Property', sub: 'Owner, manager, total units, availability', style: 'border-ink/10 bg-white' },
                { label: 'Unit', sub: 'Floor, type, rent, occupancy status', style: 'border-ink/10 bg-white' },
                { label: 'Lease Created', sub: 'Tenant, dates, rent, deposit, items', style: 'border-iris/20 bg-iris/5 text-iris' },
                { label: 'Billing Schedule', sub: 'Auto-generated, pro-rata, multi-cycle', style: 'border-violet-100 bg-violet-50/60' },
                { label: 'Invoice', sub: 'Raised automatically by daily scheduler', style: 'border-violet-100 bg-violet-50/60' },
                { label: 'PDC / Payment', sub: 'Not Due → Due → Cleared / Delayed / Bounce', style: 'border-amber-100 bg-amber-50/60' },
                { label: 'Accounting Entry', sub: 'Journal Entry created on clearance or bounce', style: 'border-emerald-100 bg-emerald-50/60' },
                { label: 'Renewal / Next Lease', sub: 'History chain preserved automatically', style: 'border-iris/25 accent-gradient text-white' },
              ].map((item, i) => (
                <div key={item.label} className="flex w-full flex-col items-center max-w-sm">
                  {i > 0 && <ArrowDown className="h-4 w-4 text-ink/25 my-2" />}
                  <div className={`w-full rounded-2xl border px-5 py-3.5 ${item.style}`}>
                    <p className={`font-display text-base ${item.style.includes('accent-gradient') ? 'text-white' : 'text-ink'}`}>
                      {item.label}
                    </p>
                    <p className={`mt-0.5 text-xs ${item.style.includes('accent-gradient') ? 'text-white/75' : 'text-muted'}`}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: PDC and unit status panels */}
            <div className="flex flex-col gap-6">
              {/* Unit statuses */}
              <div className="rounded-[2rem] border border-ink/10 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-iris mb-4">Unit statuses — auto-managed</p>
                <div className="grid grid-cols-2 gap-2">
                  {unitStatuses.map((s) => (
                    <div key={s.label} className={`rounded-2xl border px-3 py-2 text-xs font-medium text-center ${s.color}`}>
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* PDC statuses */}
              <div className="rounded-[2rem] border border-ink/10 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-iris mb-4">PDC lifecycle — every cheque tracked</p>
                <div className="grid grid-cols-2 gap-2">
                  {pdcStatuses.map((s) => (
                    <div key={s.label} className={`rounded-2xl border px-3 py-2 text-xs font-medium text-center ${s.color}`}>
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Event → Accounting */}
              <div className="rounded-[2rem] border border-ink/10 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-iris mb-4">Event → automation → accounting</p>
                {[
                  { event: 'Cheque cleared', result: 'Journal Entry created' },
                  { event: 'Cheque bounced', result: 'Accounting reversal created' },
                  { event: 'Cheque replaced', result: 'Old entry cancelled, new entry linked' },
                ].map((row) => (
                  <div key={row.event} className="flex items-center justify-between gap-3 py-2.5 border-b border-ink/6 last:border-0">
                    <p className="text-sm text-ink/75">{row.event}</p>
                    <span className="text-xs font-medium text-iris bg-iris/8 border border-iris/15 rounded-full px-3 py-1 whitespace-nowrap">
                      {row.result}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIX OUTCOMES ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Six business outcomes</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Not property software. A rental lifecycle engine.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Six capability areas — each organized around a real business problem.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {outcomes.map((o, idx) => {
              const Icon = o.icon
              return (
                <motion.div key={o.number}
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
                      <p className="text-xs uppercase tracking-[0.22em] text-iris/70">{o.number}</p>
                      <h3 className="font-display text-2xl text-ink">{o.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 font-medium text-ink/80">{o.subtitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{o.body}</p>
                  <ul className="mt-5 grid gap-2">
                    {o.bullets.map((b) => (
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

      {/* ── NEXORA PHILOSOPHY NOTE ───────────────────────────────────────── */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2.5rem] border border-ink/10 bg-white p-10 md:p-14">
            <p className="text-xs uppercase tracking-[0.22em] text-iris mb-4">The Nexora approach</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
              We didn't build a property management screen. We automated the rental lifecycle.
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              The client's rental operations were previously dependent on manually coordinating
              leases, payment schedules, invoices, PDCs, renewals and accounting — each one a
              separate task for a separate person.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We built a custom Frappe/ERPNext application that connects the entire lifecycle
              into one system. One action in the real world — a cheque bouncing, a lease
              expiring, a renewal being signed — triggers the correct workflow in ERPNext
              without requiring five manual follow-up steps.
            </p>
            <div className="rounded-2xl border border-iris/15 bg-iris/5 px-6 py-5 mb-8">
              <p className="font-medium text-ink italic">
                "Your business may have a completely different operational process that currently
                lives across spreadsheets and manual coordination. We can turn that process into
                an ERPNext application too."
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/services/erpnext-customization"
                className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl transition-all">
                See How We Build Custom Apps <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/erpnext-consulting"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                Start With a Consultancy <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] accent-gradient p-12 text-center text-white shadow-2xl shadow-iris/20">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready to see it?</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Manage the entire rental lifecycle.<br />In one system.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/75 text-lg leading-relaxed">
              From property availability and lease creation to recurring billing, PDC tracking,
              automated accounting and renewal chains — built inside ERPNext.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-iris shadow-lg hover:shadow-xl transition-all">
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white hover:bg-white/20 transition-all">
                Browse All Products <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
