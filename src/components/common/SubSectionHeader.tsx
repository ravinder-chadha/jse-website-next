import React from 'react'
interface HeadingTitleProps {
  title: string
  className?: string
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
// subsection header for community page
const SubSectionHeader = ({ title, className }: HeadingTitleProps) => {
  return(
    <div className={classNames(
      'bg-white-15 rounded-r-lg border-l-2 border-jse-primary-500 py-2 px-4 text-white font-bold text-xl w-fit',
      className ? className : ''
    )}>
      {title}
    </div>
  )
}

export default SubSectionHeader
