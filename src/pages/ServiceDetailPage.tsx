import { Link, Navigate, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContactLink } from '@/components/ContactLink'
import { PageHero } from '@/components/PageHero'
import { getRelatedProducts, getService } from '@/data/site'

export function ServiceDetailPage() {
  const { slug = '' } = useParams()
  const service = getService(slug)

  if (!service) {
    return <Navigate to="/" replace />
  }

  const Icon = service.icon
  const relatedProducts = getRelatedProducts(service.relatedProducts)

  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/#services' }, { label: service.title }]} />
      <PageHero
        badge="Service"
        title={service.title}
        description={service.description}
        actions={
          <ContactLink
            source={{ type: 'Service', title: service.title, slug: service.slug, cta: service.cta }}
            className="inline-flex rounded-full accent-gradient px-6 py-3 font-medium text-white"
          >
            {service.cta}
          </ContactLink>
        }
      />

      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-ink/10 bg-white p-8">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl accent-gradient text-white">
              <Icon className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-3xl text-ink">What we deliver</h2>
            <p className="mt-4 text-muted leading-relaxed">{service.intro}</p>
            <div className="mt-8 grid gap-4">
              {service.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 text-muted">
                  <span className="mt-2 h-2 w-2 rounded-full bg-iris shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-ink/10 bg-mist/35 p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-iris">Why it matters</div>
            <p className="mt-4 text-muted leading-relaxed">{service.whyItMatters}</p>
            <Link to="/process" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-medium text-ink">
              How we deliver
            </Link>
          </aside>
        </div>
      </section>

      <section className="px-6 md:px-10 pt-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-[0.24em] text-iris">Related modules</div>
            <h2 className="mt-4 text-3xl md:text-5xl text-ink">Ready-made modules that pair with this service</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {relatedProducts.map((product) => (
              <Link key={product.slug} to={`/products/${product.slug}`} className="rounded-[2rem] border border-ink/10 bg-white p-7">
                <div className="text-xs uppercase tracking-[0.22em] text-iris">{product.tag}</div>
                <h3 className="mt-3 font-display text-2xl text-ink">{product.title}</h3>
                <p className="mt-4 text-muted leading-relaxed">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
