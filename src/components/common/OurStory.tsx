import React from 'react'

type Props = {
  date?: string
  title?: string
  content?: string
  className?: string
}

function OurStory({}: Props) {
  return (
    <div className='border-jse-primary-300 border-2 rounded-lg p-4 flex flex-col justify-center w-2/3 mt-12 h-36'>
      <div className='text-lg font-semibold'>Our Story</div>
      <div className='text-sm'>Lorem ipsum dolor sit amet consectetur. Adipiscing etiam vitae iaculis ut. Tincidunt tellus sit sed suspendisse dolor ultricies quam sapien. Massa magna leo commodo nibh cras non ultrices sed dolor.
      </div>
    </div>
  )
}

export default OurStory;