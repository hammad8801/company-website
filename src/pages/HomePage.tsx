import { Marquee } from '@/components/Marquee'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { CTA } from '@/sections/CTA'
import { Contact } from '@/sections/Contact'
import { Industries } from '@/sections/Industries'
import { Portfolio } from '@/sections/Portfolio'
import { Process } from '@/sections/Process'
import { Products } from '@/sections/Products'
import { Services } from '@/sections/Services'
import { WhyUs } from '@/sections/WhyUs'

export function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Products />
      <WhyUs />
      <Process />
      <Industries />
      <Portfolio />
      <CTA />
      <Contact />
    </main>
  )
}

