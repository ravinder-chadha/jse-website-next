import Image from 'next/image';
import { useState, useRef } from 'react';
import Player from './player';

interface Props {
  heading: string;
  id: string;
  audioLink: string;
}

const Podcast_card = ({ heading, id, audioLink }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const setPlayerDisplay = () => {
    setShowPopup(true);
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const truncateHeading = (text: string, words: number) => {
    const wordArray = text.split(' ');
    const truncatedText = wordArray.slice(0, words).join(' ');
    return wordArray.length > words ? `${truncatedText}...` : truncatedText;
  };

  return (
    <>
      <div
        className={`bg-jse-neutral-900 md:w-64 w-full h-72 overflow-hidden rounded-2xl p-7 flex flex-col justify-around gap-8 items-center cursor-pointer md:my-8 my-4  ${isHovered ? 'bg-jse-primary-500' : ''
          }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onClick={setPlayerDisplay}
      >
        <div className='w-88 rounded-lg h-88 overflow-hidden'>
          <Image
            src="/logo-white.png"
            alt="volunteer-card"
            className=" object-fill rounded-lg"
            width={300}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="flex flex-row justify-between w-full items-center text-jse-neutral-300 ">
          <div className='flex flex-col'>
            <h1 className="text-base font-semibold">{ truncateHeading(heading, 3)}</h1>
            <p className="text-xs font-light">29 mins</p>
          </div>
          <svg
            className={`w-12 h-12 ${isHovered ? 'animate-bounce' : ''}`}
            viewBox="0 0 60 61"
            xmlns="http://www.w3.org/2000/svg"
            onClick={isHovered ? playAudio : pauseAudio}
          >
            <circle cx="30" cy="30.0918" r="30" fill="#D9D9D9" />
            <path
              d="M45 26.6277C47.6667 28.1673 47.6667 32.0163 45 33.5559L25.5 44.8142C22.8333 46.3538 19.5 44.4293 19.5 41.3501L19.5 18.8335C19.5 15.7543 22.8333 13.8298 25.5 15.3694L45 26.6277Z"
              fill={isHovered ? '#d00202' : '#040F0F'}
            />
          </svg>
        </div>
      </div>

      <Player audioLink={audioLink} audioRef={audioRef} showPopup={showPopup} setShowPopup={setShowPopup} />

    </>
  );
};

export default Podcast_card;
