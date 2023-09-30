import Image from 'next/image';
import React from 'react';

type Display = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>; // Assuming you're using React state hooks
};

const Player = ({ showPopup, setShowPopup }: Display) => {
  if (showPopup === undefined) {
    showPopup = true;
  }
  if (!showPopup) {
    return null;
  }

  const handleCloseClick = () => {
    setShowPopup(false); // Update the state to close the pop-up
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className=" bg-jse-neutral-900 p-8 flex flex-col items-end justify-center rounded shadow-lg">
        {/* player  */}
        <div>
        <div>
          <Image src="/gallery.png" alt="podcast-album-art" className=" object-cover object-center rounded-lg" width={300} height={300} style={{objectFit: "cover"}}	 />
        </div>
        <div>
          
        </div>

        </div>
        {/* player end */}
        {/* close button */}
        <button
          className=" bg-jse-primary-500 text-white font-base rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400"
          onClick={handleCloseClick} // Use the click event handler function
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Player;
