import { ContactLink } from '@/components/ContactLink'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, ChevronRight, ArrowDown, CheckCircle2, X, MapPin, Link2, RefreshCw, Zap, ShieldCheck, Activity } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const framework = [
  {
    number: '01', icon: MapPin, title: 'Map',
    subtitle: 'Before connecting anything, understand the data.',
    body: 'We identify every system, what data lives where, who owns it, when it should move and what triggers the transfer. This step prevents the biggest integration mistakes — conflicting updates, loops and missing records.',
    bullets: ['Every system and its role mapped', 'Data ownership: which system is authoritative', 'Trigger events and transfer direction defined', 'Failure scenarios planned before building begins'],
  },
  {
    number: '02', icon: Link2, title: 'Connect',
    subtitle: 'Choose the right architecture — not the most sophisticated one.',
    body: 'We select the simplest architecture that reliably solves the business problem: REST APIs, Frappe webhooks, scheduled sync, OAuth or a custom Frappe application. We don\'t introduce middleware just because it sounds impressive.',
    bullets: ['REST APIs and Frappe-native endpoints', 'Webhooks for real-time event triggers', 'OAuth and API key management', 'Custom Frappe apps when native isn\'t enough'],
  },
  {
    number: '03', icon: RefreshCw, title: 'Synchronize',
    subtitle: 'Move the right data, in the right direction.',
    body: 'Data sync isn\'t just about transferring records — it\'s about both systems knowing what happened. We define exact field mappings, transformation rules and synchronization schedules so nothing is ambiguous.',
    bullets: ['Field-level mapping between systems', 'Transformation and formatting rules', 'Bi-directional or one-way sync defined clearly', 'One source of truth per data type'],
  },
  {
    number: '04', icon: Zap, title: 'Automate',
    subtitle: 'Turn one business event into a chain of automatic actions.',
    body: 'Integration becomes automation when a single real-world event — an order, a payment, a scan — triggers multiple business processes without anyone manually copying data between systems.',
    bullets: ['Order placed → Sales Order → Payment → Stock update', 'Payment confirmed → Invoice created → Customer notified', 'Cheque cleared → Journal Entry created', 'Delivery scanned → ERPNext updated → Customer messaged'],
  },
  {
    number: '05', icon: ShieldCheck, title: 'Validate',
    subtitle: 'An API response isn\'t the same as a successful business transaction.',
    body: 'We validate the business outcome — not just the HTTP status. Does the data make sense? Does it satisfy ERPNext rules? Could a duplicate be created? Do both systems agree on what happened?',
    bullets: ['Data validation before committing to ERPNext', 'Duplicate detection and idempotency controls', 'Business-rule validation (not just API success)', 'Reconciliation: both systems must agree'],
  },
  {
    number: '06', icon: Activity, title: 'Monitor',
    subtitle: 'When something fails, your team should know immediately.',
    body: 'Every integration can encounter API downtime, rate limits, invalid data, expired credentials or changed formats. We build visibility in from day one so failures surface instead of silently corrupting your data.',
    bullets: ['Structured logging of every transaction', 'Failed transaction queue with reason codes', 'Retry logic for transient failures', 'Alerts for failures that need human action'],
  },
]

const systemCategories = [
  { emoji: '🛒', label: 'Commerce', systems: 'Shopify · WooCommerce · Amazon · Marketplaces', flow: 'Orders → Customers → Inventory → Fulfilment' },
  { emoji: '💳', label: 'Payments', systems: 'Razorpay · Stripe · PayU · Banks', flow: 'Payments → Invoices → Reconciliation → Accounts' },
  { emoji: '💬', label: 'Communication', systems: 'WhatsApp · SMS · Email APIs', flow: 'Invoices → Reminders → Order updates → Notifications' },
  { emoji: '🏦', label: 'Finance', systems: 'Banks · Accounting platforms', flow: 'Transactions → Reconciliation → ERPNext Accounts' },
  { emoji: '🚚', label: 'Logistics', systems: 'Courier · WMS · 3PL providers', flow: 'Orders → Shipment → Tracking → Delivery status' },
  { emoji: '👥', label: 'Workforce', systems: 'Biometric · HRMS · Attendance systems', flow: 'Employees → Attendance → Leave → Payroll' },
  { emoji: '📊', label: 'Analytics', systems: 'Power BI · BI platforms · Data systems', flow: 'ERPNext → Analytics → Management dashboards' },
  { emoji: '🌐', label: 'Custom Systems', systems: 'Websites · Mobile apps · Legacy software', flow: 'Any system with a suitable API can connect' },
]

const deliverables = [
  ['Integration Map', 'Which systems communicate with which'],
  ['Data Ownership Map', 'Which system is the source of truth per data type'],
  ['Data Flow Design', 'What moves, where it moves and when'],
  ['Integration Architecture', 'API, webhook, scheduled sync or Frappe app'],
  ['Error & Recovery Strategy', 'What happens when something fails'],
  ['Test Environment', 'Connection tested before production'],
  ['Monitoring & Logs', 'Visibility into what succeeded and what failed'],
  ['Documentation', 'Your team owns the knowledge and credentials'],
]

const comparison = [
  ['"We connect APIs."', 'We connect business processes.'],
  ['"Data synchronization."', 'One source of truth.'],
  ['"Integration completed."', 'Tested, validated and monitored.'],
  ['"It works."', 'We plan for failure and recovery.'],
  ['"We manage credentials."', 'Your systems and credentials stay yours.'],
  ['"One-time development."', 'Built for maintenance and future upgrades.'],
]

export function ERPNextIntegrationPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Third-Party Integrations' }]} />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-iris/8 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-violet-300/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-iris">
              Service · ERPNext
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-4xl">
              Connect ERPNext to the{' '}
              <span className="text-iris">business you already have.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              Your business already runs on websites, payment gateways, ecommerce platforms, banks,
              logistics systems and communication tools. Nexora connects them to ERPNext so
              information moves automatically, accurately and securely.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-6 py-4">
              <span className="font-display text-sm font-medium text-ink">People should run the business.</span>
              <span className="h-4 w-px bg-ink/15" />
              <span className="text-sm text-muted">Systems should move the data.</span>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <ContactLink className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl hover:shadow-iris/35 transition-all">
                Discuss an Integration <ArrowRight className="h-4 w-4" />
              </ContactLink>
              <Link to="/services/erpnext-customization" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                Also See: Customization <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FRAMEWORK STRIP */}
      <section className="border-y border-ink/8 bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {['Map', 'Connect', 'Synchronize', 'Automate', 'Validate', 'Monitor'].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-4">
                <span className="font-medium text-ink/80">{item}</span>
                {i < arr.length - 1 && <span className="font-bold text-iris text-lg leading-none">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THE REAL PROBLEM */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The problem</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Their systems don't talk to each other.</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Without integration, employees become the connection between systems — manually copying
              data that should flow automatically.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-red-100 bg-red-50/40 p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-red-400">Without integration</p>
              <div className="grid gap-3">
                {[
                  ['Employee becomes the API', 'Someone manually copies orders from Shopify into ERPNext'],
                  ['Duplicate data entry', 'Customer records created separately in every system'],
                  ['Inventory mismatches', 'Website shows stock that ERPNext has already sold'],
                  ['Delayed payments', 'Payment gateway doesn\'t tell ERPNext automatically'],
                  ['Manual reconciliation', 'End-of-day/week effort to make systems agree'],
                  ['Silent failures', 'Nobody knows an order wasn\'t processed until a complaint arrives'],
                ].map(([label, desc]) => (
                  <div key={label} className="flex gap-3 rounded-2xl border border-red-100 bg-white/60 px-4 py-3">
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                    <div>
                      <p className="text-sm font-medium text-ink/80">{label}</p>
                      <p className="mt-0.5 text-xs text-muted">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-iris/15 bg-iris/3 p-8">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-iris">With Nexora integration</p>
              <div className="grid gap-3">
                {[
                  ['Systems are the API', 'Orders flow from Shopify to ERPNext automatically'],
                  ['Single source of truth', 'Each data type has one authoritative system'],
                  ['Real-time stock sync', 'Website inventory reflects ERPNext in real time'],
                  ['Automatic payment recording', 'Gateway events create ERPNext entries immediately'],
                  ['Built-in reconciliation', 'Both systems are kept in agreement by design'],
                  ['Visible failures', 'Failed transactions surface with reason and recovery action'],
                ].map(([label, desc]) => (
                  <div key={label} className="flex gap-3 rounded-2xl border border-iris/10 bg-white/80 px-4 py-3">
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

      {/* DATA JOURNEY VISUAL */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The journey of one piece of data</p>
            <h2 className="mt-3 font-display text-4xl text-ink">One customer action. Seven business processes — automatically.</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">This is what integration actually does for a business.</p>
          </div>
          <div className="flex flex-col items-center gap-0">
            {[
              { step: 'Customer places an order', system: 'Website', style: 'border-ink/10 bg-white' },
              { step: 'Sales Order created', system: 'ERPNext', style: 'border-iris/20 bg-iris/5' },
              { step: 'Payment confirmed', system: 'Payment Gateway', style: 'border-ink/10 bg-white' },
              { step: 'Payment Entry recorded', system: 'ERPNext Accounts', style: 'border-iris/20 bg-iris/5' },
              { step: 'Stock allocated', system: 'ERPNext Inventory', style: 'border-iris/20 bg-iris/5' },
              { step: 'Shipment created', system: 'Logistics Provider', style: 'border-ink/10 bg-white' },
              { step: 'Customer notified', system: 'WhatsApp / SMS', style: 'border-emerald-100 bg-emerald-50/60' },
            ].map((item, i) => (
              <div key={item.step} className="flex w-full flex-col items-center max-w-md">
                {i > 0 && <ArrowDown className="h-4 w-4 text-ink/25 my-2" />}
                <div className={`w-full rounded-2xl border px-5 py-3.5 flex items-center justify-between gap-4 ${item.style}`}>
                  <p className="text-sm font-medium text-ink">{item.step}</p>
                  <span className="flex-shrink-0 rounded-full border border-ink/10 bg-white px-3 py-1 text-xs text-muted">{item.system}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">No employee copying data. No manual step between systems.</p>
        </div>
      </section>

      {/* FRAMEWORK STAGES */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Nexora Connected Business Framework</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Map → Connect → Synchronize → Automate → Validate → Monitor</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">Six stages. Each one preventing a different class of integration failure.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {framework.map((s, idx) => {
              const Icon = s.icon
              return (
                <motion.div key={s.number}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}
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
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* DESIGN FOR FAILURE */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Our core principle</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Design for failure, not just success.</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Every integration will encounter API downtime, rate limits, invalid data or expired credentials.
              We build for that from day one.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Retry', desc: 'Try again when the failure is transient.' },
              { label: 'Idempotency', desc: 'Never create the same transaction twice.' },
              { label: 'Validation', desc: 'Check data before committing to ERPNext.' },
              { label: 'Logging', desc: 'Know exactly what happened and when.' },
              { label: 'Reconciliation', desc: 'Both systems must agree on the outcome.' },
              { label: 'Alerts', desc: 'Surface failures that need human action.' },
              { label: 'Recovery', desc: 'Allow failed transactions to be corrected.' },
              { label: 'Documentation', desc: 'Your team owns the credentials and the code.' },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-ink/10 bg-white p-6">
                <p className="font-display text-lg text-ink mb-2">{item.label}</p>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM CATEGORIES */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">What we connect</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Organized around business systems, not APIs.</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              We first determine whether the external system can actually support the integration you need.
              If an API can't support it, we tell you.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {systemCategories.map((cat, idx) => (
              <motion.div key={cat.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="rounded-[2rem] border border-ink/10 bg-white p-6">
                <div className="mb-3 text-3xl">{cat.emoji}</div>
                <p className="font-display text-lg text-ink mb-1">{cat.label}</p>
                <p className="text-xs text-iris font-medium mb-3">{cat.systems}</p>
                <p className="text-sm text-muted leading-relaxed">{cat.flow}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES + COMPARISON */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Deliverables */}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-iris mb-3">What you receive</p>
              <h2 className="font-display text-3xl text-ink mb-8">Not "integration done." A connected, documented system.</h2>
              <div className="grid gap-3">
                {deliverables.map(([label, desc], i) => (
                  <div key={label} className="flex gap-4 rounded-2xl border border-ink/10 bg-white px-5 py-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full accent-gradient text-xs font-bold text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{label}</p>
                      <p className="mt-0.5 text-xs text-muted">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison */}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-iris mb-3">The difference</p>
              <h2 className="font-display text-3xl text-ink mb-8">We connect business processes — not just APIs.</h2>
              <div className="grid gap-3">
                {comparison.map(([them, us]) => (
                  <div key={them} className="rounded-2xl border border-ink/10 bg-white p-4">
                    <div className="flex gap-3 mb-2">
                      <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                      <p className="text-sm text-muted italic">{them}</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-iris" />
                      <p className="text-sm font-medium text-ink">{us}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] accent-gradient p-12 text-center text-white shadow-2xl shadow-iris/20">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready to connect?</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Your team should act on data.<br />Not move it.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/75 text-lg leading-relaxed">
              Tell us which systems you need to connect, and we'll tell you exactly how the
              integration should work — and what it will take to build it reliably.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ContactLink className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-iris shadow-lg hover:shadow-xl transition-all">
                Discuss an Integration <ArrowRight className="h-4 w-4" />
              </ContactLink>
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
