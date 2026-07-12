import { motion } from 'motion/react'

type Props = {
  badge: string
  title: string
  description: string
  actions?: React.ReactNode
}

export function PageHero({ badge, title, description, actions }: Props) {
  return (
    <section className="px-6 md:px-10 pt-10 pb-20 md:pb-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-ink/10 bg-white/75 backdrop-blur-xl p-8 md:p-12 lg:p-16 shadow-xl shadow-iris/5">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-mist/60 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-iris">
            {badge}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl lg:text-7xl leading-[0.96] tracking-tight text-ink text-balance">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-muted leading-relaxed text-balance">
            {description}
          </p>
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </motion.div>
      </div>
    </section>
  )
}

