import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ContactLink } from '@/components/ContactLink'
import { company, industries, services } from '@/data/site'

export function Footer() {
  return (
    <footer className="relative border-t border-ink/5 px-6 md:px-10 pt-20 pb-10 overflow-hidden bg-gradient-to-b from-paper to-mist/60">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="w-full whitespace-nowrap font-display leading-none tracking-[-0.055em] text-black select-none"
          style={{ fontSize: 'clamp(40px, 7.2vw, 120px)' }}
        >
          {company.name.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()}
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-10 text-sm">
          <div className="max-w-sm text-muted">
            Complete business systems powered by ERPNext, Frappe, mobile apps, and modern web. One partner from architecture to go-live.
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-iris mb-4">
              Services
            </div>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-ink/80 hover:text-iris transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-iris mb-4">
              Company
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/work" className="text-ink/80 hover:text-iris transition-colors">Case Studies</Link>
              </li>
              <li><Link to="/process" className="text-ink/80 hover:text-iris transition-colors">How We Work</Link></li>
              <li><Link to="/resources" className="text-ink/80 hover:text-iris transition-colors">Resources</Link></li>
              <li><Link to="/about" className="text-ink/80 hover:text-iris transition-colors">About</Link></li>
              <li>
                <ContactLink source={{ type: 'Footer', cta: 'Contact' }} className="text-ink/80 hover:text-iris transition-colors">
                  Contact
                </ContactLink>
              </li>
              <li className="pt-3 text-xs uppercase tracking-[0.25em] text-iris">Industries</li>
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link to={`/industries/${industry.slug}`} className="text-ink/80 hover:text-iris transition-colors">
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 text-xs text-muted border-t border-ink/10 pt-8">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${company.email}`} className="hover:text-iris transition-colors">{company.email}</a>
            <span>{company.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
