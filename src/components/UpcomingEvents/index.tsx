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
            <EventCard imglink="/lib/images/plantation1.avif" heading="Plantation Drive - Planting 1 lakh trees" date="To Be Decided" desc="Join us in planting 100k trees to create a greener, healthier planet! Together, combat deforestation, reduce emissions, restore habitats. Let's sow seeds for a sustainable future!"/>
            <EventCard imglink="/lib/images/BloodCamp2.avif" heading="Blood and Eye Checkup Camp - Free Healthcare for needy" date="Dec 12, 2023" desc="Save lives, donate blood at our camp! Join Jolly's Soothing Era, make an impact, be a hero. Your selfless act can save lives. Together, let's make a difference, spread the gift of life."/>
            <EventCard imglink="/lib/images/Langar4.avif" heading="Langar - A step towards free food for everyone" date="To Be Decided" desc="Experience the joy of giving at our free langar event! Join us, provide nourishing meals, foster unity, and compassion. Together, let's share love and make a difference in our community."/>
          </div>
          {/* END Blog Posts */}
          {/* Load More Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="inline-flex justify-around items-center space-x-2 text-sm border-2 font-bold rounded-lg px-6 py-3 leading-6 border-jse-primary-500 bg-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-jse-primary-500 active:bg-jse-primary-400 active:border-jse-primary-300 hover-white"
            >
              Load more
            </button>
          </div>
        </div>
      </>
      {/* END Blog List Section: In Grid */}
    </>
  )
}
