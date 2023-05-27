import About from '@/components/About'
import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import UpcomingEvents from '@/components/UpcomingEvents'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <CTA />
      <About />
      <UpcomingEvents />
      <Footer />
    </main>
  )
}
