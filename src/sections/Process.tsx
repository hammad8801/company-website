import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    name: 'Understand',
    tagline: 'Start with the business, not the software.',
    description: 'We learn how your people, processes, systems, and challenges actually work.',
    nodes: ['BUSINESS', 'PEOPLE', 'PROCESS', 'PROBLEM'],
    connectChar: '↓',
  },
  {
    num: '02',
    name: 'Design',
    tagline: 'Turn the problem into a practical solution.',
    description: 'We shape the workflows, experience, architecture, and technology around what the business actually needs.',
    nodes: ['REQUIREMENTS', 'WORKFLOW', 'ARCHITECTURE'],
    connectChar: '↓',
  },
  {
    num: '03',
    name: 'Build',
    tagline: 'Create what the solution actually needs.',
    description: 'Configure, develop, automate, and connect — without building complexity that doesn\'t need to exist.',
    nodes: ['CONFIGURE', 'DEVELOP', 'AUTOMATE', 'CONNECT'],
    connectChar: '+',
  },
  {
    num: '04',
    name: 'Validate',
    tagline: 'Prove it before it goes live.',
    description: 'We test real workflows, refine the solution, and make sure it works for the people who will use it.',
    nodes: ['TEST', 'REVIEW', 'REFINE', 'APPROVE'],
    connectChar: '↓',
  },
  {
    num: '05',
    name: 'Launch & Evolve',
    tagline: 'Go live. Keep improving.',
    description: 'We deploy the system, support adoption, and continue improving it as your business changes.',
    nodes: ['DEPLOY', 'ADOPT', 'SUPPORT', 'IMPROVE'],
    connectChar: '↓',
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36 px-6 md:px-10 border-t border-ink/5 bg-paper/60">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-iris"
          >
            <span className="h-px w-6 bg-iris" />
            HOW WE WORK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-4xl md:text-6xl tracking-tight text-ink text-balance"
          >
            From Business Challenge to Working System.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-muted leading-relaxed"
          >
            We start with how your business works, then design, build, validate, and evolve the right solution.
          </motion.p>
        </div>

        {/* Timeline Desktop Grid (5 Columns) / Mobile Stack */}
        <div className="mt-16 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-px bg-ink/10 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="group relative flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-iris/30 hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle top indicator dot */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist font-mono text-sm font-bold text-iris group-hover:bg-iris group-hover:text-white transition-colors duration-300">
                      {step.num}
                    </span>
                    <span className="font-display text-lg font-bold text-ink">{step.name}</span>
                  </div>
                </div>

                {/* Subtitle & Description */}
                <div>
                  <h3 className="font-display text-base font-bold text-ink leading-snug">
                    {step.tagline}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual Node Diagram */}
                <div className="mt-8 pt-4 border-t border-ink/5 bg-mist/50 -mx-6 -mb-6 p-4">
                  <div className="flex flex-wrap items-center justify-center gap-1.5 font-mono text-[10px] tracking-wider text-iris font-semibold">
                    {step.nodes.map((node, nIdx) => (
                      <span key={node} className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-white border border-ink/10 text-ink shadow-2xs">
                          {node}
                        </span>
                        {nIdx < step.nodes.length - 1 && (
                          <span className="text-iris/70 font-bold">{step.connectChar}</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Homepage Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-3xl border border-ink/10 bg-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-ink">
              One approach. Different paths.
            </h3>
            <p className="mt-2 text-sm text-muted">
              Every project follows the same principles, but each service has its own way of getting there.
            </p>
          </div>

          <Link
            to="/process"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-sm font-semibold text-white transition-all hover:bg-iris hover:shadow-lg shrink-0"
          >
            Explore Our Process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
