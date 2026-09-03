import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, ArrowDown, Smartphone, Layers, Zap,
  MapPin, Users, Wifi, CheckCircle2, ArrowUpRight,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const approaches = [
  {
    number: '01', icon: Smartphone, title: 'Native Mobile',
    subtitle: 'When the device matters most.',
    body: 'Purpose-built applications for iOS or Android using the platform\'s native capabilities. We choose native when the platform itself is an important part of the product — not because it\'s automatically better.',
    tags: ['Swift · SwiftUI', 'Kotlin · Jetpack Compose'],
    bullets: ['Deep device capabilities (camera, Bluetooth, NFC)', 'Location services and background processing', 'High-performance interfaces', 'Platform-specific experiences'],
    ideal: 'When the device\'s hardware or platform deeply shapes the product.',
  },
  {
    number: '02', icon: Layers, title: 'Cross-Platform',
    subtitle: 'One product. Multiple platforms.',
    body: 'Build for iOS and Android from a shared application architecture. We choose cross-platform when a shared codebase can deliver the right product without compromising what the application actually needs.',
    tags: ['Flutter', 'React Native'],
    bullets: ['Customer and B2B applications', 'E-commerce and booking platforms', 'Field and sales applications', 'MVPs and internal business tools'],
    ideal: 'When reach and development efficiency matter more than platform-specific features.',
  },
  {
    number: '03', icon: Zap, title: 'Frappe-Powered Apps',
    subtitle: 'Your business system. In your team\'s hands.',
    body: 'Purpose-specific mobile applications connected to ERPNext or custom Frappe applications — giving each user exactly the workflows and information they need, without the full Desk interface.',
    tags: ['Flutter + Frappe API', 'React Native + ERPNext'],
    bullets: ['Salesperson: customer → quote → order → payment', 'Warehouse: scan → pick → pack → confirm', 'Field tech: job → checklist → parts → signature', 'Manager: approvals, dashboards, alerts'],
    ideal: 'When your business already runs on Frappe or ERPNext.',
  },
]

const methodology = [
  { step: 'Understand', desc: 'Who uses it, what they accomplish, where they work, connectivity conditions, existing systems, offline requirements.' },
  { step: 'Design', desc: 'User flows, screens, navigation, forms, notifications, offline states, error states and approval flows.' },
  { step: 'Architect', desc: 'Native, cross-platform or Frappe-powered? Offline storage? API architecture? Sync strategy? We decide deliberately.' },
  { step: 'Build', desc: 'Mobile, backend, API, authentication, workflows, scanning, location, attachments and business logic.' },
  { step: 'Connect', desc: 'ERPNext, Frappe apps, websites, CRM, payments, inventory, accounting and third-party APIs.' },
  { step: 'Launch', desc: 'App Store, Google Play, production API setup, analytics, crash monitoring and security checks.' },
  { step: 'Evolve', desc: 'OS compatibility, new features, API changes, Frappe updates and continuous performance improvement.' },
]

const capabilities = [
  { icon: Smartphone, label: 'Mobile Product Development', desc: 'From concept to production-ready application.' },
  { icon: MapPin, label: 'Field & Operational Apps', desc: 'Designed for teams working outside the office.' },
  { icon: Wifi, label: 'Offline-First Applications', desc: 'Capture data with no connectivity. Sync when it returns.' },
  { icon: Zap, label: 'Mobile + Business Automation', desc: 'One tap triggers a full business workflow.' },
  { icon: Layers, label: 'Mobile Backend & APIs', desc: 'The backend services that power the mobile experience.' },
  { icon: Users, label: 'App Launch & Evolution', desc: 'Store publishing, monitoring, maintenance and future development.' },
]

const userJourneys = [
  {
    role: 'Salesperson',
    steps: ['Customer', 'Visit', 'Quotation', 'Order', 'Payment'],
  },
  {
    role: 'Warehouse Worker',
    steps: ['Scan', 'Pick', 'Pack', 'Confirm'],
  },
  {
    role: 'Field Technician',
    steps: ['Job', 'Location', 'Checklist', 'Parts Used', 'Signature', 'Complete'],
  },
]

export function MobileAppsPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Mobile App Development' }]} />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-iris/8 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-violet-300/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-iris">
              Service · Mobile
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-4xl">
              Mobile apps built around{' '}
              <span className="text-iris">your business.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              From native iOS and Android experiences to cross-platform applications and
              Frappe-powered business apps, we design and build mobile products around your users,
              workflows, and existing technology.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-6 py-4">
              <span className="font-display text-sm font-medium text-ink">We don't choose the technology first.</span>
              <span className="h-4 w-px bg-ink/15" />
              <span className="text-sm text-muted">We understand the product first.</span>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl transition-all">
                Discuss Your Mobile App <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/frappe-development" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                Also See: Frappe Development <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* METHOD STRIP */}
      <section className="border-y border-ink/8 bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            {['Understand', 'Design', 'Architect', 'Build', 'Connect', 'Launch', 'Evolve'].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-medium text-ink/80">{item}</span>
                {i < arr.length - 1 && <span className="font-bold text-iris text-lg leading-none">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THE MOBILE DECISION */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Nexora mobile decision</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Every product gets the architecture it actually needs.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              We don't start with a technology preference. We start with the product — then
              choose the architecture that fits.
            </p>
          </div>

          {/* Decision visual */}
          <div className="rounded-[2rem] border border-ink/8 bg-white p-8 md:p-10">
            <div className="flex flex-col items-center gap-0 text-center">
              <div className="rounded-2xl border border-ink/10 bg-mist/40 px-6 py-3 text-sm font-medium text-ink">
                Your product requirement
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="rounded-2xl border border-iris/15 bg-iris/5 px-6 py-3 text-sm text-muted italic">
                What does this product need?
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
                {[
                  { label: 'Native', sub: 'Platform capability', style: 'border-violet-200 bg-violet-50/60' },
                  { label: 'Cross-Platform', sub: 'Shared code & reach', style: 'border-iris/20 bg-iris/5' },
                  { label: 'Frappe-Powered', sub: 'Business system', style: 'border-emerald-200 bg-emerald-50/60' },
                ].map((c) => (
                  <div key={c.label} className={`rounded-2xl border px-3 py-4 ${c.style}`}>
                    <p className="text-sm font-medium text-ink">{c.label}</p>
                    <p className="mt-1 text-xs text-muted">{c.sub}</p>
                  </div>
                ))}
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="rounded-2xl border border-ink/10 bg-white px-6 py-3 shadow-sm">
                <p className="text-sm font-medium text-ink">The right mobile experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE APPROACHES */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Three approaches</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Native · Cross-Platform · Frappe-Powered</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Three distinct architectures. We choose based on what the product genuinely needs.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {approaches.map((a, idx) => {
              const Icon = a.icon
              return (
                <motion.div key={a.number}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-[2rem] border border-ink/10 bg-white p-8 flex flex-col">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl accent-gradient text-white shadow-md shadow-iris/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-iris/70">{a.number}</p>
                      <h3 className="font-display text-2xl text-ink">{a.title}</h3>
                    </div>
                  </div>
                  <p className="font-medium text-ink/80 mb-2">{a.subtitle}</p>
                  <p className="text-sm leading-relaxed text-muted mb-5">{a.body}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {a.tags.map((t) => (
                      <span key={t} className="rounded-full border border-iris/15 bg-iris/5 px-3 py-1 text-xs font-medium text-iris">{t}</span>
                    ))}
                  </div>
                  <ul className="grid gap-2 mb-6 flex-1">
                    {a.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-iris/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-2xl border border-ink/8 bg-mist/30 px-4 py-3 mt-auto">
                    <p className="text-xs text-muted italic">{a.ideal}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FRAPPE USER JOURNEYS */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Frappe-powered in practice</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              The right workflow for each user. Connected to one business system.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Instead of giving every user the full Desk interface, we build purpose-specific apps
              that show each person exactly what they need — nothing more.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {userJourneys.map((j, idx) => (
              <motion.div key={j.role}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="rounded-[2rem] border border-ink/10 bg-white p-8">
                <p className="font-display text-lg text-ink mb-6">{j.role}</p>
                <div className="flex flex-col gap-0 items-start">
                  {j.steps.map((step, i) => (
                    <div key={step} className="flex flex-col items-start">
                      {i > 0 && <div className="ml-3 h-4 w-px bg-ink/15 my-0.5" />}
                      <div className="rounded-xl border border-ink/10 bg-mist/30 px-4 py-2 text-sm text-ink/75">{step}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architecture visual */}
          <div className="mt-10 rounded-[2rem] border border-ink/10 bg-white p-8 md:p-10">
            <p className="text-center text-xs uppercase tracking-[0.22em] text-iris mb-8">How the mobile app connects to the business</p>
            <div className="flex flex-col items-center gap-0 text-center text-sm">
              <div className="flex gap-3">
                {['Flutter', 'React Native'].map((f) => (
                  <div key={f} className="rounded-2xl border border-iris/20 bg-iris/5 px-5 py-3 text-xs font-medium text-iris">{f}</div>
                ))}
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="rounded-2xl border border-ink/10 bg-mist/40 px-6 py-3 text-xs font-medium text-ink">Frappe REST API</div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="rounded-2xl border border-violet-200 bg-violet-50/60 px-6 py-3 text-xs font-medium text-violet-700">Frappe / ERPNext</div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="flex gap-3 flex-wrap justify-center">
                {['CRM', 'Inventory', 'Accounts', 'HR', 'Custom Apps'].map((s) => (
                  <div key={s} className="rounded-xl border border-ink/10 bg-mist/30 px-4 py-2 text-xs text-ink/70">{s}</div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-muted italic">
              One Frappe backend. Multiple purpose-specific mobile experiences.
            </p>
          </div>
        </div>
      </section>

      {/* THE FRONT DOOR */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-iris mb-3">The Nexora principle</p>
          <h2 className="font-display text-4xl text-ink mb-5">
            The mobile app is only the front door.
          </h2>
          <p className="mx-auto max-w-xl text-muted leading-relaxed mb-10">
            Nexora doesn't just build an app. We connect the app to the business behind it —
            so an action on someone's phone can trigger inventory allocation, create an invoice,
            notify a manager, update a dashboard and close a workflow without anyone else touching a keyboard.
          </p>
          <div className="flex flex-col items-center gap-0">
            {[
              { label: 'Customer / Employee', style: 'border-ink/10 bg-white' },
              { label: 'Mobile Experience', style: 'border-iris/20 bg-iris/5' },
              { label: 'API / Business Logic', style: 'border-ink/10 bg-white' },
              { label: 'ERPNext · Frappe · External APIs', style: 'border-violet-200 bg-violet-50/60' },
              { label: 'Finance · Inventory · CRM · Notifications', style: 'border-emerald-200 bg-emerald-50/60' },
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center w-full max-w-sm">
                {i > 0 && <ArrowDown className="h-4 w-4 text-ink/20 my-2" />}
                <div className={`w-full rounded-2xl border px-5 py-3 text-sm font-medium text-ink ${item.style}`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">What we deliver</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Mobile capability areas.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, idx) => {
              const Icon = c.icon
              return (
                <motion.div key={c.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.07 }}
                  className="rounded-[1.75rem] border border-ink/10 bg-white p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl accent-gradient text-white shadow-md shadow-iris/20 mb-4">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="font-display text-lg text-ink mb-2">{c.label}</p>
                  <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">How we work</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Understand → Design → Architect → Build → Connect → Launch → Evolve
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Seven stages. The architecture decision only happens after we understand the product.
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

      {/* RELATED */}
      <section className="px-6 md:px-10 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.22em] text-iris mb-6">Part of a broader system</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Frappe Development', sub: 'Build the business layer the mobile app connects to', href: '/services/frappe-development' },
              { label: 'Third-Party Integrations', sub: 'Connect the mobile backend to external systems', href: '/services/erpnext-integration' },
              { label: 'Web Development', sub: 'The website or portal alongside the mobile app', href: '/services/web-development' },
            ].map((item) => (
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
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready to build?</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Tell us what your business needs.<br />We'll design the right app.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/75 text-lg leading-relaxed">
              Native, cross-platform or Frappe-powered — we choose the architecture after
              understanding the product. Not before.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-iris shadow-lg hover:shadow-xl transition-all">
                Discuss Your Mobile App <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/frappe-development" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white hover:bg-white/20 transition-all">
                Also: Frappe Development <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
