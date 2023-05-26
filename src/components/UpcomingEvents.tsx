export default function UpcomingEvents() {
  return (
    <>
      {/* Blog List Section: In Grid */}
      <div className='bg-gray-100'>
        <div className='space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          {/* Heading */}
          <div className='text-center'>
            <h2 className='text-3xl md:text-4xl font-extrabold mb-4'>
              Latest Posts
            </h2>
            <h3 className='text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto'>
              Be sure to{' '}
              <a href='#' className='text-blue-600 hover:text-blue-400'>
                follow us on Twitter
              </a>{' '}
              or{' '}
              <a href='#' className='text-blue-600 hover:text-blue-400'>
                join us
              </a>{' '}
              to stay up to date about any new posts.
            </h3>
          </div>
          {/* END Heading */}

          {/* Blog Posts */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8'>
            <div className='flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-sm'>
              <a href='#' className='block relative group'>
                <div className='flex items-center justify-center absolute inset-0 bg-blue-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100'>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10'>
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <img
                  src='https://cdn.tailkit.com/media/placeholders/photo-73F4pKoUkM0-800x600.jpg'
                  alt='Featured Image of blog post'
                />
              </a>
              <div className='p-5 lg:p-6'>
                <div className='mb-3'>
                  <div className='font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-700 bg-blue-200'>
                    travel
                  </div>
                  <div className='font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-700 bg-blue-200'>
                    adventure
                  </div>
                </div>
                <h4 className='font-bold text-lg sm:text-xl mb-2'>
                  <a
                    href='#'
                    className='leading-7 text-gray-800 hover:text-gray-600'>
                    The 10 best hiking trails in the world you should put in
                    your bucket list
                  </a>
                </h4>
                <p className='text-gray-600 text-sm font-medium mb-3'>
                  March 3, 2021 · 12 min read
                </p>
                <p className='prose prose-indigo prose-sm'>
                  Integer fermentum tincidunt auctor. Vestibulum ullamcorper,
                  odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget
                  dictum leo mi nec lectus.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-sm'>
              <a href='#' className='block relative group'>
                <div className='flex items-center justify-center absolute inset-0 bg-blue-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100'>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10'>
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <img
                  src='https://cdn.tailkit.com/media/placeholders/photo-phIFdC6lA4E-800x600.jpg'
                  alt='Featured Image of blog post'
                />
              </a>
              <div className='p-5 lg:p-6'>
                <div className='mb-3'>
                  <div className='font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-700 bg-blue-200'>
                    travel
                  </div>
                  <div className='font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-700 bg-blue-200'>
                    astronomy
                  </div>
                </div>
                <h4 className='font-bold text-lg sm:text-xl mb-2'>
                  <a
                    href='#'
                    className='leading-7 text-gray-800 hover:text-gray-600'>
                    The 20 best places in the world for star gazing
                  </a>
                </h4>
                <p className='text-gray-600 text-sm font-medium mb-3'>
                  February 23, 2021 · 20 min read
                </p>
                <p className='prose prose-indigo prose-sm'>
                  Integer fermentum tincidunt auctor. Vestibulum ullamcorper,
                  odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget
                  dictum leo mi nec lectus.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-sm'>
              <a href='#' className='block relative group'>
                <div className='flex items-center justify-center absolute inset-0 bg-blue-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100'>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10'>
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <img
                  src='https://cdn.tailkit.com/media/placeholders/photo-T7K4aEPoGGk-800x600.jpg'
                  alt='Featured Image of blog post'
                />
              </a>
              <div className='p-5 lg:p-6'>
                <div className='mb-3'>
                  <div className='font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-700 bg-blue-200'>
                    travel
                  </div>
                  <div className='font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-700 bg-blue-200'>
                    adventure
                  </div>
                </div>
                <h4 className='font-bold text-lg sm:text-xl mb-2'>
                  <a
                    href='#'
                    className='leading-7 text-gray-800 hover:text-gray-600'>
                    How to explore one of the most beautiful lakes in the whole
                    world
                  </a>
                </h4>
                <p className='text-gray-600 text-sm font-medium mb-3'>
                  February 15, 2021 · 5 min read
                </p>
                <p className='prose prose-indigo prose-sm'>
                  Integer fermentum tincidunt auctor. Vestibulum ullamcorper,
                  odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget
                  dictum leo mi nec lectus.
                </p>
              </div>
            </div>
          </div>
          {/* END Blog Posts */}
        </div>
      </div>
      {/* END Blog List Section: In Grid */}
    </>
  )
}
