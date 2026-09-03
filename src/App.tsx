import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from '@/components/ScrollToTop'
import { SiteLayout } from '@/components/SiteLayout'
import { useLenis } from '@/hooks/useLenis'
import { AboutPage } from '@/pages/AboutPage'
import { CaseStudyPage } from '@/pages/CaseStudyPage'
import { ERPNextImplementationPage } from '@/pages/ERPNextImplementationPage'
import { ERPNextCustomizationPage } from '@/pages/ERPNextCustomizationPage'
import { ERPNextConsultingPage } from '@/pages/ERPNextConsultingPage'
import { ERPNextIntegrationPage } from '@/pages/ERPNextIntegrationPage'
import { FrappeDevelopmentPage } from '@/pages/FrappeDevelopmentPage'
import { MobileAppsPage } from '@/pages/MobileAppsPage'
import { WebDevelopmentPage } from '@/pages/WebDevelopmentPage'
import { AutomationCustomSoftwarePage } from '@/pages/AutomationCustomSoftwarePage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { IndustriesPage } from '@/pages/IndustriesPage'
import { IndustryDetailPage } from '@/pages/IndustryDetailPage'
import { ManufacturingIndustryPage } from '@/pages/ManufacturingIndustryPage'
import { RetailEcommerceIndustryPage } from '@/pages/RetailEcommerceIndustryPage'
import { LogisticsSupplyChainIndustryPage } from '@/pages/LogisticsSupplyChainIndustryPage'
import { HealthcareIndustryPage } from '@/pages/HealthcareIndustryPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProcessPage } from '@/pages/ProcessPage'
import { ProductDetailPage } from '@/pages/ProductDetailPage'
import { ProductsPage } from '@/pages/ProductsPage'
import { ExportPriceCalcPage } from '@/pages/ExportPriceCalcPage'
import { LeasingPage } from '@/pages/LeasingPage'
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
          <Route path="/products/export-price-calculation" element={<ExportPriceCalcPage />} />
          <Route path="/products/leasing" element={<LeasingPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/services/erpnext-implementation" element={<ERPNextImplementationPage />} />
          <Route path="/services/erpnext-consulting" element={<ERPNextConsultingPage />} />
          <Route path="/services/erpnext-customization" element={<ERPNextCustomizationPage />} />
          <Route path="/services/erpnext-integration" element={<ERPNextIntegrationPage />} />
          <Route path="/services/frappe-development" element={<FrappeDevelopmentPage />} />
          <Route path="/services/mobile-apps" element={<MobileAppsPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/automation-custom-software" element={<AutomationCustomSoftwarePage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/manufacturing" element={<ManufacturingIndustryPage />} />
          <Route path="/industries/retail-ecommerce" element={<RetailEcommerceIndustryPage />} />
          <Route path="/industries/retail" element={<RetailEcommerceIndustryPage />} />
          <Route path="/industries/logistics-supply-chain" element={<LogisticsSupplyChainIndustryPage />} />
          <Route path="/industries/logistics" element={<LogisticsSupplyChainIndustryPage />} />
          <Route path="/industries/healthcare" element={<HealthcareIndustryPage />} />
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
