import { motion } from 'motion/react'

const tokens = [
  'ERPNext',
  'Frappe',
  'Mobile Apps',
  'Web',
  'Automation',
  'Custom CRM',
  'Dashboards',
  'Integrations',
]

export function Marquee() {
  const row = [...tokens, ...tokens, ...tokens]
  return (
    <div className="relative border-y border-white/5 py-5 overflow-hidden bg-[#070707]">
      <div className="flex">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          className="flex gap-10 whitespace-nowrap pr-10"
        >
          {row.map((t, i) => (
            <div
              key={`${t}-${i}`}
              className="flex items-center gap-10 shrink-0 text-white/40 font-mono text-sm uppercase tracking-[0.3em]"
            >
              {t}
              <span className="h-1 w-1 rounded-full bg-white/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
