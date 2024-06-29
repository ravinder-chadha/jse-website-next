import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Display = {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>; // Assuming you're using React state hooks
  audioRef: React.RefObject<HTMLAudioElement>;
  audioLink: string;
};

const Player = ({ showPopup, setShowPopup, audioRef, audioLink }: Display) => {
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
    <div className="fixed inset-0 mt-10 md:mx-0 mx-2  shadow-3xl flex items-center justify-center z-50">
      <div className="fixed inset-1 bg-black opacity-50 z-2"></div>
      <div className=" bg-jse-neutral-900 p-8 flex flex-col items-end justify-center rounded shadow-lg relative">
        {/* player  */}
        <div>
          <div>
            <Image
              src="/gallery.png"
              alt="podcast-album-art"
              className=" object-cover object-center rounded-lg w-72 h-72"
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* <audio
            controls
            id="audio"
            className="w-full my-6 max-w-md mx-auto bg-gray-200 p-4 rounded-lg shadow-md"
          > */}
          {/* <source src="/src.mp3" type="audio/mpeg" /> */}
          {/* </audio> */}
          <audio
            controls
            id="audio"
            className="w-full my-6 max-w-md mx-auto bg-gray-200 p-4 rounded-lg shadow-md"
            ref={audioRef} src={audioLink} />

        </div>
        {/* player end */}

        {/* Close button below the player */}
        <button
          className="bg-jse-primary-500 text-white font-base rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400 mt-4"
          onClick={handleCloseClick}
        >
          Close
        </button>
      </div>
    </div >
  );
};

export default Player;
