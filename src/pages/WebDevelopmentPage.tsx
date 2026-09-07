import { ContactLink } from '@/components/ContactLink'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, ArrowDown, Globe, ShoppingCart,
  AppWindow, Network, CheckCircle2, ArrowUpRight,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const spectrum = [
  {
    number: '01', icon: Globe, title: 'Business Websites',
    tagline: 'Tell your story.',
    subtitle: 'Make your business clear online.',
    body: 'Not a template with your logo on it. A digital experience designed around your business — communicating what you do, who you serve, and why you\'re the right choice.',
    builds: ['Corporate and service websites', 'Product and brand websites', 'Landing pages and campaign sites', 'CMS-powered content platforms'],
    href: null,
  },
  {
    number: '02', icon: ShoppingCart, title: 'E-Commerce',
    tagline: 'Sell online.',
    subtitle: 'Turn your website into a business channel.',
    body: 'Commerce built around your products, customers, and the systems behind your business — not just a storefront that stops at checkout. We connect the experience to inventory, fulfilment and accounting.',
    builds: ['Custom storefronts and product catalogs', 'Cart, checkout and payment flows', 'Customer accounts and order history', 'ERPNext / Frappe-connected commerce'],
    href: null,
  },
  {
    number: '03', icon: AppWindow, title: 'Web Applications',
    tagline: 'Run your processes.',
    subtitle: 'When your business needs more than a website.',
    body: 'If a website needs to think, process, calculate, automate, or connect — it becomes an application. We build browser-based systems that give people the right tools to do their work.',
    builds: ['Customer and vendor portals', 'Admin platforms and dashboards', 'Booking, workflow and CRM systems', 'Internal tools and SaaS products'],
    href: null,
  },
  {
    number: '04', icon: Network, title: 'Connected Platforms',
    tagline: 'Connect your business.',
    subtitle: 'Your website shouldn\'t live on an island.',
    body: 'We connect the web layer to ERPNext, Frappe, payment gateways, CRM, inventory, logistics, mobile apps and third-party systems — so the website becomes part of the business, not separate from it.',
    builds: ['Web ↔ ERPNext / Frappe integration', 'Payment and commerce API connections', 'Real-time data sync across platforms', 'Multi-system business dashboards'],
    href: '/services/erpnext-integration',
  },
]

const methodology = [
  { step: 'Understand', desc: 'Business goals, users, existing systems, content requirements, processes and integrations.' },
  { step: 'Structure', desc: 'Sitemap, information architecture, user journeys, content structure and data architecture.' },
  { step: 'Design', desc: 'UX flows, wireframes, visual design, responsive layouts, design system and interaction patterns.' },
  { step: 'Build', desc: 'Frontend (React, Next.js), backend (Node.js, Python, Frappe), commerce and platform integration.' },
  { step: 'Connect', desc: 'Web ↔ ERPNext ↔ Frappe ↔ APIs ↔ Payments ↔ CRM ↔ Mobile — the site becomes part of the system.' },
  { step: 'Prove', desc: 'Functional, responsive, browser, performance, security, integration and SEO validation.' },
  { step: 'Launch', desc: 'Hosting, domain, SSL, deployment, analytics, monitoring and SEO setup.' },
  { step: 'Evolve', desc: 'Maintenance, new features, performance, integrations, security updates and continuous improvement.' },
]

const whatWeBuild = [
  'Business Websites',
  'E-Commerce Platforms',
  'Custom Web Applications',
  'Customer & Partner Portals',
  'SaaS Platforms',
  'Dashboards & Internal Tools',
  'API & Backend Development',
  'Connected Web Platforms',
]

const journey = [
  { label: 'Company website', note: 'Your digital presence' },
  { label: 'Customer experience', note: 'Design and content' },
  { label: 'E-Commerce / Portal', note: 'Sell and serve online' },
  { label: 'Business application', note: 'Run processes in-browser' },
  { label: 'ERPNext / Frappe', note: 'Business system integration' },
  { label: 'Automation', note: 'Systems do the work' },
  { label: 'Connected business system', note: 'Everything in one flow' },
]

const relatedServices = [
  { label: 'Third-Party Integrations', sub: 'Connect the web platform to ERPNext and external systems', href: '/services/erpnext-integration' },
  { label: 'Frappe Development', sub: 'Build the Frappe backend behind the web experience', href: '/services/frappe-development' },
  { label: 'Mobile App Development', sub: 'The mobile experience alongside the website', href: '/services/mobile-apps' },
]

export function WebDevelopmentPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Web Development' }]} />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-iris/8 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-violet-300/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-iris">
              Service · Web
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-4xl">
              Web experiences built around{' '}
              <span className="text-iris">your business.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              From high-performance business websites to e-commerce platforms, custom web
              applications, and connected digital systems — we build the web experience your
              business actually needs.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-6 py-4">
              <span className="font-display text-sm font-medium text-ink">We don't start with a template.</span>
              <span className="h-4 w-px bg-ink/15" />
              <span className="text-sm text-muted">We start with the experience.</span>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <ContactLink className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl transition-all">
                Discuss Your Web Project <ArrowRight className="h-4 w-4" />
              </ContactLink>
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
            {['Understand', 'Structure', 'Design', 'Build', 'Connect', 'Prove', 'Launch', 'Evolve'].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-medium text-ink/80">{item}</span>
                {i < arr.length - 1 && <span className="font-bold text-iris text-lg leading-none">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THE WEB SPECTRUM */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Nexora web spectrum</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              What should your web presence actually do?
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              We start with one question before choosing any technology or stack.
            </p>
          </div>

          {/* Decision visual */}
          <div className="rounded-[2rem] border border-ink/8 bg-white p-8 md:p-10">
            <div className="flex flex-col items-center gap-0 text-sm text-center">
              <div className="rounded-2xl border border-ink/10 bg-mist/40 px-6 py-3 font-medium text-ink">
                Your business goal
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="rounded-2xl border border-iris/15 bg-iris/5 px-6 py-3 text-muted italic text-sm">
                What should web do for this business?
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
                {[
                  { label: 'Communicate', style: 'border-violet-200 bg-violet-50/60 text-violet-700' },
                  { label: 'Sell', style: 'border-emerald-200 bg-emerald-50/60 text-emerald-700' },
                  { label: 'Operate', style: 'border-iris/20 bg-iris/5 text-iris' },
                ].map((c) => (
                  <div key={c.label} className={`rounded-2xl border px-3 py-4 font-medium text-sm ${c.style}`}>
                    {c.label}
                  </div>
                ))}
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
                {[
                  { label: 'Website', note: 'Tell your story' },
                  { label: 'E-Commerce', note: 'Sell your products' },
                  { label: 'Web Application', note: 'Run your processes' },
                ].map((c) => (
                  <div key={c.label} className="rounded-2xl border border-ink/10 bg-white px-3 py-4">
                    <p className="text-sm font-medium text-ink">{c.label}</p>
                    <p className="mt-0.5 text-xs text-muted">{c.note}</p>
                  </div>
                ))}
              </div>
              <ArrowDown className="h-4 w-4 text-ink/25 my-3" />
              <div className="w-full max-w-lg rounded-2xl border border-iris/25 bg-iris/5 px-6 py-4">
                <p className="text-sm font-medium text-iris">Connect your business systems</p>
                <p className="mt-1 text-xs text-muted">ERPNext · Frappe · Payments · CRM · Mobile · APIs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR APPROACHES */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">What we build</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Website · E-Commerce · Web Application · Connected Platform
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Four distinct web capabilities. Often combined into a single project.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {spectrum.map((s, idx) => {
              const Icon = s.icon
              return (
                <motion.div key={s.number}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.09 }}
                  className="rounded-[2rem] border border-ink/10 bg-white p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl accent-gradient text-white shadow-md shadow-iris/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-iris/70">{s.number}</p>
                      <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                      <p className="text-xs text-muted mt-0.5">{s.tagline}</p>
                    </div>
                  </div>
                  <p className="font-medium text-ink/80 mb-2">{s.subtitle}</p>
                  <p className="text-sm leading-relaxed text-muted mb-5">{s.body}</p>
                  <ul className="grid gap-2 sm:grid-cols-2 mb-5">
                    {s.builds.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-iris/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {s.href && (
                    <Link to={s.href} className="inline-flex items-center gap-1.5 text-sm font-medium text-iris hover:gap-3 transition-all">
                      See Integration Services <ChevronRight className="h-4 w-4" />
                    </Link>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* E-COMMERCE FLOW */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-iris">What connected commerce looks like</p>
              <h2 className="mt-3 font-display text-4xl text-ink">
                A storefront connected to the business behind it.
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                Most agencies build the storefront and stop at checkout. Nexora connects the web
                experience to inventory, fulfilment, accounting and customer data — so the
                website becomes a business channel, not just an online brochure with a cart.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                That's only possible because we work across Frappe, ERPNext, integrations and
                web — as one team.
              </p>
            </div>
            <div className="rounded-[2rem] border border-ink/8 bg-white p-8">
              <div className="flex flex-col items-center gap-0 text-sm text-center">
                {[
                  { label: 'Customer', style: 'border-ink/10 bg-mist/40 text-ink' },
                  { label: 'Website / Storefront', style: 'border-ink/10 bg-white text-ink' },
                  { label: 'Cart → Payment', style: 'border-ink/10 bg-white text-ink' },
                  { label: 'Sales Order · ERPNext', style: 'border-iris/20 bg-iris/5 text-iris' },
                  { label: 'Inventory · Warehouse', style: 'border-iris/20 bg-iris/5 text-iris' },
                  { label: 'Logistics Provider', style: 'border-ink/10 bg-white text-ink' },
                  { label: 'Customer Notified', style: 'border-emerald-200 bg-emerald-50/60 text-emerald-700' },
                ].map((item, i) => (
                  <div key={item.label} className="flex flex-col items-center w-full max-w-xs">
                    {i > 0 && <ArrowDown className="h-4 w-4 text-ink/20 my-2" />}
                    <div className={`w-full rounded-2xl border px-5 py-2.5 font-medium ${item.style}`}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-muted italic">
                One customer order. Seven automatic business steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD GRID */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Capability overview</p>
            <h2 className="mt-3 font-display text-4xl text-ink">What we build.</h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Built for people. Engineered for performance.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeBuild.map((item, idx) => (
              <motion.div key={item}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-ink/10 bg-white px-5 py-4 flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-iris/60" />
                <span className="text-sm font-medium text-ink">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Performance principle */}
          <div className="mt-10 rounded-[2rem] border border-iris/15 bg-white p-8 md:p-10 text-center">
            <p className="font-display text-2xl text-ink mb-3">Built for people. Engineered for performance.</p>
            <p className="text-muted text-sm leading-relaxed max-w-xl mx-auto">
              Fast loading, responsive design, accessibility, SEO foundations, clean architecture,
              security and scalability are not optional extras — they're quality standards built
              into every project from day one.
            </p>
          </div>
        </div>
      </section>

      {/* THE WEB JOURNEY */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">A website is sometimes the beginning</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Your web presence can evolve with your business.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              As your business becomes more complex, your digital presence doesn't need to be
              rebuilt from scratch. Nexora can take you through the entire journey.
            </p>
          </div>
          <div className="flex flex-col items-center gap-0">
            {journey.map((item, i) => (
              <div key={item.label} className="flex flex-col items-center w-full max-w-md">
                {i > 0 && <ArrowDown className="h-4 w-4 text-ink/20 my-2" />}
                <div className={`w-full rounded-2xl border px-5 py-3.5 flex items-center justify-between gap-4 ${i === 0 ? 'border-ink/10 bg-white' : i === journey.length - 1 ? 'border-iris/25 bg-iris/5' : 'border-ink/10 bg-mist/30'}`}>
                  <p className={`text-sm font-medium ${i === journey.length - 1 ? 'text-iris' : 'text-ink'}`}>{item.label}</p>
                  <span className="text-xs text-muted flex-shrink-0">{item.note}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            One partner. The entire digital journey.
          </p>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">How we work</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Understand → Structure → Design → Build → Connect → Prove → Launch → Evolve
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Eight stages. Deployment is not the end — it's the beginning of the next phase.
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
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready to build?</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Tell us what your business needs<br />the web to do.
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/75 text-lg leading-relaxed">
              Website, e-commerce, web application or connected platform — we choose the right
              approach after understanding your business. Not before.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ContactLink className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-iris shadow-lg hover:shadow-xl transition-all">
                Discuss Your Web Project <ArrowRight className="h-4 w-4" />
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
