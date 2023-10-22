import HeadingTitle from "../common/HeadingTitle";
import EventCard from "./EventCard";
import { getEvents } from "../../../api/api";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../config/sanity";

export default function UpcomingEvents() {
  const [data, setData] = useState<any>([]);
  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }

  useEffect(() => {
    getEvents()
      .then((res) => {
        console.log("events---->", res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* Blog List Section: In Grid */}
      <>
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 my-10">
          <HeadingTitle title="Upcoming Events" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
            {data.map((item: any, index: number) => {
              return (
                <EventCard
                  imglink={urlFor(item.mainImage).url()}
                  heading={item.title}
                  date={item.eventDate}
                  desc={item.body}
                  location={item.location}
                  id={item._id}
                />
              );
            })}
          </div>
          {/* END Blog Posts */}
          {/* Load More Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="inline-flex justify-around items-center space-x-2 text-sm border-2 font-bold rounded-lg px-6 py-3 leading-6 border-jse-primary-500 bg-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-jse-primary-500 active:bg-jse-primary-400 active:border-jse-primary-300 hover-white"
            >
              Load more
            </button>
          </div>
        </div>
      </>
      {/* END Blog List Section: In Grid */}
    </>
  );
}
