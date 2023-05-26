export default function CTA() {
  return (
    <>
      {/* CTA Section: Featured Image Alternate */}
      <div className='bg-white overflow-hidden'>
        <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          <div className='flex flex-col md:flex-row md:items-center space-y-16 md:space-y-0 md:space-x-28'>
            {/* Image */}
            <div className='relative'>
              <img
                src='https://cdn.tailkit.com/media/placeholders/photo-C6T6vr1sQI0-1200x900.jpg'
                alt='Hero Image'
                className='relative rounded-lg mx-auto shadow-lg'
              />
            </div>
            {/* END Image */}
            <div className='space-y-10'>
              {/* Heading */}
              <div>
                <div className='text-sm uppercase font-bold tracking-wider mb-1 text-blue-700'>
                  9,500+ Customers
                </div>
                <h2 className='text-3xl md:text-4xl font-extrabold mb-4'>
                  Start Your Business
                </h2>
                <h3 className='text-lg md:text-xl md:leading-relaxed font-medium text-gray-600'>
                  Get your own custom dashboard and start building amazing
                  services. Inspiring results from day one without the pain.
                </h3>
              </div>
              {/* END Heading */}

              {/* Action */}
              <div className='flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-2'>
                <a
                  href='#'
                  className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700'>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    className='opacity-50 hi-solid hi-check inline-block w-5 h-5'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Get Started</span>
                </a>
                <a
                  href='#'
                  className='inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200'>
                  <span>Learn More</span>
                </a>
              </div>
              {/* END Action */}
            </div>
          </div>
        </div>
      </div>
      {/* END CTA Section: Featured Image Alternate */}
    </>
  )
}
