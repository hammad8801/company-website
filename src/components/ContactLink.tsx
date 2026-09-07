import { Link, useLocation, type LinkProps } from 'react-router-dom'

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
  const params = new URLSearchParams({
    sourcePath: `${location.pathname}${location.search}${location.hash}`,
  })

  if (source?.type) params.set('sourceType', source.type)
  if (source?.title) params.set('sourceTitle', source.title)
  if (source?.slug) params.set('sourceSlug', source.slug)
  if (source?.cta) params.set('sourceCta', source.cta)

  return <Link {...props} to={`/contact?${params.toString()}`} />
}
