import CTA from "@/components/CTA";
import Stats from "@/components/Stats";
import VolunteerCard from "@/components/WhatWeDo/VolunteerCard";
import Attempt from "@/components/common/Attempt";
import FlagBearer from "@/components/common/FlagBearer";
import HeadingTitle from "@/components/common/HeadingTitle";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import React from "react";

type Props = {};

const SingleAttempt = ({ }: Props) => {
  return (
    <MainLayout headerTransition={false}>
      <>
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 my-10 flex flex-col justify-center">
          <Attempt
            ImageSrc="/lib/images/free_edu.avif"
            Title="Helping the poor children with quality education"
            SubTitle="82,000 children benefitted"
            Description="Lorem ipsum dolor sit amet consectetur. A arcu non diam accumsan aenean. Quis justo ullamcorper elit urna vulputate sit. Luctus maecenas cum platea pulvinar tortor auctor. Nulla et maecenas vitae commodo nisi arcu. Ultrices vestibulum augue pharetra penatibus. Euismod eu non aliquam pellentesque.
Ultrices nisi lacus quisque nibh lectus nam at. Amet iaculis tellus sagittis tortor arcu vel rutrum. Purus sit bibendum urna morbi mi donec diam mi nibh. Tortor aenean platea pharetra nibh felis sodales nisi arcu. Blandit felis adipiscing et elit dis dolor sed. Elementum non netus maecenas cursus proin elit non turpis. Arcu a enim odio aliquam. Commodo matt"
          />
          <Stats title1="89" title2="2k+" title3="$67k" subtitle1="volunteers" subtitle2="Children Benefitted" subtitle3="Donations" />
          <HeadingTitle
            title="Prominent Contributors"
            className="mx-auto text-center font-black"
          />
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-5">
            <FlagBearer name="Harsh Jhanji " title="Chairman" />
            <FlagBearer name="Harsh Jhanji" title="Chairman" />
            <FlagBearer name="Harsh Jhanji" title="Chairman" />
            <FlagBearer name="Harsh Jhanji" title="Chairman" />
          </div>
          <HeadingTitle
            title="Gallery"
            className="mx-auto text-center font-black"
          />
          <div className="grid md:grid-cols-3  grid-cols-2 md:gap-6 gap-3">
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden md:row-span-2"><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden md:row-span-2"><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden md:row-span-2"><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
            <div className="rounded-lg object-cover overflow-hidden "><Image src="/lib/images/save_cows.avif" className="object-contain" alt="image" width={400} height={400} /></div>
          </div>

          <HeadingTitle title="Other attempts" className="font-black" />
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
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
      </>
    </MainLayout >
  );
};

export default SingleAttempt;
