import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { industries } from '@/data/site'

export function IndustriesPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries' }]} />
      <PageHero
        badge={`${industries.length} verticals`}
        title="Industries We Serve"
        description="From manufacturing shop floors to multi-outlet retail, we bring ERPNext and custom automation to the exact shape of your industry."
      />

      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="group rounded-[2rem] border border-ink/10 bg-white p-7 shadow-lg shadow-iris/5 transition-all hover:-translate-y-1 hover:border-iris/25"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl accent-gradient text-white shadow-md shadow-iris/25">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink/35 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-iris" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl text-ink">{industry.title}</h2>
                  <p className="mt-4 text-muted leading-relaxed line-clamp-3">{industry.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
