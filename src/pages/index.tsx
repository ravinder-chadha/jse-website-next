import About from '@/components/About'
import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import UpcomingEvents from '@/components/UpcomingEvents'
import Footer from '@/components/Footer'
import YoutubeVideos from '@/components/YoutubeVideos'
import DonateForLife from '@/components/DonateForLife'
import WhatWeDo from '@/components/WhatWeDo'
import Community from '@/components/Community'
import Header from '@/components/Header'
import MaskImage from '@/components/common/MaskImage'
export default function Home() {
  return (
    <main className='grid'>
      <Header />
      <Hero />
      <CTA />
      <About />
      <UpcomingEvents />
      <YoutubeVideos />
      <DonateForLife />
      <WhatWeDo />
      <Community />
      <Footer />
    </main>
  )
}
