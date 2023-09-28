import Image from 'next/image';
import { useState } from 'react';
import Player from './player';
import UnderProgressPopup from '../common/UnderProgessPopup';

const Podcast_card = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [showPopup, setShowPopup] = useState(false);

  function setplayerDisplay() {
    setShowPopup(true);
  }
  console.log(showPopup);


  return (
    <>
    <div
      className={`bg-jse-neutral-900 w-56  overflow-hidden rounded-2xl p-7 flex flex-col justify-around gap-8 items-center cursor-pointer md:my-8 my-4  ${isHovered ? 'bg-jse-primary-500' : ''
        }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={setplayerDisplay}
    >

      <div className='w-88 rounded-lg h-88 overflow-hidden'>
        {/* not sure with the object cover property not working */}
        <Image src="/gallery.png" alt="volunteer-card" className=" object-cover object-center rounded-lg" width={300} height={300} style={{objectFit: "cover"}}	 />
      </div>

      <div className="flex flex-row justify-between w-full items-center text-jse-neutral-300 ">
        <div className='flex flex-col'>
          <p className="text-base tx font-bold">The way of water</p>
          <p className="text-xs font-light">29 mins</p>
        </div>
        <svg
          className={`w-10 h-10 mx-2 ${isHovered ? 'animate-bounce' : ''}`}
          viewBox="0 0 60 61"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30.0918" r="30" fill="#D9D9D9" />
          <path
            d="M45 26.6277C47.6667 28.1673 47.6667 32.0163 45 33.5559L25.5 44.8142C22.8333 46.3538 19.5 44.4293 19.5 41.3501L19.5 18.8335C19.5 15.7543 22.8333 13.8298 25.5 15.3694L45 26.6277Z"
            fill={isHovered ? '#d00202' : '#040F0F'}
          />
        </svg>
      </div>
    </div>

    <Player showPopup={showPopup} setShowPopup={setShowPopup} />

    </>
  );
};

export default Podcast_card;
