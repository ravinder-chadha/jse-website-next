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
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
          {/* END Blog Posts */}
        </div>
      </>
      {/* END Blog List Section: In Grid */}
    </>
  )
}
