import { useState } from 'react';

const Podcast = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bg-jse-neutral-900 w-fit rounded-2xl p-4 flex flex-row justify-around items-center cursor-pointer my-8 mx-2 ${
        isHovered ? 'bg-jse-primary-500' : ''
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
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
      <div className="flex flex-col justify-center items-start text-jse-neutral-300 ml-2 mr-10">
        <p className="text-base tx font-bold">The way of water</p>
        <p className="text-xs font-light">29 mins</p>
      </div>
    </div>
  );
};

export default Podcast;
