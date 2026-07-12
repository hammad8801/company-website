import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { caseStudies } from '@/data/site'

export function WorkPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Work' }]} />
      <PageHero
        badge="Case studies"
        title="Selected work, measured in outcomes"
        description="ERP, mobile, and web projects with quantified results. These are illustrative sample case studies for now, and the structure is ready for real client stories later."
      />

      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-7xl grid gap-5 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Link key={study.slug} to={`/work/${study.slug}`} className="rounded-[2rem] border border-ink/10 bg-white p-7 shadow-lg shadow-iris/5">
              <div className="text-xs uppercase tracking-[0.22em] text-iris">{study.category}</div>
              <h2 className="mt-3 font-display text-2xl text-ink">{study.title}</h2>
              <p className="mt-4 text-muted leading-relaxed">{study.description}</p>
              <span className="mt-6 inline-flex text-sm font-medium text-iris">Read case study →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

