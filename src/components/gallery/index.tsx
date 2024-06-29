import Image from "next/image";
import HeadingTitle from "../common/HeadingTitle";
import { useEffect, useState } from "react";


export default function Gallery() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Function to update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Features Section: grid  */}
      <div className="bg-white overflow-hidden flex items-center justify-center md:px-24 py-8 px-4 md:my-10 my-24">
        {windowWidth >= 640 ? ( // Use 'gallery.png' for larger screens (640px or wider)
          <Image src="/gallery.png" className="object-cover" width={1399} height={800} alt="Gallery-wall" />
        ) : (
          // Use 'gallery-mobile.png' for smaller screens
          <Image src="/gallery-mobile.png" className="object-cover" width={1399} height={500} alt="Gallery-wall" />
        )}
        <h2 className="font-serif absolute -mt-24 md:mt-0 text-3xl text-center md:text-4xl  font-extrabold mb-4">
          Be a part of the <br /> <span className="text-jse-primary-500">10000+</span> Donors clan
        </h2>
      </div>
      {/* END Features Section: grid  */}
    </>
  )
}