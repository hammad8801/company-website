import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, CheckCircle2,
  Store, Globe, CreditCard, RotateCcw,
  Workflow, BarChart3,
  Truck, Box,
  Sparkles,
  RefreshCw
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const orderLifecycleSteps = [
  { step: '01', label: 'Customer Discover', desc: 'Store counter or e-commerce storefront', color: 'bg-violet-100 text-violet-800 border-violet-200' },
  { step: '02', label: 'Cart / POS', desc: 'Items selected & prices calculated', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  { step: '03', label: 'Order Placement', desc: 'Sales order created in ERPNext', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { step: '04', label: 'Payment Sync', desc: 'Gateway or POS cash reconciled', color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
  { step: '05', label: 'Inventory Reserve', desc: 'Stock allocated in warehouse', color: 'bg-teal-100 text-teal-800 border-teal-200' },
  { step: '06', label: 'Pick & Pack', desc: 'Warehouse picking & packing slip', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { step: '07', label: 'Dispatch & Ship', desc: 'Courier integration & tracking link', color: 'bg-green-100 text-green-800 border-green-200' },
  { step: '08', label: 'Customer Delivery', desc: 'Proof of delivery & notifications', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { step: '09', label: 'Invoice & GST', desc: 'Automated tax invoice & GL entry', color: 'bg-orange-100 text-orange-800 border-orange-200' },
  { step: '10', label: 'Return / Exchange', desc: 'Inspection, restock or credit note', color: 'bg-rose-100 text-rose-800 border-rose-200' },
  { step: '11', label: 'Accounting Reconciliation', desc: 'Bank payout & gateway matching', color: 'bg-purple-100 text-purple-800 border-purple-200' },
  { step: '12', label: 'Customer Retention', desc: 'Loyalty points & re-engagement', color: 'bg-iris/15 text-iris border-iris/25' },
]

const capabilities = [
  {
    num: '01', title: 'Retail Point of Sale (POS)', icon: Store,
    subtitle: 'Fast sales at the physical counter.',
    desc: 'Equip your retail stores with intuitive POS interfaces designed for high transaction speed, offline reliability, store-specific profiles, and seamless inventory/accounting sync.',
    bullets: ['Fast barcode scan & receipt printing', 'Multiple payment methods (Cash, Card, UPI)', 'Store-specific pricing & cashier cash sessions', 'Customer loyalty redemption & returns at counter'],
    badge: 'ERPNext POS Engine'
  },
  {
    num: '02', title: 'E-Commerce Storefront Integration', icon: Globe,
    subtitle: 'Turn your online store into part of the operational business.',
    desc: 'Connect modern web storefronts directly to ERPNext so products, prices, inventory availability, sales orders, and customer accounts remain in real-time sync.',
    bullets: ['Unified product catalog & variant matrix', 'Live inventory availability across warehouses', 'Automated web sales order creation', 'Customer web portal for order tracking & invoices'],
    quote: 'The website is the customer experience. ERPNext is the operational system behind it.'
  },
  {
    num: '03', title: 'Multi-Location Inventory Control', icon: Box,
    subtitle: 'Know what you have. Where it is. And where it needs to go.',
    desc: 'Unify stock across central fulfillment hubs, retail stores, and transit locations to eliminate overselling, streamline stock transfers, and optimize reorders.',
    bullets: ['Central warehouse & store-level stock visibility', 'Automated inter-store warehouse transfers', 'Batch & serial tracking for high-value items', 'Barcode picking, stock counts & reconciliation'],
    badge: 'Real-Time Inventory'
  },
  {
    num: '04', title: 'Purchasing & Replenishment', icon: RefreshCw,
    subtitle: 'From low stock to automated supplier order.',
    desc: 'Automate repetitive purchasing by triggering material requests whenever inventory drops below reorder thresholds, matching supplier POs with incoming goods receipts.',
    bullets: ['Automated reorder point calculations', 'Demand-based Purchase Requisitions & POs', 'Supplier lead time & price evaluation', 'Goods Receipt Note (GRN) & stock updates'],
    badge: 'Smart Replenishment'
  },
  {
    num: '05', title: 'Omnichannel Commerce Engine', icon: Workflow,
    subtitle: 'One business. Multiple sales channels.',
    desc: 'Connect physical retail stores, online web shops, B2B portals, and third-party marketplaces into a single unified inventory and accounting core.',
    bullets: ['POS + Web + Marketplace order aggregation', 'Synchronized inventory reserved across channels', 'Centralized pricing & promotion enforcement', 'Single view of customer purchase history'],
    badge: 'Nexora Connect'
  },
  {
    num: '06', title: 'Payment & Gateway Reconciliation', icon: CreditCard,
    subtitle: 'Every payment should know what it paid for.',
    desc: 'Integrate online payment gateways and POS payment terminals directly with sales invoices, ensuring automatic bank payout matching and gateway fee tracking.',
    bullets: ['Payment gateway webhook synchronization', 'UPI / QR code payment status confirmation', 'Automated Credit Card & gateway fee logging', 'Refreshed payout reconciliation with Sales Orders'],
    quote: 'A successful API response isn\'t necessarily a successful business transaction.'
  },
  {
    num: '07', title: 'Order Fulfillment & Shipping', icon: Truck,
    subtitle: 'Order in. Right product out.',
    desc: 'Streamline warehouse pick lists, packing slips, courier API dispatch integrations, automated shipping label generation, and real-time delivery notifications.',
    bullets: ['Pick-pack-ship warehouse workflow', 'Courier API integrations & label printing', 'Automated tracking links sent to customers', 'Delivery confirmation & status sync'],
    badge: 'Automated Logistics'
  },
  {
    num: '08', title: 'Returns, Exchanges & Refunds', icon: RotateCcw,
    subtitle: 'The sale isn\'t finished when the customer pays.',
    desc: 'Design seamless reverse logistics workflows that handle return requests, physical item inspection, restock versus scrap routing, credit note issuance, and customer refunds.',
    bullets: ['Omnichannel return authorization (RMA)', 'Quality inspection before stock re-entry', 'Automatic Credit Note & General Ledger adjustment', 'Instant refund processing or store credit issuing'],
    badge: 'Reverse Logistics'
  },
]

const framework = [
  { step: 'SELL', title: '01 — SELL', desc: 'Make it easy to sell across physical retail stores, online web shops, and digital marketplaces.' },
  { step: 'SYNCHRONIZE', title: '02 — SYNCHRONIZE', desc: 'Keep products, prices, orders, stock levels, and customer records automatically aligned.' },
  { step: 'FULFILL', title: '03 — FULFILL', desc: 'Connect inventory, picking, packing, courier shipping, and inter-warehouse transfers.' },
  { step: 'RECONCILE', title: '04 — RECONCILE', desc: 'Connect payment gateways, POS receipts, credit notes, taxes, and accounting ledger.' },
  { step: 'RETAIN', title: '05 — RETAIN', desc: 'Utilize unified customer history, loyalty programs, and automated updates to drive repeat sales.' },
  { step: 'OPTIMIZE', title: '06 — OPTIMIZE', desc: 'Use live dashboard analytics to optimize stock turnover, store margins, and campaign ROI.' },
]

const mobileRoles = [
  {
    id: 'store-manager',
    role: 'Store Manager',
    focus: 'Counter & Stock Control',
    bullets: ['Live counter sales & hourly store turnover', 'Instant stock lookup across sister branches', 'Low-stock alert approval for local transfers', 'Cashier session open/close verification'],
    demo: {
      title: 'STORE #01 · MAIN PLAZA',
      metrics: [
        { label: "TODAY'S SALES", val: '$14,280', highlight: 'text-emerald-600' },
        { label: 'TRANSACTIONS', val: '142', highlight: 'text-ink' },
        { label: 'LOW STOCK ITEMS', val: '3 Alerted', highlight: 'text-amber-600' }
      ]
    }
  },
  {
    id: 'warehouse',
    role: 'Warehouse Team',
    focus: 'Pick, Pack & Transfer',
    bullets: ['Mobile barcode scanner for pick lists', 'Pack validation to prevent shipping errors', 'Inter-store transfer shipment dispatch', 'Goods receipt scanning upon arrival'],
    demo: {
      title: 'FULFILLMENT HUB · ZONE B',
      metrics: [
        { label: 'PENDING PICKS', val: '28 Orders', highlight: 'text-iris' },
        { label: 'PACKED & READY', val: '64 Orders', highlight: 'text-emerald-600' },
        { label: 'SCAN ACCURACY', val: '99.8%', highlight: 'text-ink' }
      ]
    }
  },
  {
    id: 'delivery',
    role: 'Delivery Team',
    focus: 'Last-Mile & COD',
    bullets: ['Optimized delivery route sequence', 'Customer phone & map navigation link', 'Digital proof of delivery (Signature / Photo)', 'Cash on Delivery (COD) collection log'],
    demo: {
      title: 'DRIVER ROUTE #04 · CENTRAL',
      metrics: [
        { label: 'DELIVERIES TODAY', val: '18 / 20', highlight: 'text-emerald-600' },
        { label: 'COD COLLECTED', val: '$840', highlight: 'text-ink' },
        { label: 'AVG TIME/STOP', val: '8.5 Mins', highlight: 'text-iris' }
      ]
    }
  },
  {
    id: 'management',
    role: 'Executive Management',
    focus: 'Margins & Growth',
    bullets: ['Omnichannel revenue across Web vs POS', 'Gross margin analysis per product category', 'Inventory turnover rate & holding costs', 'Return & refund trend monitoring'],
    demo: {
      title: 'NEXORA RETAIL EXECUTIVE',
      metrics: [
        { label: 'MONTHLY REVENUE', val: '$342.5K', highlight: 'text-emerald-600' },
        { label: 'WEB VS POS', val: '42% / 58%', highlight: 'text-ink' },
        { label: 'GROSS MARGIN', val: '48.2%', highlight: 'text-iris' }
      ]
    }
  }
]

const automationScenarios = [
  {
    id: 'online-order',
    title: '01 — New Online Order Workflow',
    subtitle: 'From web checkout to customer delivery',
    steps: [
      { label: 'Customer Checkout', detail: 'Order placed on website' },
      { label: 'ERPNext Sales Order', detail: 'Auto-created with line items & tax' },
      { label: 'Payment Gateway Sync', detail: 'Status confirmed & reference saved' },
      { label: 'Stock Reservation', detail: 'Inventory allocated from main hub' },
      { label: 'Warehouse Pick List', detail: 'Pushed to warehouse tablet app' },
      { label: 'Courier Dispatch', detail: 'AWB generated & tracking link emailed' }
    ]
  },
  {
    id: 'replenishment',
    title: '02 — Low Stock Replenishment',
    subtitle: 'From inventory drop to available stock',
    steps: [
      { label: 'Stock Threshold Hit', detail: 'Store stock drops below minimum safety' },
      { label: 'Requirement Identified', detail: 'Automated Material Request created' },
      { label: 'Purchase Order Trigger', detail: 'Sent to approved supplier with lead time' },
      { label: 'Goods Receipt (GRN)', detail: 'Warehouse receives & scans barcode' },
      { label: 'Stock Availability', detail: 'POS & E-commerce available counts update' }
    ]
  },
  {
    id: 'returns',
    title: '03 — Return & Refund Processing',
    subtitle: 'From customer request to accounting credit note',
    steps: [
      { label: 'Return Request', detail: 'Customer initiates via store or web portal' },
      { label: 'Item Receiving', detail: 'Scanned at warehouse or retail counter' },
      { label: 'Quality Inspection', detail: 'Passed items tagged Restock; damaged Scrap' },
      { label: 'Credit Note Issue', detail: 'ERPNext generates tax Credit Note' },
      { label: 'Refund / Store Credit', detail: 'Issued to payment method or loyalty account' }
    ]
  }
]

const subIndustries = [
  { title: '🛍️ Retail Stores', desc: 'POS counter speed, multi-payment options, cashier session controls, store inventory, and customer management.' },
  { title: '🛒 D2C & E-Commerce', desc: 'Online storefronts, synchronized catalogs, real-time inventory reservation, payment gateways, and fulfillment.' },
  { title: '📦 FMCG & Distribution', desc: 'Route sales, mobile van-sales teams, bulk purchasing, distributor pricing rules, and credit control.' },
  { title: '👟 Fashion & Apparel', desc: 'Size/color/style matrix variants, seasonal product catalog updates, store transfers, and omnichannel returns.' },
  { title: '💻 Electronics & Consumer Goods', desc: 'Serial number tracking, warranty workflows, after-sales service tickets, and component inventory.' },
  { title: '🏪 Multi-Location Retail', desc: 'Central warehouse replenishment, inter-store transfers, branch P&L reporting, and store-level visibility.' },
]

export function RetailEcommerceIndustryPage() {
  const [activeRole, setActiveRole] = useState('store-manager')
  const [activeAutomation, setActiveAutomation] = useState('online-order')

  const currentRoleData = mobileRoles.find(r => r.id === activeRole) || mobileRoles[0]
  const currentAutoData = automationScenarios.find(a => a.id === activeAutomation) || automationScenarios[0]

  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Retail & E-Commerce' }]} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-iris/8 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-emerald-300/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-iris">
              Industry Vertical · Retail & E-Commerce
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-5xl">
              Every sale starts a chain of{' '}
              <span className="text-iris">business processes.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 font-display text-2xl text-ink/80">
              Retail & E-Commerce, connected from cart to customer.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-xl leading-relaxed text-muted">
              From the moment a customer places an order to the moment it is delivered, returned, or reconciled, Nexora connects the systems behind the transaction — using ERPNext, Frappe, web, mobile, and automation.
            </motion.p>

            {/* Quick badges */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted mr-2">Nexora Stack:</span>
              {['ERPNext POS', 'Custom Frappe Apps', 'Web Storefronts', 'Mobile Tools', 'Payment & Courier APIs'].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-medium text-ink shadow-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full accent-gradient px-7 py-4 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl transition-all">
                Build My Retail System <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-medium text-ink hover:bg-mist transition-all">
                Talk to Nexora <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Cross Navigation */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-2 text-xs text-muted border-t border-ink/8 pt-6">
              <span className="font-semibold text-ink">Also See Related Services:</span>
              <Link to="/services/erpnext-integration" className="text-iris hover:underline font-medium ml-1">Third-Party Integrations</Link>
              <span>·</span>
              <Link to="/services/web-development" className="text-iris hover:underline font-medium">Web Development</Link>
              <span>·</span>
              <Link to="/services/mobile-apps" className="text-iris hover:underline font-medium">Mobile Apps</Link>
              <span>·</span>
              <Link to="/services/automation-custom-software" className="text-iris hover:underline font-medium">Automation & Custom Software</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="px-6 md:px-10 py-20 bg-white border-y border-ink/8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Fragmented Retail Challenge</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              Your store is one business.<br />Your systems should be too.
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted">
              When POS counters, e-commerce web shops, inventory warehouses, payment gateways, and accounting ledgers operate in separate silos, your employees become the integration layer.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Disconnected Reality */}
            <div className="rounded-[2rem] border border-red-200 bg-red-50/30 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-600 mb-6">
                  Typical Disconnected Retail Setup
                </span>
                <p className="font-display text-2xl text-ink mb-4">Employees as the Integration Layer</p>
                <p className="text-xs text-red-700/80 mb-6 italic font-medium">
                  "Don't make your employees copy-paste data between five disconnected systems."
                </p>

                <div className="space-y-2.5 font-mono text-xs">
                  {[
                    { step: 'Website Order', action: 'Employee copies order into ERP manually' },
                    { step: 'Stock Check', action: 'Employee calls warehouse to verify inventory' },
                    { step: 'Payment Gateway', action: 'Employee matches bank statement lines by hand' },
                    { step: 'Courier Booking', action: 'Employee types shipping details into shipping portal' },
                    { step: 'Returns & Credits', action: 'Manual credit notes created weeks after return' },
                    { step: 'Financial Close', action: 'Discrepancy between POS receipts and bank Payouts' },
                  ].map((row) => (
                    <div key={row.step} className="rounded-xl border border-red-100 bg-white p-3 flex justify-between items-center">
                      <span className="font-bold text-ink">{row.step}</span>
                      <span className="text-red-600 text-[11px] font-sans">⚠ {row.action}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-xs text-red-600 font-medium italic">
                Result: Duplicate entry, stock mismatches, missed payments, delayed orders, and reconciliation nightmares.
              </p>
            </div>

            {/* Nexora Connected System */}
            <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/30 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-6">
                  The Nexora Connected Retail System
                </span>
                <p className="font-display text-2xl text-ink mb-4">Automated Omnichannel Architecture</p>
                <p className="text-xs text-emerald-700/80 mb-6 italic font-medium">
                  "Systems connect to systems. Employees focus on customer experiences."
                </p>

                <div className="space-y-2.5 font-mono text-xs">
                  {[
                    { step: 'Website & POS Orders', solution: 'Direct API trigger to ERPNext Sales Order' },
                    { step: 'Inventory Allocation', solution: 'Real-time stock reserved across warehouses' },
                    { step: 'Payment Gateway Sync', solution: 'Automated status verification & reference match' },
                    { step: 'Courier API Dispatch', solution: 'Automatic shipping label & tracking email' },
                    { step: 'Reverse Logistics', solution: 'Quality-inspected restock & auto Credit Notes' },
                    { step: 'Accounting Ledger', solution: 'Real-time GL posting & instant bank reconciliation' },
                  ].map((row) => (
                    <div key={row.step} className="rounded-xl border border-emerald-100 bg-white p-3 flex justify-between items-center">
                      <span className="font-bold text-ink flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        {row.step}
                      </span>
                      <span className="text-emerald-700 text-[11px] font-sans font-medium">{row.solution}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-xs text-emerald-700 font-medium italic">
                Result: Zero manual data entry, 100% stock accuracy, automated payment matching, and delighted customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE BIG SECTION: FROM CUSTOMER ORDER TO COMPLETED SALE */}
      <section className="px-6 md:px-10 py-20 bg-mist/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">End-to-End Retail Lifecycle</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              From Customer Order to Completed Sale.
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted text-lg">
              <span className="font-semibold text-ink">One customer action can trigger an entire business workflow.</span><br />
              ERPNext's commerce engine connects storefront discovery directly through to fulfillment, accounting, and loyalty.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {orderLifecycleSteps.map((s, idx) => (
              <motion.div key={s.step}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="rounded-2xl border border-ink/10 p-4 flex flex-col justify-between bg-white shadow-xs hover:border-iris/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${s.color}`}>
                      STEP {s.step}
                    </span>
                  </div>
                  <p className="font-display text-base text-ink mb-1">{s.label}</p>
                  <p className="text-xs text-muted leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT NEXORA CAN HELP RETAILERS WITH (8 CAPABILITIES) */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">What Nexora Delivers</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              8 Core Retail & E-Commerce Capabilities
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              We configure ERPNext's commerce modules and engineer custom web, mobile, and integration layers tailored to your retail model.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon
              return (
                <motion.div key={cap.num}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="rounded-[2rem] border border-ink/10 bg-white p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl accent-gradient text-white shadow-md shadow-iris/20">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <span className="text-xs font-mono font-bold text-iris/70">{cap.num}</span>
                          <h3 className="font-display text-2xl text-ink">{cap.title}</h3>
                        </div>
                      </div>
                      {cap.badge && (
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-iris/10 text-iris border border-iris/20">
                          {cap.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-medium text-iris text-sm mb-2">{cap.subtitle}</p>
                    <p className="text-sm leading-relaxed text-muted mb-5">{cap.desc}</p>

                    {cap.quote && (
                      <div className="mb-5 rounded-xl border border-iris/20 bg-iris/5 p-3.5 text-xs text-iris font-semibold italic">
                        "{cap.quote}"
                      </div>
                    )}

                    <ul className="grid gap-2 mb-4">
                      {cap.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-ink/80">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-iris/60" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. PRICING & PROMOTIONS SHOWCASE */}
      <section className="px-6 md:px-10 py-16 bg-mist/30">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] border border-ink/10 bg-white p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700 mb-4">
                  Pricing & Promotion Engine
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-ink">Pricing That Follows Your Actual Business Rules</h2>
                <p className="mt-4 text-muted leading-relaxed text-sm md:text-base">
                  Retailers need sophisticated pricing controls across stores and web channels. Nexora configures ERPNext Pricing Rules to enforce customer-specific pricing, volume tiers, campaign promotional rates, and strict margin guardrails.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-ink/10 bg-mist/20 p-3.5">
                    <p className="font-bold text-ink">Volume & Quantity Tiers</p>
                    <p className="text-muted mt-1">Automatic tier discounts based on cart item quantity.</p>
                  </div>
                  <div className="rounded-xl border border-ink/10 bg-mist/20 p-3.5">
                    <p className="font-bold text-ink">Store-Specific Pricing</p>
                    <p className="text-muted mt-1">Vary prices by physical location or web customer segment.</p>
                  </div>
                  <div className="rounded-xl border border-ink/10 bg-mist/20 p-3.5">
                    <p className="font-bold text-ink">Coupons & Loyalty Points</p>
                    <p className="text-muted mt-1">Redeem gift cards, promo codes, and loyalty balances.</p>
                  </div>
                  <div className="rounded-xl border border-ink/10 bg-mist/20 p-3.5">
                    <p className="font-bold text-ink">Margin Controls</p>
                    <p className="text-muted mt-1">Prevent cashiers from discounting below minimum gross margin.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-ink p-6 text-white font-mono text-xs space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/50">ERPNEXT PRICING RULE EVALUATOR</span>
                  <span className="text-emerald-400 font-bold">● ACTIVE</span>
                </div>
                <div className="space-y-2">
                  <div className="rounded-lg bg-white/5 p-3 flex justify-between">
                    <span className="text-white/70">Rule Type: Quantity Discount</span>
                    <span className="text-iris-light font-bold">Buy 5+ Get 15% Off</span>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 flex justify-between">
                    <span className="text-white/70">Applicable Channel:</span>
                    <span className="text-white">POS Store #01 & Web Shop</span>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3 flex justify-between items-center">
                    <span className="text-emerald-300">Margin Guardrail Check:</span>
                    <span className="text-emerald-400 font-bold">PASSED (Margin: 38%)</span>
                  </div>
                </div>
                <p className="text-[11px] text-white/50 italic font-sans pt-2 border-t border-white/10">
                  Nexora turns complex commercial rules into automated POS & Web checkout workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER EXPERIENCE (CUSTOMER-FACING VS INTERNAL) */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Full Spectrum Experience</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              The Customer Sees a Store.<br />You See a Connected Business.
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted">
              We combine front-end customer delight with operational back-end precision.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Customer Facing */}
            <div className="rounded-[2.5rem] border border-iris/20 bg-iris/5 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-iris/20 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-iris mb-6">
                  Customer-Facing Experience
                </span>
                <h3 className="font-display text-2xl text-ink mb-3">Modern Storefronts & Portals</h3>
                <p className="text-sm text-muted mb-6">
                  Delight shoppers with lightning-fast web apps, seamless mobile browsing, self-service portals, and live order tracking.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {['E-commerce Web Applications', 'Customer Self-Service Portals', 'Real-Time Package Tracking', 'Loyalty Balance & Rewards', 'Saved Payment Profiles', 'Instant WhatsApp Notifications'].map((item) => (
                    <div key={item} className="rounded-xl border border-iris/15 bg-white p-3 font-medium text-ink flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-iris flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Internal Operations */}
            <div className="rounded-[2.5rem] border border-ink/10 bg-mist/30 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-ink mb-6">
                  Internal Operational Controls
                </span>
                <h3 className="font-display text-2xl text-ink mb-3">Command & Execution Tools</h3>
                <p className="text-sm text-muted mb-6">
                  Empower store cashiers, warehouse pickers, couriers, and executives with role-tailored dashboards and mobile tools.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {['Retail Counter POS Screens', 'Warehouse Barcode Scanner Apps', 'Delivery Driver Route Tools', 'Store Sales & Cashier Dashboards', 'Purchasing & Stock Alerts', 'Executive Margin Analytics'].map((item) => (
                    <div key={item} className="rounded-xl border border-ink/10 bg-white p-3 font-medium text-ink flex items-center gap-2">
                      <BarChart3 className="h-3.5 w-3.5 text-ink flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEXORA SIGNATURE RETAIL FRAMEWORK */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Retail Engineering Methodology</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              The Nexora Retail Framework
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              SELL → SYNCHRONIZE → FULFILL → RECONCILE → RETAIN → OPTIMIZE
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {framework.map((f, i) => (
              <motion.div key={f.step}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[1.75rem] border border-ink/10 bg-white p-7">
                <span className="font-mono text-xs font-bold text-iris/70 px-2.5 py-1 rounded-full bg-iris/5 border border-iris/15">
                  {f.title}
                </span>
                <p className="text-sm text-muted leading-relaxed mt-4">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEXORA RETAIL ARCHITECTURE DIAGRAM */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">System Topology</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              One Retail Business. One Connected System.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Every sales channel feeds the same operational ERPNext core.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-ink/10 bg-ink p-8 md:p-12 text-white font-mono">
            <div className="flex flex-col items-center space-y-6 text-center text-xs">
              <div className="rounded-full bg-white/10 border border-white/20 px-6 py-2 text-white font-bold text-sm">
                CUSTOMERS & SHOPPERS
              </div>
              <div className="h-6 w-0.5 bg-white/20" />

              <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
                <div className="rounded-2xl bg-white/5 border border-white/15 p-4 text-center">
                  <p className="text-xs text-white/50 font-sans">PHYSICAL STORES</p>
                  <p className="font-bold text-sm text-white mt-1">Retail POS</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/15 p-4 text-center">
                  <p className="text-xs text-white/50 font-sans">DIGITAL STOREFRONT</p>
                  <p className="font-bold text-sm text-white mt-1">E-Commerce Web</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/15 p-4 text-center">
                  <p className="text-xs text-white/50 font-sans">MARKETPLACES</p>
                  <p className="font-bold text-sm text-white mt-1">Marketplace APIs</p>
                </div>
              </div>

              <div className="h-6 w-0.5 bg-white/20" />

              <div className="rounded-2xl bg-iris/20 border border-iris/40 px-8 py-3 text-iris-light font-bold text-sm w-full max-w-xl">
                NEXORA INTEGRATION LAYER (MAP → CONNECT → SYNCHRONIZE → AUTOMATE)
              </div>

              <div className="h-6 w-0.5 bg-white/20" />

              <div className="rounded-2xl bg-white/10 border border-white/20 px-10 py-4 text-white font-bold text-base w-full max-w-2xl">
                ERPNext OPERATIONAL CORE
              </div>

              <div className="h-6 w-0.5 bg-white/20" />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                <div className="rounded-xl bg-white/5 p-3 text-center text-xs">
                  <p className="text-white/50">INVENTORY</p>
                  <p className="text-emerald-400 font-bold">Multi-Warehouse</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3 text-center text-xs">
                  <p className="text-white/50">FULFILLMENT</p>
                  <p className="text-emerald-400 font-bold">Pick-Pack-Ship</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3 text-center text-xs">
                  <p className="text-white/50">FINANCE</p>
                  <p className="text-emerald-400 font-bold">Automated Ledger</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3 text-center text-xs">
                  <p className="text-white/50">PAYMENTS</p>
                  <p className="text-emerald-400 font-bold">Reconciled Payouts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MOBILE RETAIL OPERATIONS INTERACTIVE DEMO */}
      <section className="px-6 md:px-10 py-20 bg-mist/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Role-Based Mobile Applications</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Put Retail Operations in Your Team's Hands
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Purpose-built mobile views connected directly to Frappe and ERPNext.
            </p>
          </div>

          {/* Role selector tabs */}
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {mobileRoles.map((r) => (
              <button key={r.id}
                onClick={() => setActiveRole(r.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                  activeRole === r.id
                    ? 'accent-gradient text-white shadow-md'
                    : 'bg-white border border-ink/10 text-ink hover:bg-mist'
                }`}>
                {r.role}
              </button>
            ))}
          </div>

          {/* Active Role Content */}
          <div className="rounded-[2.5rem] border border-ink/10 bg-white p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <span className="text-xs font-mono font-bold text-iris uppercase tracking-wider">{currentRoleData.focus}</span>
                <h3 className="font-display text-3xl text-ink mt-2 mb-4">{currentRoleData.role}</h3>
                <ul className="space-y-3 mb-6">
                  {currentRoleData.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-ink p-6 text-white font-mono text-xs space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/50">{currentRoleData.demo.title}</span>
                  <span className="text-emerald-400 font-bold">● LIVE SCREEN</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {currentRoleData.demo.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl bg-white/5 p-3 text-center">
                      <p className="text-[10px] text-white/50">{m.label}</p>
                      <p className={`text-base font-bold mt-1 ${m.highlight}`}>{m.val}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-white/40 italic font-sans pt-2 border-t border-white/10">
                  Powered by Frappe Mobile REST APIs & real-time socket events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. AUTOMATION WORKFLOWS */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Workflow Engine</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Don't Let Your Team Become the Workflow Engine
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Automate what repeats. Connect what is disconnected. Build what doesn't exist.
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {automationScenarios.map((a) => (
              <button key={a.id}
                onClick={() => setActiveAutomation(a.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                  activeAutomation === a.id
                    ? 'accent-gradient text-white shadow-md'
                    : 'bg-mist border border-ink/10 text-ink hover:bg-mist/80'
                }`}>
                {a.title}
              </button>
            ))}
          </div>

          <div className="rounded-[2.5rem] border border-ink/10 bg-mist/20 p-8 md:p-12">
            <h3 className="font-display text-2xl text-ink mb-1">{currentAutoData.title}</h3>
            <p className="text-xs text-muted mb-8">{currentAutoData.subtitle}</p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {currentAutoData.steps.map((st, i) => (
                <div key={st.label} className="rounded-2xl border border-ink/10 bg-white p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-iris bg-iris/10 px-2 py-0.5 rounded-full">
                      STEP 0{i + 1}
                    </span>
                    <p className="font-display text-sm text-ink mt-2 mb-1">{st.label}</p>
                    <p className="text-xs text-muted">{st.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHAT MAKES NEXORA DIFFERENT */}
      <section className="px-6 md:px-10 py-20 bg-mist/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Nexora Advantage</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              We Build the Retail System Around How You Actually Sell
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted">
              A fashion brand, FMCG distributor, electronics store, and D2C business don't sell the same way. We tailor every technology layer to your exact commercial model.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { tech: 'ERPNext Core', desc: 'Point of Sale, Sales Orders, Inventory, Purchasing, and General Ledger Accounting.' },
              { tech: 'Frappe Framework', desc: 'Custom business logic, bespoke Doctypes, specialized approval flows, and reports.' },
              { tech: 'Web Applications', desc: 'High-converting e-commerce storefronts, customer self-service portals, and brand sites.' },
              { tech: 'Mobile Applications', desc: 'Store counter tools, warehouse barcode pickers, and last-mile delivery driver apps.' },
              { tech: 'Third-Party Integrations', desc: 'Payment gateways, courier logistics APIs, WhatsApp messaging, and marketplaces.' },
              { tech: 'Automation Engine', desc: 'Scheduled stock replenishment, automated reconciliation, and event-driven alerts.' },
            ].map((box) => (
              <div key={box.tech} className="rounded-[1.75rem] border border-ink/10 bg-white p-7">
                <span className="font-mono text-xs font-bold text-iris bg-iris/5 border border-iris/15 px-2.5 py-1 rounded-full">
                  {box.tech}
                </span>
                <p className="text-sm text-muted mt-4 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. EXISTING NEXORA PROOF (FMCG DISTRIBUTOR CASE STUDY) */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] border border-ink/10 bg-mist/40 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-4">
                  Built for High-Volume Commerce
                </span>
                <p className="text-xs font-mono font-bold text-iris">FMCG Distribution Case Study</p>
                <h2 className="font-display text-4xl text-ink mt-1">Real-Time VAN Sales Across 32 Daily Routes</h2>
                <p className="mt-4 text-muted leading-relaxed text-sm md:text-base">
                  A high-volume consumer goods distributor needed field sales representatives across 32 daily routes to issue invoices, check stock, collect payments, and sync directly with ERPNext in real time.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="rounded-2xl border border-ink/10 bg-white p-4 text-center min-w-[120px]">
                    <p className="text-[10px] text-muted font-mono uppercase">Daily Routes</p>
                    <p className="font-display text-3xl text-iris mt-1">32</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center min-w-[120px]">
                    <p className="text-[10px] text-emerald-800 font-mono font-semibold uppercase">App Stack</p>
                    <p className="font-display text-2xl text-emerald-700 mt-1">Flutter + ERPNext</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/work" className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-md hover:shadow-lg transition-all">
                    Explore Case Studies <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-white p-6 space-y-4">
                <p className="font-display text-lg text-ink border-b border-ink/8 pb-3">Key Solution Deliverables</p>
                {[
                  { title: 'Flutter Mobile Van-Sales App', detail: 'Offline-capable mobile invoicing for route sales reps' },
                  { title: 'Real-Time ERPNext Stock Sync', detail: 'Van inventory balances updated per cash transaction' },
                  { title: 'Route Collection & Payment Log', detail: 'Cash & digital payment reconciliation per route session' },
                  { title: 'Automated Credit Limits', detail: 'Enforces store credit limits before issuing stock' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="text-xs text-muted">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. RETAIL SUB-INDUSTRIES */}
      <section className="px-6 md:px-10 py-20 bg-mist/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Tailored Solutions</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Built for Different Ways of Selling</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subIndustries.map((sub) => (
              <div key={sub.title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-xs">
                <h3 className="font-display text-lg text-ink mb-2">{sub.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] accent-gradient p-12 text-center text-white shadow-2xl shadow-iris/20">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready to transform your retail operations?</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Your Customers See the Sale.<br />We See Everything Behind It.
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-white/75 text-lg leading-relaxed">
              Nexora connects your storefronts, e-commerce channels, inventory, payments, fulfillment, and finance into one business system — so every sale moves the business forward.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-iris shadow-lg hover:shadow-xl transition-all">
                Build Your Connected Retail System <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/erpnext-integration" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-medium text-white hover:bg-white/20 transition-all">
                Explore Integration Service <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
