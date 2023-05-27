import React from 'react'
import HeadingTitle from './common/HeadingTitle'

const About = () => {
  return (
    <>
      <section className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-20 px-4'>
        <img
          src='https://cdn.tailkit.com/media/placeholders/photo-C6T6vr1sQI0-1200x900.jpg'
          alt='Hero Image'
          className='rounded-xl relative mx-auto'
        />
        <div className='space-y-10 lg:pr-10'>
          {/* Heading */}
          <div className='max-w-2xl'>
            <HeadingTitle title='What is Jolly Soothing Era?' />
            <img src='/logo-black.png' className='h-40' alt='' />
            <h3 className='md:leading-relaxed text-jse-neutral-900/80'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              officia accusantium voluptatem. Rerum sequi ab officiis
              perferendis repudiandae eum. Fugiat, voluptatibus iure minima et
              veniam alias suscipit perspiciatis quae dolorem, totam eos
              deserunt similique possimus consectetur ratione beatae aspernatur
              est, sint neque numquam. Ut impedit beatae omnis suscipit iure,
              culpa.
            </h3>
          </div>
        </div>
        <div>
          <HeadingTitle title='Our Mission' h3 />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            totam, quaerat excepturi perspiciatis illo at sit, officiis atque
            quibusdam tempore reiciendis culpa
          </p>
        </div>
        <div>
          <HeadingTitle title='Our Vision' h3 />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            totam, quaerat excepturi perspiciatis illo at sit, officiis atque
            quibusdam tempore reiciendis culpa
          </p>
        </div>
      </section>
    </>
  )
}

export default About
