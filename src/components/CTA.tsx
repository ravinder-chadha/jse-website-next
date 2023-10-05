import Image from "next/image"
import Link from "next/link"
export default function CTA() {
  return (
    <>
      {/* CTA Section: Featured Image Alternate */}
      <div className='bg-jse-primary-100 max-w-6xl mx-6  md:mx-auto overflow-hidden my-20 rounded-xl'>
        <div className='container xl:max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row  md:items-center  space-y-5 md:space-y-0 md:space-x-10'>
            {/* Image */}
            <div className='relative'>
              <Image src='/lib/images/Temple_above_footer.png' alt='Hero Image' className='relative mx-auto md:shadow-lg   shadow-none md:h-72 h-64 w-full md:w-[600px] object-cover object-center' width={600} height={600}></Image>
            </div>
            {/* END Image */}
            <div className='space-y-10 lg:pr-10 '>
              {/* Heading */}
              <div className='max-w-2xl md:p-0 pl-5 pr-2 '>
                <h2 className='font-serif text-3xl md:text-4xl font-bold text-jse-primary-500 mb-4'>
                  Build for a Cause, Support Temple Construction
                </h2>
                <h3 className='md:leading-relaxed text-jse-neutral-900/80'>
                Support the construction of our Hindu temple and foster spiritual unity. Donate now to be a part of this sacred endeavor.
                </h3>
              </div>
              {/* END Heading */}

              {/* Action */}
              <div className='flex flex-col lg:flex-row lg:items-center space-y-4 md:p-0 pl-5 pb-5 lg:space-y-0 lg:space-x-2'>
               <Link href="/donate">
                <button
                  type='button'
                  className='inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-jse-primary-500 bg-jse-primary-500 text-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400 active:border-jse-primary-300'>
                  Donate Now
                </button>
                </Link>
              </div>
              {/* END Action */}
            </div>
          </div>
        </div>
      </div>
      {/* END CTA Section: Featured Image Alternate */}
    </>
  )
}
