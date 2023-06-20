import React from 'react'
interface HeadingTitleProps {
  title: string
  h3?: boolean
  className?: string
  subtitle?: string
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const HeadingTitle = ({ title, h3, className, subtitle }: HeadingTitleProps) => {
  if (!h3 && !subtitle) {
    return (
      <h2
        className={classNames(
          'font-serif text-3xl md:text-4xl font-semibold mb-4',
          className ? className : ''
        )}>
        {title}
        <span className={classNames('block w-40 mt-2 rounded-full h-0.5 bg-jse-primary-500', className ? className : '')} />
      </h2>
    )
  }
  else if (!h3 && subtitle) {
    return (
      <h2
        className={classNames(
          'font-serif text-3xl md:text-4xl mb-4',
          className ? className : 'font-semibold'
        )}>
        {title}
        <p className={classNames("text-base text-jse-neutral-300 pt-2 font-normal", className ? className : '')}>{subtitle}</p>
        <span className={classNames('block w-40 mt-2 rounded-full h-0.5 bg-jse-primary-500', className ? className : '')} />
      </h2>
    )
  }
  else if (h3 && !subtitle) {
    return (
      <h3
        className={classNames(
          'font-serif text-2xl md:text-3xl font-semibold mb-4',
          className ? className : ''
        )}>
        {title}
        <span className={classNames('block w-40 mt-2 rounded-full h-0.5 bg-jse-primary-500', className ? className : '')} />
      </h3>
    )
  }
   else {
    return (
      <h3
        className={classNames(
          'font-serif text-2xl md:text-3xl mb-4',
          className ? className : 'font-semibold'
        )}>
        {title}
        <p className={classNames("text-md text-jse-neutral-300 pt-2 font-normal", className ? className : '')}>{subtitle}</p>
        <span className={classNames('block w-40 mt-2 rounded-full h-0.5 bg-jse-primary-500', className ? className : '')} />
      </h3>
    )
  }
}

export default HeadingTitle
