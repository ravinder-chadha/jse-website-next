import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface Props {
  imglink: string
  heading: string
  date : string
  desc : string
}

const EventCard = ( {imglink = "", heading, date, desc}: Props ) => {
  return (
    <div className='w-full flex flex-col items-center bg-white rounded-lg ring-1 ring-jse-neutral-300 overflow-hidden shadow-sm'>
      <Link href='#' className='block relative group w-full'>
        <div className='flex items-center justify-center absolute inset-0 bg-jse-primary-400 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100'>
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
        <Image src={imglink} alt='Featured Image of blog post' className='w-full h-64 object-fill' width={100} height={100}></Image>
      </Link>
      <div className='p-5 lg:p-6'>
        <div className='mb-3'>
          <div className='flex items-center justify-between w-full text-gray-600 text-sm font-medium mb-3'>
            <p className='font-bold text-jse-primary-600'>{date}</p>
            <p>Jalandhar City</p>
          </div>
        </div>
        <h4 className='font-bold text-lg sm:text-xl mb-2'>
          <Link
            href='#'
            className='leading-7 text-gray-800 hover:text-gray-600 line-clamp-2'>
            {heading}
          </Link>
        </h4>

        <p className='prose prose-indigo prose-sm line-clamp-4'>
          {desc}
        </p>
        <button
          type='button'
          className='inline-flex w-full mt-4 justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-jse-primary-500 bg-jse-primary-500 text-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400 active:border-jse-primary-300'>
          Register Now
        </button>
      </div>
    </div>
  )
}

export default EventCard
