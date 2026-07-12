import type { ComponentType } from 'react'
import {
  Archive,
  BadgeCheck,
  BookOpen,
  Boxes,
  Building2,
  Calendar,
  Calculator,
  Car,
  ClipboardList,
  Code2,
  Cpu,
  Globe,
  GraduationCap,
  HeartPulse,
  KeyRound,
  Package,
  Receipt,
  Scale,
  ShieldCheck,
  Smartphone,
  Store,
  Truck,
  Users,
  Utensils,
  Wallet,
  Warehouse,
} from 'lucide-react'

export type ServiceItem = {
  slug: string
  icon: ComponentType<{ className?: string }>
  title: string
  tagline: string
  description: string
  intro: string
  bullets: string[]
  whyItMatters: string
  cta: string
  relatedProducts: string[]
}

export type ProductItem = {
  slug: string
  icon: ComponentType<{ className?: string }>
  title: string
  tag: string
  description: string
  bullets: string[]
}

export type IndustryItem = {
  slug: string
  icon: ComponentType<{ className?: string }>
  title: string
  headline: string
  description: string
}

export type CaseStudyItem = {
  slug: string
  title: string
  category: string
  description: string
  challenge: string
  solution: string
  outcomes: string[]
}

export const company = {
  name: 'Nexora',
  email: 'hello@nexorasolution.io',
  phone: '+91 98765 43210',
  location: 'India · serving clients worldwide',
}

export const services: ServiceItem[] = [
  {
    slug: 'erpnext-implementation',
    icon: Boxes,
    title: 'ERPNext Implementation & Customization',
    tagline: 'Enterprise-grade ERP, configured around your business.',
    description: 'Enterprise-grade ERP, configured around your business, not the other way around.',
    intro:
      'We tailor ERPNext to your business from setup and configuration through deep module customization and data migration, so your reporting is accurate, audit-ready, and available the moment leadership asks for it.',
    bullets: [
      'Full ERPNext setup and configuration',
      'Sales, HR, Inventory, and Accounts customization',
      'Data migration from existing systems, without loss or duplication',
      'Third-party integrations',
      'Performance optimization and ongoing support',
    ],
    whyItMatters:
      'ERP projects fail when teams inherit generic workflows. We shape the system around your actual operations so adoption, reporting, and control all improve together.',
    cta: 'Discuss Your ERPNext Rollout',
    relatedProducts: ['erpnext-starter-package', 'asset-management', 'sales-crm'],
  },
  {
    slug: 'frappe-development',
    icon: Code2,
    title: 'Frappe Development',
    tagline: 'Custom apps, workflows, dashboards, and APIs.',
    description: "When off-the-shelf software hits its limit, we build what's missing.",
    intro:
      'Powerful custom applications built on the Frappe Framework: workflows, dashboards, and APIs designed around how you actually work, replacing manual handoffs with logic that runs itself, correctly, every time.',
    bullets: [
      'Custom app development on the Frappe Framework',
      'Workflow automation',
      'Custom reports and dashboards',
      'API integrations',
      'Backend system architecture',
    ],
    whyItMatters:
      'When your differentiator lives in process, your software cannot be a compromise. Custom Frappe apps let you keep one source of truth while still fitting your business model.',
    cta: 'Discuss a Custom Frappe App',
    relatedProducts: ['sales-crm', 'legal-case-management', 'club-membership'],
  },
  {
    slug: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile App Development',
    tagline: 'Real-time mobile tools for field and floor teams.',
    description: 'Give your field and floor teams the same real-time data your office runs on.',
    intro:
      'Mobile apps that talk directly to your ERP: real-time sync, native performance, and tight business automation, so inventory counts, job status, and approvals update instantly with no end-of-day reconciliation.',
    bullets: [
      'Native Android applications',
      'Cross-platform Flutter apps',
      'ERP-integrated mobile dashboards',
      'Real-time data synchronization',
      'Business automation apps',
    ],
    whyItMatters:
      'Mobile is where operations win or lose speed. We make sure the data your team captures in the field becomes immediately usable everywhere else.',
    cta: 'Discuss a Mobile Project',
    relatedProducts: ['van-sales-distribution', 'appointment-scheduling', '3pl-logistics'],
  },
  {
    slug: 'web-development',
    icon: Globe,
    title: 'Website Development',
    tagline: 'Business websites, dashboards, and ERP-connected portals.',
    description: 'Your website and your ERP should share one set of facts.',
    intro:
      "Fast, responsive, business-focused websites, from marketing sites to admin dashboards and ERP-integrated portals, built so pricing, inventory, and order status are never out of sync with what's actually true.",
    bullets: [
      'Business websites',
      'Admin dashboards',
      'Web portals',
      'ERP-integrated websites',
      'SEO-friendly development',
    ],
    whyItMatters:
      'Your public website, customer portal, and internal dashboards should not all tell different stories. We connect the web layer to your operational truth.',
    cta: 'Discuss Your Website Project',
    relatedProducts: ['appointment-scheduling', 'store-selection', 'club-membership'],
  },
  {
    slug: 'automation-custom-software',
    icon: Cpu,
    title: 'Custom Software & End-to-End Automation',
    tagline: 'Purpose-built systems for the exact shape of your business.',
    description: 'Bespoke systems built around the exact shape of your business.',
    intro:
      'CRM systems, inventory management, HR and payroll systems, business process automation, and SaaS platforms, purpose-built rather than force-fit into a generic template.',
    bullets: [
      'CRM systems',
      'Inventory management',
      'HR and payroll systems',
      'Business process automation',
      'SaaS platforms',
    ],
    whyItMatters:
      'Automation compounds. Fixing the right workflow once can eliminate weekly manual effort, reduce operational risk, and improve reporting at the same time.',
    cta: 'Discuss Automation Opportunities',
    relatedProducts: ['payroll-management', 'facilities-management', 'sales-crm'],
  },
]

export const products: ProductItem[] = [
  {
    slug: 'export-price-calculation',
    icon: Calculator,
    title: 'Export Price Calculation',
    tag: 'Pricing Tools',
    description:
      'Automate export costing: landed cost, duty, freight, and margin calculations in one place, synced with ERPNext sales and inventory data.',
    bullets: [
      'Automated landed-cost calculation',
      'Multi-currency and multi-incoterm support',
      'Margin and markup simulation before quoting',
      'Direct sync with ERPNext sales orders and quotations',
    ],
  },
  {
    slug: 'leasing',
    icon: KeyRound,
    title: 'Leasing',
    tag: 'Contracts & Assets',
    description:
      'Manage lease contracts, renewals, and billing schedules for equipment, property, or fleet assets, fully tracked inside ERPNext.',
    bullets: [
      'Contract lifecycle tracking',
      'Automated recurring billing and invoicing',
      'Asset-to-contract linkage with depreciation tracking',
      'Renewal and expiry alerts',
    ],
  },
  {
    slug: 'van-sales-distribution',
    icon: Truck,
    title: 'Distribution (VAN Sales)',
    tag: 'DMS',
    description:
      'A distribution management system built for van or route sales teams: order-to-delivery and stock reconciliation in real time.',
    bullets: [
      'Route and territory-based order management',
      'Mobile order capture for van sales reps',
      'Real-time stock reconciliation between van and warehouse',
      'Delivery and returns tracking',
    ],
  },
  {
    slug: 'facilities-management',
    icon: Building2,
    title: 'Facilities Management',
    tag: 'Operations',
    description:
      'Track maintenance schedules, service requests, and vendor work orders across every facility from one dashboard.',
    bullets: [
      'Preventive maintenance scheduling',
      'Service and work-order ticketing',
      'Vendor and contractor management',
      'Asset and equipment history log',
    ],
  },
  {
    slug: 'restaurant-management',
    icon: Utensils,
    title: 'Restaurant Management',
    tag: 'Hospitality',
    description:
      'Menu, table, kitchen, and inventory management for single or multi-location restaurants, integrated with POS.',
    bullets: [
      'Table and order management',
      'Kitchen display and order routing',
      'Recipe-linked inventory depletion',
      'Multi-outlet reporting',
    ],
  },
  {
    slug: 'parking-management',
    icon: Car,
    title: 'Parking Management',
    tag: 'Operations',
    description:
      'Manage parking slots, entry and exit logging, and billing for commercial parking facilities.',
    bullets: [
      'Slot allocation and occupancy tracking',
      'Entry and exit billing',
      'Subscription and monthly pass management',
      'Multi-location reporting',
    ],
  },
  {
    slug: 'sales-crm',
    icon: Users,
    title: 'Sales & CRM',
    tag: 'Revenue Ops',
    description:
      'Pipeline, lead scoring, and workflow automation built natively on Frappe, with no bolt-on CRM required.',
    bullets: [
      'Lead capture, scoring, and assignment',
      'Pipeline and deal-stage tracking',
      'Automated follow-up workflows',
      'Native ERPNext quote-to-cash integration',
    ],
  },
  {
    slug: 'legal-case-management',
    icon: Scale,
    title: 'Legal Case Management',
    tag: 'Legal',
    description:
      'Track cases, deadlines, documents, and billable time for legal teams and law firms.',
    bullets: [
      'Case and matter tracking',
      'Deadline and court-date reminders',
      'Document repository per case',
      'Time tracking and billing',
    ],
  },
  {
    slug: 'erpnext-starter-package',
    icon: Boxes,
    title: 'ERPNext Implementation (Starter Package)',
    tag: 'Core ERP',
    description:
      'A pre-configured ERPNext starter package covering core Accounts, Sales, and Inventory: live in weeks, not quarters.',
    bullets: [
      'Pre-configured chart of accounts and workflows',
      'Core Sales, Inventory, and Accounts modules',
      'Standard reports pre-built',
      'Optional add-on modules from this suite',
    ],
  },
  {
    slug: 'asset-management',
    icon: Archive,
    title: 'Asset Management',
    tag: 'Finance',
    description:
      'Track fixed assets from acquisition to disposal: depreciation, maintenance, and audit trail in one system.',
    bullets: [
      'Asset register with depreciation schedules',
      'Maintenance and warranty tracking',
      'Transfer and disposal workflows',
      'Audit-ready asset reporting',
    ],
  },
  {
    slug: 'pos-setups',
    icon: Receipt,
    title: 'POS Setups',
    tag: 'Retail',
    description:
      'Point-of-sale setup integrated directly with ERPNext inventory and accounting: one system, no reconciliation gap.',
    bullets: [
      'Barcode-based billing',
      'Real-time inventory sync across outlets',
      'Multiple payment mode support',
      'End-of-day cash and sales reconciliation',
    ],
  },
  {
    slug: 'payroll-management',
    icon: Wallet,
    title: 'Payroll Management',
    tag: 'HR & Finance',
    description:
      'Automated payroll processing with statutory compliance, integrated with HR attendance and Accounts.',
    bullets: [
      'Automated salary structure and payroll runs',
      'Statutory compliance support',
      'Attendance and leave-linked calculations',
      'Payslip generation and accounts posting',
    ],
  },
  {
    slug: 'appointment-scheduling',
    icon: Calendar,
    title: 'Appointment Scheduling',
    tag: 'Booking',
    description:
      'Online booking and scheduling for service-based businesses, synced with staff availability and ERPNext billing.',
    bullets: [
      'Online self-service booking',
      'Staff and resource availability management',
      'Automated reminders',
      'Billing linked to completed appointments',
    ],
  },
  {
    slug: 'store-selection',
    icon: Store,
    title: 'Store Selection',
    tag: 'Retail',
    description:
      'Location and store-performance analysis tools to guide expansion and site-selection decisions.',
    bullets: [
      'Store performance benchmarking',
      'Catchment and demographic overlays',
      'Site comparison scorecards',
      'Retail sales data integration',
    ],
  },
  {
    slug: 'club-membership',
    icon: BadgeCheck,
    title: 'Club Membership',
    tag: 'Memberships',
    description:
      'Manage memberships, renewals, tiered benefits, and billing for clubs, gyms, and membership-based businesses.',
    bullets: [
      'Membership tiers and benefit tracking',
      'Automated renewal billing',
      'Attendance and access tracking',
      'Member communication workflows',
    ],
  },
  {
    slug: '3pl-logistics',
    icon: Package,
    title: '3PL & Logistics',
    tag: 'Supply Chain',
    description:
      'Warehouse, freight, and fulfillment management for third-party logistics providers and shippers.',
    bullets: [
      'Warehouse and inventory management',
      'Shipment and freight tracking',
      'Client-wise billing for 3PL services',
      'ERPNext supply chain integration',
    ],
  },
]

export const industries: IndustryItem[] = [
  {
    slug: 'manufacturing',
    icon: Boxes,
    title: 'Manufacturing',
    headline: 'ERPNext & Automation for Manufacturing',
    description:
      'When the shop floor and the finance office run on different numbers, month-end becomes archaeology. We connect production, inventory, and procurement directly into Accounts, so shop-floor reporting, stock accuracy, and purchase visibility feed one audit-ready ledger.',
  },
  {
    slug: 'retail-ecommerce',
    icon: Store,
    title: 'Retail & E-commerce',
    headline: 'ERPNext & Automation for Retail & E-commerce',
    description:
      "Multi-outlet retail fails at the seams: a sale in one store that inventory sees an hour later, or an online order promised against stock that doesn't exist. We sync POS, inventory, and accounting in real time across every outlet and channel.",
  },
  {
    slug: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare',
    headline: 'ERPNext & Automation for Healthcare',
    description:
      "Healthcare operations carry compliance weight that generic software ignores. We build appointment scheduling, compliance-sensitive record keeping, and audit-ready reporting where every entry is traceable, because in this industry, roughly right is not an option.",
  },
  {
    slug: 'education',
    icon: GraduationCap,
    title: 'Education',
    headline: 'ERPNext & Automation for Education',
    description:
      'Admissions in one spreadsheet, fees in another, payroll in a third. We unify admissions, fee management, and payroll, with web portals that give staff, students, and parents self-service access to what is actually current.',
  },
  {
    slug: 'logistics-supply-chain',
    icon: Warehouse,
    title: 'Logistics & Supply Chain',
    headline: 'ERPNext & Automation for Logistics & Supply Chain',
    description:
      'In logistics, the margin lives in visibility: where stock is, which vehicle it is on, and what each client owes for the movement. We give 3PLs and distributors real-time warehouse, freight, and route-sales visibility tied straight into billing.',
  },
  {
    slug: 'startups-smes',
    icon: ShieldCheck,
    title: 'Startups & SMEs',
    headline: 'ERPNext & Automation for Startups & SMEs',
    description:
      'You need enterprise-grade systems without enterprise-grade overhead or timelines. Our fixed-scope ERPNext Starter Package puts core Accounts, Sales, and Inventory live in weeks, with a clear 5-step process and room to grow into custom modules later.',
  },
]

export const caseStudies: CaseStudyItem[] = [
  {
    slug: 'steel-fab-erp',
    title: 'Steel Fabricator: From 9-Day Close to 2-Day Close',
    category: 'Manufacturing · ERPNext',
    description:
      'Full ERPNext implementation for a 240-employee fabrication business, bringing production, inventory, and accounts onto one system.',
    challenge:
      'Production data lived in spreadsheets maintained by three supervisors; finance re-keyed everything at month-end. Closing the books took 9 working days and stock variance regularly exceeded 4%.',
    solution:
      'Phased ERPNext rollout: Accounts and Inventory first, then Manufacturing with shop-floor entry via tablets. Custom Frappe report pack for daily production-vs-plan and live WIP valuation, plus staged data migration with a 3-week parallel run.',
    outcomes: ['Month-end close reduced to 2 days', 'Stock variance cut below 1%', 'Live production-vs-plan visibility'],
  },
  {
    slug: 'fmcg-van-sales',
    title: 'FMCG Distributor: Real-Time VAN Sales Across 32 Routes',
    category: 'Distribution · Mobile',
    description:
      'Flutter van-sales app synced with ERPNext for a distributor running 32 daily routes.',
    challenge:
      'Route salesmen wrote orders on paper, and stock reconciliation happened the next morning. Stock-outs and unbilled returns cost an estimated 3% of monthly revenue.',
    solution:
      'Offline-first Flutter app for order capture, van stock, and returns, syncing to ERPNext the moment connectivity returns, with automatic route-wise reconciliation and end-of-day settlement reports.',
    outcomes: ['32 daily routes synced in real time', 'Fewer stock-outs and missed returns', 'Faster end-of-day route settlement'],
  },
  {
    slug: 'clinic-chain-booking',
    title: 'Clinic Chain: Online Booking Integrated With Billing',
    category: 'Healthcare · Portals',
    description:
      'Appointment scheduling and patient portal for a 6-location clinic chain, tied into ERPNext billing.',
    challenge:
      'Front desks double-booked practitioners across locations, and completed appointments took days to reach invoicing. Revenue leaked between the calendar and the ledger.',
    solution:
      'Self-service booking portal with live practitioner availability across all 6 locations, automated reminders, and appointment-to-invoice automation in ERPNext.',
    outcomes: ['Shared calendar across 6 locations', 'Appointment-to-billing automation', 'Reduced double-booking risk'],
  },
]

export const resources = [
  {
    title: 'The ERP Readiness Checklist',
    tag: 'Featured · Free download',
    description:
      '27 questions across data, processes, and people that tell you whether your business is ready for ERP, used at the start of every engagement.',
    cta: 'Download Free',
    featured: true,
  },
  {
    title: 'ERPNext vs Odoo vs SAP B1: An Honest Comparison for SMEs',
    tag: 'Guide · Draft',
    description:
      'Where ERPNext genuinely wins, where it does not, and how to decide based on your data model instead of the sales pitch.',
    cta: 'Publishing soon',
  },
  {
    title: 'What ERPNext Implementation Really Costs in 2026',
    tag: 'Guide · Draft',
    description:
      'License, hosting, implementation, and the hidden line items, with a transparent cost breakdown by company size.',
    cta: 'Publishing soon',
  },
]

export const aboutPrinciples = [
  {
    title: 'Business Value First',
    description:
      "We translate technical work into business outcomes: hours saved, errors eliminated, and reports leadership can trust. If a feature does not tie back to value, we do not recommend building it.",
  },
  {
    title: 'System Integrity & Compliance',
    description:
      'Flawless system logic, accurate financial and operational reporting, and audit-ready stability. Your auditors should love your ERP as much as your team does.',
  },
  {
    title: 'One Partner, End to End',
    description:
      'ERP, custom apps, mobile, and web from one team means no integration finger-pointing. Architecture to go-live stays accountable in one place.',
  },
]

export const aboutTeam = [
  'Founder / Lead Architect',
  'Head of Delivery',
  'Lead Mobile Engineer',
]

export const processSteps = [
  {
    number: '01',
    title: 'Requirement Analysis',
    description:
      'We map how your business actually runs, including exceptions and leadership reporting needs, before recommending a single module. You get a written scope, not a guess.',
  },
  {
    number: '02',
    title: 'Solution Design',
    description:
      'Module selection, customization plan, data model, and integration architecture, with a fixed timeline and named milestones. This is where built around you gets decided.',
  },
  {
    number: '03',
    title: 'Build & Configure',
    description:
      'Configuration and custom development in staged sprints you can review. You see working software every cycle, not a reveal at the end.',
  },
  {
    number: '04',
    title: 'Data Migration & Testing',
    description:
      'Staged migration with reconciliation reports and a parallel-run period. We cut over only when the numbers match and your history arrives intact.',
  },
  {
    number: '05',
    title: 'Training, Go-Live & Support',
    description:
      'Role-based training, a supported go-live window, and ongoing support with real response times so your team owns the system confidently.',
  },
]

export const homeTestimonials = [
  {
    quote:
      "Nexora did not sell us software. They rebuilt how our numbers flow. Month-end went from a fire drill to a formality.",
    author: 'Operations Director, fabrication company',
  },
  {
    quote:
      'The van-sales app paid for itself in the first quarter. Our reconciliation gap simply disappeared.',
    author: 'CEO, FMCG distribution business',
  },
  {
    quote:
      'They understood that in healthcare, audit-ready is not optional. Every record traces cleanly.',
    author: 'CFO, clinic group',
  },
]

export const navGroups = {
  services: services.map(({ title, slug }) => ({ label: title, href: `/services/${slug}` })),
  products: products.map(({ title, slug }) => ({ label: title, href: `/products/${slug}` })),
}

export function getService(slug: string) {
  return services.find((item) => item.slug === slug)
}

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug)
}

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug)
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug)
}

export function getRelatedProducts(slugs: string[]) {
  return products.filter((item) => slugs.includes(item.slug))
}

export const resourceHighlightIcon = BookOpen
export const processHighlightIcon = ClipboardList
