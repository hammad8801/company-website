import { useLenis } from '@/hooks/useLenis'
import { Navbar } from '@/components/Navbar'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Marquee } from '@/components/Marquee'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'
import { WhyUs } from '@/sections/WhyUs'
import { Process } from '@/sections/Process'
import { Industries } from '@/sections/Industries'
import { Portfolio } from '@/sections/Portfolio'
import { CTA } from '@/sections/CTA'
import { Contact } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'

function App() {
  useLenis()

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Industries />
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
