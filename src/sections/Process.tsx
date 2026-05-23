import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const steps = [
  {
    n: '01',
    t: 'Requirement Analysis',
    d: 'We understand your business, map key challenges, and identify where automation creates the most leverage.',
  },
  {
    n: '02',
    t: 'Solution Design',
    d: 'We design a tailored system aligned with your workflow — architecture, modules, integrations, and data models.',
  },
  {
    n: '03',
    t: 'Development & Customization',
    d: 'We build and customize the system in focused sprints, with working software from week one.',
  },
  {
    n: '04',
    t: 'Testing & Deployment',
    d: 'We stress-test, migrate data, and launch — everything works before anyone signs in for the first time.',
  },
  {
    n: '05',
    t: 'Training & Support',
    d: 'We onboard your team and provide ongoing support so the system keeps delivering value long after launch.',
  },
]

export function Process() {
  const container = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-72%'])

  return (
    <section
      id="process"
      ref={container}
      className="relative border-t border-ink/5"
      style={{ height: `${steps.length * 75}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="px-6 md:px-10 pt-24 md:pt-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-iris"
            >
              <span className="h-px w-6 bg-iris" />
              Our process
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink text-balance max-w-3xl"
            >
              From first call to live deployment, in{' '}
              <span className="italic font-light accent-text">five steps</span>.
            </motion.h2>
          </div>
        </div>

        <div className="flex-1 flex items-center overflow-hidden mt-10">
          <motion.div
            ref={track}
            style={{ x }}
            className="flex gap-6 md:gap-8 pl-6 md:pl-10 pr-[20vw]"
          >
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="relative shrink-0 w-[85vw] sm:w-[60vw] md:w-[44vw] lg:w-[38vw] h-[58vh] rounded-3xl border border-ink/10 bg-white p-8 md:p-10 overflow-hidden shadow-lg shadow-iris/5"
              >
                <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-iris/15 blur-3xl" />
                <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-rose/10 blur-3xl" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-iris">
                      / {s.n}
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-muted">
                      Step {i + 1} of {steps.length}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-display text-3xl md:text-5xl leading-[1.05] text-ink">
                      {s.t}
                    </h3>
                    <p className="mt-6 text-muted leading-relaxed md:text-lg max-w-md">
                      {s.d}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="px-6 md:px-10 pb-8">
          <div className="mx-auto max-w-7xl">
            <div className="h-px w-full bg-ink/10 relative overflow-hidden">
              <motion.div
                style={{
                  scaleX: scrollYProgress,
                  transformOrigin: 'left',
                }}
                className="absolute inset-0 accent-gradient"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
