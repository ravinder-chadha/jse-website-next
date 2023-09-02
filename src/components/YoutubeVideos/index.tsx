import HeadingTitle from '../common/HeadingTitle'

export default function YoutubeVideos() {
  return (
    <>
      {/* Hero Section: Image Cover With Header Actions Dark */}
      <div
        className='bg-cover bg-top my-20 h-screen max-h-[1200px]'
        style={{
          backgroundImage: 'url("/hero.jpg")',
        }}>
        <div className='bg-gradient-to-l from-black via-black/80 to-transparent h-full grid grid-cols- md:grid-cols-3 py-10 px-10'>
          {/* Hero Content */}
          <div></div>
          <div className='col-span-2 flex flex-col justify-stretch'>
            <HeadingTitle
              className='text-white h-fit'
              title='Latest from Youtube'
            />
            <div className='h-full grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div>
                <iframe
                  width='100%'
                  height='100%'
                  className='rounded-xl'
                  src='https://www.youtube.com/embed/7_swbAyBgLs'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
              <div>
                <iframe
                  width='100%'
                  height='100%'
                  className='rounded-xl'
                  src='https://www.youtube.com/embed/7_swbAyBgLs'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
              <div>
                <iframe
                  width='100%'
                  height='100%'
                  className='rounded-xl'
                  src='https://www.youtube.com/embed/7_swbAyBgLs'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
              <div>
                <iframe
                  width='100%'
                  height='100%'
                  className='rounded-xl'
                  src='https://www.youtube.com/embed/7_swbAyBgLs'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
          {/* END Hero Content */}
        </div>
      </div>
      {/* END Hero Section: Image Cover With Header Actions Dark */}
    </>
  )
}
