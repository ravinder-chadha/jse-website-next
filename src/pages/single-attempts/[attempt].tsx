import CTA from "@/components/CTA";
import Stats from "@/components/Stats";
import VolunteerCard from "@/components/WhatWeDo/VolunteerCard";
import Attempt from "@/components/common/Attempt";
import FlagBearer from "@/components/common/FlagBearer";
import HeadingTitle from "@/components/common/HeadingTitle";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getStats } from "../../../api/api";
type Props = {};

const SingleAttempt = ({ }: Props) => {
  const [statsData, setStatsData] = useState<any>(null);

  useEffect(() => {
    getStats()
      .then((res) => {
        console.log("events---->", res);
        setStatsData(res);
        console.log("statsData---->", statsData);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <MainLayout headerTransition={false}>
      <>
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 my-10 flex flex-col justify-center">
          <Attempt
            ImageSrc="/lib/images/free_edu.avif"
            Title="Helping the poor children with quality education"
            SubTitle="82,000 children benefitted"
            Description="Jolly&apos;s Soothing Era, our dedicated NGO, is committed to making a positive impact on the lives of underprivileged children through quality education. We actively support these youngsters by donating old books, providing essential funding, and facilitating their educational journey. Our initiative extends beyond mere assistance, as we ensure access to new books and cover school fees, fostering an environment where learning is not limited by financial constraints. Operating across multiple schools, our efforts aim to maximize the reach of our assistance, empowering a greater number of children to break the cycle of poverty through education."
          />
          <Stats title1={statsData[0]?.volunteerCount} title2={statsData[0]?.childrenBenifitedCount} title3={statsData[0]?.donatorsCount} subtitle1="volunteers" subtitle2="Children Benefitted" subtitle3="Donaters" />
          <HeadingTitle
            title="Prominent Contributors"
            className="mx-auto text-center font-black"
          />
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-5">
            <FlagBearer name="Harsh Jhanji " title="Chairman" src="/lib/images/Chairman.jpg" />
            <FlagBearer name="Vinish Mittu" title="Vice Chairman" src="/lib/images/vice_chairman.png" />
            <FlagBearer name="Om Jhanji" title="Executive Director" src="/lib/images/person_icon.png" />
            <FlagBearer name="Ravinder Chadha" title="IT Head" src="/lib/images/it_head.jpg" />
          </div>
          <HeadingTitle
            title="Gallery"
            className="mx-auto text-center font-black"
          />
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3">
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
          </div>

          <HeadingTitle title="Other attempts" className="font-black" />
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
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
          <CTA />
        </div>
      </>
    </MainLayout >
  );
};

export default SingleAttempt;
