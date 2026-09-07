import { Navigate, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContactLink } from '@/components/ContactLink'
import { PageHero } from '@/components/PageHero'
import { getCaseStudy } from '@/data/site'

export function CaseStudyPage() {
  const { slug = '' } = useParams()
  const study = getCaseStudy(slug)

  if (!study) {
    return <Navigate to="/work" replace />
  }

  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Work', href: '/work' }, { label: study.title }]} />
      <PageHero
        badge={study.category}
        title={study.title}
        description={study.description}
        actions={
          <ContactLink
            source={{ type: 'Case study', title: study.title, slug: study.slug, cta: 'Discuss a similar project' }}
            className="inline-flex rounded-full accent-gradient px-6 py-3 font-medium text-white"
          >
            Discuss a similar project
          </ContactLink>
        }
      />

      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-ink/10 bg-white p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-iris">The challenge</div>
            <h2 className="mt-4 text-3xl text-ink">Where it was breaking</h2>
            <p className="mt-4 text-muted leading-relaxed">{study.challenge}</p>
          </article>
          <article className="rounded-[2rem] border border-ink/10 bg-white p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-iris">The solution</div>
            <h2 className="mt-4 text-3xl text-ink">What we built</h2>
            <p className="mt-4 text-muted leading-relaxed">{study.solution}</p>
          </article>
        </div>
      </section>

      <section className="px-6 md:px-10 pt-4">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-ink/10 bg-mist/35 p-8">
          <div className="text-xs uppercase tracking-[0.22em] text-iris">Outcome snapshot</div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {study.outcomes.map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-white px-5 py-6 text-center text-ink shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
