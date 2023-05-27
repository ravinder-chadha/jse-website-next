import React from 'react'

const ImageCard = () => {
  return (
    <div
      className='relative group rounded-lg bg-blue-900 overflow-hidden'
      tabIndex={0}>
      <img
        className='transform transition duration-300 ease-out group-hover:scale-125 group-hover:rotate-6'
        src='https://cdn.tailkit.com/media/placeholders/photo-73F4pKoUkM0-800x600.jpg'
        alt='Image 1'
      />
      {/* Item Overlay */}
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-jse-primary-600 bg-opacity-80 transition duration-300 ease-out opacity-0 group-hover:opacity-100'>
        <div className='text-center'>
          <h4 className='font-semibold text-lg text-white'>Main Title</h4>
          <h5 className='font-medium text-white text-opacity-80 mb-5'>
            Image Description
          </h5>
        </div>
      </div>
      {/* END Item Overlay */}
    </div>
  )
}

export default ImageCard
