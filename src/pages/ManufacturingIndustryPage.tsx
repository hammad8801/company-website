import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, CheckCircle2,
  Factory, Layers, BarChart3,
  Truck, Calculator, ClipboardCheck, Package,
  Smartphone,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const lifecycleSteps = [
  { step: '01', label: 'Customer Order', desc: 'Sales Order & Specs', color: 'bg-violet-100 text-violet-800 border-violet-200' },
  { step: '02', label: 'Production Plan', desc: 'MRP & Capacity Planning', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  { step: '03', label: 'Material Requirements', desc: 'BOM Check & Shortage Analysis', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { step: '04', label: 'Purchase & Stock', desc: 'Material Requests & POs', color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
  { step: '05', label: 'Raw Material Receipt', desc: 'Incoming QC & Warehouse Entry', color: 'bg-teal-100 text-teal-800 border-teal-200' },
  { step: '06', label: 'Work Order & Issue', desc: 'Material Transfer to Shop Floor', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { step: '07', label: 'Shop Floor Ops', desc: 'Job Cards & Workstation Tracking', color: 'bg-green-100 text-green-800 border-green-200' },
  { step: '08', label: 'Quality Inspection', desc: 'In-Process & Final QC Checks', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { step: '09', label: 'Finished Goods', desc: 'Stock Entry & Warehouse Tagging', color: 'bg-orange-100 text-orange-800 border-orange-200' },
  { step: '10', label: 'Dispatch & Shipping', desc: 'Delivery Note & Logistics', color: 'bg-rose-100 text-rose-800 border-rose-200' },
  { step: '11', label: 'Invoice & Accounts', desc: 'Billing, Actual Costing & Margin', color: 'bg-iris/15 text-iris border-iris/25' },
]

const capabilities = [
  {
    num: '01', title: 'Production Planning & Scheduling', icon: Factory,
    subtitle: 'Plan production around real customer demand.',
    desc: 'Nexora helps manufacturers connect sales orders directly to Material Requirements Planning (MRP), production schedules, work orders, capacity planning, and WIP tracking.',
    bullets: ['Sales-order-driven production planning', 'Workstation & capacity scheduling', 'Job Card creation & operator allocation', 'Real-time WIP (Work in Progress) tracking'],
  },
  {
    num: '02', title: 'BOM & Product Structure', icon: Layers,
    subtitle: 'Know exactly what it takes to make your product.',
    desc: 'Structure complex multi-level Bills of Materials containing raw materials, sub-assemblies, operations, scrap allowances, alternate items, and variable routing costs.',
    bullets: ['Multi-level BOM engineering & versioning', 'Raw materials, sub-assemblies & scrap', 'Operation routing & workstation costing', 'Alternate material substitute rules'],
  },
  {
    num: '03', title: 'Raw Material & Stock Control', icon: Package,
    subtitle: 'Know what you have. Know what you need.',
    desc: 'Connect production demand to real-time inventory to calculate shortages, trigger automated purchase requests, track batch/serial numbers, and eliminate stockouts.',
    bullets: ['Automated reorder point calculation', 'Batch & serial number traceability', 'Warehouse stock transfers & valuation', 'Raw material & finished goods control'],
  },
  {
    num: '04', title: 'Shop Floor & Operator Tools', icon: Smartphone,
    subtitle: 'Give the shop floor the information it actually needs.',
    desc: 'Replace slow ERP screens with simple operator mobile/tablet interfaces, barcode scanners, job card touchscreens, and live workstation production boards.',
    bullets: ['Touchscreen job card logging', 'Barcode scanning for stock issue & picking', 'Live workstation status & downtime alerts', 'Mobile production completion logs'],
  },
  {
    num: '05', title: 'Quality Management (QC)', icon: ClipboardCheck,
    subtitle: 'Quality shouldn\'t happen after production is finished.',
    desc: 'Embed quality checkpoints into incoming raw material inspection, in-process workstation checks, and final pre-dispatch verification with clear CAPA workflows.',
    bullets: ['Incoming material QC inspection', 'In-process station parameter checks', 'Final pre-dispatch quality signoff', 'Non-conformance & corrective action tracking'],
  },
  {
    num: '06', title: 'Actual Manufacturing Costing', icon: Calculator,
    subtitle: 'Know what your product actually costs to produce.',
    desc: 'Capture exact raw material consumption, direct labour, workstation machine rates, and operational overheads to calculate precise product margins.',
    bullets: ['BOM planned vs. actual cost variance', 'Direct labour & workstation rate capture', 'Overhead allocation to finished goods', 'Product line gross margin analysis'],
  },
  {
    num: '07', title: 'Procurement & Supply Chain', icon: Truck,
    subtitle: 'Never let a missing part halt the assembly line.',
    desc: 'Automate purchase requisition workflows driven by production demand, track vendor lead times, evaluate supplier performance, and streamline receiving.',
    bullets: ['MRP-driven auto purchase requests', 'Supplier lead time & price comparison', 'Goods Receipt Note (GRN) matching', 'Vendor quality & delivery scoring'],
  },
  {
    num: '08', title: 'Finance & Management Visibility', icon: BarChart3,
    subtitle: 'Production affects finance. Finance affects decisions.',
    desc: 'Unify factory operations with financial accounting so management gets instant visibility into WIP value, production bottlenecks, inventory valuation, and margins.',
    bullets: ['Real-time WIP & inventory balance sheet', 'Work order cost breakdown & reporting', 'Executive factory KPI dashboards', '2-day month-end financial closing'],
  },
]

const framework = [
  { step: 'MAP', title: 'Map Operations', desc: 'Understand how materials, people, machinery, and documents move across your shop floor.' },
  { step: 'PLAN', title: 'Connect Planning', desc: 'Connect customer demand, BOMs, raw material inventory, and workstation capacity.' },
  { step: 'CONTROL', title: 'Control Workflows', desc: 'Enforce approval rules, stock issue authorization, and production work orders.' },
  { step: 'PRODUCE', title: 'Empower Workers', desc: 'Deploy simple mobile/tablet tools for shop floor operators and storekeepers.' },
  { step: 'VERIFY', title: 'Verify & Audit', desc: 'Track quality inspections, actual material consumption, costs, and downtime.' },
  { step: 'OPTIMIZE', title: 'Continuous Growth', desc: 'Use real-time analytics to reduce cycle times, eliminate waste, and scale output.' },
]

const personas = [
  {
    role: 'Executive Management',
    focus: 'Visibility & Profitability',
    bullets: ['Real-time WIP & inventory valuation', 'Gross margin breakdown by product line', 'Factory output vs. monthly target', 'On-time delivery performance'],
  },
  {
    role: 'Production Manager',
    focus: 'Capacity & Execution',
    bullets: ['Live workstation status & bottlenecks', 'Work order release & scheduling', 'Job card completion & operator status', 'Downtime & scrap rate alerts'],
  },
  {
    role: 'Storekeeper / Logistics',
    focus: 'Material Control & Traceability',
    bullets: ['Instant raw material shortage alerts', 'Barcode-assisted picking & stock issue', 'Batch & serial number tracking', 'Automated purchase requisitions'],
  },
  {
    role: 'Finance & Accounts',
    focus: 'Cost Accuracy & Speed',
    bullets: ['Actual vs. estimated BOM costing', 'Automatic stock GL reconciliation', 'Simplified month-end closing (2 days)', 'Vendor invoice matching & GRN'],
  },
]

const subIndustries = [
  { title: 'Engineering & Fabrication', desc: 'Multi-level BOMs, job shop routing, cut-list optimization, and custom project costing.' },
  { title: 'FMCG & Process Manufacturing', desc: 'Batch manufacturing, recipe management, unit conversion, and high-speed packaging.' },
  { title: 'Food & Beverage', desc: 'Batch traceability, expiry date management, ingredient QC, and temperature logs.' },
  { title: 'Textile & Apparel', desc: 'Size/color/style variants, fabric consumption rules, garment operations, and subcontractor tracking.' },
  { title: 'Chemical Manufacturing', desc: 'Recipe yield calculations, hazardous material tracking, batch testing, and regulatory documentation.' },
  { title: 'Automotive & Components', desc: 'Precision component BOMs, just-in-time material dispatch, vendor quality control, and serial tracking.' },
]

export function ManufacturingIndustryPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Manufacturing' }]} />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-iris/8 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-violet-300/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-iris">
              Industry Vertical · Manufacturing
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-5xl">
              Manufacturing, connected from{' '}
              <span className="text-iris">material to finished product.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">
              Nexora helps manufacturers bring production, inventory, procurement, quality, sales, and finance
              into one connected system — using ERPNext, Frappe, automation, and custom applications built around how their factory actually works.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-6 py-4 shadow-sm">
              <span className="font-display text-sm font-medium text-ink">Understand the business</span>
              <span className="text-iris font-bold">→</span>
              <span className="text-sm font-medium text-ink">Configure foundation</span>
              <span className="text-iris font-bold">→</span>
              <span className="text-sm font-medium text-ink">Automate gaps</span>
              <span className="text-iris font-bold">→</span>
              <span className="text-sm font-medium text-ink">Build custom layer</span>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl transition-all">
                Discuss Your Manufacturing Process <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/work/steel-fabrication" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-mist transition-all">
                Steel Fabrication Case Study (9-Day to 2-Day Close) <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE REAL MANUFACTURING PROBLEM */}
      <section className="px-6 md:px-10 py-20 bg-white border-y border-ink/8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Fragmented Factory Problem</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              Your factory is one business.<br />Your data shouldn't be scattered across ten systems.
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted">
              When production, stock, and accounting operate in isolated spreadsheets and chat apps,
              hidden delays and cost overruns slow down the entire business.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Fragmented Reality */}
            <div className="rounded-[2rem] border border-red-200 bg-red-50/30 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-600 mb-6">
                  Typical Fragmented Setup
                </span>
                <p className="font-display text-2xl text-ink mb-6">Disjointed Tools & Manual Hand-Offs</p>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    { from: 'Sales Team', tool: 'Excel Spreadsheet', problem: 'No visibility into raw material stock' },
                    { from: 'Production Planner', tool: 'Whiteboard & Paper', problem: 'Manual job scheduling & delays' },
                    { from: 'Storekeeper', tool: 'Separate Inventory Tool', problem: 'Stockouts & unrecorded material issue' },
                    { from: 'Shop Floor Workers', tool: 'WhatsApp & Verbal', problem: 'No live tracking of WIP or scrap' },
                    { from: 'Quality Inspector', tool: 'Physical Paper Checklists', problem: 'Defects found too late in process' },
                    { from: 'Finance & Accounts', tool: 'Accounting Software', problem: '9-day month-end close & cost variance' },
                  ].map((row) => (
                    <div key={row.from} className="rounded-xl border border-red-100 bg-white p-3.5 flex flex-col gap-1">
                      <div className="flex justify-between items-center text-ink font-semibold">
                        <span>{row.from}</span>
                        <span className="text-red-500 font-normal">{row.tool}</span>
                      </div>
                      <span className="text-red-600/80 text-[11px] font-sans">⚠ Issue: {row.problem}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-xs text-red-600 font-medium italic">Result: Material shortages, delayed delivery, high WIP cost, difficult month-end close.</p>
            </div>

            {/* Nexora Connected System */}
            <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/30 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-6">
                  The Nexora Connected System
                </span>
                <p className="font-display text-2xl text-ink mb-6">One Connected Production Platform</p>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    { stage: 'Sales Order', solution: 'Automated BOM stock reservation in ERPNext' },
                    { stage: 'Production Plan', solution: 'Automatic Material Requirements Planning (MRP)' },
                    { stage: 'Purchase Request', solution: 'Shortage-triggered auto purchase order flow' },
                    { stage: 'Shop Floor', solution: 'Mobile touchscreen job cards for operators' },
                    { stage: 'Quality Check', solution: 'In-process parameter checks with instant alerts' },
                    { stage: 'Finance & GL', solution: 'Automatic WIP valuation & 2-day month-end close' },
                  ].map((row) => (
                    <div key={row.stage} className="rounded-xl border border-emerald-100 bg-white p-3.5 flex flex-col gap-1">
                      <div className="flex justify-between items-center text-ink font-semibold">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                          {row.stage}
                        </span>
                        <span className="text-emerald-700 font-sans font-medium text-[11px]">Connected</span>
                      </div>
                      <span className="text-emerald-800/80 text-[11px] font-sans pl-6">{row.solution}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-xs text-emerald-700 font-medium italic">Result: 100% material visibility, zero stockouts, automated costing, 2-day financial close.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MANUFACTURING LIFECYCLE (CENTERPIECE) */}
      <section className="px-6 md:px-10 py-20 bg-mist/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">End-to-End Production Process</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              From Customer Order to Finished Product.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              One production process. One connected system. Here is how data moves seamlessly through every step of your factory.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {lifecycleSteps.map((s, idx) => (
              <motion.div key={s.step}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border p-4 flex flex-col justify-between bg-white shadow-sm hover:border-iris/30 transition-all`}>
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

      {/* SECTION 4: 8 MANUFACTURING CAPABILITIES */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">What Nexora Delivers</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              8 Core Manufacturing Capabilities
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              We configure ERPNext's manufacturing core and build custom Frappe & mobile tools around your specific factory workflow.
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
                    <div className="flex items-start gap-4 mb-4">
                      <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl accent-gradient text-white shadow-md shadow-iris/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <span className="text-xs font-mono font-bold text-iris/70">{cap.num}</span>
                        <h3 className="font-display text-2xl text-ink">{cap.title}</h3>
                      </div>
                    </div>
                    <p className="font-medium text-iris text-sm mb-2">{cap.subtitle}</p>
                    <p className="text-sm leading-relaxed text-muted mb-5">{cap.desc}</p>
                    <ul className="grid gap-2 mb-6">
                      {cap.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-ink/80">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-iris/60" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* SHOP FLOOR SCREEN DEMO */}
          <div className="mt-12 rounded-[2.5rem] border border-ink/10 bg-ink p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-iris/40 bg-iris/20 px-3.5 py-1 text-xs font-mono font-semibold text-iris-light uppercase">
                  Mobile / Touchscreen Operator View
                </span>
                <h3 className="font-display text-3xl text-white mt-3">Shop Floor Interface Demonstration</h3>
                <p className="text-white/60 text-sm mt-1">Simple operator views connected directly to Frappe & ERPNext.</p>
              </div>
              <Link to="/services/mobile-apps" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-medium text-white hover:bg-white/20 transition-all">
                Explore Mobile Development <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 font-mono">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-4">
                <div className="flex justify-between items-center text-xs border-b border-white/10 pb-3">
                  <span className="text-white/50">WORKSTATION: CNC-CUTTING-01</span>
                  <span className="text-emerald-400 font-bold">● ACTIVE</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-white/50">WORK ORDER</p>
                  <p className="text-lg font-bold text-white">#WO-1042 · Steel Mounting Frame</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl bg-white/5 p-3">
                    <p className="text-white/50 text-[10px]">PLANNED</p>
                    <p className="text-base font-bold text-white mt-1">100 pcs</p>
                  </div>
                  <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3">
                    <p className="text-emerald-400 text-[10px]">COMPLETED</p>
                    <p className="text-base font-bold text-emerald-400 mt-1">72 pcs</p>
                  </div>
                  <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-3">
                    <p className="text-amber-400 text-[10px]">REMAINING</p>
                    <p className="text-base font-bold text-amber-400 mt-1">28 pcs</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-4 text-xs">
                <p className="text-white/50 border-b border-white/10 pb-2">OPERATION STAGE ROUTING</p>
                <div className="space-y-2 font-sans">
                  {[
                    { op: '1. Laser Cutting', status: 'Completed', color: 'text-emerald-400' },
                    { op: '2. Precision Bending', status: 'Completed', color: 'text-emerald-400' },
                    { op: '3. Robotic Welding', status: 'In Progress (72/100)', color: 'text-amber-400 font-bold' },
                    { op: '4. Powder Coating', status: 'Queued', color: 'text-white/40' },
                    { op: '5. Quality Signoff & Packing', status: 'Queued', color: 'text-white/40' },
                  ].map((row) => (
                    <div key={row.op} className="flex justify-between items-center rounded-lg bg-white/5 p-2.5">
                      <span className="text-white/80">{row.op}</span>
                      <span className={`${row.color} text-xs font-mono`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE NEXORA MANUFACTURING FRAMEWORK */}
      <section className="bg-mist/30 px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Nexora Methodology</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              The Nexora Manufacturing Framework
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Six structured phases to transform chaotic shop floor routines into predictable, profitable output.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {framework.map((f, i) => (
              <motion.div key={f.step}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[1.75rem] border border-ink/10 bg-white p-7">
                <span className="font-mono text-xs font-bold text-iris/70 px-2.5 py-1 rounded-full bg-iris/5 border border-iris/15">
                  PHASE 0{i + 1} · {f.step}
                </span>
                <h3 className="font-display text-xl text-ink mt-4 mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PROVEN CASE STUDY — STEEL FABRICATION */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] border border-ink/10 bg-mist/40 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-4">
                  Proven Case Study · Steel Fabrication
                </span>
                <h2 className="font-display text-4xl text-ink">From 9-Day Month-End Close to 2-Day Close.</h2>
                <p className="mt-4 text-muted leading-relaxed">
                  A 240-employee structural steel fabrication enterprise needed production planning, job shop WIP,
                  multi-warehouse raw material control, and financial accounting brought onto one unified ERPNext system.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-2xl border border-ink/10 bg-white p-4">
                    <p className="text-xs text-muted uppercase tracking-wider font-mono">Previous Close</p>
                    <p className="font-display text-3xl text-red-600 mt-1">9 Days</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-xs text-emerald-800 uppercase tracking-wider font-mono font-semibold">Nexora ERPNext Close</p>
                    <p className="font-display text-3xl text-emerald-600 mt-1">2 Days</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/work/steel-fabrication" className="inline-flex items-center gap-2 rounded-full accent-gradient px-6 py-3 text-sm font-medium text-white shadow-md hover:shadow-lg transition-all">
                    Read Full Fabrication Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-white p-6 space-y-4">
                <p className="font-display text-lg text-ink border-b border-ink/8 pb-3">What Nexora Connected</p>
                {[
                  { title: 'Production & Cutting Lists', detail: 'Integrated nesting cut-lists directly with ERPNext BOMs & Job Cards' },
                  { title: 'Multi-Warehouse Raw Materials', detail: 'Real-time steel plate & profile stock tracking across 3 factory sites' },
                  { title: 'Actual Project Costing', detail: 'Direct welding, labour, and galvanizing costs logged per project' },
                  { title: 'Financial Reconciliation', detail: 'Automated WIP inventory movement to General Ledger' },
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

      {/* SECTION 7: WHAT YOUR TEAM SEES (PERSONAS) */}
      <section className="px-6 md:px-10 py-20 bg-mist/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Role-Based Dashboards</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              What Every Stakeholder Sees
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              The right information delivered to the right role — from boardroom executives to shop floor operators.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {personas.map((p) => (
              <div key={p.role} className="rounded-[2rem] border border-ink/10 bg-white p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-iris uppercase tracking-wider font-semibold">{p.focus}</span>
                  <h3 className="font-display text-xl text-ink mt-2 mb-4">{p.role}</h3>
                  <ul className="space-y-2.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-ink/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-iris flex-shrink-0 mt-1.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: SUB-INDUSTRIES */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Tailored Solutions</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Manufacturing Sectors We Serve</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subIndustries.map((sub) => (
              <div key={sub.title} className="rounded-2xl border border-ink/10 bg-mist/20 p-6">
                <h3 className="font-display text-lg text-ink mb-2">{sub.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] accent-gradient p-12 text-center text-white shadow-2xl shadow-iris/20">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">Ready to transform your factory?</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Don't Just Digitize the Factory. Connect It.
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-white/75 text-lg leading-relaxed">
              Nexora helps manufacturers replace disconnected spreadsheets with a connected business system built around how their factory actually works.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-iris shadow-lg hover:shadow-xl transition-all">
                Discuss Your Manufacturing Process <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services/automation-custom-software" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-medium text-white hover:bg-white/20 transition-all">
                See Custom Software & Automation <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
