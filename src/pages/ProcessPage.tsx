import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { LeadMagnetModal } from '@/components/LeadMagnetModal'
import { PageHero } from '@/components/PageHero'
import { processSteps } from '@/data/site'

export function ProcessPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'How We Work' }]} />
      <PageHero
        badge="Our process"
        title="How we deliver ERPNext projects"
        description="Five steps, each with a defined output you sign off on. No black boxes, no surprise invoices, and no trust-us phases."
      />

      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-5xl space-y-5">
          {processSteps.map((step) => (
            <article key={step.number} className="grid gap-5 rounded-[2rem] border border-ink/10 bg-white p-8 md:grid-cols-[120px_1fr]">
              <div className="font-display text-5xl accent-text">{step.number}</div>
              <div>
                <h2 className="text-2xl md:text-3xl text-ink">{step.title}</h2>
                <p className="mt-4 text-muted leading-relaxed">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pt-8">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] accent-gradient px-8 py-10 text-white">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl">Step 1 is free.</h2>
              <p className="mt-4 max-w-2xl text-white/85">
                The readiness assessment is the first half of requirement analysis, done before you spend a rupee.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <LeadMagnetModal />
              <Link to="/contact" className="inline-flex rounded-full bg-white px-6 py-3 font-medium text-ink">
                Get a Free ERP Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

