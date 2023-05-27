import ImageCard from './ImageCard'

export default function DonateForLife() {
  return (
    <>
      {/* Features Section: Vertical Cards */}
      <div className='bg-white overflow-hidden'>
        <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          <div className='flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20'>
            {/* Heading */}
            <div className='lg:w-5/12 xl:w-5/12 md:py-12 space-y-10'>
              <div>
                <div className='text-sm uppercase font-bold tracking-wider mb-1 text-jse-primary-500'>
                  Our main goal
                </div>
                <h2 className='font-serif text-3xl md:text-4xl font-extrabold mb-4'>
                  Donate for Life : Save a Life, Donate Blood, Donate Now
                </h2>
                <h3 className=' md:leading-relaxed md:text-lg text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at velit maximus, molestie est a, tempor magna.
                </h3>
              </div>
            </div>
            {/* END Heading */}

            {/* Features in Cards */}
            <div className='lg:w-7/12 xl:w-7/12 flex-none relative'>
              <div className='pattern-dots-xl opacity-10 absolute top-0 left-0 w-48 h-64 md:mt-20 transform -translate-x-10 -translate-y-10' />
              <div className='pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-64 md:mb-20 transform translate-x-10 translate-y-10' />

              <div className='relative flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
                <div className='md:w-1/2 md:mt-24 space-y-6'>
                  <ImageCard />
                  <ImageCard />
                </div>
                <div className='md:w-1/2 space-y-6'>
                  <ImageCard />
                  <ImageCard />
                </div>
              </div>
            </div>
            {/* END Features in Cards */}
          </div>
        </div>
      </div>
      {/* END Features Section: Vertical Cards */}
    </>
  )
}
