import React from 'react'

const About = () => {
  return (
    <>
      <section className='max-w-7xl mx-auto grid grid-cols-2 gap-10 my-20'>
        <img
          src='https://cdn.tailkit.com/media/placeholders/photo-C6T6vr1sQI0-1200x900.jpg'
          alt='Hero Image'
          className='rounded-xl relative mx-auto'
        />
        <div className='space-y-10 lg:pr-10'>
          {/* Heading */}
          <div className='max-w-2xl'>
            <h2 className='font-serif text-3xl md:text-4xl font-bold mb-4'>
              What is Jolly Soothing Era?
              <span className='block w-40 mt-2 rounded-full h-1 bg-jse-primary-500' />
            </h2>
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
          <h2 className='font-serif text-3xl md:text-4xl font-bold mb-4'>
            Our Mission
            <span className='block w-40 mt-2 rounded-full h-1 bg-jse-primary-500' />
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            totam, quaerat excepturi perspiciatis illo at sit, officiis atque
            quibusdam tempore reiciendis culpa
          </p>
        </div>
        <div>
          <h2 className='font-serif text-3xl md:text-4xl font-bold mb-4'>
            Our Vision
            <span className='block w-40 mt-2 rounded-full h-1 bg-jse-primary-500' />
          </h2>
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
