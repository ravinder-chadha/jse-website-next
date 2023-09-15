import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Props {
  Title?: string;
  SubTitle?: string;
  Description?: string;
  ImageSrc?: string;
};

const Attempt = ({ Title, SubTitle, Description, ImageSrc = "" }: Props) => {
  return (
    <div>
      <div className="relative h-96 w-full">
        <Image src={ImageSrc} alt="Attemp Image" className="rounded-xl object-cover h-full w-full" width={100} height={100}></Image>
        <div className="absolute inset-0 bg-gradient-to-r from-jse-primary-500 via-jse-primary-400 to-transparent opacity-75 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-row justify-between items-center w-full h-full px-4">
          <svg
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame">
              <circle cx="17" cy="16.5" r="15.5" fill="white" />
              <path
                id="Vector"
                d="M20.999 26.5812L10.999 16.5812L20.999 6.58118"
                stroke="#040F0F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          <svg
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame">
              <circle cx="16" cy="16.5" r="15.5" fill="white" />
              <path
                id="Vector"
                d="M10.999 6.58118L20.999 16.5812L10.999 26.5812"
                stroke="#040F0F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-2 md:gap-10 gap-4 my-5">
        <div>
          <h3 className="font-serif text-[28px] leading-tight text-left font-semibold">
            {Title}
          </h3>
          <p className="my-2 text-base text-md text-ellipsis text-jse-neutral-300">
            {SubTitle}
          </p>
          
          <div className="md:w-1/4 w-4/5 md:mt-10 mt-5">
          <Link
                href={"/single-attempts/" + Title}
                className="flex items-center justify-center h-full  text-sm text-white font-bold"
              >
            <div className="h-10 flex md:pl-0 pl-1  flex-row items-center bg-jse-neutral-900 w-full rounded-lg justify-around transition-opacity duration-300 hover:opacity-75">
                Load More
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
            </Link>
          </div>
        </div>
        <p className="md:text-base text-base">{Description}</p>
      </div>
    </div>
  );
};

export default Attempt;
