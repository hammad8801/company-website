import { resources } from '@/data/site'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { LeadMagnetModal } from '@/components/LeadMagnetModal'
import { PageHero } from '@/components/PageHero'

export function ResourcesPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />
      <PageHero
        badge="Resources"
        title="ERP guides, checklists and comparisons"
        description="Practical, vendor-neutral guidance on ERPNext implementation, costs, and readiness, written from delivery experience instead of marketing decks."
      />

      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-7xl grid gap-5 md:grid-cols-3">
          {resources.map((item) => (
            <article
              key={item.title}
              className={[
                'rounded-[2rem] border border-ink/10 bg-white p-7 shadow-lg shadow-iris/5',
                item.featured ? 'md:col-span-1 accent-gradient text-white border-transparent' : '',
              ].join(' ')}
            >
              <div className={item.featured ? 'text-white/75 text-xs uppercase tracking-[0.22em]' : 'text-xs uppercase tracking-[0.22em] text-iris'}>
                {item.tag}
              </div>
              <h3 className={['mt-5 font-display text-2xl', item.featured ? 'text-white' : 'text-ink'].join(' ')}>
                {item.title}
              </h3>
              <p className={['mt-4 leading-relaxed', item.featured ? 'text-white/85' : 'text-muted'].join(' ')}>
                {item.description}
              </p>
              <div className="mt-8">
                {item.featured ? (
                  <LeadMagnetModal />
                ) : (
                  <span className="text-sm font-medium text-ink/50">{item.cta}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

