// get the query id param from the url and check if there's any event from the getEvent api call that matches the id param
import CTA from "@/components/CTA";
import EventForm from "@/components/UpcomingEvents/EventForm";
import VolunteerCard from "@/components/WhatWeDo/VolunteerCard";
import HeadingTitle from "@/components/common/HeadingTitle";
import VolunteerForm from "@/components/UpcomingEvents/VolunteerForm";

import MainLayout from "@/layout/MainLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { getEvents } from "../../../api/api";
import { client } from "./../../../config/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";


export default function Events() {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);

  const [data, setData] = useState<any>([]);
  const [eventsToShow, setEventsToShow] = useState(2);
  const [showVolunteerPopup, setShowVolunteerPopup] = useState(false);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  const handleLoadMore = () => {
    setEventsToShow((prev) => {
      const nextValue = prev + 2;

      // Reset to 2 when all items are shown
      return nextValue >= data.length ? 2 : nextValue;
    });
  };

  function urlFor(source: any) {
    return builder.image(source);
  }

  function setVolunteerDisplay() {
    setShowVolunteerPopup(true);
  }

  function setEventDisplay() {
    setShowEventPopup(true);
  }


  const builder = imageUrlBuilder(client);

  useEffect(() => {
    getEvents()
      .then((res) => {
        console.log("events---->", res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []);

  const formatDate = (date: any) => {
    const d = new Date(date);
    // format : 20th January 2024
    return `${d.getDate()}th ${d.toLocaleString("default", { month: "long" })} ${d.getFullYear()}`;
  };

  const event = data && data.find((article: any) => article._id === id);

  if (loading) {
    // Display a loading indicator while data is being fetched
    return (
      <>
        <MainLayout>
          <div className="flex flex-col items-center justify-center w-full h-screen">
            <p className="text-lg font-semibold">Loading...</p>
          </div>
        </MainLayout>
      </>
    );
  }
  if (!event) {
    return (
      <>
        <MainLayout>
          <div className="flex flex-col items-center justify-center w-full h-screen">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-lg font-semibold">Page not found</p>
            <Link href="/">
              <div className="text-lg font-semibold text-jse-primary-500 hover:text-jse-primary-400">Go back to home</div>
            </Link>
          </div>
        </MainLayout>
      </>
    );
  }



  return (
    <>
      <MainLayout>
        <div className="md:space-y-16 space-y-8 container xl:max-w-7xl mx-auto px-4 lg:px-8 md:my-10 my-5 flex flex-col justify-center">
          <HeadingTitle
            title="Events"
            subtitle="Get to know the initiative better"
            className="mx-auto text-center font-black"
          />
          <Image src={event && urlFor(event.mainImage).url()} alt="Attemp Image" className="rounded-xl object-fit h-full w-full" width={2000} height={2000}></Image>
          {/* content */}
          <div className="grid grid-cols-2">
            {/* left side contetn */}
            <div className="flex flex-col md:mr-0 mr-2  md:gap-8 gap-4">
              {/* title and date */}
              <div className="flex flex-col md:gap-4 gap-2">
                <h1 className="font-serif text-2xl mr-3 md:text-4xl font-semibold">{event && event.title}</h1>
                <p className="text-lg font-normal">{event && formatDate(event.eventDate)} </p>
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
              <p className="md:text-base test-sm  mb-4">{event.body[0].children[0].text}</p>
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

            {/* slice the item which is currently showing , also show only 2 items at a time*/}
            {data.filter((item: any) => item._id !== id).slice(eventsToShow-2, eventsToShow).map((item: any, index: number) => {
                return (
                  <Link href={`/events/${item._id}`} key={index}>
                    <VolunteerCard
                      key={index}
                      bgImgLink={urlFor(item.mainImage).url()}
                      heading={item.title}
                      subheading={item.body[0].children[0].text}
                    />
                  </Link>
                );
              })}
          </div>

          {/* Load More Button */}
          {eventsToShow && (
            <div className="flex w-full justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="inline-flex justify-around items-center space-x-2 text-sm border-2 font-bold rounded-lg px-6 py-3 leading-6 border-jse-primary-500 bg-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-jse-primary-500 active:bg-jse-primary-400 active:border-jse-primary-300 hover-white"
              >
                Load more
              </button>
            </div>
          )}
          {/* load more button */}

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
          {/* anonmyus feedback */}


          <CTA />
        </div>
      </MainLayout>
    </>
  );
}
