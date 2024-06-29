import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type HeaderProps = {
  headerTransition?: boolean;
};

const Header = ({ headerTransition }:HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Function to toggle mobile menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  if (headerTransition === undefined){
    headerTransition = true;
  }
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('page-header');
      const scrollPosition = window.scrollY || window.pageYOffset;
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      const transitionThreshold = 0.9 * viewHeight; // Threshold for the transition effect

      if (header && headerTransition) {
        if (scrollPosition >= transitionThreshold) {
          const opacity = (scrollPosition - transitionThreshold) / (viewHeight - transitionThreshold);
          header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
          header.style.transition = 'background-color 0.05s ease-in-out'; // Adjust the duration and easing as desired
        } else {
          header.style.backgroundColor = 'transparent';
          header.style.transition = 'background-color 0.05s ease-in-out'; // Adjust the duration and easing as desired
        }
      }
      else {
        header!.style.backgroundColor = `rgba(255, 255, 255, 1)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerTransition]);

  return (
    <div className="sticky top-0 bg-gradient-to-b from-white to-transparent z-100">
      <header id="page-header" className="flex flex-none items-center py-4">
        <div className='flex  text-center flex-row items-center justify-between  md:space-y-0 container xl:max-w-7xl mx-auto px-4'>
          <div>
            <Link href='/' className='hover:opacity-75'>
              <Image src="/logo-black.png" alt="logo" className='h-20' width={120} height={120}></Image>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10'>
            <nav className='space-x-4 md:space-x-8 text-base'>
              <Link
                href='/about-us'
                className='text-jse-neutral-900 hover:text-jse-neutral-500'>
                <span>About</span>
              </Link>
              <Link
                href='/what-we-do'
                className='text-jse-neutral-900 hover:text-jse-neutral-500'>
                <span>Our Attempts</span>
              </Link>
              <Link
                href='/events'
                className='text-jse-neutral-900 hover:text-jse-neutral-500'>
                <span>Upcoming Events</span>
              </Link>
              <Link
                href='/community'
                className='text-jse-neutral-900 hover:text-jse-neutral-500'>
                <span>Community</span>
              </Link>
            </nav>
          </div>
          <div className='hidden md:visible  md:flex items-center justify-center space-x-2'>
            <Link
              href="/donate"
              className="w-full bg-jse-primary-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400"
            >
              Donate Now
            </Link>
          </div>

          {/* mobile menu toggle */}
          <div className="md:hidden mx-2 ">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-jse-neutral-900  hover:text-jse-neutral-500 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} // Toggle hamburger icon
                />
              </svg>
            </button>
          </div>

          {/* mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden  absolute top-24  right-0 bg-white border-b border-gray-300 shadow-lg">
              <nav className="flex flex-col gap-4 text-base p-4">
                <Link
                  href="/about-us"
                  className="text-jse-neutral-900 hover:text-jse-neutral-500 block">
                  About
                </Link>
                <Link
                  href="/what-we-do"
                  className="text-jse-neutral-900 hover:text-jse-neutral-500 block">
                  Our Attempts
                </Link>
                <Link
                  href="/events"
                  className="text-jse-neutral-900 hover:text-jse-neutral-500 block">
                  Upcoming Events
                </Link>
                <Link
                  href="/community"
                  className="text-jse-neutral-900 hover:text-jse-neutral-500 block">
                  Community
                </Link>
                <Link
                  href="/donate"
                  className="w-full bg-jse-primary-500  text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400"
                >
                  Donate Now
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;