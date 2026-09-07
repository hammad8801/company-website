import { ContactLink } from '@/components/ContactLink'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, ArrowDown, CheckCircle2, ArrowUpRight,
  Truck, Warehouse, Package, MapPin, BarChart3, Clock, AlertTriangle,
  QrCode, Smartphone, ShieldCheck, Zap, FileText,
  Boxes, Navigation, CheckSquare, PhoneCall, Building2,
  CreditCard, Compass
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } }
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

// 12-Step Logistics Flow Steps
const logisticsFlowSteps = [
  { step: '01', title: 'Supplier', desc: 'Vendor dispatch & PO release', icon: Building2, color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { step: '02', title: 'Procurement', desc: 'SLA tracking & landed costing', icon: FileText, color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  { step: '03', title: 'Inbound Receipt', desc: 'Dock receiving & barcode check-in', icon: QrCode, color: 'bg-purple-100 text-purple-800 border-purple-200' },
  { step: '04', title: 'Warehouse Storage', desc: 'Put-away to Rack/Shelf/Bin', icon: Warehouse, color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { step: '05', title: 'Inventory Control', desc: 'Live stock reservation & FEFO', icon: Boxes, color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { step: '06', title: 'Customer Order', desc: 'Order intake from E-Com/EDI/B2B', icon: Package, color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
  { step: '07', title: 'Pick & Pack', desc: 'Mobile pick lists & wave picking', icon: CheckSquare, color: 'bg-sky-100 text-sky-800 border-sky-200' },
  { step: '08', title: 'Dispatch Planning', desc: 'Delivery Trip creation & routing', icon: Navigation, color: 'bg-violet-100 text-violet-800 border-violet-200' },
  { step: '09', title: 'Transport & Fleet', desc: 'GPS tracking & carrier API sync', icon: Truck, color: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200' },
  { step: '10', title: 'Delivery & POD', desc: 'Geo-stamped signature & photo POD', icon: MapPin, color: 'bg-rose-100 text-rose-800 border-rose-200' },
  { step: '11', title: 'Invoice & Payment', desc: 'Delivery Note to Invoice conversion', icon: CreditCard, color: 'bg-orange-100 text-orange-800 border-orange-200' },
  { step: '12', title: 'Reconciliation', desc: 'Carrier freight & trip settlement', icon: BarChart3, color: 'bg-iris/15 text-iris border-iris/25' }
]

// 8 Core Logistics Capabilities
const capabilities = [
  {
    id: 'procurement',
    number: '01',
    title: 'Procurement & Supply Planning',
    tagline: 'Know What You Need Before You Need It.',
    description: 'Connect purchasing requirements with real-time warehouse inventory and demand forecasts, avoiding stockouts while preventing over-ordering.',
    bullets: [
      'Demand-driven automated reorder thresholds',
      'Supplier portal & purchase requisition approvals',
      'Expected receipt schedules & container tracking',
      'Landed-cost calculations (freight, duty, insurance)',
      'Supplier SLA & lead-time performance analytics'
    ],
    highlight: 'Configured around your actual procurement lead times and vendor constraints.'
  },
  {
    id: 'warehouse',
    number: '02',
    title: 'Warehouse Management (WMS)',
    tagline: 'Know Where Every Single Item Is.',
    description: 'Multi-level warehouse hierarchies down to the bin location, ensuring fast put-away and zero-error order picking.',
    bullets: [
      '5-tier hierarchy: Warehouse → Room → Row → Shelf → Bin',
      'Mobile barcode scanning for put-away & picking',
      'Batch & expiry date tracking (FEFO/FIFO enforcement)',
      'Serial number tracking for high-value items',
      'Cycle count audits without shutting down operations'
    ],
    highlight: 'Every movement leaves an audit-ready digital trail inside ERPNext.'
  },
  {
    id: 'inventory',
    number: '03',
    title: 'Real-Time Inventory Visibility',
    tagline: 'Know What You Have. Where It Is. And What Is Already Committed.',
    description: 'Distinguish between physical stock, reserved orders, and goods in transit across all regional distribution centers in one live dashboard.',
    bullets: [
      '3-State inventory view: Physical Stock | Reserved | In-Transit',
      'Multi-warehouse stock allocation logic',
      'Automated stock transfer request workflows',
      'Safety stock alerts & slow-moving stock identification',
      'Centralized visibility across regional fulfillment centers'
    ],
    highlight: 'Eliminates overselling and emergency stock transfers.'
  },
  {
    id: 'fulfillment',
    number: '04',
    title: 'Order Fulfillment & Pick/Pack',
    tagline: 'From Order to Dispatch Without the Information Gap.',
    description: 'Seamless transition from incoming customer order to reserved stock, picking list generation, barcode verification, and packing slip creation.',
    bullets: [
      'Automated pick list generation by warehouse zone',
      'Wave picking & zone picking support for volume operations',
      'Barcode validation at packing stations',
      'Automated Delivery Note & shipping label creation',
      'Real-time order status updates to sales and customers'
    ],
    highlight: 'No manual handoffs or paper-based pick lists.'
  },
  {
    id: 'transport',
    number: '05',
    title: 'Transport & Delivery Management',
    tagline: 'Dispatch Is Not the End. It Is Where Visibility Matters Most.',
    description: 'Group orders into multi-stop delivery trips, assign drivers and vehicles, and track transit progress from dispatcher dashboard to mobile app.',
    bullets: [
      'ERPNext Delivery Trip planning & stop sequencing',
      'Vehicle availability, capacity & fuel tracking',
      'Third-party 3PL carrier integration (API webhooks)',
      'Real-time driver location & ETA calculations',
      'Dispatch control center for fleet managers'
    ],
    highlight: 'Bridges office dispatchers with drivers on the road.'
  },
  {
    id: 'shipment-tracking',
    number: '06',
    title: 'Shipment Tracking & Status Visibility',
    tagline: 'Know Where the Shipment Is. Without Calling Someone.',
    description: 'Eliminate phone tags between customer service, dispatchers, and drivers with centralized shipment tracking and automated milestones.',
    bullets: [
      'Unified tracking portal for internal teams and customers',
      'Air Waybill (AWB) and carrier tracking code linkage',
      'Automated SMS & WhatsApp shipment milestone alerts',
      'Estimated vs actual delivery time metrics',
      'Client self-service tracking links'
    ],
    highlight: 'Replaces constant driver check-in calls with automated telemetry.'
  },
  {
    id: 'proof-of-delivery',
    number: '07',
    title: 'Mobile Proof of Delivery (POD)',
    tagline: 'Delivery Completed Should Mean More Than "Driver Said So."',
    description: 'Capture verifiable digital proof at the moment of delivery, triggering immediate invoicing and customer receipt confirmations.',
    bullets: [
      'Digital signature capture on driver mobile screen',
      'Photo upload for delivered packages or unloading docks',
      'GPS location & timestamp verification stamp',
      'Instant cloud sync to ERPNext Delivery Note',
      'Immediate delivery confirmation email/SMS to buyer'
    ],
    highlight: 'Verifiable proof that eliminates delivery dispute delays.'
  },
  {
    id: 'billing-finance',
    number: '08',
    title: 'Logistics Billing & Freight Margin',
    tagline: 'The Shipment Should End in the Books Too.',
    description: 'Convert completed delivery notes into audit-ready sales invoices while tracking freight costs against revenue to protect operating margins.',
    bullets: [
      'Automated Delivery Note to Sales Invoice conversion',
      'Freight cost vs customer bill-to reconciliation',
      'COD (Cash on Delivery) driver cash settlement workflows',
      'Multi-currency freight & customs invoice handling',
      'Real-time profit margin calculation per shipment'
    ],
    highlight: 'Connects operational movements directly to ledger profitability.'
  }
]

// Mobile Roles for Logistics
const mobileRoles = [
  {
    id: 'warehouse',
    role: 'Warehouse Operator',
    icon: Warehouse,
    tagline: 'Deskless Warehouse Execution',
    metrics: [
      { label: 'Active Pick Lists', val: '14 Orders' },
      { label: 'Bin Scan Accuracy', val: '99.8%' },
      { label: 'Put-Away Queue', val: '6 Pallets' }
    ],
    actions: ['Scan Receiving Barcode', 'Zone Wave Pick', 'Packing station check', 'Stock Transfer confirm']
  },
  {
    id: 'driver',
    role: 'Delivery Driver / Van Rep',
    icon: Truck,
    tagline: 'On-the-Road Trip Companion',
    metrics: [
      { label: 'Stops Today', val: '18 Delivery Stops' },
      { label: 'On-Time Rate', val: '96.2%' },
      { label: 'COD Collected', val: '₹48,500' }
    ],
    actions: ['Navigate to Next Stop', 'Capture Customer Signature', 'Photo Proof of Unloading', 'Record Cash / UPI Collection']
  },
  {
    id: 'supervisor',
    role: 'Operations Supervisor',
    icon: Navigation,
    tagline: 'Live Control Center',
    metrics: [
      { label: 'Active Trucks', val: '24 On Route' },
      { label: 'Exceptions Alert', val: '2 Delays' },
      { label: 'Dispatch Velocity', val: '42 Shipments/hr' }
    ],
    actions: ['Reassign Delayed Route', 'Approve Urgent Transfer', 'Review Exception Logs', 'Broadcast Fleet Alert']
  },
  {
    id: 'field-sales',
    role: 'Van Sales & Distribution',
    icon: Smartphone,
    tagline: 'Route-Sales & Instant Invoicing',
    metrics: [
      { label: 'Routes Active', val: '32 Daily Routes' },
      { label: 'Van Stock Balance', val: 'Live Sync' },
      { label: 'Daily Outlets Hit', val: '140 Stores' }
    ],
    actions: ['Check Van Inventory', 'Issue On-Site Invoice', 'Collect Instant Payment', 'Reconcile End-of-Day Stock']
  }
]

// Exception Handling Scenarios
const exceptionScenarios = [
  {
    title: 'Shipment Delayed in Transit',
    cause: 'Traffic breakdown or port customs hold',
    automatedAction: 'ERPNext flags trip status, recalculates ETA, sends proactive SMS to customer, and alerts logistics supervisor dashboard.',
    icon: Clock,
    badge: 'border-amber-200 bg-amber-50 text-amber-800'
  },
  {
    title: 'Partial Shortage / Damaged Stock at Dock',
    cause: 'Item damaged during transport or missing box',
    automatedAction: 'Driver captures photo on mobile POD; system creates Partial Delivery Note, auto-generates Stock Claim, and alerts QC team.',
    icon: AlertTriangle,
    badge: 'border-red-200 bg-red-50 text-red-800'
  },
  {
    title: 'Customer Unavailable for Delivery',
    cause: 'Store closed or contact person unreachable',
    automatedAction: 'Driver marks Failed Delivery with GPS location proof; system auto-schedules re-delivery attempt and notifies dispatch.',
    icon: PhoneCall,
    badge: 'border-purple-200 bg-purple-50 text-purple-800'
  }
]

// Logistics Sub-Industries
const subIndustries = [
  { title: 'Transport & Fleet Operations', desc: 'Dispatch planning, route sequencing, driver mobile apps, vehicle maintenance & delivery trip visibility.', icon: Truck },
  { title: 'Warehousing & Distribution', desc: 'Bin-level inventory control, barcode picking, cross-docking, transfers & warehouse fulfillment.', icon: Warehouse },
  { title: 'FMCG & Van Sales Distribution', desc: 'Route-based distribution, mobile van sales, stock reconciliation & instant store invoicing.', icon: Boxes },
  { title: 'E-Commerce Logistics & Fulfillment', desc: 'Multi-channel order intake, pick-pack-ship automation, courier API integration & returns.', icon: Package },
  { title: 'Freight & Cargo Forwarding', desc: 'Shipment tracking, AWB management, customs duty accounting, landed cost & carrier cost matching.', icon: MapPin },
  { title: 'Manufacturing Supply Chain', desc: 'Raw material procurement, supplier schedules, inbound dock management & factory replenishment.', icon: Building2 }
]

export function LogisticsSupplyChainIndustryPage() {
  const [activeTab, setActiveTab] = useState<(typeof mobileRoles)[number]['id']>('driver')
  const [selectedCapability, setSelectedCapability] = useState('procurement')

  const currentRole = mobileRoles.find((r) => r.id === activeTab)!
  const currentCapability = capabilities.find((c) => c.id === selectedCapability)!

  return (
    <main className="pb-24 bg-canvas text-ink selection:bg-iris selection:text-white">
      {/* Top Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: 'Logistics & Supply Chain' }
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-16 pb-20 md:pt-20 md:pb-24">
        {/* Glowing Background Accent */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-iris/8 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-sky-300/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Industry Badge */}
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-iris">
              <Truck className="h-3.5 w-3.5 text-iris" />
              <span>Industry Vertical · Logistics & Supply Chain</span>
            </motion.div>

            {/* Core Headline */}
            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-6xl md:text-7xl text-ink leading-[1.05] max-w-5xl">
              Move Goods. Move Data.{' '}
              <span className="text-iris">Move Faster.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p variants={fadeUp} className="mt-6 text-xl sm:text-2xl font-medium text-ink/90 leading-snug">
              Logistics, connected from warehouse to destination.
            </motion.p>

            {/* Supporting Paragraph */}
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
              From warehouse receiving to final delivery, Nexora connects the people, systems, and workflows that keep your supply chain moving — using ERPNext, Frappe, mobile apps, integrations, and automated logistics telemetry.
            </motion.p>

            {/* Tech Pill List */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2 text-xs font-mono font-medium text-ink/80">
              <span className="rounded-lg border border-ink/10 bg-white px-3 py-1.5 shadow-sm text-iris font-semibold">ERPNext Core</span>
              <span className="rounded-lg border border-ink/10 bg-white px-3 py-1.5 shadow-sm text-violet-700 font-semibold">Frappe Framework</span>
              <span className="rounded-lg border border-ink/10 bg-white px-3 py-1.5 shadow-sm text-sky-700 font-semibold">Mobile POD & Driver Apps</span>
              <span className="rounded-lg border border-ink/10 bg-white px-3 py-1.5 shadow-sm text-emerald-700 font-semibold">Carrier API Integrations</span>
              <span className="rounded-lg border border-ink/10 bg-white px-3 py-1.5 shadow-sm text-purple-700 font-semibold">Logistics Automation</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <ContactLink
                className="inline-flex items-center gap-2 rounded-full accent-gradient px-8 py-4 text-sm font-medium text-white shadow-lg shadow-iris/25 transition-all hover:shadow-xl hover:scale-[1.01]"
              >
                <span>Build My Logistics System</span>
                <ArrowRight className="h-4 w-4" />
              </ContactLink>

              <ContactLink
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-medium text-ink shadow-sm hover:bg-mist transition-all"
              >
                <span>Talk to Nexora</span>
                <ArrowUpRight className="h-4 w-4 text-muted" />
              </ContactLink>
            </motion.div>

            {/* Cross Navigation Links */}
            <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-ink/10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              <span className="font-semibold text-ink">Also See:</span>
              <Link to="/services/mobile-apps" className="hover:text-iris transition-colors underline underline-offset-4">
                Mobile Driver & Warehouse Apps →
              </Link>
              <Link to="/services/erpnext-integration" className="hover:text-iris transition-colors underline underline-offset-4">
                Carrier & API Integrations →
              </Link>
              <Link to="/services/automation-custom-software" className="hover:text-iris transition-colors underline underline-offset-4">
                Logistics Automation →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE CORE PROBLEM */}
      <section className="px-6 md:px-10 py-20 bg-white border-y border-ink/8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.22em] font-mono text-iris font-semibold">The Fragmented Logistics Gap</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              The shipment is moving.<br />
              <span className="text-muted">But is the information moving with it?</span>
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              When physical goods move across suppliers, docks, warehouses, and delivery vehicles, but operational data is trapped in manual logs and chat groups, business speed suffers.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* The Disconnected Reality */}
            <div className="rounded-[2rem] border border-red-200 bg-red-50/40 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="inline-flex items-center rounded-full border border-red-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-600">
                    Disconnected Logistics Bottleneck
                  </span>
                </div>
                <h3 className="font-display text-2xl text-ink mb-4">Fragmented Systems & Manual Handoffs</h3>
                <p className="text-sm text-muted mb-6">
                  Information is scattered across disjointed tools:
                </p>

                {/* Disconnected Apps Tags */}
                <div className="flex flex-wrap gap-2 text-xs font-mono mb-8">
                  {['Excel Logs', 'WhatsApp Groups', 'Email Dispatch', 'WMS Terminals', 'Driver Phones', 'Courier Portals', 'Paper Ledgers'].map((item) => (
                    <span key={item} className="rounded-lg border border-red-200 bg-white px-3 py-1.5 text-red-700">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 font-sans text-sm text-ink/90 border-t border-red-200/60 pt-6">
                  {[
                    'Manual re-keying of data at every warehouse handoff',
                    'Shipment status blind spots between dispatch & delivery',
                    'Stock balance mismatches between sales orders & warehouses',
                    'Constant phone check-in calls to drivers on the road',
                    'Delayed customer invoices waiting for paper proof of delivery',
                    'Slow, manual exception handling when shipments encounter delays'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span className="text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Nexora Connected Solution */}
            <div className="rounded-[2rem] border border-iris/25 bg-gradient-to-b from-iris/5 to-white p-8 flex flex-col justify-between shadow-lg shadow-iris/5">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex h-3 w-3 rounded-full bg-iris shadow-md shadow-iris/40" />
                  <span className="inline-flex items-center rounded-full border border-iris/25 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-iris">
                    The Nexora Connected Supply Chain
                  </span>
                </div>
                <h3 className="font-display text-2xl text-ink mb-4">Unified Operations & Live Telemetry</h3>
                <p className="text-sm text-muted mb-6">
                  Physical movements and digital updates sync in real time across one single source of operational truth.
                </p>

                {/* Unified System Badge */}
                <div className="rounded-xl border border-iris/20 bg-white p-4 font-mono text-xs text-ink mb-8 flex items-center justify-between shadow-sm">
                  <span className="font-semibold text-iris">[ERPNext Core] ── (API / Webhooks) ── [Mobile Driver & WMS]</span>
                  <CheckCircle2 className="h-4 w-4 text-iris" />
                </div>

                <div className="space-y-3 font-sans text-sm text-ink border-t border-iris/15 pt-6">
                  {[
                    'Automatic data flow from customer order to receipt confirmation',
                    'Live shipment tracking visible to dispatchers & customers',
                    'Synchronized stock balances across central & regional warehouses',
                    'Digital signature & photo Proof of Delivery on mobile',
                    'Instant delivery-to-invoice conversion with full tax compliance',
                    'Automated exception alerts for delayed or short shipments'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-iris shrink-0 mt-0.5" />
                      <span className="text-ink/90 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nexora Axiom */}
              <div className="mt-8 rounded-2xl border border-iris/20 bg-iris/5 p-4 text-center">
                <p className="text-sm font-semibold text-iris italic">
                  "Your supply chain is connected physically. Your systems should be connected digitally."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 12-STEP LOGISTICS FLOW */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.22em] font-mono text-iris font-semibold">End-to-End Visibility</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              From Supplier to Customer
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              One shipment can trigger up to 12 distinct business operations. Here is how Nexora connects every link in the physical and digital chain.
            </p>
          </div>

          {/* Grid of 12 Steps */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {logisticsFlowSteps.map((s) => {
              const IconComponent = s.icon
              return (
                <div
                  key={s.step}
                  className="group rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all hover:border-iris/30 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-iris">{s.step}</span>
                    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${s.color} border shadow-sm`}>
                      <IconComponent className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-iris transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* System Topology Diagram Card */}
          <div className="mt-16 rounded-[2rem] border border-ink/10 bg-white p-8 md:p-10 shadow-xl shadow-iris/5">
            <h3 className="font-display text-2xl font-bold text-ink text-center">
              The Digital Architecture Underneath
            </h3>
            <p className="mt-2 text-sm text-muted text-center max-w-xl mx-auto">
              How ERPNext Core, Nexora Automation, and field mobile tools orchestrate logistics telemetry.
            </p>

            {/* Topology Flowchart */}
            <div className="mt-8 overflow-x-auto">
              <div className="min-w-[700px] flex flex-col items-center gap-6 font-mono text-xs">
                {/* Layer 1: Core Systems */}
                <div className="w-full flex items-center justify-center gap-4">
                  <div className="rounded-xl border border-blue-200 bg-blue-50/80 px-8 py-4 text-blue-900 font-bold text-center shadow-sm">
                    ERPNext Core <br />
                    <span className="text-[11px] font-normal text-muted">Inventory • Sales • Accounts • Purchasing</span>
                  </div>
                </div>

                <ArrowDown className="h-5 w-5 text-iris animate-bounce" />

                {/* Layer 2: Nexora Automation Engine */}
                <div className="w-full rounded-2xl border border-iris/25 bg-iris/5 p-5 text-center">
                  <span className="font-bold text-iris text-sm tracking-wider">NEXORA LOGISTICS ENGINE</span>
                  <div className="mt-3 grid grid-cols-3 gap-3 text-[11px] text-ink font-medium">
                    <div className="rounded-lg border border-ink/10 bg-white p-3 shadow-sm">Delivery Trip Scheduler</div>
                    <div className="rounded-lg border border-ink/10 bg-white p-3 shadow-sm">Warehouse Barcode Router</div>
                    <div className="rounded-lg border border-ink/10 bg-white p-3 shadow-sm">Carrier API Webhook Gateway</div>
                  </div>
                </div>

                <ArrowDown className="h-5 w-5 text-iris" />

                {/* Layer 3: End Points */}
                <div className="w-full grid grid-cols-3 gap-4">
                  <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-4 text-center text-indigo-950 shadow-sm">
                    <Smartphone className="h-5 w-5 mx-auto mb-1 text-indigo-600" />
                    <strong className="block text-sm">Mobile Apps</strong>
                    <p className="text-[10px] text-muted">Driver POD & WMS Scanner</p>
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-center text-emerald-950 shadow-sm">
                    <QrCode className="h-5 w-5 mx-auto mb-1 text-emerald-600" />
                    <strong className="block text-sm">External APIs</strong>
                    <p className="text-[10px] text-muted">Couriers, WhatsApp & GPS</p>
                  </div>
                  <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-4 text-center text-violet-950 shadow-sm">
                    <BarChart3 className="h-5 w-5 mx-auto mb-1 text-violet-600" />
                    <strong className="block text-sm">Control Dashboards</strong>
                    <p className="text-[10px] text-muted">Dispatcher & Executive Views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 8 CORE LOGISTICS CAPABILITIES */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-white border-y border-ink/8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] font-mono text-iris font-semibold">What Nexora Delivers</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              8 Core Logistics Capabilities
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Configured around your specific operational rules, warehouse geometry, and carrier networks.
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-8 items-start">
            {/* Left Column: Capability Selector Tabs */}
            <div className="lg:col-span-5 space-y-2.5">
              {capabilities.map((cap) => {
                const isSelected = cap.id === selectedCapability
                return (
                  <button
                    key={cap.id}
                    onClick={() => setSelectedCapability(cap.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all border ${
                      isSelected
                        ? 'border-iris/40 bg-iris/5 text-ink shadow-md shadow-iris/5'
                        : 'border-ink/10 bg-white text-muted hover:border-ink/20 hover:text-ink'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-iris">{cap.number}</span>
                      <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? 'rotate-90 text-iris' : 'text-slate-400'}`} />
                    </div>
                    <h3 className="mt-2 font-display text-base font-bold">{cap.title}</h3>
                    <p className="mt-1 text-xs line-clamp-1 text-muted">{cap.tagline}</p>
                  </button>
                )
              })}
            </div>

            {/* Right Column: Active Capability Display Card */}
            <div className="mt-8 lg:mt-0 lg:col-span-7">
              <div className="rounded-[2rem] border border-ink/10 bg-canvas p-8 shadow-xl relative min-h-[480px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-iris bg-iris/10 border border-iris/20 px-3 py-1 rounded-lg">
                      Capability {currentCapability.number}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-ink">{currentCapability.title}</h3>
                  </div>

                  <p className="mt-4 text-base font-semibold text-iris">
                    "{currentCapability.tagline}"
                  </p>

                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {currentCapability.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-6 space-y-3">
                    {currentCapability.bullets.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-ink">
                        <CheckCircle2 className="h-4 w-4 text-iris shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlight Quote Box */}
                <div className="mt-8 rounded-2xl border border-iris/20 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold text-iris uppercase tracking-wider">
                    <Zap className="h-3.5 w-3.5" />
                    <span>The Nexora Engineering Differentiator</span>
                  </div>
                  <p className="mt-1 text-xs text-ink/90 font-medium">
                    {currentCapability.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE MOBILE SECTION */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] font-mono text-iris font-semibold">Deskless Logistics Tools</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink leading-tight">
              Your warehouse doesn't sit behind a desk.<br />
              <span className="text-iris">Neither should your software.</span>
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              The mobile app is only the front door. We build native Android & cross-platform Flutter tools that talk directly to ERPNext in real time.
            </p>
          </div>

          {/* Role Tabs */}
          <div className="mt-10 flex flex-wrap gap-3">
            {mobileRoles.map((role) => {
              const isActive = role.id === activeTab
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveTab(role.id)}
                  className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all border ${
                    isActive
                      ? 'border-iris bg-iris text-white shadow-md shadow-iris/25'
                      : 'border-ink/10 bg-white text-muted hover:border-ink/20 hover:text-ink'
                  }`}
                >
                  <role.icon className="h-4 w-4" />
                  <span>{role.role}</span>
                </button>
              )
            })}
          </div>

          {/* Interactive Mobile Screen Simulation Container */}
          <div className="mt-8 rounded-[2rem] border border-ink/10 bg-white p-8 shadow-xl lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-iris font-bold uppercase tracking-wider">{currentRole.tagline}</span>
              <h3 className="font-display text-2xl font-bold text-ink">{currentRole.role} Mobile View</h3>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {currentRole.metrics.map((m, i) => (
                  <div key={i} className="rounded-xl border border-ink/10 bg-canvas p-3">
                    <span className="text-[10px] font-mono text-muted uppercase block">{m.label}</span>
                    <span className="text-sm font-bold text-ink mt-1 block">{m.val}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons list */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-muted block">Mobile Actions Built into the App:</span>
                {currentRole.actions.map((act, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border border-ink/8 bg-mist/60 p-3 text-sm text-ink">
                    <CheckCircle2 className="h-4 w-4 text-iris" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Phone Mockup (Dark Screen inside sleek phone container) */}
            <div className="mt-8 lg:mt-0 lg:col-span-6 flex justify-center">
              <div className="w-[300px] rounded-[2.5rem] border-4 border-slate-800 bg-slate-950 p-4 shadow-2xl relative text-white">
                {/* Screen Top Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-3 border-b border-slate-800">
                  <span>9:41 AM</span>
                  <span className="text-cyan-400 font-bold">NEXORA MOBILE</span>
                  <span>100%</span>
                </div>

                {/* Simulated Screen Content */}
                <div className="mt-4 space-y-3">
                  <div className="rounded-xl bg-cyan-950/60 border border-cyan-500/30 p-3 text-center">
                    <span className="text-[10px] font-mono text-cyan-300 uppercase">Active Mobile Operation</span>
                    <p className="text-xs font-bold text-white mt-1">{currentRole.actions[0]}</p>
                  </div>

                  <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>ERP Status</span>
                      <span className="text-emerald-400 font-bold">● Live Cloud Sync</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Offline Buffer</span>
                      <span className="text-slate-200">Active (Auto-Sync)</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 text-center text-white text-xs font-bold shadow-lg">
                    Confirm & Post to ERPNext →
                  </div>
                </div>

                {/* Home indicator bar */}
                <div className="mt-6 mx-auto h-1 w-24 rounded-full bg-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXCEPTION MANAGEMENT SECTION */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-white border-y border-ink/8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] font-mono text-iris font-semibold">Design For Failure, Not Just Success</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              Logistics isn't about everything going right.<br />
              <span className="text-muted">It's about knowing when it doesn't.</span>
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Don't just automate the happy path. Automate what happens when a truck breaks down, a customer is absent, or stock arrives damaged at the dock.
            </p>
          </div>

          {/* Exception Scenarios */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {exceptionScenarios.map((sc, i) => {
              const IconComp = sc.icon
              return (
                <div key={i} className="rounded-[2rem] border border-ink/10 bg-canvas p-6 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${sc.badge} border font-bold`}>
                        <IconComp className="h-4 w-4" />
                      </span>
                      <h3 className="font-display text-lg font-bold text-ink">{sc.title}</h3>
                    </div>
                    <p className="mt-3 text-xs font-mono text-muted">
                      <strong>Root Cause:</strong> {sc.cause}
                    </p>
                    <div className="mt-4 rounded-xl bg-white p-4 border border-ink/10 shadow-sm">
                      <span className="text-[11px] font-bold text-iris uppercase tracking-wider block mb-1">
                        Automated Recovery Path:
                      </span>
                      <p className="text-xs text-ink/90 leading-relaxed">
                        {sc.automatedAction}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. THE NEXORA LOGISTICS FRAMEWORK */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.22em] font-mono text-iris font-semibold">Methodology</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              The Nexora Logistics Framework
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              A 6-stage engineering process for transforming fragmented logistics operations into connected digital networks.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { step: '01', name: 'PLAN', desc: 'Understand demand, orders, procurement schedules, and delivery constraints.', icon: Compass },
              { step: '02', name: 'STORE', desc: 'Control inventory across multi-level warehouses, rooms, shelves, and bins.', icon: Warehouse },
              { step: '03', name: 'MOVE', desc: 'Orchestrate picking, packing, stock transfers, and dock dispatch.', icon: Boxes },
              { step: '04', name: 'DELIVER', desc: 'Connect drivers, vehicles, routes, and carriers with live telemetry.', icon: Truck },
              { step: '05', name: 'VERIFY', desc: 'Confirm delivery via digital POD, reconcile inventory, and handle exceptions.', icon: CheckCircle2 },
              { step: '06', name: 'OPTIMIZE', desc: 'Use operational analytics to improve routes, inventory turn, and delivery costs.', icon: BarChart3 }
            ].map((f) => {
              const IconC = f.icon
              return (
                <div key={f.step} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm hover:border-iris/30 transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-iris">{f.step}</span>
                    <IconC className="h-5 w-5 text-muted" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink tracking-wider">{f.name}</h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. REAL-WORLD CASE STUDY PROOF POINT */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-white border-y border-ink/8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] border border-iris/25 bg-gradient-to-b from-iris/5 via-canvas to-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full border border-iris/20 bg-white px-3.5 py-1 text-xs font-semibold text-iris shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Proven Industry Case Study</span>
            </div>

            <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <h3 className="font-display text-2xl sm:text-4xl font-bold text-ink leading-tight">
                  FMCG Distributor: Real-Time VAN Sales Across 32 Daily Routes
                </h3>
                <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
                  A custom Flutter mobile sales application integrated directly with ERPNext, enabling real-time stock reconciliation, instant invoice issuing, and live route tracking for a regional FMCG distributor operating 32 daily delivery vans.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-iris">32</span>
                    <p className="text-xs text-muted font-mono mt-1">Daily Routes Tracked</p>
                  </div>
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-iris">100%</span>
                    <p className="text-xs text-muted font-mono mt-1">Van-to-Warehouse Sync</p>
                  </div>
                  <div>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-iris">0</span>
                    <p className="text-xs text-muted font-mono mt-1">End-of-Day Stock Gaps</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:mt-0 lg:col-span-5 flex flex-col items-center justify-center">
                <div className="rounded-2xl border border-ink/10 bg-white p-6 w-full text-center shadow-md">
                  <Truck className="h-10 w-10 text-iris mx-auto mb-3" />
                  <span className="text-xs font-mono text-muted block uppercase">Technology Architecture</span>
                  <p className="text-sm font-bold text-ink mt-1">Flutter Mobile + ERPNext Backend + Automated Reconciliation</p>
                  <Link
                    to="/work"
                    className="mt-6 inline-flex items-center gap-2 rounded-full accent-gradient px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-iris/25 hover:shadow-lg transition-all"
                  >
                    <span>Explore Work Case Studies</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SUB-INDUSTRIES */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] font-mono text-iris font-semibold">Supply Chain Vertical Depth</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              Built for Different Supply Chains
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Whether you manage a 3PL fulfillment warehouse, a fleet of delivery vans, or an e-commerce distribution hub.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subIndustries.map((sub, i) => {
              const SubIcon = sub.icon
              return (
                <div key={i} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm hover:border-iris/30 transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-iris/10 text-iris border border-iris/20">
                      <SubIcon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink">{sub.title}</h3>
                  </div>
                  <p className="mt-3 text-xs text-muted leading-relaxed">
                    {sub.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="px-6 md:px-10 py-24 md:py-32 relative overflow-hidden bg-white border-t border-ink/8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-iris/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-ink leading-tight">
            Keep the goods moving.<br />
            <span className="text-iris">Keep the business connected.</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Nexora connects the systems behind procurement, inventory, warehousing, dispatch, and delivery — giving your teams the information they need, right where they need it.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ContactLink
              className="inline-flex items-center justify-center gap-2 rounded-full accent-gradient px-8 py-4 text-base font-semibold text-white shadow-lg shadow-iris/25 transition-all hover:scale-[1.02] hover:shadow-iris/40"
            >
              <span>Build Your Connected Supply Chain</span>
              <ArrowRight className="h-5 w-5" />
            </ContactLink>

            <ContactLink
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-base font-semibold text-ink shadow-sm hover:bg-mist transition-all"
            >
              <span>Speak with a Logistics Tech Specialist</span>
              <ArrowUpRight className="h-5 w-5 text-muted" />
            </ContactLink>
          </div>
        </div>
      </section>
    </main>
  )
}
