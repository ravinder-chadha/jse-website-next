import CTA from "@/components/CTA";
import { useState } from "react";
import EventForm from "@/components/UpcomingEvents/EventForm";
import VolunteerCard from "@/components/WhatWeDo/VolunteerCard";
import HeadingTitle from "@/components/common/HeadingTitle";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import VolunteerForm from "@/components/UpcomingEvents/VolunteerForm";

const Events = () => {

  const [showVolunteerPopup, setShowVolunteerPopup] = useState(false);
  const [showEventPopup, setShowEventPopup] = useState(false);

  function setVolunteerDisplay() {
    setShowVolunteerPopup(true);
  }
  console.log(showVolunteerPopup);
  function setEventDisplay() {
    setShowEventPopup(true);
  }
  console.log(showEventPopup);

  return (
    <>
      <MainLayout headerTransition={false}>
        <div className="md:space-y-16 space-y-8 container xl:max-w-7xl mx-auto px-4 lg:px-8 md:my-10 my-5 flex flex-col justify-center">
          <HeadingTitle
            title="Events"
            subtitle="Get to know the initiative better"
            className="mx-auto text-center font-black"
          />
          <Image src="/lib/images/free_edu.avif" alt="Attemp Image" className="rounded-xl object-cover h-72 w-full" width={1000} height={1000}></Image>
          {/* content */}
          <div className="grid grid-cols-2">
            {/* left side contetn */}
            <div className="flex flex-col md:mr-0 mr-2  md:gap-8 gap-4">
              {/* title and date */}
              <div className="flex flex-col md:gap-4 gap-2">
                <h1 className="font-serif text-2xl md:text-4xl font-semibold">  6th Mega Blood Donation and eye checkup Camp</h1>
                <p className="text-lg font-normal">4th oct 2023</p>
              </div>
              {/* register button */}
              <button
                onClick={setEventDisplay}
                className="w-fit h-fit flex items-center  bg-jse-primary-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400"
              >
                Register
                <svg
                  className="text-white w-3 inline ml-3 transform transition-transform duration-500 hover:rotate-3 hover:scale-150"
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
              </button>
            </div>

            {/* paragraph content */}
            <div className="flex flex-col justify-start">
              <p className="md:text-base test-sm  mb-4">Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                faucibus tempus pellentesque fermentum Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                faucibus tempus pellentesque fermentum
                Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                faucibus tempus pellentesque fermentum Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                faucibus tempus pellentesque fermentum</p>
            </div>
          </div>

          {/* help us organisiong event */}
          <div className="flex flex-col gap-8">
            <HeadingTitle
              title="Help us organizing the event"
              subtitle="Helping us would encourage more people to join us"
              className="mx-auto text-center font-black"
            />
            <div className="flex items-center  justify-between gap-16">
              {/* register button */}
              <button
                onClick={setVolunteerDisplay}
                className="w-fit h-fit flex items-center  bg-jse-primary-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400"
              >
                Volunteer Event
                <svg className="text-white w-3 inline ml-3 transform transition-transform duration-500 hover:rotate-3 hover:scale-150" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3H2.5C2.10218 3 1.72064 3.15804 1.43934 3.43934C1.15804 3.72064 1 4.10218 1 4.5V11.5C1 11.8978 1.15804 12.2794 1.43934 12.5607C1.72064 12.842 2.10218 13 2.5 13H9.5C9.89782 13 10.2794 12.842 10.5607 12.5607C10.842 12.2794 11 11.8978 11 11.5V6M4 10L13 1M13 1H9.5M13 1V4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <Link href="/donate" className="w-fit h-fit flex items-center border text-jse-primary-500 border-jse-primary-500 hover:text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400">
                Donate Us
              </Link>

            </div>
          </div>
          <EventForm showPopup={showEventPopup} setShowPopup={setShowEventPopup}/>
          <VolunteerForm showPopup={showVolunteerPopup} setShowPopup={setShowVolunteerPopup}/>


          {/* other events  */}
          <HeadingTitle title="past events" className="font-black" />
          <div className="grid grid-cols-2 md:gap-10 gap-5">
            <VolunteerCard
              bgImgLink="/lib/images/elderly_care.avif"
              heading="Elderly Care"
              subheading="Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                            faucibus tempus pellentesque fermentum Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                            faucibus tempus pellentesque fermentum"
            />
            <VolunteerCard
              bgImgLink="/lib/images/free_edu.avif"
              heading="Free Education"
              subheading="Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                            faucibus tempus pellentesque fermentum Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                            faucibus tempus pellentesque fermentum"
            />
            <VolunteerCard
              bgImgLink="/lib/images/foodrs10.avif"
              heading="Food @ Rs.10"
              subheading="Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                            faucibus tempus pellentesque fermentum Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                            faucibus tempus pellentesque fermentum"
            />
            <VolunteerCard
              bgImgLink="/lib/images/freelegalaid.avif"
              heading="Free Legal Aid"
              subheading="Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                            faucibus tempus pellentesque fermentum Lorem ipsum dolor sit amet consectetur. Amet cras dignissim
                            faucibus tempus pellentesque fermentum"
            />
          </div>
          <CTA />
        </div>
      </MainLayout>
    </>
  );
}

export default Events;