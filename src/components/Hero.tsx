import MaskImage from "./common/MaskImage";

export default function Hero() {
  return (
    <>
      {/* Hero Section: Image Cover With Header Actions Dark */}
        <MaskImage source="/hero.jpg" className="bg-cover bg-top w-full" height="465px"/>
        <div className='absolute w-full h-full bg-gradient-to-t from-jse-primary-500/90 to-transparent'>

          {/* Hero Content */}
          <div className='xl:max-w-7xl mx-auto px-4 pt-80 pb-14'>
            <h1 className='font-serif text-3xl md:text-5xl font-extrabold mb-4 text-white'>
              Work for a Cause, <br />{' '}
              <span className='text-jse-primary-200'>Not an Applause</span>
            </h1>
            <h2 className='md:leading-relaxed font-medium text-white max-w-xl'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </h2>
            <button
              type='button'
              className='mt-6 inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-jse-primary-500 bg-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-jse-primary-500 active:bg-jse-primary-400 active:border-jse-primary-300'>
              Learn More
            </button>
          </div>
          {/* END Hero Content */}
        </div>
      {/* END Hero Section: Image Cover With Header Actions Dark */}
    </>
  )
}
