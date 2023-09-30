import React from "react";
import { useState } from "react";
import Image from "next/image";
import MainLayout from "@/layout/MainLayout";
import CTA from "@/components/CTA";
import HeadingTitle from "@/components/common/HeadingTitle";
import SubSectionHeader from "@/components/common/SubSectionHeader";
import SundayArticles from "@/components/Community/Articles";
import articleText from "../components/Community/articleText.json"
import Podcast_card from "@/components/Community/Podcast_card";
import ArticlesCardFull from "@/components/Community/ArticlesCardFull";

const Community = () => {

  return (
    <MainLayout headerTransition={false}>
      <>
        <div className="w-full bg-jse-neutral-500">
          <div className="relative">
            <Image src="/lib/images/plantation1.avif" className="h-64 md:h-96 w-full object-cover" width={1920} height={1080} alt="Community Banner" />
            <div className="absolute inset-0 bg-gradient-to-t from-jse-neutral-500 to-transparent opacity-100"></div>
          </div>
          <div className="container mx-auto px-4 md:px-16 py-4  flex flex-col items-center">
            <HeadingTitle title="Join the Soothing Community" className="text-white text-center mx-auto " subtitle="Checkout what’s on offer in our community" />
            <div className="md:my-16 my-0 w-full">
              <SubSectionHeader title="Weekly Podcasts" />
              <div className="flex flex-col justify-start md:gap-8 gap-4 items-center w-full md:flex-row my-4">
                <Podcast_card />
                <Podcast_card />
                <Podcast_card />
                <Podcast_card />
                <Podcast_card />

              </div>

              <SubSectionHeader title="New Podcasts" />
              <div className="flex flex-col justify-start md:gap-8 gap-4 items-center w-full md:flex-row my-4">
                <Podcast_card />
                <Podcast_card />
                <Podcast_card />
                <Podcast_card />
                <Podcast_card />
              </div>
              <SubSectionHeader title="Sunday Articles" />
              <div className="grid md:grid-cols-2 grid-cols-1 my-8  md:gap-16 gap-8">
                <ArticlesCardFull bgImgLink={articleText.article1.img} heading={articleText.article1.title} subheading={articleText.article1.content} />
                <ArticlesCardFull bgImgLink={articleText.article1.img} heading={articleText.article1.title} subheading={articleText.article1.content} />
                <ArticlesCardFull bgImgLink={articleText.article1.img} heading={articleText.article1.title} subheading={articleText.article1.content} />
                <ArticlesCardFull bgImgLink={articleText.article2.img} heading={articleText.article2.title} subheading={articleText.article2.content} />
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="inline-flex justify-around items-center space-x-2 text-sm border-2 font-bold rounded-lg px-6 py-3 leading-6 border-white bg-jse-neutral-500 hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-white active:bg-jse-primary-400 active:border-jse-primary-300 hover-white"
                >
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
        <CTA />
      </>
    </MainLayout>
  );
};

export default Community;
