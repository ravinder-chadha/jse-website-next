import React from 'react'
interface HeadingTitleProps {
  source: string
  className?: string
  height?: string
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
// subsection header for community page
const MaskImage = ({ source, className, height }: HeadingTitleProps) => {
  // if height is not passed, default to screen height - header height
  if (!height) {
    height = 'calc(100vh - 152px)'
  }
  return(

    <img className={classNames(
      'base-image',
      className ? className : ''
    )} style={{backgroundImage: `url(${source}),
    linear-gradient(rgb(255, 255, 255), rgba(4, 4, 4))`, height:`${height}`}} />
  )
}

export default MaskImage
