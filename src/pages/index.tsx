import About from '@/components/About'
import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import UpcomingEvents from '@/components/UpcomingEvents'
import Footer from '@/components/Footer'
import YoutubeVideos from '@/components/YoutubeVideos'
import DonateForLife from '@/components/DonateForLife'
export default function Home() {
  return (
    <main className='grid'>
      <Hero />
      <CTA />
      <About />
      <UpcomingEvents />
      <YoutubeVideos />
      <DonateForLife />
      <Footer />
    </main>
  )
}
