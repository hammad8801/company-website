import { Link, NavLink, Outlet } from 'react-router-dom'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Footer } from '@/sections/Footer'
import { company, navGroups } from '@/data/site'

const topLinks = [
  { label: 'Industries', href: '/industries/manufacturing' },
  { label: 'Work', href: '/work' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function SiteLayout() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40)
  })

  return (
    <div className="relative min-h-screen bg-paper text-ink overflow-x-clip">
      <ScrollProgress />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 pt-4"
      >
        <div
          className={[
            'mx-auto max-w-7xl rounded-[1.75rem] border transition-all duration-500',
            scrolled
              ? 'border-ink/10 bg-white/88 px-4 py-3 shadow-lg shadow-iris/10 backdrop-blur-xl'
              : 'border-white/45 bg-white/55 px-4 py-4 backdrop-blur-lg',
          ].join(' ')}
        >
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl accent-gradient text-sm font-display font-bold text-white shadow-md shadow-iris/25">
                N
              </span>
              <span className="font-display text-lg tracking-tight text-ink">{company.name}</span>
            </Link>

            <nav className="hidden xl:flex items-center gap-2 text-sm">
              <NavDropdown
                label="Services"
                items={navGroups.services}
                open={openMenu === 'services'}
                onOpen={() => setOpenMenu('services')}
                onClose={() => setOpenMenu((current) => (current === 'services' ? null : current))}
              />
              <NavDropdown
                label="Products"
                items={navGroups.products.concat([{ label: 'Browse all modules', href: '/products' }])}
                open={openMenu === 'products'}
                onOpen={() => setOpenMenu('products')}
                onClose={() => setOpenMenu((current) => (current === 'products' ? null : current))}
              />
              {topLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="rounded-full px-4 py-2 text-ink/70 transition-colors hover:bg-mist hover:text-ink"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 rounded-full accent-gradient px-5 py-3 text-sm font-medium text-white shadow-lg shadow-iris/25"
              >
                Get a Free ERP Assessment
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen((value) => !value)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-ink xl:hidden"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {mobileOpen ? (
            <div
              data-lenis-prevent
              data-lenis-prevent-touch
              data-lenis-prevent-wheel
              className="h-[calc(100dvh-7rem)] min-h-0 touch-pan-y overflow-y-scroll overscroll-contain xl:hidden pt-4 pr-1 [scrollbar-gutter:stable] [-webkit-overflow-scrolling:touch]"
            >
              <div className="grid gap-2 border-t border-ink/10 pt-4">
                <MobileMenuSection title="Services" items={navGroups.services} onNavigate={() => setMobileOpen(false)} />
                <MobileMenuSection title="Products" items={navGroups.products} onNavigate={() => setMobileOpen(false)} />
                {topLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm text-ink/80 hover:bg-mist"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </motion.header>

      <Outlet />
      <Footer />
    </div>
  )
}

function NavDropdown({
  label,
  items,
  open,
  onOpen,
  onClose,
}: {
  label: string
  items: Array<{ label: string; href: string }>
  open: boolean
  onOpen: () => void
  onClose: () => void
}) {
  return (
    <div
      className="relative py-2 -my-2"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        onClick={() => (open ? onClose() : onOpen())}
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-ink/70 transition-colors hover:bg-mist hover:text-ink"
      >
        {label}
        <ChevronDown className={['h-4 w-4 transition-transform', open ? 'rotate-180' : ''].join(' ')} />
      </button>
      {open ? (
        <>
          <div aria-hidden className="absolute left-0 top-full h-4 w-full" />
          <div className="absolute left-0 top-full mt-3 w-80 rounded-[1.5rem] border border-ink/10 bg-white p-3 shadow-2xl shadow-ink/10">
            <div className="grid gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onClose}
                  className="rounded-2xl px-4 py-3 text-sm text-ink/80 transition-colors hover:bg-mist hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

function MobileMenuSection({
  title,
  items,
  onNavigate,
}: {
  title: string
  items: Array<{ label: string; href: string }>
  onNavigate: () => void
}) {
  return (
    <div className="rounded-[1.25rem] border border-ink/8 bg-white/70 p-3">
      <div className="px-2 pb-2 text-xs uppercase tracking-[0.22em] text-iris">{title}</div>
      <div className="grid gap-1">
        {items.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={onNavigate}
            className="rounded-2xl px-3 py-2.5 text-sm text-ink/80 hover:bg-mist"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
