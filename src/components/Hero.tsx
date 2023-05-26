export default function Hero() {
  return (
    <>
      {/* Hero Section: Image Cover With Header Actions Dark */}
      <div
        className='bg-cover bg-top'
        style={{
          backgroundImage: 'url("/hero.jpg")',
        }}>
        <div className='bg-gradient-to-t from-jse-primary-500/90 to-transparent'>
          {/* Header */}
          <header
            id='page-header'
            className='flex flex-none items-center py-10'>
            <div className='flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4'>
              <div>
                <a href='#' className='hover:opacity-75'>
                  <img
                    className='h-20'
                    src='/logo-black.png'
                    alt='Company logo'
                  />
                </a>
              </div>
              <div className='flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10'>
                <nav className='space-x-4 md:space-x-8 text-base'>
                  <a
                    href='#'
                    className='text-jse-neutral-900 hover:text-jse-neutral-500'>
                    <span>About</span>
                  </a>
                  <a
                    href='#'
                    className='text-jse-neutral-900 hover:text-jse-neutral-500'>
                    <span>Our Attempts</span>
                  </a>
                  <a
                    href='#'
                    className='text-jse-neutral-900 hover:text-jse-neutral-500'>
                    <span>Upcoming Events</span>
                  </a>

                  <a
                    href='#'
                    className='text-jse-neutral-900 hover:text-jse-neutral-500'>
                    <span>Community</span>
                  </a>
                </nav>
              </div>
              <div className='flex items-center justify-center space-x-2'>
                <button
                  type='button'
                  className='inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-jse-primary-500 bg-jse-primary-500 text-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400 active:border-jse-primary-300'>
                  Donate Now
                </button>
              </div>
            </div>
          </header>
          {/* END Header */}

          {/* Hero Content */}
          <div className='xl:max-w-7xl mx-auto px-4 pt-80 pb-14'>
            <h1 className='font-serif text-3xl md:text-5xl font-extrabold mb-4 text-white'>
              Work for a Cause, <br />{' '}
              <span className='text-jse-primary-200'>Not an Applause</span>
            </h1>
            <h2 className='md:leading-relaxed font-medium text-white max-w-xl'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </h2>
            <button
              type='button'
              className='mt-6 inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-jse-primary-500 bg-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-jse-primary-500 active:bg-jse-primary-400 active:border-jse-primary-300'>
              Learn More
            </button>
          </div>
          {/* END Hero Content */}
        </div>
      </div>
      {/* END Hero Section: Image Cover With Header Actions Dark */}
    </>
  )
}
