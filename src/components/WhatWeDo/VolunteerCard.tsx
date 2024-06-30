import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Props {
  bgImgLink: string;
  heading: string;
  subheading?: string;
}

const VolunteerCard = ({ bgImgLink, heading, subheading }: Props) => {
  if (!subheading) {
    return (
      <div className="relative flex flex-col w-full h-40 rounded-lg shadow-sm border border-gray-200 m-2">
        <Image src={bgImgLink} alt="volunteer-card" className="w-full  h-full object-cover object-top rounded-lg" width={1000} height={1000}></Image>
        <div className="absolute inset-0 bg-gradient-to-r from-jse-primary-500 to-transparent opacity-75 rounded-lg"></div>
        <h3 className="absolute flex items-center justify-center h-full text-2xl w-1/2 p-5 font-bold text-white z-1">
          {heading}
        </h3>
        <div className="absolute flex items-end z-1 h-full w-1/3">
          <div className="h-10 flex flex-row items-center bg-jse-neutral-900 w-full rounded-lg justify-around transition-opacity duration-300 hover:opacity-75">
            <Link
              href={bgImgLink || "#"}
              className="flex items-center justify-center h-full text-sm text-white font-bold pl-4"
            >
              Volunteer
            </Link>
            <svg
              className="text-white w-3 h-3 mr-4 transform transition-transform duration-500 hover:rotate-3 hover:scale-150"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3H2.5C2.10218 3 1.72064 3.15804 1.43934 3.43934C1.15804 3.72064 1 4.10218 1 4.5V11.5C1 11.8978 1.15804 12.2794 1.43934 12.5607C1.72064 12.842 2.10218 13 2.5 13H9.5C9.89782 13 10.2794 12.842 10.5607 12.5607C10.842 12.2794 11 11.8978 11 11.5V6M4 10L13 1M13 1H9.5M13 1V4.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="flex flex-col">
        <div className="flex relative group  flex-col h-52 overflow-hidden rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-center absolute inset-0 bg-jse-primary-400 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <Image src={bgImgLink} alt="volunteer-card" className="w-full h-full object-cover object-center rounded-lg" width={1000} height={1000} />
        </div>

        <h3 className="md:text-2xl text-xl md:my-2 mt-1 font-bold">
          {heading}
        </h3>
        <p className="md:my-2 mb-2 line-clamp-2 text-ellipsis">{subheading}</p>
        <div className="md:w-1/4 w-3/4">
          <div className="h-10 flex flex-row items-center bg-jse-neutral-900 md:w-full w-fit md:pl-0 pl-3 md:gap-0 gap-2 rounded-lg justify-around transition-opacity duration-300 hover:opacity-75">
            <Link
              href={bgImgLink || "#"}
              className="flex items-center justify-center h-full  md:text-sm text-xs  text-white font-bold md:pl-4 pl-1"
            >
              Learn More
            </Link>
            <svg
              className="text-white w-3 h-3 mr-4 transform transition-transform duration-500 hover:rotate-3 hover:scale-150"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3H2.5C2.10218 3 1.72064 3.15804 1.43934 3.43934C1.15804 3.72064 1 4.10218 1 4.5V11.5C1 11.8978 1.15804 12.2794 1.43934 12.5607C1.72064 12.842 2.10218 13 2.5 13H9.5C9.89782 13 10.2794 12.842 10.5607 12.5607C10.842 12.2794 11 11.8978 11 11.5V6M4 10L13 1M13 1H9.5M13 1V4.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
};

export default VolunteerCard;
