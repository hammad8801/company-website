import { Link, NavLink, Outlet } from 'react-router-dom'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { BrandWordmark } from '@/components/BrandWordmark'
import { ContactLink } from '@/components/ContactLink'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Footer } from '@/sections/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { navGroups } from '@/data/site'
import markUrl from '../../nexora-brand-kit/logos/nexora-appicon.svg'

type NavItem = {
  label: string
  href?: string
  subItems?: Array<{ label: string; href: string }>
}

const erpnextSubItems = [
  { label: 'ERPNext Implementation', href: '/services/erpnext-implementation' },
  { label: 'ERPNext Consulting', href: '/services/erpnext-consulting' },
  { label: 'ERPNext Customization', href: '/services/erpnext-customization' },
  { label: 'Third-Party Integrations', href: '/services/erpnext-integration' },
]

const topLinks = [
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

  const servicesItems: NavItem[] = [
    { label: 'ERPNext', subItems: erpnextSubItems },
    ...navGroups.services.map((s) => ({ label: s.label, href: s.href })),
  ]

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
                <img
                  src={markUrl}
                  alt=""
                  aria-hidden="true"
                />
              </span>
              <BrandWordmark className="text-base" />
            </Link>

            <nav className="hidden xl:flex items-center gap-2 text-sm">
              <NavDropdown
                label="Services"
                items={servicesItems}
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
              <NavDropdown
                label="Industries"
                items={navGroups.industries.concat([{ label: 'Browse all industries', href: '/industries' }])}
                open={openMenu === 'industries'}
                onOpen={() => setOpenMenu('industries')}
                onClose={() => setOpenMenu((current) => (current === 'industries' ? null : current))}
              />
              {topLinks.map((link) => (
                link.href === '/contact' ? (
                  <ContactLink
                    key={link.href}
                    source={{ type: 'Navigation', cta: link.label }}
                    className="rounded-full px-4 py-2 text-ink/70 transition-colors hover:bg-mist hover:text-ink"
                  >
                    {link.label}
                  </ContactLink>
                ) : (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className="rounded-full px-4 py-2 text-ink/70 transition-colors hover:bg-mist hover:text-ink"
                  >
                    {link.label}
                  </NavLink>
                )
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ContactLink
                source={{ type: 'Header', cta: 'Get a Free ERP Assessment' }}
                className="hidden md:inline-flex items-center gap-2 rounded-full accent-gradient px-5 py-3 text-sm font-medium text-white shadow-lg shadow-iris/25"
              >
                Get a Free ERP Assessment
              </ContactLink>
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
                <MobileMenuSection
                  title="Services"
                  items={navGroups.services}
                  subGroup={{ title: 'ERPNext', items: erpnextSubItems }}
                  onNavigate={() => setMobileOpen(false)}
                />
                <MobileMenuSection title="Products" items={navGroups.products} onNavigate={() => setMobileOpen(false)} />
                <MobileMenuSection title="Industries" items={navGroups.industries} onNavigate={() => setMobileOpen(false)} />
                {topLinks.map((link) => (
                  link.href === '/contact' ? (
                    <ContactLink
                      key={link.href}
                      source={{ type: 'Mobile navigation', cta: link.label }}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm text-ink/80 hover:bg-mist"
                    >
                      {link.label}
                    </ContactLink>
                  ) : (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm text-ink/80 hover:bg-mist"
                    >
                      {link.label}
                    </NavLink>
                  )
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </motion.header>

      <Outlet />
      <Footer />
      <WhatsAppButton />
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
  items: NavItem[]
  open: boolean
  onOpen: () => void
  onClose: () => void
}) {
  const [flyoutItem, setFlyoutItem] = useState<string | null>(null)

  return (
    <div
      className="relative py-2 -my-2"
      onMouseEnter={onOpen}
      onMouseLeave={() => { setFlyoutItem(null); onClose() }}
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
              {items.map((item) =>
                item.subItems ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setFlyoutItem(item.label)}
                    onMouseLeave={() => setFlyoutItem(null)}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm text-ink/80 transition-colors hover:bg-mist hover:text-ink"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4 text-ink/40" />
                    </button>
                    {flyoutItem === item.label ? (
                      <div className="absolute left-full top-0 ml-2 w-72 rounded-[1.5rem] border border-ink/10 bg-white p-3 shadow-2xl shadow-ink/10">
                        <div className="px-2 pb-2 text-xs uppercase tracking-[0.22em] text-iris">
                          {item.label}
                        </div>
                        <div className="grid gap-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => { setFlyoutItem(null); onClose() }}
                              className="rounded-2xl px-4 py-3 text-sm text-ink/80 transition-colors hover:bg-mist hover:text-ink"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href!}
                    onClick={onClose}
                    className="rounded-2xl px-4 py-3 text-sm text-ink/80 transition-colors hover:bg-mist hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ),
              )}
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
  subGroup,
  onNavigate,
}: {
  title: string
  items: Array<{ label: string; href: string }>
  subGroup?: { title: string; items: Array<{ label: string; href: string }> }
  onNavigate: () => void
}) {
  return (
    <div className="rounded-[1.25rem] border border-ink/8 bg-white/70 p-3">
      <div className="px-2 pb-2 text-xs uppercase tracking-[0.22em] text-iris">{title}</div>
      <div className="grid gap-1">
        {subGroup ? (
          <div className="rounded-2xl border border-ink/6 bg-mist/40 px-3 py-2 mb-1">
            <div className="px-1 pb-1.5 text-xs uppercase tracking-[0.18em] text-iris/70">{subGroup.title}</div>
            <div className="grid gap-0.5">
              {subGroup.items.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={onNavigate}
                  className="rounded-xl px-3 py-2 text-sm text-ink/80 hover:bg-white"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
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
