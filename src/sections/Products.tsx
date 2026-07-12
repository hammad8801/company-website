import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { SectionHeader } from '@/components/SectionHeader'
import { products } from '@/data/site'
import { ArrowUpRight } from 'lucide-react'

export function Products() {
  return (
    <section
      id="products"
      className="relative py-32 md:py-48 px-6 md:px-10 border-t border-ink/5"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 dot-mesh opacity-30 mask-radial"
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Products"
          title={
            <>
              Ready-to-deploy{' '}
              <span className="italic font-light accent-text">
                business modules
              </span>
              .
            </>
          }
          description="Sixteen battle-tested verticals — configure, customize, and roll out fast. Each one is built on the Frappe stack and integrates cleanly with ERPNext."
        />

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {products.map((p, i) => (
            <ProductCard key={p.title} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number]
  index: number
}) {
  const Icon = product.icon
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <Link
        to={`/products/${product.slug}`}
        className="relative flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 overflow-hidden hover:border-iris/30 hover:shadow-xl hover:shadow-iris/10 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-mist/0 via-transparent to-haze/0 group-hover:from-mist/60 group-hover:to-haze/40 transition-colors duration-500" />

        <div className="relative flex items-start justify-between">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl accent-gradient text-white shadow-md shadow-iris/25 group-hover:scale-110 group-hover:rotate-3 transition-transform">
            <Icon className="h-5 w-5" />
          </span>
          <span className="font-mono text-[10px] tracking-wider text-iris/50">
            / {num}
          </span>
        </div>

        <div className="relative mt-6">
          <div className="text-[10px] uppercase tracking-[0.22em] text-iris/70">
            {product.tag}
          </div>
          <h3 className="mt-2 font-display text-lg md:text-xl text-ink leading-snug">
            {product.title}
          </h3>
        </div>

        <div className="relative mt-6 flex items-center justify-between text-xs text-muted">
          <span className="opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all">
            View module
          </span>
          <ArrowUpRight className="h-4 w-4 text-ink/30 group-hover:text-iris group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>
      </Link>
    </motion.div>
  )
}
