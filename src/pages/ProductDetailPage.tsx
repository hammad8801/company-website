import { Link, Navigate, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'
import { getProduct } from '@/data/site'

export function ProductDetailPage() {
  const { slug = '' } = useParams()
  const product = getProduct(slug)

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const Icon = product.icon

  return (
    <main className="pb-24">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: product.title }]} />
      <PageHero
        badge={product.tag}
        title={product.title}
        description={product.description}
        actions={
          <Link to="/contact" className="inline-flex rounded-full accent-gradient px-6 py-3 font-medium text-white">
            Discuss this module
          </Link>
        }
      />

      <section className="px-6 md:px-10 py-8">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-ink/10 bg-white p-8">
            <h2 className="text-3xl text-ink">What this module covers</h2>
            <div className="mt-8 grid gap-4">
              {product.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 text-muted">
                  <span className="mt-2 h-2 w-2 rounded-full bg-iris shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-ink/10 bg-mist/35 p-8">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl accent-gradient text-white">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-2xl text-ink">Built to fit your ERP, not fight it.</h3>
            <p className="mt-4 text-muted leading-relaxed">
              This page now exists as a proper route in the current project, so the client can expand each product independently instead of keeping everything buried on the homepage.
            </p>
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-medium text-ink">
              Talk to our team
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}

