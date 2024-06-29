import React, { use } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import MainLayout from "@/layout/MainLayout";
import CTA from "@/components/CTA";
import HeadingTitle from "@/components/common/HeadingTitle";
import SubSectionHeader from "@/components/common/SubSectionHeader";
import Podcast_card from "@/components/Community/Podcast_card";
import ArticlesCardFull from "@/components/Community/ArticlesCardFull";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../config/sanity";
import { getArticles, getPodcastLinks } from "../../../api/api";
import Link from "next/link";

const Community = () => {
  const [articleData, setArticleData] = useState<any>([]);
  const [podcastData, setPodcastData] = useState<any>([]);
  const [visibleArticles, setVisibleArticles] = useState<number>(2); 

  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }
  const urlForAudio = (podcast: any) => {
    if (podcast && podcast.audio && podcast.audio.asset && podcast.audio.asset._ref) {
      const audioFilename = podcast.audio.asset._ref.split("-")[1];
      const baseUrl = "https://your-base-url/";
      return baseUrl + audioFilename;
    } else {
      return ''; 
    }
  };



  useEffect(() => {
    getPodcastLinks()
      .then((res) => {
        console.log("podcasts---->", res);
        setPodcastData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getArticles()
      .then((res) => {
        // console.log("articles---->", res);
        setArticleData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 2);
    if (visibleArticles >= articleData.length) {
      setVisibleArticles(2); // Reset to the initial value (or any other appropriate value)
    }
  };

  return (
    <MainLayout headerTransition={false}>
      <div className="w-full bg-jse-neutral-500">
        <div className="relative">
          <Image src="/lib/images/plantation1.avif" className="h-64 md:h-96 w-full object-cover" width={1920} height={1080} alt="Community Banner" />
          <div className="absolute inset-0 bg-gradient-to-t from-jse-neutral-500 to-transparent opacity-100"></div>
        </div>
        <div className="container mx-auto px-4 md:px-16 py-4  flex flex-col items-center">
          <HeadingTitle title="Join the Soothing Community" className="text-white text-center mx-auto " subtitle="Checkout what’s on offer in our community" />
          <div className="md:my-16 my-0 w-full">
            <SubSectionHeader title="Weekly Podcasts" />
            <div className="flex flex-col overflow-x-scroll justify-start md:gap-8 gap-4 items-center w-full md:flex-row my-4">
              {podcastData && podcastData.map((item: any, index: number) => {
                return (
                  <Podcast_card
                    key={index}
                    heading={item.title}
                    id={item._id}
                    audioLink={urlForAudio(item.audio.asset._ref)} // Pass the audioLink prop here
                  />
                );
              })}

            </div>

            <SubSectionHeader title="New Podcasts" />
            <div className="flex flex-col justify-start md:gap-8 gap-4 items-center w-full md:flex-row my-4">
              {podcastData && podcastData.map((item: any, index: number) => {
                return (
                  <Podcast_card
                    key={index}
                    heading={item.title}
                    id={item._id}
                    audioLink={urlForAudio(item.audio.asset._ref)} // Pass the audioLink prop here
                  />
                );
              })}

            </div>

            <SubSectionHeader title="Sunday Articles" />
            <div className="grid md:grid-cols-2 grid-cols-1 my-8  md:gap-16 gap-8">
              {articleData.slice(visibleArticles-2, visibleArticles).map((item: any, index: number) => (
                <Link key={index} href={`/community/article/${item._id}`}>
                  <ArticlesCardFull
                    bgImgLink={urlFor(item.mainImage).url()}
                    heading={item.title}
                    subheading={item.body[0].children[0].text}
                    link="/community/article"
                  />
                </Link>
              ))}
            </div>
            {visibleArticles  && (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="inline-flex justify-around items-center space-x-2 text-sm border-2 font-bold rounded-lg px-6 py-3 leading-6 border-white bg-jse-neutral-500 hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-white active:bg-jse-primary-400 active:border-jse-primary-300 hover-white"
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <CTA />
    </MainLayout>
  );
};

export default Community;