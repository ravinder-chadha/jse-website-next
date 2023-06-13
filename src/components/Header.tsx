import React, { useEffect } from 'react';

const Header: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('page-header');
      const scrollPosition = window.scrollY || window.pageYOffset;
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      const transitionThreshold = 0.9 * viewHeight; // Threshold for the transition effect

      if (header) {
        if (scrollPosition >= transitionThreshold) {
          const opacity = (scrollPosition - transitionThreshold) / (viewHeight - transitionThreshold);
          header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
          header.style.transition = 'background-color 0.05s ease-in-out'; // Adjust the duration and easing as desired
        } else {
          header.style.backgroundColor = 'transparent';
          header.style.transition = 'background-color 0.05s ease-in-out'; // Adjust the duration and easing as desired
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 bg-gradient-to-b from-white to-transparent z-100">
      <header id="page-header" className="flex flex-none items-center py-4">
      <div className='flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4'>
      <div>
        <a href='#' className='hover:opacity-75'>
          <img
            className='h-20'
            src='/logo-black.png'
            alt='Company logo'
          />
        </a>
      </div>
      <div className='flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10'>
        <nav className='space-x-4 md:space-x-8 text-base'>
          <a
            href='#'
            className='text-jse-neutral-900 hover:text-jse-neutral-500'>
            <span>About</span>
          </a>
          <a
            href='#'
            className='text-jse-neutral-900 hover:text-jse-neutral-500'>
            <span>Our Attempts</span>
          </a>
          <a
            href='#'
            className='text-jse-neutral-900 hover:text-jse-neutral-500'>
            <span>Upcoming Events</span>
          </a>

          <a
            href='#'
            className='text-jse-neutral-900 hover:text-jse-neutral-500'>
            <span>Community</span>
          </a>
        </nav>
      </div>
      <div className='flex items-center justify-center space-x-2'>
        <button
          type='button'
          className='inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-jse-primary-500 bg-jse-primary-500 text-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400 active:border-jse-primary-300'>
          Donate Now
        </button>
      </div>
    </div>
      </header>
    </div>
  );
};

export default Header;