import HeadingTitle from '../common/HeadingTitle'
import EventCard from './EventCard'

export default function UpcomingEvents() {
  return (
    <>
      {/* Blog List Section: In Grid */}
      <>
        <div className='space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 my-10'>
          <HeadingTitle title='Upcoming Events' />
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8'>
            <EventCard imglink="/lib/images/plantation1.jpg" heading="Plantation Drive - Planting 1 lakh trees" date="To Be Decided"/>
            <EventCard imglink="/lib/images/BloodCamp2.jpg" heading="Blood and Eye Checkup Camp - Free Healthcare for needy" date="Dec 12, 2023"/>
            <EventCard imglink="/lib/images/Langar4.jpg" heading="Langar - A step towards free food for everyone" date="To Be Decided"/>
          </div>
          {/* END Blog Posts */}
        </div>
      </>
      {/* END Blog List Section: In Grid */}
    </>
  )
}
