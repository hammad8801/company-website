import { ContactLink } from '@/components/ContactLink'
import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { HelpCircle, RefreshCw } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const detailedStages = [
  {
    num: '01',
    title: 'Understand',
    headline: 'Start with the business, not the software.',
    description: 'Before we recommend a platform, workflow, or technology, we understand how your business actually operates.',
    cards: [
      { label: 'People', desc: 'Who performs the work?' },
      { label: 'Process', desc: 'How does the work happen?' },
      { label: 'Systems', desc: 'What tools are already involved?' },
      { label: 'Problems', desc: 'Where does work slow down or break?' },
    ],
    flow: ['PEOPLE', 'PROCESS', 'SYSTEMS', 'PROBLEMS'],
    flowTarget: 'UNDERSTANDING',
  },
  {
    num: '02',
    title: 'Design',
    headline: 'Turn understanding into a solution.',
    description: 'We translate business requirements into workflows, interfaces, architecture, and a clear implementation plan.',
    cards: [
      { label: 'Requirements', desc: 'Defining clear core objectives.' },
      { label: 'Workflows', desc: 'Mapping step-by-step business logic.' },
      { label: 'Architecture', desc: 'Designing database & data models.' },
      { label: 'User Experience', desc: 'Crafting intuitive UI for roles.' },
    ],
    flow: ['REQUIREMENTS', 'WORKFLOW', 'ARCHITECTURE', 'EXPERIENCE'],
  },
  {
    num: '03',
    title: 'Build',
    headline: 'Create what the solution actually needs.',
    description: 'We use existing capabilities where they make sense, automate repetitive work, integrate disconnected systems, and build custom functionality where it genuinely adds value.',
    isBuildNode: true,
  },
  {
    num: '04',
    title: 'Validate',
    headline: 'Prove it works before production.',
    description: 'We test real workflows, refine the solution, and make sure it works for the people who will use it.',
    flowSequence: ['REAL WORKFLOW', 'TEST', 'REVIEW', 'REFINE', 'BUSINESS APPROVAL'],
    cards: [
      { label: 'Functional', desc: 'Does it work accurately?' },
      { label: 'Business', desc: 'Does it match the real process?' },
      { label: 'Integration', desc: 'Does information move correctly?' },
      { label: 'User', desc: 'Can your team actually use it?' },
    ],
  },
  {
    num: '05',
    title: 'Launch & Evolve',
    headline: "Going live isn't the finish line.",
    description: 'We help move the solution into production, support your team through adoption, and continue improving it as your business changes.',
    isLoop: true,
    loopSteps: ['DEPLOY', 'ADOPT', 'SUPPORT', 'IMPROVE'],
  },
]

const specializedPaths = [
  {
    title: 'ERPNext Consultancy',
    tagline: 'Understand before we build.',
    steps: ['UNDERSTAND', 'ASSESS', 'DESIGN', 'PRIORITIZE', 'PLAN', 'DECIDE'],
  },
  {
    title: 'ERPNext Implementation',
    tagline: 'Build the right ERP foundation.',
    steps: ['DISCOVER', 'DESIGN', 'CONFIGURE', 'EXTEND', 'VALIDATE', 'LAUNCH', 'EVOLVE'],
  },
  {
    title: 'ERPNext Customization',
    tagline: 'Extend ERPNext with purpose.',
    steps: ['ASSESS', 'CONFIGURE', 'REDESIGN', 'AUTOMATE', 'BUILD'],
  },
  {
    title: 'Third-Party Integrations',
    tagline: 'Connect ERPNext to the world around it.',
    steps: ['MAP', 'CONNECT', 'SYNCHRONIZE', 'AUTOMATE', 'VALIDATE', 'MONITOR'],
  },
  {
    title: 'Frappe Application Development',
    tagline: 'Turn complex processes into business software.',
    steps: ['DISCOVER', 'MODEL', 'BUILD', 'CONNECT', 'PROVE', 'EVOLVE'],
  },
  {
    title: 'Mobile Development',
    tagline: 'Build the right experience for every user.',
    steps: ['UNDERSTAND', 'DESIGN', 'ARCHITECT', 'BUILD', 'CONNECT', 'LAUNCH', 'EVOLVE'],
  },
  {
    title: 'Web Development',
    tagline: 'Build digital experiences around the business.',
    steps: ['DISCOVER', 'STRUCTURE', 'DESIGN', 'BUILD', 'CONNECT', 'PROVE', 'LAUNCH', 'GROW'],
  },
  {
    title: 'Business Automation & Custom Software',
    tagline: 'Automate what repeats. Build what doesn\'t exist.',
    steps: ['MAP', 'SIMPLIFY', 'AUTOMATE', 'BUILD', 'CONNECT', 'PROVE', 'EVOLVE'],
  },
]

export function ProcessPage() {
  const [activeStageIndex, setActiveStageIndex] = useState(0)

  return (
    <main className="bg-paper text-ink pb-24">
      {/* SECTION 01 — Hero */}
      <section className="relative px-6 md:px-10 pt-10 pb-20 border-b border-ink/5 bg-gradient-to-b from-white to-paper">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Our Process' }]} />

          <div className="mt-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-iris"
            >
              <span className="h-px w-6 bg-iris" />
              OUR PROCESS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-display text-4xl md:text-6xl tracking-tight text-ink"
            >
              How We Turn Business Problems Into Working Systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-muted leading-relaxed"
            >
              Every project is different. Our approach isn't. We start with the business, build what it actually needs, and stay involved as the system evolves.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 02 — The Nexora Approach */}
      <section className="px-6 md:px-10 py-20 border-b border-ink/5 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-iris">
              THE NEXORA APPROACH
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-ink">
              One Process. Five Principles.
            </h2>
            <p className="mt-4 text-muted text-base md:text-lg">
              From the first conversation to production and beyond, every Nexora project follows the same fundamental path.
            </p>
          </div>

          {/* Interactive Desktop Timeline Bar */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
            {detailedStages.map((stage, idx) => (
              <button
                key={stage.num}
                onClick={() => setActiveStageIndex(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                  activeStageIndex === idx
                    ? 'border-iris bg-iris/5 shadow-md shadow-iris/5 translate-y-[-2px]'
                    : 'border-ink/10 bg-paper/50 hover:bg-white hover:border-ink/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-iris">/ {stage.num}</span>
                  {activeStageIndex === idx && (
                    <span className="h-2 w-2 rounded-full bg-iris" />
                  )}
                </div>
                <div className="mt-3 font-display text-lg font-bold text-ink">{stage.title}</div>
                <div className="mt-1 text-xs text-muted line-clamp-1">{stage.headline}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — Detailed 5 Stages */}
      <section className="px-6 md:px-10 py-24 space-y-24">
        <div className="mx-auto max-w-7xl space-y-24">
          {detailedStages.map((stage) => (
            <motion.div
              key={stage.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-ink/10 bg-white p-8 md:p-12 shadow-sm overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-8 font-mono text-6xl md:text-8xl font-bold text-ink/5 select-none">
                {stage.num}
              </div>

              <div className="relative z-10 max-w-3xl">
                <span className="inline-block px-3 py-1 rounded-full bg-iris/10 font-mono text-xs font-bold text-iris uppercase tracking-wider">
                  Stage {stage.num}
                </span>
                <h3 className="mt-4 font-display text-3xl md:text-5xl text-ink">
                  {stage.title}
                </h3>
                <h4 className="mt-2 text-xl font-medium text-iris font-display">
                  {stage.headline}
                </h4>
                <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Stage 01 Special Node Cards */}
              {stage.cards && !stage.isBuildNode && !stage.isLoop && (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stage.cards.map((c) => (
                    <div key={c.label} className="p-5 rounded-2xl bg-paper/60 border border-ink/5">
                      <div className="font-display font-bold text-ink">{c.label}</div>
                      <div className="mt-1 text-xs text-muted">{c.desc}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Stage 01 Animated Flow Diagram */}
              {stage.flow && (
                <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center gap-3 font-mono text-xs text-iris font-semibold">
                  {stage.flow.map((item, idx) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="px-3 py-1.5 rounded-lg bg-white border border-ink/10 shadow-2xs text-ink">
                        {item}
                      </span>
                      {idx < stage.flow!.length - 1 ? <span>───</span> : <span>↓</span>}
                    </div>
                  ))}
                  <span className="px-3.5 py-1.5 rounded-lg accent-gradient text-white font-bold shadow-sm">
                    {stage.flowTarget}
                  </span>
                </div>
              )}

              {/* Stage 03 Nexora Decision Model Node */}
              {stage.isBuildNode && (
                <div className="mt-10 p-8 rounded-2xl bg-mist/60 border border-ink/10">
                  <div className="text-center font-mono text-xs uppercase tracking-widest text-iris mb-6 font-bold">
                    The Nexora Build Model
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="px-6 py-2 rounded-xl bg-ink text-white font-mono text-sm font-bold shadow-md">
                      BUILD
                    </div>
                    <div className="h-6 w-px bg-ink/20 my-1" />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl text-center">
                      <div className="p-3 rounded-xl bg-white border border-ink/10 font-mono text-xs font-bold text-ink shadow-2xs">
                        CONFIGURE
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-ink/10 font-mono text-xs font-bold text-ink shadow-2xs">
                        AUTOMATE
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-ink/10 font-mono text-xs font-bold text-ink shadow-2xs">
                        DEVELOP
                      </div>
                    </div>
                    <div className="h-6 w-px bg-ink/20 my-1" />
                    <div className="px-6 py-2 rounded-xl accent-gradient text-white font-mono text-sm font-bold shadow-md">
                      CONNECT
                    </div>
                  </div>
                </div>
              )}

              {/* Stage 04 Validation Flow */}
              {stage.flowSequence && (
                <div className="mt-8 pt-6 border-t border-ink/10">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-iris font-bold">
                    {stage.flowSequence.map((item, idx) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-mist border border-ink/10 text-ink">
                          {item}
                        </span>
                        {idx < stage.flowSequence!.length - 1 && <span>↓</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stage 05 Continuous Improvement Loop */}
              {stage.isLoop && (
                <div className="mt-10 p-6 rounded-2xl bg-mist/50 border border-ink/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold text-ink">
                    {stage.loopSteps?.map((step, idx) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="px-3 py-1.5 rounded-lg bg-white border border-ink/10 shadow-2xs">
                          {step}
                        </span>
                        {idx < stage.loopSteps!.length - 1 ? <span>↓</span> : <RefreshCw className="h-4 w-4 text-iris animate-spin-slow" />}
                      </div>
                    ))}
                  </div>
                  <div className="font-mono text-xs text-iris font-semibold">
                    ↺ Business changes → software evolves.
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 04 — Signature Nexora Statement */}
      <section className="px-6 md:px-10 py-32 bg-white border-y border-ink/5 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,92,231,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-ink leading-tight">
            We don't start with software.<br />
            We start with the way your business works.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted">
            The technology comes after the problem is understood.
          </p>
        </div>
      </section>

      {/* SECTION 05 — One Approach. Different Paths (8 Cards) */}
      <section className="px-6 md:px-10 py-24 bg-paper/60">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-iris">
              SPECIALIZED APPROACHES
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-ink">
              One Approach. Different Paths.
            </h2>
            <p className="mt-4 text-muted text-base md:text-lg">
              The principles stay the same. The process adapts to the kind of problem we're solving.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedPaths.map((path, idx) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * idx }}
                className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-2xs hover:shadow-md hover:border-iris/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-iris">/ 0{idx + 1}</div>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink leading-snug">
                    {path.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted font-medium">{path.tagline}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-ink/5">
                  <div className="font-mono text-[10px] tracking-tight text-ink/70 flex flex-wrap items-center gap-1">
                    {path.steps.map((s, sIdx) => (
                      <span key={s} className="flex items-center gap-1">
                        <span>{s}</span>
                        {sIdx < path.steps.length - 1 && <span className="text-iris">→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — Don't Force the Same Solution (Interactive Decision Model) */}
      <section className="px-6 md:px-10 py-24 bg-white border-y border-ink/5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-ink">
              Not Every Problem Needs Custom Software.
            </h2>
            <p className="mt-4 text-muted text-base md:text-lg">
              We don't add technology just because we can. We choose the simplest solution that solves the actual problem.
            </p>
          </div>

          {/* Interactive Decision Flowchart */}
          <div className="mt-14 p-8 md:p-12 rounded-3xl border border-ink/10 bg-mist/30">
            <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto font-mono">
              <div className="px-6 py-3 rounded-2xl bg-ink text-white font-bold text-sm shadow-md">
                BUSINESS PROBLEM
              </div>
              <div className="h-6 w-px bg-ink/20" />

              <div className="p-4 rounded-2xl bg-white border border-ink/10 shadow-2xs font-bold text-xs text-ink flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-iris" />
                CAN EXISTING SOFTWARE HANDLE IT?
              </div>

              <div className="grid grid-cols-2 gap-8 w-full max-w-md my-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-emerald-600 mb-1">YES</span>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold w-full">
                    CONFIGURE
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-rose-600 mb-1">NO</span>
                  <div className="p-3 rounded-xl bg-white border border-ink/10 text-xs font-bold w-full">
                    CAN PROCESS BE SIMPLIFIED?
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 w-full max-w-md my-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-emerald-600 mb-1">YES</span>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold w-full">
                    REDESIGN
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-rose-600 mb-1">NO</span>
                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold w-full">
                    AUTOMATE
                  </div>
                </div>
              </div>

              <div className="h-4 w-px bg-ink/20" />
              <div className="text-xs text-muted font-sans italic">Still not enough?</div>

              <div className="px-6 py-3 rounded-2xl accent-gradient text-white font-bold text-sm shadow-md">
                BUILD CUSTOM SOFTWARE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — How Everything Connects */}
      <section className="px-6 md:px-10 py-24 bg-paper/60">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl text-ink">
              Different Projects. One Nexora Philosophy.
            </h2>
            <p className="mt-4 text-muted text-base md:text-lg">
              Nexora isn't a collection of disconnected services. They're different tools for solving different parts of the same business problem.
            </p>
          </div>

          <div className="mt-12 p-8 md:p-10 rounded-3xl border border-ink/10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center font-mono text-xs">
              <div className="p-4 rounded-xl bg-paper border border-ink/5 flex flex-col justify-center">
                <div className="text-iris font-bold">1. START</div>
                <div className="mt-1 text-ink font-bold text-sm">BUSINESS</div>
              </div>
              <div className="p-4 rounded-xl bg-paper border border-ink/5 flex flex-col justify-center">
                <div className="text-iris font-bold">2. ALIGN</div>
                <div className="mt-1 text-ink font-bold text-sm">UNDERSTAND & DESIGN</div>
              </div>
              <div className="p-4 rounded-xl bg-iris/10 border border-iris/20 flex flex-col justify-center">
                <div className="text-iris font-bold">3. SERVICE TOOLS</div>
                <div className="mt-1 text-ink font-bold text-[11px] leading-tight">
                  ERPNext · Frappe · Mobile · Web · Custom Software
                </div>
              </div>
              <div className="p-4 rounded-xl bg-paper border border-ink/5 flex flex-col justify-center">
                <div className="text-iris font-bold">4. EXECUTE</div>
                <div className="mt-1 text-ink font-bold text-sm">BUILD & VALIDATE</div>
              </div>
              <div className="p-4 rounded-xl accent-gradient text-white flex flex-col justify-center shadow-sm">
                <div className="font-bold">5. SUSTAIN</div>
                <div className="mt-1 font-bold text-sm">LAUNCH & EVOLVE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — What This Means for Clients */}
      <section className="px-6 md:px-10 py-24 bg-white border-t border-ink/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-ink/10 bg-paper/40">
              <div className="h-10 w-10 rounded-xl bg-iris/10 text-iris flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">Clarity</h3>
              <p className="mt-3 text-muted text-base">
                Know what should be built before investing in it.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-ink/10 bg-paper/40">
              <div className="h-10 w-10 rounded-xl bg-iris/10 text-iris flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">Purpose</h3>
              <p className="mt-3 text-muted text-base">
                Build only what your business actually needs.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-ink/10 bg-paper/40">
              <div className="h-10 w-10 rounded-xl bg-iris/10 text-iris flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">Continuity</h3>
              <p className="mt-3 text-muted text-base">
                Work with one team from idea through production and evolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — Final CTA */}
      <section className="px-6 md:px-10 pt-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] accent-gradient px-8 py-16 text-white text-center shadow-xl">
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl mx-auto">
            Have a Business Problem Worth Solving?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-white/90 text-lg">
            Tell us how your business works. We'll help you figure out what the right solution looks like.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ContactLink
              className="inline-flex rounded-full bg-white px-8 py-4 font-display font-semibold text-ink hover:bg-mist transition-colors shadow-lg"
            >
              Start a Conversation →
            </ContactLink>
            <Link
              to="/services"
              className="inline-flex rounded-full bg-white/10 backdrop-blur-xs border border-white/20 px-8 py-4 font-display font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Explore Our Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
