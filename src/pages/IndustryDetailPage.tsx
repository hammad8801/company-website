import { Link, Navigate, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { getIndustry, services } from '@/data/site'

export function IndustryDetailPage() {
  const { slug = '' } = useParams()
  const industry = getIndustry(slug)

  if (!industry) {
    return <Navigate to="/" replace />
  }

  const Icon = industry.icon

  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries/manufacturing' }, { label: industry.title }]} />
      <PageHero badge="Industry" title={industry.headline} description={industry.description} />

      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[2rem] border border-ink/10 bg-white p-8">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl accent-gradient text-white">
              <Icon className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-3xl text-ink">Where we usually help</h2>
            <p className="mt-4 text-muted leading-relaxed">
              This industry page is now separated into its own route so the client can add vertical-specific proof, terminology, and SEO copy later without disturbing the rest of the site.
            </p>
          </aside>

          <div className="grid gap-5 md:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`} className="rounded-[2rem] border border-ink/10 bg-mist/30 p-7">
                <div className="text-xs uppercase tracking-[0.22em] text-iris">{service.title}</div>
                <p className="mt-4 text-muted leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

