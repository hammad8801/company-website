import { ContactLink } from '@/components/ContactLink'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight, ChevronRight, CheckCircle2, ArrowUpRight,
  HeartPulse, Activity, Calendar, Stethoscope, FlaskConical, Pill,
  CreditCard, Building2, Smartphone, ShieldCheck, Zap,
  FileText, Lock, Bed, Users, QrCode, ClipboardList,
  Bell, Sparkles, UserCheck
} from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } }
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

// 12-Step Healthcare Lifecycle Steps
const healthcareLifecycleSteps = [
  { step: '01', title: 'Intake & Registration', desc: 'Patient profile, demographic & insurance check', icon: UserCheck, color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { step: '02', title: 'Appointment Booking', desc: 'Practitioner availability & slot confirmation', icon: Calendar, color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  { step: '03', title: 'Check-In & Triage', desc: 'Nurse vitals capture & priority queueing', icon: Activity, color: 'bg-purple-100 text-purple-800 border-purple-200' },
  { step: '04', title: 'Doctor Consultation', desc: 'EMR access, chief complaint & diagnosis', icon: Stethoscope, color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { step: '05', title: 'Clinical Orders', desc: 'Therapies, minor procedures & care plans', icon: ClipboardList, color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
  { step: '06', title: 'Lab Orders', desc: 'Diagnostic requests & test parameter setup', icon: FlaskConical, color: 'bg-teal-100 text-teal-800 border-teal-200' },
  { step: '07', title: 'Sample & Results', desc: 'Barcoded sample collection & test report entry', icon: QrCode, color: 'bg-sky-100 text-sky-800 border-sky-200' },
  { step: '08', title: 'e-Prescribing', desc: 'Digital prescription & dosage instructions', icon: FileText, color: 'bg-violet-100 text-violet-800 border-violet-200' },
  { step: '09', title: 'Pharmacy Stock', desc: 'Batch/expiry validation & auto-deduction', icon: Pill, color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { step: '10', title: 'Facility & Ward Ops', desc: 'Inpatient admission, bed allocation & rounds', icon: Bed, color: 'bg-rose-100 text-rose-800 border-rose-200' },
  { step: '11', title: 'Unified Billing', desc: 'Consolidated OP/IP charges & instant invoice', icon: CreditCard, color: 'bg-orange-100 text-orange-800 border-orange-200' },
  { step: '12', title: 'Follow-Up Sync', desc: 'Automated reminders & patient health history', icon: HeartPulse, color: 'bg-iris/15 text-iris border-iris/25' }
]

// 8 Core Healthcare Capabilities
const capabilities = [
  {
    id: 'appointments',
    number: '01',
    title: 'Patient & Appointment Management',
    tagline: 'From booking to consultation, keep the patient journey connected.',
    description: 'Provide seamless registration and appointment scheduling across online portals, mobile applications, and front-desk reception while ensuring optimal doctor schedule utilization.',
    bullets: [
      'Patient profile & medical history master records',
      'Multi-department practitioner availability matrices',
      'Online appointment booking & instant SMS/WhatsApp reminders',
      'Smart queue management & reception check-in desk',
      'Referral doctor tracking & patient portal access'
    ],
    highlight: 'Frappe Healthcare powers availability schedules, slot locks, and automated patient notifications.'
  },
  {
    id: 'clinical',
    number: '02',
    title: 'Clinical Operations (EMR / EHR)',
    tagline: 'Turn clinical processes into structured workflows without forcing practitioners to work around software.',
    description: 'Empower doctors and clinicians with fast, intuitive encounter screens to record complaints, vital signs, clinical diagnoses, and prescriptions in seconds.',
    bullets: [
      'Structured patient encounter notes & ICD-10/11 coding support',
      'Vital signs tracking with historic trend charts',
      'Digital e-prescriptions linked directly to pharmacy stock',
      'Clinical procedure tracking & therapy scheduling',
      'Unified Electronic Health Records (EHR) accessible across visits'
    ],
    highlight: 'Designed for clinical speed so doctors spend time with patients, not typing in software.'
  },
  {
    id: 'laboratory',
    number: '03',
    title: 'Laboratory & Diagnostics',
    tagline: 'Connect the order, the test, the result, and the patient.',
    description: 'Automate the complete diagnostic lifecycle from initial doctor request to sample barcode collection, laboratory processing, result authorization, and patient delivery.',
    bullets: [
      'Configurable lab test templates & reference ranges',
      'Barcoded sample collection & tube tracking',
      'Technician result entry & pathologist verification workflow',
      'Automated result delivery via WhatsApp, email & patient portal',
      'Diagnostic billing synchronization with Accounts'
    ],
    highlight: 'Frappe Healthcare lab test workflows connect directly to billing and patient records.'
  },
  {
    id: 'pharmacy',
    number: '04',
    title: 'Pharmacy & Medical Inventory',
    tagline: 'Keep the right medicines and supplies available.',
    description: 'Bridge patient prescriptions with backend pharmacy operations. Ensure full traceability of drug batches, expiration dates, reorder levels, and procurement.',
    bullets: [
      'Batch & expiry date tracking (FEFO enforcement)',
      'Automated stock deduction upon pharmacy dispensing',
      'Consumables & surgical item inventory for wards/OT',
      'Low-stock automated reorder alerts & supplier PO generation',
      'Multi-store inventory transfers between main store & sub-pharmacies'
    ],
    highlight: 'ERPNext inventory algorithms prevent stockouts of critical life-saving medications.'
  },
  {
    id: 'billing',
    number: '05',
    title: 'Healthcare Billing & Finance',
    tagline: 'Connect clinical services to your financial system.',
    description: 'Eliminate revenue leakage by automatically aggregating consultation charges, lab investigations, procedures, pharmacy items, and room tariffs into one unified bill.',
    bullets: [
      'OPD consultation & registration fee checkout',
      'IPD advance deposits, daily tariff posting & final billing',
      'Insurance claim tracking & corporate package billing',
      'Automated invoice generation directly from clinical orders',
      'Real-time revenue analytics & general ledger integration'
    ],
    highlight: 'Zero manual re-entry: clinical actions automatically generate financial journal entries.'
  },
  {
    id: 'hospital-ops',
    number: '06',
    title: 'Hospital & Facility Operations',
    tagline: 'Structure the workflows that keep the organization running.',
    description: 'Manage complex inpatient hospital operations including bed availability, ward transfers, nursing care schedules, discharge summaries, and medical equipment maintenance.',
    bullets: [
      'Visual bed & ward availability dashboard (ICU, General, Private)',
      'Inpatient admission, ward transfer & discharge planning',
      'Nursing care administration & daily medication rounds',
      'Biomedical equipment preventive maintenance & asset management',
      'Staff shift planning, duty rosters & payroll integration'
    ],
    highlight: 'Brings ERPNext HR, Asset Management, and Procurement together with hospital care.'
  },
  {
    id: 'mobile',
    number: '07',
    title: 'Healthcare Mobile Applications',
    tagline: 'Put the right workflow in the right person’s hands.',
    description: 'Purpose-built mobile applications for doctors, nurses, lab technicians, pharmacy staff, and administrators designed for rapid execution on tablets and smartphones.',
    bullets: [
      'Doctor app: Mobile queue, patient history & instant e-prescribing',
      'Nurse app: Bedside vitals capture & scheduled care tasks',
      'Lab Tech app: Sample barcode scanning & quick result entry',
      'Pharmacy app: Prescription fulfillment & mobile checkout',
      'Executive app: Live bed occupancy & daily hospital revenue'
    ],
    highlight: 'Responsive mobile interfaces connected natively to your core Frappe/ERPNext backend.'
  },
  {
    id: 'integrations',
    number: '08',
    title: 'Connected Healthcare & Integrations',
    tagline: 'Connect the healthcare systems you already have.',
    description: 'Seamlessly link existing LIMS, RIS/PACS, diagnostic devices, payment gateways, patient portals, and government digital health infrastructures.',
    bullets: [
      'ABDM / ABHA digital health ID integration readiness (India)',
      'Diagnostic equipment API data feeds & LIMS sync',
      'WhatsApp & SMS gateway automation for reminders & reports',
      'Online payment gateway integration for advance bookings',
      'Custom API webhooks for third-party HMIS interoperability'
    ],
    highlight: 'Nexora connects your ecosystem rather than forcing you to rip and replace working systems.'
  }
]

// Mobile role mockup screens
const mobileRoles = [
  {
    id: 'doctor',
    role: 'Doctor Experience',
    icon: Stethoscope,
    badge: 'OPD & EMR',
    screenTitle: 'Dr. Sarah Jenkins — Cardiology',
    metrics: [
      { label: 'Today Queue', value: '18 Patients' },
      { label: 'Completed', value: '12 Consults' },
      { label: 'Pending Lab', value: '3 Reports' }
    ],
    activeCardTitle: 'Current Patient: Mark Thorne (ID: #PT-9402)',
    activeCardBody: 'Male, 48 yrs • Chief Complaint: Acute chest pressure & fatigue. Vitals: BP 138/88, Pulse 82, Temp 98.4°F.',
    actionLabel: '+ Write e-Prescription & Order ECG',
    items: [
      'Review Historic EMR & Past Visits',
      'One-tap Prescribe: Atorvastatin 20mg',
      'Order Lab Test: Lipid Profile & Troponin I'
    ]
  },
  {
    id: 'nurse',
    role: 'Nurse Ward Care',
    icon: Bed,
    badge: 'IPD Vitals & Care',
    screenTitle: 'Station 4 — Ward B (Inpatients)',
    metrics: [
      { label: 'Assigned Beds', value: '8 Patients' },
      { label: 'Pending Vitals', value: '2 Beds' },
      { label: 'Doses Due', value: '4 Medicines' }
    ],
    activeCardTitle: 'Bed 204: Eleanor Vance (Post-Op Day 2)',
    activeCardBody: 'Administer IV Antibiotic 500mg at 14:00. Record SpO2 and Blood Pressure.',
    actionLabel: '✓ Log Vitals & Mark Administered',
    items: [
      'Bedside SpO2 & Temperature entry',
      'Medication MAR verification',
      'Notify Attending Doctor on call'
    ]
  },
  {
    id: 'lab',
    role: 'Lab Technician',
    icon: FlaskConical,
    badge: 'LIMS & Testing',
    screenTitle: 'Central Diagnostic Lab Desk',
    metrics: [
      { label: 'Samples Received', value: '42 Tubes' },
      { label: 'Pending Tests', value: '9 Orders' },
      { label: 'Verifications', value: '5 Reports' }
    ],
    activeCardTitle: 'Sample #SMP-8831 (Complete Blood Count)',
    activeCardBody: 'Patient: Robert Chen • Barcode Scanned. Analyzer Output: Hemoglobin 14.2 g/dL, WBC 7,800/µL.',
    actionLabel: '✓ Submit & Send to Pathologist',
    items: [
      'Scan Tube Barcode with Tablet Camera',
      'Auto-populate reference range check',
      'Auto-trigger WhatsApp PDF report to patient'
    ]
  },
  {
    id: 'pharmacy',
    role: 'Pharmacy Counter',
    icon: Pill,
    badge: 'POS & Inventory',
    screenTitle: 'Main Hospital Pharmacy POS',
    metrics: [
      { label: 'Active Rx Queue', value: '6 Prescriptions' },
      { label: 'Dispensed Today', value: '148 Orders' },
      { label: 'Low Stock Items', value: '2 Alerts' }
    ],
    activeCardTitle: 'Prescription #RX-4419 (Dr. A. Sharma)',
    activeCardBody: 'Items: Amoxicillin 500mg (Batch #AMX-2026B, Exp: 11/2027) • Stock: 420 caps available.',
    actionLabel: '✓ Dispense & Print Invoice',
    items: [
      'Auto-reserve stock upon doctor sign-off',
      'Barcode verify batch before hand-off',
      'Instant billing sync with patient account'
    ]
  },
  {
    id: 'management',
    role: 'Hospital Admin',
    icon: Building2,
    badge: 'Executive Dashboard',
    screenTitle: 'Nexora Healthcare Operations HQ',
    metrics: [
      { label: 'Bed Occupancy', value: '88%' },
      { label: 'OPD Footfall', value: '240 Patients' },
      { label: 'Today Revenue', value: '$42,800' }
    ],
    activeCardTitle: 'Real-Time Facility Pulse',
    activeCardBody: 'ICU Beds: 10/12 Occupied • Emergency Queue: 4 Patients • Pharmacy Sales: +14% vs avg.',
    actionLabel: '📊 Export Operational Audit Report',
    items: [
      'Department-wise revenue breakdown',
      'Pharmacy stock depletion rate tracking',
      'Doctor OPD turnaround analytics'
    ]
  }
]

export function HealthcareIndustryPage() {
  const [activeTab, setActiveTab] = useState('appointments')
  const [activeRole, setActiveRole] = useState('doctor')

  const currentCap = capabilities.find(c => c.id === activeTab) || capabilities[0]
  const currentRole = mobileRoles.find(r => r.id === activeRole) || mobileRoles[0]

  return (
    <main className="pb-24 font-sans text-ink bg-canvas">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Healthcare' }]} />

      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-20 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-iris/8 blur-3xl" />
          <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-emerald-300/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-iris">
              Industry Vertical · Healthcare
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] max-w-5xl">
              Healthcare, connected from{' '}
              <span className="text-iris">patient to operations.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 font-display text-2xl text-ink/80">
              Clinical care, diagnostics, inventory & finance in one system.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-xl leading-relaxed text-muted">
              Nexora helps hospitals, clinics, diagnostic labs, pharmacies, and healthcare networks connect patient care, appointments, clinical EMR, inventory, billing, finance, staff, and digital experiences into one working system.
            </motion.p>

            {/* Tech Stack Badges */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted mr-2">Nexora Stack:</span>
              {['Frappe Healthcare', 'ERPNext Core', 'Custom Apps', 'Deskless Mobile Tools', 'LIMS & ABDM Integration'].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-medium text-ink shadow-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <ContactLink className="inline-flex items-center gap-2 rounded-full accent-gradient px-7 py-4 text-sm font-medium text-white shadow-lg shadow-iris/25 hover:shadow-xl transition-all">
                Discuss Your Healthcare Workflow <ArrowRight className="h-4 w-4" />
              </ContactLink>
              <a href="#capabilities" className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-medium text-ink hover:bg-mist transition-all">
                Explore Capabilities <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Cross Navigation */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-2 text-xs text-muted border-t border-ink/8 pt-6">
              <span className="font-semibold text-ink">Also See Related Services:</span>
              <Link to="/services/erpnext-implementation" className="text-iris hover:underline font-medium ml-1">ERPNext Implementation</Link>
              <span>·</span>
              <Link to="/services/frappe-development" className="text-iris hover:underline font-medium">Frappe Development</Link>
              <span>·</span>
              <Link to="/services/mobile-apps" className="text-iris hover:underline font-medium">Mobile Apps</Link>
              <span>·</span>
              <Link to="/services/automation-custom-software" className="text-iris hover:underline font-medium">Automation & Custom Software</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. THE PROBLEM SECTION ─────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20 bg-white border-y border-ink/8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">The Fragmented Healthcare Challenge</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              Healthcare is more than patient records.<br />Your operations should be unified.
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted">
              A patient sees Appointment → Consultation → Treatment. Behind that single journey lies a complex matrix of clinical, operational, financial, and inventory processes.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Disconnected Reality */}
            <div className="rounded-[2rem] border border-red-200 bg-red-50/30 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-600 mb-6">
                  Typical Disconnected Healthcare Setup
                </span>
                <p className="font-display text-2xl text-ink mb-4">Isolated Point Solutions & Manual Workarounds</p>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    { area: 'Patient Desk', problem: 'Booked appointment, but reception has no record on file' },
                    { area: 'Doctor Desk', problem: 'Hand-written prescription re-typed at pharmacy counter' },
                    { area: 'Diagnostic Lab', problem: 'Paper test results take 2 days to reach patient file' },
                    { area: 'Pharmacy Store', problem: 'Stockouts of critical drugs & expired batch leakage' },
                    { area: 'Inpatient Ward', problem: 'Manual bed tracking & unbilled daily care charges' },
                    { area: 'Accounts & Billing', problem: 'Revenue leakage from unbilled labs & manual entry' }
                  ].map((row) => (
                    <div key={row.area} className="rounded-xl border border-red-100 bg-white p-3.5 flex flex-col gap-1">
                      <div className="flex justify-between items-center text-ink font-semibold">
                        <span>{row.area}</span>
                        <span className="text-red-500 font-normal">Isolated Tool</span>
                      </div>
                      <span className="text-red-600/80 text-[11px] font-sans">⚠ Issue: {row.problem}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-xs text-red-600 font-medium italic">Result: Patient wait times, clinical delays, stock drift, and financial revenue leakage.</p>
            </div>

            {/* Connected Nexora System */}
            <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/30 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-6">
                  The Nexora Connected System
                </span>
                <p className="font-display text-2xl text-ink mb-4">One Connected Healthcare Operating Platform</p>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    { stage: 'Unified Patient EMR', solution: 'Appointments, check-in, vitals & history instantly accessible' },
                    { stage: 'e-Prescription & Stock Sync', solution: 'Doctor sign-off automatically reserves medicine stock' },
                    { stage: 'Barcoded Lab Workflow', solution: 'Sample scan triggers test parameters & instant patient delivery' },
                    { stage: 'FEFO Pharmacy Control', solution: 'Automated batch expiry tracking & stock replenishment' },
                    { stage: 'IPD & Bed Management', solution: 'Live ward grid, daily tariff posting & nursing care schedules' },
                    { stage: 'Automated Billing Ledger', solution: 'Every medical service generates real-time financial entries' }
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
              <p className="mt-6 text-xs text-emerald-700 font-medium italic">Result: Reduced wait times, 100% stock accuracy, instant e-prescriptions, zero billing leakage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 12-STEP HEALTHCARE LIFECYCLE ───────────────────────────────── */}
      <section className="px-6 md:px-10 py-20 bg-mist/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">End-to-End Operational Lifecycle</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              From Intake to Recovery.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Every interaction creates information. Nexora ensures that data flows automatically to the next step.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {healthcareLifecycleSteps.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div key={item.step}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="rounded-2xl border border-ink/10 bg-white p-4 flex flex-col justify-between shadow-sm hover:border-iris/30 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${item.color}`}>
                        STEP {item.step}
                      </span>
                      <Icon className="h-4 w-4 text-muted" />
                    </div>
                    <h3 className="font-display text-base text-ink font-semibold mb-1">{item.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-iris/20 bg-white p-6 text-center max-w-4xl mx-auto shadow-sm">
            <p className="text-sm font-semibold text-ink">
              💡 We don't just digitize patient files. We build the business engineering layer that makes your healthcare organization operate flawlessly.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. 8 CORE HEALTHCARE CAPABILITIES (TABBED) ────────────────────── */}
      <section id="capabilities" className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Core Capabilities</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              8 Pillars of Connected Healthcare
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Explore how Nexora configures Frappe Healthcare, ERPNext, mobile tools, and custom software around your organization's specific requirements.
            </p>
          </div>

          {/* Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  activeTab === cap.id
                    ? 'accent-gradient text-white shadow-md shadow-iris/20'
                    : 'border border-ink/10 bg-white text-ink hover:bg-mist'
                }`}
              >
                <span>{cap.number}. {cap.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="rounded-[2rem] border border-ink/10 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <span className="font-mono text-xs font-bold text-iris uppercase tracking-wider">CAPABILITY {currentCap.number}</span>
                <h3 className="mt-2 font-display text-3xl font-bold text-ink">{currentCap.title}</h3>
                <p className="mt-2 text-sm font-semibold text-iris">{currentCap.tagline}</p>
                <p className="mt-4 text-muted text-sm leading-relaxed">{currentCap.description}</p>

                <div className="mt-6 space-y-3">
                  {currentCap.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-ink font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl border border-iris/20 bg-mist/40 p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-iris font-semibold text-xs mb-3">
                    <Sparkles className="h-4 w-4" />
                    <span>The Nexora Engineering Angle</span>
                  </div>
                  <p className="text-sm text-ink font-medium leading-relaxed">
                    {currentCap.highlight}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-ink/10">
                  <ContactLink className="inline-flex items-center gap-2 text-xs font-bold text-iris hover:underline">
                    <span>Discuss This Healthcare Capability</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </ContactLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. MOBILE HEALTHCARE DEMO (ROLE-BASED INTERACTIVE) ───────────── */}
      <section className="px-6 md:px-10 py-20 bg-white border-y border-ink/8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Deskless & Clinical Mobile Apps</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              The Right Workflow for Every Healthcare Role
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Purpose-built mobile applications tailored for doctors, nurses, lab technicians, pharmacy counters, and hospital managers.
            </p>
          </div>

          {/* Role Selectors */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {mobileRoles.map((role) => {
              const RoleIcon = role.icon
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-xs font-semibold transition-all ${
                    activeRole === role.id
                      ? 'bg-ink text-white shadow-md'
                      : 'border border-ink/10 bg-white text-ink hover:bg-mist'
                  }`}
                >
                  <RoleIcon className="h-4 w-4" />
                  <span>{role.role}</span>
                </button>
              )
            })}
          </div>

          {/* Mockup Display Card */}
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-ink/10 bg-white p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-iris" />
                <div>
                  <h3 className="font-bold text-ink text-sm">{currentRole.screenTitle}</h3>
                  <p className="text-xs text-muted">{currentRole.role} • Nexora Mobile Client</p>
                </div>
              </div>
              <span className="rounded-full bg-iris/10 px-3 py-1 text-xs font-bold text-iris border border-iris/20">
                {currentRole.badge}
              </span>
            </div>

            {/* Metrics Header */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {currentRole.metrics.map((m, idx) => (
                <div key={idx} className="rounded-xl border border-ink/5 bg-mist/50 p-3 text-center">
                  <span className="text-[10px] text-muted block uppercase tracking-wider font-mono">{m.label}</span>
                  <span className="text-base font-bold text-ink mt-0.5 block">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Active Card Body */}
            <div className="rounded-2xl border border-iris/20 bg-iris/5 p-5 mb-6">
              <h4 className="font-bold text-ink text-sm">{currentRole.activeCardTitle}</h4>
              <p className="mt-2 text-xs text-muted leading-relaxed">{currentRole.activeCardBody}</p>
              <button className="mt-4 inline-flex items-center gap-1.5 rounded-xl accent-gradient px-4 py-2 text-xs font-semibold text-white shadow-sm">
                <span>{currentRole.actionLabel}</span>
              </button>
            </div>

            {/* Role Workflow List */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-muted block mb-2 font-mono">Key Mobile Capabilities</span>
              {currentRole.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-ink rounded-lg bg-mist/40 p-2.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. AUTOMATION SECTION ─────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20 bg-mist/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Event-Driven Automation</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              Healthcare Shouldn't Depend on Manual Follow-Up.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              Event-driven background automation eliminates human delays across notifications, lab routing, pharmacy restocking, and patient follow-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Appointment Automation', icon: Bell, desc: 'Booking confirmations, 24-hr WhatsApp reminders, slot releases, and reception check-in alerts.', iconBg: 'bg-blue-100 text-blue-700' },
              { title: 'Lab Order Pipeline', icon: FlaskConical, desc: 'Doctor request automatically dispatches sample collector task, routes to analyzer, and texts PDF report.', iconBg: 'bg-teal-100 text-teal-700' },
              { title: 'Pharmacy Restock Triggers', icon: Pill, desc: 'Prescription dispensing reserves stock. When safety thresholds cross, draft POs auto-generate to vendors.', iconBg: 'bg-amber-100 text-amber-700' },
              { title: 'Post-Care Engagement', icon: HeartPulse, desc: 'Completed consultations automatically schedule follow-up reminders, therapy check-ins, and feedback.', iconBg: 'bg-purple-100 text-purple-700' }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm hover:border-iris/30 transition-all">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBg} mb-4`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-ink text-base mb-2">{item.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 7. SECURITY & DATA DESIGN ──────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.22em] text-iris">Data Architecture & Security</p>
              <h2 className="mt-3 font-display text-4xl text-ink">
                Designed With Healthcare Security in Mind.
              </h2>
              <p className="mt-4 text-muted text-base leading-relaxed">
                Healthcare information requires robust permissioning, strict role boundaries, and audit traceability. We engineer solutions that treat patient privacy and security as core parameters.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-iris/10 text-iris flex-shrink-0 mt-1">
                    <Lock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink text-sm">Role-Based Access Control (RBAC)</h4>
                    <p className="text-xs text-muted mt-0.5">Strict role separation ensuring doctors, nurses, lab techs, and billing staff access only authorized patient information.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-iris/10 text-iris flex-shrink-0 mt-1">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink text-sm">Immutable Audit Logs</h4>
                    <p className="text-xs text-muted mt-0.5">Every medical record modification, prescription sign-off, and lab result edit leaves a timestamped audit log.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-iris/10 text-iris flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink text-sm">ABDM / ABHA & HL7 FHIR Interoperability</h4>
                    <p className="text-xs text-muted mt-0.5">Aligned with Ayushman Bharat Digital Mission (ABDM) integration pathways and international HL7 FHIR standards.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-[2rem] border border-ink/10 bg-white p-8 shadow-sm">
              <h3 className="font-bold text-ink text-lg mb-6 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span>Security & Interoperability Checklist</span>
              </h3>
              <div className="space-y-3 font-mono text-xs">
                {[
                  { label: 'Data Encryption at Rest & Transit', val: 'AES-256 / TLS 1.3' },
                  { label: 'Doctor E-Signature Validation', val: 'Supported' },
                  { label: 'Automated Database Snapshots', val: 'Daily / Hourly' },
                  { label: 'Multi-Tenant Isolation', val: 'Strict' },
                  { label: 'ABDM Health ID (ABHA) Creation', val: 'Integration Ready' }
                ].map((row, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-mist/40 border border-ink/5 flex items-center justify-between">
                    <span className="text-ink font-sans font-medium">{row.label}</span>
                    <span className="text-emerald-700 font-bold">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. THE NEXORA HEALTHCARE FRAMEWORK ─────────────────────────────── */}
      <section className="px-6 md:px-10 py-20 bg-white border-y border-ink/8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Implementation Methodology</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              The Nexora Healthcare Delivery Framework
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              A structured six-phase engineering approach to transform disconnected healthcare operations into one synchronized ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', stage: 'CARE', title: 'Clinical Discovery', desc: 'Understand patient journeys, OPD/IPD bottlenecks, and clinical team workflows.' },
              { num: '02', stage: 'CONNECT', title: 'System Architecture', desc: 'Connect clinical EMR, LIMS, pharmacy, and ERPNext accounting modules.' },
              { num: '03', stage: 'OPERATE', title: 'Workflow Engineering', desc: 'Configure Frappe Healthcare Doctypes, appointment slots, and bed tariffs.' },
              { num: '04', stage: 'AUTOMATE', title: 'Process Automation', desc: 'Implement automated WhatsApp reminders, sample routing, and reorder triggers.' },
              { num: '05', stage: 'INSIGHT', title: 'Operational Analytics', desc: 'Deploy executive dashboards for bed occupancy, OPD throughput, and revenue.' },
              { num: '06', stage: 'EVOLVE', title: 'Continuous Scaling', desc: 'Expand capabilities into multi-location clinic networks and partner portals.' }
            ].map((f) => (
              <div key={f.num} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm hover:border-iris/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-muted">{f.num}</span>
                  <span className="rounded-md bg-iris/10 px-2.5 py-1 font-mono text-xs font-bold text-iris">{f.stage}</span>
                </div>
                <h3 className="font-bold text-ink text-base mb-1">{f.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. TARGET SEGMENTS ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20 bg-mist/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-iris">Target Segments</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              Healthcare Organizations We Empower
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-muted">
              From multi-specialty hospitals to regional diagnostic networks and standalone specialty practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: 'Hospitals & Medical Centers', desc: 'End-to-end IPD, OPD, ICU, OT, pharmacy, bed management, and unified financial accounting.' },
              { icon: Users, title: 'Multi-Specialty Clinics', desc: 'Centralized patient registration, doctor schedules, e-prescribing, and OPD queue management.' },
              { icon: FlaskConical, title: 'Diagnostic Laboratories & Pathology', desc: 'Sample barcode tracking, test parameter result entry, pathologist sign-off, and patient WhatsApp delivery.' },
              { icon: Pill, title: 'Pharmacy Chains & Stores', desc: 'Multi-store FEFO stock tracking, batch expiry management, POS checkout, and automated vendor reordering.' },
              { icon: Stethoscope, title: 'Physiotherapy & Rehab Centers', desc: 'Therapy session scheduling, package tracking, clinical progress notes, and patient portals.' },
              { icon: HeartPulse, title: 'Healthcare Networks & Polyclinics', desc: 'Centralized patient records across multiple branches with multi-company accounting in ERPNext.' }
            ].map((seg, idx) => {
              const SegIcon = seg.icon
              return (
                <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm flex items-start gap-4 hover:border-iris/30 transition-all">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-iris/10 text-iris flex-shrink-0">
                    <SegIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-base mb-1">{seg.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{seg.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 10. CLOSING CTA SECTION ────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20 bg-canvas">
        <div className="mx-auto max-w-5xl rounded-[2rem] accent-gradient p-8 sm:p-14 text-white text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold text-white mb-6 backdrop-blur-sm">
              <HeartPulse className="h-3.5 w-3.5" />
              CONNECTED HEALTHCARE PLATFORM
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Better Healthcare Starts With Better Connected Workflows.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed">
              Your clinicians should focus on patients. Your staff should focus on their work. Your systems should handle the information moving between them.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ContactLink className="inline-flex items-center gap-2 rounded-full bg-white text-ink font-bold px-8 py-4 text-sm shadow-lg hover:bg-mist transition-all">
                <span>Talk to Us About Your Healthcare Workflow</span>
                <ArrowRight className="h-4 w-4 text-iris" />
              </ContactLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
