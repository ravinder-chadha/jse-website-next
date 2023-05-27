import React from 'react'

interface HeadingTitleProps {
  title: string
  h3?: boolean
}

const HeadingTitle = ({ title, h3 }: HeadingTitleProps) => {
  if (!h3) {
    return (
      <h2 className='font-serif text-3xl md:text-4xl font-semibold mb-4'>
        {title}
        <span className='block w-40 mt-2 rounded-full h-0.5 bg-jse-primary-500' />
      </h2>
    )
  } else {
    return (
      <h3 className='font-serif text-2xl md:text-3xl font-semibold mb-4'>
        {title}
        <span className='block w-40 mt-2 rounded-full h-0.5 bg-jse-primary-500' />
      </h3>
    )
  }
}

export default HeadingTitle
