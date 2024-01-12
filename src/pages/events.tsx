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
          <Image src="/lib/images/chownki_2024.jpg" alt="Attemp Image" className="rounded-xl object-fit h-full w-full" width={2000} height={2000}></Image>
          {/* content */}
          <div className="grid grid-cols-2">
            {/* left side contetn */}
            <div className="flex flex-col md:mr-0 mr-2  md:gap-8 gap-4">
              {/* title and date */}
              <div className="flex flex-col md:gap-4 gap-2">
                <h1 className="font-serif text-2xl md:text-4xl font-semibold">दूसरी भव्य वार्षिक चौंकी - Second Grand Annual Chownki</h1>
                <p className="text-lg font-normal">20 and 21 Jan 2024</p>
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
              <p className="md:text-base test-sm  mb-4">Celebrating the birth anniversary of Smt. Kailashi Jolly Jhanji Ji, Join us on the 20th and 21st of January, 2024 in the second glorious annual Balaji and Khatushyam Ji ki Chownki. Sobha Yatra starts on 20th January 2024 at 2 PM and will move through New Lakshmipura, Hoshiarpur Road. The Balaji and Khatushaym Ji ki Chownki starts on 21st January 2024 at 6 PM.  Join us to chant the name of God along with Kumar Gourav. Also don&apos;t miss the prasad. Jolly&apos;s Soothing Era Foundation is looking forward to your participation in the event. Jai Shree Ram.</p>
            </div>
          </div>

          {/* help us organisiong event */}
          <div className="flex flex-col gap-8">
            <HeadingTitle
              title="Help us organizing the event"
              subtitle="Helping us would encourage more people to join us"
              className="mx-auto text-center font-black"
            />
            <div className="flex items-center  justify-center gap-16">
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

              {/* donate now button */}
              <Link href="/donate" className="w-fit h-fit flex items-center border text-jse-primary-500 border-jse-primary-500 hover:text-white font-semibold rounded-lg py-2 px-4 hover:bg-jse-primary-400 focus:outline-none focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400">
                Patreon Us
              </Link>
            </div>
          </div>
          <EventForm showPopup={showEventPopup} setShowPopup={setShowEventPopup} />
          <VolunteerForm showPopup={showVolunteerPopup} setShowPopup={setShowVolunteerPopup} />

          {/* other events  */}
          <HeadingTitle title="Past events" className="font-black" />
          <div className="grid  md:grid-cols-2 grid-cols-1  md:gap-10 gap-5">
            <VolunteerCard
              bgImgLink="/lib/images/elderly_care.avif"
              heading="Elderly Care"
              subheading="We enhance elderly care through tailored health services, companionship programs, and community initiatives, ensuring a dignified and enriched life for seniors."
            />
            <VolunteerCard
              bgImgLink="/lib/images/free_edu.avif"
              heading="Free Education"
              subheading="We empower communities through free education, fostering access to knowledge and opportunities for a brighter future."
            />
            <VolunteerCard
              bgImgLink="/lib/images/foodrs10.avif"
              heading="Food @ Rs.10"
              subheading="We addresses hunger by providing affordable food at Rs. 10, ensuring accessibility and sustenance for those in need."
            />
            <VolunteerCard
              bgImgLink="/lib/images/freelegalaid.avif"
              heading="Free Legal Aid"
              subheading="We provide free legal aid to the underprivileged, ensuring access to justice and equality for all."
            />
          </div>
          <div className="flex w-full justify-center">
            <button
              type="button"
              className="inline-flex justify-around items-center space-x-2 text-sm border-2 font-bold rounded-lg px-6 py-3 leading-6 border-jse-primary-500 bg-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-jse-primary-500 active:bg-jse-primary-400 active:border-jse-primary-300 hover-white"
            >
              Load more
            </button>
          </div>

          {/* anonmyus feedback */}
          <div className="flex flex-col gap-5">
            <HeadingTitle title="Anonymous Feedback" subtitle="Fueling Improvement and Growth" className="font-black text-center mx-auto" />
            <div className="mx-auto text-center">
              <label htmlFor="feedback">Share Your Thoughts, suggestions, or ideas Anonymously</label>
              <textarea
                id="feedback"
                className="border md:w-11/12 w-full mt-2 border-gray-400 rounded-lg px-3 py-2"
                placeholder="Write your feedback here"
                rows={4}  // You can specify the number of rows you want to display
              ></textarea>
              <button
                type="button"
                className="inline-flex justify-around items-center space-x-2 text-sm border-2 font-bold rounded-lg px-6 py-3 leading-6 border-jse-primary-500 bg-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-jse-primary-500 active:bg-jse-primary-400 active:border-jse-primary-300 hover-white"
                onClick={() => {
                  // the text in the textarea is already empty then alert the user to write something
                  if ((document.getElementById("feedback") as HTMLInputElement).value == "") {
                    alert("Please write something before submitting");
                    return;
                  }
                  // erase the text in the textarea
                  (document.getElementById("feedback") as HTMLInputElement).value = "";
                  // when the user submits the feedback then alert the user that the feedback has been submitted
                  alert("Your feedback has been submitted");
                }}
              >
                Submit
              </button>
            </div>
          </div>

          <CTA />
        </div>
      </MainLayout>
    </>
  );
}

export default Events;