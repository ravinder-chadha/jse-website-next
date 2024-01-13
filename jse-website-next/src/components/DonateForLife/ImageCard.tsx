import React from 'react'
import Image from 'next/image'

interface Props {
  imglink: string
  mainTitle: string
  imgDesc: string
}

const ImageCard = ({imglink, mainTitle, imgDesc} : Props) => {
  return (
    <div
      className='relative group rounded-lg bg-blue-900 overflow-hidden'
      tabIndex={0}>
      <Image src={imglink} alt='Image 1' className='transform h-48 w-full overflow-clip object-cover transition duration-300 ease-out group-hover:scale-125 group-hover:rotate-6' width={500} height={500}></Image>
      {/* Item Overlay */}
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-jse-primary-600 bg-opacity-80 transition duration-300 ease-out opacity-0 group-hover:opacity-100'>
        <div className='text-center'>
          <h4 className='font-semibold text-lg text-white'>{mainTitle}</h4>
          <h5 className='font-medium text-white text-opacity-80 mb-5'>
            {imgDesc}
          </h5>
        </div>
      </div>
      {/* END Item Overlay */}
    </div>
  )
}

export default ImageCard
