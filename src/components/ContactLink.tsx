import { Link, useLocation, type LinkProps } from 'react-router-dom'
import { getCaseStudy, getIndustry, getProduct, getService } from '@/data/site'

export type ContactSource = {
  type?: string
  title?: string
  slug?: string
  cta?: string
}

type ContactLinkProps = Omit<LinkProps, 'to'> & {
  source?: ContactSource
}

export function ContactLink({ source, ...props }: ContactLinkProps) {
  const location = useLocation()
  // All contact CTAs, including the shared header/footer, carry the originating page.
  const [section, slug = ''] = location.pathname.split('/').filter(Boolean)
  const item = section === 'products' ? getProduct(slug)
    : section === 'services' ? getService(slug)
      : section === 'industries' ? getIndustry(slug)
        : section === 'work' ? getCaseStudy(slug) : undefined
  const pageType = ({ products: 'Product', services: 'Service', industries: 'Industry', work: 'Case study' } as Record<string, string>)[section]
    || (section ? 'Page' : 'Homepage')
  const pageTitle = item?.title || (slug || section || 'Home')
    .split('-').map((word) => word === 'erpnext' ? 'ERPNext' : word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const details = { type: pageType, title: pageTitle, slug, cta: 'Contact us', ...source }
  if (location.pathname === '/contact') {
    return <Link {...props} to={`${location.pathname}${location.search}`} />
  }
  const params = new URLSearchParams({
    sourcePath: location.pathname,
  })

  if (details.type) params.set('sourceType', details.type)
  if (details.title) params.set('sourceTitle', details.title)
  if (details.slug) params.set('sourceSlug', details.slug)
  if (details.cta) params.set('sourceCta', details.cta)

  return <Link {...props} to={`/contact?${params.toString()}`} />
}
