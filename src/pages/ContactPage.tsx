import { Contact } from '@/sections/Contact'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageHero } from '@/components/PageHero'

export function ContactPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <PageHero
        badge="Contact"
        title="Get a free ERP readiness assessment"
        description="Tell us about your ERPNext, Frappe, mobile, or automation project. We reply within 24 hours, with substance instead of a sales script."
      />
      <Contact />
    </main>
  )
}

