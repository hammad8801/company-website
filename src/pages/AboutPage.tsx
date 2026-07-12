import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { aboutPrinciples, aboutTeam } from '@/data/site'

export function AboutPage() {
  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <PageHero
        badge="About Nexora"
        title="The studio behind the systems"
        description="Nexora is an ERPNext and Frappe studio based in India, serving operations-led businesses worldwide. We exist for one reason: most businesses do not have a software problem, they have a source-of-truth problem."
      />

      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.24em] text-iris">How we think</div>
            <h2 className="mt-4 text-3xl md:text-5xl text-ink">Three principles behind every engagement</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {aboutPrinciples.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-ink/10 bg-white p-7 shadow-lg shadow-iris/5">
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-4 text-muted leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-ink/10 bg-mist/35 p-8 md:p-10">
          <div className="text-xs uppercase tracking-[0.24em] text-iris">Team</div>
          <h2 className="mt-4 text-3xl md:text-5xl text-ink">Meet the team</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Replace these placeholders with real profiles and photos before launch. This area is already structured so the client team can drop final trust-building content in quickly.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {aboutTeam.map((role) => (
              <div key={role} className="rounded-[2rem] border border-ink/10 bg-white p-7">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl accent-gradient text-2xl text-white">👤</div>
                <h3 className="mt-5 font-display text-2xl text-ink">{role}</h3>
                <p className="mt-3 text-muted">Add the real bio, role, and delivery credentials here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pt-8">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] accent-gradient px-8 py-10 text-white">
          <h2 className="text-3xl md:text-5xl">Work with us</h2>
          <p className="mt-4 max-w-2xl text-white/85">
            One conversation is enough to know whether we are the right fit. We will tell you honestly if we are not.
          </p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-medium text-ink">
            Get a Free ERP Readiness Assessment
          </Link>
        </div>
      </section>
    </main>
  )
}

