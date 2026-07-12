import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { products } from '@/data/site'

export function ProductsPage() {
  const [activeTag, setActiveTag] = useState('All')
  const tags = useMemo(() => ['All', ...Array.from(new Set(products.map((product) => product.tag)))], [])
  const visibleProducts = activeTag === 'All' ? products : products.filter((product) => product.tag === activeTag)

  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />
      <PageHero
        badge="16 modules"
        title="ERPNext and Frappe Business Modules"
        description="Ready-to-deploy modules, from POS and payroll to logistics and legal case management. Configure and roll out fast, with each module integrating cleanly into your ERPNext system."
      />

      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={[
                  'rounded-full px-4 py-2 text-sm transition-colors',
                  activeTag === tag ? 'accent-gradient text-white' : 'border border-ink/10 bg-white text-ink/70 hover:bg-mist',
                ].join(' ')}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => {
              const Icon = product.icon
              return (
                <Link
                  key={product.slug}
                  to={`/products/${product.slug}`}
                  className="group rounded-[2rem] border border-ink/10 bg-white p-7 shadow-lg shadow-iris/5 transition-all hover:-translate-y-1 hover:border-iris/25"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl accent-gradient text-white shadow-md shadow-iris/25">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink/35 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-iris" />
                  </div>
                  <div className="mt-6 text-xs uppercase tracking-[0.22em] text-iris/70">{product.tag}</div>
                  <h2 className="mt-2 font-display text-2xl text-ink">{product.title}</h2>
                  <p className="mt-4 text-muted leading-relaxed">{product.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

