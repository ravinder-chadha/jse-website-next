import React from 'react'
interface HeadingTitleProps {
  title: string
  h3?: boolean
  className?: string
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const HeadingTitle = ({ title, h3, className }: HeadingTitleProps) => {
  if (!h3) {
    return (
      <h2
        className={classNames(
          'font-serif text-3xl md:text-4xl font-semibold mb-4',
          className ? className : ''
        )}>
        {title}
        <span className='block w-40 mt-2 rounded-full h-0.5 bg-jse-primary-500' />
      </h2>
    )
  } else {
    return (
      <h3
        className={classNames(
          'font-serif text-2xl md:text-3xl font-semibold mb-4',
          className ? className : ''
        )}>
        {title}
        <span className='block w-40 mt-2 rounded-full h-0.5 bg-jse-primary-500' />
      </h3>
    )
  }
}

export default HeadingTitle
