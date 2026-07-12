import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from '@/components/ScrollToTop'
import { SiteLayout } from '@/components/SiteLayout'
import { useLenis } from '@/hooks/useLenis'
import { AboutPage } from '@/pages/AboutPage'
import { CaseStudyPage } from '@/pages/CaseStudyPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { IndustryDetailPage } from '@/pages/IndustryDetailPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProcessPage } from '@/pages/ProcessPage'
import { ProductDetailPage } from '@/pages/ProductDetailPage'
import { ProductsPage } from '@/pages/ProductsPage'
import { ResourcesPage } from '@/pages/ResourcesPage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'
import { WorkPage } from '@/pages/WorkPage'

function App() {
  useLenis()

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
