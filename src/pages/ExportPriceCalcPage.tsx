import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, ArrowDown,
  PackageCheck, Calculator, Ship, TrendingUp, Workflow, LayoutDashboard,
  CheckCircle2, X,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

// ── Five business outcomes ───────────────────────────────────────────────────
const outcomes = [
  {
    number: '01', icon: Calculator, title: 'Cost',
    subtitle: 'Know your real product cost.',
    body: 'Product costing combines manufacturing cost, packaging, overheads and exchange rate into a single landing cost figure — so every quotation starts from an accurate base, not an estimate.',
    bullets: ['Manufacturing & packaging cost', 'Exchange rate adjustment', 'Landing cost calculation', 'Offer rate per product'],
  },
  {
    number: '02', icon: PackageCheck, title: 'Quote',
    subtitle: 'Build export quotations faster and more accurately.',
    body: 'Products, quantities, boxes, dimensions, CBM and weight are all captured and calculated in one place. Change a quantity — the entire quotation recalculates automatically.',
    bullets: ['Quantity per box and total quantity', 'CBM and gross weight per line', 'FOB amount per product', 'Full quotation totals'],
  },
  {
    number: '03', icon: Ship, title: 'Ship',
    subtitle: 'Understand the shipment before you quote it.',
    body: 'The system calculates total CBM and weight across the entire quotation, compares against configured container limits, and determines whether the shipment fits a 20 ft or 40 ft container — then factors shipping cost into your CIF price.',
    bullets: ['Total shipment CBM and weight', 'Automatic container selection (20 ft / 40 ft)', 'Shipping cost included in CIF calculation', 'Full logistics picture before pricing'],
  },
  {
    number: '04', icon: TrendingUp, title: 'Profit',
    subtitle: 'Know the economics behind the quotation.',
    body: 'EPC doesn\'t stop at "what should we charge?" It calculates what the business will actually earn — before the deal moves forward.',
    bullets: ['FOB profitability (offer − COGS)', 'CIF profitability including shipping', 'Gross profit, margin on cost, margin on sales', 'EBIT, income tax, profit after tax'],
  },
  {
    number: '05', icon: Workflow, title: 'Execute',
    subtitle: 'Turn the approved quote into ERPNext operations.',
    body: 'Once a quotation is approved, EPC creates or synchronises an ERPNext Sales Order — mapping products, quantities, rates and amounts directly. No rebuilding the data.',
    bullets: ['Approval workflow before execution', 'Automatic ERPNext Sales Order creation', 'Products, quantities and rates mapped across', 'Quotation becomes the start of operations'],
  },
]

// ── Dashboard metrics ────────────────────────────────────────────────────────
const dashMetrics = [
  { label: 'Total Sales', color: 'text-iris' },
  { label: 'Pending Value', color: 'text-amber-600' },
  { label: 'Delivered Value', color: 'text-emerald-600' },
  { label: 'Dispatched Value', color: 'text-blue-600' },
  { label: 'In Production', color: 'text-violet-600' },
  { label: 'Cancelled / Rejected', color: 'text-red-400' },
]

// ── Before items ─────────────────────────────────────────────────────────────
const beforeItems = [
  ['Product Cost Excel', 'Separate file, separate formulas, separate owner'],
  ['Dimension Excel', 'CBM and weight calculated manually per product'],
  ['Quotation Excel', 'Assembled by pulling from multiple sheets'],
  ['Shipping Calculation', 'Manual lookup against container specs'],
  ['Profitability Excel', 'Separate analysis, often done after quoting'],
  ['Manual ERP entry', 'Re-keying the approved quote into the system'],
]

// ── After items ──────────────────────────────────────────────────────────────
const afterItems = [
  ['Product costing', 'Structured, exchange-rate adjusted, consistent'],
  ['Auto CBM & weight', 'Calculated per line as products are added'],
  ['One quotation', 'All variables live in one connected document'],
  ['Container logic', 'System determines 20 ft vs 40 ft automatically'],
  ['Profitability inline', 'FOB/CIF margins visible before approval'],
  ['Sales Order sync', 'Approved quote flows into ERPNext operations'],
]

export function ExportPriceCalcPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Export Price Calc' },
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
              Product · Pricing Tools
            </motion.div>
            <motion.h1 variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-4xl">
              From spreadsheet calculations{' '}
              <span className="text-iris">to smarter export decisions.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              EPC is a custom Frappe/ERPNext application that converts a complex Excel-based export
              pricing process into an automated workflow for costing, quotation, shipment planning
              and profitability analysis.
            </motion.p>
            <motion.div variants={fadeUp}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-6 py-4">
              <span className="font-display text-sm font-medium text-ink">Export Pricing Intelligence</span>
              <span className="h-4 w-px bg-ink/15" />
              <span className="text-sm text-muted">Not just a calculator</span>
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

      {/* ── PHILOSOPHY STRIP ─────────────────────────────────────────────── */}
      <section className="border-y border-ink/8 bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {['Product Costing', 'Export Quotation', 'Container & Logistics', 'Profitability Analysis', 'ERPNext Sales Order'].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-6">
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
              The problem wasn't Excel. The problem was the process.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Export pricing is rarely just a price calculation. An export quotation depends on
              product cost, packaging, dimensions, weight, CBM, exchange rate, margin, container
              capacity, shipping and profitability — all at once.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Before */}
            <div className="rounded-[2rem] border border-red-100 bg-red-50/40 p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-red-400">Before EPC</p>
              <div className="grid gap-3">
                {beforeItems.map(([label, desc]) => (
                  <div key={label} className="flex gap-3 rounded-2xl border border-red-100 bg-white/60 px-4 py-3.5">
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
              <div className="mt-6 rounded-2xl border border-red-100 bg-white/60 px-5 py-4 text-center">
                <p className="text-sm font-medium text-red-600">
                  One pricing mistake can affect the entire quotation.
                </p>
                <p className="mt-1 text-xs text-muted">
                  And when a quotation changes, every sheet needs to change with it.
                </p>
              </div>
            </div>

            {/* After */}
            <div className="rounded-[2rem] border border-iris/15 bg-iris/3 p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-iris">After EPC</p>
              <div className="grid gap-3">
                {afterItems.map(([label, desc]) => (
                  <div key={label} className="flex gap-3 rounded-2xl border border-iris/10 bg-white/80 px-4 py-3.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-iris" />
                    <div>
                      <p className="text-sm font-medium text-ink/80">{label}</p>
                      <p className="mt-0.5 text-xs text-muted">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-iris/15 bg-white/80 px-5 py-4 text-center">
                <p className="text-sm font-medium text-ink">
                  The calculation becomes part of the business workflow.
                </p>
                <p className="mt-1 text-xs text-muted">
                  One quotation. One calculation engine. One source of truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE WORKFLOW VISUAL ───────────────────────────────────────────── */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">How it works</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              One quotation answers seven questions.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              From product costing to Sales Order — EPC calculates every step automatically.
            </p>
          </div>

          <div className="flex flex-col items-center gap-0">
            {[
              { label: 'What does it cost?', sub: 'Product costing + packaging + exchange rate', style: 'border-ink/10 bg-white' },
              { label: 'What should we charge?', sub: 'Offer rate, margin and FOB pricing', style: 'border-ink/10 bg-white' },
              { label: 'How much can we ship?', sub: 'Total CBM and gross weight calculated per line', style: 'border-ink/10 bg-white' },
              { label: 'Which container fits?', sub: 'System selects 20 ft or 40 ft automatically', style: 'border-violet-100 bg-violet-50/60' },
              { label: 'What will shipping cost?', sub: 'Configured shipping cost factored into CIF', style: 'border-violet-100 bg-violet-50/60' },
              { label: 'What\'s our FOB / CIF value?', sub: 'Both calculated and compared', style: 'border-iris/20 bg-iris/5' },
              { label: 'What will we actually earn?', sub: 'Gross profit, margins, EBIT and profit after tax', style: 'border-iris/25 accent-gradient text-white' },
            ].map((item, i) => (
              <div key={item.label} className="flex w-full flex-col items-center max-w-lg">
                {i > 0 && <ArrowDown className="h-5 w-5 text-ink/25 my-2" />}
                <div className={`w-full rounded-2xl border px-6 py-4 text-center ${item.style}`}>
                  <p className={`font-display text-base ${item.style.includes('accent-gradient') ? 'text-white' : 'text-ink'}`}>
                    {item.label}
                  </p>
                  <p className={`mt-0.5 text-xs ${item.style.includes('accent-gradient') ? 'text-white/75' : 'text-muted'}`}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center mt-2">
              <ArrowDown className="h-5 w-5 text-ink/25 my-2" />
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-8 py-4 text-center">
                <p className="font-display text-base text-emerald-700">Approval → ERPNext Sales Order</p>
                <p className="mt-0.5 text-xs text-emerald-600/70">Approved quote flows directly into operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIVE OUTCOMES ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Five business outcomes</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Pricing + Logistics + Profitability — in one workflow.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Instead of listing features, here's what EPC actually does for your business.
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
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
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

            {/* Dashboard card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="rounded-[2rem] border border-ink/10 bg-white p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl accent-gradient text-white shadow-md shadow-iris/20">
                  <LayoutDashboard className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-iris/70">Bonus</p>
                  <h3 className="font-display text-2xl text-ink">Dashboard</h3>
                </div>
              </div>
              <p className="mt-4 font-medium text-ink/80">Management visibility without opening individual quotations.</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A custom Quotation Dashboard gives management a live view of the entire export pipeline — filterable, clickable and printable.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {dashMetrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-ink/8 bg-mist/30 px-4 py-2.5">
                    <p className={`text-xs font-semibold ${m.color}`}>{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NEXORA PHILOSOPHY NOTE ───────────────────────────────────────── */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2.5rem] border border-ink/10 bg-white p-10 md:p-14">
            <p className="text-xs uppercase tracking-[0.22em] text-iris mb-4">The Nexora approach</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
              We didn't start with a DocType. We started with the business problem.
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              EPC was built for a real export-pricing challenge. The problem wasn't that the
              business lacked a calculator — it was that critical business decisions depended on
              multiple spreadsheets, repeated data entry, complex formulas, manual verification
              and separate shipment and profitability calculations.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              So we didn't replace Excel with a prettier screen. We converted the business logic
              inside the spreadsheet into an ERP workflow — one that calculates, validates, approves
              and executes without rebuilding data at every step.
            </p>
            <div className="rounded-2xl border border-iris/15 bg-iris/5 px-6 py-5 mb-8">
              <p className="font-medium text-ink italic">
                "Your business may have a completely different spreadsheet-driven process.
                We can turn that process into an ERPNext application too."
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
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready?</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Stop calculating export quotations across spreadsheets.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/75 text-lg leading-relaxed">
              Build, validate, approve and execute export quotations from one connected system —
              with profitability visible before any deal moves forward.
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
