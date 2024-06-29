import React from "react";
import Image from "next/image";
import MainLayout from "@/layout/MainLayout";
import CTA from "@/components/CTA";
import HeadingTitle from "@/components/common/HeadingTitle";
import VissonMission from "@/components/common/VissonMission";
import FlagBearer from "@/components/common/FlagBearer";
import Story from "@/components/common/Story";

const stories = [
  {
    title: "Our Journey started",
    desc: "The idea of this NGO was given by: Late. Smt. Jolly Jhanji. She loved to help people all around her which encouraged her to go forward with the idea of this NGO. She passed away in a very small age of just 30 yrs but her works made her immortal among all of us, and this website is a project made in the memory of her great works.",
    direction: "left",
    date: "Dec 2018",
  },
  {
    title: "Food site Project",
    desc: "In this project, our site offers hygienic food at just Rs 10, consisting of 4 chapatis and dal sabji, ensuring sufficiency for an average person while minimizing food waste.",
    direction: "right",
    date: "Jan 2019",
  },
  {
    title: "Free Legal Aid",
    desc: "Under this project we have provided 'Free Legal Aid' to those who cannot afford the advocate's high fees. Also we give legal advices and legal consultancy to everyone.",
    direction: "left",
    date: "Nov 2019"
  },
  {
    title: "Food Packets Distribution",
    desc: "We made food packets available for the people who were unable to afford it during the phase of lock down. We distributed these food packets door to door to help senior citizens too.",
    direction: "right",
    date: "July 2020"
  },
  {
    title: "Blood Dontaion and eye checkup camp",
    desc: "We Organized a blood donation camp where many volunteers donated blood for the children suffering from 'Polycythemia'. Along with that we organized an 'Eye Check- up Camp' so that people who couldn't afford the Check-up fees can have a check-up for free.",
    direction: "left",
    date: "July 2020"
  },
  {
    date: "Jan 2021",
    title: "Sanskrit encouragement prize",
    desc: "Recently on 22/01/2021, our NGO declared 3 prizes at Vidya Dham for students who perform well in Sanskrit, encouraging the traditional language. Also, we donated refreshments among students. A momento was given to each student with ethical rules for a lifetime. We donated 50 thousand for school infrastructure.",
  },
]
const AboutUs = () => {
  return (
    <MainLayout headerTransition={false}>
      <>
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 my-10 flex flex-col justify-center">
          <HeadingTitle
            title="About Us"
            subtitle="Get to know the initiative better"
            className="mx-auto text-center font-black"
          />
          <div className="flex flex-col">
            <div className="md:mx-32 mx-4 flex flex-row justify-center">
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.01175 19.7452C4.49175 19.7452 3.23775 19.2322 2.24975 18.2062C1.29975 17.1802 0.824746 15.7362 0.824746 13.8742C0.824746 12.2782 1.16675 10.6822 1.85075 9.08618C2.57275 7.49018 3.50375 5.97018 4.64375 4.52618C5.82175 3.08217 7.07575 1.79017 8.40575 0.650175L9.94475 1.96118C8.53875 3.40517 7.37975 4.81117 6.46775 6.17918C5.59375 7.50918 5.06175 8.83918 4.87175 10.1692C5.06175 10.1312 5.23275 10.1122 5.38475 10.1122C5.57475 10.0742 5.76475 10.0552 5.95475 10.0552C7.28475 10.0552 8.42475 10.5302 9.37475 11.4802C10.3247 12.4302 10.7997 13.5702 10.7997 14.9002C10.7997 16.1922 10.3627 17.3322 9.48875 18.3202C8.61475 19.2702 7.45575 19.7452 6.01175 19.7452ZM17.4117 19.7452C15.8917 19.7452 14.6377 19.2322 13.6497 18.2062C12.6997 17.1802 12.2247 15.7362 12.2247 13.8742C12.2247 12.2782 12.5667 10.6822 13.2507 9.08618C13.9727 7.49018 14.9037 5.97018 16.0437 4.52618C17.2217 3.08217 18.4757 1.79017 19.8057 0.650175L21.3447 1.96118C19.9387 3.40517 18.7797 4.81117 17.8677 6.17918C16.9937 7.50918 16.4617 8.83918 16.2717 10.1692C16.4617 10.1312 16.6327 10.1122 16.7847 10.1122C16.9747 10.0742 17.1647 10.0552 17.3547 10.0552C18.6847 10.0552 19.8247 10.5302 20.7747 11.4802C21.7247 12.4302 22.1997 13.5702 22.1997 14.9002C22.1997 16.1922 21.7627 17.3322 20.8887 18.3202C20.0147 19.2702 18.8557 19.7452 17.4117 19.7452Z"
                  fill="#D62222"
                />
              </svg>
              <h3 className="font-serif md:text-xl text-lg md:w-3/4 w-full text-center py-4">
                Promote equality and humanity because, in the eyes of God, all are one.
              </h3>
              <svg
                className="self-end"
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9883 0.417178C18.5083 0.417178 19.7623 0.930178 20.7503 1.95618C21.7003 2.98218 22.1753 4.42618 22.1753 6.28818C22.1753 7.88418 21.8333 9.48018 21.1493 11.0762C20.4273 12.6722 19.4963 14.1922 18.3563 15.6362C17.1783 17.0802 15.9243 18.3722 14.5943 19.5122L13.0553 18.2012C14.4613 16.7572 15.6203 15.3512 16.5323 13.9832C17.4063 12.6532 17.9383 11.3232 18.1283 9.99318C17.9383 10.0312 17.7673 10.0502 17.6153 10.0502C17.4253 10.0882 17.2353 10.1072 17.0453 10.1072C15.7153 10.1072 14.5753 9.63218 13.6253 8.68218C12.6753 7.73218 12.2003 6.59218 12.2003 5.26218C12.2003 3.97018 12.6373 2.83018 13.5113 1.84218C14.3853 0.892179 15.5443 0.417179 16.9883 0.417178ZM5.58825 0.417179C7.10825 0.417179 8.36225 0.930179 9.35025 1.95618C10.3003 2.98218 10.7753 4.42618 10.7753 6.28818C10.7753 7.88418 10.4333 9.48018 9.74925 11.0762C9.02725 12.6722 8.09625 14.1922 6.95625 15.6362C5.77825 17.0802 4.52425 18.3722 3.19425 19.5122L1.65525 18.2012C3.06125 16.7572 4.22025 15.3512 5.13225 13.9832C6.00625 12.6532 6.53825 11.3232 6.72825 9.99318C6.53825 10.0312 6.36725 10.0502 6.21525 10.0502C6.02525 10.0882 5.83525 10.1072 5.64525 10.1072C4.31525 10.1072 3.17525 9.63218 2.22525 8.68218C1.27525 7.73218 0.80025 6.59218 0.80025 5.26218C0.80025 3.97018 1.23725 2.83018 2.11125 1.84218C2.98525 0.89218 4.14425 0.41718 5.58825 0.417179Z"
                  fill="#D62222"
                />
              </svg>
            </div>
            <div className="text-center my-8">
              <p className="font-bold">- Harsh Jhanji Ji</p>
              <p>Chairman</p>
            </div>
          </div>
        </div>
        <Image src="/lib/images/plantation1.avif" className="relative h-96 w-full object-cover" width={1920} height={1080} alt="plantation" />
        <div className="relative container xl:max-w-7xl mx-auto my-10 flex flex-col items-center justify-center">
          <HeadingTitle title="Our Story" className="mx-auto" />

          <div className="relative w-3/5  py-5">
            {/* Vertical Guide */}
            <div className="w-10 md:w-12 absolute top-10 left-0 md:bottom-52 bottom-96 flex flex-col justify-center lg:left-1/2 lg:-ml-6" aria-hidden="true">
              <div className="mx-auto w-1 grow bg-red-400" />
            </div>
            {/* END Vertical Guide */}

            {/* Timeline */}
            <div className="flex flex-col relative gap-4 pl-10 md:pl-12 lg:pl-0">
              {stories.map((item: any, index: number) => {
                return (
                  <Story title={item.title} desc={item.desc} date={item.date} direction={item.direction} key={index} />
                )
              })}
            </div>
            {/* END Timeline */}
          </div>
        </div>

        <div className="container xl:max-w-7xl mx-auto my-20 flex flex-col justify-center">
          <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-20 px-4">
            <VissonMission />
          </section>
          <HeadingTitle title="The flag bearers" className="mx-auto" />
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="py-4 md:pl-4 md:px-0 px-4">
              <FlagBearer
                name="Harsh Jhanji"
                title="Chairman"
                textSize="text-2xl"
                src="/lib/images/Chairman.jpg"
              />
            </div>
            <div className="grid gap-4 p-4 grid-cols-2 grid-rows-2 mx-auto">
              <FlagBearer name="Vinish Mittu" title="Vice Chairman" src="/lib/images/vice_chairman.png" />
              <FlagBearer name="Om Jhanji" title="Executive Director" src="/lib/images/person_icon.png" />
              <FlagBearer name="Ravinder Chadha" title="IT Head" src="/lib/images/it_head.jpg" />
              <FlagBearer name="Karan Chadha" title="Treasurer" src="/lib/images/treasurer.jpeg" />
            </div>
          </div>
          <CTA />
        </div>
      </>
    </MainLayout>
  );
};

export default AboutUs;
