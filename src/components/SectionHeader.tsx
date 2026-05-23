import { motion } from 'motion/react'

type Props = {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, description, align = 'left' }: Props) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-iris"
        >
          <span className="h-px w-6 bg-iris" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="mt-5 text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mt-6 text-lg text-muted leading-relaxed text-balance"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
