import HeadingTitle from '../common/HeadingTitle'
import EventCard from './EventCard'
import Link from 'next/link'

export default function UpcomingEvents() {
  return (
    <>
      {/* Blog List Section: In Grid */}
      <>
        <div className='space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 my-10'>
          <HeadingTitle title='Upcoming Events' />
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8'>
            <EventCard imglink="/lib/images/chownki_2024.jpg" heading="दूसरी भव्य वार्षिक चौंकी - Second Grand Annual Chownki" date="Jan 20 21, 2024" desc="Celebrating the birth anniversary of Smt. Kailashi Jolly Jhanji Ji, Join us on the 20th and 21st of January, 2024 in the second glorious annual Balaji and Khatushyam Ji ki Chownki. Sobha Yatra starts on 20th January 2023 at 2 PM and will move through New Lakshmipura, Hoshiarpur Road. The Balaji and Khatushaym Ji ki Chownki starts on 21st January 2024 at 6 PM.  Join us to chant the name of God along with Kumar Gourav."/>
            <EventCard imglink="/lib/images/bdc_17-12-2023.jpg" heading="5th Mega Medical Camp & Blood Donation Camp" date="Dec 17, 2023" desc="This event features chest and bone specialists. JSE is also offering free cataract surgeries for the needy. General check-ups and free tests for BP, Sugar, Neuropathy, BMI, and ECG are also available."/>
            <EventCard imglink="/lib/images/plantation1.avif" heading="Plantation Drive - Planting 1 lakh trees" date="To Be Decided" desc="Join us in planting 100k trees to create a greener, healthier planet! Together, combat deforestation, reduce emissions, restore habitats. Let's sow seeds for a sustainable future!"/>
          </div>
          {/* END Blog Posts */}
          {/* Load More Button */}
          <div className="flex justify-center">
            <Link href="/events">
            <button
              type="button"
              className="inline-flex justify-around items-center space-x-2 text-sm border-2 font-bold rounded-lg px-6 py-3 leading-6 border-jse-primary-500 bg-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-jse-primary-500 active:bg-jse-primary-400 active:border-jse-primary-300 hover-white"
            >
              Load more
            </button>
            </Link>
          </div>
        </div>
      </>
      {/* END Blog List Section: In Grid */}
    </>
  )
}
