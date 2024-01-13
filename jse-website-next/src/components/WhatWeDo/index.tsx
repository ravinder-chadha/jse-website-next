import HeadingTitle from "../common/HeadingTitle";
import VolunteerCard from "./VolunteerCard";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <>
      {/* What We Do Section */}
      <div className="space-y-4 md:space-y-16 container xl:max-w-7xl mx-auto my-10 flex flex-col justify-center">
        {/*  */}
        <HeadingTitle title="What we do..." className="mx-auto text-center" />
        {/* Scrolling Cards */}
        <div className="flex flex-col">
          <Marquee>
            <VolunteerCard bgImgLink="/lib/images/elderly_care.avif" heading="Elderly Care" />
            <VolunteerCard bgImgLink="/lib/images/free_edu.avif" heading="Free Education" />
            <VolunteerCard bgImgLink="/lib/images/foodrs10.avif" heading="Food @ Rs.10" />
            <VolunteerCard bgImgLink="/lib/images/freelegalaid.avif" heading="Free Legal Aid" />
          </Marquee>
          <Marquee direction="right">
            <VolunteerCard bgImgLink="/lib/images/medical_help.avif" heading="Medical Help" />
            <VolunteerCard bgImgLink="/lib/images/meditation.avif" heading="MindWellness" />
            <VolunteerCard bgImgLink="/lib/images/plant_trees.avif" heading="Planting Trees" />
            <VolunteerCard bgImgLink="/lib/images/save_cows.avif" heading="Saving Cows" />
          </Marquee>
        </div>
        {/* END Of Scrolling Cards */}
        {/* Explore All button */}
        <div className="flex justify-center mt-6">
          <Link href="/what-we-do">
          <button
            type="button"
            className="inline-flex items-center space-x-2 text-sm border-2 font-bold rounded-lg px-6 py-3 leading-6 border-jse-primary-500 bg-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-jse-primary-500 active:bg-jse-primary-400 active:border-jse-primary-300 hover-white"
          >
            Explore All
            <svg
              className="text-jse-primary-500 hover:text-white w-3 h-3 ml-2 transform transition-transform duration-500 hover:rotate-3 hover:scale-150 hover-white"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style>
                {`
                  .hover-white:hover path {
                    stroke: white;
                  }
                `}
              </style>
              <g className="hover-white">
                <path
                  d="M8 3H2.5C2.10218 3 1.72064 3.15804 1.43934 3.43934C1.15804 3.72064 1 4.10218 1 4.5V11.5C1 11.8978 1.15804 12.2794 1.43934 12.5607C1.72064 12.842 2.10218 13 2.5 13H9.5C9.89782 13 10.2794 12.842 10.5607 12.5607C10.842 12.2794 11 11.8978 11 11.5V6M4 10L13 1M13 1H9.5M13 1V4.5"
                  stroke="#d62222"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          </Link>
        </div>
      </div>
      {/* END What We Do Section */}
    </>
  );
}
