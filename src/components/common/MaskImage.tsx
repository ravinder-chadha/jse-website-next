// import React from 'react'
// interface HeadingTitleProps {
//   source: string
//   className?: string
//   height?: string
// }

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }
// // subsection header for community page
// const MaskImage = ({ source, className, height }: HeadingTitleProps) => {
//   // if height is not passed, default to screen height - header height
//   if (!height) {
//     height = 'calc(100vh - 290px)'
//   }
//   return(

//     <img className={classNames(
//       'base-image',
//       className ? className : ''
//     )} style={{backgroundImage: `url(${source}),
//     linear-gradient(rgb(255, 255, 255), rgba(4, 4, 4))`, height:`${height}`}} />
//   )
// }

// export default MaskImage
// //mobile :100vh - 290px
// //desktop:100vh-152px


import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeadingTitleProps {
  source: string;
  className?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const MaskImage = ({ source, className }: HeadingTitleProps) => {
  const [height, setHeight] = useState('');

  // Function to compute the height based on screen size
  const getHeight = () => {
    if (typeof window !== 'undefined') {

        // web screen
        setHeight('calc(100vh - 152px)');
      
     
    }
  };

  useEffect(() => {
    getHeight(); // Call getHeight when the component mounts to set the initial height
    window.addEventListener('resize', getHeight); // Listen for window resize events
    return () => {
      window.removeEventListener('resize', getHeight); // Remove the event listener on component unmount
    };
  }, []);

  return (  
    <Image className={classNames('base-image', className ? className : '')}
    style={{
      backgroundImage: `url(${source}),
        linear-gradient(rgb(255, 255, 255), rgba(4, 4, 4))`,
      height: height, // Use the dynamically updated height state
    }} alt="" width={100} height={100} src={source}></Image>
  );
};

export default MaskImage;
