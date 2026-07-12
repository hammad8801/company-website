import { Link } from 'react-router-dom'

type Crumb = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-6 md:px-10 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center gap-2 text-sm text-muted">
        {items.map((item, index) => (
          <span key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link to={item.href} className="hover:text-iris transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="text-ink/30">/</span>}
          </span>
        ))}
      </div>
    </nav>
  )
}

